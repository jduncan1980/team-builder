import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import TeamList from './components/TeamList';
import { Grid } from '@material-ui/core';
import Navbar from './components/Navbar';
import { initialData } from './blankData';

function App() {
	// All users to be rendered as cards
	const [teamMembers, setTeamMembers] = useState([]);

	// member being edited
	const [memberToEdit, setMemberToEdit] = useState(initialData);

	//State to control Form Drawer
	const [open, setOpen] = useState(false);

	// Form opened by add new button or edit button
	const [isEditing, setIsEditing] = useState(false);

	//Member being added
	const [member, setMember] = useState(initialData);
	//Add a new Employee Card
	function addMember(newMember) {
		setTeamMembers([...teamMembers, newMember]);
	}

	function editMember(member) {
		const newMemberList = teamMembers.map((teamMember, index) => {
			if (teamMember.email === member.email) {
				console.log('match!');
				teamMembers[index] = member;
			}
			return teamMember;
		});
		console.log(newMemberList);
	}

	// Handles User Editing
	function handleEdit(mem) {
		setIsEditing(true);
		handleToggle();
		setMemberToEdit(mem);
		console.log(mem);
	}

	// Handles form submission
	function handleSubmit(e) {
		e.preventDefault();
		isEditing ? editMember(memberToEdit) : addMember(member);
		setMember(initialData);
		setMemberToEdit(initialData);
		setIsEditing(false);
		handleToggle();
	}

	function handleChanges(e) {
		e.preventDefault();
		const [section, key] = e.target.name.split('.');

		if (!isEditing) {
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
		} else if (isEditing) {
			// If property is nested, do...
			if (key) {
				setMemberToEdit({
					...memberToEdit,
					[section]: {
						...memberToEdit[section],
						[key]: e.target.value,
					},
				});
				// If property not nested, do...
			} else {
				setMemberToEdit({
					...memberToEdit,
					[section]: e.target.value,
				});
			}
		}
	}

	//Handles Form Drawer open/close
	function handleToggle() {
		setOpen(!open);
	}

	// Get data from Random User Generator API
	useEffect(() => {
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=42&inc=name,location,email,phone,picture,id'
			)
			.then((res) => {
				setTeamMembers(res.data.results);
				console.log(res.data.results);
			});
	}, []);

	// console.log(teamMembers);

	return (
		<Grid container fluid='true' direction='column' alignItems='center'>
			<Grid item>
				<Navbar handleToggle={handleToggle} />
			</Grid>

			<Grid item>
				{teamMembers && (
					<TeamList teamMembers={teamMembers} handleEdit={handleEdit} />
				)}
			</Grid>

			<Grid item>
				<Form
					open={open}
					handleToggle={handleToggle}
					handleChanges={handleChanges}
					handleSubmit={handleSubmit}
					member={member}
					memberToEdit={memberToEdit}
					isEditing={isEditing}
				/>
			</Grid>
		</Grid>
	);
}

export default App;
