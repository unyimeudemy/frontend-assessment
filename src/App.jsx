import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

// router and routes
const accessToken = localStorage.getItem("AccessToken");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} basename="/">
      <Route index element={<Dashboard />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
