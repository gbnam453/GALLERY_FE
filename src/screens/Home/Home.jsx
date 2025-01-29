import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
    return (
        <div className="home-container">
            <h1>Gallery Home</h1>
            <div className="button-grid">
                <Link to="/umbrella" className="nav-button">Umbrella</Link>
                <Link to="/barnacle" className="nav-button">Barnacle</Link>
                <Link to="/marble" className="nav-button">Marble</Link>
                <Link to="/deer" className="nav-button">Deer</Link>
                <Link to="/acrylic" className="nav-button">Acrylic</Link>
                <Link to="/wood" className="nav-button">Wood</Link>
                <Link to="/paint" className="nav-button">Paint</Link>
                <Link to="/clay" className="nav-button">Clay</Link>
                <Link to="/balloon" className="nav-button">Balloon</Link>
            </div>
        </div>
    );
}

export default Home;
