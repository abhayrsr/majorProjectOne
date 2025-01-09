import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand ms-4" href="#">
            The Shopping Site
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item mx-2">
                <a class="nav-link"  href="#">
                  Men
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#">
                  Women
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#">
                  Kids
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#">
                  Beauty
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#">
                  Electronics
                </a>
              </li>
              <li class="nav-item mx-5">
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    size="70"
                  />
                </form>
              </li>
              <li class="nav-item ms-5">
                <form class="d-flex" role="search">
                  <button class="btn btn-outline-success mr-1" type="submit">
                    Login
                  </button>
                </form>
              </li>
              <li class="nav-item ms-4">
                <div class="mt-1">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </li>
              <li class="nav-item ms-4">
                <div class="mt-1">
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">The Shopping Site</a>
          
          <form class="d-flex" role="search">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Login
            </button>
          </form>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                <FontAwesomeIcon icon={faHeart} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </li>
            </ul>
            </div>
        </div>
      </nav> */}
    </>
  );
}
