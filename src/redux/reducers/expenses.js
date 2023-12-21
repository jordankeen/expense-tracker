import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, SEARCH_EXPENSE, SORT_BY_DATE, SORT_BY_AMOUNT, FILTER_BY_CATEGORY } from "../action-types/expenses";
import DefaultItems from "../../data/DefaultItems";

// check if local storage
const initialList = () => {
   const list = localStorage.getItem('expense-tracker-list');
   let expenses = [];
   if (list) {
      expenses = JSON.parse(list);
   } else {
      expenses = DefaultItems;
      localStorage.setItem('expense-tracker-list', JSON.stringify(expenses));
   }
   return expenses;
}
// initial state
const initialState = {
   expenseList: initialList(),
   query: '',
   sortBy: 'date',
   category: ''
};
// expense Reducer
export const expenseReducer = (state = initialState, action) => {
   switch(action.type) {
      case ADD_EXPENSE: {
         // set data to local storage
         localStorage.setItem('expense-tracker-list', JSON.stringify([...state.expenseList, action.data]));
         return {
            ...state,
            expenseList: [...state.expenseList, action.data]
         };
      }
      case DELETE_EXPENSE: {
         const { data } = action;
         const updatedList = state.expenseList.filter(
            item => item.id !== data.id
         );
         // update local storage
         localStorage.setItem('expense-tracker-list', JSON.stringify(updatedList));
         return {
            ...state,
            expenseList: updatedList
         };
      }
      case EDIT_EXPENSE: {
         const { id, data } = action;
         // Find item with id, and update
         const itemUpdates = state.expenseList.map(item => {
            if (item.id === id) {
               return {
                  ...item,
                  ...data
               }
            } else {
               return item;
            }
         });
         // update local storage
         localStorage.setItem('expense-tracker-list', JSON.stringify(itemUpdates));
         return {
            ...state,
            expenseList: itemUpdates
         };
      }
      case SEARCH_EXPENSE: {
         const { query } = action;
         return {
            ...state,
            query,
         };
      }
      case SORT_BY_DATE: {
         return {
            ...state,
            sortBy: 'date'
         };
      }
      case SORT_BY_AMOUNT: {
         return {
            ...state,
            sortBy: 'amount'
         };
      }
      case FILTER_BY_CATEGORY: {
         const { category } = action;
         return {
            ...state,
            category
         };
      }
      default: 
         return state;
   }
};