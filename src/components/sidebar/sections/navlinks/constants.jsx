import { FaHome, FaLinux, FaListAlt, FaDocker } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { SiNeovim, SiArchlinux } from "react-icons/si";

export const sections = [
  {
    name: "Home",
    path: "/",
    icon: <IoMdHome />,
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
    path: "/a",
    icon: <FaDocker />,
  },
  {
    name: "Utilities",
    path: "/password-generator",
    icon: <SiNeovim />,
  },
  {
    name: "Arch Linux",
    path: "/a",
    icon: <SiArchlinux />,
  },
];

