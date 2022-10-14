import './Techs.css';

const Techs = () => (
  <section className="techs" id="techs">
    <h2 className="techs__subject">Технологии</h2>
    <h3 className="techs__title">7&nbsp;технологий</h3>
    <p className="techs__subtitle">
      На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили
      в&nbsp;дипломном проекте.
    </p>

    <ul className="techs__grid">
      <li className="techs__grid-item">HTML</li>
      <li className="techs__grid-item">CSS</li>
      <li className="techs__grid-item">JS</li>
      <li className="techs__grid-item">React</li>
      <li className="techs__grid-item">Git</li>
      <li className="techs__grid-item">Express.js</li>
      <li className="techs__grid-item">mongoDB</li>
    </ul>
  </section>
);

export default Techs;
