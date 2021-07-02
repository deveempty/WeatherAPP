import React from "react";

const API = {
  key: "14228713c531f7a309d4c8492feb2863",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  return (
    <div className="app__warm">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
