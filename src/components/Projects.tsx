function Projects() {

return (

<div className="container-fluid  mt-5">
  <div className="row">

    <div className="navbar bg-dark d-flex justify-content-center">
      <div className="text-center text-light bg-dark">
        <h4>My Projects</h4>
      </div>
    </div>

    <div className="col-md-4 mb-3 mt-3">
      <div className="card">
        <div className="card-body">
          <h5>Project 1 : Student Information System</h5>
          <p>Student Informations System where we can add and delete an information of a student</p>
           <a href="https://delacruzmaica.github.io/FG_LAB3_DelaCruz/" className="btn btn-dark me-2" target="_blank">View Project</a>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-3 mt-3">
      <div className="card">
        <div className="card-body">
          <h5>Project 2 : University Event Dashboard</h5>
          <p>A Registration Dashboard where we can see the upcoming events for the university</p>
           <a  href="https://delacruzmaica.github.io/MG_LAB4_DelaCruz/" className="btn btn-dark me-2" target="_blank" >View Project</a>
       
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-3 mt-3">
      <div className="card">
        <div className="card-body">
          <h5>Project 3 : Student Feedback Form</h5>
          <p>A Feedback Form where all the inputs of a student will be stored in a database</p>
           <a  href="https://delacruzmaica.github.io/FINALS_LAB1_DelaCruz/" className="btn btn-dark me-2" target="_blank" >View Project</a>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-3 mt-3 justify-content-center">
      <div className="card">
        <div className="card-body">
          <h5>Project 4 : Student Feedback Excercise</h5>
          <p>A Controlled and Uncontrolled Form</p>
           <a href="https://delacruzmaica.github.io/MG_LAB3_DelaCruz/" className="btn btn-dark me-2" target="_blank">View Project</a>
        </div>
      </div>
    </div>

  </div>
</div>

  );
}


export default Projects;
