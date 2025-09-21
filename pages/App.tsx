import '../styles/App.css'
import StarField from '../components/StarField'

function App() {
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
        <div className="work-btn">
          View my projects <span>-{'>'}</span>
        </div>
      </div>
    </>
  )
}

export default App
