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
import React, { useEffect } from "react";
import { getAppNames, LifeCycles, registerApplication } from "single-spa";

import { useQueryParams } from "hooks";
import containersPaths from "../../../containers-paths.json";

export const Plugin = () => {
  const { pluginId } = useQueryParams<{ pluginId: string }>();

  useEffect(() => {
    !getAppNames().includes(pluginId) && registerApp(pluginId, containersPaths[pluginId]);
  }, [pluginId]);

  return <div id={pluginId} />;
};

const registerApp = (appName: string, appPath: string) => {
  registerApplication({
    name: appName,
    app: () => System.import(appPath) as Promise<LifeCycles<never>>,
    activeWhen: (location) =>
      new URLSearchParams(location.search).get("pluginId") === appName,
  });
};
