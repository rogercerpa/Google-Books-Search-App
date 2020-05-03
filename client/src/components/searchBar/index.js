import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchBar = (props) => {
	return (
		<Form inline>
			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
				<Label for="exampleEmail" className="mr-sm-2">
					Book name
				</Label>
				<Input
					type="text"
					id="exampleEmail"
					placeholder="Think and grow rich"
				/>
			</FormGroup>
			<Button>Search</Button>
		</Form>
	);
};

export default SearchBar;
