import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { MenuPage } from "./pages/MenuPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "cardapio",
        Component: MenuPage,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);