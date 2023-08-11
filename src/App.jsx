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
    <Route path="/" element={<RootLayout />}>
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

///////////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
//   Navigate,
// } from "react-router-dom";

// // layouts and pages
// import RootLayout from "./layouts/RootLayout";
// import Dashboard from "./pages/Dashboard";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";

// // custom protected route component
// function ProtectedRoute({ element: Element, ...rest }) {
//   const accessToken = localStorage.getItem("AccessToken");

//   // If access token is present, render the provided element (Dashboard)
//   // Otherwise, redirect to login or handle the situation as needed
//   return accessToken ? <Element {...rest} /> : <Navigate to="/login" replace />;
// }

// // router and routes
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Dashboard />} />
//       <Route path="signup" element={<SignUp />} />
//       <Route path="login" element={<Login />} />
//     </Route>
//   )
// );

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

///////////////////////////////////////////////////////////////////////////

// import React from "react";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// // layouts and pages
// import RootLayout from "./layouts/RootLayout";
// import Dashboard from "./pages/Dashboard";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";

// // custom protected route component
// function ProtectedRoute({ children }) {
//   const accessToken = localStorage.getItem("AccessToken");
//   const location = useLocation();

//   if (!accessToken) {
//     return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} />;
//   }

//   return children;
// }

// // router and routes
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route
//         index
//         element={
//           <

///////////////////////////////////////////////////////////
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Router,
//   RouterProvider,
//   Routes,
// } from "react-router-dom";

// // layouts and pages
// import RootLayout from "./layouts/RootLayout";
// import Dashboard from "./pages/Dashboard";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import ProtectedRoutes from "./components/ProtectedRoutes";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     localStorage.getItem("AccessToken") ? true : false
//   );

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<RootLayout />}>
//           {/* Protected Route */}
//           <ProtectedRoutes
//             path="dashboard"
//             element={<Dashboard />}
//             isAuthenticated={isAuthenticated}
//           />
//           <Route path="signup" element={<SignUp />} />
//           <Route path="login" element={<Login />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
