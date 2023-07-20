//incorrect

import React, { useState, useMemo, useCallback } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  // Mistake 1
  const squared = useMemo(() => {
    return count * count;
  });

  // Mistake 2
  const items = [];

  useMemo(() => {
    for (let i = 0; i < 10000; i++) {
      items.push({
        value: i,
      });
    }
  }, [squared]); // Mistake 3

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  // Mistake 4
  return (
    <div>
      <div>Count: {count}</div>
      <div>Squared: {squared}</div>

      <ChildComponent data={items} />

      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

function ChildComponent({ data }) {
  // Mistake 5
  useMemo(() => {
    console.log("Child component rendered");
    return <div>{data.length} items</div>;
  }, [data]);
}

function AnotherComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Mistake 6
    console.log("Component updated");
  }, []);

  const squared = useMemo(() => {
    return count * count;
  }, [count]);

  // Mistake 7
  const items = useMemo(() => {
    const items = [];

    for (let i = 0; i < 10000; i++) {
      items.push({
        value: i,
      });
    }

    return items;
  }, [count]);

   // Mistake 8
  const squared2 = useMemo(() => {
    return count * count;
  }, [count]);

  return <div>Hello</div>;
}

export default MyComponent;
