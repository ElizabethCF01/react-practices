import axios from 'axios'

export const RESET_FORM = 'RESET'
export const CHANGE_NAME_VALUE = 'NAME'
export const CHANGE_PHONE_VALUE = 'PHONE'
export const CHANGE_EMAIL_VALUE = 'EMAIL'
export const CHANGE_MESSAGE_VALUE = 'MESSAGE'
export const CHANGE_STARS_VALUE = 'STARS'
export const SUBMIT_FORM = 'SUBMIT'
export const CHANGE_RESPONSE_ALERT = 'ALERT'

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
  nameOnlyLetters(state, value = '') {
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

  nameMinValue = (state, value = '') => {
    const minlenght = 'Please lengthen this text to 2 charaters or more'
    if (value.length < 2 && value.length !== 0) {
      state.labels.name = minlenght
      return false
    }
    state.labels.name = ''
    return true
  }

  phoneMinValue = (state, value) => {
    const minlenght = 'Please lengthen this text to 6 charaters or more'
    if (value.length < 6 && value.length !== 0) {
      state.labels.phone = minlenght
      return false
    }
    state.labels.phone = ''
    return true
  }

  phoneOnlyNumbers = (state, value) => {
    const regex = /^[0-9]+$/
    const helpType = 'Only digits allowed'

    if (value.match(regex) === null && value.length !== 0) {
      state.labels.phone = helpType
      value = value.replace(/[^0-9 ]+/g, '')
      return false
    }
    return true
  }
  validateEmail = (state, value) => {
    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const helpType = 'Invalid email'

    if (value.match(regex) === null && value.length !== 0) {
      state.labels.email = helpType
      return false
    }
    state.labels.email = ''
    return true
  }
  submitData(state) {
    console.log(state.data)
    let variant = ''
    let text = ''
    const data = JSON.stringify(state.data)
    const url = 'http://localhost:4000/api/messages'

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    axios.post(url, data, { headers }).then(res => {
      console.log('OK')
      //variant = 'success'
      //text = res.data.message
    }).catch(err => {
      console.log(err)
      //variant = 'danger'
      //text = 'Oh snap! You got an error!'
    })
    state.alert.show = true
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
    this.calification = false
  }
}
class FormAlert {
  constructor() {
    this.variant = ''
    this.text = ''
    this.show = false
  }
}
export class FormState {
  constructor() {
    this.data = new FormData()
    this.labels = new FormLabels()
    this.tooltips = new FormTooltips()
    this.alert = new FormAlert()
  }
}

// Reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_NAME_VALUE:
      state.data.nameMinValue(state, action.value)
      if (state.data.nameOnlyLetters(state, action.value)) {
        state.data.name = action.value
      }
      return { ...state }
    case CHANGE_PHONE_VALUE:
      state.data.phoneMinValue(state, action.value)
      if (state.data.phoneOnlyNumbers(state, action.value)) {
        state.data.phone = action.value
      }
      return { ...state }
    case CHANGE_EMAIL_VALUE:
      state.data.validateEmail(state, action.value)
      state.data.email = action.value
      return { ...state }
    case CHANGE_MESSAGE_VALUE:
      state.data.message = action.value
      return { ...state }
    case CHANGE_STARS_VALUE:
      state.data.calification = action.value
      state.labels.calification = rates[action.value]
      state.tooltips.calification = false
      return { ...state }
    case CHANGE_RESPONSE_ALERT:
      if (state.alert.variant === 'success') {
        return new FormState()
      }
      state.alert.show = false
      return { ...state }
    case SUBMIT_FORM:
      if (state.data.calification !== 0) {
        state.data.submitData(state)
      } else {
        state.tooltips.calification = true
        console.log('o algo hiciste mal eliza')
      }
      return { ...state }
    case RESET_FORM:
      return new FormState()
    default:
      return { ...state }
  }
}

export default formReducer

