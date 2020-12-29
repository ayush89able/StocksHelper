const initialState = {
  nameOfStock: '',
  costPerUnit: '',
  numberOfunits: '',
  date: '',
  amount: '',
  tax: '',
  totalAmount: '',
}

export default function StocksReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_RECENT_BROUGHT_STOCK':
      return {
        id: action.payload.id,
        nameOfStock: action.payload.nameOfStock,
        costPerUnit: action.payload.costPerUnit,
        numberOfunits: action.payload.numberOfunits,
        date: action.payload.date._d.toString(),
        amount: action.payload.amount,
        tax: action.payload.tax,
        totalAmount: action.payload.totalAmount,
      }
    default:
      return state
  }
}
