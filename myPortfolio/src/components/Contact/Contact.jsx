import { ToastContainer, toast } from "react-toastify";
import React, { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_39b7kei",
        "template_b562fk4",
        form.current,
        "CH2htUUHR-QwzqR9K"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
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
    { name: "user_email", placeholder: "Your Email", type: "email" },
    { name: "user_name", placeholder: "Your Name", type: "text" },
    { name: "subject", placeholder: "Subject", type: "text" },
  ];

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-20 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foam">Contact</h2>
        <div className="w-16 h-[2px] bg-copper mx-auto mt-3" />
        <p className="text-mist mt-4 text-base">
          I would love to hear from you—reach out for any opportunities or questions.
        </p>
      </div>

      <div className="surface w-full max-w-md p-8 rounded-xl">
        <h3 className="text-xl font-semibold text-foam text-center mb-2">
          Connect With Me
        </h3>
        <p className="text-mist text-center text-sm mb-6">
          Send me a message and I will respond as soon as possible
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          {formFields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
              className="w-full p-3 rounded-md bg-ink text-foam border border-line focus:border-copper focus:outline-none placeholder-mist"
            />
          ))}
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-ink text-foam border border-line focus:border-copper focus:outline-none placeholder-mist resize-none"
          />
          <button
            type="submit"
            className="w-full bg-copper py-3 text-ink font-semibold rounded-md hover:bg-copper-dark transition-colors mt-2 shadow-[0_8px_24px_rgba(232,168,124,0.3)]"
          >
            Send Message
          </button>
        </form>

        {isSent && (
          <div className="mt-4 p-3 bg-copper/10 border border-copper/40 rounded-md text-copper text-sm text-center">
            Thanks for reaching out! I will get back to you soon.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
