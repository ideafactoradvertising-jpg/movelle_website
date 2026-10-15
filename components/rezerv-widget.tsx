'use client';

import { useEffect, useRef, useState } from 'react';

const widgetOrigin = 'https://widgets.rezerv.co';
const widgetUrl = `${widgetOrigin}/timetable?${new URLSearchParams({
  businessId: '5b91da48-911e-4054-95b4-b6cecad69dad',
  businessUrl: 'https://movellestudio.rezerv.co',
  fontFamily: 'Montserrat',
  gaEnabled: 'true',
  gaId: 'G-PRX1VVS0TD',
  hideBranding: 'false',
  layout: 'list',
  noClassDisplay: '2',
  openInNewTab: 'true',
  outlinedButtonColor: '#681F2A',
  primaryBackground: '#F5F2EC',
  scheduleTabs: JSON.stringify([
    { id: 'classes', label: 'Classes', source: 'classes', visible: true },
    { id: 'appointments', label: 'Appointments', source: 'appointments', visible: true },
  ]),
  scheduleViewType: 'list',
  scheduleViewTypeOrder: JSON.stringify(['list', 'grid']),
  scheduleViewTypeVisibility: JSON.stringify({ list: true, grid: true }),
  secondaryBackground: '#EAE5DE',
  showRatings: 'false',
  showSlotsLeft: 'false',
  showSwitcherTabs: 'true',
  solidButtonBackground: '#681F2A',
  solidButtonText: '#F5F2EC',
  subCategory: 'Show all',
  textColor: '#292827',
})}`;

const utmKeys = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content'];

export default function RezervWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [responsiveUrl, setResponsiveUrl] = useState<string | null>(null);

  useEffect(() => {
    const screen = window.matchMedia('(max-width: 760px)');
    const updateLayout = () => {
      const url = new URL(widgetUrl);
      const layout = screen.matches ? 'list' : 'grid';
      url.searchParams.set('layout', layout);
      url.searchParams.set('scheduleViewType', layout);
      setResponsiveUrl(url.toString());
    };
    updateLayout();
    screen.addEventListener('change', updateLayout);
    return () => screen.removeEventListener('change', updateLayout);
  }, []);

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
      if (Object.keys(utms).length) {
        iframe.contentWindow?.postMessage({ type: 'UTM_PARAMS', utms }, widgetOrigin);
      }
    };

    const onLoad = () => {
      timers.forEach(timer => window.clearTimeout(timer));
      sendUtms();
      timers = [window.setTimeout(sendUtms, 500), window.setTimeout(sendUtms, 1500)];
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
  }, [responsiveUrl]);

  if (!responsiveUrl) {
    return <div className="rezerv-loading" role="status">Loading the schedule…</div>;
  }

  return (
    <iframe
      ref={iframeRef}
      id="rezerv-widget-iframe"
      title="Movelle class schedule and private-session appointments"
      src={responsiveUrl}
      className="rezerv-timetable"
      width="100%"
      height="1080"
      data-hide-branding="false"
      data-show-ratings="false"
    />
  );
}
