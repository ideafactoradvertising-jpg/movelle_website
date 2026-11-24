'use client';

import { useEffect, useRef } from 'react';

const widgetOrigin = 'https://widgets.rezerv.co';
const widgetUrl = `${widgetOrigin}/packages?${new URLSearchParams({
  businessId: '5b91da48-911e-4054-95b4-b6cecad69dad',
  businessUrl: 'https://movellestudio.rezerv.co',
  fontFamily: 'Inter',
  gaEnabled: 'true',
  gaId: 'G-PRX1VVS0TD',
  hideBranding: 'false',
  layout: 'list',
  openInNewTab: 'true',
  outlinedButtonColor: '#681F2A',
  primaryBackground: '#F5F2EC',
  scheduleViewType: 'list',
  scheduleViewTypeOrder: JSON.stringify(['list', 'grid']),
  scheduleViewTypeVisibility: JSON.stringify({ list: true, grid: true }),
  secondaryBackground: '#EAE5DE',
  showPrice: 'true',
  showRatings: 'true',
  solidButtonBackground: '#681F2A',
  solidButtonText: '#F5F2EC',
  subCategory: 'Show all',
  textColor: '#292827',
})}`;

const utmKeys = [
  'utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content',
];

export default function RezervPackagesWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    let timers: number[] = [];

    const sendUtms = () => {
      const params = new URLSearchParams(window.location.search);
      const utms: Record<string, string> = {};
      for (const key of utmKeys) {
        const value = params.get(key);
        if (value) utms[key] = value;
      }
      if (Object.keys(utms).length > 0) {
        iframe.contentWindow?.postMessage(
          { type: 'UTM_PARAMS', utms }, widgetOrigin
        );
      }
    };

    const onLoad = () => {
      timers.forEach(timer => window.clearTimeout(timer));
      sendUtms();
      timers = [
        window.setTimeout(sendUtms, 500),
        window.setTimeout(sendUtms, 1500),
      ];
    };

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== widgetOrigin || event.source !== iframe.contentWindow) return;
      if (event.data?.type === 'REQUEST_UTM_PARAMS') sendUtms();
    };

    iframe.addEventListener('load', onLoad);
    window.addEventListener('message', onMessage);
    onLoad();

    return () => {
      iframe.removeEventListener('load', onLoad);
      window.removeEventListener('message', onMessage);
      timers.forEach(timer => window.clearTimeout(timer));
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id="rezerv-packages-iframe"
      title="Movelle Pilates packages and prices"
      src={widgetUrl}
      width="100%"
      height="1080"
      style={{ display: 'block', border: 0, width: '100%', height: 1080 }}
      data-hide-branding="false"
      data-show-ratings="true"
      data-show-price="true"
    />
  );
}
