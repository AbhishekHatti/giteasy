function Stopwatch() {
  let startTime,
    endTime,
    running,
    alaramDuration,
    duration = 0;
  this.start = function() {
    if (running) throw new Error("Stopwatch is already  started ");

    running = true;
    startTime = new Date();
  };
  this.stop = function() {
    if (!running) throw new Error("Stopwatch is not started ");

    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  this.alaram = function(alaramDuration) {
    if (alaramDuration < startTime.getTime() / 1000) {
      alert(alaramDuration + " seconds " + " is alredy over. ");
    } else if (alaramDuration == startTime.getTime() / 1000) {
      alert(alaramDuration + " seconds " + " your alert is here ");
    }
  };
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
