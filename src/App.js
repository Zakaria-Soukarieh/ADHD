// import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
// import "./App.css";
// import React, { useState } from "react";
// import { Navbar, MenuBar } from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
// // import Services from "./pages/services/Services";
// // import Projects from "./pages/projects/Projects";
// // import Clients from "./pages/clients/Clients";
// import Contact from "./pages/contact/contact";
// import Footer from "./components/footer/Footer";

// function App() {
// 	const [menubar, setMenuBar] = useState(false);
// 	return (
// 		<>
// 			<Router>
// 				<Navbar setMenuBar={setMenuBar} menubar={menubar} />
// 				<MenuBar menubar={menubar} />
// 				{/* <Switch> */}
// 				<Routes>
// 					<Route path="/" exact component={Home} />
// 					{/* <Route path="/services" component={Services} /> */}
// 					{/* <Route path="/projects" component={Projects} /> */}
// 					{/* <Route path="/clients" component={Clients} /> */}
// 					<Route path="/contact" component={Contact} />
// 				</Routes>
// 				{/* </Switch> */}
// 				<Footer />
// 			</Router>
// 		</>
// 	);
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import { Navbar, MenuBar } from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import UnderstandingADHDPage from "./pages/UnderstandingADHDPage/UnderstandingADHDPage";
// import Projects from "./pages/projects/Projects";
import Tools from "./pages/tools/tools.jsx";
import Timer1 from "./components/timer/Timer1";
import TodoList from "./components/to-do/TodoList";

import Contact from "./pages/contact/contact";
import Footer from "./components/footer/Footer";

function App() {
	const [menubar, setMenuBar] = useState(false);
	return (
		<>
			<Router>
				<Navbar setMenuBar={setMenuBar} menubar={menubar} />
				<MenuBar menubar={menubar} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/UnderstandingADHDPage" element={<UnderstandingADHDPage />} />
					{/* <Route path="/projects" element={<Projects />} /> */}

					<Route path="/tools" element={<Tools />}>
						{/* <Route index element={<Navbar />} /> */}
						<Route path='timer' element={<Timer1 />} />
						<Route path='to-do' element={<TodoList />} />
					</Route>

					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
