import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './store/user/userSlice';
import { useNavigate } from 'react-router';
import useAuth from './hooks/useAuth';

export interface iAppProps {
	children?: ReactNode;
}

const App: FC<iAppProps> = ({ children }: iAppProps) => {
	useAuth();

	return <>{children}</>;
};
export default App;
