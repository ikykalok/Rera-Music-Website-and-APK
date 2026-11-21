const os = require("os");
const { spawn } = require("child_process");

const port = process.env.PORT || "3000";

function getLanIPv4() {
  const nets = os.networkInterfaces();
  const candidates = [];
  for (const name of Object.keys(nets)) {
    if (/loopback|vethernet|wsl|docker|vmware|virtualbox/i.test(name)) continue;
    for (const net of nets[name] || []) {
      if (net.family === "IPv4" && !net.internal && !net.address.startsWith("169.254.")) {
        candidates.push({ name, address: net.address });
      }
    }
  }
  const wifi = candidates.find((c) => /wi-?fi|wlan/i.test(c.name));
  return (wifi || candidates[0] || { address: null }).address;
}

const lanIp = getLanIPv4();
console.log("");
console.log("  Ryno Music Dev Server");
console.log(`  - Local:        http://localhost:${port}`);
if (lanIp) {
  console.log(`  - Mobile (LAN): http://${lanIp}:${port}`);
} else {
  console.log("  - Mobile (LAN): No active Wi-Fi/LAN IPv4 interface detected");
}
console.log("");

const nextCli = require.resolve("next/dist/bin/next");
const child = spawn(process.execPath, [nextCli, "dev", "-H", "0.0.0.0", "-p", String(port)], {
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
