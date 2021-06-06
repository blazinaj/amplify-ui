import {Blog, Person, Post} from "../../models";
import {useState} from "react";
import {useForm} from "../../lib/hooks/useForm";

export const useSelectModel = () => {

  const models = [
    {
      name: "Person",
      model: Person,
      fields: [
        {
          name: "firstName",
          category: "name",
          type: "firstName"
        },
        {
          name: "lastName",
          category: "name",
          type: "lastName"
        }
      ]
    },
    {
      name: "Blog",
      model: Blog
    }
  ]

  const [selectedModel, setSelectedModel] = useState(models[0])

  const fieldConfig = {
    model: {
      inputType: "dropdown",
      defaultValue: models[0],
      label: "Preview a Model",
      onChange: (input) => console.log(input),
      dropdownConfig: {
        options: models.map(model => {
          return {
            id: model,
            text: model.name
          }
        })
      }
    }
  }

  const form = useForm({
    fieldConfig,
    disableResetButton: true,
    disableSubmitButton: true
  })

  return {
    ...form,
    selectedModel,
    setSelectedModel
  };
}

const getFieldConfig = (model) => {

}