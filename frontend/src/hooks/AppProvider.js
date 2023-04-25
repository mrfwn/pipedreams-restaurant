import React, { createContext,useContext, useState } from 'react';

const WeekdayContext = createContext({});

const WEEKDAYS_LIMIT = {
    'Monday': 1,
    'Friday': 5
}

const WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
const DEFAULT_WEEKDAY = { 
    indexWeekDay: WEEKDAYS_LIMIT.Monday, 
    nameWeekday: WEEK[WEEKDAYS_LIMIT.Monday],
    isNextLimit: false,
    isPrevLimit: true
}

const getCurrentValidWeekday = () => {
    const currentWeekDay = new Date().getDay();
    if(currentWeekDay < WEEKDAYS_LIMIT.Monday || currentWeekDay > WEEKDAYS_LIMIT.Friday){
        return DEFAULT_WEEKDAY;
    }

    return getWeekday(currentWeekDay);
};

const getWeekday = (indexWeekday) => {
    return { 
        indexWeekDay: indexWeekday, 
        nameWeekday: WEEK[indexWeekday],
        isNextLimit: WEEKDAYS_LIMIT.Friday === indexWeekday,
        isPrevLimit: WEEKDAYS_LIMIT.Monday === indexWeekday
    }
}

const WeekdayProvider = ({ children }) => {
    const [weekday, setWeekday] = useState(() => {
      let weekday = JSON.parse(localStorage.getItem('@PipeRest:weekday'));
  
      if(!weekday){
          weekday = getCurrentValidWeekday();
          localStorage.setItem('@PipeRest:weekday', JSON.stringify(weekday));
      }
      return weekday;
    });

    const nextDay = () => {
        if(weekday.isNextLimit) return;
        const newWeekDay = getWeekday(weekday.indexWeekDay+1);
        
        localStorage.setItem('@PipeRest:weekday', JSON.stringify(newWeekDay));
        setWeekday(newWeekDay);
    };
    const prevDay = () => {
        if(weekday.isPrevLimit) return;
        const newWeekDay = getWeekday(weekday.indexWeekDay-1);
        localStorage.setItem('@PipeRest:weekday', JSON.stringify(newWeekDay));
        setWeekday(newWeekDay);
    };
    return (
      <WeekdayContext.Provider
        value={{ weekday, prevDay, nextDay }}
      >
        {children}
      </WeekdayContext.Provider>
    );
  };
  
  const useWeekday = () => {
    const context = useContext(WeekdayContext);
  
    if (!context) {
      throw new Error('useWeekday must be used within an AuthProvider');
    }
  
    return context;
  }
  
  export { WeekdayProvider, useWeekday };