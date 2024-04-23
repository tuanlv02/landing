import "./styles/global.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Layout from "./layouts/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
