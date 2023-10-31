import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

// icons
import { icons } from '../icons';


const languages = [
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
  {lang: 'engAus', name: 'english(australia)', icon: (icons.eglishAus)},
]

const Language = () => {
  return (
    <Box>
      <Typography variant='h5' component={'h3'}>Select your language</Typography>
      <Box>
        <List sx={{display: 'flex', flexWrap: 'wrap'}}>
          {languages.map((language) => (
            <ListItem sx={{flex: '0'}}>
              <ListItemButton>
                <ListItemIcon>{language.icon}</ListItemIcon>
                <ListItemText>{language.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default Language
