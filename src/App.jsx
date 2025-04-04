import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";



function App() {
    return (
        <Router>
            <nav style={{ padding: "20px", background: "#f0f0f0" }}>
                <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
                <Link to="/create">Create User</Link>
            </nav>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/create" element={<CreateUser />} />
            </Routes>
        </Router>
    );
}

export default App;