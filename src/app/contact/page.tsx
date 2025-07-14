export default function Contact() {
  return (
    <main className="Contact">
      <div className="contact-form">
        <h2>
          Contact <span>Me!</span>
        </h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Mobile Number" required />
            <input type="text" placeholder="Email Subject" required />
          </div>
          <div className="form-row">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

