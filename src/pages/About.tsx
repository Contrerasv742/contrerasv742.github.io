import '../styles/About.css'
import portrait from '../assets/about/portrait.jpg'
import cppIcon from '../assets/about/cpp.png';
import cIcon from '../assets/about/c.png';
import gitIcon from '../assets/about/git.png';
import pythonIcon from '../assets/about/python.png';
import reactIcon from '../assets/about/react.svg';
import tsIcon from '../assets/about/TypeScript.avif';
import rustIcon from '../assets/about/rust-crab.webp';

interface SkillData {
  icon: string;
  name: string;
  years: string;
  description: string;
}

interface HexagonSkillProps extends SkillData {
  index: number;
}

function HexagonSkill({ icon, name, description, years, index }: HexagonSkillProps) {
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
                <span className="hex-years">{years}</span>
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
  { icon: pythonIcon, name: 'Python', description: 'Data science, automation, scripting', years: '1 year', },
  { icon: cppIcon, name: 'C++', description: 'Systems programming, performance-critical code', years: '1 year', },
  { icon: cIcon, name: 'C', description: 'Embedded systems, low-level programming', years: '1 year', },
  { icon: rustIcon, name: 'Rust', description: 'Memory-safe systems programming', years: '1 year', },
  { icon: reactIcon, name: 'React', description: 'Frontend UI development', years: '1 year', },
  { icon: tsIcon, name: 'TypeScript', description: 'Type-safe JavaScript', years: '1 year', },
  { icon: gitIcon, name: 'Git', description: 'Version control & collaboration', years: '1 year', },
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
      <div className="heading">About</div>
      <div className="about-container">
        <div className="about-left-container">
          <div className="portrait-container">
            <img src={portrait} alt="Portrait" />
          </div>
          <div className="about-text">
            <p>
              I'm a Computer Engineering graduate from UC Santa Cruz, where
              I completed all three concentration tracks: Systems 
              Programming, Computer Systems, and Networking. My focus is 
              low-level engineering close to the hardware — writing 
              efficient, memory-safe C, C++, and Rust.
            </p>
            <br />
            <p>
              I design and build embedded systems from the ground up. My 
              projects range from fully 3D-printed autonomous robots running
              ESP32 firmware to a hardware-backed password vault — giving m
              hands-on experience with microcontrollers, motor and servo 
              control, sensor integration, and the real-time firmware that
              ties them together.
            </p>
            <br/>

            <p>
              On the networking side, I've built rigorous, protocol-level
              systems in C — including HTTP, proxy, and logging servers — 
              many of them multithreaded. That work made me proficient in 
              thread safety, memory management, and writing efficient code 
              within large codebases.
            </p>
            <br />

            <p>
              Outside of engineering, I enjoy Linux customization (Arch, of
              course), cycling, volunteering at my local bike shop, and 
              playing guitar.
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
