import { forwardRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";
import useIsVisible from "../utils/isVisible";
import Anime from "react-anime";

const Languages = (props: any, ref: any) => {
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

  return (
    <Container mt="50px" ref={ref} {...props}>
      <H1>
        Known{" "}
        <Split>
          Languages<Highlight>.</Highlight>
        </Split>
      </H1>
      <LanguagesWrap>
        <Anime
          delay={(el: Element, index: number) => 500}
          {...configAnimate}
          autoplay={autoplayState}
        >
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,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" />
                </GithubIcon>
                <P>C++</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,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" />
                </GithubIcon>
                <P>Java</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEzklEQVRoge2Yy28VVRzHP2dm7txXXzwKlFopwbAALYG4MFFMNLhgS9zIyoVruzABIgG6A40LQRA0Glcm/gHGxATjja40cWVMIJHS0gC1hU7vq3fmzpw5Luq99DEzd4ZOZXO/yzlzz/l8Zn6/mTMXuummm26eZUTYwNtnJ1XQoEQx7Bhsa2odJ9+X/6F8ov9cv65XN8IISpVyZ+w3goZCKSYLEj/AQEfwIOsxZ/qRa+7O/7J43Py6v9EYxfMGEhKvSAQ8RAg4umKy4CEDJDQEcznJP9lgia2F38snzMttatsewWtuS8QNdIRfZolIU4M7BRkoIRQ8Mj3u5+Sq48X8X9V3Mh/3rz3fbu7GdXfE4gZiwUMHAQBPU9wperhCBYwKrIzPvbwHQCZ7t/5udqJXEHQuOM5OHGcXEa2XCB5iCAB4AiaLkqC+FUDVALvndvW9/KmiUNG94bqDOM4QBD4iSAQPMQUApFhubEdbf3UzmuWMZ84W9Q7wrbjuNhznufUDgkTwkEAAwBeKyYJkSX8ioen15vn6DbNZ2a9pmht7LtcbwLb30K42pUq5U41E8BAhMGfKwONKwHRBUtMVSrPdifoVI+dLoZRJtTKGJuJLeF4fjcYoSmk/Jb3yrYQKzGd9ZrN+YDsqYK5Qdy8sfarlpd+eQymDWuUQIsGdEMIv5c/UjyWiXpHIEnpsSh7k5Lp+E0L61x9f03ql1Nf+xkenWjmMwOu4uKGXSwMTt5/qyrfSsQcWMz4zKySU8NUX1jVvh+utg29HCaq1wyDCmzoNeIjZxFXDZzrvoYSvPlv8vDlsN8yOP1JQqxyCgCI0MpVU4CHBU2hJ9zk3/729p+ZnRYJGrVXHUEprv7sMvVwaOH8rFXiIKSAUXJ+5WX/R0vONpX247naE1oy9SL12ECUNzJTKZmVCBZ7s0xQfPfy5+uq8KraONBojOPYQmmbHXkjKQqkvZXgAI2zA9AUavvrwUal6fNbtWzvuOEMoZZAv3MWXhchFcrnp0q5LN1OHhwgBgeLXu1/OZst7h8LOaTYH8f0MPT23kLIn8JzNhIeIEvrx3lczUfCteN4AtdpBgr66/tBem7rR+Oa3DTJGJlRgq22OxJ3E83qpVccwjEr72JXiSetP79goitMT4zOXNsgZmlCBhUdvkTHnY0/kySKVyhF0o8yV4kmrr7p/S3twEyUiH6PWwptkMtbyczRGpMzxiTm+Gr6VTZLo+B6wrNcxjDJBb9S1uTjysmX5I+vhW1Gcnnh/ZiIRYYfEepEtWkfR9SWECN5iA1wcOWK57vCWhuFzpxC5kbuQ5p2IvZUol19BaD5CrIdbhv/vyiuwDRUtkWI5Jfoiq5SPoJSxahuxCv4JILah+Lu4+RKJBABqtZfwZS+a3uCDfYetOTEcXPNq+b+lzZZILABQr+9nfM/Rhfva7i0PTcVC2L90/4PEUwmcG8tbD/WdWwEQitlnKJFYYBl+cHXZxJXYhMZOJHD5gH1v2hgMrnmhmM0qHkdJGOlLxBa4eqA+9d32vc9PFTyaoW9mxT+d7kTKErEErh6oT327/YVRAFdTTBVkuEScckpRoqPASvhWUpNIobEjBYLgW0lDwtY2LhEqcO1gbToMvpWNSgjSkeimm266eXb5FyI2k16J3rGGAAAAAElFTkSuQmCC" />
                </GithubIcon>
                <P>Kotlin</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD4klEQVRoge2ZT2gUVxzHP292N0GjqdEEGo0Xe7KCB61eKthDKEoPJRbxoN68tyAUCu2xRw96klyDpW3AYKvYQoQILYgXT1pBrAdB2ahJzJ/9O++9HjbZzJvsvPdmd9Ji2S8s7Ps7v+983+/PzEAXXXTxTkPYBl+cYhlN379lTAKWd0+xPWkwsC7VFDM3Jz2sNlgJaJjN1pb0EA4b8o7FHSswPJJ+TbkEC3ON/1p0oAD/kQJK+dtgJ+Bgv1lQMtp4B30gqoDLBiuBwMF+sxAlEDhOgdWJsbAXfQP0XnnqtmZgwD3n+/1QfNxsyqx8wBYBdGUJtHYb54OVN0Yz6gM66MAHlI29DKFW9jHPDq2hNG9eN6KADDpQYM8Uc0A98drlRR8T7SgvgArX91SN3yrqI5PMt1q2Blci0y/hlYbdrS++CDvebzar3xxGzz4z56RMZPEcIMB6Tl2JDG2rh+IK9Hk4rAMxAs4o6CSAxQ/iR0hs2+mxnR1pIhD4ELDF4VL2BIws7KGAKw+gG+ew9VhMgcKFqxQuXDUnufLAzGW4/lWzaYTQLBQIbHchiyhUeWs002RhyNgH2kI5mUAmClgzYSmjPBCBTFGJQoc+EN4ZJ7wzbt8gngfOT8CRc+vtGIGoAtZKYBVOBWQ944p0a8yp40cookCvow4CDwX2LjL7cgBFC7K5D49TuDjVbMtHd6lfGrNvuIFAogJ6cJDXLvucCogZQmhdj+hls1v0D7q2sxKI5YA3Yjy5DluDTxSChLOol+eMttg5QnDwU0S+Z+PkXA8c+Az6h83+ynogSPMsvAbnEVpFEdgf79QrMQJb36Pnyx/RKwuoB7eQ96/DcAEOnYGDYxvvPhgKyJR1EHgSSIxE1RKEVcj3Gt2ibwe5Y2fJHTtrz8S1FZDrpySqgNB+CngdocBSkco/fkCX3iYNJ6O8APcnjC6jjPB8I+KtQNJYfeIiXPua4IMjBB99Tu7oKUT/UOvJpXl4eBMeTMJfv4OsGcOb5wOuu6Ek6sk91JN7hD992ySTPzoGvRoe3ko0OraN/zXTELBl41ZWNMn8/B3swXhktC5NWQeBJ4GcoKjaeQEhQ1DuadCogcJI1M/JDBUQgln7k2l7qNegWoFKpfHfgMpQAb1EMYvPHEpBrQqVcsNwZVOn6kfA+2gXv2CflIwiGAVOQPJXkyh2DTWMrVagbi8Mymj+1ILpQPHr8A0e+ezvTSCK56fZEig+DhSjGkaBw+3sA/yNYFpopvOS34Z+YSntBm0RiCOFOm3dZRsyIRDF89Nsydf5BDhJwEkAFLeB22GBmb2TZPA+sosuuvjf4B/mVKFnqGo6YQAAAABJRU5ErkJggg==" />
                </GithubIcon>
                <P>Html</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAESUlEQVRoge1Zy4scRRz+qmd2XovLzm5WMPEB7mKyh5wSLyoYyYiPg0SQHOLR/AMBIbko3qJeglcJhKDgQfEiJj42RBCXXHIREgKBXLKRzGzceWzP9HZPVf08TLJTXTtdVTPTSQzMB3Poqu7q36++7/eoHmCCCSZ4osFMk97JSz6A6UdkSxJ8+cXhp5ImPcvD1ZSNGQVGG4wOMFAtXVuGByMYbciaJiVQNWrMxYClfcM/5LdAd//p2cDGYoA9HgYE79tAZhX8L2OAuOxfeGMwAJj199CgMABpVoFNQo8nC6kSsjBgDGLBRM2jwT6+NF/A6vFlqy3lctl6z8I3d1EP+7JhnIMe2CDGYAAy2fv6lrAa5gIC0IpkfEwq11mzCswOZJK9rwccREmz7mhFEkJfR42BrXAMBk4f3gDQHTTFJaEVjs9CI9Ksl7L366GLM2/VTc8bYwBgBFxaB7B70OziV39bDdQL2dJMFjeOPr193dTkE9t9oNazIRm2NAqkXAvmCvFXNsK4fSRiDlnfbXWAUu6H5vOaAxoDTGGAyN4JWB1gKTMwn493V7oDw9QAwBoDAIbohz6vPIvjBxZiY7Y6oEsIXEkMUo7PAIZgwNd30wHNrl4DlCB2YMBBQu4M+N3h02pLT6MKA8zSBwEpx8AoDDTChxwD3NAP6Th7dR1nr67HxvQ6cP5QGR8uFbevd2Yhsd0HceGlEAOSUs1CZS0LNSO9DigxMJVJIQuVpmoIpMQAZ5d3FfDnR/2O9FotwOvnbhiXK+cMdYBIbSMI90r3bObZGfjsDQ5gYD+yqdFfnLIvN6sVshgDUkDpEP/F1wcH9mEq3MSdcDLbjOJZZ1cpizcXZ5DL7Fw25zG8+1wBz5Tic2orTSK2nlP2cyhkAIFVGWjH6cWPJIgAdl/WM/kMvvtgEY0tgQs3m/jx+gZye/I4uljEkRcKKOd3OqZ2o0z0DzLkmP2cHEj6PiQkocMlpjXpzBYyOLZ/Dsf2zxkrcZsTulKRkFoDiNVcjhuuEkrcje+vbaA5wumsEUl8e7MTH1QzkCfTYwAGPX78622c/H0NL++exnt7Z/H+8iwWpqcG3lsPJX6+HeKHWwF+WwsRSS2FSrUPcusAHCWEqolOIQlX1nxcWfPxyeU7284cWS6DShIXDEbHoErIoQo7O9DrSN0OwKozn16+A7a0F9y1wxjie9ADOMWAoNG+D3FJ7sZzDtbtp32RSZMBT9RA437m1UAEikKwtg+0fVC0FSe5200vBsBFFRnXeDdAcCAIQO1NoOMDQpqE6eSA+7aeWnkxA69CRBUAbwNI/Nckhj3PA502WMcHhaHpzoDA/mKMViSjn3C6ct1l+dF0cWK1mM13XpWSVRhDhYADI60D3ALRCvPYipD5X/Dla5vDLpCOsN3ZGWmXTUg5MgGcWC1mcsEhAt5B7wcAFxlwUUTFP3DmlSD1d04wwQRPLv4DT7jzTbs1mf8AAAAASUVORK5CYII=" />
                </GithubIcon>
                <P>Css</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD8UlEQVRoge2YTWhcVRSAv3MnaSY/SqlSNEVTartppBZN8Ye2aYwTNUh3jQqCKEoWbqKWtO6yakmoNOBWFF0EaSsFu3CKiROjRUu7aaOpolQ0hEhpQQ1pJpP37nExVUnnzcx7uS9DC/NtZjj3/N775t1zBqpUqXJbI/G4UeHg6HaD6VLlMYEtQDPQCPjANYEZFc4ZOOklvx5nYMDGEdm9gP2j20xCRoDWsCaKnlYv8RLvdlx1DZ9wsh441WD8Nd8BD0QxE2SzEd2lqU0fMj6uLikYF+OahcZdwIaV2KrweE12Z5dLfHAsQOW/5Ges0VaLbQEmw9pbeMIlPrgWYPXO/DdJc/ipKQZTv6NyPLwDucMlPkCNq4M8+gzvjG4lJ/OI7ovHZzhiKoANxsoPsXmLgNMjdCvgtGd2qHMYGC6lY/rH+hCOltLRibo+dJlOFmQStYdlT+5kSf/h060oSdAdiHyqE8nXSimWPoGDmc1GdT/oTmAj+dagkgiqR3Us+YV0Zn8LUih6Aon+L/catRdAe8m3CZVO/l+aSNBbbDG4gLfHWlR0BGhYrazySLiGTvT5YkuBBZhafYtK7Ljqrzc+y8XapJnGe4IWgk9ApdspsXD8aa137EYa28pqG+/hQHGBpC+zlojd5QqYN8gLHHn6ip5pWg8aZsO2BAkLC0h624lt0FmGRWUa5X1recgbfPI0AL43DDSVtRZZFyQueI0mMPdGbNB/EuSQr94oQ6lZkFDmqhi+qjuC6ouholitDxIXFKCq6yIcwIi9vvgq73UvhjXQM03r8XJ7mDD9iD4S1g7Ra0HiggJEyWqI/BUyWm9eZrDb028amvH9A8Be4D5KTXreEvkNijqImdkgadBNHFjpTVhV+wYDnZ5matvwvTTIXREziobxLwSKbxb4Yn4u50uUswylLmmGJAlzYtWThwXql6aCFgrfQpev/gjMl/Kmwvd567oulJYYEixHWtpYClooLOB4j69wtozDfIHKRufUyuNh7aFii4E3saDHQrk2q96OeyC90rF0vngKAVj0E2Bm1dIqTRa4BPoRxrZJe/aDUsrB88Bg6i85MPa6wmdFdcozLO2Lb67QNjRFHwF/sPNzC50KGeD6aieyUpx6noBZNirOp3SrzsShqWQBM4i2grkfuBiX00oWkJbduSlpX5hG9ERcTt3+S1OZi9CUPauZNQ9Sm/gb3/b8b++GWwFivyVM65qnGSOT+Mvm+Gmn+Dg+QrI7NwUS7tYuZA5NnHKJD3H8Bhqzr4B+HNHqMshz0jH/h2v42GZfHa/dAWYfwqMILSh3A3Ugc6heQfgF9BwmkWZ24bz04McVu0qVKrcx/wCMzkVJG0VvSgAAAABJRU5ErkJggg==" />
                </GithubIcon>
                <P>Python</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACpklEQVRoge2ZS0hUURjHf8d8Zy8kn2lmZWkYJWUIIkGLwKQWgQ/EjaQJEj0QKi3bFC6LgogIF2Zgj8VUPijUiCAYok2mkAYqNKJiKFY2Ezmnxa0OozM1k3rvovODy/3O+c7j+3Mu53VBo9ForET4csg+pJmB/A2R4T3WILMDWWy0AKvRAqxGC7AaLcBqtACr0QKsRguwmiUTIDLE7+f+E0/f2wEoqRHE5wlCMgWJewVlpwW97wPvx/QR6LbD7kJBSzuMTsD3WRgZh+bHkF0o6LYH1p6pAtxuOHJe4HQZ6bBQSE813gAzTqi9LJABnAVNFdAzAIMffnYcBK/uSfpaJf0dko1JcLwMOhslwudBdz7BSxOqd6amlR0aAls2GHZyPPQ8lESEB96mqSOQmqRspwuKTgmGR4z0vwQPJgtIioP9uSpt64KtBwQV9YKB4X9r0/RZqPGiZGe6SjtdcOsBpBcYQr58Daw90wUkxMCLZkltJURFqvzZWUNITolgctp3/blYshIvj4BLJyRDnZKGk5LYaOXr6YcL1/yfhpZEgNv9Z/+veT56NZypgHftkj3bld/W5X9fCxYwPAKHqgVtz1XeoMOzTESYsm8/guwiwecZlbdqBRTnq9Vr7KP//S9oHbjbAeV1ghknPH0pqCqCtBTJnVbPTyAl0XiX1BhbCICD1YKmBsm6OJj6BLYuVScx1iQBc2eTK00w975483rYtsmwc3ZIWtoN/zM7JO8TJMTAxCS4vqk6xfn+x7CgTygtBdpuSFZGefeHhsD1erU1OFYK56qUX0pwjHkGn7cL6o76vxlalOv10QlouCmwdYFjHNaugdwsOFspycqYX97+Bq42C173wpADIsMhMw1KCyTlhyF4mZdAfVyv6/8DVqMFaDQazf/ND8ttt3KFrySDAAAAAElFTkSuQmCC" />
                </GithubIcon>
                <P>Javascript</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,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" />
                </GithubIcon>
                <P>Php</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,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" />
                </GithubIcon>
                <P>Sql</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,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" />
                </GithubIcon>
                <P>Shellscript</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
        </Anime>
      </LanguagesWrap>
    </Container>
  );
};

export default forwardRef(Languages);

const LanguagesWrap = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 4px;
  justify-content: center;

  width: 100%;
  margin-top: 60px;
  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 600px) {
    display: inline-grid;
    grid-template-columns: repeat(auto-fill, 100px);
  }
`;

const Language = styled.a`
  width: 150px;
  height: 150px;
  display: flex;

  background-color: ${(props) => props.theme.colors.raisinBlack};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 14px;

  @media screen and (max-width: 600px) {
    width: 100px;
    height: 100%;
  }

  :hover {
    ${H2} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const LanguagePadding = styled.div`
  margin: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    margin: 25px;
  }
`;

const LanguageTop = styled.div``;

const GithubIcon = styled.div`
  font-size: 50px;

  @media screen and (min-width: 600px) {
    padding-left: 18px;
  }
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
`;
