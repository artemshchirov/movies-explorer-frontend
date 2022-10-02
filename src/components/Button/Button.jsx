import './Button.css';

const Button = ({
  title, style, type = 'submit', onClick = (f) => f,
}) => (
  <button className={`button ${style}`} type={type} onClick={onClick}>
    {title}
  </button>
);
export default Button;
