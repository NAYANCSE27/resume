import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <h2 class="logo">
          Port<span>folio</span>
        </h2>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">SKILLS</a>
          </li>
          <li>
            <a href="#">CONTACT ME</a>
          </li>
        </ul>
        <button class="glow__on__hover" type="button">
          SUBSCRIBE
        </button>
      </nav>
    </div>
  );
}

export default Header;
