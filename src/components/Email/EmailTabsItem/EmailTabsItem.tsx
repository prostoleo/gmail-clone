import type { FC } from 'react';

import { SvgIconComponent } from '@mui/icons-material';

import styles from './EmailTabsItem.module.scss';

interface EmailTabsItemProps {
	Icon: SvgIconComponent;
	title: string;
	color: string;
	selected?: boolean;
}

const EmailTabsItem: FC<EmailTabsItemProps> = ({
	Icon,
	title,
	color,
	selected = false,
}: EmailTabsItemProps) => {
	return (
		<>
			<div
				className={`${styles.emailTabsItem} ${selected ? styles.selected : ''}`}
				style={{
					borderBottom: `${selected ? '3px' : '0px'} solid ${color}`,
					color: `${selected ? color : 'inherit'}`,
				}}
			>
				<Icon />
				<p className={styles.title}>{title}</p>
			</div>
		</>
	);
};
export default EmailTabsItem;
