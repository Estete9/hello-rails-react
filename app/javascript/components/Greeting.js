import React, { useState, useEffect } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    async function getData()  {
    
      const res = await fetch('/api/v1/greetings/random_greeting.json');
      const data = await res.json();
      setGreeting(data.greeting)
    }
    getData()
  }, []);

  return (
    <div>
      <h2>Today's greeting</h2>
      <strong>
        <p>{greeting}</p>
      </strong>
    </div>
  );
}

export default Greeting;





