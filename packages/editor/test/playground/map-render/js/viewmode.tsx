import '../css/viewmode.css';
import React from 'react';
import Editor, { EditorOptions } from '../../../../src/index';
import { LocalStorageManager, Designer } from '@wisemapping/mindplot';
import MapInfoImpl from './MapInfoImpl';
import { createRoot } from 'react-dom/client';

const initialization = (designer: Designer) => {
  designer.addEvent('loadSuccess', () => {
    const elem = document.getElementById('mindmap-comp');
    if (elem) {
      elem.classList.add('ready');
    }

    // Code for selector of map.
    const mapSelectElem = document.getElementById('map-select') as HTMLSelectElement;
    if (mapSelectElem) {
      mapSelectElem.addEventListener('change', (e) => {
        // @ts-ignore
        const selectMap = e.target?.value;
        window.location.href = `${window.location.pathname}?id=${selectMap}`;
      });

      Array.from(mapSelectElem.options).forEach((option) => {
        option.selected = option.value === mapId;
      });
    }
  });
};

// Obtain map id from query param
const params = new URLSearchParams(window.location.search.substring(1));
const mapId = params.get('id') || 'welcome';
const persistence = new LocalStorageManager('samples/{id}.wxml', false);
const options: EditorOptions = {
  mode: 'viewonly',
  locale: 'en',
  enableKeyboardEvents: true,
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Editor
    mapInfo={new MapInfoImpl(mapId, 'Develop Map Title', false)}
    options={options}
    persistenceManager={persistence}
    onAction={(action) => console.log('action called:', action)}
    onLoad={initialization}
  />,
);
