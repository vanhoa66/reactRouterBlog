
const initialState = {
    isLogin: false,
    username: ''
}

const User = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            let { username, password } = action;
            if (username === "1" && password === "1") {
                state = {
                    isLogin: true,
                    username
                }
            }
            return { ...state }
        case "LOG_OUT":
            state = {
                isLogin: false,
                username: ''
            }
            return { ...state }
        default:
            return state
    }
}

export default User