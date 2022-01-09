import React from 'react';
import {FeatureRequirement} from '../../../../_util';
import {Form} from './Form';

export function TagConceptForm({}) {
    return (
        <FeatureRequirement name="users.login">
            <FeatureRequirement name="concepts.display">
                <Form/>
            </FeatureRequirement>
        </FeatureRequirement>
    );
}
