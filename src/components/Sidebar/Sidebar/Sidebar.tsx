import type { FC } from 'react';

import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { Button, IconButton } from '@mui/material';

import styles from './Sidebar.module.scss';
import SidebarOption from '../SidebarOption/SidebarOption';
import { openSendMessage } from '@/store/mail/mailSlice';
import { useDispatch } from 'react-redux';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
	const dispatch = useDispatch();

	function handleCompose() {
		dispatch(openSendMessage());
	}

	return (
		<aside className={styles.sidebar}>
			<Button
				onClick={handleCompose}
				className={styles.sidebarCompose}
				startIcon={<AddIcon fontSize="large" />}
			>
				Compose
			</Button>

			<div className={styles.sidebarOptions}>
				<SidebarOption
					Icon={InboxIcon}
					link="#"
					title="Inbox"
					number={54}
					selected={true}
				/>
				<SidebarOption Icon={StarIcon} link="#" title="Starred" number={54} />
				<SidebarOption
					Icon={AccessTimeIcon}
					link="#"
					title="Snoozed"
					number={54}
				/>
				<SidebarOption
					Icon={LabelImportantIcon}
					link="#"
					title="Important"
					number={54}
				/>

				<SidebarOption Icon={NearMeIcon} link="#" title="Sent" number={54} />
				<SidebarOption Icon={NoteIcon} link="#" title="Drafts" number={54} />
				<SidebarOption
					Icon={ExpandMoreIcon}
					link="#"
					title="More"
					number={54}
				/>
			</div>

			<div className={styles.sidebarFooter}>
				<div className={styles.sidebarFooterIcons}>
					<IconButton>
						<PersonIcon />
					</IconButton>
					<IconButton>
						<DuoIcon />
					</IconButton>
					<IconButton>
						<PhoneIcon />
					</IconButton>
				</div>
			</div>
		</aside>
	);
};
export default Sidebar;
