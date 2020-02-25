import React, { Component } from "react";

export default class ArticleDetailScreen extends Component {
	componentDidMount() {
		const articleId = this.props.match.params.articleId;
		console.log("==> ", articleId);
	}

	render() {
		return (
			<div>
				<h2>Article Detail Screen</h2>
			</div>
		);
	}
}
