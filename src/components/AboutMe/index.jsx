import './style.css';

function AboutMe() {
  return (
    <section id='about_section'>
      <div className='about_container'>
        <img src="\assets\dev.webp" alt="developer illustration"
          className='about_img' />
        <div className='about_text_block'>
          <h2 className='about_title'>A propos de moi</h2>
          <p className='about_text'>
            Je suis Riad, développeur front-end passionné, diplômé du parcours Intégrateur Web chez OpenClassrooms.
            Après plusieurs expériences professionnelles variées qui ont forgé ma rigueur, mon organisation et mon sens du travail en équipe, j’ai choisi de mettre cette polyvalence au service du web.
            <br />
            Ce qui me motive chaque jour ?
            Créer des interfaces modernes, élégantes et intuitives, où chaque détail compte. Curieux et toujours en quête de nouvelles compétences, j’aime transformer une idée en une expérience utilisateur fluide et impactante.
          </p>
          <br />
        </div>
      </div>
    </section>
  );
}
export default AboutMe;