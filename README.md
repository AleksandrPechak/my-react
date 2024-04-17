Lesson-10: Routing-2
useNavigate() & - способи програмної навігації для додатку в залежності від умов.
URLSearchParams - обгортка над Locationб яка повертає обєкт з параметрами та функцію для оновлення.
Хук useLocation - повертає обєкт розташування для поточної url адреси
location.state - обєкт за допомогою якого можна прокидувати дані між різними адресами.
& React.lazy - звязка яка використовується для динамічної загруки компонентів(модулів) в реакт.

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
