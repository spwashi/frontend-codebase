import React, {useMemo, useState} from 'react';
import {SceneContext as SceneContext} from './context';
import {IScene} from '../../../../../../app/models/scene/models';

export function SceneContextProvider({children, scene: _scene}: { children?: any, scene?: IScene }) {
    const [scene, setScene] = useState<IScene | null>(_scene ?? null);
    const context           =
              useMemo(() => ({
                  scene: scene ?? null,
                  setScene,
              }), [scene]);

    return (
        <SceneContext.Provider value={context}>
            {children}
        </SceneContext.Provider>
    )
}