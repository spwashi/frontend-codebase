import React from 'react';
import {FeatureRequirement} from '../../../../../../util/features';
import {Form} from './Form';

export function TagConceptForm() {
    return (
        <FeatureRequirement name="users.login">
            <Form/>
        </FeatureRequirement>
    );
}
