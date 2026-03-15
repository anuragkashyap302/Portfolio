
import { ToastContainer, toast } from "react-toastify";
import React, { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/motionVariants";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_39b7kei",  // Replace with your EmailJS Service ID
        "template_b562fk4",  // Replace with your EmailJS Template ID
        form.current,
        "CH2htUUHR-QwzqR9K"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  const formFields = [
    { name: "user_email", placeholder: "Your Email", type: "email", icon: "✉️" },
    { name: "user_name", placeholder: "Your Name", type: "text", icon: "👤" },
    { name: "subject", placeholder: "Subject", type: "text", icon: "📝" },
  ];

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans z-10"
    >

      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl font-black text-white mb-2">CONTACT</h2>
        <motion.div
          animate={{
            scaleX: [0, 1, 1, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 origin-left"
        />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you—reach out for any opportunities or questions!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 w-full max-w-md bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 relative group z-20"
      >
        {/* Animated gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-100 p-[1px] -z-10 transition duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950/80" />
        </div>

        {/* Header */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold text-white text-center mb-2"
        >
          Connect With Me
          <span className="ml-2 inline-block">🚀</span>
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-center text-sm mb-6"
        >
          Send me a message and I'll respond as soon as possible
        </motion.p>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          {/* Input Fields */}
          {formFields.map((field, idx) => (
            <motion.div
              key={field.name}
              variants={itemVariants}
              className="relative"
            >
              <motion.input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                onFocus={() => setFocusedField(field.name)}
                onBlur={() => setFocusedField(null)}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-4 pl-12 rounded-lg bg-white/5 backdrop-blur-sm text-white border-2 border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 placeholder-gray-500"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                {field.icon}
              </span>
              {focusedField === field.name && (
                <motion.div
                  layoutId="focusGlow"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 to-pink-500/0 pointer-events-none"
                />
              )}
            </motion.div>
          ))}

          {/* Message Textarea */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              whileFocus={{ scale: 1.02 }}
              className="w-full p-4 pl-12 rounded-lg bg-white/5 backdrop-blur-sm text-white border-2 border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 placeholder-gray-500 resize-none"
            />
            <span className="absolute left-4 top-4 text-xl">💬</span>
          </motion.div>

          {/* Send Button */}
          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 py-4 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden group mt-6"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center justify-center">
              Send Message
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-2"
              >
                ✉️
              </motion.span>
            </span>
          </motion.button>
        </form>

        {/* Success Message */}
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm text-center"
          >
            Thanks for reaching out! I'll get back to you soon.
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
