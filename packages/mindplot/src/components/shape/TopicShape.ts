/*
 *    Copyright [2021] [wisemapping]
 *
 *   Licensed under WiseMapping Public License, Version 1.0 (the "License").
 *   It is basically the Apache License, Version 2.0 (the "License") plus the
 *   "powered by wisemapping" text requirement on every single page;
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the license at
 *
 *       http://www.wisemapping.org/license
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import { Group } from '@edifice-wisemapping/web2d';
import { TopicShapeType } from '../model/INodeModel';
import SizeType from '../SizeType';

interface TopicShape {
  setSize(width: number, height: number): void;

  getSize(): SizeType | null;

  setPosition(x: number, y: number): void;

  setFill(value: string, opacity?: number): void;

  setVisibility(value: boolean, fade?: number): void;

  setOpacity(value: number): void;

  setCursor(value: string): void;

  appendTo(group: Group): void;

  removeFrom(group: Group): void;

  setStroke(width: number | null, style: string | null, color: string): void;

  getShapeType(): TopicShapeType;
}

export default TopicShape;
