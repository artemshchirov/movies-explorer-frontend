import './Nav.css';

const Nav = ({ children, className }) => {
  let finalClassName = 'nav';
  if (className) finalClassName += ` ${className}`;

  return (
    <nav className={finalClassName}>
      <ul className="nav__link-list">{children}</ul>
    </nav>
  );
};

export default Nav;
