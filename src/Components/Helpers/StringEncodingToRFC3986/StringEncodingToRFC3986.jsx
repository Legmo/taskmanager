import React from 'react';

const StringEncodingToRFC3986 = (str) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
}

export default StringEncodingToRFC3986;