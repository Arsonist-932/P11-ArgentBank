import PropTypes from "prop-types";

function EditForm({
  htmlFor,
  labalName,
  inputType,
  value,
  disabled,
  onChange,
}) {
  return (
    <>
      <label htmlFor={htmlFor}>
        {labalName}
        <input
          type={inputType}
          id={htmlFor}
          value={value}
          autoComplete="off"
          disabled={disabled}
          onChange={onChange}
        />
      </label>
    </>
  );
}

EditForm.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  labalName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EditForm;
