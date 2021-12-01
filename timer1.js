let timerBeep = process.argv.slice(2);
for (let i = 0; i < timerBeep.length; i++) {
  if (timerBeep[i] > 0) {
    setTimeout(() => {
      console.log(`Beep at ${timerBeep[i]}`);
      process.stdout.write('\x07');
    }, timerBeep[i] * 1000);
  }
}

