let initialState = {
        name: '',
        address: '',
        city: '',
        stateAbv: '',
        zip: null,
        img: '',
        mortgage: 0,
        rent: 0,
}

const UPDATE_LOCATION = 'UPDATE_LOCATION';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_PAYMENT = 'UPDATE_PAYMENT';

function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_LOCATION:
            return Object.assign({}, state, {name: action.payload.name, address: action.payload.address, city: action.payload.city, stateAbv: action.payload.stateAbv, zip: action.payload.zip});
        case UPDATE_IMG:
            return Object.assign({}, state, {img: action.payload});
        case UPDATE_PAYMENT:
            return Object.assign({}, state, {mortgage: action.payload.mortgage, rent: action.payload.rent});
        default:
            return state;
    }
}

export function updateLocation (name, address, city, stateAbv, zip) {
    return {
        type: UPDATE_LOCATION,
        payload: {
            name,
            address,
            city,
            stateAbv,
            zip
        }
    }
}
export function updateImg (img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}
export function updatePayment (mortgage, rent) {
    return {
        type: UPDATE_PAYMENT,
        payload: {
            mortgage,
            rent
        }
    }
}

export default reducer;