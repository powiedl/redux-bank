const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payLoad,
      };
    default:
      return state;
  }
}

// action creator functions - Redux convention
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
  // createdAt: das aktuelle Datum zu nehmen ist Teil der Business Logik und sollte daher eigentlich im reducer passieren, ABER ...
  // das aktuelle Datum auslesen ist ein Sideeffect und darf daher nicht im reducer sein
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
