import type { FC } from 'react';

import {
	CheckBox,
	StarBorderOutlined,
	LabelImportantOutlined,
} from '@mui/icons-material';

import styles from './EmailRow.module.scss';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { formatDate } from '@/utils/formatters';
import { useDispatch } from 'react-redux';
import { selectMail } from '@/store/mail/mailSlice';

interface EmailRowProps {
	title: string;
	description: string;
	subject: string;
	time: Timestamp;
	id: string;
}

const EmailRow: FC<EmailRowProps> = ({
	title,
	id,
	subject,
	description,
	time,
}: EmailRowProps) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleClick() {
		dispatch(
			selectMail({
				title,
				id,
				subject,
				description,
				time,
			})
		);

		navigate(`/mail/${id}`);
	}

	return (
		<>
			{/* <Link to={`/mail/${id}`}> */}
			<div className={styles.emailRow} onClick={handleClick}>
				<div className={styles.emailRow__options}>
					<CheckBox
						style={
							{
								// padding: '0.5rem',
							}
						}
					/>
					<IconButton>
						<StarBorderOutlined />
					</IconButton>
					<IconButton>
						<LabelImportantOutlined />
					</IconButton>
				</div>
				<h3 className={styles.emailRow__title}>{title}</h3>
				<div className={styles.emailRow__message}>
					<h4>
						{subject}{' '}
						<span className={styles.emailRow__description}>
							- {description}
						</span>
					</h4>
				</div>
				<p className={styles.emailRow__time}>{formatDate(time.toDate())}</p>
			</div>
			{/* </Link> */}
		</>
	);
};
export default EmailRow;
