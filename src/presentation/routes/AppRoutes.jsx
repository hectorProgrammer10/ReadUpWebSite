import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import PrivacyNotice from '../components/PrivacyNotice';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/privacidad" element={<PrivacyNotice></PrivacyNotice>}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;