import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/logo.png';

function Header() {
  return (
    <Container
      sx={{
        backgroundColor: '#020203',
        width: '100%',
        height: 'fit-content',
        padding: '5px',
        marginLeft: 0,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt="Logo" />
          <Typography
            sx={{ fontFamily: 'roboto', color: 'red', marginLeft: 1 }}
          >
            SportSee
          </Typography>
        </div>
        <Typography sx={{ fontFamily: 'roboto', color: 'white' }}>
          Accueil
        </Typography>
        <Typography sx={{ fontFamily: 'roboto', color: 'white' }}>
          Profil
        </Typography>
        <Typography sx={{ fontFamily: 'roboto', color: 'white' }}>
          Réglage
        </Typography>
        <Typography sx={{ fontFamily: 'roboto', color: 'white' }}>
          Communauté
        </Typography>
      </Toolbar>
    </Container>
  );
}

export default Header;
