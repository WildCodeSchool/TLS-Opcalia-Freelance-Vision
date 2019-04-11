export default function (store = { userTable: [] }, action) {
  switch (action.type) {
    case 'CREATE TOKEN USER': {
      const { tokenUser } = action;
      return { ...store, tokenUser };
    }
    case 'CREATE TOKEN ADMIN': {
      const { tokenAdmin } = action;
      return { ...store, tokenAdmin };
    }
    case 'USER LIST': {
      const { userTable } = action;
      return { ...store, userTable };
    }
    case 'PROFILETYPE': {
      const { profileType } = action;
      return {
        ...store, profileType
      };
    }
    case 'PROFILE': {
      const {
        nomProfile, prenomProfile, identifiantProfile, typeProfile, eMailProfile, passwordProfile
      } = action;
      return {
        ...store,
        nomProfile,
        prenomProfile,
        identifiantProfile,
        typeProfile,
        eMailProfile,
        passwordProfile
      };
    }
    default:
      return store;
  }
}
