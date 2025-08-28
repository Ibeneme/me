import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./FlagsRow.css";

const flags = [
  { code: "NG", name: "Nigeria" },
  { code: "CA", name: "Canada" },
  { code: "US", name: "United States" },
  { code: "GH", name: "Ghana" },
  { code: "KE", name: "Kenya" },
  { code: "NL", name: "Netherlands" },
  { code: "GB", name: "United Kingdom" },
];

const FlagsRow: React.FC = () => {
  return (
    <section className="flags-section">
      <section className="flags-section-two">
        <h2 className="flags-title">Our Clients’ Countries</h2>
        <div className="flags-row">
          {flags.map(({ code, name }) => (
            <ReactCountryFlag
              key={code}
              countryCode={code}
              svg
              className="flag-icon"
              style={{
                width: 64,
                height: 48,
              }}
              title={name}
              aria-label={name}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default FlagsRow;
