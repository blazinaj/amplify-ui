import Dashboard from "../../lib/hooks/useDashboard/hooks/useDashboard";
import React, {useEffect, useState} from "react";
import ShowcaseDataTable from "./ShowcaseDataTable";
import ShowcaseForm from "./ShowcaseForm";
import {useSelectModel} from "../hooks/useSelectModel";
import ShowcaseItem from "./ShowcaseItem";
import {generateModelData} from "../functions/generateModelData";

/**
 * Showcases `amplify-ui` components as an interactive web app
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const FeatureShowcase = (props) => {

  const [generatedData, setGeneratedData] = useState([]);

  const {selectedModel, display} = useSelectModel();

  useEffect(() => {
    setGeneratedData(generateModelData(selectedModel.fields, 10))
  }, [selectedModel])

  return (
    <span>
      <Dashboard dashboardContext={{selectedModel}}>
        <ShowcaseItem title="Select a Schema Model to Preview">
          {display}
        </ShowcaseItem>
        <ShowcaseDataTable/>
        <ShowcaseForm/>
      </Dashboard>
    </span>

  )
}

export default FeatureShowcase;