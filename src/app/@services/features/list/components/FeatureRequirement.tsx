import React, {useContext} from 'react';
import {Dev} from '@core/dev/components/Dev';
import {FeaturesRegistrationContext} from '../context';
import {IFeatureName} from '../../item/types';

type IFeatureRequirementProps = {
  children: any;
  name: IFeatureName;
  active?: boolean;
  alternative: any
};
export function FeatureRequirement({
                                     name,
                                     children,
                                     active = true,
                                     alternative,
                                   }: IFeatureRequirementProps) {
  const features = useContext(FeaturesRegistrationContext);
  if (!active) return children;
  if (features.state?.features?.available[name]) return children;
  return alternative ?? <Dev>[disabled]</Dev>;
}