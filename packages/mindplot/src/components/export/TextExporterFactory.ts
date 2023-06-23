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
import { Mindmap } from '../..';
import Exporter from './Exporter';
import MDExporter from './MDExporter';
import TxtExporter from './TxtExporter';
import WiseXMLExporter from './WiseXMLExporter';
import FreemindExporter from './FreemindExporter';

type textType = 'wxml' | 'txt' | 'mm' | 'csv' | 'md' | 'mmap';

class TextExporterFactory {
  static create(type: textType, mindmap: Mindmap): Exporter {
    let result: Exporter;
    switch (type) {
      case 'wxml':
        result = new WiseXMLExporter(mindmap);
        break;
      case 'txt':
        result = new TxtExporter(mindmap);
        break;
      case 'md':
        result = new MDExporter(mindmap);
        break;
      case 'mm':
        result = new FreemindExporter(mindmap);
        break;
      default:
        throw new Error(`Unsupported type ${type}`);
    }
    return result;
  }
}
export default TextExporterFactory;
