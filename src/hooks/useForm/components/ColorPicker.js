import React from "react";
import SketchPicker from 'react-color';

/**
 * A color picker component.
 *
 * @param onChange
 * @param value
 * @returns {JSX.Element}
 * @constructor
 */
const ColorPicker = ({onChange, value}) => {
  return (
    <SketchPicker
      color={value}
      onChangeComplete={(e) => onChange(e.hex)}
    />
  )
}

export default ColorPicker