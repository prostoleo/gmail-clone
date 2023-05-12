import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar/Sidebar';
import SendEmail from '@/components/Email/SendEmail/SendEmail';

import { selectSendMessageIsOpen } from '@/store/mail/mailSlice';

import styles from './DefaultLayout.module.scss';
import './default.css';

const DefaultLayout = () => {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

	return (
		<>
			<Header />
			<div className={styles.appBody}>
				<Sidebar />
				<Suspense fallback={<p>loading..</p>}>
					<Outlet />
				</Suspense>
			</div>

			{sendMessageIsOpen && <SendEmail />}
		</>
	);
};

export default DefaultLayout;
