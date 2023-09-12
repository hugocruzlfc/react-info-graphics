import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CleanIfStatements from "./Clean-If-Statements";
import CompoundComponentsPatterns from "./Compound-Components-Pattern";
import CorrectlyComponent from "./AvoidFetchingDataInuseEffect/CorrectlyComponent";
import UserContainer from "./ExposeCustomRefsWithUseImperativeHandle";
import Page from "./ExposeCustomRefsWithUseImperativeHandle/Example2";
import GoalLegend from "./ImproveConditionalRendering";
import AddressShippingCost from "./AvoidToDifficultReadConditionals";
import Index from "./AvoidCustomizationOfComponentsOnlyThroughPorps";
import ButtonSolid from "./UsingVariantsFromBaseComponents";
import IndexPage from "./UseDeferredValue";
import UseQueryParams from "./UseQueryParams";

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
      <br />
      <div>
        <p>Improve Conditional Render</p>
        <GoalLegend goal={30} />
      </div>
      <div>
        <p>Improve ternaries use</p>
        <AddressShippingCost
          address={{ country: "US", zipCode: "90210fewf" }}
        />
      </div>
      <div>
        <p>Compound Components 👇🏻</p>
        <Index />
      </div>
      <div>
        <p>Using variants From Base Components👇🏻</p>
        <ButtonSolid
          variant="primary"
          label="Hi"
        />
      </div>
      <div>
        <p>Use Deferred Value👇🏻</p>
        <IndexPage />
      </div>
      <div>
        <p>Use Query Params👇🏻</p>
        <UseQueryParams />
      </div>
    </div>
  );
}

export default App;
