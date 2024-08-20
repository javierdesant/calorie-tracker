import { Activity } from "../types"

export type ActivityActions = 
  { type: 'save-activity', payload: { newActivity: Activity } } |
  { type: 'set-activeId', payload: { id: Activity['id'] } }

export type ActivityState = {
    activities: Activity[]
    activeId: Activity['id']
}

export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

export default (state: ActivityState = initialState, { type, payload }: ActivityActions) => {
  switch (type) {

  case "save-activity":
    return { 
        ...state, 
        activities: [...state.activities, payload.newActivity] 
    }
  
  case "set-activeId":
    return {
        ...state,
        activeId: payload.id
    }

  default:
    return state
  }
}