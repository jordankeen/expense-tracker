export const addExpense = (data) => {
   return {
      type: "ADD_EXPENSE",
      data,
   };
};
export const deleteExpense = (data) => {
   return {
      type: 'DELETE_EXPENSE',
      data,
   };
};
export const editExpense = (id, data) => {
   return {
      type: "EDIT_EXPENSE",
      id,
      data,
   };
};
export const searchExpense = (query) => {
   return {
      type: 'SEARCH_EXPENSE',
      query,
   };
};
export const sortByDate = () => {
   return {
      type: 'SORT_BY_DATE',
   };
};
export const sortByAmount = () => {
   return {
      type: 'SORT_BY_AMOUNT',
   };
};
export const filterByCategory = (category) => {
   return {
      type: 'FILTER_BY_CATEGORY',
      category,
   };
};
