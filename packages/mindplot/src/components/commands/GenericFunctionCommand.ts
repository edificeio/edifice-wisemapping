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
import Command from '../Command';
import CommandContext from '../CommandContext';
import Topic from '../Topic';

class GenericFunctionCommand<T> extends Command {
  private _value: T;

  private _topicsIds: number[];

  private _commandFunc: (topic: Topic, value: T) => T;

  private _oldValues: T[];

  private _applied: boolean;

  constructor(commandFunc: (topic: Topic, value: T) => T, topicsIds: number[], value: T) {
    super();
    this._value = value;
    this._topicsIds = topicsIds;
    this._commandFunc = commandFunc;
    this._oldValues = [];
    this._applied = false;
  }

  /**
   * Overrides abstract parent method
   */
  execute(commandContext: CommandContext): void {
    if (!this._applied) {
      const topics = commandContext.findTopics(this._topicsIds);

      if (topics != null) {
        topics.forEach((topic: Topic) => {
          const oldValue = this._commandFunc(topic, this._value);
          this._oldValues.push(oldValue);
        });
      }
      this._applied = true;
    } else {
      throw new Error('Command can not be applied two times in a row.');
    }
  }

  undoExecute(commandContext: CommandContext): void {
    if (this._applied) {
      const topics = commandContext.findTopics(this._topicsIds);

      topics.forEach((topic: Topic, index: number) => {
        this._commandFunc(topic, this._oldValues[index]);
      });

      this._applied = false;
      this._oldValues = [];
    } else {
      throw new Error('undo can not be applied.');
    }
  }
}

export default GenericFunctionCommand;
