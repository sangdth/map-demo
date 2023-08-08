import { MapView } from '@/components/MapView/MapView';
import { Flex, GeneralLayout } from '@/components';
import { useAtom, mapAtom } from '@/atoms';
import { pinData } from '@/utils/pins';

export default function IndexPage() {
  const [mapViewState, setMapViewState] = useAtom(mapAtom);

  return (
    <GeneralLayout>
      <Flex width="100vw" height="100vh">
        <MapView
          data={pinData}
          viewState={mapViewState}
          onChange={setMapViewState}
        />
      </Flex>
    </GeneralLayout>
  );
}
