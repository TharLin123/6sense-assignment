export const initialFetchState = {
  loading: true, 
  error : '',
  data: {}
}

export const fetchReducer = (state,action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true, 
        error : '',
        data: {}
      }
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        data: action.payload
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: action.payload,
        data: {}
      }
    default:
      return state
  }
}