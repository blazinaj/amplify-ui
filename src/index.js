import { useDataTable, DataTable } from './hooks/useDataTable'
import { useDatastore } from './hooks/useDatastore'
import { useDashboard, Dashboard } from './hooks/useDashboard'
import {useForm} from './hooks/useForm';
import {useDetails, Details} from './hooks/useDetails'
import {CreateItemButton} from './components/CreateItemButton';
import {DeleteAllItemsButton} from "./components/DeleteAllItemsButton";
import {DeleteItemButton} from "./components/DeleteItemButton";
import {DetailsField} from "./components/DetailsField";
import {deleteAllItems} from "./functions/deleteAllItems";
import {deleteItem} from "./functions/deleteItem";
import {generateFakeData} from "./functions/generateFakeData";
import {generateId} from "./functions/generateId";
import {isNullOrUndefined} from "./functions/isNullOrUndefined";
import {saveItem} from "./functions/saveItem";
import {useAmplifyConnector} from "./hooks/useAmplifyConnector";

const ExampleComponent = (props) => {
  return (<div>Hello World!</div>)
}


export {
  ExampleComponent,
  DataTable,
  useDataTable,
  useDatastore,
  useDashboard,
  useForm,
  useDetails,
  Details,
  Dashboard,
  CreateItemButton,
  DeleteAllItemsButton,
  DeleteItemButton,
  DetailsField,
  deleteAllItems,
  deleteItem,
  generateFakeData,
  generateId,
  isNullOrUndefined,
  saveItem,
  useAmplifyConnector
}
