import {ITag_Complete} from '../../../../../../../../models';
import {useContext} from 'react';
import {TagContext} from '../context';

export function useActiveTag(): ITag_Complete | null {
    const {tag = null} = useContext(TagContext) ?? {};

    return tag ?? null;
}