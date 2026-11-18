export function RouteCurtain() {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<!-- ════ ROUTE CURTAIN ════ -->
<div id="route-curtain" aria-hidden="true"></div>`
      }}
    />
  );
}
