Lesson-9: React Router
React Router Dom - обгортка над нативними обєктами маршрутизації,яка спрощує написання та структуру коду.
BrowserRouter - компонент яким потрібно обгорнути все дерево компонентів для роботи з бібліотекою.
NavLink & Link - обгортки над тегом які мають свою внутрішню реалізацію, має додатковий клас active для стилізації.
Route - компонент який вирішує чи рендерити контент чи ні. Приймає path та element. Обовязково має бути вкладений в Routes.
useParams() - хук який повертає url параметри із адресної строки.
Outlet - компонент який буде рендерити те що між тегами та співпадає по path.

npx json-server server/db.json

    <!-- const filteredTours = useMemo(
    () => {
    	return tours.filter((tour) => {
    		const tourName = tour.name ? tour.name.toLowerCase() : '';
    		return tourName.includes(searchValue.toLowerCase());
    	});
    },
    [searchValue, tours]

); -->
