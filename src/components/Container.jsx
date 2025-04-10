import { useState } from "react";
import Textarea from "./Textarea";
import Stats from "./Stats";
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "../lib/constants";

const Container = () => {
  const [text, setText] = useState("");

  //create an object with the stats so that we can just pass it to the Stats component
  //instead of passing each stat separately
  const stats = {
    numberOfCharacters: text.length,
    instagramCharsLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharsLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
