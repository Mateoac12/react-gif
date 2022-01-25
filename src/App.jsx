import { Redirect, Route, Switch } from "wouter"
import { DetailPage } from "./pages/DetailPage"
import { HomePage } from "./pages/HomePage"
import { SearchResultPage } from "./pages/SearchResultPage"

function App() {
  return (
    <Switch>
      <Route
        path="/"
        component={HomePage}
      />
      <Route
        path="/search/:keyword"
        component={SearchResultPage}

      />
      <Route
        path="/gif/:id"
        component={DetailPage}
      />
      <Redirect to="/" />
    </Switch>
  )
}

export default App
