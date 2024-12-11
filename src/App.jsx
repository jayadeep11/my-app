import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx";
import Neovim from "./pages/neovim/Neovim.jsx";
import Linux from "./pages/linux/Linux.jsx";
import TodoList from "./pages/todolist/TodoList.jsx";

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
        path: "todolist",
        element: <TodoList />,
      },
      {
        path: "contact",
        element: <Contact />,
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
