import './App.css'

import CountContextProvider from "./components/usecontext/context/CountContext.jsx";
import ComponentA from "./components/usecontext/example2/ComponentA.jsx";
import ComponentB from "./components/usecontext/example2/ComponentB.jsx";
import ComponentC from "./components/usecontext/example2/ComponentC.jsx";


export default function App() {
  return (
      <div>
          <CountContextProvider>
              <ComponentA />
              <ComponentB />
              <ComponentC />
          </CountContextProvider>
      </div>
  )
}
