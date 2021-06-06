import {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";

/**
 * WIP - needs refactoring
 * Can be used instead of the normal "text" or "textarea" input types in a form.
 * @param {function} onChange - the handler for setting this field value with an HTML String
 * @param value
 * @returns {*}
 * @constructor
 */
const RichText = ({onChange, value: initialValue = "", richTextEditorConfig = {}}) => {

  return (
    <div>
      Rich Text is not yet implemented 😭
    </div>
  )

  // const [showRichTextEditor, setShowRichTextEditor] = useState(false);
  // const [value, setValue] = useState(initialValue);
  //
  // const [textAreaValue, setTextAreaValue] = useState(value);
  //
  // const {editorType = "richTextEditor"} = richTextEditorConfig;
  //
  // useEffect(() => {
  //   setValue(initialValue)
  // }, [initialValue]);
  //
  // const useRichEditor = useTinyEditor({});
  //
  // useEffect(() => {
  //   if (useRichEditor) {
  //     useRichEditor.setValue(value ? value : "");
  //     onChange(value)
  //   }
  // }, [value]);
  //
  // return (
  //   <>
  //     <Alert
  //       className="shadow appearance-none border rounded text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
  //       color="light"
  //     >
  //       {
  //         !showRichTextEditor ? parse(value ? `<div>${value}</div>` : "") : editorType === "richTextEditor" ? useRichEditor.display :
  //           <Input
  //             type="textarea"
  //             value={textAreaValue}
  //             onChange={(e) => setTextAreaValue(e.target.value)}
  //           />
  //       }
  //       {
  //         !showRichTextEditor ?
  //           <Button
  //             size="sm"
  //             color="ghost-warning"
  //             className="btn-pill"
  //             onClick={() => {
  //               editorType === "textarea" ? setTextAreaValue(value) : useRichEditor.setValue(value ? value : undefined);
  //               setShowRichTextEditor(true);
  //             }}
  //           >
  //             <i className="icon-pencil"/>
  //           </Button> :
  //           <ButtonGroup>
  //             <Button
  //               color="ghost-success"
  //               onClick={() => {
  //                 setValue(editorType === "richTextEditor" ? useRichEditor.value : textAreaValue);
  //                 setShowRichTextEditor(false);
  //               }}
  //             >
  //               Save
  //             </Button>
  //             <Button
  //               color="ghost-secondary"
  //               onClick={() => {
  //                 useRichEditor.setValue(value ? value : undefined);
  //                 setShowRichTextEditor(false);
  //               }}
  //             >
  //               Cancel
  //             </Button>
  //           </ButtonGroup>
  //       }
  //     </Alert>
  //   </>
  // )
};

export default RichText;