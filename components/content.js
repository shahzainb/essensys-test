import React from 'react';
import { Table } from './table';

export const Content = React.createClass({
	render () {
		return (
			<div className="content-wrapper">
				<div className="content">
					{(this.props.items.length > 0) ? <Table items={this.props.items} /> : null}
				</div>
			</div>
		);
	}
});