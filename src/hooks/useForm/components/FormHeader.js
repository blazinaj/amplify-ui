import React from "react";

/**
 * Displays the header with a line underneath it for the Form
 * @param header
 * @returns {JSX.Element}
 * @constructor
 */
export const FormHeader = ({header}) => {
  return (
    <>
      {header}
      {header && <hr/>}
    </>
  )
}
