import { FaHome, FaLinux, FaListAlt, FaDocker } from "react-icons/fa";
import { SiNeovim, SiArchlinux } from "react-icons/si";

export const sections = [
  {
    name: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    name: "Linux",
    path: "/linux",
    icon: <FaLinux />,
  },
  {
    name: "Neovim",
    path: "/neovim",
    icon: <SiNeovim />,
  },
  {
    name: "To-Do List",
    path: "/todolist",
    icon: <FaListAlt />,
  },
  {
    name: "Docker",
    path: "/docker",
    icon: <FaDocker />,
  },
  {
    name: "Arch Linux",
    path: "/arch-linux",
    icon: <SiArchlinux />,
  },
];

