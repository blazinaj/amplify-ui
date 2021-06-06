import React, {useEffect, useState} from "react";

/**
 * WIP do not use yet
 * Allows a form field to be an Image.
 * @param onChange
 * @param value
 * @constructor
 */
const ImagePicker = ({onChange, value}) => {
  // const [uploaderRef, setUploaderRef] = useState('');
  // const [image, setImage] = useState(value);
  //
  // useEffect(() => {
  //   onChange(image)
  // }, [image])
  //
  // const onSelect = (e) => {
  //   let reader = new FileReader();
  //   let file = e.filesData[0].rawFile;
  //
  //   reader.onloadend = () => {
  //     setImage(reader.result);
  //   }
  //
  //   reader.readAsDataURL(file)
  // }
  return (
    <div>
      Image Picker is not yet implemented 😭
      {/*<UploaderComponent*/}
      {/*  id='previewfileupload'*/}
      {/*  type='file'*/}
      {/*  ref={upload => setUploaderRef(upload)}*/}
      {/*  // asyncSettings={this.asyncSettings}*/}
      {/*  // success={ this.onUploadSuccess.bind(this) }*/}
      {/*  selected={onSelect}*/}
      {/*  // removing= { this.onRemoveFile.bind(this)}*/}
      {/*  // progress= {this.onFileUpload.bind(this)}*/}
      {/*  // failure= {this.onUploadFailed.bind(this)}*/}
      {/*  // allowedExtensions={this.allowedExtensions}*/}
      {/*/>*/}
      {/*<Lightbox image={image} title={"Image Preview"}/>*/}
    </div>
  )
}

export default ImagePicker;