export const RESET_FORM = 'RESET'
export const CHANGE_NAME_VALUE = 'NAME'
export const CHANGE_PHONE_VALUE = 'PHONE'
export const CHANGE_EMAIL_VALUE = 'EMAIL'
export const CHANGE_MESSAGE_VALUE = 'MESSAGE'
export const CHANGE_STARS_VALUE = 'STARS'

export const initialFormState = {
  data: {
    name: '',
    phone: '',
    email: '',
    message: '',
    calification: 0
  },
  labels: {
    name: '',
    phone: '',
    email: '',
    message: '',
    calification: ''
  },
  tooltips: {
    name: '',
    phone: '',
    email: '',
    message: '',
    calification: ''
  }
}

const formReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_NAME_VALUE:
      if (nameOnlyLetters(state, action.value)) {
        state.data.name = action.value
      }
      return { ...state }
    case CHANGE_PHONE_VALUE:
      if (phoneOnlyNumbers(state, action.value)) {
        state.data.phone = action.value
      }
      return { ...state }
    case CHANGE_EMAIL_VALUE:
      state.data.email = action.value
      return { ...state }
    case CHANGE_MESSAGE_VALUE:
      state.data.message = action.value
      return { ...state }
    case CHANGE_STARS_VALUE:
      return { ...state }
    case 'RESET':
      state = initialFormState
      return { ...state }
    default:
      return { ...state }
  }
}
const nameOnlyLetters = (state, value = '') => {
  const regex = /^[a-zA-Z]+$/
  const helpType = 'Only words allowed'

  if (value.match(regex) === null && value.length !== 0) {
    state.labels.name = helpType
    return false
  }
  return true
}

const nameMinValue = (state, value = '') => {
  const minlenght = 'Please lengthen this text to 2 charaters or more'
  if (value.length < 2) {
    state.labels.name = minlenght
    return false
  }
  return true
}

const phoneMinValue = (state, value) => {
  const minlenght = 'Please lengthen this text to 6 charaters or more'
  if (value.length < 6 && value.length !== 0) {
    state.labels.phone = minlenght
    return false
  }
  return true
}

const phoneOnlyNumbers = (state, value) => {
  const regex = /^[0-9]+$/
  const helpType = 'Only digits allowed'

  if (value.match(regex) === null && value.length !== 0) {
    state.labels.phone = helpType
    value = value.replace(/[^0-9 ]+/g, '')
    return false
  }
  return true
}

const validateEmail = (state, value) => {
  const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  const helpType = 'Invalid email'

  if (value.match(regex) === null && value.length !== 0) {
    state.labels.email = helpType
    return false
  }
  return true
}

export default formReducer

