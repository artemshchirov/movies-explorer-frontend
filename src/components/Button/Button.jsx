import './Button.css';

const Button = ({
  title,
  style,
  type = 'submit',
  onClick = (f) => f,
  btnActive,
}) => (
  <button
    className={`button ${style} ${btnActive ? '' : 'button_disabled'}`}
    type={type}
    onClick={onClick}
    disabled={btnActive}
  >
    {title}
  </button>
);
export default Button;
