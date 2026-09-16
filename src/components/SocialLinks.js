import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { profile } from "../data/profile";

export const socialLinks = [
  { href: profile.github, label: "GitHub", Icon: AiFillGithub },
  { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: `mailto:${profile.email}`, label: "Email", Icon: AiOutlineMail },
  { href: profile.phoneHref, label: "Teléfono", Icon: BsTelephone },
];

function SocialLinks({ listClassName, linkClassName, linkStyle }) {
  return (
    <ul className={listClassName}>
      {socialLinks.map(({ href, label, Icon }) => (
        <li className="social-icons" key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={linkClassName}
            style={linkStyle}
            aria-label={label}
            title={label}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
