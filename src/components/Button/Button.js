import './Button.css';

const Button = ({ type, title, style }) => (
  <button className={`button ${style}`} type={type}>
    {title}
  </button>
);
export default Button;
