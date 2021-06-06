import {useState} from "react";
import {generateId} from "../../../functions/generateId";

/**
 * WIP - not yet implemented
 * Can be used as a true/false style input in a custom form
 * @param onChange
 * @param value
 * @param disabled
 * @param switchConfig
 * @param style
 * @constructor
 */
const Switch = ({onChange, value, disabled, switchConfig = {}, style = {}}) => {
  const {onLabel, offLabel, label} = switchConfig;
  const [id] = useState(generateId());

  return (
    <div style={{...style}}>
      <>
        {
          /*

              TODO: refactor from reactstrap to material ui

           */
          // value !== null && value !== undefined &&
          // <ReactstrapCustomInput
          //   id={id}
          //   checked={value}
          //   onChange={() => onChange(!value)}
          //   type="switch"
          //   name={"customSwitch" + id}
          //   label={label}
          // />
        }
      </>
    </div>
  )
};

export default Switch;