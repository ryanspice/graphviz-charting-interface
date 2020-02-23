
import application from "./application";
import dialog from "./dialog";
import status from "./status";

export default Redux.combineReducers({
  application,
  dialog,
  status
})
