import './Button.css';

const Button = ({
  title,
  className,
  btnType = 'button',
  onClick = (f) => f,
  btnActive,
}) => {
  let finalClassName = 'button';
  if (className) {
    finalClassName += ` ${className} ${!btnActive ? '' : 'button_disabled'}`;
  }

  return (
    <button
      className={finalClassName}
      type={btnType}
      onClick={onClick}
      disabled={btnActive}
    >
      {title}
    </button>
  );
};
export default Button;
