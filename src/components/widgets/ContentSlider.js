import React, { Fragment } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import '../styles/ContentSlider.css'
import MusicCard from './MusicCard';
import ArticleCard from './ArticleCard';
import ArtistCard from './ArtistCard';

const Slider = (props) => {
	return (
		<div className='content_slider'>
			<a className='header' href={props.page}>{props.title}</a>
			<div className='contentSlider_content row'>
				{props.children}
			</div>
		</div>
	)
}

const ContentSlider = (props) => {
	let { songs } = useSelector(state => state.musicReducer);
	return (
		<Fragment>
			<div className='text-center'>
				<Link to={"/home/music/browse"} className="btn-browse">
					Browse
				</Link>
			</div>
			<Slider title={"Top Artist"} >
				{
					props.data.Artists
						? props.data.Artists.map(item => (
							<ArtistCard
								key={item.artistId}
								artist={item.artist}
								artistId={item.artistId}
								img={item.img}
							/>
						))
						: 'loading...'
				}
			</Slider>
			<Slider title={"Continue listening"}>
				{
					songs
						? songs.map((item, i) => (
							<MusicCard key={i} music={item} />
						))
						: "Loading..."
				}
			</Slider>
			{console.log(songs)}
			<Slider title={"Latest News"} page={"/home/news"}>
				{
					props.data.article
						? props.data.article.map(item => (
							<ArticleCard
								key={item.id}
								image={item.img}
								title_name={item.title}
								readTime={item.readTime}
								timesRead={item.timesRead}
								author_name={item.author_name}
								comment_count={item.comment_count}
								link={item.link}
							/>
						))
						: 'loading...'
				}
			</Slider>
			<Slider title={"Mixes"}>
				{
					songs
						? songs.map(item => (
							item.song_type === "mixtape"
								? <MusicCard key={item.id} music={item} />
								: <br />
						))
						: 'loading...'
				}
			</Slider>
		</Fragment>
	)
}
export default Slider;
