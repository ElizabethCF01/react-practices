
export const initialFormState = {
  data: {
    name: '',
    phone: '',
    email: '',
    message: ''
  },
  help: {
    name: '',
    phone: ''
  }
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ON_CHANGE':
      switch (action.data.field) {
        case 'name':
          return {
            ...state,
            data: {
              ...state.data,
              name: nameValid(action.data.input)[0]
            },
            help: {
              ...state.help,
              name: nameValid(action.data.input)[1]
            }
          }
        case 'phone':
          return {
            ...state,
            data: {
              ...state.data,
              phone: phoneValid(action.data.input)[0]
            },
            help: {
              ...state.help,
              phone: phoneValid(action.data.input)[1]
            }
          }
        default:
          return {
            ...state,
            data: {
              ...state.data,
              [action.data.field]: action.data.payload
            }
          }
      }
    case 'ON_RESET':
      return initialFormState
    default:
      throw new Error()
  }
}
function nameValid(input) {
  let value = input.value
  const regex = /^[a-zA-Z ]+$/
  const helpType = 'Only Words'
  const minlenght = 'Please lengthen this text to 2 charaters or more'
  let helpMe = ''

  if (value.match(regex) === null && value.length !== 0) {
    //console.warn(helpType)
    helpMe = helpType
    value = value.replace(/[^a-z ]+/ig, '')
  }
  else if (value.length < 2 && value.length !== 0) {
    //console.warn(minlenght)
    helpMe = minlenght
    input.classList.add('invalid')
  } else {
    helpMe = ''
    input.classList.remove('invalid')
  }
  return [value, helpMe]
}

function phoneValid(input) {
  let value = input.value
  let helpMe = ''
  const regex = /^[0-9 ]+$/
  const minlenght = 'Please lengthen this text to 6 charaters or more'
  const helpType = 'Only Digits'

  if (value.match(regex) === null && value.length !== 0) {
    //console.warn(helpType)
    helpMe = helpType
    value = value.replace(/[^0-9 ]+/g, '')
  }
  else if (value.length < 6 && value.length !== 0) {
    helpMe = minlenght
    input.classList.add('invalid')
  } else {
    helpMe = ''
    input.classList.remove('invalid')
  }
  //if (isName) setHelp((prev) => ({ ...prev, phone: '' }))
  //else setHelp((prev) => ({ ...prev, name: '' }))
  return [value, helpMe]
}
export default formReducer

