import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/Default/DefaultLayout';
import { lazy } from 'react';
import App from './App';

const HomeRoute = lazy(() => import('@/routes/Home/HomeRoute.tsx'));
const MailRoute = lazy(() => import('@/routes/Mail/MailRoute.tsx'));
const AuthRoute = lazy(() => import('@/routes/Auth/AuthRoute.tsx'));
// import HomeRoute from './routes/Home/HomeRoute.tsx';
// import MailRoute from './routes/Mail/MailRoute.tsx';

// import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<App>
				<DefaultLayout />
			</App>
		),
		children: [
			{
				path: '',
				index: true,
				// lazy: async () => await import('./routes/Home/HomeRoute.tsx'),
				/* async lazy() {
					const HomeRoute = await import('./routes/Home/HomeRoute.tsx');

					return HomeRoute;
				}, */
				/* element: (
					<DefaultLayout />
						<HomeRoute />
					</DefaultLayout>
				), */
				// element: <DefaultLayout />,
				element: <HomeRoute />,

				// children: <HomeRoute />,
			},

			{
				path: 'mail/:id',
				/* async lazy() {
					const MailRoute = await import('./routes/Mail/MailRoute.tsx');

					return MailRoute;
				}, */
				// lazy: async () => await import('./routes/Mail/MailRoute.tsx'),
				/* 	element: (
					<DefaultLayout>
						<MailRoute />
					</DefaultLayout>
				), */
				element: <MailRoute />,
			},
		],
	},
	{
		path: '/auth',
		element: (
			<App>
				<AuthRoute />
			</App>
		),
	},
]);
