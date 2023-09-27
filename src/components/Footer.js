// src/components/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Information</h5>
            <p>
              Kevin Panchal<br />
              Kevinpanchal95@gmail.com<br />
              669-338-****
            </p>
          </div>
          <div className="col-md-6">
            <h5>Follow Me</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
      </div>

      <div class="alert alert-info" role="alert">
            Thank You for visiting my website...
      </div>
    </footer>
  );
}

export default Footer;
