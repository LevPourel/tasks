
interface action {
    type:string,
    action: any
}

const initialState = {
    title:'Hello world'
}
export const reducer = (state = initialState, action: action) => {
    switch (action.type) {
        default:
            return state
    }
}