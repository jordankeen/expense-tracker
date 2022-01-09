
export default (expenses, query, sortBy, category) => {
   // console.log(sortBy);
   return expenses.filter((expense) => {
      // check if query is in title
      const textMatch = expense.title.toLowerCase().includes(query.toLowerCase());
      // Filter by category if present
      let categoryMatch = true;
      if (category !== '') (categoryMatch = (expense.category === category) ? true : false);
      return textMatch && categoryMatch;
      // sort by date/amount
   }).sort((a,b) => {
      if (sortBy === 'date') {
         return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
         return a.amount < b.amount ? 1 : -1;
      }
   });
};