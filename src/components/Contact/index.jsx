import { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_k7ygqsn",      
      "template_srkzq65",       
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "S7pa0zFgHuoHV4sw1"        
    )
    .then(() => {
      alert("Message envoyé !");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.error(err);
      alert("Erreur lors de l'envoi.");
    });
  };

 return (
  <section id="Contact">
    <div className="contact_container">
      <h2>Vous pouvez me contacter via ce formulaire</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Nom</label>
        <input
          id="name"
          name="name"
          placeholder="Nom"
          onChange={handleChange}
          value={formData.name}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          onChange={handleChange}
          value={formData.message}
          required
        />

        <button type="submit">Envoyer</button>

      </form>
    </div>
  </section>
);

}

export default Contact;
