import './Input.css';
import { memo } from 'react';

function Input({
  placeholder = '',
  name,
  value,
  onChange,
  className,
  type = 'text',
  required,
}) {
  let finalClassName = 'input';
  if (className) finalClassName += ` ${className}`;

  return (
    <input
      className={finalClassName}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required={required}
    />
  );
}
export default memo(Input);
