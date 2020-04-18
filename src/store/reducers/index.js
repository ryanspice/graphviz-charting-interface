
import application from "./application";
import dialog from "./dialog";
import status from "./status";
import theme from "./theme";

import {combineReducers} from 'redux';

export default combineReducers({
  application,
  dialog,
  status,
  theme
})
