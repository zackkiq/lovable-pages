
import { useEffect } from 'react';

const HubSpotForm = () => {
  useEffect(() => {
    // Load HubSpot forms script if not already loaded
    if (!document.querySelector('script[src="https://js.hsforms.net/forms/embed/44954242.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/44954242.js';
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">
        Get Your Free KonstructIQ Demo
      </h3>
      <div 
        className="hs-form-frame" 
        data-region="na1" 
        data-form-id="5aad3dc6-fff6-4ade-b5ae-ca04ae0a04c1" 
        data-portal-id="44954242"
      ></div>
    </div>
  );
};

export default HubSpotForm;
