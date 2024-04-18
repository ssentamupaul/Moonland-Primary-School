import React from "react";

const Map = () => {
  return (
    <div>
      <div style={{ background: "#00bbf0" }} className="py-5 text-center">
        <div className="d-flex justify-content-center">
          <h1 className="p-3 text-white">Pay Us A Visit At School</h1>
        </div>
      </div>

      <div className="container">
        <iframe
          title="Map Location"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.576910528232!2d32.5326369!3d0.5352454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c53003fd79427%3A0x96a3a2b110b3013a!2sMoonland%20primary%20School!5e0!3m2!1sen!2sug!4v1713440764118!5m2!1sen!2sug"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
