import React, { createContext, useState } from 'react';

const WeekdayContext = createContext({});

const WeekdayProvider = ({ children }) => {
    const [weekday, setWeekday] = useState(() => {
      const weekday = localStorage.getItem('@PipeRest:weekday');
  
      return weekday ? { weekday } : {}
    });
  
    return (
      <WeekdayContext.Provider
        value={{ weekday, setWeekday }}
      >
        {children}
      </WeekdayContext.Provider>
    );
  };
  
  
  export { WeekdayProvider };