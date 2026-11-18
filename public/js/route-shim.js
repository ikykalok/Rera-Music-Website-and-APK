    /* ── path router shim ── */
    window.route = (function () {
      var P2H = {
        '/work/hatcha': '#hatcha',
        '/work/fireflut': '#fireflut',
        '/work/existence': '#existence',
        '/work/jumpable': '#jumpable'
      };
      var H2P = {};
      Object.keys(P2H).forEach(function (p) { H2P[P2H[p]] = p; });
      function token() {
        var p = location.pathname.replace(/\/+$/, '') || '/';
        return P2H[p] || location.hash;
      }
      function fire() { window.dispatchEvent(new HashChangeEvent('hashchange')); }
      function go(t) { history.pushState(null, '', H2P[t] || ('/' + t)); fire(); }
      window.addEventListener('popstate', fire);
      return { token: token, go: go, P2H: P2H, H2P: H2P };
    })();
