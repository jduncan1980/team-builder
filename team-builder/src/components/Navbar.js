import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
	flex: {
		justifyContent: 'space-between',
	},
	formGroup: {
		padding: '3%',
	},
});

const Navbar = ({ handleToggle, setIsEditing }) => {
	const classes = useStyles();

	return (
		<>
			<AppBar position='fixed'>
				<Toolbar className={classes.flex}>
					<Typography component='h2' variant='h4'>
						Team-Builder
					</Typography>
					<IconButton
						edge='end'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
						onClick={() => {
							handleToggle();
							setIsEditing(false);
						}}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

export default Navbar;
