import { createStore } from "./core.js"
import reducer from "./reducer.js"
import withLogger from "./component/Logger.js"
const { attach, connect, dispatch } = createStore(withLogger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
}