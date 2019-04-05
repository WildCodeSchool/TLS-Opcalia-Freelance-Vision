export default function (store = {}, action) {
  switch (action.type) {
    case 'CREATE TOKEN': {
      const { token } = action;
      return { ...store, token };
    }
    case 'PROFILETYPE': {
      const { profileType } = action;
      return {
        ...store, profileType
      };
    }
    case 'PROFILE': {
      const {
        nomProfile, prenomProfile, identifiantProfile, typeProfile, eMailProfile
      } = action;
      return {
        ...store, nomProfile, prenomProfile, identifiantProfile, typeProfile, eMailProfile
      };
    }
    default:
      return store;
  }
}
