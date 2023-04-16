import React, {useContext} from 'react';
import {Dev} from '@core/dev/components/Dev';
import {FeaturesRegistrationContext} from '../context';
import {IFeature} from '../../item/types';

type IFeatureRequirementProps = {
  name: IFeature['featureId'];
  children: any;
  alternative: any
};

/**
 * Renders children only if the feature required is available
 */
export function FeatureRequirement({name, children, alternative}: IFeatureRequirementProps) {
  const features = useContext(FeaturesRegistrationContext);
  if (features.state?.features?.available[name]) return children;
  return alternative ?? <Dev>[disabled]</Dev>;
}