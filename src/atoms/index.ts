import { DEFAULT_VIEWSTATE } from '@/utils/constants';
import { atom, useAtom, useSetAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { ViewState } from '@/types';

export { atom, useAtom, useSetAtom };

export const mapAtom = atomWithStorage<ViewState>('map', DEFAULT_VIEWSTATE);
