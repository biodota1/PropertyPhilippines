import Image from "next/image";
import { StaticImageData } from "next/image";

export interface UnitType {
  imageSrc: StaticImageData;
  imageAlt: string;
  name: string;
}
const UnitTypeCard: React.FC<UnitType> = ({ imageSrc, imageAlt, name }) => {
  return (
    <div>
      <Image src={imageSrc} alt={imageAlt} />
      <p>{name}</p>
    </div>
  );
};

export default UnitTypeCard;
