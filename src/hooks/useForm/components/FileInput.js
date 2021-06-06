import {useEffect} from "react";

/**
 * WIP - needs to be refactored
 * Can be used to select files for upload
 * @param {function} onChange - callback for tracking changes in this input (called on every new file selection)
 * @param {string} [fieldName = ""] - used to create a unique data test id
 * @param {object[] | string} [value = ""] - used to clear the files field (set to an empty string to do so)
 * @param {object} fileInputConfig - contain options such as `acceptMultiple` that allow to customize the input
 */
const FileInput = ({onChange, value = "", fileInputConfig = {}}) => {

  return (
    <div>
      File Upload not yet implemented 😭
    </div>
  )

  // //Unique id for this input in the form
  // const id = "custom_file_input" + uuid();
  //
  // //Destructing the configuration parameter
  // const {
  //   acceptMultiple = false,
  // } = fileInputConfig;
  //
  // //Handles new file selection by calling the onChange callback
  // const handleFileChange = () => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     onChange(Array.from(element.files));
  //   }
  // };
  //
  // //Used to reset the selected files when a form is cleared
  // useEffect(() => {
  //   if (value === "") {
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.value = "";
  //     }
  //   }
  // }, [value])
  //
  // return (
  //   <Input
  //     data-testid={"custom_input_file"}
  //     id={id}
  //     type="file"
  //     multiple={acceptMultiple}
  //     onChange={() => handleFileChange()}
  //   />
  // )
}

export default FileInput;