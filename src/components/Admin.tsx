import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Contact = {
    _id: string,
    name: string,
    email: string,
    comments: string;
};

const Admin = () => {
    const navigate = useNavigate();

    const [data, setData] = useState<Contact[]>([]);

    useEffect(() => {
    fetch("http://localhost:5000/contact")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);


  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);


  const handleLogin = () => {
    if (password === "admin123") {
      setAuthenticated(true);
    } else {
      alert("Wrong password");
    }
  };


  if (!authenticated) {
    return (
      <div className="container mt-5 text-center">
        <h2>Admin Login</h2>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-dark" onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  }


  const handleDelete = async (id: string) => {
  try {
    await fetch(`http://localhost:5000/contact/${id}`, {
      method: "DELETE",
    });


    // remove from UI instantly
    setData((prev) => prev.filter((item) => item._id !== id));
  } catch (err) {
    console.error(err);
  }
};


  return (
     <div className="container mt-5">


      <div className="d-flex justify-content-end mb-3">
          <button
            className="btn btn-dark"
            onClick={() => navigate("/")}>
            Back Home
          </button>
      </div>
     
      <h2>Admin Dashboard</h2>


      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.comments}</td>
             <td>
                <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(item._id)}>
                Delete
              </button>
             </td>         
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Admin;