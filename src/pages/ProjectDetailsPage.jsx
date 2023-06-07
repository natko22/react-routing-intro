import projectsData from "./../projects-data.json";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectDetailsPage(props) {
  const [foundProject, setFoundProject] = useState(null);
  const { projectId } = useParams();
  console.log("projectId -->", projectId);

  // This effect depends on the `projectId` value.
  // It will run on the initial render, and every time
  // the `projectId` value updates.
  useEffect(() => {
    // <== ADD
    const project = projectsData.find((projectObj) => {
      return projectObj._id === projectId;
    });

    if (project) {
      setFoundProject(project);
    }
  }, [projectId]);

  // // Method .find() returns the first found matching element,
  // // or `null` if no matching element is found.
  // const foundProject = projectsData.find((oneProject) => {
  //   return oneProject._id === projectId;
  // });

  return (
    <div>
      <h1>Project Details</h1>

      {!foundProject && <h3>Project not found!</h3>}

      {foundProject && (
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
          <Link to="/projects">Back</Link>
        </>
      )}
    </div>
  );
}

export default ProjectDetailsPage;
