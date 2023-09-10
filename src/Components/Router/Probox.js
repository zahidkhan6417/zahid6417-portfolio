import { useState } from "react";
import "./Project.css"
import {BsGithub} from "react-icons/bs"
import {TbExternalLink} from "react-icons/tb"

function ProBox({
  title,
  img,
  description,
  techno1,
  techno2,
  code,
  demo,
  scrollY,
  cName,
  icon,
}) {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <div className={`pro pro__1 ${cName}`}>
        <div className="pro__img">
          <a target="_blank" href={demo} rel="noreferrer">
            <img
              src={img}
              alt="website"
              style={{
                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                transition: "transform 10s ease-in-out",
              }}
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)}
            />
          </a>
        </div>
        <div className="pro__text">
          <h3>
            {title} {icon}
          </h3>
          <p className="desc_p">{description}</p>
          <div className="stack">
            <p>{techno1}</p>
            <p>{techno2}</p>
          </div>
          <div className="links">
            <a target="_blank" href={code} rel="noreferrer">
              Code <i><BsGithub /></i>
            </a>
            <a target="_blank" href={demo} rel="noreferrer">
              Live Demo
              <TbExternalLink />
            </a>
     
          </div>
        </div>
      </div>
    </>
  );
}

export default ProBox;
