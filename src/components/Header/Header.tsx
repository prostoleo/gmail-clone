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

const Header = () => {
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
					<img src="/gmail.svg" alt="" />
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
				<Avatar />
			</div>
		</header>
	);
};
export default Header;
