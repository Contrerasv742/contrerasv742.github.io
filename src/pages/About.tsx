import '../styles/About.css'
import portrait from '../assets/about/portrait.jpg'
import cppIcon from '../assets/about/cpp.png';
import cIcon from '../assets/about/c.png';
import gitIcon from '../assets/about/git.png';
import pythonIcon from '../assets/about/python.png';
import reactIcon from '../assets/about/react.svg';
import tsIcon from '../assets/about/TypeScript.avif';
import rustIcon from '../assets/about/rust.png';

interface SkillData {
  icon: string;
  name: string;
  description: string;
}

interface HexagonSkillProps extends SkillData {
  index: number;
}

function HexagonSkill({ icon, name, description, index }: HexagonSkillProps) {
  return (
    <div 
      className="hex-wrapper"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="hex-flip-container">
        <div className="hex-flip-inner">
          {/* Front face */}
          <div className="hexagon hex-front">
            <div className="hex-border"></div>
            <div className="hex-glass">
              <div className="hex-content">
                <div className="hex-icon-wrapper">
                  <img src={icon} alt={name} className="hex-icon" />
                </div>
                <span className="hex-name">{name}</span>
              </div>
            </div>
          </div>
          
          {/* Back face */}
          <div className="hexagon hex-back">
            <div className="hex-border"></div>
            <div className="hex-glass hex-glass-back">
              <div className="hex-content">
                <span className="hex-name-back">{name}</span>
                <p className="hex-description">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const skills_data: SkillData[] = [
  { icon: pythonIcon, name: 'Python', description: 'Data science, automation, scripting' },
  { icon: cppIcon, name: 'C++', description: 'Systems programming, performance-critical code' },
  { icon: cIcon, name: 'C', description: 'Embedded systems, low-level programming' },
  { icon: rustIcon, name: 'Rust', description: 'Memory-safe systems programming' },
  { icon: reactIcon, name: 'React', description: 'Frontend UI development' },
  { icon: tsIcon, name: 'TypeScript', description: 'Type-safe JavaScript' },
  { icon: gitIcon, name: 'Git', description: 'Version control & collaboration' },
];

function HoneycombSkills() {
  // Row layout: 2 - 3 - 2
  const row1 = skills_data.slice(0, 2);
  const row2 = skills_data.slice(2, 5);
  const row3 = skills_data.slice(5, 7);

  return (
    <div className="honeycomb-container">
      <div className="honeycomb-grid">
        <div className="hex-row">
          {row1.map((skill, i) => (
            <HexagonSkill key={skill.name} {...skill} index={i} />
          ))}
        </div>
        <div className="hex-row">
          {row2.map((skill, i) => (
            <HexagonSkill key={skill.name} {...skill} index={i + 2} />
          ))}
        </div>
        <div className="hex-row">
          {row3.map((skill, i) => (
            <HexagonSkill key={skill.name} {...skill} index={i + 5} />
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
      <div className="about-container">
        <div className="about-left-container">
          <div className="portrait-container">
            <img src={portrait} alt="Portrait" />
          </div>
          <div className="about-text">
            <p>
              I am a Computer Engineering graduate from UC Santa Cruz. I
              have a concentration in Computer Network with a deep interest
              in creating memory-safe C and C++ code.
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
          </div>
        </div>
        {/* Skill Wall */}
        <div className="about-right-container">
          <HoneycombSkills />
        </div>
      </div>
    </>
  );
}

export default About;
