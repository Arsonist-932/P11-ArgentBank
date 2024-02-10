import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../actions/user.action";

function ConnectNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Data Management
  const dataUser = useSelector((state) => state.user.userProfile);

  // LogOut Management
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut(navigate));
  };

  return (
    <>
      <div className="main-nav-links">
        <NavLink to="/profile" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {dataUser?.userName}
        </NavLink>

        <NavLink className="main-nav-item" onClick={handleLogOut}>
          <i className="fa fa-sign-out"></i>
          LogOut
        </NavLink>
      </div>
    </>
  );
}

export default ConnectNavbar;
