import { Activity } from "../types"

export type ActivityActions = {
    type: 'save-activity',
    payload: { newActivity: Activity }
}

type ActivityState = {
    activities: Activity[];
}

export const initialState: ActivityState = {
    activities: []
}

export default (state: ActivityState = initialState, { type, payload }: ActivityActions) => {
  switch (type) {

  case "save-activity":
    // TODO: Implement save-activity reducer
    return { ...state, ...payload }

  default:
    return state
  }
}