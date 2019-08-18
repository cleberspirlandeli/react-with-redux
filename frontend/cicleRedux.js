// Ações
const incrementar = {type: 'INCREMENTAR'}
const decrementar = {type: 'DECREMENTAR'}

// Reducer (Contador)
const reducer = (state = {contador: 0}, action) => {
  switch (action.type) {
    case 'INCREMENTAR':
      return { contador: state.contador + 1 }
    case 'DECREMENTAR':
      return { contador: state.contador - 1 }
    default:
      return state
  }
}

// Store
const store = Redux.createStore(reducer)

// Logger
function log() {
  console.log('Contador: ', store.getState().contador)
}


// log()
// store.dispatch(incrementar)
// store.dispatch(decrementar)
