


const initialState: { now: number } = {
    now: 10,
}

const PBarReducer = function (state = initialState, action: { type: string, payload: string }) {
    switch (action.type) {

        default: {
            return {
                ...state,
            }
        }
    }
}

export default PBarReducer
