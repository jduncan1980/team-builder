import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Drawer,
	IconButton,
	FormGroup,
	TextField,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
	flex: {
		justifyContent: 'space-between',
	},
	formGroup: {
		padding: '3%',
	},
});

const Form = ({ addMember }) => {
	const classes = useStyles();

	const [member, setMember] = useState({
		name: { first: '', last: '' },
		email: '',
		location: { city: '', state: '', country: '' },
		phone: '',
		picture: {
			medium:
				'http://www.sprlaw.net/wp-content/uploads/2017/05/blank_headshot.jpg',
		},
	});
	const [open, setOpen] = useState(false);

	function handleToggle() {
		setOpen(!open);
	}

	function handleSubmit(event) {
		event.preventDefault();
		addMember(member);
		setMember({
			name: { first: '', last: '' },
			email: '',
			location: { city: '', state: '', country: '' },
			phone: '',
			picture: {
				medium:
					'http://www.sprlaw.net/wp-content/uploads/2017/05/blank_headshot.jpg',
			},
		});
	}

	function handleChanges(e) {
		e.preventDefault();
		const [section, key] = e.target.name.split('.');

		if (key) {
			setMember({
				...member,
				[section]: {
					...member[section],
					[key]: e.target.value,
				},
			});
		} else {
			setMember({
				...member,
				[section]: e.target.value,
			});
		}
	}

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
						onClick={handleToggle}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<Drawer
				open={open}
				width={200}
				anchor={'bottom'}
				transitionDuration={750}
				elevation={2}
				onClose={handleToggle}
			>
				<form onSubmit={handleSubmit}>
					<FormGroup className={classes.formGroup}>
						<TextField
							placeholder='First Name...'
							name='name.first'
							value={member.name.first}
							onChange={handleChanges}
							id='name.first'
							label='First Name'
						/>
						<TextField
							placeholder='Last Name...'
							name='name.last'
							value={member.name.last}
							onChange={handleChanges}
							id='name.last'
							label='Last Name'
						/>
						<TextField
							placeholder='Employee Email...'
							name='email'
							value={member.email}
							onChange={handleChanges}
							id='email'
							label='Email'
						/>
						<TextField
							placeholder='Employee City...'
							name='location.city'
							value={member.location.city}
							onChange={handleChanges}
							id='location.city'
							label='City'
						/>
						<TextField
							placeholder='Employee State...'
							name='location.state'
							value={member.location.state}
							onChange={handleChanges}
							id='location.state'
							label='State'
						/>
						<TextField
							placeholder='Employee Country...'
							name='location.country'
							value={member.role}
							onChange={handleChanges}
							id='location.country'
							label='Country'
						/>
						<TextField
							placeholder='Employee Country...'
							name='phone'
							value={member.role}
							onChange={handleChanges}
							id='phone'
							label='Phone'
						/>
						<Button type='submit' variant='contained'>
							Submit
						</Button>
					</FormGroup>
				</form>
			</Drawer>
		</>
	);
};

export default Form;
