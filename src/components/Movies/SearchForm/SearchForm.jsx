import './SearchForm.css';
import { useState, useEffect } from 'react';
import useForm from '../../../hooks/useFormAndValidation';
import Form from '../../Form/Form.jsx';
import Input from '../../Input/Input.jsx';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox.jsx';
import Button from '../../Button/Button.jsx';
import ErrorText from '../../ErrorText/ErrorText.jsx';

const SearchForm = ({ handleFindMovies, searchQueryLocal }) => {
  const startValue = { movie: '', short: true };
  const { values, setValues, isValid, setIsValid, handleChange, resetForm } =
    useForm(startValue);

  useEffect(() => {
    searchQueryLocal.delete();
    const searchQuery = searchQueryLocal.load();

    setValues(searchQuery);
  }, []);

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    const { movie } = values;

    if (!movie) {
      setIsValid(false);
    } else {
      resetForm();
      handleFindMovies(movie);
      searchQueryLocal.save(values);
    }
  };

  const handleChangeCheckbox = (evt) => {
    const newValues = {
      ...values,
      short: evt.target.checked,
    };

    handleChange(evt);
    handleFindMovies(newValues);
    searchQueryLocal.save(newValues);
  };

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
          btnActive={!isValid}
        />
      </Form>
      <div className="movies-search__checkbox">
        <div className="movies-search__divider"></div>
        <FilterCheckbox onChange={handleChangeCheckbox} />
      </div>

      {/* {!isValid && (
        <ErrorText type="search">Нужно ввести ключевое слово</ErrorText>
      )} */}
    </section>
  );
};
export default SearchForm;
