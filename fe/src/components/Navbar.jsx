import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { authUser } = useAuthStore();

  return (
    <div>
      <Link to={"/"}>home</Link>
      <Link to={"/login"}>login</Link>
      <Link to={"/settings"}>settings</Link>
      <Link to={"/"}>home</Link>
      <Link to={"/"}>home</Link>
    </div>
  );
};

export default Navbar;
