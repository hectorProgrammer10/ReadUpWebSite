import { BrowserRouter, Routes, Route } from 'react-router-dom';

//--------
import Index from '../pages/Index';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import PrivacyNotice from '../components/PrivacyNotice';
import Admin from '../pages/Admin';
import UsuariosPredic from '../pages/UsuariosPredic';
//-----------

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacidad" element={<PrivacyNotice></PrivacyNotice>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/admin' element={<Admin></Admin>}></Route>
      <Route path='/usuariosview' element={<UsuariosPredic></UsuariosPredic>}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;