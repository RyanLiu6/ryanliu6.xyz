import { useState } from "react";

// The base code is directly from `https://gist.github.com/tnarla/0c09a11fea366145ba684fe6ebf578c5`.
// Slight modifications were made to loop the phrases and some tailwind styling
const ValentinesPage = () => {
  const [noCount, setNoCount] = useState<number>(0);
  const [yesPressed, setYesPressed] = useState<boolean>(false);
  const [loop, setLoop] = useState<number>(0);

  const phrases: string[] = [
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
  ];

  let yesButtonSize: number = 0;

  if (loop > 0) {
    yesButtonSize = (noCount + loop * phrases.length) * 20 + 16;
  } else {
    yesButtonSize = noCount * 20 + 16;
  }

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    if (noCount >= phrases.length) {
      setLoop(loop + 1);
      setNoCount(0);
    }

    return phrases[noCount];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : (
        <>
        <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
        <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
        <div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
            style={{ fontSize: yesButtonSize }}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            {noCount === 0 ? "No" : getNoButtonText()}
          </button>
        </div>
      </>
      )}
    </div>
  );
}

export default ValentinesPage;
