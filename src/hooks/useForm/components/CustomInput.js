import React, {useState} from "react";
import RichText from "./RichText";
import Switch from "./Switch";
import ColorPicker from "./ColorPicker";
import ImagePicker from "./ImagePicker";
import DatePicker from "./DatePicker";
import FileInput from "./FileInput";
import Dropdown from "./Dropdown";
import TextField from "@material-ui/core/TextField";
import {generateId} from "../../../functions/generateId";

/**
 * Custom Input Component handler for the useForm hook
 *
 * @param idParam
 * @param input
 * @param setInput
 * @param fieldName
 * @param inputType
 * @param required
 * @param validationFunction
 * @param validationText
 * @param numberConfig
 * @param dropdownConfig
 * @param fileInputConfig
 * @param customConfig
 * @param placeholder
 * @param disabled
 * @param defaultValue
 * @param isValid
 * @param isInvalid
 * @param inputGroupAddon
 * @param switchConfig
 * @param dateConfig
 * @param onChangeFunction
 * @param richTextEditorConfig
 * @param rows
 * @param onKeyPress
 * @returns {JSX.Element}
 * @constructor
 */
const CustomInput = (
  {
    componentId: idParam,
    input,
    setInput,
    fieldName,
    inputType = "text",
    required,
    validationFunction,
    validationText,
    numberConfig,
    dropdownConfig,
    fileInputConfig,
    customConfig = {},
    placeholder,
    disabled,
    defaultValue,
    isValid,
    isInvalid,
    inputGroupAddon,
    switchConfig,
    dateConfig,
    onChangeFunction,
    richTextEditorConfig = {},
    rows,
    onKeyPress,
    label
  }) => {

  const onChange = (value) => {
    let newInput = {...input};
    newInput[fieldName] = value;
    setInput({...newInput});
    onChangeFunction && onChangeFunction(newInput);
    return newInput;
  };

  const [componentId] = useState(idParam || generateId());

  return (
    <>
      {(() => {
        switch (inputType) {
          case "custom":
            return React.cloneElement(customConfig.component, {
              id: `customField${fieldName}`,
              fieldName,
              placeholder,
              input,
              value: input[fieldName],
              // onChange,
              onChangeCallback: onChange,
              disabled,
              valid: isValid,
              invalid: isInvalid,
              "data-testid": "useForm-custom-input-" + fieldName
            });
          case "rich-text-editor":
            return (
              <RichText
                placeholder={placeholder}
                value={input[fieldName]}
                onChange={(value) => onChange(value)}
                disabled={disabled}
                valid={isValid}
                invalid={isInvalid}
                autoComplete="new-password"
                richTextEditorConfig={richTextEditorConfig}
              />
            );
          case "switch":
            return (
              <Switch
                value={input[fieldName]}
                onChange={(value) => onChange(value)}
                disabled={disabled}
                switchConfig={switchConfig}
                style={switchConfig?.style}
              />
            );
          case "dropdown":
            return (
              <Dropdown
                id={fieldName}
                type={inputType}
                placeholder={placeholder}
                value={input[fieldName]}
                defaultValue={input[fieldName]}
                onChange={(value) => onChange(value)}
                dropdownConfig={dropdownConfig}
                disabled={disabled}
                valid={isValid}
                invalid={isInvalid}
                autoComplete="new-password"
                label={label}
              />
            );
          case "color-picker":
            return (
              <ColorPicker value={input[fieldName]} onChange={(value) => onChange(value)}/>
            )
          case "image":
            return (
              <ImagePicker value={input[fieldName]} onChange={(value) => onChange(value)}/>
            )
          case "date":
            return (
              <DatePicker
                defaultValue={defaultValue}
                value={input[fieldName]}
                onChange={(value) => onChange(value)}
                dateConfig={dateConfig}
                fieldName={fieldName}
              />
            )
          case "file":
            return (
              <FileInput
                value={input[fieldName]}
                onChange={(value) => onChange(value)}
                required={required}
                fileInputConfig={fileInputConfig}
              />
            )
          default:
            return (
              <>
                {(() => {
                  if (inputGroupAddon) {
                    return (
                      <div>
                        {
                          /*

                              TODO: refactor to use material ui instead of reactstrap

                           */
                          // inputGroupAddon.addonType === "prepend" &&
                          // <InputGroupAddon addonType="prepend">
                          //   {inputGroupAddon.addonComponent}
                          // </InputGroupAddon>
                        }
                        <TextField
                          id={fieldName + componentId}
                          type={inputType}
                          placeholder={placeholder}
                          value={input[fieldName]}
                          onChange={(e) => onChange(e.target.value)}
                          disabled={disabled}
                          valid={isValid}
                          invalid={isInvalid}
                          autoComplete="new-password"
                          data-testid={"useForm-input-" + fieldName}
                          rows={rows}
                          onKeyPress={onKeyPress}
                        />
                        {
                          // inputGroupAddon.addonType === "append" &&
                          // <InputGroupAddon addonType="append">
                          //   {inputGroupAddon.addonComponent}
                          // </InputGroupAddon>
                        }
                      </div>
                    )
                  } else {
                    return (
                      <TextField
                        id={fieldName + componentId}
                        label={label}
                        type={inputType}
                        placeholder={placeholder}
                        value={input[fieldName]}
                        onChange={(e) => onChange(e.target.value)}
                        disabled={disabled}
                        valid={isValid}
                        invalid={isInvalid}
                        autoComplete="new-password"
                        data-testid={"useForm-input-" + fieldName}
                        rows={rows}
                        onKeyPress={onKeyPress}
                        error={isInvalid}
                        helperText={required && (input[fieldName] === "" || input[fieldName] === null || input[fieldName] === undefined) ? "This is a required field" : validationText}
                      />
                    )
                  }
                })()}
              </>
            )
        }
      })()}
    </>
  )
};

export default CustomInput