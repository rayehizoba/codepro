import {types} from "./font.reducer";

export const setFontSize = (data) => (dispatch) => dispatch({type: types.SIZE_SET, data});
