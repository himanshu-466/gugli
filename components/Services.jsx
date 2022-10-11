import { service } from "../constants";
import styles from "../style";
import ServiceCard from "./ServiceCard";

const Services = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative xl:px-60  `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
        <h4 className="font-poppins font-bold text-[45px] leading-[32px] text-white">
           Our Services
        </h4>
        <div className="flex flex-wrap lg:flex-nowrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
            {service.map((card) => <ServiceCard key={card.id} {...card} />)}
        </div>
    </section>
);

export default Services;
