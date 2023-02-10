import React from "react";
import axios from "axios";
const App = () => {
  const handleSend = async () => {
    try {
      await axios.post("http://localhost:4000/send_mail");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSend}>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;
