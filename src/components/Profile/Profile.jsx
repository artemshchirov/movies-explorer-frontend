import './Profile.css';
import MoviesHeader from '../Header/MoviesHeader/MoviesHeader.jsx';
import Title from '../Title/Title.jsx';
import Button from '../Button/Button.jsx';

const Profile = () => (
  <>
    <MoviesHeader />
    <section className="account">
      <div className="account__container">
        <Title className="title_type_main" text="Привет, Артём!" />
        <div className="account__line-container">
          <div className="account__line">
            <p className="account__data account__data_description ">Имя</p>
            <p className="account__data">Артём</p>
          </div>
          <div className="account__divider"></div>
          <div className="account__line">
            <p className="account__data account__data_description">E-mail</p>
            <p className="account__data">pochta@yandex.ru</p>
          </div>
        </div>
        <div className="account__btns">
          <Button className="account__btn" title="Редактировать" />
          <Button
            className="account__btn account__btn_last"
            title="Выйти из аккаунта"
          />
        </div>
      </div>
    </section>
  </>
);

export default Profile;
