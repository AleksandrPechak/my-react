import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import ThemeProvider from './components/theme-provider/ThemeProvider';

import 'modern-normalize';
import './assets/common.scss';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	<ThemeProvider>
		<App />
	</ThemeProvider>
	</React.StrictMode>
);
