import './Profile.css';
import { useEffect, useState } from 'react';
import MoviesHeader from '../../components/Header/MoviesHeader/MoviesHeader.jsx';
import Form from '../../components/Form/Form.jsx';
import Title from '../../components/Title/Title.jsx';
import Button from '../../components/Button/Button.jsx';
import ErrorText from '../../components/ErrorText/ErrorText';

import useForm from '../../hooks/useFormAndValidation';
import { VALIDATION_PARAMS } from '../../utils/constants';

const Profile = ({ currentUser, handleUpdateUser, handleLogout }) => {
  const startValues = {
    name: currentUser.name,
    email: currentUser.email,
  };

  const { values, isValid, handleChange, setIsValid } = useForm(startValues);

  const [isValidUserName, setIsValidUserName] = useState(true);
  const [isValidUserEmail, setIsValidUserEmail] = useState(true);

  // Check if user info was changed and valid
  useEffect(() => {
    const isValidName = VALIDATION_PARAMS.REGEX.NAME.test(values.name);
    const isValidEmail = VALIDATION_PARAMS.REGEX.EMAIL.test(values.email);
    const isChangeName = values.name !== currentUser.name;
    const isChangeEmail = values.email !== currentUser.email;

    setIsValidUserName(isValidName);
    setIsValidUserEmail(isValidEmail);

    isValidName && isValidEmail && (isChangeName || isChangeEmail)
      ? setIsValid(true)
      : setIsValid(false);
  }, [values]);

  function clickUpdateUserButton() {
    handleUpdateUser(values).then(() => setIsValid(false));
  }

  return (
    <>
      <MoviesHeader />
      <section className="account">
        <div className="account__container">
          <Title
            className="title_type_profile"
            text={`Привет, ${values.name}!`}
          />

          <Form className="form account__form">
            <label className="account__label">
              <p className="account__data account__data_description ">Имя</p>
              <input
                className="account__input"
                type="text"
                value={values.name}
                name="name"
                onInput={handleChange}
                required
                placeholder="Ваше имя"
              />
            </label>
            {!isValidUserName && (
              <ErrorText>{VALIDATION_PARAMS.MESSAGES.NAME}</ErrorText>
            )}
            <div className="account__divider"></div>
            <label className="account__label">
              <p className="account__data account__data_description">E-mail</p>
              <input
                className="account__input"
                type="email"
                value={values.email}
                name="email"
                onInput={handleChange}
                required
                placeholder="Ваш E-mail"
              />
            </label>
            {!isValidUserEmail && (
              <ErrorText>{VALIDATION_PARAMS.MESSAGES.EMAIL}</ErrorText>
            )}
          </Form>

          <div className="account__btns">
            <Button
              className="account__btn"
              title="Редактировать"
              btnType="submit"
              btnDisabled={!isValid}
              onClick={clickUpdateUserButton}
            />
            <Button
              className="account__btn account__btn_last"
              title="Выйти из аккаунта"
              onClick={handleLogout}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
