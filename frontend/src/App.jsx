import React from 'react';
import PhotoList from './components/PhotoList'; // Import the PhotoList component

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation

// const photos = new Array(3).fill({}); // creates an array with 3 empty objects

const App = () => (
  <div className="App">
    <PhotoList /> {/* Render the PhotoList component */}
  </div>
);

export default App;
