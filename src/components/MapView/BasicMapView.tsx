import { Box, Spinner } from '@chakra-ui/react';
import mapboxgl, { type Map } from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import { useSWR } from '@/hooks';

type MapState = {
  center: [number, number];
  zoom: number;
};
export type MapViewProps = MapState & {
  onMove?: (newState: MapState) => void;
};

export const BasicMapView = ({ center, zoom, onMove }: MapViewProps) => {
  const { data } = useSWR<{ mapboxAccessToken: string }>('/api/secret');

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map>();

  useEffect(() => {
    if (map.current || !data) return;

    map.current = new mapboxgl.Map({
      accessToken: data?.mapboxAccessToken ?? '',
      container: mapContainer.current ?? '',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: center,
      zoom: zoom,
    });

    map.current.on('move', () => {
      const lng = parseInt(map.current?.getCenter().lng.toFixed(4) ?? '0', 10);
      const lat = parseInt(map.current?.getCenter().lat.toFixed(4) ?? '0', 10);
      const zoom = parseInt(map.current?.getZoom().toFixed(2) ?? '4', 10);

      const center: [number, number] = [lng, lat];

      if (typeof onMove === 'function') onMove({ center, zoom });
    });
  }, [center, zoom, onMove, map, data]);

  if (!data) {
    return <Spinner />;
  }

  return (
    <Box
      ref={mapContainer}
      className="map-container"
      width="100%"
      height="100%"
    />
  );
};
