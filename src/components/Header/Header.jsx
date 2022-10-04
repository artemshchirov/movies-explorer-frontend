import './Header.css';

const Header = ({ children, className }) => {
  let finalClassName = 'header';
  if (className) finalClassName += ` ${className}`;

  return <header className={finalClassName}>{children}</header>;
};

export default Header;
