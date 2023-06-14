function ProgressSteps({ steps }) {
  return (
    <>
      <div className="w-3/4">
        <div className="bg-gray-200 h-1 flex items-center justify-between">
          {steps.map((step) => (
            <div className="bg-white h-6 w-6 rounded-full shadow border-blue-600 border relative">
              <div className="absolute -left-10 -right-10 top-8 text-center text-sm font-medium">
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export { ProgressSteps };
