'use client';

const FooterMenu = () => (
  <footer style={{ backgroundColor: '#292929', color: 'white' }}>
    <div className="container py-4">
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-4">
          <h5 className="text-uppercase">Navigation</h5>
          <hr style={{ borderColor: 'white' }} />
          <ul className="list-unstyled">
            <li>
              <a href="#about" className="text-white text-decoration-none">
                About Us
              </a>
            </li>
            <li>
              <a href="#employment" className="text-white text-decoration-none">
                Employment
              </a>
            </li>
            <li>
              <a href="#videos" className="text-white text-decoration-none">
                Videos
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col-md-4">
          <h5 className="text-uppercase">Main Menu</h5>
          <hr style={{ borderColor: 'white' }} />
          <ul className="list-unstyled">
            <li>
              <a href="#men" className="text-white text-decoration-none">
                Men
              </a>
            </li>
            <li>
              <a href="#women" className="text-white text-decoration-none">
                Women
              </a>
            </li>
            <li>
              <a href="#kids" className="text-white text-decoration-none">
                Kids
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-md-4">
          <h5 className="text-uppercase">Connect</h5>
          <hr style={{ borderColor: 'white' }} />
          <p>Sign up to get the latest updates:</p>
          <form className="d-flex">
            <input
              type="email"
              className="form-control me-2"
              placeholder="Enter Email Address"
              aria-label="Email Address"
              required
            />
            <button type="submit" className="btn btn-dark">
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterMenu;
