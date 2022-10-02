import './Login.css';
import logo from '../../images/logo.svg';
import useForm from '../../hooks/useFormAndValidation';
import Title from '../Title/Title.jsx';
import Form from '../Form/Form.jsx';
import Input from '../Input/Input';
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
    resetForm,
    setValues,
    setIsValid,
  } = useForm(initValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = values;

    console.log('values: ', values);
    console.log('email: ', email);
    console.log('password: ', password);

    if (!email || !password) return;
    // resetForm(initValues);

    if (isValid) {
      // TODO
      console.log('errors1: ', errors);
      console.log('isValid1: ', isValid);
    } else {
      console.log('errors2: ', errors);
      console.log('isValid2: ', isValid);

      // setIsValid(false);
      // setValidationMessage({
      //   email: 'Please fill out this field.',
      //   password: 'Please fill out this field.',
      // });
    }
  };

  return (
    <section className="login">
      <div className="login__content">
        <div className="login__header">
          <img
            className="login__logo"
            src={logo}
            alt="logo 'Movies Explorer'"
          />
          <Title text="Рады видеть!" style="title_type_main" />
        </div>
        <Form onSubmit={handleSubmit}>
          <fieldset className="form__fieldset">
            <legend className="form__legend">E-mail</legend>
            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              style={`form__input ${
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
              value={values.password}
              onChange={handleChange}
              style={`form__input ${
                errors.password ? 'form__input_type_error' : ''
              }`}
              type="password"
            />
            <span id="password-error" className={'form__input-error'}>
              {errors.password && 'Что-то пошло не так...'}
            </span>
          </fieldset>

          <Button title="Войти" type={'submit'} style={'form__btn'} />
        </Form>
        <CustomLink path="/signup" className="login__register">
          Ещё не зарегистрированы?
          <span className="login__register login__register_btn">
            Регистрация
          </span>
        </CustomLink>
      </div>
    </section>
  );
};

export default Login;
