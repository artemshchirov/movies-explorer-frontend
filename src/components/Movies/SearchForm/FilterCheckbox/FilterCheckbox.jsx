import './FilterCheckbox.css';
import { useState } from 'react';

const FilterCheckbox = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        id="filter-checkbox-id"
        name="filter-checkbox"
        checked={isChecked}
        onChange={handleOnChange}
      />
      <label
        className="filter-checkbox__label"
        htmlFor="filter-checkbox-id"
      ></label>
      <label
        className="filter-checkbox__description"
        htmlFor="filter-checkbox-id"
      >
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;
