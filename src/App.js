import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import "./App.css";
import Overview from "./components/Overview";
import ProjectCharter from "./components/ProjectCharter";
import WBS from "./components/WBS";
import Timeline from "./components/Timeline";
import Budget from "./components/Budget";
import RisksAnalysis from "./components/RisksAnalysis";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					Company-Wide Upgrade to Windows 11: Contoso Consulting
				</header>
				<div className="App-body">
					<nav className="App-nav">
						<NavLink to="/">Overview</NavLink>
						<NavLink to="/project-charter">Project Charter</NavLink>
						<NavLink to="/wbs">WBS</NavLink>
						<NavLink to="/timeline">Timeline</NavLink>
						<NavLink to="/budget">Budget</NavLink>
						<NavLink to="/risks-analysis">Risks Analysis</NavLink>
					</nav>
					<main className="App-content">
						<Routes>
							<Route path="/" element={<Overview />} />
							<Route path="/project-charter" element={<ProjectCharter />} />
							<Route path="/wbs" element={<WBS />} />
							<Route path="/timeline" element={<Timeline />} />
							<Route path="/budget" element={<Budget />} />
							<Route path="/risks-analysis" element={<RisksAnalysis />} />
							{/* Add more routes here as needed */}
						</Routes>
					</main>
				</div>
			</div>
		</Router>
	);
}

export default App;
