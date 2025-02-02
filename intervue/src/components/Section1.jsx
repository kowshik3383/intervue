import { KeyRound, Layers, Rocket, Globe } from "lucide-react";

export default function SecuritySection() {
  return (
    <section className="bg-gray-100 py-16 px-8 flex flex-col items-center md:items-start">
      <div className="max-w-5xl w-full md:ml-8 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-900">
          Security is our top priority
        </h2>
        <p className="text-gray-600 mt-2 md:w-1/2 mx-auto md:mx-0">
          Intervue serves startups to fortune 500 companies with enterprise-grade security baked in by design.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row md:ml-5 w-full max-w-5xl mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200 flex flex-col justify-between">
            <div>
              <KeyRound className="w-6 h-6 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900 mt-2">Security</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Protecting your data at every layer is fundamental to how Intervue works.
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <span className="text-gray-700 text-xl">→</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border border-gray-200 flex flex-col justify-between">
            <div>
              <Layers className="w-6 h-6 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900 mt-2">Compliances</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Enterprise-grade compliance commitments where we have established controls to adhere to those commitments.
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <span className="text-gray-700 text-xl">→</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 ml-0 md:ml-5 flex-1 mt-6 md:mt-0">
          <div className="bg-white max-w-sm p-6 rounded-lg shadow border border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Rocket className="w-6 h-6 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Intervue for Startups</h3>
            </div>
            <span className="text-gray-700 text-xl">→</span>
          </div>
          
          <div className="bg-white  max-w-sm font p-6 rounded-lg shadow border border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 font-bold
 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Intervue for Enterprises</h3>
            </div>
            <span className="text-gray-700 text-xl font-bold">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}