import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Acrylic from "./screens/Acrylic/Acrylic";
import Balloon from "./screens/Balloon/Balloon";
import Barnacle from "./screens/Barnacle/Barnacle";
import Clay from "./screens/Clay/Clay";
import Deer from "./screens/Deer/Deer";
import Marble from "./screens/Marble/Marble";
import Paint from "./screens/Paint/Paint";
import Umbrella from "./screens/Umbrella/Umbrella";
import Wood from "./screens/Wood/Wood";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/acrylic" element={<Acrylic />} />
                <Route path="/balloon" element={<Balloon />} />
                <Route path="/barnacle" element={<Barnacle />} />
                <Route path="/clay" element={<Clay />} />
                <Route path="/deer" element={<Deer />} />
                <Route path="/marble" element={<Marble />} />
                <Route path="/paint" element={<Paint />} />
                <Route path="/umbrella" element={<Umbrella />} />
                <Route path="/wood" element={<Wood />} />
            </Routes>
        </Router>
    );
}

export default App;
