"use client";

import Image from "next/image";

export default function OurTeamSection() {
  const highlights = [
    { number: "01", label: "Years of Hands-On Experience" },
    { number: "02", label: "Real-World Case Experts" },
    { number: "03", label: "Condition-Specific Guidance" },
    { number: "04", label: "PCOD, Thyroid & Diabetes Experience" },
  ];

  const galleryImages = [
    "/img/e35fbfd455b90e6785ec1d81b0e5d65937c00191.png",
    "/img/506d2aa64affd742abc64e22868e9de4b0824b14.png",
    "/img/eb12ef7c5dee140d48c30ccb5b52fd3fa3e8982f.png",
    "/img/f9308defaee01658dfa71d33d5019abf85676479.png",
  ];

  return (
    <>
      <section className="our-team-section">
        {/* Top banner */}
        <div className="team-banner">
          <Image
            src="/img/a21bc645bd7be0db87d5480827d18929468c8767.png"
            alt="Our Team"
            fill
            priority
            className="team-banner-image"
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="team-content-wrap">
          <div className="team-content-inner">
            <div className="team-heading-group">
              <div className="team-label-row">
                <div className="team-label-icon" />
                <div className="team-label-text">Our Team</div>
              </div>

              <h2 className="team-title">
                The People Behind Your Weight Loss Journey
              </h2>
            </div>

            <div className="team-description">
              <span className="normal">
                Weight loss doesn’t work because of a chart. It works because of
                people. DTPS is run by a team of{" "}
              </span>
              <span className="bold">
                200+ dietitians and health counsellors.
              </span>
              <br />
              <span className="normal">
                They talk to you, understand your routine and adjust your plan
                when things don’t go as planned. They track your progress,
                adjust your plan when needed, and stay involved until results
                show. This isn’t automated support. This isn’t passion written
                in a job description. It comes from people who genuinely care
                about outcomes, who think beyond charts and calls, and who take
                personal responsibility for your progress until results actually
                show.
              </span>
            </div>
          </div>

          <div className="team-divider" />

          <div className="highlights-grid">
            {highlights.map((item) => (
              <div key={item.number} className="highlight-card">
                <div className="highlight-number-box">
                  <div className="highlight-number">{item.number}</div>
                </div>
                <div className="highlight-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gallery - only 4 images, no duplicates */}
        <div className="team-gallery">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-card">
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                fill
                className="gallery-image"
                sizes="(max-width: 767px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .our-team-section {
          width: 100%;
          background: white;
          overflow: hidden;
          border-radius: 25.9px;
          outline: 0.5px solid #6c6c6c;
          outline-offset: -0.5px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          gap: 40px;
          padding-bottom: 40px;
        }

        .team-banner {
          width: 100%;
          height: 500px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          background: #f5f5f5;
        }

        .team-banner-image {
          object-fit: cover;
          object-position: center 28%;
        }

        .team-content-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 33px;
          width: 100%;
          max-width: 920px;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .team-content-inner {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 32px;
          width: 100%;
        }

        .team-heading-group {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .team-label-row {
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          gap: 6px;
        }

        .team-label-icon {
          width: 14px;
          height: 14px;
          background: #ff850b;
          flex-shrink: 0;
        }

        .team-label-text {
          color: #014e4e;
          font-size: 14px;
          font-family: Epilogue, sans-serif;
          font-weight: 600;
          line-height: 1;
        }

        .team-title {
          margin: 0;
          color: #1e1e1e;
          font-size: 40px;
          font-family: Epilogue, sans-serif;
          font-weight: 700;
          line-height: 1.12;
          text-align: center;
          max-width: 780px;
        }

        .team-description {
          width: 100%;
          color: black;
          font-size: 16px;
          font-family: Epilogue, sans-serif;
          font-weight: 400;
          line-height: 26px;
        }

        .team-description .bold {
          font-weight: 700;
        }

        .team-divider {
          width: 458px;
          height: 0;
          border-top: 2px solid #e9e9e9;
        }

        .highlights-grid {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
          align-content: center;
        }

        .highlight-card {
          width: calc(50% - 11px);
          min-height: 76px;
          padding: 8px;
          background: white;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 40px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 14px;
          box-sizing: border-box;
        }

        .highlight-number-box {
          width: 60px;
          height: 60px;
          position: relative;
          background: #014e4e;
          overflow: hidden;
          border-radius: 32px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .highlight-number {
          color: white;
          font-size: 24px;
          font-family: "Century Gothic", sans-serif;
          font-weight: 800;
          line-height: 30px;
          text-align: center;
        }

        .highlight-label {
          color: black;
          font-size: 18px;
          font-family: "Century Gothic", sans-serif;
          font-weight: 600;
          line-height: 30px;
        }

        .team-gallery {
          width: 100%;
          max-width: 1152px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 24px;
          flex-wrap: wrap;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .gallery-card {
          width: calc(25% - 18px);
          height: 179px;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .gallery-image {
          object-fit: cover;
        }

        @media (max-width: 1024px) {
          .team-banner {
            height: 420px;
          }

          .team-banner-image {
            object-fit: cover;
            object-position: center 24%;
          }

          .team-title {
            font-size: 34px;
          }

          .highlight-label {
            font-size: 16px;
            line-height: 24px;
          }

          .gallery-card {
            width: calc(50% - 12px);
          }
        }

  @media (max-width: 767px) {
  .our-team-section {
    gap: 28px;
    padding-bottom: 28px;
    border-radius: 22px;
  }

  .team-banner {
    height: 245px;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 12px;
    width: calc(100% - 24px);
    border-radius: 18px;
  }

  .team-banner-image {
    object-fit: cover;
    object-position: center 22%;
  }

  .team-content-wrap {
    gap: 26px;
    padding: 0 16px;
  }

  .team-content-inner {
    gap: 24px;
  }

  .team-heading-group {
    gap: 10px;
  }

  .team-title {
    font-size: 28px;
    line-height: 1.08;
    max-width: 340px;
  }

  .team-description {
    font-size: 15px;
    line-height: 1.6;
  }

  .team-divider {
    width: 100%;
    max-width: 330px;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    width: 100%;
  }

  .highlight-card {
    width: 100%;
    min-height: 186px;
    border-radius: 22px;
    padding: 14px 10px 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
    text-align: center;
  }

  .highlight-number-box {
    width: 90px;
    height: 88px;
    border-radius: 16px;
  }

  .highlight-number {
    font-size: 30px;
    line-height: 1;
  }

  .highlight-label {
    font-size: 14px;
    line-height: 1.25;
    max-width: 140px;
  }

  .team-gallery {
    padding: 0 16px;
    gap: 16px;
  }

  .gallery-card {
    width: calc(50% - 8px);
    height: 130px;
    border-radius: 16px;
  }
}
        }
      `}</style>
    </>
  );
}