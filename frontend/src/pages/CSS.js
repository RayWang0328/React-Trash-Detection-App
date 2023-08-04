import React, { useState } from 'react';
import '../styles.css'; 

function CSS() {
  const [csvFile, setCsvFile] = useState(null);
  const [results, setResults] = useState([]);

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const loadResults = async () => {
    const response = await fetch('/get_results');
    const data = await response.text();
    const rows = data.split('\n');
    const resultRows = rows.map((row) => {
      const cols = row.split(',');
      return cols;
    });

    setResults(resultRows);
  };

  const downloadCSV = () => {
    fetch('/download_results')
      .then(resp => resp.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'detections.csv';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('Error downloading the file.'));
  };

  const uploadCSV = async () => {
    const formData = new FormData();
    formData.append('csv', csvFile);

    try {
      await fetch('/upload_csv', {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      // Handle error
    }
  };

  const clearResults = async () => {
    try {
      await fetch('/clear_results');
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="CSS">

      <header>
        <h1>Display CSV</h1>
      </header>

      <div className="buttons-container">
        <button id = "load" className="button-36" onClick={loadResults}>Load Results</button>
        <button id = "download" className="button-36" onClick={downloadCSV}>Download CSV</button>
        <button id = "clear-button" className="button-36" onClick={clearResults}>Clear Results</button>
      </div>

      <input className="customfile" type="file" id="csv-upload" onChange={handleFileChange} />
      <button id = "upload-csv" className="button-36" onClick={uploadCSV}>Upload CSV</button>

      <table id="results">
        {results.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <td key={j}>{col}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default CSS;
