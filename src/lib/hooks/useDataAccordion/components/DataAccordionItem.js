import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import React from "react";

/**
 * A single item in a data accordion
 * @param classes
 * @param item
 * @param detailsComponent
 * @returns {JSX.Element}
 * @constructor
 */
const DataAccordionItem = ({classes, item, detailsComponent}) => {
  return (
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id={"panel3a-header" + item?.id}
      >
        <Typography className={classes.heading}>{item.name}</Typography>
        <Typography className={classes.secondaryHeading}>{item.description}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {React.cloneElement(detailsComponent, {item})}
      </AccordionDetails>
    </Accordion>
  )
}

export default DataAccordionItem;