import { useState } from "react";
import data from "../../data/response.json";
import TextField from "../Input/TextField";  
import Radio from "../Input/Radio";
import TextArea from "../Input/TextArea";
import Select from "../Input/Select";

type Step = {
  step: number;
  title: string;
  description: string;
  fields: Field[];
};

type Field = {
  type: string;
  label: string;
  required: boolean;
  options?: { label: string; value: string }[];
  placeholder?: string;
};

function Multistep() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = (data as Step[]).length;
  const steps: Step[] = data as Step[];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentData = steps[currentStep - 1];

  return (
    <div className="p-5 rounded-xl lg:w-6/12 bg-white space-y-5">
      {/* Progress Bar */}
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
        {steps.map((step, index) => (
          <li
            key={step.step}
            className={`flex items-center space-x-2.5 ${currentStep === step.step ? "text-blue-600" : "text-gray-500"}`}
          >
            <span className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${currentStep === step.step ? "border-blue-600" : "border-gray-500"}`}>
              {index + 1}
            </span>
            <span>
              <h3 className="font-medium leading-tight text-start">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </span>
          </li>
        ))}
      </ol>

      <form>
        {/* Step Content */}
        <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
          {currentData.fields.map((field, index) => {
            switch (field.type) {
              case "textfield":
                return <TextField key={index} label={field.label} placeholder={field.placeholder} required={field.required} />;
              case "radio":
                return <Radio key={index} label={field.label} options={field.options!} required={field.required} />;
              case "textarea":
                return <TextArea key={index} label={field.label} placeholder={field.placeholder} required={field.required} />;
              case "autocomplete":
                return <Select key={index} label={field.label} options={field.options!} placeholder={field.placeholder} required={field.required} />;
              default:
                return null;
            }
          })}
        </div>
        
        {/* submit */}
        <div className="flex justify-end py-5">
            <button
                type="submit"
                className={`${
                  currentStep === totalSteps
                    ? 'block'
                    : 'hidden'
                } bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5`}>
                Kirim
              </button>
          </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between py-5">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`${
              currentStep === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800 text-white"
            } font-medium rounded-lg text-sm px-5 py-2.5`}
          >
            Prev
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentStep === totalSteps}
            className={`${
              currentStep === totalSteps ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800 text-white"
            } font-medium rounded-lg text-sm px-5 py-2.5`}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Multistep;
