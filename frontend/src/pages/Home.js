import React, { useState, useRef } from 'react';
import '../styles.css';

const Home = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');


  const loaderRef = useRef(null);

  const handleImageSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    let totalFiles = formData.getAll('img_directory').length;
    if (totalFiles === 0) {
      return;
    }

    setLoading(true);

   
    setLoadingStatus(`Processing ${totalFiles} Image(s)`);

    fetch('/process_images', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setResults(data.predicted_classes.map((row, i) => ({ row, img: "data:image/jpg;base64," + data.crops[i] })));
        setLoadingStatus('');
      })
      .catch((error) => {
        setLoading(false);
        setLoadingStatus('');
      });
  };

  const handleClassUpdate = (i, newClass) => {
    fetch(`/update_class?index=${i}&new_class=${newClass}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
 
        setResults((prevResults) => {
          const newResults = [...prevResults];
          newResults[i].row[2] = newClass;
          return newResults;
        });
      });
  };

  return (
    <div>
      <header>
        <h1 style={{ backgroundImage: "conic-gradient(#c7ed3d 0%, #c2ccbb 33%, #ee4b2b 33%, #ee4b2b 66%, #00c2cb 66%, #00c2cb 99%)" }}>
          Trash Annotation App
        </h1>
      </header>

      <form onSubmit={handleImageSubmit}>
        <input className="customfile" type="file" id="image-selector" name="img_directory" multiple />
        <button className="button-36" id="submit-button" type="submit">Submit</button>
      </form>

      <div style={{ margin: '10px 0' }}></div>

      {loading && <div ref={loaderRef} id="loader" className="loader"></div>}
      <div className="loading-status">{loadingStatus}</div>

      <div id="results">
        {results.map(({ row, img }, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            justifyItems: "center",
            marginTop: "10px"
          }}>
            <p>{row.join(', ')}</p>
            <img src={img} width={100} alt="" />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <select id="drop-down" className="button-36" defaultValue={row[2]} onChange={(event) => handleClassUpdate(i, event.target.value)}>
                {['plastic', 'cage', 'wood', 'fishing gear', 'nature', 'metal', 'wheel', 'repeated trash'].map((cls) => (
                  <option key={cls} value={cls} className="drop-down-content">{cls}</option>
                ))}
              </select>
              <button id="finalize" className="button-36" onClick={() => handleClassUpdate(i, document.getElementById('drop-down').value)}>Revise</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
