import { IUser } from './authInterface'
import { ILights } from './Light'

export const LIGHTS_FETCH = 'LIGHTS_FETCH'
export const UPDATE_LIGHT = 'UPDATE_LIGHT'

export interface IFetchLightsAction {
  type: typeof LIGHTS_FETCH
  lights: ILights
}

export interface IUpdateLightsAction {
  type: typeof UPDATE_LIGHT
  isOn: boolean
  id: string
  brightnessValue: number
}

export type ActionTypes =
  | IFetchLightsAction
  | IUpdateLightsAction

export type AppActions = ActionTypes
