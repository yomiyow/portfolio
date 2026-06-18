import Image from 'next/image';
import { capitalize, SECTION_IDS } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

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
    <section id={SECTION_IDS.CERTIFICATES} className="flex flex-col items-center w-full">
      <AnimateOnScroll className="flex flex-col items-center w-full">
        <h2 className="text-4xl font-bold mt-24 mb-5 lg:mb-10">{capitalize(SECTION_IDS.CERTIFICATES)}</h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full max-w-6xl p-4">
        {certificates.map((cert, index) => (
          <div key={index} className="hover-3d cursor-pointer">
            <div className="card cursor-pointer w-full max-w-2xl lg:max-w-xl">
              <figure>
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={800}
                  height={600}
                  className="object-cover aspect-4/3"
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
      </AnimateOnScroll>
    </section>
  )
}

export default CertificateSection;