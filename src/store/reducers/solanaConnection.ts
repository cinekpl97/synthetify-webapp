import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SolanaNetworks } from '@web3/connection'
import { PayloadType } from './types'

export enum Status {
  Uninitialized = 'uninitialized',
  Init = 'init',
  Error = 'error',
  Initialized = 'initalized'
}
export interface ISolanaConnectionStore {
  status: Status
  message: string
  network: SolanaNetworks
  slot: number
}

export const defaultState: ISolanaConnectionStore = {
  status: Status.Uninitialized,
  message: '',
  network: SolanaNetworks.DEV,
  slot: 0
}
export const solanaConnectionSliceName = 'solanaConnection'
const solanaConnectionSlice = createSlice({
  name: solanaConnectionSliceName,
  initialState: defaultState,
  reducers: {
    initSolanaConnection(state) {
      state.status = Status.Init
      return state
    },
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload
      return state
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload
      return state
    },
    setNetwork(state, action: PayloadAction<SolanaNetworks>) {
      state.network = action.payload
      return state
    },
    updateSlot(state) {
      return state
    },
    setSlot(state, action: PayloadAction<number>) {
      state.slot = action.payload
      return state
    }
  }
})

export const actions = solanaConnectionSlice.actions
export const reducer = solanaConnectionSlice.reducer
export type PayloadTypes = PayloadType<typeof actions>
