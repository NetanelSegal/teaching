import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsPage from "./pages/PostPage/PostsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage.jsx";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound.jsx";
import "./index.css";

const appRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "posts/:userId?",
        element: <PostsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "user/:userId",
        element: <UserProfilePage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(appRoutes);

export default function App() {
  return <RouterProvider router={router} />;
}
