import 'bootstrap/dist/js/bootstrap';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import NotFound from './components/not-found/NotFound';
import PagesList from './components/pages-list/PagesList';
import PostsList from './components/posts-list/PostsList';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Routes>
        
          <Route path="/" element={<Outlet />} >
            <Route index element={<PostsList />} />
            <Route path="/categories/:categoryId/posts/" element={<PostsList />} />
            <Route path="/pages/:slug" element={<PagesList showPages={true}/>} />
          </Route>

          <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
