// import axios from 'axios';

import axios from '../axios';
import * as actionTypes from './actionTypes';



export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, username, image) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        username: username,
        image: image
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('username');
    localStorage.removeItem('image');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const userRegister = user => {
    return dispatch => {
        let url = '/register';
        axios.post(url, user)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const userLogin = user => {
    return dispatch => {
        let url = '/authenticate';
        axios.post(url, user)
            .then(response => {
                console.log(response.data.token);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('image', response.data.image);
                dispatch(authSuccess(response.data.token, response.data.username, response.data.image));
                // dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const setFansInfo = (fans) => {
    return {
        type: actionTypes.SET_FAN_INFO,
        fans: fans
    };
};

export const setFansArr = (fanArr) => {
    return {
        type: actionTypes.SET_FAN_ARR,
        fanArr: fanArr
    };

}

export const setSelectedFan = (selectedFan) => {
    return {
        type: actionTypes.SET_FAN_DETAIL,
        selectedFan: selectedFan
    };

}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');

        // if (!token) {
        //     dispatch(logout());
        // } else {
        //     const expirationDate = new Date(localStorage.getItem('expirationDate'));
        //     if (expirationDate <= new Date()) {
        //         dispatch(logout());
        //     } else {
        //         const username = localStorage.getItem('username');
        //         dispatch(authSuccess(token, username));
        //         dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
        //     }   
        // }
        if (!token) {
            dispatch(logout());
        } else {
            const username = localStorage.getItem('username');
            dispatch(authSuccess(token, username));
        }
    };
};




export const getHomePage = () => {
    return dispatch => {
        console.log("------");
        const token = localStorage.getItem('token');
        if (token) {
            let url = '/home';
            axios.get(url, { headers: { "Authorization": "Bearer ".concat(token) } })
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

export const getAllFans = () => {
    return dispatch => {
        console.log("====================================");
        const token = localStorage.getItem('token');
        if (token) {
        let url = '/getAllFans';
        axios.get(url, { headers: { "Authorization": "Bearer ".concat(token) } })
            .then(response => {
                console.log(response);
                dispatch(setFansInfo(response.data));
            })
            // .catch(err => {
            //     dispatch(authFail(err.response.data.error));
            // });
        }    
    };
};