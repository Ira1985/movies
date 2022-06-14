const initialState = {
    user: null
}

export const reducerUser = (state = initialState, action) => {
    console.log('action', action)
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}
