import './Techs.css';

import Title from '../../../components/Title/Title';

function Techs() {
  return (
    <section className="techs" id="techs">
      <Title className="techs__subject">Технологии</Title>
      <Title Tag="h3" className="techs__title">
        7&nbsp;технологий
      </Title>
      <p className="techs__subtitle">
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
        применили в&nbsp;дипломном проекте.
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
}

export default Techs;
