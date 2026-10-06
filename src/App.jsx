import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

// App.jsx contains the clock component.
// main.jsx renders this component; the CSS files control its appearance.
function App() {
  // Store the current date and time in React state.
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the clock every 1,000 milliseconds (one second).
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Stop the timer when this component is removed.
    return () => clearInterval(timer);
  }, []);

  // Display the formatted date above the time using JSX.
  return (
    <div className="clock">
      {/* Format the date with the month name, day, and year. */}
      <p className="date">
        {format(currentTime, 'MMMM d, yyyy')}
      </p>

      {/* Display hours, minutes, seconds, and AM or PM. */}
      <p className="time">
        {format(currentTime, 'h:mm:ss a')}
      </p>
    </div>
  );
}

export default App;