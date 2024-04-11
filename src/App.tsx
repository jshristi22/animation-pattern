import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [clickContainer, setClickContainer] = useState<number[]>([]);
  const [reversed, setReversed] = useState(false);

  useEffect(() => {
    if (clickContainer.length === 3) setReversed(true);
  }, [clickContainer]);

  console.log(reversed);

  useEffect(() => {
    let lengthOfClickedElements = clickContainer.length;
    if (reversed) {
      console.log("here", reversed);
      while (lengthOfClickedElements) {
        console.log("length", lengthOfClickedElements);
        const localClickedContainer = [...clickContainer];
        setTimeout(() => {
          localClickedContainer.pop();
          setClickContainer([...localClickedContainer]);
        }, 1000);
        lengthOfClickedElements--;
      }
    }
    if (lengthOfClickedElements === 0) setReversed(false);
    
  }, [reversed]);

  console.log(clickContainer);
  const getContainer = () => {
    return (
      <div className="design">
        {[1, 2, 3].map((ele) => {
          const isAlreadyClicked = clickContainer.includes(ele);
          return (
            <div
              className={`box ${isAlreadyClicked ? "addColor" : ""}`}
              onClick={() => {
                if (!isAlreadyClicked)
                  setClickContainer((prev) => [...prev, ele]);
              }}
            ></div>
          );
        })}
      </div>
    );
  };
  return <div className="designContainer">{getContainer()}</div>;
}

export default App;
