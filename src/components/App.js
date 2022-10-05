import React from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {

  
  return (
    <div id="main">
      <form action="action" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="Submit">
</form>
      
    </div>
  )
}


export default App;
