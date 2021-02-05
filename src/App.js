import {Switch,Route,Redirect} from 'react-router-dom'
import React from 'react'
import Header from './components/header.component'
import AuthPage from './pages/authpage.componsnt'
import EditNotePage from './pages/editnotepage.component'
import NotesPage from './pages/notespage.component'

const App=()=>{
  return(
    <React.Fragment>
      <Header/>
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

    </React.Fragment>
    

  )
}

export default App;