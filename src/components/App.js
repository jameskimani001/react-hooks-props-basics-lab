import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

const user = {
  city: "newyork",
  name: "Liza",
  github: "https://github.com/Liza",
  linkedin: "https://linkedin.com/in/Liza"
};

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
