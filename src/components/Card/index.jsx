import "./style.css";

function Card({ project }) {
  return (
    <div className="card_container">
      <div className="card_content">
        <img src={project.image} alt={project.alt} />

        <h2 className="card_title">{project.title}</h2>
        <p className="card_description">{project.description}</p>
      </div>

      <div className="card_tools">
        <ul>
          {project.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>

      {project.github && (
        <div className="card_icon_container">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/github.svg"
              alt="Lien vers le dépôt GitHub du projet"
              className="card_icon"
            />
          </a>
        </div>
      )}
    </div>
  );
}

export default Card;
