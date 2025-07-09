import { useState } from "react";

function App() {
  const [goal, setGoal] = useState("");
  const [idea, setIdea] = useState("");

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h1>ほめキャス 🎥</h1>

      <div>
        <h2>0. 目標設定</h2>
        <input
          type="text"
          placeholder="どんな目的？"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        {goal && <p>🎉 すばらしい出発だね！</p>}
      </div>

      <div>
        <h2>1. アイデア出し</h2>
        <input
          type="text"
          placeholder="動画のアイデアは？"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        {idea && <p>✨ ワクワクするアイデアだね！</p>}
      </div>
    </div>
  );
}

export default App;
