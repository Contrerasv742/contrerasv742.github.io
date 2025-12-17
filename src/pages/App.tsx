import '../styles/Home.css'
import StarField from '../components/StarField'

function Home() {
  return (
    <>
      <StarField />
      <div className="landscape"></div>
      <div className="filter"></div>
      <div className="intro">
        <h1 className="greeting">
          Hello, I am <span className="name"> Victor</span>
        </h1>
        <h1>I am a Computer Engineer</h1>
        <a href="#projects"className="projects-btn">
          View my projects <span>-{'>'}</span>
        </a>
      </div>
    </>
  )
}

export default Home;
