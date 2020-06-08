import React from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	Typography,
	Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	card: {
		backgroundColor: 'lightgrey',
	},
	large: {
		width: '6rem',
		height: 'auto',
		marginRight: '2rem',
	},
});

const TeamMemberCard = ({ teamMember }) => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardHeader
				title={
					<Typography
						color='primary'
						component='h4'
						variant='h4'
					>{`${teamMember.name.last}, ${teamMember.name.first}`}</Typography>
				}
				avatar={
					<Avatar
						aria-label={teamMember.name.last}
						src={teamMember.picture.medium}
						className={classes.large}
					/>
				}
				subheader={
					<Typography
						component='h5'
						variant='subtitle1'
						color='secondary'
					>{`${teamMember.location.city}, ${teamMember.location.state}, ${teamMember.location.country}`}</Typography>
				}
			/>
			<CardContent>
				<Typography component='h4'>{teamMember.email}</Typography>
				<Typography component='h4'>{teamMember.phone}</Typography>
			</CardContent>
		</Card>
	);
};

export default TeamMemberCard;
