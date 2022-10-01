import './CustomLink.css';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

function CustomLink({ path, children, className, activeClassName, target }) {
  if (path.startsWith('http')) {
    return (
      <a
        href={path}
        className={`custom-link ${className}`}
        rel="noreferrer"
        target={target}
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
          `custom-link ${className} ${isActive ? activeClassName : ''}`
        }
      >
        {children}
      </NavLink>
    );
  }
  return (
    <Link to={path} className={`custom-link ${className}`}>
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  activeClassName: PropTypes.string,
};

CustomLink.defaultProps = {
  target: '_blank',
  activeClassName: '',
};

export default CustomLink;
