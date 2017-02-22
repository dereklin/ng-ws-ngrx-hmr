import * as student from '../actions/student';

export interface State {
  students: any[];
  loading: boolean;
}

const initialState: State = {
  students: [],
  loading: false
};

export function reducer(state = initialState, action: student.Actions): State {
  switch (action.type) {
    case student.ActionTypes.LOAD_STUDENTS: {
      return {
        students: action.payload,
        loading: true
      };
    }
    case student.ActionTypes.STOP_LOADING: {
      return {
        students: state.students,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}

export const getStudents = (state: State) => state.students;
