import facebook from "../../images/facebook-icon.svg";
import github from "../../images/github-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p className="footer__copyright">
          &copy; 2023 Supersite, Powered by News API
        </p>
      </div>
      <div className="footer__links">
        <div className="footer__links-home">
          <a href="/" className="footer__home-button">
            Home
          </a>
          <a
            href="https://tripleten.com/special/back-to-school/?cq_plac=&cq_net=g&cq_pos=&cq_med=&cq_plt=gp&cq_cmp=20315329400&utm_source=google&utm_medium=cpc&utm_campaign=Google_Search_USA_TripleTen_Brand_callback&utm_content=149382695174&utm_term=tripleten&gad=1&gclid=Cj0KCQjw_5unBhCMARIsACZyzS2n5XWqLfoe5i4r9rosADhCPqYR9oP39k_qNBGiu4Qqz8HjCy_w02saAndaEALw_wcB"
            className="footer__tripleten-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tripleten
          </a>
        </div>
        <div className="footer__links-social">
          <a
            href="https://github.com/aydar013/news-explorer-frontend"
            target="_blank"
            className="footer__github-button_link"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="footer__github-button" />
          </a>
          <a
            href="https://www.facebook.com"
            className="footer__facebook-button_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="facebook"
              className="footer__facebook-button"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
