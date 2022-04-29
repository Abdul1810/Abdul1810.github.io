import { forwardRef } from "react";
import styled from "styled-components";
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";
import { BsGithub, BsTwitter, BsInstagram as InstaIcon } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

const Contact = (props: any, ref: any) => {
  return (
    <Container mt="10px" ref={ref} {...props}>
      <H1>
        <Split>
          Where to find me<Highlight>.</Highlight>
        </Split>
      </H1>
      <InnerCont>
        <LinkStyle href="mailto:abdulking8010@gmail.com">
          <H2 loc="Contact">mail@to.me</H2>
        </LinkStyle>

        <SocialWrap>
          <Social target="_blank" href="https://github.com/Abdul1810">
            <BsGithub />
          </Social>
          <Social target="_blank" href="https://discord.com/users/737553088218529813">
            <FaDiscord />
          </Social>
          <Social target="_blank" href="https://twitter.com/">
            <BsTwitter />
          </Social>
          <Social target="_blank" href="https://www.instagram.com/i.am_rahman/">
            <InstaIcon />
          </Social>
        </SocialWrap>
      </InnerCont>
    </Container>
  );
};

export default forwardRef(Contact);

const InnerCont = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
`;

const LinkStyle : any = styled.a`
  ${H2} {
    transition: color 0.2s ease;
    &:hover {
      color: ${(props: any) => props.theme.colors.primary};
    }
  }
`;

const SocialWrap = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 20px;
`;

const Social = styled.a`
  font-size: 30px;
  color: ${(props) => props.theme.colors.textLight};
  transition: color 0.2s ease;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
