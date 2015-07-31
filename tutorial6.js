var Comment = React.createClass({
	render: function() {
		return (
			<div className="Comment">
                 <h2 className='commentAuthor'>{this.props.author}</h2>
                 {marked(this.props.children.toString())}
			</div>
		);
	}
});