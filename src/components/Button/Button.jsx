import './Button.css';

const Button = ({
  title,
  className,
  type = 'button',
  onClick = (f) => f,
  btnActive = true,
}) => {
  let finalClassName = 'button';
  if (className) { finalClassName += ` ${className} ${btnActive ? '' : 'button_disabled'}`; }

  return (
    <button
      className={finalClassName}
      type={type}
      onClick={onClick}
      disabled={btnActive}
    >
      {title}
    </button>
  );
};
export default Button;
