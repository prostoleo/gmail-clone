import { useDispatch } from 'react-redux';

import SidebarOption from '../SidebarOption/SidebarOption';
import { openSendMessage } from '@/store/mail/mailSlice';

import styles from './Sidebar.module.scss';

import {
	AccessTime,
	Add,
	Duo,
	ExpandMore,
	Inbox,
	LabelImportant,
	NearMe,
	Note,
	Person,
	Phone,
	Star,
} from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

const Sidebar = () => {
	const dispatch = useDispatch();

	function handleCompose() {
		dispatch(openSendMessage());
	}

	return (
		<aside className={styles.sidebar}>
			<Button
				onClick={handleCompose}
				className={styles.sidebarCompose}
				startIcon={<Add fontSize="large" />}
			>
				Compose
			</Button>

			<div className={styles.sidebarOptions}>
				<SidebarOption
					Icon={Inbox}
					link="#"
					title="Inbox"
					number={54}
					selected={true}
				/>
				<SidebarOption Icon={Star} link="#" title="Starred" number={54} />
				<SidebarOption Icon={AccessTime} link="#" title="Snoozed" number={54} />
				<SidebarOption
					Icon={LabelImportant}
					link="#"
					title="Important"
					number={54}
				/>

				<SidebarOption Icon={NearMe} link="#" title="Sent" number={54} />
				<SidebarOption Icon={Note} link="#" title="Drafts" number={54} />
				<SidebarOption Icon={ExpandMore} link="#" title="More" number={54} />
			</div>

			<div className={styles.sidebarFooter}>
				<div className={styles.sidebarFooterIcons}>
					<IconButton>
						<Person />
					</IconButton>
					<IconButton>
						<Duo />
					</IconButton>
					<IconButton>
						<Phone />
					</IconButton>
				</div>
			</div>
		</aside>
	);
};
export default Sidebar;
