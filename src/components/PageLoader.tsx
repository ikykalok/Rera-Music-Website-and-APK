export function PageLoader() {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<div id="page-loader" role="status" aria-live="polite" aria-label="Loading">
    <div class="pl-stage">
      <span class="pl-dots" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
      <span class="pl-pac"><span class="pl-lip pl-top"></span><span class="pl-lip pl-bottom"></span></span>
    </div>
    <p class="pl-line">Loading…</p>
  </div>`
      }}
    />
  );
}
