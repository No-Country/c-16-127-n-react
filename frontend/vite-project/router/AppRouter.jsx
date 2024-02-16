import { Routes, Route } from "react-router";
import Login from "../components/Login";
import SignIn from "../components/SignIn";
import NotFound from "../components/NotFound";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    );
}

export default AppRouter;