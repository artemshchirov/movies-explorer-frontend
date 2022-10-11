import './FilterCheckbox.css';
const FilterCheckbox = ({ onChange }) => {
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        id="filter-checkbox-id"
        name="filter-checkbox"
        onChange={onChange}
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
