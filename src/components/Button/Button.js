const Button = ({ title, _callback, isDisabled, className }) => {
  return (
    <button className={className} onClick={_callback} disabled={isDisabled}>
      {title}
    </button>
  );
};

export default Button;
