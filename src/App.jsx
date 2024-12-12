import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Neovim from "./pages/neovim/Neovim.jsx";
import Linux from "./pages/linux/Linux.jsx";
import TodoList from "./pages/todolist/TodoList.jsx";
import ConsvervationComponent from "./pages/ChatUI.jsx";
import Passwd from "./pages/password-generator/App.jsx";

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
        path: "password-generator",
        element: <Passwd />,
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
        path: "profile",
        element: <Profile />,
      },
      {
        path: "friend",
        element: <ConsvervationComponent />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
