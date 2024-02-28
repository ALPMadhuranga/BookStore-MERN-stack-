import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import SignIn from './pages/SignIn';
import SignUp from './pages/SingUp';
import RootLayout from './components/layouts/RootLayout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Route>
      <Route path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
    </Routes>
  );
};

export default App;