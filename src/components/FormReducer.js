
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

let h = ''

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ON_CHANGE':
      switch (action.data.field) {
        case 'name':
          return {
            ...state,
            data: {
              ...state.data,
              name: nameValid(action.data.input)
            },
            help: {
              name: nameValid(action.data.input, 1)
            }
          }
        case 'phone':
          return {
            ...state,
            data: {
              ...state.data,
              phone: phoneValid(action.data.input)
            },
            help: {
              phone: h
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
function nameValid(input, isHelp) {
  let value = input.value
  const regex = /^[a-zA-Z ]+$/
  const helpType = 'Only Words'
  const minlenght = 'Please lengthen this text to 2 charaters or more'
  let helpMe = ''

  if (value.match(regex) == null) {
    console.warn(helpType)
    helpMe = helpType
    //setHelp({ name: typeHelp, phone: typeHelp })
    value = value.replace(/[^a-z ]+/ig, '')
    setTimeout(() => {
      helpMe = ''
      // setHelp({ name: '', phone: '' })
    }, 2000)
  }
  else if (value.length < 2 && value.length !== 0) {
    console.warn(minlenght)
    helpMe = minlenght
    //setHelp({ name: minlenght, phone: minlenght })
    input.classList.add('invalid')
  } else {
    //setHelp({ name: '', phone: '' })
    helpMe = ''
    input.classList.remove('invalid')
  }
  if (isHelp) {
    return helpMe
  }
  return value
}

function phoneValid(input) {
  let value = input.value
  const regex = /^[0-9 ]+$/
  const minlenght = 'Please lengthen this text to 6 charaters or more'
  const helpType = 'Only Digits'

  if (value.match(regex) == null) {
    console.warn(helpType)
    h = helpType
    //setHelp({ name: typeHelp, phone: typeHelp })
    value = value.replace(/[^0-9 ]+/g, '')
    setTimeout(() => {
      // setHelp({ name: '', phone: '' })
      h = ''
    }, 2000)
  }
  else if (value.length < 6 && value.length !== 0) {
    console.warn(minlenght)
    h = minlenght
    //setHelp({ name: minlenght, phone: minlenght })
    input.classList.add('invalid')
  } else {
    //setHelp({ name: '', phone: '' })
    input.classList.remove('invalid')
    h = ''
  }
  //if (isName) setHelp((prev) => ({ ...prev, phone: '' }))
  //else setHelp((prev) => ({ ...prev, name: '' }))
  return value
}
export default formReducer

