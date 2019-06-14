import React from 'react';
import { Content } from 'bloomer';
import { Reference, useReferences } from 'react-vitae';

const styles: {[s: string]: React.CSSProperties} = {
    mainDiv: {
        marginBottom: '1.25rem',
    },
    divider: {
        marginLeft: '-1.25rem',
        marginRight: '-1.25rem',
    },
    name: {
        fontStyle: 'italic',
        marginTop: '-1.25rem',
        display: 'block',
        marginLeft: '1rem',
    },
};

export const References: React.FunctionComponent = (): React.ReactElement | null => {
    const references = useReferences();

    if (!references) {
        return null;
    }

    return (
        <div id="references" style={styles.mainDiv}>
            <div style={styles.referencesList}>
                <Content>
                    {references.map((reference: Reference, index: number): React.ReactElement => (
                        <React.Fragment>
                            {reference.reference && (
                                <blockquote key={`quote_${index}`}>{reference.reference}</blockquote>
                            )}
                            <span style={styles.name} key={`name_${index}`}>
                                {reference.name}
                            </span>
                        </React.Fragment>
                    ))}
                </Content>
            </div>
            {references.length ? <hr style={styles.divider} /> : null}
        </div>
    );
};
