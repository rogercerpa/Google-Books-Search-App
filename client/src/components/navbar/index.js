import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root       : {
		flexGrow : 1
	},
	menuButton : {
		marginRight : theme.spacing(2)
	}
}));

export default function DenseAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<Typography variant="h6" color="inherit">
						<Button>
							<h2>Google Books</h2>
						</Button>
					</Typography>
					<Typography variant="h6" color="inherit">
						<Button>
							{' '}
							<a href="/search">Search Books</a>
						</Button>
					</Typography>
					<Typography variant="h6" color="inherit">
						<Button>
							<a href="/saved">Books Saved</a>
						</Button>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
