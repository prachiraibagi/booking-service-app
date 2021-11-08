import React from "react";
import './Pages.css';

const Home = () => {
    // Display alert if the 'Get started' button is clicked.
    const sayHello = () => {
        alert("Hello");
    }

    return (
        // Dummy content for the home page
        <div className="pageDiv">
            <h1 className="pageTitle">Discover the dates to fly</h1>
            <div className="pageContent">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button onClick={sayHello}>Get started</button>
            </div>
        </div>
    );
}

export default Home;