import { useState } from "react";
import data from "../../data/response.json";

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
            className={`flex items-center space-x-2.5 ${
              currentStep === step.step ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
                currentStep === step.step
                  ? "border-blue-600"
                  : "border-gray-500"
              }`}
            >
              {index + 1}
            </span>
            <span>
              <h3 className="font-medium leading-tight text-start">
                {step.title}
              </h3>
              <p className="text-sm">{step.description}</p>
            </span>
          </li>
        ))}
      </ol>

      <form>
        {/* Step Content */}
        <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
          {currentData.fields.map((field, index) => {
            if (field.type === "textfield") {
              return (
                <div className="mb-5" key={index}>
                  <label
                    htmlFor={field.label.toLowerCase()}
                    className="block mb-2 text-sm font-medium text-gray-900 text-start"
                  >
                    {field.label}
                  </label>
                  <input
                    type="text"
                    id={field.label.toLowerCase()}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              );
            } else if (field.type === "radio") {
              return (
                <div className="mb-5" key={index}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 text-start">
                    {field.label}
                  </label>
                  <div className="flex">
                    {field.options?.map((option, idx) => (
                      <div className="flex items-center me-4" key={idx}>
                        <input
                          id={option.value}
                          type="radio"
                          name={field.label.toLowerCase()}
                          value={option.value}
                          className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          required={field.required}
                        />
                        <label
                          htmlFor={option.value}
                          className="ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              );
            } else if (field.type === "textarea") {
              return (
                <div className="mb-5" key={index}>
                  <label
                    htmlFor={field.label.toLowerCase()}
                    className="block mb-2 text-sm font-medium text-gray-900 text-start"
                  >
                    {field.label}
                  </label>
                  <textarea
                    id={field.label.toLowerCase()}
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
                    placeholder={field.placeholder}
                    required={field.required}
                  ></textarea>
                </div>
              );
            } else if (field.type === "autocomplete") {
              return (
                <div className="mb-5" key={index}>
                  <label
                    htmlFor={field.label.toLowerCase()}
                    className="block mb-2 text-sm font-medium text-gray-900 text-start"
                  >
                    {field.label}
                  </label>
                  <select
                    id={field.label.toLowerCase()}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                    required={field.required}
                  >
                    <option value="" disabled selected>
                      {field.placeholder}
                    </option>
                    {field.options?.map((option, idx) => (
                      <option
                        key={idx}
                        value={
                          typeof option === "string" ? option : option.value
                        }
                      >
                        {typeof option === "string" ? option : option.label}
                      </option>
                    ))}
                  </select>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="flex justify-end py-5">
          <button
            type="submit"
            className={`${
              currentStep === totalSteps ? "block" : "hidden"
            } bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5`}
          >
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
              currentStep === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800 text-white"
            } font-medium rounded-lg text-sm px-5 py-2.5`}
          >
            Prev
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentStep === totalSteps}
            className={`${
              currentStep === totalSteps
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800 text-white"
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
