import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CleanIfStatements from "./Clean-If-Statements";
import CompoundComponentsPatterns from "./Compound-Components-Pattern";
import CorrectlyComponent from "./AvoidFetchingDataInuseEffect/CorrectlyComponent";
import UserContainer from "./ExposeCustomRefsWithUseImperativeHandle";
import Page from "./ExposeCustomRefsWithUseImperativeHandle/Example2";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <h1>Project with the Info Graphics by George Moller! 🚀</h1>
      <h2>Your twitter: @_georgemoller</h2>
      <main>
        <CleanIfStatements />
        <CompoundComponentsPatterns />
        <QueryClientProvider client={queryClient}>
          <CorrectlyComponent />
        </QueryClientProvider>
      </main>
      <div>
        <UserContainer />
      </div>
      <div>
        <Page />
      </div>
    </div>
  );
}

export default App;
