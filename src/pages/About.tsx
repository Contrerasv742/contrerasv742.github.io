import '../styles/About.css'
import portrait from '../assets/about/portrait.jpg'
import cppIcon from '../assets/about/cpp.png';
import cIcon from '../assets/about/c.png';
import gitIcon from '../assets/about/git.png';
import pythonIcon from '../assets/about/python.png';
import reactIcon from '../assets/about/react.svg';
import tsIcon from '../assets/about/TypeScript.avif';
import rustIcon from '../assets/about/rust.png';

interface SkillItemProp {
  icon: string
  name: string
}

function SkillItem({ icon, name }: SkillItemProp) {
  return (
    <div className="skill-item">
      <div className="skill-item-content">
        <img src={icon} alt={name} />
        <div> {name} </div>
      </div>
    </div>
  )
}

interface SkillProp {
  skills: SkillItemProp[]
}

function SkillColumn({ skills }: SkillProp) {
  return (
    <div className="skill-column">
      {skills.map((skill: SkillItemProp, index: number) => (
        <SkillItem
          key={index}
          icon={skill.icon}
          name={skill.name}
        />
      ))}
    </div>
  )
}

function About() {
  const skills_data = [
    [
      { icon: pythonIcon, name: 'Python'},
      { icon: gitIcon , name: 'Git'},
    ],
    [
      { icon: cppIcon, name: 'C++' },
      { icon: reactIcon, name: 'React'},
      { icon: rustIcon, name: 'Rust'},
    ],
    [
      { icon: cIcon, name: 'C'},
      { icon: tsIcon, name: 'TypeScript'},
    ]
  ]

  return (
    <>
      <h1>About</h1>
      <div className="about-container">
        <div className="about-left-container">
          <div className="portrait-container">
            <img src={portrait} />
          </div>
          <div className="about-text">
            <p>
              I am a Computer Engineering graduate from UC Santa Cruz. I have a
              concetration in Computer Network with a deep interest in creating
              memory-safe C and C++ code. 
            </p>
            <br />

            <p>
              I have lots of experience in creating rigorous networking
              programs implementing protocols for HTTP, logging, and Proxy
              servers. Many of these protocols I have implemented with threads,
              making me profecient in thread safety, memory management, large
              codebases, and program efficiency. 
            </p>
            <br/>

            <p>
              Additionally, I have relevant experience in embedded systems,
              mechanical design, and hardware design. I learned these topics in
              CSE 100 (Logic Design) and ECE 118 (Mechatronics).
            </p>
            <br />

            <p>
              In my free time I enjoy learning about cybersecurity and Linux
              ricing. I use arch btw ;) I also dabble with baking and playing
              the guitar.
            </p>
            <br />
          </div>
        </div>

        {/* Skill Wall */}
        <div className="about-right-container">
          <div className="skill-wall">
            {skills_data.map((columnSkills, index) => 
              <SkillColumn key={index} skills={columnSkills} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default About
