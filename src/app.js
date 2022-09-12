import { render } from "react-dom";
import SearchBooks from "./SearchBooks";

const App = () => {
  return (
    <div>
      <h1> Search GoodReads </h1>
      <SearchBooks />
    </div>
  );
};

render(<App />, document.getElementById("root"));
