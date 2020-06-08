import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { Grid } from '@material-ui/core';

const TeamList = ({ teamMembers }) => {
	return (
		<Grid container spacing={2}>
			{teamMembers.map((teamMember) => {
				return (
					<Grid item xs={12} sm={6} md={4} key={teamMember.email}>
						<TeamMemberCard teamMember={teamMember} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default TeamList;
