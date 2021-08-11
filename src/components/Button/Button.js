const Button = ({ title, activeClass, _callback, isDisabled }) => {
  return (
    <button className={activeClass} onClick={_callback} disabled={isDisabled}>
      {title}
    </button>
  );
};

export default Button;
