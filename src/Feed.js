import {
	CalendarViewDay,
	Create,
	EventNote,
	Image,
	Subscriptions,
} from "@material-ui/icons";
import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<Create />
					<form>
						<input type="text" />
						<button type="Submit">Send</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={Image} title="Photo" color="#70B5F9" />
					<InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
					<InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
					<InputOption
						Icon={CalendarViewDay}
						title="Write Article"
						color="#7FC15E"
					/>
				</div>
			</div>
			{/**Posts */}
			<Post
				name="Shivi"
				description="ths is test"
				message="yoooooooo"
				photoUrl=""
			/>
			<Post />
			<Post />
			<Post />
		</div>
	);
}

export default Feed;
