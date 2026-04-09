import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hi, I'm Prachi 👋</h1>
      <p>
        I am a Computer Science student with an interest in web development and
        technology. I enjoy learning new skills and building projects that enhance my practical knowledge.
      </p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default Home;