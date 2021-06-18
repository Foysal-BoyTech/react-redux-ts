
const reducer = (state, action){
    switch(action.type){
        case "deposit":
            return state + action.payload
            case "withdraw":
            return state - action.payload
            case "bankrupt":
                return 0
    }
}