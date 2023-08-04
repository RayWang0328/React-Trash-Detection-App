import React, { useRef } from 'react';
import '../styles.css';  

function RemoveDuplicateTrash() {
    const fileInputRef = useRef(null);
    const [loading, setLoading] = React.useState(false);
    const [resultData, setResultData] = React.useState(null);

    const handleButtonClick = () => {
        const files = fileInputRef.current.files;
        setLoading(true);

   
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("img_directory", files[i]);
        }

        fetch("/remove_overlap", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                setLoading(false);
                setResultData(data); 
            });
    };

    return (
        <div className="App">

            <header>
                <h1 style={{ backgroundImage: "conic-gradient(#f69115, #e7a829, #ffb508)" }}>Remove Duplicate Trash</h1>
            </header>

            <input className="customfile" type="file" id="fileInput" multiple ref={fileInputRef} />
            <button className="button-36" id="submitBtn" onClick={handleButtonClick}>Submit Images</button>
            {loading && <div className="loader" id="loader"></div>}
            <div id="results" style={{textAlign: "center"}}>
          
                {resultData && <div><p>{resultData}</p></div>}
            </div>
        </div>
    );
}
export default RemoveDuplicateTrash;
