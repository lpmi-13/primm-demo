import './App.css';

const code1 = `
def multiply(number):
    return number * 2`;
const code2 = `multiply(10)`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PRIMM Demo</h1>
        <div className="display">
          <code>
            {code1}
          </code>
           <br></br>
          <code>
            {code2}
          </code> 
        </div>
      </header>
    </div>
  );
}

export default App;
