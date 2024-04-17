import { useCallback, useEffect, useMemo, useState } from "react";
// import { Outlet } from 'react-router-dom';
import { useTheme } from "../../components/theme-provider/ThemeProvider";
import useToggle from "../../utils/hooks/useToggle";
import clsx from "clsx";

import { DARK, LIGHT } from "../../utils/constantes";

import TourItem from "../../components/tour-item/TourItem";
// import TourFormik from '../../components/tourFormik/TourFormik';
import TourForm from "../../components/tourForm/TourForm";

import { fetchTours } from "../../api/tours";

import "./Tours.scss";

const Tours = () => {
  const { isOpen, open, close } = useToggle();
  const { theme } = useTheme();

  const [loading, setloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const loadTourWithQuery = useCallback(async (value) => {
    try {
      setTours([]);
      setloading(true);
      const resData = await fetchTours(value);
      setTours(resData);
    } catch (error) {
      setIsError(true);
    } finally {
      setloading(false);
    }
  }, []);

  useEffect(() => {
    loadTourWithQuery(searchValue);
  }, [searchValue, loadTourWithQuery]);

  const handleChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  // Tour action

  const handleAddTour = (tourItem) => {
    setTours((prevState) => {
      // return new state
      return [...prevState, tourItem];
    });
  };

  const handleDeleteTour = (id) => {
    const nextTours = [...tours];
    const index = nextTours.findIndex((tour) => tour.id === id);
    nextTours.splice(index, 1);
    setTours(nextTours);
  };

    const filteredTours = useMemo(() => {
      return tours.filter((tour) => {
        const tourName = tour.name ? tour.name.toLowerCase() : "";
        return tourName.includes(searchValue.toLowerCase());
      });
    }, [searchValue, tours]);

//   const filteredTours = useMemo(
//     () =>
//       tours.filter((tour) =>
//         tour.name.toLowerCase().includes(searchValue?.toLowerCase())
//       ),
//     [searchValue, tours]
//   );

  return (
    <main
      className={clsx("tours-page", {
        light: theme === LIGHT,
        dark: theme === DARK,
      })}
    >
      <div className="tours-page-top">
        <h4>Tours Page</h4>

        <input
          type="text"
          value={searchValue}
          placeholder="Search..."
          onChange={handleChangeSearch}
        />

        <button className="btn secondary" onClick={open}>
          Add tour
        </button>
      </div>

      {/* <TourFormik visible={isOpen} onClose={handleCloseModal} onAddTour={handleAddTour} /> */}
      <TourForm visible={isOpen} onClose={close} onAddTour={handleAddTour} />

      {loading && <p>Loading data, please wait...</p>}
      {isError && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}

      <ul className="tours-list">
        {filteredTours.length > 0 && (
          <>
            {filteredTours.map((tour) => (
              <TourItem key={tour.id} {...tour} onDelete={handleDeleteTour} />
            ))}
          </>
        )}
      </ul>
    </main>
  );
};

export default Tours;
