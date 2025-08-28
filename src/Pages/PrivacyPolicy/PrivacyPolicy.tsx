import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-date">Last updated: March 2025</p>

      <section className="privacy-section">
        <h2>Introduction</h2>
        <p>
          Welcome to BoringThinkers. We take your privacy seriously. This
          Privacy Policy explains how we handle data related to people, clients,
          or projects when necessary.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Data We May Collect</h2>
        <p>
          We do not collect personal data unless it's necessary for specific
          projects or client-related work. The types of data we may have
          include:
        </p>
        <ul>
          <li>
            Project-related information (e.g., project specifications,
            timelines, and communication)
          </li>
          <li>
            Client-related data for contract management or project collaboration
          </li>
          <li>
            Minimal tracking data for website performance (e.g., analytics,
            usage patterns)
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>How We Use Your Data</h2>
        <p>We may use the data we have to:</p>
        <ul>
          <li>
            Collaborate with clients on their projects and deliver solutions
          </li>
          <li>Improve our internal processes for better project management</li>
          <li>Ensure proper communication with clients and team members</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>Sharing Data</h2>
        <p>
          We do not sell or trade any personal data. However, we may share
          project-related information with necessary third-party service
          providers or collaborators involved in the delivery of services.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Security Measures</h2>
        <p>
          We implement security measures to protect any sensitive data we may
          hold. While no online transmission is 100% secure, we strive to
          maintain a high standard of security.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Your Rights</h2>
        <p>
          As a client or collaborator, you have the right to access, modify, or
          request the deletion of any project-related data we may have. Please
          contact us at{" "}
          <a href="mailto:boringthinkers@gmail.com">boringthinkers@gmail.com</a>{" "}
          for any inquiries.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          posted here with an updated date.
        </p>
      </section>

      <footer className="privacy-footer">
        <p>&copy; 2025 BoringThinkers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
