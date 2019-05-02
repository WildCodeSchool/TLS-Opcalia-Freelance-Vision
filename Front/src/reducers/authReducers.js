export default function (store = { userTable: [], uploadImg: [] }, action) {
  switch (action.type) {
    case 'CREATE TOKEN USER': {
      const { tokenUser } = action;
      return { ...store, tokenUser };
    }
    case 'CREATE UPLOAD IMG': {
      const { uploadImg } = action;
      return { ...store, uploadImg };
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
        nomProfile,
        idProfile,
        prenomProfile,
        identifiantProfile,
        typeProfile,
        eMailProfile,
        passwordProfile, telephoneProfile
      } = action;
      return {
        ...store,
        nomProfile,
        idProfile,
        prenomProfile,
        identifiantProfile,
        typeProfile,
        eMailProfile,
        passwordProfile,
        telephoneProfile
      };
    }
    default:
      return store;
  }
}
