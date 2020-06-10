import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { Grid } from '@material-ui/core';

const TeamList = ({ teamMembers, handleToggle, setIsEditing, setMember }) => {
	return (
		// <Grid item container spacing={2}>
		<React.Fragment>
			{teamMembers.map((teamMember, index) => {
				return (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<TeamMemberCard
							teamMember={teamMember}
							setMember={setMember}
							handleToggle={handleToggle}
							setIsEditing={setIsEditing}
							key={index}
						/>
					</Grid>
				);
			})}
		</React.Fragment>
		// </Grid>
	);
};

export default TeamList;
