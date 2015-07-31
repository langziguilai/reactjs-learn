var CommentBox = React.createClass({
	getInitialState:function () {
	    return {data:[]};
	},
	commentDidMount:function  () {
        $.$.ajax({
        	url: this.props.url,
        	dataType: 'json',
        	cache:false,
        	success:function(data){
        		this.setState({data:data});
        	}.bind(this),
        	error:function(xhr,state,err){
                console.error(this.props.url, status, err.toString());
        	}.bind(this)
        });
        	    
	},
	render: function() {
		return (
			<div className="commentBox"></div>
		);
	}
});