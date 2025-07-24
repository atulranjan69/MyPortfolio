import React from "react";

const LogoContainer = ({ src, alt }) => (
  <div className="w-20 h-16 bg-white rounded-md overflow-hidden">
    <img src={src} alt={alt} className="w-full h-full object-contain" />
  </div>
);

export default LogoContainer;
