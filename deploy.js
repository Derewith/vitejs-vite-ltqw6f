import * as dotenv from 'dotenv';
import FtpDeploy from 'ftp-deploy';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();
const ftpDeploy = new FtpDeploy();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Debug events
ftpDeploy.on('uploading', function(data) {
    console.log('[FTP] Uploading:', data.filename);
});

ftpDeploy.on('uploaded', function(data) {
    console.log('[FTP] Uploaded:', data.filename);
});

ftpDeploy.on('log', function(data) {
    console.log('[FTP] Log:', data);
});

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT || 21,
  localRoot: __dirname + "/build",
  remoteRoot: process.env.FTP_REMOTE_ROOT || "/",
  include: ["*", "**/*", ".htaccess"],
  exclude: [],
  deleteRemote: false,
  forcePasv: true,
  sftp: false,
  // Additional options for troubleshooting
  timeout: 30000, // 30 seconds timeout
  verbose: true
};

console.log("[FTP] Starting deployment with config:", {
  host: config.host,
  user: config.user,
  remoteRoot: config.remoteRoot,
  port: config.port
});

ftpDeploy
  .deploy(config)
  .then((res) => console.log("[FTP] ✅ Deployment successful:", res))
  .catch((err) => {
    console.error("[FTP] ❌ Deployment failed");
    console.error("[FTP] Error details:", err);
    if (err.code === 530) {
      console.error("[FTP] Authentication failed. Please check your credentials.");
    }
  });
