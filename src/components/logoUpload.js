import React from 'react';

const LogoUpload = (props) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    if (event.target.files) {
      const fileUploaded = event.target.files[0];
      props.handleLogoUpload(fileUploaded);
    }
  };
  return (
    <div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
        accept="image/jpg, image/jpeg, image/png"
      />
      <button className="uploadBtn" id="btnAttachment" onClick={handleClick}>
        <span className="uploadIcon"></span>UPLOAD LOGO
      </button>
    </div>
  );
};

export default LogoUpload;
