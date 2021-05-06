import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img src="https://wallpapercave.com/wp/wp2570965.jpg " alt="" />
				<Avatar className="sidebar__avatar" />
				<h2>Shivangi Singh</h2>
				<h4>shivigomsi@gmail.com</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed your profile</p>
					<p className="sidebar__statNumber">2,543</p>
				</div>
				<div className="sidebar__stat">
					<p>Views of your post</p>
					<p className="sidebar__statNumber">2,448</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("Tableau")}
				{recentItem("Data visualization")}
				{recentItem("Hiring")}
				{recentItem("development")}
			</div>
		</div>
	);
}

export default Sidebar;
