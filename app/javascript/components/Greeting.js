import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { fetchRandomGreeting } from '../redux/features/greeting/greetingSlice.js';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector((store) => ({
    greeting: store.greeting.greeting,
    isLoading: store.greeting.isLoading,
    error: store.greeting.error,
  }));

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchRandomGreeting());
    }
  }, [isLoading, dispatch]);

  // console.log('in component: greeting', greeting);
  if (isLoading) {
    return <div>Fetching greeting...</div>;
  }
  if (error) {
    return <div>{`We encountered an error: ${JSON.stringify(error)}`}</div>;
  }

  if (!greeting) {
    <h2>There are no greetings today</h2>;
  } else {
    return (
      <div>
        <h2>Today's greeting</h2>
        <strong>
          <p>{greeting.greeting}</p>
        </strong>
      </div>
    );
  }
}

export default Greeting;


