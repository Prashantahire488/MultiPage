import "./App.css";
import { useContext } from "react";
import { Form1 } from "./components/Form1";
import { Form2 } from "./components/Form2";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { multiStepContext } from "./context/FormsContext";
import {Display} from './components/Display';
function App() {
  const { currentStep } = useContext(multiStepContext);
  const showSteps = (step) => {
    switch (step) {
      case 1:
        return <Form1 />;
      case 2:
        return <Form2 />;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <div>
        <Stepper
          className="center-stepper"
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>

      {showSteps(currentStep)}
      <br />
      <DisplayForms/>
    </div>
  );
}

export default App;