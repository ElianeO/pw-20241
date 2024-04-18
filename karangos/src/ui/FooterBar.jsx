import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee'

export default function FooterBar() {
  return (
    <Toolbar
      variant="dense"
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        justifyContent: 'center',
        backgroundColor: 'action.disabledBackground'
      }}
    >
      <Typography
        variant="caption"
        sx={{
          '& a': {
            color: 'secondary.light'
          }
        }}
      >
        Desenvolvido com <CoffeeIcon fontSize="small" /> por <a href="eliane.oliveira11@fatec.sp.gov.br">Eliane Cristina da Silva Oliveira</a>
      </Typography>
    </Toolbar>
  )
}