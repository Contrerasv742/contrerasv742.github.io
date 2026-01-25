import '../styles/Projects.css'
import Card from '../components/Card';

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
