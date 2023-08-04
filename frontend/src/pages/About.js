import React from 'react';
import '../styles.css'; 

const About = () => {
    return (
        <div className="About">
            <header>
                <h1 style = {{backgroundImage: "conic-gradient(#f1eef0, #928c8c, #f0ecec)"}}>About</h1>
            </header>
            <div style={{ padding: '2rem', lineHeight: 1.6, fontSize: '17px' }}>
                <p>Welcome to our Trash Annotation Application, an innovative web tool designed to streamline coastal cleanup.</p>

                <p>Before you proceed with the application, it's important to clarify a few key parameters:</p>

                <ol>
                    <li><strong>Drone Specifications:</strong> The Trash Annotation Application is specifically designed to analyze
                        imagery from the Phantom Pro 4 aerial drone. The app’s algorithm capitalizes on the unique focal length and
                        sensor width parameters of this particular drone. If you utilize a different drone model, please ensure you
                        adjust these parameters accordingly by sourcing the required information online and inputting it in the space
                        provided below.</li>

                    <li><strong>Image Metadata:</strong> For the app to work, the images captured by the drone should contain
                        metadata that includes information on longitude, latitude, and altitude. \.</li>
                </ol>

                <h2>Application Tutorial</h2>

                <p>To ensure smooth navigation through the app, it's essential to note that upon clicking to a new tab, the page
                    content resets. Rest assured, all changes made are automatically saved.</p>

                <ol>
                    <li>Begin by uploading images to the application in the Home tab. After clicking 'Submit', allow the system
                        to load. Once
                        completed, you're able to review and edit the results as necessary. Just remember to save the results by
                        clicking "Revise"</li>

                    <li>Navigate to the 'CSV' tab to review your results. The 'Load Results' button will display all current
                        detections. If the results look good, use the 'Download CSV' button to secure a copy for future use.
                        The 'Clear Results' button allows you to remove all current results, while 'Upload CSV' enables you to
                        incorporate results from a previous session.</li>

                    <li>On the Overlap page, duplicated trash detections, resulting from the same piece of trash appearing in multiple
                        images, can be
                        eliminated. Simply re-upload the images from Step 1.</li>

                    <li>Once you've completed the above, proceed to the 'Map' tab. Here, you'll find a geographical representation of
                        the detected trash. Note, if the system is required to process a large quantity of trash, it may take some time
                        to load. In this instance, opt for the 'Faster Reload' option.</li>

                    <li>The 'Plot' tab offers an opportunity to generate a bar graph illustrating the distribution of trash types in
                        differemt areas. Input the number of trash clusters or areas you've identified and allow the script to run.
                        If clusters are located in close proximity to each other, consider them as a single cluster.</li>
                </ol>

                <p>We thank you for utilizing our Trash Annotation Application! Below is a video tutorial that might help!</p>
            </div>
            <div className="video-container">
                <iframe
                    width="80%"
                    height="650"
                    src="https://www.youtube.com/embed/D_hD4nMwO6U"
                    title="Tutorial video"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default About;