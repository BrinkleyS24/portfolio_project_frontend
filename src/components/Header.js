import { Link } from "react-router-dom"

function Header(props) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "100%",
        margin: "auto",
        marginBottom: "3rem"
    };

    return (
        <header>
            <h1>My Portfolio Page</h1>
            <nav style={navStyle}>
                <Link to="/" style={{textDecoration: "none"}}>
                    <div>HOME</div>
                </Link>
                <Link to="/about" style={{textDecoration: "none"}}>
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects" style={{textDecoration: "none"}}>
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;