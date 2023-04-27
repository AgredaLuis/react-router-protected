import { Navigate, Outlet } from "react-router-dom";

/* ya cuando hablamos del roles depende del backend pero podemos verificar dependiendo si esta permitido o no */

/* tambien puedo tener como props un redirecTo= "/landing" y usarlo como atributo */


export const ProtectedRoute = ({ isAllowed, children, redirectTo = "/"}) =>{

    if(!isAllowed){
        return <Navigate to={redirectTo} replace />
    }
    return children ? children : <Outlet/>
}