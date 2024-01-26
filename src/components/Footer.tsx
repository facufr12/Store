import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <footer style={{ display:"flex", borderRadius:"40px", backgroundColor: '#595959', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:"60px", }}>
      <div>
        <Typography variant="body1">
          2024. Todos los derechos reservados <br />
          <br></br>Argentina <br />
          
          <br></br>Blackcaps@....com
        </Typography>
        
      </div>
      <div>
        <Link href="https://www.instagram.com.ar" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'none', marginLeft: '20px' }}>
          Instagram
        </Link>
        <Link href="https://www.facebook.com.ar" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', marginLeft: '200px' }}>
          Facebook
        </Link>
      </div>
    </footer>
  );
};

export default Footer;