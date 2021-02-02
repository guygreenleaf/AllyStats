    /*global chrome*/
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  let scriptPrinter = [];
  let [tagsFound, getTags] = useState([]);

   
    let dispScripts = () => {
      let poorAccess = document.getElementsByClassName("ally-accessibility-score-indicator ally-accessibility-score-indicator-low ally-instructor-feedback");
      let mediumAccess = document.getElementsByClassName("ally-accessibility-score-indicator ally-accessibility-score-indicator-medium ally-instructor-feedback");
      let highAccess = document.getElementsByClassName("ally-accessibility-score-indicator ally-accessibility-score-indicator-high ally-instructor-feedback");
      let perfectAccess = document.getElementsByClassName("ally-accessibility-score-indicator ally-accessibility-score-indicator-perfect ally-instructor-feedback");
      console.log(poorAccess.length)
      console.log(mediumAccess.length)
      console.log(highAccess.length)
      console.log(perfectAccess.length)
    }

    let grabScores = () => { 
    chrome.tabs.executeScript({code: `(${dispScripts})()`})
    }
  return (
    <div className="App">
    <button onClick={grabScores}>Parse</button>
    </div>
  );
}

export default App;
