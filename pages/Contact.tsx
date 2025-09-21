import '../styles/Contact.css'
import gmail from '../assets/contact/gmail.png'
import linkedIn from '../assets/contact/linkedin.png'
import gitHub from '../assets/contact/github.png'

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <div className="contact-container">
        <img src={gmail}/>
        <img src={linkedIn} />
        <img src={gitHub} />
        {/* <h2> */}
        {/*   Email:  */}
        {/*   <a href="mailto:Contrerasv742@gmail.com">Contrerasv742@gmail.com</a> */}
        {/* </h2> */}
        {/* <h2> */}
        {/*   LinkedIn:  */}
        {/*   <a href="https://linkedin.com/in/victor-perez-contreras" target="_blank" rel="noopener noreferrer"> */}
        {/*     Victor Perez Contreras */}
        {/*   </a> */}
        {/* </h2> */}
        {/* <h2> */}
        {/*   GitHub:  */}
        {/*   <a href="https://github.com/Contrerasv742/" target="_blank" rel="noopener noreferrer"> */}
        {/*     Contrerasv742 */}
        {/*   </a> */}
        {/* </h2> */}
      </div>
    </>
  )
}

export default Contact;
