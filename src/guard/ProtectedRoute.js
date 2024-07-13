import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoute() {
    if (localStorage.getItem('isLoggedInStatus') !== '1') {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}