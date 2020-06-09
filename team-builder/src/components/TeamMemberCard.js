import React from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	Typography,
	Avatar,
	IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
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

const TeamMemberCard = ({ teamMember, handleEdit }) => {
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
				action={
					<IconButton
						aria-label='settings'
						onClick={() => {
							handleEdit(teamMember);
						}}
					>
						<EditIcon />
					</IconButton>
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
