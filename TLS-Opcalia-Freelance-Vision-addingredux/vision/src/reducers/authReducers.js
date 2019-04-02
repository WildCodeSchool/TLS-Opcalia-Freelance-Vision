export default function (store = {}, action) {
  switch (action.type) {
    case 'CREATE TOKEN': {
      const { token } = action;
      return { ...store, token };
    }
    case 'PROFILE': {
      // const { admin, employee, freelance } = action;
      const { profileType } = action;
      return {
        ...store, profileType
      };
    }
    default:
      return store;
  }
}
