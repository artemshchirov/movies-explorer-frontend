import './Section.css';

const Section = ({ children, className }) => (
  <section className={className}>{children}</section>
);

export default Section;
