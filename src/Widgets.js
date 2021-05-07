import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecord />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<Info />
			</div>
			{newsArticle(
				"4.14 lakh new cases,3927 deaths",
				"Top news - 37,456 readers"
			)}
			{newsArticle(
				"Cognizant tries to hire,train and retain",
				"3h ago - 632 readers"
			)}
			{newsArticle("Ok Google, Start hybrid work", "1d ago  - 2,698 readers")}
			{newsArticle(
				"Cos offer rewards, more leaves to staff",
				"1d ago - 2,102 readers"
			)}
			{newsArticle(
				"LinkedIn India's Top companies 2021",
				"1d ago  - 2,128 readers"
			)}
		</div>
	);
}

export default Widgets;
