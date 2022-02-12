const intialState = {};
const filterStore = (state= intialState, action) => {
    switch(action.type) {
        case SORT_BY_FOOD:
            return state;
        case SORT_BY_ELECTRONICS:
            return state;
        case SORT_BY_SUPPLIES:
            return state;
        case SORT_BY_BOOKS:
            return state;
        case SORT_BY_TOYS:
            return state;
        default:
            return state;
    }
};
export default filterStore;