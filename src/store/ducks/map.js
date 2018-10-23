export const Types = {
  ADD_GITHUB_USER_REQUEST: 'map/ADD_GITHUB_USER_REQUEST',
  ADD_GITHUB_USER_SUCCESS: 'map/ADD_GITHUB_USER_SUCCESS',
  ADD_GITHUB_USER_ERROR: 'map/ADD_GITHUB_USER_ERROR',
  REMOVE_USER: 'map/REMOVE_USER',
};

const initialState = {
  markers: [],
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_GITHUB_USER_SUCCESS:
      return { markers: [...state.markers, action.payload.marker] };
    case Types.REMOVE_USER:
      return { markers: state.markers.filter(marker => marker.user.id !== action.payload.id) };
    default:
      return state;
  }
}

// Actions
export const Creators = {
  addGithubUserRequest: user => ({
    type: Types.ADD_GITHUB_USER_REQUEST,
    payload: { user },
  }),

  addGithubUserSuccess: marker => ({
    type: Types.ADD_GITHUB_USER_SUCCESS,
    payload: { marker },
  }),

  addGithubUserError: message => ({
    type: Types.ADD_GITHUB_USER_ERROR,
    payload: { message },
  }),

  removeUser: id => ({
    type: Types.REMOVE_USER,
    payload: { id },
  }),
};
