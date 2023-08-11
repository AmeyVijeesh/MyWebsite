import React from "react";
// TODO: design a better sitemap component

const SiteMapComp = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "15%" }}>
        <h2 style={{ marginBottom: "25px" }}>Sitemap</h2>
        <h4>
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
            View XML Sitemap
          </a>
        </h4>
        <h4>Home</h4>
        <h4>|</h4>
        <h4>About</h4>
        <h4>|</h4>
        <h4>Contact</h4>
        <h4>|</h4>
        <h4>My Garage</h4>
      </div>
    </div>
  );
};

export default SiteMapComp;
