import RecipeBook from "../image/RecipeBook.png"
import CodepenClone from "../image/codepen-clone.png"
import ProBox from "./Probox"
import './Project.css'


function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="containerr">
          <div className="project-content">
            <p>Projects</p>
            <h3>Each project is a good piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Recipe-Book"
                img={RecipeBook}
                description="Recipe-Book is an innovative web application developed using React, designed to bring the joy of cooking and exploring new flavor to users. With this project, I created a user-friendly platform that allows individuals to search and discover an extensive collection of mouth watering recipes from various cuisines around the world"
                techno1="React"
                techno2="SCSS"
                code="https://github.com/zahidkhan6417/Recipe-Book-using-React.Js"
                demo="https://recipe-book-by-zahid.vercel.app/"
                scrollY="-83%"
                //icon="🚗"
              />

              <ProBox
                title="Code-Pen Clone"
                img={CodepenClone}
                description="CodePen is an online code editor where you can build, test, and discover frontend codes. It has a large community of developers sharing their work and learning from and supporting one another. CodePen is a robust IDE that allows you to create, test, and find frontend code for any project."
                techno1="React"
                techno2="CSS"
                code="https://github.com/zahidkhan6417/Codepen-Clone-Using-React"
                //demo="https://coindom-crypto-search.vercel.app/"
                scrollY="-74%"
                //icon="🪙"
                //cName="reversed-proj"
              />
            </div>
          </div>
          <h2 className="new-projects">New projects coming soon.. 🤠</h2>
        </div>
      </section>
    </>
  );
}

export default Projects;
