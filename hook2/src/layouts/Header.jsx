import { NavLink } from "react-router-dom"

const Header = () => {

    return(
        <header>
            <nav>
                <NavLink to='/bank'>BankReducer</NavLink>
                <NavLink to='/counter'>CountReducer</NavLink>
                <NavLink to='/Thema'>ParentThema</NavLink>
            </nav>
        </header>
    )
}

export default Header