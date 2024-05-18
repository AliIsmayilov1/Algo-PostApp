import "./Header.css"

function Header(props) {
    let { toggle } = props
    return (
        <header className="container">
            <p>Post App</p>
            <i onClick={toggle} className="fa-solid fa-bars"></i>
        </header>
    )
}
export default Header;