import { useState } from "react";
import Nav from "../components/nav";
import Footer from '../components/Footer';

let Contact = () => {
  let [form, setForm] = useState({ name: "", email: "", message: "" });
  let [status, setStatus] = useState("idle"); // idle | sending | success | error

  let handleChange = (e) => {
    let { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      let res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  let inputStyle = {
    width: "100%",
    padding: "0.85rem 1rem",
    marginBottom: "1rem",
    background: "#111726",
    border: "1px solid #262f45",
    borderRadius: "10px",
    color: "#e6e9f0",
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    outline: "none",
  };

  return (
    <>
      <Nav />
      <section
        style={{
          maxWidth: "620px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
          color: "#e6e9f0",
        }}
      >
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Let's build something with{" "}
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              background: "linear-gradient(90deg, #818cf8, #c026d3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            soul
          </span>
        </h1>
        <p style={{ color: "#9aa3b8", marginBottom: "2.5rem" }}>
          Tell us about your project and we'll get back to you.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            style={{ ...inputStyle, minHeight: "150px", resize: "vertical" }}
            name="message"
            placeholder="What are you looking to build?"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              width: "100%",
              padding: "0.9rem",
              border: "none",
              borderRadius: "10px",
              background: "linear-gradient(90deg, #818cf8, #c026d3)",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: status === "sending" ? "not-allowed" : "pointer",
              opacity: status === "sending" ? 0.7 : 1,
            }}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p style={{ color: "#4ade80", marginTop: "1rem" }}>
              Thanks — your message is on its way.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#f87171", marginTop: "1rem" }}>
              Something went wrong. Try again in a moment.
            </p>
          )}
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;