import './Form.css';

const Form = ({ className, children, onSubmit }) => (
  <form className={className} onSubmit={onSubmit} noValidate required>
    {children}
  </form>
);

export default Form;
