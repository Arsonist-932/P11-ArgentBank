import { useState } from "react";
import "./HeaderAccount.scss";
import { useSelector } from "react-redux";
import EditName from "../EditName/EditName";

function HeaderAccount() {
  const [isEditing, setIsEditing] = useState(false);

  const dataUser = useSelector((state) => state.user.userProfile);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <h1>
        Welcome back
        <br />
        <span>{dataUser?.firstName} </span>
        <span>{dataUser?.lastName} </span>
      </h1>

      {isEditing ? (
        <EditName toggleEditing={toggleEditing} />
      ) : (
        <button className="edit-button" onClick={toggleEditing}>
          Edit Name
        </button>
      )}
    </>
  );
}

export default HeaderAccount;
