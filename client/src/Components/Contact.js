import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="container">
          <div className="row  mb-4">
            <div className="col-12 mb-5">
              <h3 className="fs-5 text-center mb-0">Contact US</h3>
              <h1 className="display-6 text-center mb-4">
                Have <b>Some</b> Question?
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.monyoconsulting.com/wp-content/uploads/2019/12/10_Contact-Phobio.png"
                alt="contact"
                className="w-75"
              />
            </div>
            <div className="col-md-6">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Smith"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Send Message <FaPaperPlane className="ms-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
