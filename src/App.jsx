    /*global chrome*/
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  let scriptPrinter = [];
  let [tagsFound, getTags] = useState([]);

   
    let dispScripts = () => {
      console.log(document.getElementsByClassName("ally-accessibility-score-indicator ally-accessibility-score-indicator-medium ally-instructor-feedback"));
    }

    chrome.tabs.executeScript({code: `(${dispScripts})()`})

  return (
    <div className="App">
    <button onClick={dispScripts}>Parse</button>
    </div>
  );
}

export default App;
