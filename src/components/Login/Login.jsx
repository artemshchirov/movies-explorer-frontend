import './Login.css';
import useForm from '../../hooks/useFormAndValidation';
import Section from '../Section/Section.jsx';
import Sign from '../Sign/Sign.jsx';
import Form from '../Form/Form.jsx';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import CustomLink from '../CustomLink/CustomLink.jsx';

const initValues = {
  email: 'test@gmail.com',
  password: '12345',
};

const Login = () => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    // resetForm,
    // setValues,
    // setIsValid,
  } = useForm(initValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit: ');

    const { email, password } = values;
    if (!email || !password) return;
    // resetForm(initValues);
    if (isValid) {
      // TODO
    } else {
      // setIsValid(false);
      // setValidationMessage({
      //   email: 'Please fill out this field.',
      //   password: 'Please fill out this field.',
      // });
    }
  };

  return (
    <Section className="sign">
      <Sign title="Рады видеть!">
        <Form className="form form_type_sign" onSubmit={handleSubmit}>
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
            <span id="email-error" className={'form__input-error'}>
              {errors.email && 'Что-то пошло не так...'}
            </span>
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
            <span id="password-error" className={'form__input-error'}>
              {errors.password && 'Что-то пошло не так...'}
            </span>
          </fieldset>

          <Button
            className="form__btn"
            title="Войти"
            btnType="submit"
            btnActive={isValid}
          />
        </Form>
        <CustomLink path="/signup" className="link_sign">
          Ещё не зарегистрированы?
          <span className="link_sign link_sign_type_colored">Регистрация</span>
        </CustomLink>
      </Sign>
    </Section>
  );
};

export default Login;
