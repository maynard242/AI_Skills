
export default function Slide1() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700">
      <div className="flex flex-col items-center justify-center h-full text-white px-16">
        <div className="text-center space-y-12">
          <div>
            <h1 className="text-8xl font-bold mb-8 text-white">
              AI Skills Framework
            </h1>
            <h2 className="text-5xl mb-6 opacity-70">
              Building AI Capabilities Across IT & Technology Teams
            </h2>
            <h3 className="text-4xl mb-8 opacity-80">
              A Strategic Approach for Non-AI Specialists
            </h3>
            <div className="space-y-4">
              <p className="text-3xl opacity-90">
                Government Technology Agency
              </p>
              <p className="text-2xl opacity-70">
                Enterprise AI Enablement Initiative
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full text-center">
        <p className="text-xl opacity-60">Version 1.0 | 2024</p>
      </div>
    </div>
  );
}
