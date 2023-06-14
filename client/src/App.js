import { Navbar } from "./components";
import { Outlet, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Navigate to="/testnets" replace={true} />
    </div>
  );
}

export default App;
