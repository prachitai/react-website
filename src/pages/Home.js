import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Hi, I'm Prachi 👋</h1>

        <p>
          I am a Computer Science student interested in web
          development and technology.
        </p>

        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      </div>
    </div>
  );
}

export default Home;

