import React, { useState } from 'react';
import './App.css'; 

export default function MyApp() {
  const [noCount, setNoCount] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);

  const phrases = [
    "No",
    "sure?",
    "Reallyyy sure?",
    "como asi :(",
    "Surely not?",
    "ideay?",
    "pipipi",
    "think again",
    "Is that your final answer?",
  ];

  const yesButtonSize = noCount * 20 + 16; 

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  if (isAccepted) {
    return (
      <div className="container">
        <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGgzbXNyM3kzd2g5cHY3aWUzcGE0MXBpZTh6N2ZraXBqNG0zcnU5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L2aeA1xp3nrQho0H0W/giphy.gif' 
          className="img" 
          alt="gif"/>
        <p className="title-txt">Knew you'd say yes!</p>
        <p className='letter'>
          I had always seen these silly web pages, and tbh, I never thought I’d have the chance to make one of them.
          Now I can, and I’m glad it’s for someone special like you. This is just a silly little gift I wanted to make for you, but I would also like to let you know how special you are and how much you mean to me.
          <br/><br/>
          Anddd, it turns out that today is also our first monthiversary (soy una despistada, no había visto la fecha, I am sorry). So I would like to take the time to thank you for every adventure and memory we have shared so far, and I look forward to many more to come.
          <br/><br/>
          Thank you for always being there for me, for your support, for listening to me, even when I talk about the most random, silly things. Thank you for being you, and for letting me be me. Thank you for choosing me, and thank you for letting me get to know you better each day. Next month’s Valentine’s Day is coming up, and a little bird told me it’s also a very special person’s birthday. Se vienen cositas.
          <br/><br/>
          Anyway, I hope you like this little gift. I’m looking forward to living more adventures with you and creating more memories together. I love you so much.
          <br/><br/>
          With love,
          <br/><br/>
          – Ximena Ruiz.
        </p>
      </div>
    );
  }

  return (
    <div className="container"> 
      <img 
        src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHU4dmhidGZsdTg3ZmcwbGd1MWdqMjVzZGVjdXBra2Zrbm5pajZ2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LamI12wy814kqkg3a6/giphy.gif' 
        alt="Asking" 
        className="img" 
        />
      <p className='title-txt'>Will you be my valentine?</p>

      <div className='buttons'>
        <button 
          className='yes' 
          style={{ 
            fontSize: yesButtonSize,
          }}
          onClick={() => setIsAccepted(true)}
        >
          Yes!
        </button>
        <button 
          className='no' 
          onClick={handleNoClick}
        >
          {phrases[Math.min(noCount, phrases.length - 1)]}
        </button>
      </div>
    </div>
  );
}
