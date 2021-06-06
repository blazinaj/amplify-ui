/**
 * WIP - needs to be refactored for material ui
 * Label component for form Inputs
 * @param label
 * @param required
 * @param tooltip
 * @param targetId
 * @param fieldName
 * @param createItemComponent
 * @returns {JSX.Element}
 * @constructor
 */
const FormLabel = ({label, required, tooltip, targetId, fieldName, createItemComponent}) => {

  return (
    <span>
      {label}
    </span>
  )

  // //Replacing all spaces with underscores to prevent id from having errors
  // targetId = targetId.replace(/ /g,"_")
  // //targetId = targetId.replaceAll(" ", "_"); (doesn't work with tests)
  //
  // return (
  //   <>
  //     {
  //       label &&
  //       <Label for={targetId}>
  //         {label || fieldName}
  //         {required && <span style={{color: "red"}}> *</span>}
  //         {
  //           tooltip &&
  //           <>
  //             <i style={{marginRight: "1em", marginLeft: "1em", cursor: "pointer"}} id={targetId + "info"}
  //                className="icon-question"/>
  //             <UncontrolledTooltip placement="auto" target={targetId + "info"}>
  //               {tooltip}
  //             </UncontrolledTooltip>
  //           </>
  //         }
  //         {createItemComponent}
  //       </Label>
  //     }
  //   </>
  // )
};

export default FormLabel;