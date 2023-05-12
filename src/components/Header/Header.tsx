import type { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, Avatar } from '@mui/material';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}: HeaderProps) => {
	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<IconButton>
					<MenuIcon />
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
				<SearchIcon />
				<input type="text" placeholder="Search mail" />
				<ArrowDropDownIcon className={styles.headerInputCaret} />
			</div>
			<div className={styles.headerRight}>
				<IconButton>
					<AppsIcon />
				</IconButton>
				<IconButton>
					<NotificationsIcon />
				</IconButton>
				<Avatar />
			</div>
		</header>
	);
};
export default Header;
