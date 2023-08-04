import React, { useEffect, useRef, useState } from 'react';

const MapDisplay = () => {
  const map = useRef(null);
  const loader = useRef(null);
  const [htmlContent, setHtmlContent] = useState("");

  const fetchHtmlContent = async () => {
    const response = await fetch("/get_cur");
    const htmlString = await response.text();
    setHtmlContent(htmlString);
  };

  useEffect(() => {
    fetchHtmlContent();
  }, []);

  const handleReload = async (fast = false) => {
    loader.current.style.display = 'block';
    const timestamp = new Date().getTime();
    const mapURL = fast ? `/fast_show_map?t=${timestamp}` : `/show_map?t=${timestamp}`;
  
    const response = await fetch(mapURL);
    const htmlString = await response.text();
    setHtmlContent(htmlString);
  };

  const handleDownload = async () => {
    const response = await fetch("/download_map");
    const htmlString = await response.text();
   
    const blob = new Blob([htmlString], { type: 'text/html' });
    
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'map.html';
    
 
    link.style.display = 'none';
    

    document.body.appendChild(link);
 
    link.click();

    document.body.removeChild(link);
  };
  return (
    <div>
  
      <header>
      <h1 style={{ backgroundImage: "conic-gradient(#b0cb00, #ee4b2b, #b6ba3f)" }}> Display Map</h1>
      </header>

      <div className="buttons-container">
        <button className="button-36" onClick={() => handleReload(false)}>Reload Map</button>
        <button className="button-36" onClick={() => handleReload(true)}>Faster Reload</button>
        <button className="button-36" onClick={handleDownload}>Download Map</button>
      </div>

      <div className="loader" ref={loader} style={{ display: 'none' }}></div>
      <iframe id="map" ref={map} onLoad={() => { loader.current.style.display = 'none'; }} srcDoc={htmlContent} title="Map Frame"></iframe>
    </div>
  );
};

export default MapDisplay;
