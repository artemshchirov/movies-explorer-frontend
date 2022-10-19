import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import Section from '../../components/Section/Section';
import Sign from '../../components/Sign/Sign';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CustomLink from '../../components/CustomLink/CustomLink';
import ErrorText from '../../components/ErrorText/ErrorText';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import { VALIDATION_CONFIGS, VALIDATION_PARAMS } from '../../utils/constants';

import './Login.css';

function Login({ handleLogin }) {
  const { loading } = useContext(UserContext);

  const initValues = { email: '', password: '' };
  const { values, errors, isValid, handleChange } = useFormAndValidation(
    initValues,
    VALIDATION_CONFIGS.LOGIN
  );

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    handleLogin(values);
  };

  return (
    <Section className="sign">
      <Sign title="Рады видеть!">
        <Form className="form form_type_sign" onSubmit={handleSubmitForm}>
          <fieldset className="form__fieldset">
            <label className="form__title">E-mail</label>
            <Input
              name="email"
              value={values.email || ''}
              type="email"
              onChange={handleChange}
              className={`form__input ${
                errors.email ? 'form__input_type_error' : ''
              }`}
              disabled={loading}
            />
            {errors.email && (
              <ErrorText type="auth">
                {VALIDATION_PARAMS.MESSAGES.EMAIL}
              </ErrorText>
            )}

            <label className="form__title">Пароль</label>
            <Input
              name="password"
              value={values.password || ''}
              type="password"
              onChange={handleChange}
              className={`form__input ${
                errors.password ? 'form__input_type_error' : ''
              }`}
              disabled={loading}
            />
            {errors.password && (
              <ErrorText type="auth">
                {VALIDATION_PARAMS.MESSAGES.PASSWORD}
              </ErrorText>
            )}
          </fieldset>

          <Button
            className="form__btn"
            title={loading ? 'Вход...' : 'Войти'}
            btnType="submit"
            btnDisabled={
              !isValid || errors.email || !values.password || loading
            }
          />
        </Form>
        <CustomLink path="/signup" className="link_sign">
          Ещё не зарегистрированы?
          <span className="link_sign link_sign_type_colored">Регистрация</span>
        </CustomLink>
      </Sign>
    </Section>
  );
}

export default Login;
