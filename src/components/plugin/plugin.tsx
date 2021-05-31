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
import { useParams } from "react-router-dom";

import containersPaths from "../../containers-paths.json";
import { registerApp } from "../../register-app";

export const Plugin = () => {
  const { pluginId } = useParams<{ pluginId: string }>();

  useEffect(() => {
    // @ts-ignore
    registerApp(pluginId, containersPaths[pluginId]);
  }, [pluginId]);

  return <div id={pluginId} />;
};
