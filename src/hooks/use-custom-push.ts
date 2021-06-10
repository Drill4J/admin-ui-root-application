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
import { useHistory } from "react-router-dom";
import * as queryString from "querystring";

interface Root {
  path: "/agents";
  params?: undefined;
}

interface AgentDashboard {
  path: "/agent/dashboard";
  params: {
    agentId: string;
    buildVersion: string;
  };
}

interface AgentPlugin {
  path: "/agent/plugin";
  params: {
    agentId: string;
    buildVersion: string;
    pluginId: string;
  };
}

interface Settings {
  path: "/settings";
  params: {
    tab: "general" | "system" | "plugins";
  };
}

type arg = Root | AgentDashboard | Settings | AgentPlugin;

export const useCustomPush = () => {
  const hist = useHistory();
  return (pathData: arg) => hist.push(createPath(pathData));
};

export const createPath = ({ path, params }: arg) =>
  `${path}?${queryString.stringify(params)}`;
