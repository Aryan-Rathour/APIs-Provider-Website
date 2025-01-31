// components/CardFlip.js
export default function CardFlip() {
    return (
      <div className="perspective-1000">
        <div className="relative w-64 h-80 transform-style-preserve-3d transition-transform duration-500 hover:rotate-y-180">
          {/* Front side */}
          <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center backface-hidden">
            <h2 className="text-xl font-semibold">Populars API</h2>
          </div>
  
          {/* Back side */}
          <div className="absolute w-full h-full bg-blue-700 text-white flex flex-col items-center justify-center transform rotate-y-180 backface-hidden">
            <h3 className="text-xl font-semibold mb-2">Discover our most used APIs</h3>
            <ul className="list-disc text-center">
              <li>Random User Generator</li>
              <li>Weather Forecast</li>
              <li>Currency Exchange Rates</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  