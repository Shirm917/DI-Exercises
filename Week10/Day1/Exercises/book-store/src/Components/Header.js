import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="toolbar">
            <div>
              <MenuBookIcon />
            </div>
            <div>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Book Cards
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    )
};

export default Header;