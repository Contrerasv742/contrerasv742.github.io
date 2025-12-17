import '../styles/Projects.css'
import Card from '../components/Card';

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className='project-container'>
        <div className='project-row'>
          <Card
            title="Vault"
            img="src/assets/projects/vault.png"
            description="Hardware Password Manager"
            url="https://github.com/contrerasv742/vault"
          />
          <Card
            title="Slug Board"
            img="src/assets/projects/vault.png"
            description="UC Santa Cruz Social Media Application"
            url="https://github.com/Contrerasv742/slug_board"
          />
          <Card
            title="Snackobato Assassino"
            img="src/assets/projects/vault.png"
            description={"M&M Turret with target detection"}
            url="https://github.com/Contrerasv742/snackabato"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects;
