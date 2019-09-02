import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

import { MovieIcon } from '../../icons'
import styles from './style';

 	export default ({ history }) => {

		const  [ searchText, setSearchText ] = useState('');

		const classes = styles();

		const handleSearchTextChange = event => {
			setSearchText(event.target.value);	
		}

		const handleCleanText = event => {
			setSearchText('');
		}
		const handleSearchText = event => {
			history.push(`/results?movieName=${searchText}`);
		}
		return (
			<Container className={classes.container}>
				<Card className={classes.cardContainer}>
					<Grid container className={classes.titleGridContainer}>
						<Grid>
							<Typography className={classes.title}>
								Bienvenido!
							</Typography>
						</Grid>	
						<Grid>
							<MovieIcon className={classes.movieIcon} />
						</Grid>
					</Grid>
					<TextField
						value={ searchText }
						className={classes.textFieldSearch}
						placeholder="Buscar..."
						onChange={ handleSearchTextChange }
					/>
					<Grid className={classes.buttonsContainer}>
						<Button variant="contained" onClick={handleCleanText}>Limpiar</Button>
						<Button variant="contained" className={classes.searchButtom} color="primary" size="large" onClick={handleSearchText}>Buscar</Button>
					</Grid>
				</Card>
			</Container>
		)
	 }