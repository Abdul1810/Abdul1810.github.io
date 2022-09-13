import { forwardRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";
import useIsVisible from "../utils/isVisible";
import Anime from "react-anime";

const Languages = (props: any, ref: any) => {
  const [autoplayState, setAutoplayState] = useState(false);

  const isElmVisible = useIsVisible(ref);

  let configAnimateUp = {
    duartion: 1000,
    translateY: ["5em", 0],
    opacity: [0, 1],
    autoplay: false,
  };
  
  let configAnimateDown = {
    duartion: 1000,
    translateY: ["-5em", 0],
    opacity: [0, 1],
    autoplay: false,
  };;

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
          Languages <Highlight>&</Highlight> Technologies<Highlight>.</Highlight>
        </Split>
      </H1>
      <LanguagesWrap>
        <Anime
          delay={(el: Element, index: number) => 500}
          {...configAnimateDown}
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
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAGGUlEQVRoge2XbWyVZxnHf9fzPKc9tIyKvCSSTaYDIrLMIGQjxM2YTeM0fNnUzISYEbOWDVpoN2xdB3ugtryVlh6g2ZzJXmTT+ckPMzGLRuPsNJqI2RZE0TGiySBIw8vKOT33fV+XH07L2p4yBtHWD+eXnE//67nu639d93Pu+4EKFSpUqFChQoXrRqZ8xVxuVlXgxyZkzewVX5M9QEODu950yX+ztg9FCLUm0TEXyXczPlqfuTT8K3r6TgADzhVepLX14rWki/5HZV6Z5uZ3xbiQmK1wLY19rrnpc64q3gwMZ+LqV+K9PWuuJd3UGwCKNdlO8WzATGjfsJB/HbvHtWx61kX6ZZB7kz09nZhN/fa+FjL79jcke3q+BED7hoVjtWR3z5Zk177eD5NnWiYA4ERfMOMbAHQeOjlW860tewHind31V8szbQZoaclHom8mu/fdPZnsZ8/8Dqrr2Lnz5g9KM30GAHfzxw+a2gOTig0NTtA09vLYB+WYVgOcOLHI4MiVZP9466touIOurjlXiplWA7GPPhOH8KcrBogYQfuTgmu8Usj0ToCQoMHo2L002tHVMmlEFF5UZ/fR2lo3mT6tBqJgf1Xj1sS7B/HhWzT3zCgLStOiWNgvJM/S1rZoojzNh4VJvLXjOcw+gbHXLHxWu3ZsnzS0pW15FNlaVL3Oqn2SNC0AxFNabxnbsdWf/3NEOB+6tr8crb7rJlt9V57XfzNYFvq7356y1wdetVV3vBMNFbfaylXH+ePvB///justWxZTW3uSNC2WaRual0ViXwW5xeBGm1u3RjI9udvF7OuK/NuLz9HSkp/4XNLTc6cg9xPk726o7gek6wpXq8NSIm6q+xpmqxCpVR1VFIzjcf3F7uJTdStFeEDQGxTAQAExBon0peqGoTcLT81cb8pysWhvzbFvrwfma3X8MN3dQwAJpj8zY65gJBbN8zD+4Nidu5EQfm5YDWZkas4VHXz/agbcglmH8fpNTPpNwi8ACCMWhDP5g9mFQcMAkDfjCYTTBFBsAUKneTafO5D9dNHpFzHuA39Y59S1RWfP90oxPG+PPPIg/f3vJaY2F+wsxmmgnlxuB01NFy53H7cRpQbkDbDbDJt3teIBvNO7DaMmGdosDZR9sJzvq/kKqlWY/aRuU/7gWG1wf3YZyEOGrAwWACEYkKZeoZGmplujJLtJ61sPJpRmayLWZypPZy4V1znoAyA9NBPN1wOnQF8yuM2AaGf3ejG7Xyza5dsf/eXownHnnn6ExcHc2qLvdABDrvajMHR6ooFgIdIgIPiJWjFYXswws9gQQDHT9wNyubcU3qK5+ZMJaoDhhodeiKtqOww2kqYHSFONMkPrTJltQjsqwyIGCBF+iZncYxKeH19VuB1YQWRZ53U70DuM/eFMd/XfRpY3M/6SxNGeYlExFKWcUFRMQBGEgJVKLKe39+3IVDE1SNOCmD6D6qI4k72XNI3ErAnVS4p/GnUQAngP3iB4cGF8Qu9LvzzMe7TwzLlMYU5RbY1z2hactvkQBlzQpsKw6x/2HhcUH0JZXUU1K3olhEDRGc4b3pcNCoDSFrKSPY8/FAfZAtYYU5XBu0UgB9jafpat3wMZbYOOdGTCv3AIpVxSWmxxE8NQfGNUfqeDSypxasZsALucZzzOqRmjbRfMIEw2KiDB+8sGaG9/lyc6XkZ0rcBCMwuBuPQ+6GicAbxHaY9+bPwEXCmkvKkAFJQlUtrLZzTYWSJAWPHPZmYUssx0GX4ELPCqQyWDnBHs7Mjjy4DXJjHgxnUhMNwRe/mCGkvAdrMr/cdIW0bCDB+qclFU/BRmT0aPtT4OYphh3s8qNc1zdBvHgXHXYA1kMfspgY1Luzh1dBs7xWi4eAODQB6oBmpGih8g4rXI87YJtyD0Ht3GHhj/0gttbbMpZI396bkJ5oSx1hobq6mtrSGbzY/eQwBoba3jgkRU6fyI8GvM5msYnn9k3qEQF97fYyGLLU+ZuAYAx1Nm5Qula01VlhlBOSxwpxgPLe3gudG4IykfGZtztMhrJmps7gQeLhOMkxJZT8jt/+H15K1QoUKFChUqVJhi/gPU8hhrxluxkgAAAABJRU5ErkJggg==" />
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
      <LanguagesWrap>
        <Anime
          delay={(el: Element, index: number) => 500}
          {...configAnimateUp}
          autoplay={autoplayState}
        >
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                <svg width="48px" height="48px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#e2e2e2" fill-rule="evenodd" d="M256,48,496,464H16Z"/></svg>
                </GithubIcon>
                <P>Vercel</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEzUlEQVRoge1YXW8bRRQ9d9frxknsxKYkhgQS54FCQRVRo9hOQnksqlB/AEJ8SaBKSE7TNqVN4mRoKqACpVQC8UJpQZQHxEMFRe0bD5VwxYdUECKiLQhI2xhK4jhRnPpjd3iwLDnxzuz6oxISPm+7586998zMzhwbqKOOOuqo4/8MKn549dLRC+DYKQr+7eICbl5eMeVUTeFtj7ge/Wj0xI+ygs+8Obzt75/WLutZg8z4zu0t6B7wihNwfDk1MPFk4VFZzyn7AGRFY7uCXjibVFNOzxp0e8H4VNY8AKz9o58VNe9sVHFfX4tseEYx+P7iF+sEsNDYzxx4TzRadSq4PyiencTc2pZnj408L+Kfe2Pfi0vX0wER3z3ohepURDQ48HZ0KPpL8buS6E05lQG4JUri39oMd5tTWCF5M32CMVaSl33FHIkbt4+Dc9OhHn8D7t7SJGwewF8NmuO1jS9LCh1+7HCCiCaEaQgIPO4DkekuwOqtjPtXR/Ldje+vXVw6mVrImHdIQM8OrzAnABCng4f6DiUtBQCAEcy+D9C3omQefwM2P9AoLLb4e+qlPTMjHYXnPTMjHYk/154Wxbc/6EZz+yZhPoC+N8LZj80YUwGMmME53wvAfL0BdA/6oGrmM5ZJ6crSov5Z4TmxYHyeSemmtVRNQVe4VdI8DIL+MiNmmJHiNQPAYtNnCPSUiJ/7Lok/YglTjlTCPb2tOx061+Z+SJ7jhvlcBIZ86Oj1yNo4NRWeeEFEij95ACD9FQCrIrqj1wNXi8OU4zrH6o3Uh4n51GlR865WDfduc8s6WOZqbkwWIBXAQuw6QK8LB6uE7iGfcHxyPu1fiWc2i/ieHT6QKtkEREdYP4vLepSvAABvwv0WgKsi/q6eRni7XFZpSuALWI675l10v2OVx1JAZFckzTk/KIsJDPmgKNLPaR1IJQQGJXYhHxWJ7IqkrXJZCgAANhA9S8AFEd/o0+CX7+V16Oz1wOXVhDwB56bC4+ft5LIlIJ+UW/ikVqFPKoazSUXndrnfMRRlvyygGLYFRMPRWU4ouWELyPsk6XkOAOgekPsdgB9nwbErdvuyLSCP3BQA4ang3yq/Ue34HU56id+RoSwBLMSWAT4pDJB5Ght+B4TRfA37KHMFAB7ST1r5JLNZbn+o2cLv4NJkcNzU78hQtgBGzCCDhiHzSRv2uepU0BWSHpsG5xgmImFOEcoWAACTg2MxAJ+I+I0njdUJxQmn2cDEN5X0UpEAAOBq7gAA4X4tnPU27ogVzSH5/WGBigWwfhYn4JiIz9+2PstbmgA23jc+X2kfFQsAAMOTk/okX8Bl5XeutiY8wrvFDqoSwB5mGRBGK89Aw3b8jjRDNYMLOBI7ep4DT5Q57Iup8MTuamtXtQIFWPkkE2S4ohyoRe2aCIiGo7MAWXr3AjjHTDl+R4aaCAAATlkGiU8qQhxKTvgrr1zUTAALsWUCRa3iiKhsvyNDzQQAgBHKfgBAfKMSj0WDY2dqWbOmAvI+SRH9n2Rwg/ZW4ndkqKkAIO+TOLjZLJ+q1O/IUHMBAABVH8V6n7Ts0Ky/j0pwRwSwfhYnQtFJw6vyOzLcmRUAYLhzMwCuAJj1a22274j/FFhsejf7erpci1FHHXWUgX8BcmVo3cljsxQAAAAASUVORK5CYII=" />
                </GithubIcon>
                <P>Vue</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,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" />
                </GithubIcon>
                <P>Postgres</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEIUlEQVRoge2ZTWhcVRTHf2dekjYfJvRD0CTVVDraRAsqFUrb2AbBjaAbxZUgrSBSbFqKzcKvyUIQBNuIUISIWdTNrFy0i0JpqbaVQrZ106WSVmo/Uk1TE2dOF3cmfe/lvbx7X+80CP3DMPPeu/ee//+dc+499w48xP8QOsGrOsE1neCV5eZSyNnvNWA1cFhLucfwgrzGB2rfz9HH277I5EFeAf2h36P6Hc0+yOSBswA9SifQHbpVpIV3/VFyg7sH5hkAJHJPKGmZVk+cnOAuQCLhU0c3M7wfvqGK6GFO6SF+ykvOBr4EgPCxfs8jC9eHeAtlCHhDv2ZHXoJZcBegCzNQHGsJ2AugZQKEUsjK57nYWSDPLJTsAYOPdJzVTPFepJ0ytJQXVBE9x5f6C7/rr/S5kHESUEvUpQx0UWAE5ZMES4leUEU4xxjKCEIvFbdwc/PALBsz+/zFASr0Lma62AtaJuA848CHoXZFF0puAqpLhg9UgCsEzKRaW/CClgno4QeUXbE2T7tQchOQNgPV8SdGxI3adxw1L+hFWuimjPJOQhsnDzS5NEYYQFOezQNXF0jAP0BXQruAUW4wDbyeMlJRFRFJtRSBmwBdwgOXgWro+ibQAQShewWgmJmk7VygB/jDhpJ1CNUKtg2JD/8Frsc7ALdilopAp4Wxin0e2OdAM0VIqTqnINHhtzC5EADPYEceQBshoJASPreB6VQiMIMh32FtySmR7QWklRBpbx9gJbAZaLe2Umdl7QH7JE6aQv+ufZLQCuzE7c3X0ZAQkpgHFDPzJKGd/OQNntJJu12elQAtUVj0Vm5C4orbwf2SB2hilvU2De080Md6CO24FLiS0K4TQ77NatQsZlaJbCcgnsDXgDuxNqsw5H1tLC3zwE5AOIGrmJonjFXAILDCjpslrDxgOwvdE3AVmAs9WQtsJ22Jyw9LD9gKMCFUIfr2H8WQd6uo7CCeQkgVwayl98plgMcwYdMI8ga9eiJ7CczOgR/pAboi5fLjwDailaZ/CG0pxWMI2QL+q4VPvVx+Athq1dMHMsMoOwCEfu5gyuU+4CWU+Mlco2BRE2ULqNLPFGYn8PwDJA9WVWm2gNvspJsqzyI8SPIGHjywhlZ6l+1PjEwB2cR62A1c9MHGCcIlNPvYPlOADHKSlbyAso/0vZdPzKCMMs0mGeRYJj+XkfUCa5jjM4Q9+F8FFOEocxyUocRaNxG5klJ/5kUKjGEKCR+YpMCwbOW8a8fcs4oqwlneRPgKeDLnMJdRSmxnXCRyqmSN+54WdZI2ZjmIMILZxttgHuUIzXwqWyKnR87wNq/rGdbRxBeJ551RnKTKsLzMbz7sel+Y9CxDwBiwKWbpErBftnHcp72GrKx6miZa+ABlGAhQvqWVb2Qz842w9xDLibtqWvbN1ZrtxgAAAABJRU5ErkJggg==" />
                </GithubIcon>
                <P>Firbase</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,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" />
                </GithubIcon>
                <P>Azure</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <svg height="48" viewBox="175.7 78 490.6 436.9" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/><circle cx="420.9" cy="296.5" r="45.7"/></g></svg>
                </GithubIcon>
                <P>React</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,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" />
                </GithubIcon>
                <P>Mongodb</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEcElEQVRoge2YbWjVVRzHP+d/dzfNh/k4bCZKpBLL2nIlLRPMamwtzaIxxzRNmVEp+S4KCnpRL4LCpIdhiYLOcbEs5/KxCGYOcjgrl6UplsxkZHOjzLvtnm8vrru7d/fB3YcNivuF+3C+5/A/n+85f/7ndy+klVZaaaWV1n9YJuVXbG3N5NKoO3AxHWvH4CCs6UK9F7jcfZLyvO5UTpeaAB65mHyuApkq0INAZn+nQIFGD+hrZHYw7kothYU9yU6dfICvTs9DzsdAXmhHCHi/1/dhOI/PrKd4Zn0y0ycX4MszyxEfEX3F+72gj5CG1XtM+ntDoruReIBDpx8FPgMyAkDxgAd/FfUo4ylKZ3rjxUgswIFfcjC+VmBSTMgbgYd6B/D98wSPFV6NByWxAPt/2ozRGsAiDgJNSG04TEHMQSwGRg4KPLgpHSHLW8bDhZ1DF6D+56m4feeQOYJ6qymdczZszOFTE+mx7yAtHxR4aMgWbG8ZS+6+GJWhoSUfn1OL0cr4A+w7NQPpcf66fRPlxhdzbMP3LyHzBih0npiBBNABeh3HtY2yOzsC/btbZuDwHJh1SL+TfWVW6g+ygdpzYi3GvA84gwAf4MsHtAHtQC6QGzR2FUvnbh36AACfn6gCtoJcoYCBt1Dpht4hls4txhg5qaOMoSX525GtQLqGBFZgLcj6wfpe1l73gzwN8OBH8C3DGMFQ1EKx9EnLPeCrxXBbiB9pxSOeKzRiKaf83kt9xvDsQJ+eLDhGJndh7WtIHTFX3AZ7asfaF7nsLAqGh+HegWB5jo7EcUoRxWAKQNMQ2WAMqBP0KzLHcdjHqD/3U1oa8ZSOHsBzdCQZWSWgEqAAmI40xt+pTjAXQC0YHcTtaoj3BE2VwgPUNLuZyDqMXgYmAoO5RzuAjYxwvTXcQUIDeI5OxcnwAEV+I0qBFr1oO4tRJeVF36YeNbL6A3iOT8b0NAKzEwAP1jWk5Sy7f1eKWSPK/xSSDHh3Ijs7/Alw/XkdzQv3RyDVUftN1XAE8O9AXdMa0ObrnoCLSG0YpiBuCQSNvOJRfFnE81Qt+HAowPtkqGl2M9Z7BshB2kgGH1A+/7fAiB2N4zHmadCrwPg4634h8worFrwZk8LjcXE1Zz3SblYtPB9fgJ2N85DZgqNKKh74LurInUdy6bV7MSqIxBqz7jdsx8UGKhf+EXbdbYdnIacGdB8+362sfiR6GR0xQDzyHMrG694LzI9Sy4d7gaauAXuQOYlj27HmZqAItAj/LVrDqoeejYsn7gAANfU3MWL0p6DiQYKHXyPcb6cnI4+1EXboBkqslHj3iyzGZnmAxREhBw8OogejJawu3pcISuK1UE2zG3fH28ALMQEhykkOSF6klVSX1CWKkXwxt+VAGTKbkGaE9UUD90/9A7KrqS45lsz0yZfTzxTvpXfCLNAKrD2I1B3042OgvIgGMBW0NeUnCw9DUU57PJl0jc7DmmkYM84/i+nCmvNoQitrk/8/NK200korrbT+N/oXJ84utH7CpIYAAAAASUVORK5CYII=" />
                </GithubIcon>
                <P>Tailwind</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEcUlEQVRoge2Wf4hUVRTHP+fNrLrm7K4LapiB5R9Fu82kM6ubBrUUEUpiLRrYDyVKa6NsVoq0kE0lqGhnTMl+EIYUhRn2QyKSsF+abjOyvnWLMEo2wQJjnXVtdXbePf0xd9Qxdx1/1R+9Dwz33XPPvfd77j3nzQMfHx8fHx8fHx8fn/8rcjpjJN18l6q+B+DGEhJJPb5OkfmF/r8p8Ew4/7WA8yVYipNRcQU+u9hizoWSAuioSySAxEXWck4cD2DirsXXGKO3GXSUMTpOTsr0yPfNa1R0LoAbS1TXdDaNcI4OnSuGOxDGAyGQPUa8J/dEV7nh1KIp4MxGiKFcChoC6UL0i56eqpX7GlqOFtaubWueKgFzn6jUAdUAAhmFvUZ0WZl4B3Mm8JQg04ExQLeKbpF+b6Vbv3p/EEXC6XjSM+ZRIK/7lDI16HCBkYW+89fQehFeK/bTyxx1RgOTRAP3qugjaGFMAMaiUl8RyoSARWiLE05nVoM2ocUb5qfpKDyn13Nkp8AVJw2PFJWFBIOzJu5aPMWJpOMLgcfsLl2gaxG+GuzaAmgf6HqEmQHHqUE1aYeuPsXVoDJPhDuB/dbWCBBOZx4CmvLh6RZUZwOfWp/DiNPoOGYJJ8S/isj1wCu2P8Yz3nJH4WFr6C7DibqxZJMgawcLoL0uuc2NJuerR4+nZoYINXao/BRXdeta1++OJjaJHhc3xrYP2va3kYerprt1yY1AF4CCutHWHSC3W59DXnnlIjfausMrr4wDh/JmuTUIXGU7benYSwcHE16gNvXEBCfd/yEOtSjo6f9OijAixySfHIW6s/uy68uGlhyACDlVkBM+hWAPdNa0ZAE6a1qy4VT8AFAFVDuALSgdNdDmjhQnqYi3FKQW2IvKPBXuP2ME/0C7AQTGH7cYzdnHMgCFwoGOi6YWDAew7eXWvj8IbAOmA5OuTcWfUYLvov2jT65kxRlqS8vWl16Z31zaMr0VG6pCh242JdxCMdIOjFWIhFPNbyi6VeE6KQSgiKTZTD7VQlkuWRdOx9/OKvcIjLDCPnAco08DvfY0Vjjkflbk5eLD0hH26QiAI9KWn693V4QyfQbZfJbqAbOcE7f/gMA7AjfZwWMI6pngMuBXq20OyscCc6yPW+7lVjrtk5Pt4klUlXXAPiAL9AFdCp/nD6uQi9oDENTeZ1GeA3YAe227WdC3AIzon8Av9pdfQkyRzY2t2gk6TWED0An6LdBh3bsBOie/+LuXJabICpTv7NxvBJZQFpi6s351zxnvvWZ7vDowhD+AICpfu3WtN5Z4xGdNOB3fgnIL4LqxRKSUOYN+Sozf2jIsOKTnTUWDACJ8dAF0AhBJNW8y0CGqP6iIJ5gGKx5EPyl1nQEDiKYWlGXJbFSYASDC9tywijXnrdyi6ASBWQjkX6/5ZBDYfbRvyPOlrjPg53Q69np/R7Rypog2gizNDatsKLyLLwSCvg/8SP7FcAToUFiuZYFpP93wwuELtY+Pj4+Pj4+Pj4+Pz4D8DUmtqDiE44CsAAAAAElFTkSuQmCC" />
                </GithubIcon>
                <P>Django</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAHa0lEQVRoge2af2xT1xXHP+fZ+d1CEiiIioLt8GvTNLXKpq1aJdp17VYJNlUq6SbiQIC88GMwfnXq1LRKEd0G7ZqW8iPGpHR2QtWkXaeOsXUVo5XKOq1j2thQywa2Q1NQ10LQNghx7Hf2R5zkEeyQl9jqP/1KT3nvnHPvOV+/++6959zAZ/h0IbnqeM4Bc3LC4l5URdT1xuma5n/nwk/WCUxv31Dk7r28TtAG4IaUOI7QnN+baDi5/Pn/ZtNfVgl4Q/ULMXQHiieDyVmQx6Onp+2jsdHKhs+sEKhoW1FpWfIsyNds4qRCSFALZCngGlAo/MEQXR+pDr47Xt/jIjDngDm5z+JRlDX2AIG31ND1scXBvwJ4DpjzjCRPK9xns1GElw2Xe9Pp7+3+YKwxjIlAZcDMO1+sqwXZAkywqbpAHolWB8IIOrydN1S/UEWbBCps4ksCT1mJ+E9jtS9ccRqLYwK+n9d9Qw3ZAXzOJr4s8GS8oGRbV1VTz0jtM5JXPkCkIeoPhJzEM2oCIw0DJPlQdHFLpxPHM8PmNAMagRWAMRiQckTVWh9dsu/4aPq5LoEZbavKXJpsRFkNuG1Nj4nq+kjN3redBD4c/ROA8Qxwh01sIbS54n2bTi3b//FI7TMSuPNIo7uz69wy0K3ATTbVOZDGbE6FKOINmw8gPAnMtGm6FdlWUnCh6URVR3zUBGY9X3tTMi/vEPAlm7hXlaaSQvcTJ6p2/y8rgQ/D1JC/pNgofBiVTUCRTfVu3Mq778Mlu84Pb5OWgDdc3wq6eMhIXk0YxuYzi/dEsh/2tfDsX+mRPGs7yqIhqYai/uCS4bbu4YKU8YLUTY+ILIxUBw7nIM6MiNU2x4AqT6huvoj8GigB+XY62wwEmAigQiSaheA9B8x5ktQvglGqqoUickXhTMKSv3ctaf4wI5Ga4FvesPkv4Fag1AmBUcMbNv8EfBn4z8zpN096867GBADti1y+3jLTgk2SpKJ/tCoi9P8F8gzFG64/Jlg/ifiDr4zFv3F9k5GhUJ66nRCLxdxDwZd3KOwetuqm66FSkZe94bqfjcX/uAmkgy9eWq/o/UMSPQo8JqLLVeS7qrIK9GnAtvjJRl9r3YLhfV0P4x5C6aAqNbbHH0f9wUfS2VUGzIe7i+WlAbKqrAMOOvGVkzcAzBi4sSzJGNCx+r19ivEjGNj4yVdTn8eokRMCAt2DDly6oeLF1bdkso3695xUdIOg21T0Kae+cjKELOU1ET4PgLLISiQWpabD48BJVN+31PWPG4rOnzhR1RGP+YPPDjauduYrJwR66NlaLEXzUW63iWenLhDBEIvLvWUJb9h8H+S3BonAaX/LKae+cjKEPqoJXyq/xHyFlSB/BDJt+tzAF0A3W7je84TMdU595eQNQP8HCgSAgGf/0kIx3HMQYy7CbIVZqfXhNuDGgVhEaPK11r3jJFfOOoGK0MopFtZ8AEt4u9O/91wqVTyeugYxa8faAqv8yj2qsov+mcsAeQAYNYGsDyFLrCqEdoT2VMaVEafWPdcbqQ4eRCU4IFOY5sRf1gmIin3LvXBqyF8yikZDSYyFowpe1gnEC4uPAB+lHqcVG0VvVIRWfP3OI43XDFfP/pUeT2vdY0DtUEDWISf+sv4NdFU19fjCdWsUaQcMlNstMQ53dp3FGzY/Ac4ruAXKwSpDbQuv0HHav+/3TvzlZBqN+IOviOh3gK5hqsnA3NQMVGaTJ4CdxfndDpexHE6jkergwcqA+Xp3kSxU0btAbwOZQn9iIsAFVP4phh5NWtZLnTX7omPxk4nARaBUlApfa92CSHXQ0Q5xAKm14BepyzG8rea9KHNSj93pbNIOIRH5Zeq2UFV+5Q2bv/EcMOddY9ifYA1W1ybF85NjCXQ4fG31s71h8zWU14FiAFVeTWeb9g3E8xOb8nqN2bZq87ckyd2+kLkr4XJtObN4TzeAL1x/v4oO1Iw+Sf3iY8as1rUTktrboJb+AMgf0uhRy+XenK5N5r13+yKXN166DJWtwBSb5hJwmP5q9D2DjoSOaPXeqjFF3thoeH3nahF9Aphq03wM0hAtuNBCVUfat3vd5MHXbk7UKzyKsJarfpWr0Avylag/8DensftC5h0q8gxopU3cp7CTRHxLrPaFiyO1H3X242urn43FGkWrgUk21XuKsTrmb37TSeAVL66+RROJ7QoP2uNQ9JDg3hj17zk5mn4cl9dn7VhbkJzYMxe3q9SwEmed7uFvDpjFhcX8UOEhUh9oCidFZWOkJuBoJc7KEdPclmU39uW5V6iwVFX2xCLT9l5T+FXEE657UJDtCPYU86IoW8p62DmWSWDcBLxty2diuf5M/yo70OlfkpZ8v3NJ4B3IWEJPAi2uvr6G65XQR0JW3sCMtlU+l5VsAuz1SwXa6D/kq+bqNeeqM7TxIKvHrL7W+rtR3aGkEvprMeIZ2liQ1c1cpDpwuOwytyq6HrAfaF8WeLyvoGRO1B8IZSt4yOG/GkxvX16e3+v+pqWWJgqt33VVtVzIla/P8Gni/yulzlOAkfO+AAAAAElFTkSuQmCC" />
                </GithubIcon>
                <P>NodeJS</P>
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
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    margin-top: 25px;
  }
`;

const LanguageTop = styled.div``;

const GithubIcon = styled.div`
  padding-left: 1.6rem;
  font-size: 50px;

  @media screen and (min-width: 600px) {
    padding-left: 1em;
  }
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
`;
