const StringEncodingToRFC3986 = str => (
  encodeURIComponent(str).replace(/[!'()*]/g,
    c => `%${c.charCodeAt(0).toString(16)}`)
);

export default StringEncodingToRFC3986;
