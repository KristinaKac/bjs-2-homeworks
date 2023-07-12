class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
    addClock(time, callback) {
      if (!time || !callback) {
        throw new Error('Отсутствуют обязательные аргументы');
      }
      const haveCall = this.alarmCollection.some((item) => time.hasOwnProperty(item.time));
  
      if (haveCall) {
        console.warn('Уже присутствует звонок на это же время');
      }
      let clock = {
        callback,
        time,
        canCall: true,
      }
      this.alarmCollection.push(clock);
    }
    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter((item, index, arr) => {
        if (item.time === time) {
          arr.splice(arr[index], 1);
        }
        return !(item.time === time);
      });
    }
    getCurrentFormattedTime() {
      let date = new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return date;
    }
    start() {
      if (this.intervalId != null) {
        return;
      }
      this.intervalId = setInterval(() =>
        this.alarmCollection.forEach(item => {
          if (item.time === this.getCurrentFormattedTime() && item.canCall) {
            item.canCall = false;
            item.callback();
          }
        }), 1000);
    }
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    resetAllCalls() {
      this.alarmCollection.forEach(item => item.canCall = true);
    }
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }