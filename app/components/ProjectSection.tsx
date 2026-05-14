import Image from "next/image";

const ProjectSection = () => {
  return (
    <section id="project" className="flex flex-col items-center min-h-screen">
      <h2 className="text-4xl font-bold mt-24 mb-5 lg:mb-24">Projects</h2>
      <div className="flex flex-col-reverse xl:flex-row-reverse gap-20 p-4">
        <div className="mockup-browser border border-base-300 w-full">
          <div className="mockup-browser-toolbar">
            <div className="input">osascomplaints.dev</div>
          </div>
          <div className="grid place-content-center border-t border-base-300 max-w-7xl">
            <figure className="hover-gallery">
              <Image src="/images/osas-1.png" alt="image" width={2000} height={2000} />
              <Image src="/images/osas-2.png" alt="image" width={2000} height={2000} />
              <Image src="/images/osas-3.png" alt="image" width={2000} height={2000} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;