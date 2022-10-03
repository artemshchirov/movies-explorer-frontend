import './Sign.css';
import SignHeader from '../header/SignHeader/SignHeader.jsx';

const Sign = ({ children, title }) => (
    <div className="sign__content">
      <SignHeader title={title} />
      {children}
    </div>

);

export default Sign;
