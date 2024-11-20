import React from 'react';


const HomePage = () => {
  return (
    <div>
      <h1>Welcome to our application!</h1>
      <p>This is the home page.</p>
      <button onClick={() => window.location.href = '/product.js'}>Go to products page</button>
    </div>
  );
};

export default HomePage;