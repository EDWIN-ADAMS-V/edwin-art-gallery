import "./Feedback.css";
import { useState } from "react";
import axios from "axios";

function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await axios.post(
        "https://formspree.io/f/xeebvrjy",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      setSubmitted(true);
      e.target.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="feedback" id="feedback">

      <div className="container feedback-container">

        {!submitted ? (
          <>
            <p className="section-tag">
              YOUR OPINION MATTERS
            </p>

            <h2>
              Help Me Improve
            </h2>

            <p className="feedback-text">
              Every artwork and every website can always become better.
              If you have a suggestion, found a bug, loved something,
              or simply want to share your thoughts, I'd genuinely
              appreciate hearing from you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="feedback-form"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email (Optional)"
              />

              <select
                name="category"
                required
              >
                <option value="">
                  Select a Category
                </option>

                <option>Website Design</option>
                <option>Artwork</option>
                <option>Suggestion</option>
                <option>Commission Inquiry</option>
                <option>Bug Report</option>
                <option>Other</option>

              </select>

              <textarea
                name="message"
                rows="6"
                placeholder="Write your feedback..."
                required
              />

              <button type="submit">

                Share Feedback

              </button>

            </form>
          </>
        ) : (
          <div className="feedback-success">

            <h2>🎉 Thank You!</h2>

            <p>

              Your feedback has been received successfully.

              <br /><br />

              I genuinely appreciate you taking the time
              to help me improve my artwork and this website.

            </p>

          </div>
        )}

      </div>

    </section>
  );
}

export default Feedback;