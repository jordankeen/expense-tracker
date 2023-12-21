
export const expenseTotals = (expenses) => {

   const groceryTotal = expenses.reduce((total, item) => {
      if (item.category === 'grocery') { total += item.amount }
         return total;
   }, 0);
   const housingTotal = expenses.reduce((total, item) => {
      if (item.category === 'housing') { total += item.amount }
         return total;
   }, 0);
   const otherTotal = expenses.reduce((total, item) => {
      if (item.category === 'other') { total += item.amount }
         return total;
   }, 0);
   const entertainmentTotal = expenses.reduce((total, item) => {
      if (item.category === 'entertainment') { total += item.amount }
         return total;
   }, 0);
   const transportationTotal = expenses.reduce((total, item) => {
      if (item.category === 'transportation') { total += item.amount }
         return total;
   }, 0);
   const utilitiesTotal = expenses.reduce((total, item) => {
      if (item.category === 'utilities') { total += item.amount }
         return total;
   }, 0);
   
   const totals = [
      {
         category: 'Grocery',
         color: '#f05a56',
         total: groceryTotal
      },
      {
         category: 'Housing',
         color: '#2e46ae',
         total: housingTotal
      },
      {
         category: 'Other',
         color: '#d2cfc7',
         total: otherTotal
      },
      {
         category: 'Entertainment',
         color: '#5c73d6',
         total: entertainmentTotal
      },
      {
         category: 'Transportation',
         color: '#ea8885',
         total: transportationTotal
      },
      {
         category: 'Utilities',
         color: '#f4e28c',
         total: utilitiesTotal
      },
   ];

   return totals.filter(item => (item.total > 0));
};