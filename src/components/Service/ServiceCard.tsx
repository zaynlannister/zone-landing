import styled from "styled-components";

const ServiceCard = (props: any) => {
  return (
    <StyledCard data-aos="fade-right" imgNumber={props.img}>
      <div className="service-img">
        <img src={`/img/service-${props.img}.svg`} alt="img" />
      </div>
      <p className="text-[24px] py-4">{props.title}</p>
      <p>{props.desc}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div<{ imgNumber: string }>`
  width: 340px;
  padding: 20px;
  border-radius: 34px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    268deg,
    rgba(254, 254, 255, 0.03) -11.04%,
    rgba(255, 255, 255, 0.02) 104.89%
  );
  box-shadow: 0px 22px 18px 0px rgba(0, 0, 0, 0.05);

  .service-img img {
    padding: 10px;
    width: fit-content;
    border-radius: 15px;

    background: linear-gradient(
      180deg,
      ${(props) =>
        props.imgNumber === "1"
          ? "#bc7fd9 0%, #923283 100%"
          : props.imgNumber === "2"
          ? "#D97F95 0%, #923250 100%"
          : props.imgNumber === "3"
          ? "#84D8ED 0%, #4292BB 100%"
          : props.imgNumber === "4"
          ? "#92EFC3 0%, #2F8F5B 100%"
          : props.imgNumber === "5"
          ? "#BC7FD9 0%, #923283 100%"
          : props.imgNumber === "6"
          ? "#2563EB 0.36%, #D946EF 201.02%"
          : ""}
    );
  }

  @media (max-width: 1108px) {
    width: 480px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default ServiceCard;
