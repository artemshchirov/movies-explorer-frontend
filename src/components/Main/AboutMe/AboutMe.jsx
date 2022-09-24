import './AboutMe.css';
import profileImage from '../../../images/profile-img.jpg';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section className="profile">
      <div className="profile__wrapper">
        <h2 className="profile__subject">Студент</h2>
      </div>
      <div className="profile__about">
        <img className="profile__image" src={profileImage} alt="Student" />
        <div className="profile__container">
          <h3 className="profile__title">Артём</h3>
          <p className="profile__subtitle">Фронтенд-разработчик, 26 лет</p>
          <p className="profile__description">
            Родился в&nbsp;Украине и&nbsp;живу в&nbsp;Израиле, в&nbsp;городе
            Хайфа, учился программированию год сам и&nbsp;ешё один
            в&nbsp;Яндекс.Практикум. У&nbsp;меня есть хобби: книги, спорт,
            волонтёрство. Люблю слушать музыку, а&nbsp;ещё увлекаюсь написанием
            кода. С&nbsp;2021 года увлекаюсь пет-проектами. После того, как
            прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a
            className="profile__link"
            href="https://github.com/artemshchirov"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
