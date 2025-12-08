import "./style.css";


const MySkills = [
    "HTML",
    "CSS",
    "REACT",
    "REDUX",
    "JAVASCRIPT",
    "FIGMA",
    "SEO",
    "Accessibilité",
    "Notion",
    "Débogage",
    "Sass",
    "Git,GitHub",

]
function Skills(){
  return (
    <section id="Skills">
        <h2 className="skills_title">Compétences</h2>
      <div className="skills_container">
        {MySkills.map((skill, index) => (
          <div key={index} className="skill_card">
            {skill}
          </div>
        ))}
      </div>
      
    </section>
  );
}
export default Skills;
