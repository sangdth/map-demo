import React, { useState } from 'react';
import { NavigationControl, Map, Popup, useMap } from 'react-map-gl';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useDebounce, useSWR } from '@/hooks';
import { getLatLongFromGeography } from '@/utils/mapbox';
import type { ViewState, PinData } from '@/types';
import { Marker } from './Marker';

type MapViewProps = {
  clean?: boolean;
  data?: PinData[];
  keepStates?: boolean;
  viewState: ViewState;
  onChange?: (newViewState: ViewState) => void;
};

const mapStyles = {
  width: '100%',
  height: '100%',
};

const navControlStyles = {
  right: 8,
  bottom: 8,
};

export const MapView = ({ viewState, data, onChange }: MapViewProps) => {
  const { data: secret } = useSWR<{ mapboxAccessToken: string }>('/api/secret');

  const { colorMode } = useColorMode();

  const [localViewState, setLocalViewport] = useState(viewState);

  const [popupInfo, setPopupInfo] = useState<PinData | null>(null);

  const { longitude: popupLongitude, latitude: popupLatitude } =
    getLatLongFromGeography(popupInfo?.location);

  useDebounce(
    () => {
      if (typeof onChange === 'function') {
        onChange(localViewState);
      }
    },
    200,
    [localViewState?.latitude, localViewState?.longitude, localViewState?.zoom]
  );

  const handlePinOnClick = (item: PinData) => {
    setPopupInfo(item);
  };

  if (!secret) {
    return null;
  }

  return (
    <Box width="100%" height="100%">
      <Map
        {...localViewState}
        pitch={0}
        style={mapStyles}
        id="dashboardMap"
        logoPosition="bottom-right"
        mapboxAccessToken={secret?.mapboxAccessToken}
        onMove={(event) => setLocalViewport(event.viewState)}
        mapStyle={`mapbox://styles/mapbox/${colorMode}-v9`}
        // onContextMenu={(event) => console.log(event)} // eslint-disable-line
      >
        <NavigationControl position="bottom-right" style={navControlStyles} />

        {data &&
          data.map((o) => (
            <Marker key={o.id} data={o} onClick={() => handlePinOnClick(o)} />
          ))}

        {popupInfo && popupLongitude && popupLatitude && (
          <Popup
            anchor="bottom"
            offset={38}
            longitude={popupLongitude}
            latitude={popupLatitude}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
          >
            <Flex>
              <Stack spacing="0">
                <Heading isTruncated size="xs">
                  {popupInfo.label}
                </Heading>
                <Text fontSize="xs" noOfLines={1}>
                  {popupInfo.description}
                </Text>
              </Stack>
            </Flex>
          </Popup>
        )}
      </Map>
    </Box>
  );
};
