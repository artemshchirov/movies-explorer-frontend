import './CustomLink.css';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

function CustomLink({
  path,
  children,
  className,
  activeClassName,
  target = '_blank',
}) {
  if (path.startsWith('http')) {
    return (
      <a
        href={path}
        className={`link ${className}`}
        target={target}
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
  if (activeClassName) {
    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          `link ${className} ${isActive ? activeClassName : ''}`
        }
      >
        {children}
      </NavLink>
    );
  }
  return (
    <Link to={path} className={`link ${className}`}>
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  activeClassName: PropTypes.string,
};

CustomLink.defaultProps = {
  target: '_blank',
  activeClassName: '',
};

export default CustomLink;
