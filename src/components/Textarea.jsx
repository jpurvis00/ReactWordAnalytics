import { useState } from "react";
import Warning from "./Warning";

const Textarea = ({ text, setText }) => {
  const [warningText, setWarningText] = useState("");

  const handleTextChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ allowed!");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        /* This is a controlled component. The value of the textarea is 
         controlled by the state variable 'text'. This makes it easier 
         to work with the text. */
        onChange={handleTextChange}
        placeholder="Enter your text..."
        spellCheck="false"
      />
      {warningText ? <Warning warningText={warningText} /> : null}
    </div>
  );
};

export default Textarea;
