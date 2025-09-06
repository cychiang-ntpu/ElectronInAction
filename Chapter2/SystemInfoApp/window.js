const os = require('os');
const disk = require('diskusage');

function getMachineName() {
  return os.hostname();
}

function getCpu() {
  const cpus = os.cpus();
  console.log(cpus)
  if (cpus.length > 0) {
    return cpus[0].model
  } else {
    return '';
  }
}

function getFreemem() {
  return `${convert(os.freemem())}G`;
}

function getTotalmem(){
  return `${convert(os.totalmem())}G`;
}

function convert(bytes) {
  return (bytes/1024/1024/1024).toFixed(2)
}

function getUptime(){
  const seconds = os.uptime();
  const hours = Math.floor(seconds/3600);
  const minutes = Math.floor((seconds%3600)/60);
  const secs = seconds%60;
  return `${hours}小時 ${minutes}分鐘 ${secs}秒`;
}

// 獲取磁盤信息
function getDiskInfo() {
  let info;
  try {
    info = disk.checkSync('C:');
    return `Total: ${(info.total/1024/1024/1024).toFixed(2)} GB, Free: ${(info.free/1024/1024/1024).toFixed(2)} GB`;
  } catch (err) {
    return 'Unable to get disk info';
  }
}

document.querySelector('#hostname span').innerHTML = getMachineName();
document.querySelector('#cpu-arch span').innerHTML = os.arch();
document.querySelector('#cpu span').innerHTML = getCpu();
document.querySelector('#platform span').innerHTML = os.platform();
document.querySelector('#freemem span').innerHTML = getFreemem();
document.querySelector('#totalmem span').innerHTML = getTotalmem();
document.querySelector('#uptime span').innerHTML = getUptime();
document.querySelector('#disk span').innerHTML = getDiskInfo();


function updateUptime() {
  document.querySelector('#uptime span').innerHTML = getUptime();
}

// Initial update
updateUptime();

// Update every second
setInterval(updateUptime, 1000);


function updateDiskInfo() {
  document.querySelector('#disk span').innerHTML = getDiskInfo();
}

// Initial update
updateDiskInfo();

// Update every minute
setInterval(updateDiskInfo, 60000);