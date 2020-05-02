import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const AppTitle = (props) => {
	return (
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3">Google Books Search</h1>
					<p className="lead">Search for and Save Books of Interest</p>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default AppTitle;
