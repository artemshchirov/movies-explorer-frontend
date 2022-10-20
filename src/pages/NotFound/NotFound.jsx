import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <Title className="not-found__title">404</Title>
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
