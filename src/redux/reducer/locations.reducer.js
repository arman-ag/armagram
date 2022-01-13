import { generalTypes } from "../../components/types/genral.types";
const initialState = {
  locations: [{ lat: 29.5926, long: 52.5836, label: "media" }],
};
const location = (state = initialState, action) => {
  switch (action.type) {
    case generalTypes.CONVERTED_XLSX:
      return {
        ...state,
        locations: action?.jsonLocation,
      };
    default:
      return state;
  }
};
export default location;
