import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import PageLayout from "./components/layout/PageLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/submit",
        element: <p>Submit a Request</p>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
