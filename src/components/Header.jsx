import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">Company Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/list">List Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header;