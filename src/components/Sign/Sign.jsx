import './Sign.css';
import SignHeader from '../Header/SignHeader/SignHeader.jsx';

const Sign = ({ children, title }) => (
  <div className="sign__content">
    <SignHeader title={title} />
    {children}
  </div>
);

export default Sign;
