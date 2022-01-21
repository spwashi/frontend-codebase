import React from 'react';
import {FeatureRequirement} from '../../../../_util';
import {TagConceptForm} from './Form';
import {LoggedIn} from '../../../../users/behaviors/login/State';

export function RestrictedTagConceptForm({}) {
    return (
        <LoggedIn>
            <FeatureRequirement name="concepts.display">
                <TagConceptForm/>
            </FeatureRequirement>
        </LoggedIn>
    );
}
