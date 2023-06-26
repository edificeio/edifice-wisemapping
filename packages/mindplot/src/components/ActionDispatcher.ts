/* eslint-disable  import/no-cycle */
/* eslint-disable  no-use-before-define */
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
import { $assert } from '@edifice/core-js';
import { Mindmap } from '..';
import CommandContext from './CommandContext';
import { PivotType } from './RelationshipControlPoints';
import EventDispispatcher from './EventDispatcher';
import NodeModel from './model/NodeModel';
import RelationshipModel from './model/RelationshipModel';
import Topic from './Topic';
import PositionType from './PositionType';
import LayoutEventBusType from './LayoutEventBusType';

abstract class ActionDispatcher extends EventDispispatcher<LayoutEventBusType> {
  private static _instance: ActionDispatcher;

  private _commandContext: CommandContext;

  constructor(commandContext: CommandContext) {
    $assert(commandContext, 'commandContext can not be null');
    super();
    this._commandContext = commandContext;
  }

  getCommandContext(): CommandContext {
    return this._commandContext;
  }

  abstract addRelationship(model: RelationshipModel, mindmap: Mindmap): void;

  abstract addTopics(models: NodeModel[], parentTopicId: number[]): void;

  abstract deleteEntities(topicsIds: number[], relIds: number[]): void;

  abstract dragTopic(
    topicId: number,
    position: PositionType,
    order: number | null,
    parentTopic: Topic | null,
  ): void;

  abstract moveTopic(topicId: number, position: PositionType): void;

  abstract moveControlPoint(
    model: RelationshipModel,
    ctrlPoint: PositionType,
    index: PivotType,
  ): void;

  abstract changeFontFamilyToTopic(topicIds: number[], fontFamily: string): void;

  abstract changeFontStyleToTopic(topicsIds: number[]): void;

  abstract changeFontColorToTopic(topicsIds: number[], color: string): void;

  abstract changeFontSizeToTopic(topicsIds: number[], size: number): void;

  abstract changeBackgroundColorToTopic(topicsIds: number[], color: string): void;

  abstract changeBorderColorToTopic(topicsIds: number[], color: string): void;

  abstract changeShapeTypeToTopic(topicsIds: number[], shapeType: string): void;

  abstract changeFontWeightToTopic(topicsIds: number[]): void;

  abstract changeTextToTopic(topicsIds: number[], text: string): void;

  abstract shrinkBranch(topicsIds: number[], collapse: boolean): void;

  abstract addFeatureToTopic(topicIds: number[], type: string, attributes: object): void;

  abstract changeFeatureToTopic(topicId: number, featureId: number, attributes: object): void;

  abstract removeFeatureFromTopic(topicId: number, featureId: number): void;

  static setInstance = (dispatcher: ActionDispatcher) => {
    this._instance = dispatcher;
  };

  static getInstance = (): ActionDispatcher => ActionDispatcher._instance;
}

export default ActionDispatcher;
