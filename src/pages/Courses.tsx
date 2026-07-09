import '../styles/Courses.css'

interface CardProps {
  title: string;
  description: string;
  skill:  [string, string, string]
}

function Card({ title, description, skill }: CardProps) {
  return (
    <div className="course-card-container">
      <div className='course-info'>
        <h2 className='course-title' >{title}</h2>
        <div>
          <p className='course-description'>{description}</p>
        </div>
        <ul className='course-skills'>
          <li>{ skill[0] }</li>
          <li>{ skill[1] }</li>
          <li>{ skill[2] }</li>
        </ul>
      </div>
    </div>
  )
}

function Courses() {
  return (
    <>
      <div className="heading">Courses</div>
      <div className='course-container'>
        <div className='course-row'>
          <Card
            title='CSE 130'
            description='Computer Systems Design'
            skill={[
              'System Calls: read/write',
              'Safe memory access: mutex lock',
              'Multithreading + Synchronization',
            ]}
          />
          <Card
            title='ECE 118'
            description='Mechatronics'
            skill={[
              'CAD Design',
              'Signals and Filtering',
              'Mechatronic Design'
            ]}
          />
          <Card
            title='CSE 121'
            description='Embedded Systems'
            skill={[
              'IoT devices',
              'ESP32 coding framework',
              'I2C Device Communication',
            ]}
          />
        </div>
        <div className='course-row'>
          <Card
            title='CSE 156'
            description='Advanced Computer Networks'
            skill={[
              'OSI model',
              'TLS Encryption',
              'Multithreaded proxy server',
            ]}
          />
          <Card
            title='CSE 115A'
            description='Introduction to Software Engineering'
            skill={[
              'Working in a team SCRUM',
              'Workflows, PRs, and Branches',
              'Data base request',
            ]}
          />
          <Card
            title='CSE 150'
            description='Introduction to Computer Networks'
            skill={[
              'Protocols: HTTP, TCP, & DNS',
              'Firewalls, Servers, & Cookies',
              'L2/L3: WiFi, Ethernet, and BGP',
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default Courses;
