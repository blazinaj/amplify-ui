import Button from "@material-ui/core/Button";

/**
 * Reset button for forms
 * @param reset
 * @returns {JSX.Element}
 * @constructor
 */
const ResetButton = ({reset}) => {
  return (
    <Button
      data-testid="useForm-reset-button"
      className="float-right"
      color="secondary"
      onClick={() => reset()}
    >
      Reset
    </Button>
  )
}

export default ResetButton