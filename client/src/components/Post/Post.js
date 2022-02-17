import { MoreVert } from '@material-ui/icons';
import React from 'react';
import './Post.scss';

const Post = () => {
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true"
							alt=""
						/>
						<span className="postUsername">aaa</span>
						<span className="postDate">23</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">abc</span>
					<img
						className="postImg"
						src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true"
						alt=""
					/>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/like.png?raw=true"
							alt=""
						/>
						<img
							className="likeIcon"
							src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/heart.png?raw=true"
							alt=""
						/>
						<span className="postLikeCounter">abc</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">abc</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
