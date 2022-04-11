import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import VodMain from './pages/VodMain/VodMain';
import Login from './pages/Login/Login';
import WishList from './pages/WishList/WishList';
import LectureList from './pages/LectureList/LectureList';
import LectureDetail from './pages/LectureDetail/LectureDetail';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/VodMain" element={<VodMain />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LectureList" element={<LectureList />} />
        <Route path="/LectureDetail" element={<LectureDetail />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
