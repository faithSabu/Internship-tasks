import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        setImages(res.data); 
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  return (
    
  <>

  <div>
    
    <h1 align='center'><i>Welcome to home page</i></h1><br/>
       <button style={{backgroundColor:"lightblue"}} className='logoutbtn' > <Navigate to='/'/>Logout</button>
    </div>
    <div class="containerImage">
      {images.length > 0 ? (
        <div class="row">
          {images.slice(0,51).map((image) => (
            <div class="col">
            <img
              key={image.id}
              src={image.url}
              alt={image.title}
              style={{ width: "400px", height: "auto", margin: "1px" }}
              />
              </div>
          ))}
        </div>
      ) : (
        <p>Loading images...</p>
      )}
      
    </div>
    </>
  );
};

export default Landing;
