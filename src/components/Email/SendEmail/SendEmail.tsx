import type { FC } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import styles from './SendEmail.module.scss';
import { Close as CloseIcon } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '@/store/mail/mailSlice';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { addEmail } from '@/services/firebase';
import { useMutationAddEmail, useMailData } from '@/hooks/data/useMailData';

interface SendEmailProps {}

export interface iSendEmail {
	to: string;
	subject: string;
	message: string;
}

const SendEmail: FC<SendEmailProps> = ({}) => {
	const { mutationAddEmail } = useMailData();

	const dispatch = useDispatch();

	const {
		handleSubmit,
		register: sendMessage,
		formState: { errors },
	} = useForm<iSendEmail>();

	const onSubmit: SubmitHandler<iSendEmail> = (formData) => {
		// useMutationAddEmail().mutate(formData);
		mutationAddEmail.mutate(formData);
		dispatch(closeSendMessage());
	};

	const closeSendMail = () => dispatch(closeSendMessage());

	return (
		<>
			<div className={styles.sendEmail}>
				<header className={styles.sendEmail__header}>
					<span className={styles.sendEmail__headerTitle}>New Message</span>
					<IconButton
						className={styles.sendEmail__headerBtn}
						onClick={closeSendMail}
					>
						<CloseIcon />
					</IconButton>
				</header>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.sendEmail__body}>
						<input
							type="email"
							className={styles.sendEmail__to}
							placeholder="To"
							{...sendMessage('to', {
								// required: 'Required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'invalid email address',
								},
							})}
						/>
						{errors.to && <small>{errors.to.message}</small>}
						<input
							type="text"
							className={styles.sendEmail__subject}
							placeholder="Subject"
							{...sendMessage('subject', {
								required: 'Required',
								// validate: value => value !== "admin" || "Nice try!"
								minLength: 3,
							})}
						/>
						{errors.subject && <small>{errors.subject.message}</small>}
						<textarea
							id=""
							rows={7}
							className={styles.sendEmail__messsage}
							placeholder="Message"
							{...sendMessage('message', {
								// validate: value => value !== "admin" || "Nice try!"
								minLength: 3,
							})}
						></textarea>
						{errors.message && <small>{errors.message.message}</small>}
					</div>
					<footer className={styles.sendEmail__footer}>
						{/* <button className={styles.sendEmail__footerBtn}>Submit</button> */}
						<Button
							className={styles.sendEmail__footerBtn}
							variant="contained"
							color="primary"
							type="submit"
						>
							Submit
						</Button>
					</footer>
				</form>
			</div>
		</>
	);
};
export default SendEmail;
