import { useState, useEffect } from 'react';

export default function App(): JSX.Element {
  const [data, setData] = useState(null);

  useEffect(() => {
    void (async function () {
      const res = await fetch('/api/v1/hello');
      const data = await res.json();
      setData(data.message);
    })();
  }, []);

  console.log('component data: ', data);

  return (
    <>
      <div>with data: Hello, {data}</div>
    </>
  );
}
