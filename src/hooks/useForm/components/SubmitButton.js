import Button from "@material-ui/core/Button";

/**
 * Submit Button for forms
 * @param submit
 * @param submitDisabled
 * @returns {JSX.Element}
 * @constructor
 */
const SubmitButton = ({submit, submitDisabled}) => {
  return (
    <Button
      className="float-right"
      color="success"
      onClick={async () => await submit()}
      style={{marginRight: "1em"}}
      disabled={submitDisabled}
      title={submitDisabled ? "Please fill in all required fields" : "Submit this form"}
      data-testid="useForm-submit-button"
    >
      Submit
    </Button>
  )
}

export default SubmitButton;