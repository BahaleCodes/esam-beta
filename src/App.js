import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import JsonData from './db/ESAM.json';
import { ThemeContext, themes } from './components/styles/Theme';
import Layout from './components/widgets/Layout';
import AddSong from './containers/AddSong';
import Login from './containers/Login';
import HomeContainer from './components/widgets/HomeContainer';
import Profile from './containers/Profile';
import Search from './containers/Search';
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
import 'antd/dist/antd.css'; 

const App = () => {
	const { access_token, login, logout, userId } = useAuth();
	const { song_id, set_song } = useSong();
	const [data, setData] = useState({});
	let routes;
	useEffect(() => {
		setData(JsonData);
	}, []);
	if (true) {
		routes = (
			<Switch>
				{/* <Route path="/" exact component={Login} /> */}
				<Route path="/home" exact component={HomeContainer} />
				<Route path="/new-song" exact component={AddSong} />
				<Route path="/profile" exact component={Profile} />
				<Route path="/search" exact component={Search} />
				<Route path="/music/browse/:albumId" exact component={ViewAlbum} />
				<Route path="/article/:articleId" exact component={Article} />
				<Route path="/news" exact render={(props) => <News data={data.articles} />} />
				<Route path="/about-us" exact render={(props) => <AboutUs data={data.About} />} />
				<Route path="/contact-us" exact component={ContactUs} />
				<Route path="/terms-and-conditions" exact component={TermsAndConditions} />
				<Route path="/privacy-policy" exact component={Privacy} />
				<Route path="/music/browse" exact component={Browse} />
				<Route path="/music/browse" exact component={Browse} />
				<Redirect to="/home" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				{/* <Route path="/home" exact component={HomeContainer} /> */}
				<Route path="/password-reset" exact component={Password_reset}/>
				<Route path="/about-us" exact render={(props) => <AboutUs data={data.About} />} />
				<Route path="/contact-us" exact component={ContactUs} />
				<Route path="/terms-and-conditions" exact component={TermsAndConditions} />
				<Route path="/privacy-policy" exact component={Privacy} />
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
					set_song: set_song
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
