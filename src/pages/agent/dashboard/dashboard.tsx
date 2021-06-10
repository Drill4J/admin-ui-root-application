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
import "twin.macro";

import { useAdminConnection, useQueryParams, createPath } from "hooks";
import { Agent } from "types/agent";
import { HUD } from "components";
import { Link } from "react-router-dom";
import paths from "../../../containers-paths.json";

export const Dashboard = () => {
  const { agentId = "", buildVersion = "" } =
    useQueryParams<{ agentId?: string; buildVersion?: string }>();
  const { plugins = [] } =
    useAdminConnection<Agent>(`/api/agents/${agentId}`) || {};
  const installedPlugins = plugins.filter((plugin) => !plugin.available);

  return (
    <div>
      {installedPlugins.map(({ name, id = "" }) => (
        <div key={id} tw="flex p-4 gap-x-4">
          <Link
            tw="link"
            to={createPath({
              path: "/agent/plugin",
              params: { agentId, buildVersion, pluginId: id },
            })}
          >
            {name}
          </Link>
          <HUD url={paths[id]} />
        </div>
      ))}
    </div>
  );
};
