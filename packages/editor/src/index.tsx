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

import './global-styled.css';
import {
  PersistenceManager,
  DesignerOptionsBuilder,
  Designer,
  DesignerKeyboard,
  EditorRenderMode,
  MindplotWebComponentInterface,
  Mindmap,
  MockPersistenceManager,
  LocalStorageManager,
  RESTPersistenceManager,
  TextExporterFactory,
  ImageExporterFactory,
  Exporter,
  Importer,
  TextImporterFactory,
  XMLSerializerFactory,
} from '@edifice-wisemapping/mindplot';

import Editor from './components';
import { EditorOptions } from './components';
import MapInfo from './classes/model/map-info';

declare global {
  // used in mindplot
  // eslint-disable-next-line no-var
  var accountEmail: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['mindplot-component']: MindplotWebComponentInterface;
    }
  }
  interface Window {
    newrelic: { noticeError: (Error) => void };
  }
}

export {
  PersistenceManager,
  DesignerOptionsBuilder,
  Designer,
  DesignerKeyboard,
  EditorRenderMode,
  Mindmap,
  MockPersistenceManager,
  LocalStorageManager,
  RESTPersistenceManager,
  TextExporterFactory,
  ImageExporterFactory,
  Exporter,
  Importer,
  TextImporterFactory,
  EditorOptions,
  MapInfo,
  XMLSerializerFactory,
};

export default Editor;
