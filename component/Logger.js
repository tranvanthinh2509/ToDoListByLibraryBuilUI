export default function loggger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('Previos State: ', prevState)
        console.log('Action arguments: ', args)
        const nextState = reducer(prevState, action, args)
        console.log('Next State: ', nextState)
        console.groupEnd()
        return nextState
    }

}