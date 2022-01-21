import {useSpwParser} from './useSpwParser';
import {getAllNodes, getSalientNode} from '@spwashi/spw/constructs/runtime/_util/initializers/runtime/initRuntimeWithSrc';
import {flatten, getParent, nearestMatchingParent} from './util/callbacks';
import React, {useEffect} from 'react';
import SpwEditor from './SpwEditor';
import {ConstructKind} from '@spwashi/spw/constructs/top/kinds';
import {InstanceExpression} from '@spwashi/spw/constructs/ast';

function getConstructSorter(register: any, dict: Map<string, any>) {
    return (n: any) => {
        const parentKey  = n.parent;
        const parentNode = register?.get(parentKey)?.flat[0];
        const node       = register?.get(n.key)?.resolve();

        const ignoreBlocks     = true;
        const mindInstances    = true;
        const ignoreDelimiters = true;

        let dictKey;
        let value = n.key;

        if (n.kind === 'identifier') {
            const entityParent = nearestMatchingParent(node, parent => parent.kind === 'entity_expression' as ConstructKind)
            if (nearestMatchingParent(node, p => p.kind === 'concept_container' as ConstructKind)?.key) {
                return [null, null]
            }
            dictKey = entityParent?.internal?.concept?.key ?? '<>';
        }

        if (ignoreBlocks && !dictKey) {
            const blockParent = nearestMatchingParent(node, parent => parent.kind === 'block' as ConstructKind)
            if (parentNode && (blockParent?.key === parentNode?.key)) {
                let blockOwner = getParent(blockParent);
                dictKey        = blockOwner?.key ?? '<>';
            }
            if (/block/.test(n.kind)) {
                return [undefined, null];
            }
        }

        if (ignoreDelimiters && !dictKey) {
            if (/delimiter|(scheme|identity)/.test(n.kind)) {
                return [undefined, null]
            }
        }

        function wrap(nearestInfix: any) {
            let head = nearestInfix.internal.head;
            if ((head.kind as ConstructKind) === 'location_container') {
                return head?.key;
            }
            return '(' + head?.key + ')';
        }

        switch (parentNode?.kind as ConstructKind) {
            case 'prefixed_invocation_expression':
                dictKey = node.key;
                value   = node?.internal?.tail;
                break;
        }

        switch (node.kind as ConstructKind) {
            case 'invocation_operator':
            case 'infixed_transformation_expression':
            case 'transformation_operator':
                return [null, null]
            case 'prefixed_transformation_expression':
                const nearestInfix = nearestMatchingParent(node, p => p.kind === 'infixed_transformation_expression')
                let keyGiver;
                if (nearestInfix) {
                    dictKey    = wrap(nearestInfix) + '=>';
                    const tail = node?.internal.tail;
                    if (tail?.kind === 'infixed_transformation_expression') {
                        let head = tail?.internal?.head;
                        if (head?.kind === 'prefixed_transformation_expression') {
                            head = head?.internal?.tail;
                        }
                        keyGiver = head
                    } else {
                        keyGiver = tail;
                    }
                }
                value = keyGiver?.kind;
                if (keyGiver?.kind === 'location_container') {
                    let items = keyGiver?.internal?.body?.internal?.items;
                    if (items?.length === 1)
                        keyGiver = items?.[0]
                }
                value = keyGiver?.key;
        }


        if (mindInstances && !dictKey) {
            const instanceParent = nearestMatchingParent(node, parent => parent.kind === 'instance_expression' as ConstructKind) as InstanceExpression | undefined;

            switch (n.kind as ConstructKind) {
                // case 'entity_expression':
                case 'instance_expression':
                case 'behavior_expression':
                    return [null, null]
                    // dictKey = instanceParent?.internal.entity?.key
                    break;
            }

            switch (parentNode?.kind as ConstructKind) {
                case 'instance_expression':
                    // dictKey = dictKey ?? parentNode.key;
                    break;
                case 'entity_expression':
                    return [null, null]
                    break;
                case 'concept_container':
                case 'location_container':
                    return [undefined, null];
                case 'behavior_expression':
                    dictKey = parentNode.internal.location?.key;
                    switch (n.kind as ConstructKind) {
                        case 'domain_container':
                        case 'essence_container':
                            break;
                        default:
                            return [undefined, null];
                    }
                    break;
            }
            if (!dictKey) {
                if (instanceParent?.key === parentNode?.key) {
                    switch (n.kind as ConstructKind) {
                        case 'behavior_expression':
                            dictKey = parentNode.key;
                            break;
                        default:
                            dictKey = 1;
                            return [undefined, null]
                    }
                } else if (instanceParent) {
                    // dictKey       = instanceParent.key
                    // const entity  = instanceParent.internal.entity;
                    // const concept = entity.internal.concept;
                    // dictKey       = concept.key;
                } else {
                    const instanceParent = nearestMatchingParent(node, parent => parent.kind === 'instance_expression' as ConstructKind) as InstanceExpression | undefined;
                }
            }
        }

        if (!dictKey) {
            // dictKey = parentKey;
        }


        const [key, val] = [value, dictKey];
        const set        = dict.set(key, dict.get(key) ?? []).get(key) as string[];
        val && set.push(val);

        return [
            key ?? undefined,
            set,
        ];
    };
}


export function SpwComponent({src}: { src: string }) {
    const parsed    = useSpwParser(src)
    const cache     = {} as { runtime: any };
    let allNodes    = getAllNodes(src, cache);
    let salientNode = getSalientNode(src, cache);
    const register  = cache?.runtime?.registers?.indexed;
    const dict      = new window.Map as any;
    let map         = flatten(allNodes)
        .reverse()
        .map(getConstructSorter(register, dict))
        .filter(([k, v]: any) => !!k && v.filter(Boolean).length)
    // .reverse();
    useEffect(() => {
        console.log('render')
    });

    return <React.Fragment>
        <div style={{width: '80%'}}>
            <SpwEditor value={src}/>
        </div>
        {/*<Log>{Object.fromEntries(new Map(map))}</Log>*/}
        {/*<Log>{map.map(([el]) => flatten(register?.get(el)?.flat))}</Log>*/}
        {/*<Log>{parsed.tree}</Log>*/}
    </React.Fragment>;
}
