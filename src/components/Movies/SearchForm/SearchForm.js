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
        <div className="movies-search__checkbox desktop">
          <FilterCheckbox />
        </div>
      </form>
      <div className="movies-search__checkbox mobile">
        <FilterCheckbox />
      </div>
    </section>
  );
};
export default SearchForm;
