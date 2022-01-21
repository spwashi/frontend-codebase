import {Construct} from '@spwashi/spw/constructs/ast/_abstract/construct';
import {ConstructKind} from '@spwashi/spw/constructs/top/kinds';

/**
 *
 * @param node
 * @param check
 */
export function spreadChain(node: Construct, check: ((n: Construct) => boolean) | null = null): (Construct | null)[] {
    if (!node) return [null];
    if (check && !check(node)) {
        return [node];
    }
    if (/prefixed_/.test(node.kind)) {
        return spreadChain(node.internal.tail, check);
    }
    if (/infixed_/.test(node.kind)) {
        return [node.internal.head, ...spreadChain(node.internal.tail, check)]
    }
    if (/postfixed_/.test(node.kind)) {
        return [...spreadChain(node.internal.head, check)]
    }
    return [node];
}

/**
 *
 * @param node
 */
export function destrand(node: Construct) {
    return spreadChain(node, (node: Construct | any) => /transformation/.test(node.kind));
}

const up = (node: Construct) => {
    const parent = nearestMatchingParent(node, () => true)
    while (parent) {

    }
}


/**
 *
 * @param node
 */
export function flatten<T extends Construct | any = Construct | any>(
    theNode: T | T[],
    propertyFilter: (key: string) => boolean = p => !/nodeScope|srcloc|src/.test(p),
): T | T[] | any {
    if (Array.isArray(theNode)) {
        const node = theNode as Array<Construct>
        return node.map(n => flatten(n, propertyFilter))
    }

    if (!theNode) return null;

    const internal = (theNode as Construct).internal;
    {
        if (!internal) {
            const item = theNode as any;
            if (!item) return item;
            switch (typeof item) {
                case 'object':
                    const next = {} as any;
                    for (const key in item) {
                        if (key === 'nodeScope') continue;
                        if (!propertyFilter(key)) continue;
                        next[key] = flatten(item[key], propertyFilter);
                    }
                    return next;
            }
            return item;
        }
    }

    {
        const node  = theNode as Construct;
        const next  = {} as any;
        next.kind   = node.kind ?? undefined;
        next.key    = node.key ?? undefined;
        next.parent = node.internal.nodeScope?.parent.key
        for (const key in internal) {
            if (key === 'nodeScope') continue;
            if (!propertyFilter(key)) continue;
            next[key] = flatten(internal[key], propertyFilter);
        }
        return next;
    }
}

export const getParent = (node: Construct) => node?.internal?.nodeScope?.parent;
export function nearestMatchingParent(node: Construct, match = (node: { kind: ConstructKind }) => /block/.test('' + node?.kind)) {
    let parent = getParent(node);
    while (parent) {
        if (match(parent)) return parent;
        (parent = getParent(parent))
    }
    return null
}