import { Activity } from "../types"

export type ActivityActions = 
  { type: 'save-activity', payload: { newActivity: Activity } } |
  { type: 'set-activeId', payload: { id: Activity['id'] } } |
  { type: 'delete-activity', payload: { id: Activity['id'] } }

export type ActivityState = {
    activities: Activity[]
    activeId: Activity['id']
}

const localStorageActivities = (): Activity[] => {
  const activities = localStorage.getItem('activities')
  return activities ? JSON.parse(activities) : []
}

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: ''
}

export default (state: ActivityState = initialState, { type, payload }: ActivityActions) => {
  switch (type) {

  case "save-activity":

    let updatedActivities: Activity[] = [] 
    if (state.activeId) {
      updatedActivities = state.activities.map( activity => activity.id === state.activeId ? 
        payload.newActivity : activity)
    } else {
      updatedActivities = [...state.activities, payload.newActivity]
    }

    return { 
        ...state, 
        activities: updatedActivities,
        activeId: ''
    }
  
  case "set-activeId":
    return {
        ...state,
        activeId: payload.id
    }

  case "delete-activity":
    return {
        ...state,
        activities: state.activities.filter(activity => activity.id !== payload.id)
    }

  default:
    return state
  }
}