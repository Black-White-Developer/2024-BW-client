import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Mypage from "./pages/myPage";
import Main from "./pages/Main";
import Write from "./pages/Write";
import List from "./pages/List";
import Detail from "./pages/Detail";
import { AuthProvider } from "./assets/AuthContext"; // Import the AuthProvider
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Mypage",
    element: <Mypage />,
  },
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/Write",
    element: <Write />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/Detail",
    element: <Detail />,
  },
]);

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap the RouterProvider with AuthProvider */}
      <RouterProvider router={router} />{" "}
      {/* Correctly use RouterProvider here */}
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
    </AuthProvider>
  );
}

export default App;
