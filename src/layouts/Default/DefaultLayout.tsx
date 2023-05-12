import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar/Sidebar';

import styles from './DefaultLayout.module.scss';
import './default.css';
import SendEmail from '@/components/Email/SendEmail/SendEmail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '@/store/mail/mailSlice';
import { selectUser } from '@/store/user/userSlice';

interface DefaultLayoutProps {}

const DefaultLayout: FC<DefaultLayoutProps> = ({}) => {
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
