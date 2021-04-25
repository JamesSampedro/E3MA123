const NavItem = ({navText, navItem}) => {
    return (
        <div className={`nav-props navItemNo${navItem}`}>
            <p>{navText}</p>
        </div>
    )
}

export default NavItem
