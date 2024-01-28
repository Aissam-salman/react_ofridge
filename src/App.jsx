import { RouterProvider, Link, createBrowserRouter } from 'react-router-dom';
import { Search } from './pages/Search.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div> Page Accueil
      <nav>
        <Link to="/search">search</Link>
      </nav>
    </div>
  },
  {
    path: '/search',
    element: <Search />
  }
]);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
