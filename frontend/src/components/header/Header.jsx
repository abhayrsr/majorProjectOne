import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">The Shopping Site</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success mr-1" type="submit">
              Login
            </button>

            <div class="mt-1 mx-3">
              <FontAwesomeIcon icon={faHeart} />
            </div>

            <div class="mt-1">
              <FontAwesomeIcon icon={faCartShopping} />
            </div>

          </form>
        </div>
      </nav>
    </>
  );
}
