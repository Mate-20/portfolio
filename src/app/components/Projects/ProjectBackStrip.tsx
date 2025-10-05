import React, { useMemo } from 'react'
import styles from './styles.logotheme.module.css'
import CssLogo from '/public/skills/csslogo.png'
import FramerLogo from '/public/skills/framerlogo.png'
import GitLogo from '/public/skills/gitlogo.png'
import GitHubLogo from '/public/skills/githublogo.png'
import HtmlLogo from '/public/skills/htmllogo.png'
import JavaLogo from '/public/skills/javalogo.png'
import JsLogo from '/public/skills/jslogo.png'
import NextLogo from '/public/skills/nextjslogo.png'
import ReactLogo from '/public/skills/reactlogo.png'
import SpringLogo from '/public/skills/springlogo.png'
import TailwindLogo from '/public/skills/tailwindlogo.png'
import TsLogo from '/public/skills/tslogo.png'
import WebcompLogo from '/public/skills/webcomplogo.png'
import SqlLogo from '/public/skills/sqllogo.png'
import VercelLogo from '/public/skills/vercellogo.png'
import NodeLogo from '/public/skills/nodejslogo.png'
import PostmanLogo from '/public/skills/postmanlogo.png'
import JiraLogo from '/public/skills/jiralogo.png'
import SlackLogo from '/public/skills/slacklogo.png'
import VscdoeLogo from '/public/skills/vscodelogo.png'
import GptLogo from '/public/skills/gptlogo.png'
import MongoLogo from '/public/skills/mongodblogo.png'
import Image from 'next/image'

const ProjectBackStrip = () => {
  let logoCount = 30;
  // Generate the leaf properties once using useMemo
  const logos = useMemo(() => {
    const logoSources = [CssLogo, FramerLogo, GitHubLogo, GitLogo, HtmlLogo, JavaLogo, JsLogo, NextLogo, ReactLogo, SpringLogo, TailwindLogo, TsLogo, WebcompLogo, SqlLogo, VercelLogo, NodeLogo, PostmanLogo, JiraLogo, SlackLogo, VscdoeLogo, GptLogo, MongoLogo]; // add more if you have
    return Array.from({ length: logoCount }).map(() => {
      const randomLogo = logoSources[Math.floor(Math.random() * logoSources.length)];
      return {
        src: randomLogo,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${15 + Math.random() * 25}s`,
        // width: `${30}px`,
        // height: `${30}px`,
      };
    });
  }, [logoCount]);
  return (
    <div className={styles.logoContainer}>
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={`Logo ${index + 1}`}
          className={styles.logo}
          style={{
            top: logo.top,
            left: logo.left,
            animationDelay: logo.animationDelay,
            animationDuration: logo.animationDuration,
            width: 100,
            height: "auto",
          }}
        />
      ))}
    </div>
  );
}

export default ProjectBackStrip