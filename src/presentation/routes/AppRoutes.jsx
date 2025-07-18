import { BrowserRouter, Routes, Route } from 'react-router-dom';

//--------
import Index from '../pages/Index';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivacyNotice from '../components/PrivacyNotice';
//-----------

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacidad" element={<PrivacyNotice></PrivacyNotice>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;