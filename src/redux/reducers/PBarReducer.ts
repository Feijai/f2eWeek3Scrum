import { P_BAR_NEXT_ACTION, P_BAR_BACK_ACTION, P_BAR_TO_START_ACTION, P_BAR_SET_ACTION } from '../constants'

const initialState: { now: number } = {
    now: 10
}

const PBarReducer = function (state = initialState, action: { type: string, payload: number }) {
    switch (action.type) {
        case P_BAR_NEXT_ACTION: {
            return {
                now: state.now + 10
            }
        }

        case P_BAR_BACK_ACTION: {
            return {
                now: state.now - 10
            }
        }

        case P_BAR_TO_START_ACTION: {
            return {
                now: 10
            }
        }

        case P_BAR_SET_ACTION: {
            return {
                now: action.payload
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default PBarReducer
