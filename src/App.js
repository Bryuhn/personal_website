import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/nav";
import Landing from "./Components/landing";
import React from "react";

function Welcome() {
	return (
		<div className="">
			<NavBar />
			<Routes>
				<Route path="" element={<Landing />} />
				<Route path="/Home" element={<Landing />} />
			</Routes>
		</div>
	);
}

export default Welcome;
