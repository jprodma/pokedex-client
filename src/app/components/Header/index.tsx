import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href={'/'}>Search Pokemon</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" href={'/caughtPokemon'}>My Pokemon</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
