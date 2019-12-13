import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '} 
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',

  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
}));

export default function StickyFooter() {

  const classes = useStyles();
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  function handleNewTodoChange(e) {
    e.preventDefault()
    setNewTodo(e.target.value)
    
  }

  function handleNewTodo(e) {
    e.preventDefault()
      if (newTodo === '') return
      setTodos([...todos, {id: Date.now(), text:newTodo}])
      e.target.reset()
    
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
    
  }

  function removeTodoAll() {
    setTodos([])
    
  }
  // const bull = <span className={classes.bullet}>•</span>;


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Todo List
        </Typography>
        <form onSubmit={handleNewTodo}>
        <Typography variant="h5" component="h2" gutterBottom>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                List of the Day
              </Typography>              
                  <TextField 
                    inputStyle={{ textAlign: 'center' }}
                    hintStyle={{ width: '600px', textAlign: 'center' }}
                  id="standard-basic" label="Input Your List" onChange={handleNewTodoChange}/>
              <Typography>
                {todos.map((todo) => (
                  <li key={todo.id}>
                    {todo.text}
                   <Button onClick={()=> removeTodo(todo.id)}><DeleteIcon /> </Button>
                    </li>
                ))}
              </Typography>
            </CardContent>
            <CardActions>
              <Button  onClick={()=> removeTodoAll()} size="small">Reset</Button>
            </CardActions>
          </Card>
        </Typography>
      </form>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}