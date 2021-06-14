/*
 * Copyright 2020 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from "react";
import {
  BrowserRouter, Route, Switch,
} from "react-router-dom";
import { Icons } from "@drill4j/ui-kit";

import {
  LoginPage, AgentsPage, AgentPage,
} from "pages";
import { TypographyStyles, LayoutStyles, FontsStyles } from "global-styles";
import { configureAxios } from "./common";
import { Footer, PrivateRoute, Sidebar } from "./components";

import "./index.css";
import { AppLayout } from "./layouts";

configureAxios();

const sidebarLinks = [
  { link: "agents", icon: Icons.Agents },
];

const Root = () => (
  <BrowserRouter>
    <FontsStyles />
    <TypographyStyles />
    <LayoutStyles />
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute path="/agent" component={AgentPage} />
      <AppLayout
        sidebar={<Sidebar links={sidebarLinks} matchParams={{ path: "/:activeLink" }} />}
        footer={<Footer />}
      >
        <Switch>
          <PrivateRoute exact path="/" component={AgentsPage} />
        </Switch>
      </AppLayout>
    </Switch>
  </BrowserRouter>
);

export default Root;
