const initialState = {
    post: {},
    comments: [],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POST':
            return { ...state, post: action.payload };
        case 'FETCH_COMMENTS':
            return { ...state, comments: action.payload };
        case 'UPDATE_POST':
            return { ...state, post: action.payload };
        case 'DELETE_POST':
            return { ...state, post: {}, comments: [] };
        default:
            return state;
    }
};

export default postReducer;
