import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import Home from './pages/home/Home';
import About from './pages/about/About';
import BookDetails from './components/BookDetails/BookDetails';
import BookList from './components/BookList/BookList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Home/>}>
          <Route path= "about" element = {<About/>} />
          <Route path= "book" element = {<BookList/>} />
          <Route path= "/book/:id" element = {<BookDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

