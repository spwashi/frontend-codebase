import React from 'react';
import {FeatureRequirement} from '../../../../_util';
import {TagEventForm} from './Form';
import {LoggedIn} from '../../../../users/behaviors/login/Requirement';

export function RestrictedTagEventForm({}) {
    return (
        <LoggedIn>
            <FeatureRequirement name="events.display">
                <TagEventForm/>
            </FeatureRequirement>
        </LoggedIn>
    );
}
