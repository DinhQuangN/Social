import React from 'react';
import './Topbar.scss';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';

const Topbar = () => {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">DQ</span>
			</div>
			<div className="topbarCenter">
				<div className="searchBar">
					<Search />
					<input
						className="searchInput"
						placeholder="Search for friend, port and video"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">HomePage</span>
					<span className="topbarLink">Timeline</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Person />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Chat />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBadge">1</span>
					</div>
				</div>
				<img
					src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true"
					alt="error img"
					className="topbarImg"
				/>
			</div>
		</div>
	);
};

export default Topbar;
