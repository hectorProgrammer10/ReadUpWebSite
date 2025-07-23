import { BrowserRouter, Routes, Route } from 'react-router-dom';

//--------
import Index from '../pages/Index';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import PrivacyNotice from '../components/PrivacyNotice';
import Quiz from '../pages/Quiz';
//-----------

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacidad" element={<PrivacyNotice></PrivacyNotice>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/quiz' element={<Quiz></Quiz>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;