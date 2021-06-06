import React, {useEffect, useState} from "react";
import {generateId} from "../../../functions/generateId";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";

/**
 * WIP - not yet implemented
 * Dropdown component
 *
 * @param input
 * @param setInput
 * @param fieldName
 * @param required
 * @param dropdownConfig
 * @param customConfig
 * @param placeholder
 * @param disabled
 * @param defaultValue
 * @param isValid
 * @param isInvalid
 * @param onChange
 * @returns {JSX.Element}
 * @constructor
 */
const Dropdown = (
  {
    input,
    setInput,
    fieldName,
    required,
    dropdownConfig = {},
    customConfig = {},
    placeholder,
    disabled,
    defaultValue,
    isValid,
    isInvalid,
    onChange,
    label
  }) => {

  const {data: initialData, fields, width, showClearButton} = dropdownConfig;

  const [ref, setRef] = useState("");

  const getInitialData = () => {
    if (initialData) {
      const arr = [];
      initialData.forEach(({text, value}) => {
        arr.push({text, value: JSON.stringify(value)})
      });
      return arr;
    } else {
      return []
    }
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...getInitialData()])
  }, [initialData])

  const [id] = useState(generateId());

  return (
    <>
      <Autocomplete
        id={'form-dropdown' + id}
        options={dropdownConfig.options}
        getOptionLabel={(option) => option.text}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
        onChange={(e) => onChange(dropdownConfig.options.find(({text}) => text === e.target.textContent))}
      />
      {/*

          TODO: refactor from syncfusion to material ui

      */}
      {/*<DropDownListComponent*/}
      {/*  id={"custom_dropdown" + id}*/}
      {/*  ref={(r) => setRef(r)}*/}
      {/*  filtering={(args => onDropdownFiltering(args, data))}*/}
      {/*  popupHeight="250px"*/}
      {/*  fields={fields || {text: "text", value: "value"}}*/}
      {/*  allowFiltering={true}*/}
      {/*  dataSource={data || []}*/}
      {/*  readonly={disabled}*/}
      {/*  placeholder={placeholder || "Select an item.."}*/}
      {/*  index={(!isNullOrUndefined(defaultValue) && data && Array.isArray(data)) ? data.findIndex((item) => item.value === JSON.stringify(defaultValue)) : undefined}*/}
      {/*  change={({itemData}) => {*/}
      {/*    !isNullOrUndefined(itemData?.value) ? onChange(JSON.parse(itemData.value)) : onChange(undefined)*/}
      {/*  }}*/}
      {/*  data-testid={"useForm-dropdown-input-" + fieldName}*/}
      {/*  width={width}*/}
      {/*/>*/}
      {/*{*/}
      {/*  showClearButton &&*/}
      {/*  <Button*/}
      {/*    size="sm"*/}
      {/*    color={"ghost-secondary"}*/}
      {/*    className="btn-pill float-right"*/}
      {/*    style={{boxShadow: "none"}}*/}
      {/*    onClick={() => setRef((r) => r.value = null)*/}
      {/*    }>Clear</Button>*/}
      {/*}*/}
    </>
  )
}

export default Dropdown;