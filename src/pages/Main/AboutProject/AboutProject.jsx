import './AboutProject.css';

import Title from '../../../components/Title/Title';

function AboutProject() {
  return (
    <section className="about" id="about">
      <Title className="about__subject">О&nbsp;проекте</Title>
      <div className="about__articles">
        <article className="about__container">
          <Title Tag="h3" className="about__title">
            Дипломный проект включал 5&nbsp;этапов
          </Title>
          <p className="about__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </article>
        <article className="about__container">
          <Title Tag="h3" className="about__title">
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </Title>
          <p className="about__subtitle">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="timeline">
        <div className="timeline__container backend">
          <div className="timeline__rectangle">
            <p className="timeline__weeks">1 неделя</p>
          </div>
          <p className="timeline__caption">Back-end</p>
        </div>
        <div className="timeline__container">
          <div className="timeline__rectangle frontend">
            <p className="timeline__weeks">4 недели</p>
          </div>
          <p className="timeline__caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
