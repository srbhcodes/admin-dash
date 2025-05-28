import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Spinner from "./components/Spinner";


// const Users = React.lazy(() =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(import("./pages/Users")), 2000); 
//   })
// );

const Users = lazy(() => import("./pages/Users"));
const Reports = lazy(() => import("./pages/Reports"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />

        {}
        <Route
          path="users"
          element={
            <Suspense fallback={<Spinner />}>
              <Users />
            </Suspense>
          }
        />
        <Route
          path="reports"
          element={
            <Suspense fallback={<Spinner />}>
              <Reports />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
