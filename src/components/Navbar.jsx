import {bottomNavigationActionClasses, Stack} from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'
import SearchBar from './SearchBar'


const Navbar = () => (
  <Stack  
  direction="row"
  alignItems="center" 
  p={3} 
  sx={{
  position: 'sticky', 
  background: '#fbfbfb', 
  top: 0, 
  justifyContent: 'space-between',
   border: '2px solid',
    borderColor: '#b0caf7',
}}
   >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />

      
    </Link> 
    <SearchBar />

  </Stack> 
)

export default Navbar