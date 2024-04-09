import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function FooterBar() {
  return (
    <Toolbar
      variant="dense"
      component="footer"
    >
      <Typography 
        variant="caption"
      >
        Desenvolvido com café por <a href="eliane.oliveira11@fatec.sp.gov.br">Eliane Cristina da Silva Oliveira</a>, 2024
      </Typography>
    </Toolbar>
  )
}