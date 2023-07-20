//correct 

import React, { useState, useMemo, useCallback } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const squared = useMemo(() => {
    return count * count;
  }, [count]);

  const items = useCallback(() => {
    const items = [];

    for (let i = 0; i < 10000; i++) {
      items.push({
        value: i,
      });
    }

    return items;
  }, [count]);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  const childComponent = useMemo(() => {
    return <ChildComponent data={items()} />;
  }, [items]);

  return (
    <div>
      <div>Count: {count}</div>
      <div>Squared: {squared}</div>

      {childComponent}

      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

function ChildComponent({ data }) {
  const content = useMemo(() => {
    console.log("Child component rendered");
    return <div>{data.length} items</div>;
  }, [data]);

  return content;
}

function AnotherComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component updated");
  }, [count]);

  const squared = useMemo(() => {
    return count * count;
  }, [count]);

  return <div>Hello</div>;
}

export default MyComponent;
