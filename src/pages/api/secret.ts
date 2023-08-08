import type { NextApiRequest, NextApiResponse } from 'next';
import { HttpMethod } from '@/types';

export default async function secret(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case HttpMethod.GET:
      return res.status(200).send({
        googleMapsAPIKey: process.env.GOOGLE_MAPS_API_KEY ?? '',
        mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN ?? '',
      });
    default:
      res.setHeader('Allow', [HttpMethod.GET]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
