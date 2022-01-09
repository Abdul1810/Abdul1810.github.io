//Import App Styles 
import './App.css';

//import Modules
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App () {
	return (
		<BrowserRouter>
			<div className="flex">
				<div id="links">
					<Link to="/gif">Click This</Link>
				</div>
			</div>
		<Routes>
			<Route path="/home" element={<h1>Good Bye !.</h1>}></Route>
			<Route only path="/gif" element={Gif()}></Route>
		</Routes>
		</BrowserRouter>
	)
}

const Gif = (props) => {
	return (
		<div>
			<img src="https://c.tenor.com/QqO0dLDL1csAAAAC/tails-the-fox-miles-tails-prower.gif" alt="dummy"></img>
			<div id="links">
				<Link to="/home">Clean</Link>
			</div>
		</div>
	)
}