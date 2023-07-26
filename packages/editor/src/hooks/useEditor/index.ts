import { PersistenceManager } from '@edifice-wisemapping/mindplot';
import { useState, useRef, useEffect } from 'react';
import Capability from '../../classes/action/capability';
import MapInfo from '../../classes/model/map-info';
import { EditorOptions } from '../../components';
import { useWidgetManager } from '../useWidgetManager';
import Model from '../../classes/model/editor';

type UseEditorProps = {
  mapInfo: MapInfo;
  options: EditorOptions;
  persistenceManager: PersistenceManager;
};

export const useEditor = ({ mapInfo, options, persistenceManager }: UseEditorProps): object => {
  // We create model inside useEditor hook to instantiate everything outside Editor Component
  const [model, setModel] = useState<Model | undefined>();
  // useEditor hook creates mindplotRef
  const mindplotRef = useRef(null);
  // This is required to redraw in case of chansges in the canvas...
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setCanvasUpdate] = useState<number>();

  const [, , , widgetManager] = useWidgetManager();
  const capability = new Capability(options.mode, mapInfo.isLocked());

  useEffect(() => {
    if (!model) {
      const model = new Model(mindplotRef.current);
      model
        .loadMindmap(mapInfo.getId(), persistenceManager, widgetManager)
        .then(() => {
          setCanvasUpdate(Date.now());
          model.registerEvents(setCanvasUpdate, capability);
        })
        .catch((e) => {
          console.error(e);
          window.newrelic?.noticeError(e);
        });
      setModel(model);
    }
  }, [mindplotRef]);

  return { model, mindplotRef, mapInfo, capability, options };
};
