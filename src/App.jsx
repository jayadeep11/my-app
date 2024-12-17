import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Neovim from "./pages/neovim/Neovim.jsx";
import Linux from "./pages/linux/Linux.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This indicates the default route for "/"
        element: <Home />,
      },
      {
        path: "neovim",
        element: <Neovim />,
      },
      {
        path: "linux",
        element: <Linux />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
