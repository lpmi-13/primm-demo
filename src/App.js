import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { SupplyTypeInput } from './SupplyTypeInput';
import { SelectTypeInput } from './SelectTypeInput';
import { items, SUPPLY_ITEM } from './items';
import './App.css';

const PAUSE_LENGTH = 2000;

const App = () => {

  const [listIndex, setListIndex] = useState(0);
  const [functionFromList, setFunctionFromList] = useState(items[listIndex])
  const [itemType, setItemType] = useState({})

  const [prediction, setPrediction] = useState('');
  const [resultSuccess, setResultSuccess] = useState(false);
  const [result, setResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setFunctionFromList(items[listIndex]);
    setItemType(items[listIndex].type)
  }, [listIndex])

  const showResult = (answer, prediction) => {
    if (answer === prediction) {
      setResult(true);
      setResultSuccess(true);
      setTimeout(() => {
        setResultSuccess(false);
        setResult(false);
      }, PAUSE_LENGTH);
    } else {
      setResult(true);
      setTimeout(() => setResult(false), 2000)
    }
  }

  const handleUpdate = (event) => setPrediction(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    showResult(functionFromList.answer, prediction);
  }

  const itemsLength = items.length;

  // move back one, unless we're at the beginning, then go to the last item
  const indexToMoveBackTo = () => listIndex <= 0 ? itemsLength - 1 : listIndex - 1;
  // move forward one, unless we're at the end, then go to the first item
  const indexToMoveForwardTo = () => listIndex >= itemsLength - 1 ? 0 : listIndex + 1;

  // move back and forward in the code snippets
  const handleArrowClick = (indexFunction) => {
    setIsLoading(true);
    setPrediction('');
    setTimeout(() => {
      setListIndex(indexFunction());
      setIsLoading(false);
    }, PAUSE_LENGTH);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>PRIMM Demo</h1>
      </header>
      <div className="display">
        <div role="button" className="swipe-arrows">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="previous function" className="left-arrow" onClick={() => handleArrowClick(indexToMoveBackTo)}>
            previous
          </motion.button>
          <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}aria-label="next function" className="right-arrow" onClick={() => handleArrowClick(indexToMoveForwardTo)}>
            next
          </motion.button>
        </div>
        <pre className="code">
          {isLoading ? "we're loading..." : functionFromList.code}
        </pre>
        <div className="predict">
          <form onSubmit={onSubmit}>
            <label>
              What will this function return?
              {
                itemType === SUPPLY_ITEM
                ? <SupplyTypeInput prediction={prediction} handleUpdate={handleUpdate} />
                : <SelectTypeInput prediction={prediction} choices={functionFromList.selections} handleUpdate={handleUpdate} />
              }
            </label>
            <input className="input" type="submit"></input>
          </form>
        </div>
        <div className={classNames("success", result ? "" : "hidden")}>
          <h3>{resultSuccess ? "You got it!" : "Try again"}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
