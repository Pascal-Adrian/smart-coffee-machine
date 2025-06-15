import { createSlice } from '@reduxjs/toolkit';

interface MachineState {
  id: string;
  user_id: string;
  device_name: string;
  is_powered_on: boolean;
  number_of_coffee: number;
  total_active_time: number;
  lasr_cleaning_time: number;
  last_active_time: string;
  created_at: string;
  statuses?: {
    water: {
      status: string;
      value?: number;
    };
    beans: {
      status: string;
      value?: number;
    };
    cleaning: {
      status: string;
      value?: number;
    };
    cups: {
      status: string;
      value?: number;
    };
  };
}

const initialState: MachineState = {} as MachineState;

export const machineSlice = createSlice({
  name: 'machine',
  initialState,
  reducers: {
    setMachine: (state, action) => {
      const {
        id,
        user_id,
        device_name,
        is_powered_on,
        number_of_coffee,
        total_active_time,
        lasr_cleaning_time,
        last_active_time,
        created_at,
      } = action.payload;
      state.id = id;
      state.user_id = user_id;
      state.device_name = device_name;
      state.is_powered_on = is_powered_on;
      state.number_of_coffee = number_of_coffee;
      state.total_active_time = total_active_time;
      state.lasr_cleaning_time = lasr_cleaning_time;
      state.last_active_time = last_active_time;
      state.created_at = created_at;
    },
    setStatuses: (state, action) => {
      const statuses = action.payload;
      state.statuses = statuses;
    },
    togglePowerState: (state) => {
      state.is_powered_on = !state.is_powered_on;
    },
  },
});

export const { setMachine, setStatuses, togglePowerState } =
  machineSlice.actions;
export default machineSlice.reducer;
export const selectMachine = (state: { machine: MachineState }) =>
  state.machine;
