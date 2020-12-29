const initialState = []

export default function StocksReducer(state = initialState, action) {

  switch (action.type) {
    case 'BROUGHT_STOCK':
      const stock = {
        id: action.payload.id,
        nameOfStock: action.payload.nameOfStock,
        costPerUnit: action.payload.costPerUnit,
        numberOfunits: action.payload.numberOfunits,
        date: action.payload.date._d.toString(),
        amount: action.payload.amount,
        tax: action.payload.tax,
        totalAmount: action.payload.totalAmount,
      }
      state.push(stock)
      return state
    default:
      return state
  }
}
