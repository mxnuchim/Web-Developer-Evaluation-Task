import React from 'react';
import Header from './components/Header';
import VideoPlayer from './components/Player';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <Header />
      <VideoPlayer />
    </div>
  );
};

export default App;
