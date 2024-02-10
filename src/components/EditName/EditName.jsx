import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../actions/user.action";
import PropTypes from "prop-types";
import { useState } from "react";
import "./EditName.scss";
import EditForm from "../EditForm/EditForm";

function EditName({ toggleEditing }) {
  const [userName, setUserName] = useState("");

  const dataUser = useSelector((state) => state.user.userProfile);
  const dispatch = useDispatch();

  const handleUpdateData = (e) => {
    e.preventDefault();
    toggleEditing(); // Gestion de l'ouverture du formulaire
    dispatch(updateUserData(userName));
  };

  return (
    <>
      <div>
        <form className="formUpdate" onSubmit={handleUpdateData}>
          <EditForm
            htmlFor="UserName"
            labalName="User Name"
            inputType="text"
            disabled={false}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <EditForm
            htmlFor="firstname"
            labalName="First Name"
            inputType="text"
            value={dataUser.firstName}
            disabled
          />

          <EditForm
            htmlFor="LastName"
            labalName="Last Name"
            inputType="text"
            value={dataUser.lastName}
            disabled
          />

          <div className="formUpdate-button">
            <button type="submit">Save</button>

            <button type="button" onClick={toggleEditing}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

EditName.propTypes = {
  toggleEditing: PropTypes.func.isRequired,
};

export default EditName;
