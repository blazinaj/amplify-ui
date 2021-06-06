/**
 * Date picker component
 * @param onChange
 * @param defaultValue
 * @param value
 * @param dateConfig
 * @param fieldName
 * @returns {JSX.Element}
 * @constructor
 */
const DatePicker = ({onChange, defaultValue, value = defaultValue, dateConfig, fieldName}) => {

  return (
    <div data-testid={"custom_input_date" + fieldName}>
      <DatePicker
        id={"custom_input_date" + fieldName}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select a Date and Time"
        showTimeInput
        minDate={dateConfig?.minDate}
        maxDate={dateConfig?.maxDate}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        selected={!isNaN(new Date(value).getTime()) ? new Date(value) : new Date()}
        onChange={(date) => onChange && onChange(date)}
      />
    </div>
  )
}

export default DatePicker;