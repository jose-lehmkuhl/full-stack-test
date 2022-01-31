import React from 'react'

import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Typography from '@mui/material/Typography'

const Beer = ({ beer }) => {
  return (
    <Grid item lg={4} sm={6}>
        <ListItem alignItems="flex-start" key={beer.id}>
            <ListItemAvatar>
                <img alt={beer.name} src={beer.image_url || 'http://placebeer.com/90/180'} width={'auto'} height={180}/>
            </ListItemAvatar>
            <ListItemText
                style={{ marginLeft: '5px' }}
                primary={beer.name}
                secondary={
                <React.Fragment>
                    <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    >
                    {beer.tagline}
                    </Typography>
                    <div style={{ overflow: 'auto', maxHeight: '130px', marginTop: '5px' }}>
                        {beer.description}
                    </div>
                </React.Fragment>
                }
            />
        </ListItem>
    </Grid>
  )
}

export default Beer
