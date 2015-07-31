var CommentBox = React.createClass({
	render: function() {
		return ( < div className = "CommentBox" >
			< h1 > Commments < /h1>
			< CommentList / >
			< CommentForm / >
			< /div>
		);
	}
});
React.render( < CommentBox / > , document.getElementById('content'))