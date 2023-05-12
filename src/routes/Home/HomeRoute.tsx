import type { FC } from 'react';

import { Checkbox, IconButton } from '@mui/material';
import {
	ArrowDropDown,
	ChevronLeft,
	ChevronRight,
	Inbox,
	KeyboardHide,
	LocalOffer,
	MoreVert,
	People,
	Redo,
	Settings,
} from '@mui/icons-material';

import styles from './HomeRoute.module.scss';
// import EmailListItem from '@/components/Email/EmailRow/EmailRow';
import EmailTabsItem from '@/components/Email/EmailTabsItem/EmailTabsItem';
import EmailRow from '@/components/Email/EmailRow/EmailRow';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { fetchEmails } from '@/services/firebase';
import useMailData from '@/hooks/data/useMailData';

interface HomeRouteProps {}

const HomeRoute: FC<HomeRouteProps> = ({}) => {
	const { useGetMails } = useMailData();

	const { isLoading, error, data } = useGetMails();

	if (isLoading) return <p>Loading..</p>;
	if (error) return <p>error - {error.message}</p>;

	return (
		<>
			<div className={styles.emailList}>
				<div className={styles.emailList__settings}>
					<div className={styles.emailList__settingsLeft}>
						<Checkbox />
						<IconButton>
							<ArrowDropDown />
						</IconButton>
						<IconButton>
							<Redo />
						</IconButton>
						<IconButton>
							<MoreVert />
						</IconButton>
					</div>
					<div className={styles.emailList__settingsRight}>
						<IconButton>
							<ChevronLeft />
						</IconButton>
						<IconButton>
							<ChevronRight />
						</IconButton>
						<IconButton>
							<KeyboardHide />
						</IconButton>
						<IconButton>
							<Settings />
						</IconButton>
					</div>
				</div>

				<div className={styles.emailList__tabs}>
					<EmailTabsItem
						Icon={Inbox}
						title="Primary"
						color="red"
						selected={true}
					/>
					<EmailTabsItem Icon={People} title="Social" color="#1a73e8" />
					<EmailTabsItem Icon={LocalOffer} title="Promotions" color="green" />
				</div>

				<div className={styles.emailList__list}>
					{data?.emails.map((email) => (
						<EmailRow
							title={email.to}
							subject={email.subject}
							time={email.date}
							description={email.message}
							id={email.id}
							key={email.id}
						/>
					))}
				</div>
			</div>
		</>
	);
};
export default HomeRoute;
