import './Title.css';

function Title({ text, className }) {
  let finalClassName = 'title';
  if (className) finalClassName += ` ${className}`;

  return <p className={finalClassName}>{text}</p>;
}
export default Title;
