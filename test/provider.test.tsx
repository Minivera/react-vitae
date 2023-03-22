import * as React from 'react';
import { render } from '@testing-library/react';

import { mockResume } from './mocks';
import { ResumeProvider, ResumeContext, ProviderParams } from '../src/provider';
import { Resume } from '../src';

describe('The <ResumeProvider> component', (): void => {
  const initialProps = {
    resume: mockResume,
  };

  const runContext = (): Resume | undefined => {
    let contextValue: Resume | undefined;

    render(
      <ResumeProvider {...initialProps}>
        <ResumeContext.Consumer>
          {(value: Partial<ProviderParams>): null => {
            contextValue = value.resume;
            return null;
          }}
        </ResumeContext.Consumer>
      </ResumeProvider>
    );
    return contextValue;
  };

  it('Will render its children with the resume context added', (): void => {
    expect(runContext()).toEqual(mockResume);
  });
});
