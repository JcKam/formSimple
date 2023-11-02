import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({
  state,
  setState,
  showError,
  label,
  type,
  id,
  name,
  errorMessage,
  helpMessage,
  placeholder,
  value,
}) => {
  return (
    <div className="input-group">
      <label className="input-label" for={id}>
        {label}&nbsp;
        <small>{helpMessage}</small>
      </label>
      <input
        className={state ? " input input-error" : "input "}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
      ></input>

      {state === true && (
        <p className="input-help" aria-labelledby={id}>
          Votre mot de passe doit faire plus de 8 caractères.{errorMessage}
        </p>
      )}
      {/* <FontAwesomeIcon icon="envelope" className="envelope" /> */}
    </div>
  );
};

export default Input;
