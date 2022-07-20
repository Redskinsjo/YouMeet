import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

interface MapboxMapProps {
  initialOptions?: Omit<mapboxgl.MapboxOptions, 'container'>
  onMapLoaded?(): void
  onMapRemoved?(): void
  center: any
  zoom: any
  employees?: any
  styles?: any
}

function MapboxMap({
  initialOptions,
  // onMapLoaded,
  onMapRemoved,
  center,
  zoom,
  employees = [],
  styles,
}: MapboxMapProps) {
  const mapNode = useRef(null)

  // Add the markers to the map and store the map
  const getNewMap = (map: any) => {
    employees.forEach((emp: any) => {
      new mapboxgl.Marker({ color: emp.color, scale: 0.6 })
        .setLngLat([emp.long, emp.lat])
        .addTo(map)
    })
  }

  useEffect(() => {
    const node = mapNode.current
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    if (typeof window === 'undefined' || node === null) return

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: 'mapbox://styles/mapbox/streets-v11',
      center,
      zoom,
      ...initialOptions,
    })

    mapboxMap.on('load', () => {
      getNewMap(mapboxMap)
    })

    return () => {
      mapboxMap.remove()
      if (onMapRemoved) onMapRemoved()
    }
  }, [])

  return <div ref={mapNode} style={styles} />
}

export default MapboxMap
