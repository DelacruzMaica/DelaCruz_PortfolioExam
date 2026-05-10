import { useState } from "react";
import emailjs from "@emailjs/browser";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });


  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.comments) {
      setStatus("Please fill in all fields.");
      return;
    }


    setLoading(true);
    setStatus("");


    try {
      // MongoDB
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });


      // EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.comments,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );


      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        comments: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }


    setLoading(false);
  };

return (
   
<div className="container-fluid mt-5">
  <div className="row justify-content-center">


    <div className="navbar bg-dark d-flex justify-content-center">
      <div className="text-center text-light bg-dark">
        <h4>Contact Me</h4>


      </div>
     
    </div>
   
    <div className="col-md-4 mb-4 mt-3">
      <div className="card">
        <div className="card-body">
         <h2 className="text-center mb-4">Contact Me</h2>


              <form onSubmit={handleSubmit}>


                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>


                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>


                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="comments"
                    className="form-control"
                    placeholder="Your Comments"
                    rows={5}
                    value={formData.comments}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn btn-dark w-100">
                    {loading ?"Sending..." : "Submit Feedback"}
                </button>
                <p>{status}</p>
              </form>
        </div>
      </div>
    </div>

  </div>
</div>

  );
}


export default Contact;
