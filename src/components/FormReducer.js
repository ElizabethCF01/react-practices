export const RESET_FORM = 'RESET'
export const CHANGE_NAME_VALUE = 'NAME'
export const CHANGE_PHONE_VALUE = 'PHONE'
export const CHANGE_EMAIL_VALUE = 'EMAIL'
export const CHANGE_MESSAGE_VALUE = 'MESSAGE'
export const CHANGE_STARS_VALUE = 'STARS'
export const SUBMIT_FORM = 'SUBMIT'

const rates = ['', 'DREADFUL', 'BAD', 'MEDIUM', 'GOOD', 'GRATE']

// Models
class FormData {
  constructor() {
    this.name = ''
    this.phone = ''
    this.email = ''
    this.message = ''
    this.calification = 0
  }
}
class FormLabels {
  constructor() {
    this.name = ''
    this.phone = ''
    this.email = ''
    this.message = ''
    this.calification = ''
  }
}

class FormTooltips {
  constructor() {
    this.name = ''
    this.phone = ''
    this.email = ''
    this.message = ''
    this.calification = ''
  }
}
export class FormState {
  constructor() {
    this.data = new FormData()
    this.labels = new FormLabels()
    this.tooltips = new FormTooltips()
  }
}

// Reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_NAME_VALUE:
      nameMinValue(state, action.value)
      if (nameOnlyLetters(state, action.value)) {
        state.data.name = action.value
      }
      return { ...state }
    case CHANGE_PHONE_VALUE:
      phoneMinValue(state, action.value)
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
      state.data.calification = action.value
      state.labels.calification = rates[action.value]
      return { ...state }
    case RESET_FORM:
      return new FormState()
    default:
      return { ...state }
  }
}
const nameOnlyLetters = (state, value = '') => {
  const regex = /^[a-zA-Z ]+$/
  const helpType = 'Only words allowed'

  if (value.match(regex) === null && value.length !== 0) {
    //state.labels.name = helpType
    state.tooltips.name = helpType
    return false
  }
  state.tooltips.name = ''
  return true
}

const nameMinValue = (state, value = '') => {
  const minlenght = 'Please lengthen this text to 2 charaters or more'
  if (value.length < 2 && value.length !== 0) {
    state.labels.name = minlenght
    return false
  }
  state.labels.name = ''
  return true
}

const phoneMinValue = (state, value) => {
  const minlenght = 'Please lengthen this text to 6 charaters or more'
  if (value.length < 6 && value.length !== 0) {
    state.labels.phone = minlenght
    return false
  }
  state.labels.phone = ''
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
  state.labels.phone = ''
  return true
}

const validateEmail = (state, value) => {
  const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  const helpType = 'Invalid email'

  if (value.match(regex) === null && value.length !== 0) {
    state.labels.email = helpType
    return false
  }
  state.labels.email = helpType
  return true
}

export default formReducer

