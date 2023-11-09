// pages/api/font.js

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'font/ttf'); 
    res.status(200).sendFile('../../assets/fonts/Bauhaus.ttf'); 
  };
  