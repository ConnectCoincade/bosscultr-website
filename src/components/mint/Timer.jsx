// import React, { useState, useEffect } from 'react';

// const CountdownTimer = () => {
//   const targetDate = new Date('Jan 5, 2024 15:37:25').getTime();


//   const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

//   function calculateTimeRemaining() {
//     const now = new Date().getTime();
//     const distance = targetDate - now;

//     if (distance <= 0) {
//       clearInterval(intervalId);
//       return {
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//       };
//     }

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   }

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimeRemaining(calculateTimeRemaining());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []); // The empty dependency array ensures that the effect runs only once on mount

//   return (
//     <div>
//       <p id="demo">
//         {timeRemaining.days}: {timeRemaining.hours}: {timeRemaining.minutes}: {timeRemaining.seconds}s
//       </p>
//       {timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0 && (
//         <p>EXPIRED</p>
//       )}
//     </div>
//   );
// };

// export default CountdownTimer;


// import React, { useState, useEffect } from 'react';

// const CountdownTimer = () => {
//   const initialSeconds = 6;
//   const [timeRemaining, setTimeRemaining] = useState(initialSeconds);
//   const [quantity, setQuantity] = useState(1);

//   const decreaseQuantity = () => {
//     setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
//   };

//   const increaseQuantity = () => {
//     setQuantity((prevQuantity) => (prevQuantity < 10 ? prevQuantity + 1 : 10));
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     return () => clearInterval(intervalId); 
//   }, []);

//   const isTimerCompleted = timeRemaining === 0;

//   return <div>

//     <p id="demo" className={isTimerCompleted ? 'disabled-timer' : ''}>{timeRemaining}s</p>
  
  

//  {timeRemaining === 0 && (
//         <button className='mintbtn'>MINT NOW!</button>
//       )}
//       {timeRemaining === 0 && (
//         <div className='counterbtn'>
//           <button onClick={decreaseQuantity}>-</button>
//           <span className='counter'>{quantity}</span>
//           <button onClick={increaseQuantity}>+</button>
//         </div>
//       )}
//       {timeRemaining !== 0 && (
//         <button className='btn1'>COMING SOON!</button>
//       )}
//     </div>
 

// };

// export default CountdownTimer;

// import React, { useState, useEffect } from 'react';

// const CountdownTimer = () => {
//   const targetDate = new Date('Dec 19, 2023 15:37:25').getTime();
//   const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());





//   function calculateTimeRemaining() {
//     const now = new Date().getTime();
//     const distance = targetDate - now;

//     if (distance <= 0) {
//       clearInterval(intervalId);
//       return {
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//       };
//     }

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   }

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimeRemaining(calculateTimeRemaining());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []); // The empty dependency array ensures that the effect runs only once on mount

//   return (
//     <div>
//       <p id="demo">
//         {timeRemaining.days}: {timeRemaining.hours}: {timeRemaining.minutes}: {timeRemaining.seconds}s
//       </p>
//       {timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0 && (
//         <p>EXPIRED</p>
//       )}
//     </div>
//   );
// };

// export default CountdownTimer;


import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set the initial time to three days in seconds
  const initialSeconds = 3 * 24 * 60 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialSeconds);
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity < 10 ? prevQuantity + 1 : 10));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const isTimerCompleted = timeRemaining === 0;

  return (
    <div>
      <p id="demo" className={isTimerCompleted ? 'disabled-timer' : ''}>
        {isTimerCompleted
          ? 'EXPIRED'
          : `${Math.floor(timeRemaining / (24 * 60 * 60))}d: ${Math.floor((timeRemaining % (24 * 60 * 60)) / 3600)}h: ${Math.floor((timeRemaining % 3600) / 60)}m: ${timeRemaining % 60}s`}
      </p>

      {isTimerCompleted && (
        <button className='mintbtn'>MINT NOW!</button>
      )}

      {isTimerCompleted && (
        <div className='counterbtn'>
          <button onClick={decreaseQuantity}>-</button>
          <span className='counter'>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      )}

      {!isTimerCompleted && (
        <button className='btn1'>COMING SOON!</button>
      )}
    </div>
  );
};

export default CountdownTimer;









