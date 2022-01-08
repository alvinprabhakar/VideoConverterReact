import axios from "axios";
import { Fragment, useState } from "react";



const FileUpload = () => {

   // const [folder,setFolder] = useState('Enter the foldername');
    const [foldername,setFoldername] = useState('');
    const [file,setFile] = useState('');
    const [filename,setFilename] = useState('');
    //const [uploadedFile, setUploadFile] = useState({});
    const [result,setresult] = useState();

    // const folderChange = (e) => {
    //     // setFolder(e.target.name);
    //     // console.log(e.target);
    //     setFoldername(e.target.value);
    //     console.log(foldername);
    // }

    const handlefolderChange = (e) => {
        setFoldername(e.target.value)
    }

    const fileChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files);
        setFilename(e.target.files[0].name);
        console.log(filename,file);
    }

    const handleSubmit = async e => {
        console.log("handle submit called");
        e.preventDefault();
        console.log(e);
        const caption= "HLS files will be available in below mentioned folder Shortly .. Please Check !!!"
        setresult(caption); 
        console.log(result);
        const formData = new FormData();
        formData.append('file',file);
        formData.append('folder',foldername);
        console.log(formData);
        try{
            await axios.post('https://alvinprabhakar-videoconverter.herokuapp.com/upload',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            //const { fileName , filePath } = res.data;
            //setUploadFile({fileName,filePath});
            
        }catch(err){
            if(err.response.status=== 500){
                console.log("There was probelm with server");
            }
            else{
                console.log(err.response.data.msg);
            }
        }
       
    }

//     useEffect( () => {
//         console.log("Use Effect Called");
//         const caption= "HLS files will be available in below mentioned folder Shortly .. Please Check !!!"
//             setresult(caption); 
// } , [result])

return (
     
    <Fragment>
    <form onSubmit={handleSubmit} className="upload">
    <div className="custom-file mb-4">
    <p>Please Enter the Full Output Path</p>
    <input type="text" value={foldername}  className="text-box" onChange={handlefolderChange} />
    <label className='custom-folder-label' htmlFor="customFolder">
        {foldername}
    </label><br /><br/>
    <p>Please Upload the .Mp4 File</p>
    <input type="file" className="custom-file-input" id="customFile" accept=".mp4" onChange={fileChange}/>
    <label className='custom-file-label' htmlFor="customFile">
        {filename}
    </label><br/>
    <button type="submit" value="Convert" className="btn btn-primary btn-block mt-4">Convert</button> 
    </div>
    </form>
    </Fragment>

)}

export default FileUpload;





//<input directory="" webkitdirectory="" type="file" className="custom-file-output" id="customFolder" onChange={folderChange} />