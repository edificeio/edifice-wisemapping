import { $assert } from '@edifice.io/core-js';
import SvgIconModel from './SvgIconModel';
import LinkModel from './LinkModel';
import NoteModel from './NoteModel';
import FeatureModel from './FeatureModel';
import FeatureType from './FeatureType';
import EmojiIconModel from './EmojiIconModel';

interface NodeById {
  id: FeatureType;
  model: typeof FeatureModel;
}

class FeatureModelFactory {
  static modelById: Array<NodeById> = [
    {
      id: 'icon',
      model: SvgIconModel,
    },
    {
      id: 'eicon',
      model: EmojiIconModel,
    },
    {
      id: 'link',
      model: LinkModel,
    },
    {
      id: 'note',
      model: NoteModel,
    },
  ];

  static createModel(type: FeatureType, attributes): FeatureModel {
    $assert(type, 'type can not be null');
    $assert(attributes, 'attributes can not be null');

    const { model: Model } = FeatureModelFactory.modelById.filter((elem) => elem.id === type)[0];
    return new Model(attributes);
  }

  /**
   * @param id the feature metadata id
   * @return {Boolean} returns true if the given id is contained in the metadata array
   */
  static isSupported(type: string): boolean {
    return FeatureModelFactory.modelById.some((elem) => elem.id === type);
  }
}

export default FeatureModelFactory;
