import "./Commission.css";
import {
  FaCamera,
  FaPencilAlt,
  FaPaintBrush,
  FaBoxOpen,
  FaHome,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Commission() {
  const phone = "919600932548";

  const message = encodeURIComponent(`Hello Edwin,

I would like to commission a custom portrait.

Number of Faces:
Paper Size:
Deadline:
Reference Photo:

Please let me know the price.`);

  const steps = [
    {
      icon: <FaCamera />,
      title: "Share Your Photo",
      text: "Send your favourite photo through WhatsApp to begin your custom portrait."
    },
    {
      icon: <FaPencilAlt />,
      title: "Sketch Creation",
      text: "I carefully prepare the initial graphite sketch with accurate proportions."
    },
    {
      icon: <FaPaintBrush />,
      title: "Fine Detailing",
      text: "Every small detail is handcrafted using premium graphite pencils."
    },
    {
      icon: <FaBoxOpen />,
      title: "Safe Packaging",
      text: "Your artwork is packed securely to ensure it reaches you safely."
    },
    {
      icon: <FaHome />,
      title: "Delivered",
      text: "Receive your handmade portrait at your doorstep."
    }
  ];

  return (
    <section className="commission" id="commission">

      <div className="container">

        <p className="section-tag">
          COMMISSION PROCESS
        </p>

        <h2 className="commission-title">
          How Your Portrait Comes to Life
        </h2>

        <div className="timeline">

          {steps.map((step, index) => (

            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut"
            }}
            >

              <div className="timeline-icon">

                {step.icon}

              </div>

              <div className="timeline-content">

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </div>

            </motion.div>

          ))}

        </div>

        <a
          href={`https://wa.me/${phone}?text=${message}`}
          className="commission-btn"
          target="_blank"
          rel="noreferrer"
        >
          Start Your Commission
        </a>

      </div>

    </section>
  );
}

export default Commission;