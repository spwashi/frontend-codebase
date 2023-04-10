import {createContext} from 'react';
import {ITag_Complete} from '../../../../../../../.junction/models/tag/hybrids';

type ITagContext = {
    tag: ITag_Complete | null;
    setTag: (tag: ITag_Complete) => void;
};
export const TagContext = createContext<ITagContext | null>(null);