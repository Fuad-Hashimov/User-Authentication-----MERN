import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white bg-primary mt-5">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-12 col-md-3 mb-2">
                <h4>FINE ART</h4>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      type="text"
                      id="newsletter1"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button
                      className="btn btn-primary rounded-pill px-4"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p>2021 Company , Inc. All right reserved</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a to="#" className="link-light">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="ms-3">
                  <a to="#" className="link-light">
                    <FaInstagram />
                  </a>
                </li>
                <li className="ms-3">
                  <a to="#" className="link-light">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
