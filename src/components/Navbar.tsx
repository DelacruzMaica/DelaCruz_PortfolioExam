function Navbar() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

      <a className="navbar-brand fw-bold" href="#">
        My Portfolio
      </a>

      {/* Hamburger Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Menu */}
      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <button
              className="nav-link btn btn-link text-white"
              onClick={() => scrollToSection("About")}
            >
              About
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link btn btn-link text-white"
              onClick={() => scrollToSection("Projects")}
            >
              Projects
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link btn btn-link text-white"
              onClick={() => scrollToSection("Contact")}
            >
              Contact
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;