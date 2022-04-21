import { Link } from "react-router-dom";
import CategoriesList from "../categories-list/CategoryList";
import PagesList from "../pages-list/PagesList";

export default function Navbar() {
    return (
        <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                  <Link className="nav-link px-2 text-white" to="/">Home</Link>
              </li>
              <CategoriesList />
              <PagesList showPages={false} />
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">Login</button>
              <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
    )
}