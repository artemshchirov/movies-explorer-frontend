import './Form.css';

const Form = ({ children, onSubmit }) => (
  <form className="form" onSubmit={onSubmit} noValidate>
    {children}
  </form>
);

export default Form;
