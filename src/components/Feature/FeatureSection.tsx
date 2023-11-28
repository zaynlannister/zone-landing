import styled from "styled-components";

const FeatureSection = () => {
  return (
    <StyledFeature className="my-container">
      <div className="feature py-12">
        <div className="flex items-center justify-between gap-2 mb-12">
          <img className="feature-bg-1" src="/img/feature-bg1.png" alt="img" />
          <div>
            <p className="text-[42px] font-[700] mb-4 feature-title">
              We complete every projects extra care as customer need
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
              sit amet convallis nuncoe scelerisque in. orem ipsum dolor sit
              amet, consectetur adipisicing elit. Labore eius molestiae facere,
              natus reprehenderit eaque eum, autem ipsam. Magfini, error.
              Tempora odit laborum iure inventore possimus laboriosam qui nam.{" "}
            </p>
            <button className="primary-button">Read more</button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[42px] font-[700] mb-4 feature-title">
              Desire of customer is all
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
              sit amet convallis nuncoe scelerisque in. orem ipsum dolor sit
              amet, consectetur adipisicing elit. Labore eius molestiae facere,
              natus reprehenderit eaque eum, autem ipsam. Magfini, error.
              Tempora odit laborum iure inventore possimus laboriosam qui nam.{" "}
            </p>
            <button className="primary-button">Read more</button>
          </div>
          <img className="feature-bg-2" src="/img/feature-bg2.png" alt="img" />
        </div>
      </div>
    </StyledFeature>
  );
};

const StyledFeature = styled.div`
  @media (max-width: 1100px) {
    .feature-bg-1,
    .feature-bg-2 {
      width: 400px;
    }
  }
  @media (max-width: 850px) {
    .feature-bg-1,
    .feature-bg-2 {
      display: none;
    }
  }
  @media (max-width: 530px) {
    .feature-title {
      font-size: 30px;
    }
  }
`;

export default FeatureSection;
