import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import DashboardHomePage from "../pages/DashboardHomePage";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Settings from "../pages/Settings";
import RequireAuth from "../components/RequireAuth";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route element={<Home />} index />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<RequireAuth />}>
        <Route path="dashboard/" element={<Dashboard />}>
          <Route element={<DashboardHomePage />} index />
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
