import './SearchForm.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useForm from '../../../hooks/useFormAndValidation';
import Form from '../../../components/Form/Form.jsx';
import Input from '../../../components/Input/Input.jsx';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox.jsx';
import Button from '../../../components/Button/Button.jsx';
import { ALERT_MESSAGES, PAGES } from '../../../utils/constants';

const SearchForm = ({ handleFindMovies, searchQueryLocal, showAlert }) => {
  const { movie, short } = searchQueryLocal.load();
  const startValue = {
    movie,
    short,
  };
  const { values, setValues, isValid, setIsValid, handleChange } =
    useForm(startValue);

  const isSavedMovies = useLocation().pathname === PAGES.SAVED_MOVIES;

  useEffect(() => {
    if (isSavedMovies && !values.movie) {
      setIsValid(true);
      handleFindMovies({ movie: ' ', short });
    } else if (!isValid && !values.movie) {
      showAlert(ALERT_MESSAGES.ERROR.SEARCH_QUERY);
    }
  }, [values]);

  useEffect(() => {
    const searchQuery = searchQueryLocal.load();

    setValues(searchQuery);
    if (searchQuery) setIsValid(true);
    else setIsValid(false);
  }, []);

  function handleSubmitForm(evt) {
    evt.preventDefault();
    searchQueryLocal.save(values);

    if (!values.movie) {
      setIsValid(false);
      showAlert(ALERT_MESSAGES.ERROR.SEARCH_QUERY);
    } else {
      handleFindMovies(values);
    }
  }

  function handleChangeCheckbox(evt) {
    if (values.movie || isSavedMovies) {
      const newValues = { ...values, short: evt.target.checked };
      searchQueryLocal.save(newValues);
      handleChange(evt);
      setValues(newValues);
      handleFindMovies(newValues);
    } else {
      showAlert(ALERT_MESSAGES.ERROR.SEARCH_QUERY);
    }
  }

  return (
    <section className="movies-search">
      <Form className="form movies-search__form" onSubmit={handleSubmitForm}>
        <span className="movies-search__icon"></span>
        <Input
          name="movie"
          type="text"
          placeholder="Фильм"
          value={values.movie || ''}
          onChange={handleChange}
          required={true}
          className={`movies-search__input ${
            !isValid ? 'movies-search__input-error' : ''
          }`}
        />
        <Button
          className="movies-search__btn"
          title="Найти"
          btnType="submit"
          btnDisabled={!isValid}
        />
      </Form>
      <div className="movies-search__checkbox">
        <div className="movies-search__divider"></div>
        <FilterCheckbox
          checked={values.short}
          onChange={handleChangeCheckbox}
        />
      </div>
    </section>
  );
};
export default SearchForm;
