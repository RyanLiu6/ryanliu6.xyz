import { useState, useMemo } from "react";

const PHRASES = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
] as const;

const GIFS = {
  asking: "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
  accepted: "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif",
} as const;

const ValentinesPage = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const noButtonText = useMemo(() => PHRASES[noCount % PHRASES.length], [noCount]);

  const yesButtonSize = useMemo(() => noCount * 20 + 16, [noCount]);

  const handleNoClick = () => setNoCount((prev) => prev + 1);

  const handleYesClick = () => setYesPressed(true);

  if (yesPressed) {
    return (
      <div className="flex flex-col items-center justify-center h-screen -mt-16">
        <img src={GIFS.accepted} alt="Celebration" />
        <div className="text-4xl font-bold my-4">Ok yay!!!</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      <img className="h-[200px]" src={GIFS.asking} alt="Bear with roses" />
      <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
      <div className="flex gap-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all"
          style={{ fontSize: yesButtonSize }}
          onClick={handleYesClick}
        >
          Yes
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNoClick}
        >
          {noButtonText}
        </button>
      </div>
    </div>
  );
};

export default ValentinesPage;
