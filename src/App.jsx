import Dashboard from "../Admin";
import { Button, Table } from "antd";
import Category from "../Category";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/dashboard",
  //     element: (
  //       <div>
  //         <Dashboard />
  //       </div>
  //     ),

  //     children: [
  //       {
  //         path: "/dashboard/profile",
  //         element: <div>Profile</div>,
  //       },
  //       {
  //         path: "/dashboard/club1",
  //         element: <div>club-1</div>,
  //       },
  //       {
  //         path: "/dashboard/club2",
  //         element: <div>club-1</div>,
  //       },
  //       {
  //         path: "/dashboard/club3",
  //         element: <div>club-1</div>,
  //       },
  //       {
  //         path: "/dashboard/all-promotion",
  //         element: <div>all-promotion</div>,
  //       },
  //       {
  //         path: "category",
  //         element: <Category />,
  //       },
  //     ],
  //   },
  // ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/login",
      element: <div>Login</div>,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "/dashboard/category",
          element: <Category />,
        },
        {
          path: "/dashboard/product",
          element: <>ProductPage</>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
