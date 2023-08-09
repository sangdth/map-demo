import { IconButton, type IconButtonProps } from '@chakra-ui/react';
import { Marker as MapboxMarker, useMap } from 'react-map-gl';
import type { Coordinates, PinData } from '@/types';
import { useColorModeValue } from '@/hooks';
import { areEqual } from '@/utils/helpers';
import { PinIcon } from '@/icons';
import { memo } from 'react';

const SIZE = 6 * 4;

type PinProps = {
  data: PinData;
  colorScheme?: string;
  icon?: IconButtonProps['icon'];
  onClick?: (d?: PinData) => void;
};

const resetFocus = {
  outline: 'none',
};

export const Marker = memo(
  ({ data, colorScheme = 'purple', icon, onClick }: PinProps) => {
    const [longitude, latitude] = data?.location?.coordinates ?? [];

    const { current: map } = useMap();

    const isMarkerInViewport = (coordinates: Coordinates) => {
      const bounds = map?.getBounds();
      return bounds?.contains(coordinates);
    };

    const iconColor = useColorModeValue(
      `${colorScheme}.400`,
      `${colorScheme}.300`
    );

    const handleOnClick = () => {
      if (typeof onClick === 'function') {
        onClick(data);
      }
    };

    if (!longitude || !latitude || !isMarkerInViewport([longitude, latitude])) {
      return null;
    }

    return (
      <MapboxMarker longitude={longitude} latitude={latitude} anchor="bottom">
        <IconButton
          isRound
          _focus={resetFocus}
          variant="unstyled"
          aria-label={data.label ?? ''}
          icon={icon ?? <PinIcon boxSize={`${SIZE}px`} color={iconColor} />}
          onClick={handleOnClick}
        />
      </MapboxMarker>
    );
  },
  areEqual
);
