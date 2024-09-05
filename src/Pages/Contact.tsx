import "./Contact.css";

export default function Contact() {
  return (
    <div
      className="contact"
      id="contact"
    >
      <div className="title">
        <h1>Contact Me</h1>
      </div>
      <div className="form">
        <form>
          <div className="rows">
            <div className="row">
              <div className="firstName">
                <label htmlFor="firstName">Fist Name</label>
                <input
                  type="text"
                  id="firstName"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNum">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNum"
                  pattern="[7-9]{1}[0-9]{9}"
                  required
                />
              </div>
            </div>
            <div className="row">
              <label htmlFor="topics">Choose a Topic</label>
              <select
                name="topics"
                id="topics"
                required
              >
                <option value="">Select</option>
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
              </select>
            </div>
            <div className="row">
              <label id="message">Message</label>
              <input
                type="text"
                id="message"
                required
              />
            </div>
          </div>
          <div className="submitBtn">
            <button className="btn-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
