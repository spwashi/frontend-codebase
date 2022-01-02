import {createContext} from 'react';
import {ITag_Complete} from '../../../../../../../models';

type ITagContext = {
    tag: ITag_Complete | null;
    setTag: (tag: ITag_Complete) => void;
};
export const TagContext = createContext<ITagContext | null>(null);