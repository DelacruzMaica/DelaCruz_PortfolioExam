import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin");
  };

  return (
    <footer
      className="bg-dark text-white text-center p-3"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <p>© 2026 My Portfolio</p>
    </footer>
  );
}

export default Footer;