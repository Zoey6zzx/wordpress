import 'bootstrap/dist/js/bootstrap';
import logo from './logo.svg';
import './App.css';
import PostsList from './components/posts-list/PostsList';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <PostsList />
    </div>
  );
}

export default App;
