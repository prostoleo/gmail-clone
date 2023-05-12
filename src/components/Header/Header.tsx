import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import { IconButton, Avatar } from '@mui/material';
import {
	Apps,
	ArrowDropDown,
	Notifications,
	Search,
	Menu,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';
import useAuth from '@/hooks/useAuth';

const Header = () => {
	const user = useSelector(selectUser);
	const { logoutOfApp } = useAuth();

	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<IconButton>
					<Menu />
				</IconButton>
				<Link
					to={'/'}
					style={{
						cursor: 'pointer',
					}}
				>
					<img src="/gmail.png" alt="" />
				</Link>
			</div>
			<div className={styles.headerMiddle}>
				<Search />
				<input type="text" placeholder="Search mail" />
				<ArrowDropDown className={styles.headerInputCaret} />
			</div>
			<div className={styles.headerRight}>
				<IconButton>
					<Apps />
				</IconButton>
				<IconButton>
					<Notifications />
				</IconButton>
				<button onClick={logoutOfApp}>
					<Avatar src={user?.photoURL} alt={user?.displayName} />
				</button>
			</div>
		</header>
	);
};
export default Header;
