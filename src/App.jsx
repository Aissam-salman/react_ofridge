import { RouterProvider, Link, createBrowserRouter } from 'react-router-dom';
import { Search } from './pages/Search.jsx';
import ErrorPage from './pages/ErrorPAge.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div> Page Accueil
      <nav>
        <Link to="/search">search</Link>
      </nav>
    </div>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/product/:id',
    element: <div> Page Produit</div>
  }
]);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
