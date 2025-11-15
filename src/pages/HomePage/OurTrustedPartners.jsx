import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const partners = [
  {
    name: 'John Deere',
    logo: 'https://i.ibb.co/N2hB0cjg/john.png',
    description: 'Global leader in agricultural machinery and technology.',
  },
  {
    name: 'AGCO',
    logo: 'https://i.ibb.co/ZR2DFcGM/Agco.png',
    description: 'Manufacturer of innovative agricultural solutions worldwide.',
  },
  {
    name: 'Aaco',
    logo: 'https://i.ibb.co/gZK07HCt/aaco-logo-Photoroom.png',
    description:
      'AACo is Australias largest integrated cattle and beef producer.',
  },
  {
    name: 'Corteva Agriscience',
    logo: 'https://i.ibb.co/k6w44gdt/corteva.png',
    description: 'Advancing agriculture with biotechnology and research.',
  },
  {
    name: 'Syngenta',
    logo: 'https://i.ibb.co/nqsM0d46/Syngenta.png',
    description: 'Global company dedicated to sustainable agriculture.',
  },
  {
    name: 'Cargill',
    logo: 'https://i.ibb.co/5PTqBmw/cargill.png',
    description: 'Cargill is a family company providing food & ingredients.',
  },
  {
    name: 'Gramik',
    logo: 'https://i.ibb.co/YqZcVd5/gramic-Photoroom.png',
    description:
      'Gramik aka Agrijunction, supplies various Agri input products and services to farmers.',
  },
  {
    name: 'Nutrian',
    logo: 'https://i.ibb.co/W4PMT5zv/nutrian.png',
    description:
      'Nutrien is a leading global provider of crop inputs and services.',
  },
];

const OurTrustedPartnersSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#111827] text-gray-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-300">
            We collaborate with leading organizations to deliver the best
            agricultural solutions.
          </p>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-8">
          {[0, 1].map((row) => (
            <div
              key={row}
              className="overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={row * 100}
            >
              <div
                className={`flex gap-16 animate-marquee${
                  row === 1 ? '-reverse' : ''
                }`}
              >
                {partners.concat(partners).map((partner, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center min-w-[250px] p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-md"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-24 h-24 object-contain mb-2"
                    />
                    <h3 className="text-sm font-semibold text-gray-200 text-center">
                      {partner.name}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-center">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          gap: 4rem;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          gap: 4rem;
          animation: marqueeReverse 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default OurTrustedPartnersSection;
