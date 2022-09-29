import './Movies.css';
import useForm from '../../hooks/useForm';
import SearchForm from './SearchForm/SearchForm';

const Movies = () => {
  const { values, setValues, handleChange } = useForm;

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className="movies">
      <SearchForm onSubmit={handleSubmit} />
    </section>
  );
};
export default Movies;
