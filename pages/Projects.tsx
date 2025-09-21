import '../styles/Projects.css'
import Card from '../components/Card';

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className='project-container'>
        <div className='project-row'>
          <Card
            title="Vault"
            img=""
            description=""
          />

          <Card
            title="Slug Board"
            img=""
            description=""
          />

          <Card
            title="Snackobato Assasino"
            img=""
            description=""
          />
        </div>

        <div className='project-row'>
          <Card
            title="Vault"
            img=""
            description=""
          />

          <Card
            title="Slug Board"
            img=""
            description=""
          />

          <Card
            title="Snackobato Assasino"
            img=""
            description=""
          />
        </div>

        <div className='project-row'>
          <Card title="Vault"
            img=""
            description=""
          />

          <Card
            title="Slug Board"
            img=""
            description=""
          />

          <Card
            title="Snackobato Assasino"
            img=""
            description=""
          />
        </div>
      </div>
    </>
  )
}

export default Projects;
