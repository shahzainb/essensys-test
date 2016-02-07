import React from 'react';

export const Article = React.createClass({
	render () {
		return (
			<article className="splash">
				<h1 className="splash-head">Click the button to get the data for each office</h1>
				<p className="splash-subhead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<p>
					<a href="#" className="pure-button pure-button-primary" onClick={this.props.getTableData}>Get Data</a>
				</p>
			</article>
		);
	}
});