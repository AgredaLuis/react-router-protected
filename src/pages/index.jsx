import { Navigate } from "react-router-dom";

export const Landing = () => <h2>landing page (public)</h2>;

/* PAgina para cuando el usuario se logee */
export const Home = () => {
  
  return <h2>Home Page (Private)</h2>;
};

/* pagina cuando el usuario este logeado */
export const Dashboard = () => <h2>Dashboard (Private)</h2>;

/* pagina que pueda ver las analytics cuando este legeado tenga ese rol */
export const Analytics = () => (
  <h2>Analytics Page (Private & permission:'analize')</h2>
);

/* pagina que pueda ver las admin cuando este legeado  o tenga ese rol*/
export const Admin = () => <h2>Admin (Private & permission:'admin')</h2>;
