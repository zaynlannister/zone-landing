import styled from "styled-components";

const FooterSection = () => {
  return (
    <StyledFooter className="border-t border-t-silver py-8">
      <div className="my-container footer py-12">
        <div>
          <div className="flex items-center gap-4">
            <img data-aos="fade-right" src="/zone-logo.svg" alt="img" />
            <p data-aos="fade-left" className="text-[20px] font-[500]">
              Zone.
            </p>
          </div>
          <div className="flex flex-col gap-2 py-6">
            <div className="flex items-center gap-2">
              <img data-aos="fade-right" src="/location.svg" alt="img" />
              <p data-aos="fade-left">Tashkent, Uzbekistan</p>
            </div>
            <div className="flex items-center gap-2">
              <img data-aos="fade-right" src="/calling.svg" alt="img" />
              <p data-aos="fade-left">998332488838</p>
            </div>
            <div className="flex items-center gap-2">
              <img data-aos="fade-right" src="/message.svg" alt="img" />
              <p data-aos="fade-left">zaynlannister@gmail.com</p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex gap-2">
            <img className="cursor-pointer" src="/facebook.svg" alt="img" />
            <img className="cursor-pointer" src="/twitter.svg" alt="img" />
            <img className="cursor-pointer" src="/instagram.svg" alt="img" />
            <img className="cursor-pointer" src="/pinterest.svg" alt="img" />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  color: rgba(255, 255, 255, 0.8);
`;

export default FooterSection;
