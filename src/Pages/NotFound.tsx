import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Blob } from "../Components/ui/design";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden bg-ink px-4 py-20 sm:px-8">
      <Blob d="mobile" shape="pill" rotate={-24} className="right-[8%] top-[18%] h-[80px] w-[190px] md:h-[130px] md:w-[300px]" />
      <Blob d="ai" shape="orb" className="left-[40%] bottom-[14%] h-[70px] w-[70px] md:h-[110px] md:w-[110px]" />

      <span className="bracket mb-6">Error 404</span>
      <h1 className="t-display relative text-cream">
        Lost in
        <br />
        space<span className="brand-text">.</span>
      </h1>
      <p className="t-body-lg mt-8 max-w-[36ch] text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/" className="pill pill-cta">
          Back home
        </Link>
        <button onClick={() => navigate(-1)} className="pill">
          Go back
        </button>
      </div>
    </main>
  );
};

export default NotFound;
