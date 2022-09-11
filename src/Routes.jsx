import { Route, Routes as RouterRoutes, useLocation } from 'react-router-dom';

import Create from './pages/Create';
import Home from './pages/Home';
import Update from './pages/Update';

const Routes = () => {
  const location = useLocation();
  return (
    <RouterRoutes location={location} key={location.key}>
      <Route index element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/:id" element={<Update />} />
    </RouterRoutes>
  );
};

export default Routes;
