import React from 'react';
import './Pages.css';

const Explore = () => {
  // Display an alert if the 'Book now' button is clicked
  const sayHello = () => {
      alert("Hello");
  }
  
  return (
    // Dummy Explore page text
    <div className="pageDiv">
      <h1 className="pageTitle">It's never too late to try something new!</h1>
      <div className="pageContent">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
          book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
          desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button type="button" onClick={sayHello}>Book now</button>
      </div>
    </div>
  );
}
export default Explore;