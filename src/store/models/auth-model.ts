import { createModel } from '@rematch/core';
import { SignInPayload, SignUpPayload, User } from 'interfaces';
import { authLocalStorage } from 'shared';
import { RootModel } from '.';

interface AuthModelState {
  currentUser: User;
}

export const authModel = createModel<RootModel>()({
  state: {
    currentUser: {},
  } as AuthModelState,

  reducers: {
    setCurrentUser: (state, payload) => ({ ...state, currentUser: payload }),
  },

  effects: (dispatch) => ({
    async doSignIn(payload: SignInPayload, state): Promise<any> {
      return new Promise(() =>
        setTimeout((resolve) => {
          dispatch.authModel.setCurrentUser({ username: 'trungdvu' });
          authLocalStorage.setAccessToken('#token');
          resolve('');
        }, 1000),
      );
    },

    async doSignUp(payload: SignUpPayload, state): Promise<any> {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve('');
        }, 1000),
      );
    },

    async doSignOut(): Promise<any> {
      return new Promise((resolve) =>
        setTimeout(() => {
          authLocalStorage.setAccessToken('');
          dispatch.authModel.setCurrentUser({});
          resolve('');
        }, 1000),
      );
    },
  }),
});
