import { SHOW_LOGIN_MODAL, HIDE_LOGIN_MODAL } from './../actionTypes';
interface visible {
    visible:boolean;
}
const initialState:visible = {
    visible: false
}

export default function loginModal(state: visible = initialState, action: {type: string}) {
  switch (action.type) {
    case SHOW_LOGIN_MODAL:
      return {visible: true}
    case HIDE_LOGIN_MODAL:
      return {visible: false}
    default:
      return {visible: false}
  }
}
