import TechStackCard from "./TechStackCard";
import { capitalize, SECTION_IDS } from "../constants";

const AboutSection = () => {
  return (
    <section id={SECTION_IDS.ABOUT} className="flex flex-col items-center min-h-screen">
      <h2 className="text-4xl font-bold mt-24 mb-5 lg:mb-24">{capitalize(SECTION_IDS.ABOUT)}</h2>
      <div className="hero-content flex flex-col-reverse xl:flex-row-reverse gap-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-16">
          <TechStackCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title="React" />
          <TechStackCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" title="ExpressJs" />
          <TechStackCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" title="Supabase" />
          <TechStackCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" title="Typescript" />
          <TechStackCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" title="Git" />
          <TechStackCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" title="Docker" />
          <TechStackCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" title="TailwindCss" />
          <TechStackCard src="/images/tanstack.svg" title="Tanstack" />
          <TechStackCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" title="Zustand" />
        </div>
        <div className="max-w-[490px]">
          <div className="text-justify leading-8">
            <p>
              Romeo is a developer who does not drink enough water, nor does he sleep on time, but he somehow still believes debugging at 2AM is a personality trait.
            </p>
            <br />
            <p>
              As a recent graduate, Romeo is still early in his journey as a developer, which mostly means he&rsquo;s excited to learn, build cool things, and occasionally spend hours fixing problems caused by one missing bracket. During his internships, Romeo worked with AWS services like EC2, S3, and RDS, where he spent time monitoring, configuring, and provisioning servers.
            </p>
            <br />
            <p>
              Outside of coding, Romeo spends his time reading novels, hand-feeding birds, playing chess, watching anime, and convincing himself he&rsquo;ll only watch &ldquo;one episode&rdquo; of a K-drama before accidentally finishing half the season in one night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;