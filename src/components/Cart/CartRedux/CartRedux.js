import * as actionType from './action';


const initialState = {
    loading: false,
    error: '',
    data: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CART_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actionType.CART_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            }
        case actionType.CART_UPDATE:
            const updateData = (state.data).slice();
            updateData.push(action.updatedData);
            return {
                ...state,
                data: updateData,
                loading: false
            }
        case actionType.CART_QUANTITY:
            const duplicatedData = (state.data).slice();
            const indexFinder = duplicatedData.findIndex(item => item.id === (action.updatedvalue.id));
            // console.log("indexfinder", indexFinder);
            duplicatedData.splice(indexFinder, 1, action.updatedvalue);
            return {
                ...state,
                data: duplicatedData

            }
        case actionType.CART_DELETE:
            const duplicateData = (state.data).slice();
            const DeletedData = duplicateData.filter(item => item.postId !== action.postId)
            return {
                ...state,
                data: DeletedData
            }
        case actionType.CART_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}
export default reducer;