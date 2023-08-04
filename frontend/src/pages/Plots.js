import React, { useState } from 'react';
import '../styles.css'; 

function Plot() {
    const [numClusters, setNumClusters] = useState('');

    const runScript = () => {
        fetch("/plotting", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ num_clusters: numClusters }),
        })
            .then((response) => response.json())
            .then((data) => {
          
                const imagesDiv = document.getElementById("images");
                imagesDiv.innerHTML = "";
                data.images.forEach((image) => {
                    var img = document.createElement("img");
                    img.src = "data:image/png;base64," + image;
                    imagesDiv.appendChild(img);
                });
            });
    };

    return (
        <div>
            <header>
                <h1 style={{ backgroundImage: "conic-gradient(#cb00a2, #ee4b2b, #ba3f47)" }}>Plot Data</h1>
            </header>

            <div className="buttons-container">
                <input
                    type="number"
                    id="num_clusters"
                    placeholder="# Clusters"
                    value={numClusters}
                    onChange={(e) => setNumClusters(e.target.value)}
                />
                <button className="button-36" id="run" onClick={runScript}>
                    Run the script
                </button>
            </div>
            <div className="center" id="images"></div>
        </div>
    );
}

export default Plot;
