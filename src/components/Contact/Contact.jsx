import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const publicKey = "_kWJ6WVQF-c1HGaYJ";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_br9gai9",
        "template_d5p7mzo",
        {
          from_name: form.name,
          from_email: form.email,
          to_email: "kyrillossameer770@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => setStatus("❌ Failed to send message. Try again."));
  };

  return (
    <section id="Contact" className="section py-5 px-5">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-gradient mb-10 text_p"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
            required
          ></textarea>
          <button className="btn btn-lg w-full text-xl">Send Message</button>
        </motion.form>

        <AnimatePresence>
          {status && (
            <motion.p
              key={status}
              className="mt-4 text-lg text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
