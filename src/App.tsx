import React from 'react';
import Preview from 'components/Preview';
import RecordedVideo from 'components/RecordedVideo';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <Preview />
      <RecordedVideo />
      <Footer></Footer>
    </div>
  );
}

export default App;
