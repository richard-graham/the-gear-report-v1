//reducer tickets.js

const initialState = []

const initialFormState = {
  firstDropdown: [],
  secondDropdown: [],
  thirdDropdown: [],
  fourthDropdown: [],
  fifthDropdown: [],

}

export function currentTicket (state = null, action){
  switch (action.type){
    case 'UPDATE_CURRENT_TICKET_OBJ':
      return action.ticket
  }
  return state
}

export function dropdownArr (state = initialFormState, action){
  switch (action.type){
    case 'UPDATE_FIRST_DROPDOWN':
      return {...state, firstDropdown: action.firstDropdown}
    case 'UPDATE_SECOND_DROPDOWN':
      return {...state, secondDropdown: action.secondDropdown}
    case 'UPDATE_THIRD_DROPDOWN':
      return {...state, thirdDropdown: action.thirdDropdown}
    case 'UPDATE_FOURTH_DROPDOWN':
      return {...state, fourthDropdown: action.fourthDropdown}
    case 'UPDATE_FIFTH_DROPDOWN':
      return {...state, fifthDropdown: action.fifthDropdown}
  }
  return state
}

export function allTickets (state = initialState, action) {
  switch (action.type){
    case 'GET_TICKETS':
      return action.tickets
      default:
        return state
  }
}

export function ticketsByLocation (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TICKETS_BY_LOC':
      return action.tickets
      default:
        return state
  }
}

export function ticketLocations (state = [], action) {
  switch (action.type){
    case 'UPDATE_TICKET_LOCATIONS':
      return action.locations
    default:
      return state
  }
}

export function ticketCreator (state = {}, action) {
  switch (action.type){
    case 'UPDATE_TICKET_CREATOR':
      return action.creator
    default:
      return state
  }
}

export function topContributors (state = [], action) {
  switch (action.type){
    case 'UPDATE_TOP_CONTRIBUTORS':
      return action.topContributors
    default:
      return state
  }
}