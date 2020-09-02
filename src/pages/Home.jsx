import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import Search from '../Search';

function Home() {
	return (
		<div className='home'>
			<div className='home_header'>
				<div className='home_headerLeft'>
					{/* links */}
					<Link to='/about'> About </Link>
					<Link to='/store'> Store </Link>
				</div>
				<div className='home_headerRight'>
					{/* links */}
					<Link to='/gmail'> Gmail </Link>
					<Link to='/images'> Images </Link>
					{/* icon */}
					<AppsIcon />
					{/* avatar */}
					<Avatar />
				</div>
			</div>

			<div className='home_body'>
				<img
					src='https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png'
					alt='file google logo svg wikimedia commons'
				/>

				<div className='home_inputContainer'>
					<Search />
				</div>
			</div>
		</div>
	);
}

export default Home;

//https://commons.wikimedia.org/wiki/Category:Google_SVG_logos#/media/File:Google_2015_logo.svg
//
