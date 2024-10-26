import { Typography, Box, Container } from '@mui/material';
import './Dashboard.css';

export function Dashboard() {
	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography fontSize={14}>
					Welcome, Jane
				</Typography>
			</Box>
		</Container>
	);
}
