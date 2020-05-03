import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from 'reactstrap';
import API from '../utils/API';
import SearchBar from '../components/searchBar/index';

const useStyles = makeStyles((theme) => ({
	root  : {
		flexGrow : 1
	},
	paper : {
		padding   : theme.spacing(2),
		textAlign : 'center',
		color     : theme.palette.text.secondary
	}
}));

export default function FullWidthGrid() {
	const classes = useStyles();
	const [ books, setBooks ] = useState([]);

	useEffect(() => {
		loadBooks();
	}, []);

	function loadBooks() {
		API.getBooks()
			.then((res) => setBooks(res.data))
			.catch((err) => console.log(err));
	}

	function deleteBook(id) {
		API.deleteBook(id)
			.then((res) => loadBooks())
			.catch((err) => console.log(err));
	}

	return (
		<div className={classes.root}>
			<SearchBar />
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						{books.length ? (
							<div>
								{books.map((book) => (
									<Card>
										<CardBody key={book._id}>
											<CardTitle>{book.title}</CardTitle>
											<CardSubtitle>{book.author}</CardSubtitle>
											<CardText>{book.synopsis}</CardText>
											<Button onClick={() => deleteBook(book._id)}>
												Add to favorite
											</Button>
										</CardBody>
									</Card>
								))}
							</div>
						) : (
							<h3>No Results to Display</h3>
						)}
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
