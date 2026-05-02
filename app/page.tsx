import Image from 'next/image';

const Home = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="hover-3d">
          {/* content */}
          <figure className="max-w-100 rounded-2xl">
            <Image
              src="/formal-picture.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              priority
              className="size-[200px] sm:size-[300px]"
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
          <p className="max-w-2xs">A passionate developer creating modern web applications</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
