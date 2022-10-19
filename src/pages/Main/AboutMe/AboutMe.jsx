import './AboutMe.css';
import profileImage from '../../../images/profile-img.jpg';

import Title from '../../../components/Title/Title';
import CustomLink from '../../../components/CustomLink/CustomLink';

function AboutMe() {
  return (
    <section className="profile" id="profile">
      <Title className="profile__subject">Студент</Title>
      <div className="profile__about">
        <img className="profile__image" src={profileImage} alt="student" />
        <div className="profile__container">
          <Title Tag="h3" className="profile__title">
            Артём
          </Title>
          <p className="profile__subtitle">Фронтенд-разработчик, 26 лет</p>
          <p className="profile__description">
            Родился в&nbsp;Украине и&nbsp;живу в&nbsp;Израиле, в&nbsp;городе
            Хайфа, учился программированию год сам и&nbsp;ещё один
            в&nbsp;Яндекс.Практикум. У&nbsp;меня есть хобби: книги, спорт,
            волонтёрство. Люблю слушать музыку, а&nbsp;ещё увлекаюсь написанием
            кода. С&nbsp;2021 года увлекаюсь пет-проектами. После того, как
            прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <CustomLink
            path="https://github.com/artemshchirov"
            className="profile__link"
          >
            Github
          </CustomLink>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
