import './Login.css';
import Section from '../../components/Section/Section';
import Sign from '../../components/Sign/Sign';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CustomLink from '../../components/CustomLink/CustomLink';
import ErrorText from '../../components/ErrorText/ErrorText';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import { VALIDATION_CONFIGS } from '../../utils/constants';

function Login({ handleLogin }) {
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
            <legend className="form__legend">E-mail</legend>
            <Input
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              className={`form__input ${
                errors.email ? 'form__input_type_error' : ''
              }`}
              type="email"
            />
            {errors.email && <ErrorText type="auth">{errors.email}</ErrorText>}
          </fieldset>

          <fieldset className="form__fieldset">
            <legend className="form__legend">Пароль</legend>
            <Input
              name="password"
              value={values.password || ''}
              onChange={handleChange}
              className={`form__input ${
                errors.password ? 'form__input_type_error' : ''
              }`}
              type="password"
            />
            {errors.password && (
              <ErrorText type="auth">{errors.password}</ErrorText>
            )}
          </fieldset>

          <Button
            className="form__btn"
            title="Войти"
            btnType="submit"
            btnDisabled={!isValid || errors.email || !values.password}
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
