import { useState } from "react";

const Textarea = () => {
  const [text, setText] = useState("");

  return (
    <textarea
      value={text}
      /* This is a controlled component. The value of the textarea is 
         controlled by the state variable 'text'. This makes it easier 
         to work with the text. */
      onChange={(e) => {
        const newText = e.target.value;
        setText(newText);
      }}
      className="textarea"
      placeholder="Enter your text..."
      spellCheck="false"
    />
  );
};

export default Textarea;
