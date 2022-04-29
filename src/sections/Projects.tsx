import { forwardRef, useState, useEffect } from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import { CgWebsite, CgSupport } from "react-icons/cg";
// import { BiExtension} from "react-icons/bi";
// import { GiBugNet } from "react-icons/gi";
// import { MdGppBad } from "react-icons/md";
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";
import useIsVisible from "../utils/isVisible";
import Anime from "react-anime";

const Projects = (props: any, ref: any) => {
  const [autoplayState, setAutoplayState] = useState(false);

  const isElmVisible = useIsVisible(ref);

  let configAnimate = {
    duartion: 1000,
    translateY: ["5em", 0],
    opacity: [0, 1],
    autoplay: false,
  };

  useEffect(() => {
    if (isElmVisible) {
      setAutoplayState(true);
    }
  }, [isElmVisible]);

  const config = {
    tiltMaxAngleX: 5,
    tiltMaxAngleY: 5,
    tiltReverse: false,
  };

  return (
    <Container mt="50px" ref={ref} {...props}>
      <H1>
        Notable{" "}
        <Split>
          Projects <Highlight>&</Highlight> Concepts<Highlight>.</Highlight>
        </Split>
      </H1>

      <ProjectsWrap>
        <Anime
          delay={(el: Element, index: number) => 500}
          {...configAnimate}
          autoplay={autoplayState}
        >
          <Tilt {...config}>
            <Project target="_blank" href="https://abduldev.me">
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <BsGithub />
                  </GithubIcon>
                  <H2>Portfolio</H2>
                  <ShortDesc>
                    The Webpage You're Currently Viewing.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>REACT</ProjectLang>
                    <ProjectLang>TS</ProjectLang>
                    <ProjectLang>HTML</ProjectLang>
                    <ProjectLang>CSS</ProjectLang>
                  </ProjectLangsWrap>
                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project
              target="_blank"
              href="https://github.com/Abdul1810/support-bot-with-buttons"
            >
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <CgSupport />
                  </GithubIcon>
                  <H2>Support Bot With Buttons</H2>
                  <ShortDesc>
                    A Support Bot For Your Server.Easy To Host.Work with Buttons Interaction.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>Node-JS</ProjectLang>
                    <ProjectLang>Discord.js</ProjectLang>
                    <ProjectLang>JS</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project
              target="_blank"
              href="https://http.cat/401"
            >
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <CgWebsite />
                  </GithubIcon>
                  <H2>Upcoming Project</H2>
                  <ShortDesc>
                    A Under Development Project For Discord.Coming Soon...
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>Javascript</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
        </Anime>
      </ProjectsWrap>
    </Container>
  );
};

export default forwardRef(Projects);

const ProjectsWrap = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 40px;
  justify-content: center;

  width: 100%;
  margin-top: 60px;
  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, 300px);
  }
`;

const Project = styled.a`
  width: 350px;
  height: 300px;
  display: flex;

  background-color: ${(props) => props.theme.colors.raisinBlack};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 100%;
  }

  :hover {
    ${H2} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProjectPadding = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTop = styled.div``;

const ProjectBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;

const GithubIcon = styled.div`
  font-size: 50px;
`;

const ShortDesc = styled.div`
  margin-top: 10px;
  line-height: 1.4;
  @media screen and (max-width: 600px) {
    margin: 20px 0;
  }
`;

const ProjectLangsWrap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  position: relative;
`;

const ProjectLang = styled.div`
  color: ${(props) => props.theme.colors.textDim};
`;

const ProjectLink = styled.div`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.primary};
  font-size: 30px;
  margin-top: -10px;
`;
