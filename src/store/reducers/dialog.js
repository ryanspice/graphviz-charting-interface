
import {
  DIALOG_SETTINGS
} from '../actions/dialog'

import Settings from "../../components/Settings";
import Dialog from "../../components/Dialog";

async function dialog(state = [], action) {

  state = await state;

  switch (action.type) {

  	case DIALOG_SETTINGS:

      const d = new Dialog({target: document.body});

      d.$set({
        title:`Settings`,
        confirm:`Save`,
        deny:`Cancel`,
        id:`settings-dialog-content`,
        components:[
          Settings
        ]
      })

  	  return {...state, action};
  	default:
  	  return state
  }
}

export default dialog;
