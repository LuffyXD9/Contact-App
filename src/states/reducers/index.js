// const initState = [];

const contactReducer = (state = [],action) => {
    switch(action.type){
        case 'LOAD_CONTACTS':
            return state;
        case 'ADD_CONTACT':
            return [...state, action.payload];
        case 'UPDATE_CONTACT':
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            return updateState;
        case 'DELETE_CONTACT':
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
            return filterContacts;
        default:
            return state;
    }
}

export default contactReducer;