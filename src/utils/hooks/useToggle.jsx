import { useState } from 'react';

const useToggle = (initialValue = false) => {
	const [isOpen, setIsOpen] = useState(initialValue);

	const open = () => {
		setIsOpen(true);
	};
	const close = () => {
		setIsOpen(false);
	};
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return { isOpen, open, close, toggle };
};

export default useToggle;