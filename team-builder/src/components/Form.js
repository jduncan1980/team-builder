import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Drawer, FormGroup, TextField } from '@material-ui/core';

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
	handleSubmit,
	handleChanges,
	member,
	memberToEdit,
	isEditing,
}) => {
	const classes = useStyles();

	return (
		<>
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
							value={isEditing ? memberToEdit.name.first : member.name.first}
							onChange={handleChanges}
							id='name.first'
							label='First Name'
						/>
						<TextField
							placeholder='Last Name...'
							name='name.last'
							value={isEditing ? memberToEdit.name.last : member.name.last}
							onChange={handleChanges}
							id='name.last'
							label='Last Name'
						/>
						<TextField
							placeholder='Employee Email...'
							name='email'
							value={isEditing ? memberToEdit.email : member.email}
							onChange={handleChanges}
							id='email'
							label='Email'
						/>
						<TextField
							placeholder='Employee City...'
							name='location.city'
							value={
								isEditing ? memberToEdit.location.city : member.location.city
							}
							onChange={handleChanges}
							id='location.city'
							label='City'
						/>
						<TextField
							placeholder='Employee State...'
							name='location.state'
							value={
								isEditing ? memberToEdit.location.state : member.location.state
							}
							onChange={handleChanges}
							id='location.state'
							label='State'
						/>
						<TextField
							placeholder='Employee Country...'
							name='location.country'
							value={
								isEditing
									? memberToEdit.location.country
									: member.location.country
							}
							onChange={handleChanges}
							id='location.country'
							label='Country'
						/>
						<TextField
							placeholder='Employee Phone...'
							name='phone'
							value={isEditing ? memberToEdit.phone : member.phone}
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
