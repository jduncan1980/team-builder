import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { initialData } from '../blankData';
import {
	Button,
	Drawer,
	FormGroup,
	TextField,
	Container,
} from '@material-ui/core';

const useStyles = makeStyles({
	flex: {
		justifyContent: 'space-between',
	},
	formGroup: {
		padding: '3%',
	},
});

const Form = ({
	open,
	handleToggle,
	isEditing,
	addMember,
	editMember,
	member,
	setMember,
}) => {
	const classes = useStyles();

	//Member being added
	// const [member, setMember] = useState(initialData);

	function handleChanges(e) {
		e.preventDefault();
		const [section, key] = e.target.name.split('.');
		// If property is nested, do...
		if (key) {
			setMember({
				...member,
				[section]: {
					...member[section],
					[key]: e.target.value,
				},
			});
			// If property not nested, do...
		} else {
			setMember({
				...member,
				[section]: e.target.value,
			});
		}
	}

	// Handles form submission
	function handleSubmit(e) {
		e.preventDefault();
		// addMember(member);
		isEditing ? editMember(member) : addMember(member);
		setMember(initialData);
		// setIsEditing(false);
		handleToggle();
	}

	return (
		<Container>
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
							value={member.location.country}
							onChange={handleChanges}
							id='location.country'
							label='Country'
						/>
						<TextField
							placeholder='Employee Phone...'
							name='phone'
							value={member.phone}
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
		</Container>
	);
};

export default Form;
