import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapboxMapProps {
  initialOptions?: Omit<mapboxgl.MapboxOptions, "container">;
  onMapLoaded?(): void;
  onMapRemoved?(): void;
  employees: any;
}

function MapboxMap({
  initialOptions,
  onMapLoaded,
  onMapRemoved,
  employees,
}: MapboxMapProps) {
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapNode = useRef(null);

  // Add the markers to the map and store the map
  const getNewMap = (map: any) => {
    employees.forEach((emp: any) => {
      new mapboxgl.Marker({ color: emp.color })
        .setLngLat([emp.long, emp.lat])
        .addTo(map);
    });
    setMap(map);
    return map;
  };

  useEffect(() => {
    const node = mapNode.current;
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [3, 33],
      zoom: 1.5,
      ...initialOptions,
    });

    mapboxMap.on("load", () => {
      getNewMap(mapboxMap);
    });

    return () => {
      mapboxMap.remove();
      if (onMapRemoved) onMapRemoved();
    };
  }, []);

  return (
    <div
      ref={mapNode}
      style={{
        width: "80%",
        minHeight: "800px",
        margin: 20,
        borderRadius: 20,
        border: "1px solid black",
      }}
    />
  );
}

export default MapboxMap;
