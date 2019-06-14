import React, { createContext } from 'react';

import { Resume } from './types';

export interface ProviderParams {
    resume: Resume | undefined;
}

export const ResumeContext = createContext<Partial<ProviderParams>>({});

export const ResumeProvider: React.FunctionComponent<ProviderParams> = ({
    resume,
    children,
}: React.PropsWithChildren<ProviderParams>): React.ReactElement<ProviderParams> => (
    <ResumeContext.Provider value={{ resume }}>{children}</ResumeContext.Provider>
);
