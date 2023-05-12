import type { FC } from 'react';

import { SvgIconComponent } from '@material-ui/icons';

import styles from './SidebarOption.module.scss';

interface SidebarOptionProps {
	Icon: SvgIconComponent;
	title: string;
	number: number;
	selected?: boolean;
	link: string;
}

const SidebarOption: FC<SidebarOptionProps> = ({
	Icon,
	title,
	number,
	selected = false,
	link,
}: SidebarOptionProps) => {
	return (
		<>
			<button
				className={`${styles.sidebarOption} ${selected ? styles.selected : ''}`}
			>
				<Icon />
				<p className={styles.title}>{title}</p>
				<p className={styles.number}>{number}</p>
			</button>
		</>
	);
};
export default SidebarOption;
