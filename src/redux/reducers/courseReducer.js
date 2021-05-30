import courseList from '../../Data/CourseData.json';

const initialState = {
    courses: courseList,
    purchasedList: []
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_PURCHASED_LIST': {
            const newState = {
                ...state,
                purchasedList: [...state.purchasedList, action.payload],
            };
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default courseReducer;