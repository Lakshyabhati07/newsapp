import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container my-5">
          <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
              <section className="mb-4">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="/"
                  role="button"
                >
                  <i className="fab fa-daily"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="www.google.com"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="www.instagram.com"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.linkedin.com/in/lakshya-bhati-55219b219/"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://github.com/Lakshyabhati07"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>
              </section>
            </div>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2024 Copyright:
              <a className="text-white" href="/">Lakshya Bhati</a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
