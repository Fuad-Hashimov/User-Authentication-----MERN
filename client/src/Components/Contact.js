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
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="John Smith"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
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
