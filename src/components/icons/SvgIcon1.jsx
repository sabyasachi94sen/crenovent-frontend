import React from "react";
import PropTypes from "prop-types";


function SvgIcon1({ className }) {
  return (
    <div className={className}>
      <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
        <g id="Icon" xmlns="http://www.w3.org/2000/svg">
          <path
            id="Vector_68"
            d="M8,10.88c-0.181,0 -0.33,-0.064 -0.448,-0.192l-4.477,-4.48c-0.138,-0.1173 -0.197,-0.2667 -0.176,-0.448c0,-0.16 0.059,-0.3093 0.176,-0.448c0.128,-0.1067 0.283,-0.1653 0.464,-0.176c0.181,-0.0107 0.325,0.048 0.432,0.176l4.029,4.016l4.029,-4.016c0.118,-0.128 0.264,-0.1867 0.44,-0.176c0.176,0.0107 0.323,0.0747 0.44,0.192c0.117,0.1173 0.181,0.264 0.192,0.44c0.01,0.176 -0.048,0.3227 -0.176,0.44l-4.477,4.48c-0.107,0.128 -0.256,0.192 -0.448,0.192z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
}

SvgIcon1.propTypes = {
  className: PropTypes.string, // Ensure children is a node and is required
};


export default SvgIcon1;
