import * as React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

import { mockResume } from './mocks';
import { ResumeProvider, ResumeContext, ProviderParams } from '../src/provider';

const Consumer = (): React.ReactElement<React.ConsumerProps<ProviderParams>> => (
    <ResumeContext.Consumer>
        {(value: ProviderParams) => (
            <input data-testid="context-consumer" value={value.resume && value.resume.basic.name} />
        )}
    </ResumeContext.Consumer>
);

describe('The <ResumeProvider> component', (): void => {
    const initialProps = {
        resume: mockResume,
    };

    it('Will render its children with the resume context added', (): void => {
        const { getByTestId } = render(
            <ResumeProvider {...initialProps}>
                <Consumer />
            </ResumeProvider>
        );

        expect(getByTestId('context-consumer')).toHaveValue(mockResume.basic.name);
    });
});
