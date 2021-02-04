import {Switch,Route,Redirect} from 'react-router-dom'
import AuthPage from './pages/authpage.componsnt'
import EditNotePage from './pages/editnotepage.component'
import NotesPage from './pages/notespage.component'

const App=()=>{
  return(
    <div className="container my-5">
      <Switch>
        <Route exact path="/auth" component={AuthPage}/>
        <Route exact path="/notes" component={NotesPage}/>
        <Route exact path="/edit-note" component={EditNotePage}/>
        <Route exact path="/edit-note/:noteId" component={EditNotePage}/>
        {/* if nothing matches simply redirect to Auth page */}
        <Redirect to="/auth"/>
      </Switch>
    </div>
  )
}

export default App;