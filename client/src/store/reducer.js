const intiState = {
    repository: null,
    isOrder: false,
    isSubmit: false
}

const reducer = (state = intiState, action) => {
    switch (action.type) {
        case 'SELECT_PIZZA':
            return {
                repository: action.data,
                isOrder: false 
            }
        case 'PURCHASING':
            return {
                ...state,
                isOrder: true,
                isSubmit: false
            }
        case 'SUBMITTED':
            return {
                ...state,
                isOrder: false,
                isSubmit: true
            }
        default: return state
    }
}

export default reducer;