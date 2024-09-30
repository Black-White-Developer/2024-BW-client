import {useEffect} from "react";
import {Bounce, ToastContainer} from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Mypage from "./pages/myPage";
import Main from "./pages/Main";
import Write from "./pages/Write";
import List from "./pages/List";
import Detail from "./pages/Detail";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

import useUserStore from "./store/useUserStore";

import axiosInstance from "./util/axiosInstance";

import Cookies from 'js-cookie'

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
    element: <List />,
  },
  {
    path: "/Detail/:id",
    element: <Detail />,
  },
]);

function App() {
  const { setUser } = useUserStore();

  useEffect(() => {
    (async () => {
      const token = Cookies.get('token');

      if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axiosInstance.get('/auth/me');

        if (response?.data?.content?.user) {
            setUser(response.data.content.user);
        } else {
            Cookies.remove('token');
            delete axiosInstance.defaults.headers.common['Authorization'];
        }
      }
    })();
  }, []);

  return (
     <>
       <RouterProvider router={router} />
       <ToastContainer
           position="top-right"
           autoClose={3000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss={false}
           draggable
           pauseOnHover
           theme="light"
           transition={Bounce}
       />
     </>
  );
}

export default App;
