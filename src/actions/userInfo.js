import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const getHomePage = () => {
    return dispatch => {
        console.log("------");
        const token = localStorage.getItem('token');
        if(token){
        let url = 'http://localhost:8080/home';
        axios.get(url, {headers: {"Authorization": "Bearer ".concat(token)}})
            // .set('Authorization', 'Bearer ' + token)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
        }    
    };
};

export const getUserbyUsername = () => {
    return dispatch => {
        console.log("------");
        const token = localStorage.getItem('token');
        if(token){
        let url = 'http://localhost:8080/getUser';
        axios.get(url, {headers: {"Authorization": "Bearer ".concat(token)}})
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
        }    
    };
};



