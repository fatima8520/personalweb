import {List, ListItem, ListItemText}  from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import { getTranslate } from '../localization/index'

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%'
  },
  listitem: {
    '&:hover': {
      backgroundColor: 'rgba(3,127,255 ,0.2)',
      '& *': {
        color: '#fff'
      }
    }
  },
  listItemSelected: {
    backgroundColor: theme.palette.primary.main,
    '& *': {
      color: '#fff'
    }
  }
}))

const ListItems = ({ onChangeMobileOpen }) => {
  const menuItem = [
    { id: 0, menuName: 'home' },
    { id: 1, menuName: 'about' },
    { id: 2, menuName: 'resume' },
    { id: 3, menuName: 'portfolios' },
    { id: 4, menuName: 'contact' }
  ]
  const translate = getTranslate()
  const classes = useStyles()

  const handleListItemClick = () => {
    onChangeMobileOpen(false)
  }

  return (
    <>
      <List className={classes.list}>
        {menuItem.map((item) => (
          <ListItem
            button
            key={item.menuName}
            component={NavLink}
            exact
            to={item.menuName === 'home' ? '/' : `/${item.menuName}`}
            className={classes.listitem}
            onClick={(event) => handleListItemClick(event, item.id)}
            activeClassName={classes.listItemSelected}
          >
            <ListItemText disableTypography="true" >
            <Typography variant="body2">
                   {translate[item.menuName]}
                 </Typography>
            </ListItemText>
             {/*  disableTypography={'true'}
               children={
                 <Typography variant="body2">
                   {translate[item.menuName]}
                 </Typography>
               } */}
       
          </ListItem>
        ))}
      </List>
    </>
  )
}
export default ListItems
