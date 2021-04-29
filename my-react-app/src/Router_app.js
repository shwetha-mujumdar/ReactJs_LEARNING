import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/allMeetups";
import FavouritePage from "./pages/favourites";
import NewMeetupsPage from "./pages/newMeetup";
import Layout from "./component/layout/layout";

function Router_app() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/Favourites">
          <FavouritePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Router_app;
