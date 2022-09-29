import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className="movies-search">
      <form className="movies-search__form" onSubmit={handleSubmit}>
        <span className="movies-search__icon"></span>
        <input
          className="movies-search__input"
          type="text"
          placeholder="Фильм"
          name="movies-search"
        />
        <button className="movies-search__btn" type="Submit">
          Найти
        </button>
      </form>
      <div className="movies-search__checkbox">
        <div className="movies-search__divider"></div>
        <FilterCheckbox />
      </div>
    </section>
  );
};
export default SearchForm;
