import * as xlsx from "xlsx";
import { generalTypes } from "../../components/types/genral.types";

const convertXlsx = (e) => {
  return (dispatch) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = xlsx.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonLocation = xlsx.utils.sheet_to_json(worksheet);
      dispatch(convertedFile(jsonLocation));
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };
};
const convertedFile = (jsonLocation) => {
  return { type: generalTypes.CONVERTED_XLSX, jsonLocation };
};
export const locationActions = {
  convertXlsx,
};
