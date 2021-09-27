import { initialFormState } from "./FormContact"

const formReducer = (state, action) => {

  switch (action.type) {
    case 'Input text':
      return {
        ...state,
        [action.field]: action.payload
      }
    case 'Clear':
      return initialFormState
    default:
      return state
  }
}
export default formReducer

