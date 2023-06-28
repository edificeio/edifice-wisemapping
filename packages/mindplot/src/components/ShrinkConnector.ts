/* eslint-disable no-bitwise */
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
import { Ellipse, Group } from '@edifice-wisemapping/web2d';

import TopicConfig from './TopicConfig';
import ActionDispatcher from './ActionDispatcher';
import Topic from './Topic';
import ColorUtil from './theme/ColorUtil';

class ShirinkConnector {
  private _isShrink: boolean;

  private _ellipse: Ellipse;

  constructor(topic: Topic) {
    this._isShrink = false;
    const ellipse = new Ellipse({
      width: TopicConfig.CONNECTOR_WIDTH,
      height: TopicConfig.CONNECTOR_WIDTH,
    });
    this._ellipse = ellipse;

    ellipse.addEvent('click', (event: Event) => {
      const model = topic.getModel();
      const collapse = !model.areChildrenShrunken();

      const topicId = topic.getId();
      const actionDispatcher = ActionDispatcher.getInstance();
      actionDispatcher.shrinkBranch([topicId], collapse);

      event.stopPropagation();
    });

    ellipse.addEvent('mousedown', (event: Event) => {
      // Avoid node creation ...
      event.stopPropagation();
    });

    ellipse.addEvent('dblclick', (event: Event) => {
      // Avoid node creation ...
      event.stopPropagation();
    });

    ellipse.addEvent('mouseover', () => {
      ellipse.setStroke(this._isShrink ? 2 : 3, 'solid');
    });

    ellipse.addEvent('mouseout', () => {
      ellipse.setStroke(this._isShrink ? 3 : 2, 'solid');
    });

    ellipse.setCursor('default');
    const model = topic.getModel();
    this.changeRender(model.areChildrenShrunken());
  }

  changeRender(isShrink: boolean) {
    const elipse = this._ellipse;
    if (isShrink) {
      elipse.setStroke(4, 'solid');
    } else {
      elipse.setStroke(3, 'solid');
    }
    this._isShrink = isShrink;
  }

  setColor(color: string) {
    this._ellipse.setStroke(2, 'solid', color);
    this._ellipse.setFill(ColorUtil.lightenColor(color, 100));
  }

  setVisibility(value: boolean, fade = 0): void {
    this._ellipse.setVisibility(value, fade);
  }

  setOpacity(opacity: number): void {
    this._ellipse.setOpacity(opacity);
  }

  addToWorkspace(group: Group): void {
    group.append(this._ellipse);
  }

  setPosition(x: number, y: number): void {
    this._ellipse.setPosition(x + 3, y + 3);
  }

  moveToBack(): void {
    this._ellipse.moveToBack();
  }

  moveToFront(): void {
    this._ellipse.moveToFront();
  }
}

export default ShirinkConnector;
