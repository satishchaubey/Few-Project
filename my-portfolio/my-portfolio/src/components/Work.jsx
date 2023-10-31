import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from './ProjectCardData';


const Work = (props) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
       {WorkCardData.map((value,index)=>{
        return(
          <WorkCard key={index} imgsrc={value.imgsrc} title={value.title} text={value.text} view={value.view}/>
        )
       })}
      </div>
    </div>
  );
};

export default Work;
