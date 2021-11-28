import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses";

// check if local storage
const initialList = () => {
   const list = localStorage.getItem('expense-tracker-list');
   let expenses = [];
   if (list) {
      expenses = JSON.parse(list);
   }
   return expenses;
}
// initial state
const initialState = {
   expenseList: initialList(),
   query: '',
};
// expense Reducer
export const expenseReducer = (state = initialState, action) => {
   switch(action.type) {
      case ADD_EXPENSE: {
         // set data to local storage
         localStorage.setItem('expense-tracker-list', JSON.stringify([...state.expenseList, action.data]));
         return {
            ...state,
            expenseList: [...state.expenseList, action.data],
         };
      }
      case DELETE_EXPENSE: {
         const { data } = action;
         const updatedList = state.expenseList.filter(
            item => item.createdAt !== data.createdAt
         );
         // update local storage
         localStorage.setItem('expense-tracker-list', JSON.stringify(updatedList));
         return {
            ...state,
            expenseList: updatedList,
         };
      }
      case SEARCH_EXPENSE: {
         const { query } = action;
         return {
            ...state,
            query,
         }
      }
      default: 
         return state;
   }
};