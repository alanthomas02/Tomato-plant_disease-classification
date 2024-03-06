import React, { useState } from 'react';
import './Prediction.css'; // Import CSS file for component styling

function Prediction() {
    const [selectedFile, setSelectedFile] = useState(null);

    // Function to handle file selection
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Function to handle file upload
    const handleUpload = () => {
        // Implement logic to handle the uploaded file
        console.log(selectedFile);
    };

    return (
        <div className="prediction-container">
            <input type="file" onChange={handleFileChange} className='file-input-label' />
            <button className="upload-button" onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default Prediction;
