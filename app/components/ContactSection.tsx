import Link from "next/link";
import { capitalize, SECTION_IDS, SOCIAL } from "../constants";

const ContactSection = () => {
  return (
    <section id={SECTION_IDS.CONTACT} className="flex flex-col items-center min-h-screen">
      <h2 className="text-4xl font-bold mt-24 mb-5 lg:mb-24">{capitalize(SECTION_IDS.CONTACT)}</h2>
      <div className="hero-content flex flex-col-reverse xl:flex-row-reverse gap-20">
        <section className="text-center py-20">
          <p className="mt-3 text-base-content/70 max-w-md mx-auto">
            Have a project in mind or just want to connect? Let’s talk.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href={`mailto:${SOCIAL.EMAIL}`} target="_blank" className="btn btn-outline">
              Email Me
            </Link>
            <Link href={SOCIAL.LINKEDIN} target="_blank" className="btn btn-outline">
              LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;