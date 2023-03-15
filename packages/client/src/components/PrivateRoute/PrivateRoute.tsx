import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { AppRoute } from 'utils/constants';

type PrivateRouteProps = {
  children: any;
};

type Props = FC<PrivateRouteProps>;

const PrivateRoute: Props = ({ children }) => {
  const { user } = useAppSelector(state => state.AUTH);

  return user ? children : <Navigate to={AppRoute.LOGIN} />;
};

export default PrivateRoute;
