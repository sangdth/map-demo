import type { Geography } from '@/types';

export const getLatLongFromGeography = (
  g: Partial<Geography> | null | undefined
) => {
  if (!g || !g.coordinates || g.coordinates.length !== 2) {
    return { longitude: null, latitude: null };
  }
  const [longitude, latitude] = g.coordinates;
  return {
    longitude: Number(longitude) ?? null,
    latitude: Number(latitude) ?? null,
  };
};
