import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer(props) {

  return (
    <footer >
      <section>
      <p >© 2021 Company, Inc</p>
      <a href="https://www.facebook.com/stacey.brinkley.94" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/stacey-brinkley-688b0520b/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/BrinkleyS24" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      </section>
    </footer>
  );
}

export default Footer;