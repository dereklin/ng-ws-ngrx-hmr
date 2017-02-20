import * as student from '../actions/student';


export interface State {
  students: any[];
}

const initialState: State = {
  students: []
};

export function reducer(state = initialState, action: student.Actions): State {
  switch (action.type) {
    case student.LOAD_STUDENTS:
      return {
        students: action.payload
      };

    default:
      return state;
  }
}

export const getStudents = (state: State) => state.students;