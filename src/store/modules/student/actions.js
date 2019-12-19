export function createStudentRequest(data) {
  return {
    type: '@student/CREATE_STUDENT_REQUEST',
    payload: { data },
  };
}
export function createStudentSuccess(student) {
  return {
    type: '@student/CREATE_STUDENT_SUCCESS',
    payload: { student },
  };
}
export function createStudentFailer() {
  return {
    type: '@student/CREATE_STUDENT_FAILER',
  };
}

export function updateStudentRequest(data, id) {
  return {
    type: '@student/UPDATE_STUDENT_REQUEST',
    payload: { data, id },
  };
}
export function updateStudentSuccess(student) {
  return {
    type: '@student/UPDATE_STUDENT_SUCCESS',
    payload: { student },
  };
}
export function updateStudentFailer() {
  return {
    type: '@student/UPDATE_STUDENT_FAILER',
  };
}

export function cancelStudentRequest(data, id) {
  return {
    type: '@student/CANCEL_STUDENT_REQUEST',
    payload: { data },
  };
}
export function cancelStudentSuccess(student) {
  return {
    type: '@student/CANCEL_STUDENT_SUCCESS',
    payload: { student },
  };
}
export function cancelStudentFailer() {
  return {
    type: '@student/CANCEL_STUDENT_FAILER',
  };
}
