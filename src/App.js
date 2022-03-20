import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import JsonData from './db/ESAM.json';
import { ThemeContext, themes } from './components/styles/Theme';
import Layout from './components/widgets/Layout';
import Login from './containers/Login';
import HomeContainer from './components/widgets/HomeContainer';
import Profile from './containers/Profile';
import Search from './containers/Search';
import AddMusic from './components/widgets/AddMusic';
import Article from './containers/Article';
import News from './containers/News';
import AboutUs from './containers/About-Us';
import ContactUs from './containers/Contact-Us';
import TermsAndConditions from './containers/TermsAndConditions';
import Privacy from './containers/PrivacyPolicy';
import Browse from './containers/Browse';
import ViewAlbum from './components/widgets/ViewAlbum';
import Password_reset from './containers/Password_reset';
import { AuthContext } from './context/auth-context';
import { MusicContext } from './context/music-context';
import { useAuth } from './hooks/auth-hooks';
import { useSong } from './hooks/music-hook';

const App = () => {
	const { access_token, login, logout, userId } = useAuth();
	const { song_id, play_song } = useSong();
	const [data, setData] = useState({});
	let routes;
	useEffect(() => {
		setData(JsonData);
	}, []);
	if (access_token) {
		routes = (
			<Switch>
				{/* <Route path="/" exact component={Login} /> */}
				<Route path="/home" exact component={HomeContainer} />
				<Route path="/home/profile" exact component={Profile} />
				<Route path="/home/search" exact component={Search} />
				<Route path="/home/add" exact component={AddMusic} />
				<Route path="/home/music/browse/:albumId" exact component={ViewAlbum} />
				<Route path="/home/article/:articleId" exact component={Article} />
				<Route path="/home/news" exact render={(props) => <News data={data.articles} />} />
				<Route path="/home/about-us" exact render={(props) => <AboutUs data={data.About} />} />
				<Route path="/home/contact-us" exact component={ContactUs} />
				<Route path="/home/terms-and-conditions" exact component={TermsAndConditions} />
				<Route path="/home/privacy-policy" exact component={Privacy} />
				<Route path="/home/music/browse" exact component={Browse} />
				<Redirect to="/home" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				{/* <Route path="/home" exact component={HomeContainer} /> */}
				<Route path="/home/password-reset" exact component={Password_reset}/>
				<Route path="/home/about-us" exact render={(props) => <AboutUs data={data.About} />} />
				<Route path="/home/contact-us" exact component={ContactUs} />
				<Route path="/home/terms-and-conditions" exact component={TermsAndConditions} />
				<Route path="/home/privacy-policy" exact component={Privacy} />
				<Route path="/" exact component={Login} />
				<Redirect to="/" />
			</Switch>
		)
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!access_token,
				access_token: access_token,
				userId: userId,
				login: login,
				logout: logout
			}}
		>
			<MusicContext.Provider
				value={{
					isPlaying: !!song_id,
					song_id: song_id,
					play_song: play_song
				}}
			>
				<ThemeContext.Provider value={themes.dark}>
					<Layout>
						<main>{routes}</main>
					</Layout>
				</ThemeContext.Provider>
			</MusicContext.Provider>
		</AuthContext.Provider>
	)
}

export default App;


// asdfghaSa@1