import "./projects.css";
import Product from "../product/Product";
import { projects } from "../../projects";

const Projects = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Here you can find some of my projects or labs.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;