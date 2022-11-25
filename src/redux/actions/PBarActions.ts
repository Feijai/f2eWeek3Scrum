import { P_BAR_NEXT_ACTION, P_BAR_BACK_ACTION, P_BAR_TO_START_ACTION, P_BAR_SET_ACTION } from '../constants'

interface PBarActionProps {
    type: string;
}

interface SetPBarPercentProps extends PBarActionProps {
    payload: number
}

export const clickNextAction = () =>
    async (dispatch: (arg: PBarActionProps) => (PBarActionProps)) => {
        dispatch({ type: P_BAR_NEXT_ACTION })
    }



export const clickBackAction = () =>
    async (dispatch: (arg: PBarActionProps) => (PBarActionProps)) => {
        dispatch({ type: P_BAR_BACK_ACTION })
    }


export const clickToStartAction = () =>
    async (dispatch: (arg: PBarActionProps) => (PBarActionProps)) => {
        dispatch({ type: P_BAR_TO_START_ACTION })
    }


export const setPBarPercentAction = (num: number) =>
    async (dispatch: (arg: SetPBarPercentProps) => (SetPBarPercentProps)) => {
        dispatch({ type: P_BAR_SET_ACTION, payload: num })
    }