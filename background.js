chrome.runtime.onMessage.addListener(function (request) {
  if (request.message === "start_timer") {
    chrome.alarms.clearAll();
    // Get the countdown timer values from the message
    const hours = request.hours;
    const minutes = request.minutes;
    const seconds = request.seconds;

    // Calculate the total time in milliseconds
    const totalTime = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;

    console.log("blslsaldkasdksa", totalTime);

    // Get the start time and calculate the end time
    const startTime = Date.now();
    const endTime = startTime + totalTime;

    // Update the countdown timer every second
    const intervalId = setInterval(() => {
      const remainingTime = endTime - Date.now();
      console.log(remainingTime);

      if (remainingTime <= 0) {
        // Time's up!
        clearInterval(intervalId);
        chrome.runtime.sendMessage({ message: "timer_complete" });
      } else {
        // Update the countdown timer
        const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
        const remainingMinutes = Math.floor((remainingTime / 1000 / 60) % 60);
        const remainingHours = Math.floor(remainingTime / 1000 / 60 / 60);

        chrome.runtime.sendMessage({
          message: "update_timer",
          hours: remainingHours,
          minutes: remainingMinutes,
          seconds: remainingSeconds,
        });
      }
    }, 1000);
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log(alarm.name);
  console.log("Hello, world!");
});
