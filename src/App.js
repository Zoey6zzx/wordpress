import 'bootstrap/dist/js/bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import PagesList from './components/pages-list/PagesList';
import PostsList from './components/posts-list/PostsList';

function App() {
  return (
    <div>
      <Home />
      <PagesList />
      {/* <Routes>
        <Route path=":categoryId" element={<PostsList />} >

        </Route>
      </Routes> */}
    </div>

  );
}

export default App;
