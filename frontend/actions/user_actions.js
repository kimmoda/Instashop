import * as ApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (targetUser) => ({
  type: RECEIVE_USER,
  targetUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchUser = (userId) => dispatch => (
  ApiUtil.fetchUser(userId).then( targetUser => dispatch(receiveUser(targetUser)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const updateUser = (newUserData) => dispatch => (
  ApiUtil.updateUser(newUserData).then( user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors))
  )
);
