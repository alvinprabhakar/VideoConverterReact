import "./App.css";

import FileUpload from "./components/fileUpload";


function App(){
  return (
    <>
    <h1>Video Converting Format</h1>

    <p className="info">Please check the output in below mentioned folder once you clicked Convert</p>
    <div className="text"> 
    <p>Please upload the .Mp4 file to convert HLS Video </p>  
</div>
    <FileUpload />
    </>
  )
}


export default App;