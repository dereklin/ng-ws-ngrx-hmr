import * as root from '../actions/root';


export interface State {
  rootState: any;
}

const initialState: State = {
  rootState: {}
};

export function reducer(state = initialState, action: root.Actions): State {
  switch (action.type) {
    case root.SET_ROOT_STATE:
      return {
        rootState: action.payload
      };

    default:
      return state;
  }
}

export const getRootState = (state: State) => state.rootState;