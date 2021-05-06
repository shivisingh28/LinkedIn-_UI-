import {
	Search,
	Home,
	SupervisorAccount,
	BusinessCenter,
	Chat,
	Notifications,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
					alt=""
				/>
				<div className="header__search">
					<Search />
					<input type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={Home} title="Home" />
				<HeaderOption Icon={SupervisorAccount} title="My Network" />
				<HeaderOption Icon={BusinessCenter} title="Jobs" />
				<HeaderOption Icon={Chat} title="Messaging" />
				<HeaderOption Icon={Notifications} title="Notifications" />
				<HeaderOption
					avatar="https://media-exp1.licdn.com/dms/image/C4E03AQFVb2DXbar03w/profile-displayphoto-shrink_800_800/0/1592200385663?e=1625702400&v=beta&t=Ua4gQUvpSdDnl7U_5ZrT-eb5qHV_c_PTj7Gs3w-VPg8"
					title="Me"
				/>
			</div>
		</div>
	);
}

export default Header;
