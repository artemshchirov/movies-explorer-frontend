import './NotFound.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <p className="not-found__title">404</p>
      <p className="not-found__subtitle">Страница не найдена</p>

      <Button
        title="Назад"
        className="not-found__btn"
        onClick={() => navigate(-1)}
      />
    </section>
  );
}

export default NotFound;
