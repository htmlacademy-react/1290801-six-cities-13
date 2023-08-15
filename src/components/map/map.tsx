import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../consts';
import {TOfferForList} from '../../types/offer-for-list';
import {City} from '../../types/offer';
import {useEffect, useRef} from 'react';

type MapProps = {
	city: City;
	points: TOfferForList[];
	selectedPoint: string;
};

const defaultCustomIcon = new Icon({
	iconUrl: URL_MARKER_DEFAULT,
	iconSize: [40, 59],
	iconAnchor: [20, 59]
});

const currentCustomIcon = new Icon({
	iconUrl: URL_MARKER_CURRENT,
	iconSize: [40, 59],
	iconAnchor: [20, 59]
});

function Map(props: MapProps): JSX.Element {
	const {city, points, selectedPoint} = props;

	const mapRef = useRef(null);
	const map = useMap(mapRef, city);

	useEffect(() => {
		if (map) {
			const markerLayer = layerGroup().addTo(map);
			points.forEach((point) => {
				const marker = new Marker({
					lat: point.location.latitude,
					lng: point.location.longitude
				});

				marker
					.setIcon(
						point.id === selectedPoint
							? currentCustomIcon
							: defaultCustomIcon
					)
					.addTo(markerLayer);
			});

			return () => {
				map.removeLayer(markerLayer);
			};
		}
	}, [map, points, selectedPoint]);

	return <div className="cities__right-section" style={{width: '500px'}} ref={mapRef}></div>;
	// return <h2>Map Map</h2>;
}

export default Map;
