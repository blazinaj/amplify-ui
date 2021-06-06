import {useDataTable} from "../../lib/hooks/useDataTable";
import React from "react";
import ShowcaseItem from "./ShowcaseItem";

/**
 * A showcase example of the DataTable component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ShowcaseDataTable = (props) => {

  /**
   * An Amplify CLI Model
   * @type {null}
   */
  const model = null;

  /**
   * @see material ui column definition
   * @type {({headerName: string, field: string, width: number}|{headerName: string, field: string, width: number}|{headerName: string, field: string, width: number})[]}
   */
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 }
  ];

  /**
   * Initial items for the DataTable
   * @type {*[]}
   */
  const items = [
    {
      id: "1",
      firstName: "Jacob",
      lastName: "Blazina"
    },
    {
      id: "2",
      firstName: "Taylor",
      lastName: "Blazina"
    }
  ];

  const dataTable = useDataTable({model, columns, items})

  return (
    <ShowcaseItem title={"DataTable"}>
      {dataTable.display}
    </ShowcaseItem>
  )

}

export default ShowcaseDataTable