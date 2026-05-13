import Image from "next/image";

type TeckStackCardProps = {
  src: string;
  title: string;
};

const TechStackCard = ({ src, title }: TeckStackCardProps) => {
  return (
    <div className="hover-3d cursor-pointer">
      <div className="card bg-base-100 w-30 sm:w-[150px] shadow-sm">
        <div className="card-body items-center text-center">
          <Image
            src={src}
            alt={title}
            width={40}
            height={40}
          />
          <h2 className="text-sm sm:text-md">{title}</h2>
        </div>
      </div>
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
  );
};

export default TechStackCard;