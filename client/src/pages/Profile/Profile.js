import React from 'react';
import './Profile.scss';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';

const Profile = () => {
	return (
		<>
			<Topbar />
			<div className="profile">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								className="profileCoverImg"
								src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/3.jpeg?raw=true"
								alt=""
							/>
							<img
								className="profileUserImg"
								src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/7.jpeg?raw=true"
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">safak</h4>
							<span className="profileInfoDesc">helo my</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
