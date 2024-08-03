import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-div m-up-3 has-acent p-up-2">
        <div className="textbox">
          <div className="text is-dark text-center">
            Made with <span className="is-blue">&lt;/&gt;</span> by Abdelrahman
          </div>
          <div className="footer-icons text-center">
            <a
              href="https://www.linkedin.com/in/abdelrahman-magdy-4944a3242"
              target="_blank"
            >
              <button className="btn-icon nav-icons m-x-1">
                <i className="fab fa-linkedin is-4"></i>
              </button>
            </a>

            <a href="https://github.com/ABDELRAHMAN097" target="_blank">
              <button className="btn-icon nav-icons m-x-1">
                <i className="fab fa-github-square is-4" />
              </button>
            </a>
          </div>
          <div className="text text-center is-2">© 2022 Abdelrahman</div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
