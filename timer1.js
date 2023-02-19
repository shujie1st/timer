// Read alarms from command line
let alarms = process.argv.slice(2);

for (const item of alarms) {
  let time = Number(item);

  // If item is not a numeric string, then time will be NaN
  // NaN can not be equal to or greater than 0, so it will be ignored
  if (time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}