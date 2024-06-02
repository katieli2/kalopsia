import React from 'react';
import { Link } from 'react-router-dom';


const IssueX: React.FC = () => {
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
            <style>
            {`
                body {
                    margin: 0;
                    font-family: 'Montserrat', sans-serif;
                }
                .pdf-wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh; /* Full viewport height */
                    gap: 20px; /* Adjust the gap between header and iframe */
                }
                .pdf-container {
                    width: 50%; /* Default width */
                    height: 150vh; 
                    border: none;
                }
                h1 {
                    font-family: 'Montserrat', sans-serif;
                    margin: 0; /* Remove default margin */
                    font-size: 24px;
                }
                .button {
                    background-color: black;
                    color: white;
                    border: none;
                    padding: 20px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-block;
                    border: 1px solid black;
                }
                .button:hover {
                    background-color: white;
                    color: black;
                    border: 1px solid black;
                }
                @media (max-width: 1200px) {
                    .pdf-container {
                        width: 90%; /* Increase width for smaller screens */
                        height: 100vh;
                    }
                }
                @media (max-width: 800px) {
                    .pdf-container {
                        width: 70%; /* Further increase width for even smaller screens */
                        height: 100vh;

                    }
                }
                @media (max-width: 600px) {
                    .pdf-container {
                        width: 100%; /* Full width for mobile devices */
                        height: 75vh; 
                    }
                }
            `}
            </style>
        </head>
        <body>
            <div className="pdf-wrapper">
                <h1>Issue X — December 2022</h1>
                <iframe
                    src="https://drive.google.com/file/d/1TQB5IhZ8lcOsNtQ11kz2T9owc14YGJt7/preview"
                    className="pdf-container"
                ></iframe>
                <a href="https://drive.google.com/file/d/1TQB5IhZ8lcOsNtQ11kz2T9owc14YGJt7/view?usp=sharing" className="button">Download PDF</a>
                <p>
      See a list of our other issues <Link to="/">here</Link>.
    </p>
            </div>
        </body>
        </html>
    );
};

export default IssueX;