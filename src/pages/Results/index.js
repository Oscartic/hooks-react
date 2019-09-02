import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
//query-string =  Hace parse de lo que viene en la query y lo trasforma en un object 
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading } from '../../redux/selectors';

export default ({ location }) => {

    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    console.log(movies)

    //useEffect es = ComponentDidMount y ComponentDidUpdate 
    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        if(movieName && !movies){
            dispatch(searchMovie( {movieName} ));
        }
    });

    return(
        <Container>
            Results
        </Container>
    )
}