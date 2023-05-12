import React from 'react';
// import { lazy } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
// import DefaultLayout from './layouts/Default/DefaultLayout.tsx';

import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from '@tanstack/react-query';

import { router } from '@/router.tsx';
import { store } from './store';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</ReduxProvider>
	</React.StrictMode>
);
