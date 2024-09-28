import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Mypage from './pages/myPage';
import Main from './pages/Main';
import Write from './pages/Write';
import List from './pages/List';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './assets/AuthContext'; // Import the AuthProvider
import './App.css';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/Mypage",
    element: <Mypage />
  },
  {
    path: '/',
    element: <Main />
  },
  {
    path: "/Write",
    element: <Write />
  },
  {
    path: "/list",
    element: <List />
  }
]);

function App() {
  return (
    <AuthProvider> {/* Wrap the RouterProvider with AuthProvider */}
      <RouterProvider router={router} /> {/* Correctly use RouterProvider here */}
    </AuthProvider>
  );
}

export default App;
