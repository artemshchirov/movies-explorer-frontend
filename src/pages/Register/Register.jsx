import './Register.css';
import useForm from '../../hooks/useFormAndValidation';
import Section from '../../components/Section/Section.jsx';
import Sign from '../../components/Sign/Sign.jsx';
import Form from '../../components/Form/Form.jsx';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import CustomLink from '../../components/CustomLink/CustomLink.jsx';
import ErrorText from '../../components/ErrorText/ErrorText';
import { VALIDATION_CONFIGS } from '../../utils/constants';

const Register = ({ handleRegister }) => {
  const initValues = { name: '', email: '', password: '' };
  const { values, errors, isValid, handleChange } = useForm(
    initValues,
    VALIDATION_CONFIGS.USER_DATA
  );

  function handleSubmitForm(evt) {
    evt.preventDefault();
    handleRegister(values);
  }

  return (
    <Section className="sign">
      <Sign title="Добро пожаловать!">
        <Form className="form form_type_sign" onSubmit={handleSubmitForm}>
          <fieldset className="form__fieldset">
            <legend className="form__legend">Имя</legend>
            <Input
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              className={`form__input ${
                errors.name ? 'form__input_type_error' : ''
              }`}
            />
            <span id="name-error" className={'form__input-error'}>
              {errors.name && 'Что-то пошло не так...'}
            </span>
          </fieldset>

          <fieldset className="form__fieldset">
            <legend className="form__legend">E-mail</legend>
            <Input
              name="email"
              value={values.email}
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
            title="Зарегистрироваться"
            btnType="submit"
            btnDisabled={!isValid || errors.email || !values.password}
          />
        </Form>
        <CustomLink path="/signin" className="link_sign">
          Уже зарегистрированы?
          <span className="link_sign link_sign_type_colored">Войти</span>
        </CustomLink>
      </Sign>
    </Section>
  );
};

export default Register;
