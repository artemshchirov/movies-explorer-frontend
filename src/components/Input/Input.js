import './Input.css';
import { memo } from 'react';

const Input = ({
  placeholder = '',
  name,
  value,
  onChange,
  style,
  type = 'text',
}) => (
  <input
    className={`input ${style}`}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    type={type}
  />
);

export default memo(Input);
