import {useDataAccordion} from "..";

/**
 * An accordion that utilizes a model query and subscription
 * @returns {JSX.Element}
 * @constructor
 */
const DataAccordion = (props) => {
  return useDataAccordion(props).display
}

export default DataAccordion;