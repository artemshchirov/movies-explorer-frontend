import './Title.css';

const Title = ({ text, style }) => (
  <p className={`title ${style}`}>
    {text}
  </p>
);
export default Title;
