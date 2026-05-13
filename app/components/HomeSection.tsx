import Image from "next/image";
import profilePic from "../../public/images/profile.png";

const HomeSection = () => {
  return (
    <section id="home" className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="hover-3d">
          {/* content */}
          <figure className="max-w-100 rounded-2xl">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={200}
              height={200}
              priority
              className="w-auto h-auto"
              placeholder="blur"
            />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="text-center">
          <p className="text-2xl font-medium">Hello, I&apos;m Romeo</p>
          <p className="max-w-2xs">A Software Developer</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;