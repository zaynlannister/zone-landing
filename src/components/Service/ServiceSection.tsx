import ServiceCard from "./ServiceCard";
import styled from "styled-components";

const cardsData = [
  {
    img: "1",
    title: "Order Management",
    desc: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
  },
  {
    img: "2",
    title: "Social Assistant",
    desc: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
  },
  {
    img: "3",
    title: "Crypto Platform",
    desc: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
  },
  {
    img: "4",
    title: "Smart Trading Modules",
    desc: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
  },
  {
    img: "5",
    title: "Analyzer of the News",
    desc: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
  },
  {
    img: "6",
    title: "Module of Price Notification",
    desc: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
  },
];

const ServiceSection = () => {
  return (
    <StyledService className="my-container">
      <div className="service py-8">
        <p
          data-aos="fade-up"
          className="service-title text-[42px] font-[700] text-center mb-4"
        >
          Our Service
        </p>
        <p
          data-aos="fade-up"
          className="service-description text-center w-[600px] mx-auto"
        >
          We turn information into actionable insights We work to understand
          your issues and are driven to ask better questions in the pursuit of
          making work.
        </p>
        <div className="service-cards flex justify-between flex-wrap gap-6 pt-14">
          {cardsData.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </StyledService>
  );
};

const StyledService = styled.div`
  @media (max-width: 665px) {
    .service-description {
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    .service-title {
      font-size: 30px;
    }
  }
`;

export default ServiceSection;
