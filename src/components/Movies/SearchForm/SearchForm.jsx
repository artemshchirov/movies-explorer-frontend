import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox.jsx';
import Button from '../../Button/Button.jsx';

const SearchForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className="movies-search">
      <form className="movies-search__form" onSubmit={handleSubmit} required>
        <span className="movies-search__icon"></span>
        <input
          className="movies-search__input"
          type="text"
          placeholder="Фильм"
          name="movies-search"
        />
        <Button className="movies-search__btn" title="Найти" type="submit" />
      </form>
      <div className="movies-search__checkbox">
        <div className="movies-search__divider"></div>
        <FilterCheckbox />
      </div>
    </section>
  );
};
export default SearchForm;
