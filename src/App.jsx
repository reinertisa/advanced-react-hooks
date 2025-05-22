import './App.css'
import DocumentTitle1 from "./components/useeffect/DocumentTitle1.jsx";
import MouseEvent1 from "./components/useeffect/MouseEvent1.jsx";
import MouseEvent2 from "./components/useeffect/MouseEvent2.jsx";
import Timer1 from "./components/useeffect/Timer1.jsx";
import DataFetching1 from "./components/useeffect/DataFetching1.jsx";
import DataFetching2 from "./components/useeffect/DataFetching2.jsx";
import DataFetching3 from "./components/useeffect/DataFetching3.jsx";
import ComponentA from "./components/usecontext/example1/ComponentA.jsx";
import ComponentB from "./components/usecontext/example1/ComponentB.jsx";
import ComponentC from "./components/usecontext/example1/ComponentC.jsx";
import UserContextProvider from "./components/usecontext/context/UserContext.jsx";
import ChannelContextProvider from "./components/usecontext/context/ChannelContext.jsx";
import Counter1 from "./components/usereducer/Counter1.jsx";

export default function App() {
  return (
      <div>
          <Counter1 />
      </div>
  )
}
