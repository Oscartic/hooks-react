import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

import styles from './style';

 	export default () => {

		const  [ searchText, setSearchText ] = useState('');

		const classes = styles();

		const handleSearchTextChange = event => {
			setSearchText(event.target.value);	
		}

		const handleCleanText = event => {
			console.log("limpia")
		}
		const handleSearchText = event => {
			console.log("busca")
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
							<label>Icono</label>
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