import '../styles/Projects.css'

interface CardProps {
  title: string;
  img: string;
  description: string;
  url: string;
}

function Card({ title, img, description, url }: CardProps) {
  return (
    <a href={url} className="card-container" target="_blank" rel="noopener noreferrer">
      <div className='card-info'>
        <h2 className='card-title' >{title}</h2>
        <div>
          <p className='card-description'>{description}</p>
        </div>
      </div>
      <img className='card-img' src={img}/>
    </a>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="heading">Projects</div>
      <div className='project-container'>
        <div className='project-row'>
          <Card
            title="Vault"
            img="src/assets/projects/vault.png"
            description="Hardware Password Manager"
            url="https://github.com/contrerasv742/vault"
          />
          <Card
            title="Snackobato Assassino"
            img="src/assets/projects/snacko.JPG"
            description={"M&M Turret with target detection"}
            url="https://github.com/Contrerasv742/snackabato"
          />
          <Card
            title="Slug Board"
            img="src/assets/projects/slug_board.png"
            description="UC Santa Cruz Social Media Application"
            url="https://github.com/Contrerasv742/slug_board"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects;
