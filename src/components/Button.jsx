const Buttons = ({ style, libelle, type, state, setState }) => {
  return (
    <button
      className={state ? "active" : "inactive"}
      type={type}
      class={style}
      onClick={() => {
        setState(true);
      }}
    >
      {libelle}
    </button>
  );
};

export default Buttons;
