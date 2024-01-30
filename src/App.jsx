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
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
