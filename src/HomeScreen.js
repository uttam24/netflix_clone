import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import userrequests from './Request'
import './css/homescreen.css'

const HomeScreen =()=>{
	return(
		<div className="homescreen">
			<Nav/>
			<Banner/>
			<Row title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchNetflixOriginals}/>
			<Row title="Treding Now" fetchURL={userrequests.fetchTrending}/>
			<Row title="Top Rated" fetchURL={userrequests.fetchTopRated}/>
			<Row title="Action Movies" fetchURL={userrequests.fetchTopActionMovies}/>
			
		</div>
	)
}

export default HomeScreen