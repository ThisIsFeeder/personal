import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Error404Screen from './screens/Error404Screen';
import ArticleDetailScreen from './screens/ArticleDetailScreen';
import AboutUsScreen from './screens/AboutUsScreen'

function App() {
	return (
		<BrowserRouter>
			<Menu />
			<Switch>
				<Route exact path="/" component={HomeScreen} />
				<Route path="/home" component={HomeScreen} />
				<Route path="/about-us" component={AboutUsScreen} />
				<Route path="/article-detail/:articleId" component={ArticleDetailScreen} />
				<Route path="/login" component={LoginScreen} />
				<Route path="*" component={Error404Screen} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
