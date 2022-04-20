import 'bootstrap/dist/js/bootstrap';
import logo from './logo.svg';
import './App.css';
import PostsList from './components/posts-list/PostsList';
import Header from './components/header/Header';
import CategoriesList from './components/categories-list/CategoriesList';

function App() {
  return (
    <div>
      <Header />
      <PostsList />
      <CategoriesList />
    </div>
  );
}

export default App;
