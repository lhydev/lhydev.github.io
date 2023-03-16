import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
DiAndroid, DiAngularSimple, DiAppcelerator, DiApple, DiAppstore, DiAptana, DiAsterisk, DiAtlassian, DiAtom, DiAws, DiBackbone, DiBingSmall, DiBintray, DiBitbucket, DiBlackberry, DiBootstrap, DiBower, DiBrackets, DiBugsense, DiCelluloid, DiChrome, DiCisco, DiClojure, DiClojureAlt, DiCloud9, DiCoda, DiCode, DiCodeBadge, DiCodeigniter, DiCodepen, DiCodrops, DiCoffeescript, DiCompass, DiComposer, DiCreativecommons, DiCreativecommonsBadge, DiCss3, DiCss3Full, DiCssTricks, DiCssdeck, DiDart, DiDatabase, DiDebian, DiDigitalOcean, DiDjango, DiDlang, DiDocker, DiDoctrine, DiDojo, DiDotnet, DiDreamweaver, DiDropbox, DiDrupal, DiEclipse, DiEmber, DiEnvato, DiErlang, DiExtjs, DiFirebase, DiFirefox, DiFsharp, DiGhost, DiGhostSmall, DiGit, DiGitBranch, DiGitCommit, DiGitCompare, DiGitMerge, DiGitPullRequest, DiGithub, DiGithubAlt, DiGithubBadge, DiGithubFull, DiGnu, DiGo, DiGoogleAnalytics, DiGoogleCloudPlatform, DiGoogleDrive, DiGrails, DiGroovy, DiGrunt, DiGulp, DiHackernews, DiHaskell, DiHeroku, DiHtml5, DiHtml53DEffects, DiHtml5Connectivity, DiHtml5DeviceAccess, DiHtml5Multimedia, DiIe, DiIllustrator, DiIntellij, DiIonic, DiJava, DiJavascript, DiJavascript1, DiJekyllSmall, DiJenkins, DiJira, DiJoomla, DiJqueryLogo, DiJqueryUiLogo, DiJsBadge, DiKomodo, DiKrakenjs, DiKrakenjsBadge, DiLaravel, DiLess, DiLinux, DiMagento, DiMailchimp, DiMarkdown, DiMaterializecss, DiMeteor, DiMeteorfull, DiMitlicence, DiModernizr, DiMongodb, DiMootools, DiMootoolsBadge, DiMozilla, DiMsqlServer, DiMysql, DiNancy, DiNetbeans, DiNetmagazine, DiNginx, DiNodejs, DiNodejsSmall, DiNpm, DiOnedrive, DiOpenshift, DiOpensource, DiOpera, DiPerl, DiPhonegap, DiPhotoshop, DiPhp, DiPostgresql, DiProlog, DiPython, DiRackspace, DiRaphael, DiRasberryPi, DiReact, DiRedhat, DiRedis, DiRequirejs, DiResponsive, DiRor, DiRuby, DiRubyRough, DiRust, DiSafari, DiSass, DiScala, DiScriptcs, DiScrum, DiSenchatouch, DiSizzlejs, DiSmashingMagazine, DiSnapSvg, DiSpark, DiSqllite, DiStackoverflow, DiStreamline, DiStylus, DiSublime, DiSwift, DiSymfony, DiSymfonyBadge, DiTechcrunch, DiTerminal, DiTerminalBadge, DiTravis, DiTrello, DiTypo3, DiUbuntu, DiUikit, DiUnitySmall, DiVim, DiVisualstudio, DiW3C, DiWebplatform, DiWindows, DiWordpress, DiYahoo, DiYahooSmall, DiYeoman, DiYii, DiZend,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiCplusplus,
  SiNintendogamecube,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNintendogamecube />
      </Col>
    </Row>
  );
}

export default Techstack;
