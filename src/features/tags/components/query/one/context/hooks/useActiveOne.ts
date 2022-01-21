import {useContext} from 'react';
import {TagContext} from '../context';
import {ITag_Complete} from '../../../../../../../app/models/tag/hybrids';

export function useActiveTag(): ITag_Complete | null {
    const {tag = null} = useContext(TagContext) ?? {};

    return tag ?? null;
}