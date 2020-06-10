import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';
import { Grid, Container, CssBaseline } from '@material-ui/core';
import Navbar from './components/Navbar';
import TeamList from './components/TeamList';
import { initialData } from './blankData';
import Form from './components/Form';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	marginTop: {
		marginTop: '2rem',
	},
});

function App() {
	const classes = useStyles();
	//State to control Form Drawer
	const [open, setOpen] = useState(false);
	// All users to be rendered as cards
	const [teamMembers, setTeamMembers] = useState([]);
	//Member being added
	const [member, setMember] = useState(initialData);
	// Form opened by add new button or edit button
	const [isEditing, setIsEditing] = useState(false);

	//Handles Form Drawer open/close
	function handleToggle() {
		setOpen(!open);
	}

	function addMember(newMember) {
		setTeamMembers([...teamMembers, newMember]);
	}

	function editMember(member) {
		return teamMembers.map((teamMember, index) => {
			if (teamMember.id === member.id) {
				teamMembers[index] = member;
			}
			return teamMember;
		});
	}

	// Get data from Random User Generator API
	useEffect(() => {
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=42&inc=name,location,email,phone,picture'
			)
			.then((res) => {
				const addId = res.data.results.map((member) => {
					return { ...member, id: uuid() };
				});
				setTeamMembers(addId);
				console.log(addId);
			});
	}, []);

	return (
		<React.Fragment>
			<CssBaseline />
			<Container>
				<Grid container>
					<Grid item>
						<Navbar handleToggle={handleToggle} setIsEditing={setIsEditing} />
					</Grid>
					<Grid item container spacing={3} className={classes.marginTop}>
						{teamMembers && (
							<TeamList
								teamMembers={teamMembers}
								handleToggle={handleToggle}
								setIsEditing={setIsEditing}
								setMember={setMember}
							/>
						)}
					</Grid>
					<Grid item>
						<Form
							isEditing={isEditing}
							open={open}
							handleToggle={handleToggle}
							setIsEditing={setIsEditing}
							addMember={addMember}
							editMember={editMember}
							member={member}
							setMember={setMember}
						/>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}

export default App;
