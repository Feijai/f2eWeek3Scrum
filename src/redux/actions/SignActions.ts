import {  } from '../constants'

interface SaveSignAction {
    type: string
    payload: any
}

export const clickSaveSignAction = (payload: string) =>
    (dispatch: (arg: SaveSignAction) => (SaveSignAction)) => {
        dispatch({ type: "SIGN_SAVE_ACTION", payload: payload })
    }

