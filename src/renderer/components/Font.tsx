import PointInput from "./PointInput";
import {useDispatch, useSelector} from "react-redux";
import * as fontActions from "../store/font/font.actions";
import {selectFontSize, selectFontSizeMax, selectFontSizeMin} from "../store/font/font.selectors";

export default function Font() {

  const dispatch = useDispatch();
  const fontSize = useSelector(selectFontSize);
  const fontSizeMin = useSelector(selectFontSizeMin);
  const fontSizeMax = useSelector(selectFontSizeMax);
  const setFontSize = (size: number) => dispatch(fontActions.setFontSize(size));
  const incrementFontSize = () => setFontSize(fontSize + 1);

  return (
    <>
      <small className="uppercase text-black/30 dark:text-white/30 px-2 py-4 text-[10px] font-medium">
        Font
      </small>
      <ul>
        <li>
          <div
            className="cursor-auto px-2 py-1 flex items-center active:bg-light-steel-blue/50 dark:active:bg-charcoal hover:transition">
            <div className="text-sm flex-1 text-black dark:text-white">Font</div>
            <div className="flex space-x-1 items-center">
              <span className="text-black/50 dark:text-white/50 text-xs font-medium">
                {'font.family'}
              </span>
              <i className="mdi mdi-chevron-right text-black/30 dark:text-white/30 text-xl"/>
            </div>
          </div>
        </li>
        <li>
          <div
            data-testid="font-size"
            onClick={incrementFontSize}
            className="cursor-auto px-2 py-1 flex items-center active:bg-light-steel-blue/50 dark:active:bg-gunmetal hover:transition">
            <div className="text-sm flex-1 text-black dark:text-white">Font Size</div>
            <PointInput
              value={fontSize}
              minValue={fontSizeMin}
              maxValue={fontSizeMax}
              onChange={setFontSize}
            />
          </div>
        </li>
        <li>
          <div
            className="cursor-auto px-2 py-1 flex items-center active:bg-light-steel-blue/50 dark:active:bg-gunmetal hover:transition">
            <div className="text-sm flex-1 text-black dark:text-white">Line Spacing</div>
            <PointInput
              value={2}
              minValue={2}
              maxValue={40}
              onChange={setFontSize}
            />
          </div>
        </li>
      </ul>
    </>
  );
}
