import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage";
import HomePage from "../Pages/HomePage/HomePage";
import TripsDetailsPage from "../Pages/TripsDetailsPage/TripsDetailsPage";
import TripsListPage from "../Pages/TripsListPage/TripsListPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/trips-list"}>
                    <TripsListPage />
                </Route>

                <Route exact path={"/trips-list/application-form/"}>
                    <ApplicationFormPage/>
                </Route>

                <Route exact path={"/admin"}>
                    <AdminHomePage />
                </Route>

                <Route exact path={"/admin/trips/:id"}>
                    <TripsDetailsPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}