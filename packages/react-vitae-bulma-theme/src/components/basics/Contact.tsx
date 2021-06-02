import React from 'react';
import { Title, Icon, Subtitle } from 'bloomer';
import { Location } from 'react-vitae';

const styles: { [s: string]: React.CSSProperties } = {
  mainDiv: {},
  subDiv: {
    marginBottom: '1.5rem',
  },
  iconStyle: {
    marginRight: '1.25rem',
  },
};

const renderAddress = (location: Location): string => {
  let address = '';
  if (location.address) {
    address += location.address;
  }
  if (location.city) {
    address += `, ${location.city}`;
  }
  if (location.region) {
    address += `, ${location.region}`;
  }
  if (location.countryCode) {
    address += ` (${location.countryCode})`;
  }
  if (location.postalCode) {
    address += `, ${location.postalCode}`;
  }
  return address;
};

interface ContactProps {
  phone?: string;
  location?: Location;
  email?: string;
  url?: string;
}

export const Contact: React.FunctionComponent<ContactProps> = ({
  phone,
  location,
  email,
  url,
}): React.ReactElement<ContactProps> | null => (
  <div style={styles.mainDiv}>
    <Title isSize={4}>Contact</Title>
    {phone && phone.length && (
      <div style={styles.subDiv}>
        <Subtitle isSize={6} isSpaced>
          <Icon isSize="small" className="fas fa-phone" style={styles.iconStyle} />
          {phone}
        </Subtitle>
      </div>
    )}
    {location && (
      <div style={styles.subDiv}>
        <Subtitle isSize={6} isSpaced>
          <Icon isSize="small" className="fas fa-map-marker-alt" style={styles.iconStyle} />
          {renderAddress(location)}
        </Subtitle>
      </div>
    )}
    <div style={styles.subDiv}>
      {email && email.length && (
        <Subtitle isSize={6} isSpaced style={{ marginBottom: '0.25rem' }}>
          <Icon isSize="small" className="fas fa-envelope" style={styles.iconStyle} />
          <a href={`mailto:${email}`} target="_top">
            {email}
          </a>
        </Subtitle>
      )}
      {url && url.length && (
        <Subtitle isSize={6} isSpaced>
          <Icon isSize="small" className="fas fa-link" style={styles.iconStyle} />
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </Subtitle>
      )}
    </div>
  </div>
);
