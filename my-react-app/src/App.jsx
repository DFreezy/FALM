import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl text-center my-4">Vite + React</h1>
      <div className="card bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Welcome to Vite + React</h2>
        <p className="text-gray-700 mb-4">
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Count is {count}
        </button>
      </div>
      <p className="text-center text-gray-500 mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
