import React from 'react';
import Image from 'next/image';

const certificates = [
  {
    src: '/images/certificates/decision.jpg',
    alt: 'Decision Certificate',
    title: 'Decision Certificate'
  },
  {
    src: '/images/certificates/salesforce.jpg',
    alt: 'Salesforce Certificate',
    title: 'Salesforce Certificate'
  }
];

const CertificateSection = () => {
  return (
    <section id="certificate" className="flex flex-col items-center min-h-screen gap-10 px-4 mb-24">
      <h2 className="text-4xl font-bold mt-24 mb-5 lg:mb-10">Certificates</h2>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center w-full max-w-6xl">
        {certificates.map((cert, index) => (
          <div key={index} className="hover-3d cursor-pointer">
            <div className="card cursor-pointer w-full max-w-lg">
              <figure>
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={800}
                  height={600}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </figure>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CertificateSection;