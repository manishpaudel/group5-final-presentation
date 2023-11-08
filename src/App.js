import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Overview from "./components/Overview";
import ProjectCharter from "./components/ProjectCharter";
import WBS from "./components/WBS";
import Timeline from "./components/Timeline";
import Budget from "./components/Budget";
import RisksAnalysis from "./components/RisksAnalysis";
import CommunicationPlam from "./components/CommunicationPlan";
import RACI from "./components/RACI";
import Bibliography from "./components/Bibliography";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					Company-Wide Upgrade to Windows 11: Contoso Consulting
				</header>
				<div className="App-body">
					<nav className="App-nav">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/overview">Overview</NavLink>
						<NavLink to="/project-charter">Project Charter</NavLink>
						<NavLink to="/wbs">WBS</NavLink>
						<NavLink to="/timeline">Timeline</NavLink>
						<NavLink to="/raci">RACI</NavLink>
						<NavLink to="/budget">Budget</NavLink>
						<NavLink to="/risks-analysis">Risks Analysis</NavLink>
						<NavLink to="/communication-plan">Communication Plan</NavLink>
						<NavLink to="/bibliography">Bibliography</NavLink>
					</nav>
					<main className="App-content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/overview" element={<Overview />} />
							<Route path="/project-charter" element={<ProjectCharter />} />
							<Route path="/wbs" element={<WBS />} />
							<Route path="/timeline" element={<Timeline />} />
							<Route path="/raci" element={<RACI />} />
							<Route path="/budget" element={<Budget />} />
							<Route path="/risks-analysis" element={<RisksAnalysis />} />
							<Route
								path="/communication-plan"
								element={<CommunicationPlam />}
							/>
							<Route path="/bibliography" element={<Bibliography />} />

							{/* Add more routes here as needed */}
						</Routes>
					</main>
				</div>
			</div>
		</Router>
	);
}

export default App;
