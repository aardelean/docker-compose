/*
  {
    types: [BEGIN_REQUEST, REQUEST_SUCCESS, REQUEST_FAIL],
    promise: Promise.resolve(data)
  }
*/
export function clientMiddleware(client) {
  return ({dispatch, getState}) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise, types, ...rest } = action;
      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      next({...rest, type: REQUEST});
      return promise(client).then(
        (result) => next({...rest, result, type: SUCCESS}),
        (error) => {
          if (error && error.status && error.status === 401) {
            console.log('Status 401. Server is not authorizing requests!');
          }
          return next({...rest, error, type: FAILURE});
        }
      ).catch((error)=> {
        console.error('MIDDLEWARE ERROR:', error);
        next({...rest, error, type: FAILURE});
      });
    };
  };
}
