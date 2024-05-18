import "./Aside.css"
import { Link } from "react-router-dom";


function Aside(props) {
    let { collapsed } = props
    console.log(collapsed);
    return (
        <aside className={collapsed ? "collapsed" : ""}>
            <nav>
                <Link to={"/"}>
                    Home
                </Link>
                <Link to={"posts"}>
                    Posts
                </Link>
                <Link to={"users"}>
                    Users
                </Link>
            </nav>
        </aside>
    );
}

export default Aside