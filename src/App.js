import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Detail from "./Detail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  );
};

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;

//function App() {

// const [deneme, setDeneme] = useState([]);

// useEffect(() => {
//   fetch('http://localhost:8080/deneme/list')
//   .then(response => response.json())
//   .then(response => setDeneme(response))
/* }, [])

  console.log('Deneme Bilgileri: ', deneme);
  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          My Project
        </p>
      </header>
    </div>
  );
}


export default App;*/
