import * as actionTypes from '../actions/actionTypes';

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const initialState = {
    token: null,
    username: null,
    image: null,
    error: null,
    loading: false,
    authRedirectPath: '/',

    fans: null,
    fanArr: null,
    selectedFan: null

    
}

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.token,
        username: action.username,
        image: action.image,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, username: null, image: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const setFansInfo = (state, action) => {
    return updateObject( state, { fans: action.fans} );
};

const setFansArr = (state, action) => {
    return updateObject( state, { fanArr: action.fanArr} );
};

const setSelectedFan = (state, action) => {
    return updateObject( state, { selectedFan: action.selectedFan} );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        case actionTypes.SET_FAN_INFO: return setFansInfo(state,action);
        case actionTypes.SET_FAN_ARR: return setFansArr(state,action);
        case actionTypes.SET_FAN_DETAIL: return setSelectedFan(state,action);
        default:
            return state;
    }
};

export default reducer;