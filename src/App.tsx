import { ChangeEvent, useState } from "react";
import { BigText } from "./BigText";
import { InputBox } from "./InputBox";

const symbols = `!"§$%&/()=?^°#'+*-_.:,;<>{}[]|\\@€`;

const getRandomSymbol = (oldSymbol: string) => {
  // get a random symbol that is not the same as the old one
  for (let i = 0; i < 50; i++) {
    const index = Math.floor(Math.random() * symbols.length);
    if (symbols[index] !== oldSymbol) {
      return symbols[index];
    }
  }
  // in the unlikely case that we have randomly picked the same symbol 50 times
  return "!";
};

function App() {
  // pick a random symbol
  const [symbol, setSymbol] = useState(getRandomSymbol(""));
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [streak, setStreak] = useState("");

  const textChanged = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value;
    if (text.length > 1) {
      // remove old symbol
      text = text[text.length - 1];
    }
    if (text === symbol) {
      setError(false);
      setSymbol(getRandomSymbol(symbol));
      setStreak(`${streak}${symbol}`);
    } else {
      setError(true);
      setStreak("");
    }

    setText(text);
  };

  const streakSeperated = streak.split("").join(" ");

  return (
    <div className="bg-gray-600 gap-4 flex flex-col items-center justify-center h-screen ">
      <BigText>{symbol}</BigText>
      <InputBox error={error} text={text} onChange={textChanged} />
      <BigText>{`Streak: ${streak.length}`}</BigText>
      <BigText>{`${streakSeperated}`}</BigText>
    </div>
  );
}

export default App;
