import React from 'react';
import './Feed.scss';
import Share from '../Share/Share';
import Post from '../Post/Post';

const Feed = () => {
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				<Post />
			</div>
		</div>
	);
};

export default Feed;
