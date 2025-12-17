import '../styles/Contact.css'

function Contact() {
  return (
    <> 
      <h1>Contact</h1>
      <div className="contact-container">
        {/*  
          Social Media Icons Hover Effect by Ephraim Sangma
          Link: https://prismic.io/blog/css-hover-effects
          Accessed: 13 September 2025
        */}
        <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous" />

        <ul>
          <li>
            <a href="https://github.com/Contrerasv742/">
              <i className="fab fa-github icon"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/victor-perez-contreras">
              <i className="fab fa-linkedin icon"></i>
            </a>
          </li>
          <li>
            <a href="mailto:Contrerasv742@gmail.com">
              <i className="far fa-envelope icon"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-mailchimp icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contact;
