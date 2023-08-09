import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type {
  default as MapboxMap,
  MapLayerMouseEvent,
  IControl,
  LngLatBounds,
  MapRef,
  ViewState,
} from 'react-map-gl';

export enum HttpMethod {
  CONNECT = 'CONNECT',
  DELETE = 'DELETE',
  GET = 'GET',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
  TRACE = 'TRACE',
}

export type {
  MapboxMap,
  MapLayerMouseEvent,
  IControl,
  LngLatBounds,
  MapRef,
  ViewState,
  NextPage,
  AppProps,
};

export type Crs = {
  type: string;
  properties: {
    name: string;
  };
};

export type Coordinates = [number, number]; // [long, lat]

export type Geography = {
  type: string;
  crs: Crs;
  coordinates: Coordinates;
};

export type PinData = {
  id: string;
  location: Partial<Geography>;
  label?: string;
  description?: string;
};
