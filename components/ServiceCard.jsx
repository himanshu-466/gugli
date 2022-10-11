// import { quotes } from "../public";
import Image from "next/image"

const ServiceCard = ({ content, name, title, img, serviceImage }) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <Image src={serviceImage} alt="service-image" className="w-[42.6px] h-[27.6px] object-contain" />
        <h4 className="font-poppins font-semibold text-[25px] leading-[32px] text-white">
            {name}
        </h4>
        <p className="font-poppins font-thin text-[16px] leading-[21.4px] text-white my-5">
            {content}
        </p>

        {/* <div className="flex flex-row">
      <Image src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div> */}
    </div>
);


export default ServiceCard;
