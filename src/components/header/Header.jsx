import CategoriesList from "../categories-list/CategoryList";

export default function Header() {
    return(
        <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
              <CategoriesList />
            </nav>
        </div>
    )
}