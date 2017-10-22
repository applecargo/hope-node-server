var dama_count = 0;
var tiger_count = 0;
var bee_count = 0;
var bell_count = 0;
var bird_count = 0;
var m01_count = 0;
var hum01_count = 0;
var hum02_count = 0;
var wind_count = 0;
var cricket_count = 0;

$( document ).ready(function() {

  //overlay-ed flasher
  var flasher = new Flasher($('.flasher')[0], 2000);

  //network
  var socket = io('http://52.79.203.62:5999'); //temporal ip - amazon aws ec2 server
  var netstat = new Tgl($(".netstat")[0], 'bg-white', 'bg-near-black', null, null);
  socket.on('connect', function() {
    netstat.set();
    socket.on('disconnect', function() {
      netstat.clear();
    });
  });

  //conductor's launchpad!
  
  //clap
  var clap_start = new Btn($(".clap-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"clap", action:"start"});
                           });

  //marimba
  var marimba_start = new Btn($(".marimba-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"marimba", action:"start"});
                           });

  //dama
  var dama_start = new Btn($(".dama-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"dama", action:"start"});
                             dama_count += 1;
                             $('.dama-cnt').text(dama_count);
                           });
  var dama_stop  = new Btn($(".dama-stop"), 'bg-red', 'bg-dark-green', 300,
                           function () {
                             socket.emit("sound", {name:"dama", action:"stop"});
                           });
  var dama_faster = new Btn($(".dama-faster"), 'bg-yellow', 'bg-hot-pink', 300, function () { socket.emit("sound", {name:"dama", action:"faster"}); });
  var dama_slower = new Btn($(".dama-slower"), 'bg-red', 'bg-dark-green', 300, function () { socket.emit("sound", {name:"dama", action:"slower"}); });

  //tiger
  var tiger_start = new Btn($(".tiger-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"tiger", action:"start"});
                             tiger_count += 1;
                             $('.tiger-cnt').text(tiger_count);
                           });
  var tiger_stop  = new Btn($(".tiger-stop"), 'bg-red', 'bg-dark-green', 300,
                           function () {
                             socket.emit("sound", {name:"tiger", action:"stop"});
                           });
  var tiger_faster = new Btn($(".tiger-faster"), 'bg-yellow', 'bg-hot-pink', 300, function () { socket.emit("sound", {name:"tiger", action:"faster"}); });
  var tiger_slower = new Btn($(".tiger-slower"), 'bg-red', 'bg-dark-green', 300, function () { socket.emit("sound", {name:"tiger", action:"slower"}); });

  //bee
  var bee_start = new Btn($(".bee-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"bee", action:"start"});
                             bee_count += 1;
                             $('.bee-cnt').text(bee_count);
                           });
  var bee_stop  = new Btn($(".bee-stop"), 'bg-red', 'bg-dark-green', 300,
                           function () {
                             socket.emit("sound", {name:"bee", action:"stop"});
                           });
  var bee_faster = new Btn($(".bee-faster"), 'bg-yellow', 'bg-hot-pink', 300, function () { socket.emit("sound", {name:"bee", action:"faster"}); });
  var bee_slower = new Btn($(".bee-slower"), 'bg-red', 'bg-dark-green', 300, function () { socket.emit("sound", {name:"bee", action:"slower"}); });

  //bell
  var bell_start = new Btn($(".bell-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"bell", action:"start"});
                             bell_count += 1;
                             $('.bell-cnt').text(bell_count);
                           });
  var bell_stop  = new Btn($(".bell-stop"), 'bg-red', 'bg-dark-green', 300,
                           function () {
                             socket.emit("sound", {name:"bell", action:"stop"});
                           });
  var bell_faster = new Btn($(".bell-faster"), 'bg-yellow', 'bg-hot-pink', 300, function () { socket.emit("sound", {name:"bell", action:"faster"}); });
  var bell_slower = new Btn($(".bell-slower"), 'bg-red', 'bg-dark-green', 300, function () { socket.emit("sound", {name:"bell", action:"slower"}); });

  //bird
  var bird_start = new Btn($(".bird-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"bird", action:"start"});
                             bird_count += 1;
                             $('.bird-cnt').text(bird_count);
                           });
  var bird_stop  = new Btn($(".bird-stop"), 'bg-red', 'bg-dark-green', 300,
                           function () {
                             socket.emit("sound", {name:"bird", action:"stop"});
                           });
  var bird_faster = new Btn($(".bird-faster"), 'bg-yellow', 'bg-hot-pink', 300, function () { socket.emit("sound", {name:"bird", action:"faster"}); });
  var bird_slower = new Btn($(".bird-slower"), 'bg-red', 'bg-dark-green', 300, function () { socket.emit("sound", {name:"bird", action:"slower"}); });

  //m01
  var m01_start = new Btn($(".m01-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"m01", action:"start"});
                             m01_count += 1;
                             $('.m01-cnt').text(m01_count);
                           });
  var m01_stop  = new Btn($(".m01-stop"), 'bg-red', 'bg-dark-green', 300,
                           function () {
                             socket.emit("sound", {name:"m01", action:"stop"});
                           });
  var m01_faster = new Btn($(".m01-faster"), 'bg-yellow', 'bg-hot-pink', 300, function () { socket.emit("sound", {name:"m01", action:"faster"}); });
  var m01_slower = new Btn($(".m01-slower"), 'bg-red', 'bg-dark-green', 300, function () { socket.emit("sound", {name:"m01", action:"slower"}); });

  //hum01
  var hum01_start = new Btn($(".hum01-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"hum01", action:"start"});
                             hum01_count += 1;
                             $('.hum01-cnt').text(hum01_count);
                           });
  var hum01_stop  = new Btn($(".hum01-stop"), 'bg-red', 'bg-dark-green', 300,
                           function () {
                             socket.emit("sound", {name:"hum01", action:"stop"});
                           });
  var hum01_faster = new Btn($(".hum01-faster"), 'bg-yellow', 'bg-hot-pink', 300, function () { socket.emit("sound", {name:"hum01", action:"faster"}); });
  var hum01_slower = new Btn($(".hum01-slower"), 'bg-red', 'bg-dark-green', 300, function () { socket.emit("sound", {name:"hum01", action:"slower"}); });

  //hum02
  var hum02_start = new Btn($(".hum02-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"hum02", action:"start"});
                             hum02_count += 1;
                             $('.hum02-cnt').text(hum02_count);
                           });
  var hum02_stop  = new Btn($(".hum02-stop"), 'bg-red', 'bg-dark-green', 300,
                           function () {
                             socket.emit("sound", {name:"hum02", action:"stop"});
                           });
  var hum02_faster = new Btn($(".hum02-faster"), 'bg-yellow', 'bg-hot-pink', 300, function () { socket.emit("sound", {name:"hum02", action:"faster"}); });
  var hum02_slower = new Btn($(".hum02-slower"), 'bg-red', 'bg-dark-green', 300, function () { socket.emit("sound", {name:"hum02", action:"slower"}); });

  //wind
  var wind_start = new Btn($(".wind-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"wind", action:"start"});
                             wind_count += 1;
                             $('.wind-cnt').text(wind_count);
                           });
  var wind_stop  = new Btn($(".wind-stop"), 'bg-red', 'bg-dark-green', 300,
                           function () {
                             socket.emit("sound", {name:"wind", action:"stop"});
                           });
  var wind_faster = new Btn($(".wind-faster"), 'bg-yellow', 'bg-hot-pink', 300, function () { socket.emit("sound", {name:"wind", action:"faster"}); });
  var wind_slower = new Btn($(".wind-slower"), 'bg-red', 'bg-dark-green', 300, function () { socket.emit("sound", {name:"wind", action:"slower"}); });

  //cricket
  var cricket_start = new Btn($(".cricket-start"), 'bg-yellow', 'bg-hot-pink', 300,
                           function () {
                             socket.emit("sound", {name:"cricket", action:"start"});
                             cricket_count += 1;
                             $('.cricket-cnt').text(cricket_count);
                           });
  var cricket_stop  = new Btn($(".cricket-stop"), 'bg-red', 'bg-dark-green', 300,
                           function () {
                             socket.emit("sound", {name:"cricket", action:"stop"});
                           });
  var cricket_faster = new Btn($(".cricket-faster"), 'bg-yellow', 'bg-hot-pink', 300, function () { socket.emit("sound", {name:"cricket", action:"faster"}); });
  var cricket_slower = new Btn($(".cricket-slower"), 'bg-red', 'bg-dark-green', 300, function () { socket.emit("sound", {name:"cricket", action:"slower"}); });

  //
  ////network triggered
  socket.on('sound', function(msg) {
    if (msg.name == "stopped") {
      switch(msg.action) {
      case "dama":
        if(dama_count > 0) dama_count -= 1;
        $('.dama-cnt').text(dama_count);
        break;
      case "tiger":
        if(tiger_count > 0) tiger_count -= 1;
        $('.tiger-cnt').text(tiger_count);
        break;
      case "bee":
        if(bee_count > 0) bee_count -= 1;
        $('.bee-cnt').text(bee_count);
        break;
      case "bell":
        if(bell_count > 0) bell_count -= 1;
        $('.bell-cnt').text(bell_count);
        break;
      case "bird":
        if(bird_count > 0) bird_count -= 1;
        $('.bird-cnt').text(bird_count);
        break;
      case "m01":
        if(m01_count > 0) m01_count -= 1;
        $('.m01-cnt').text(m01_count);
        break;
      case "hum01":
        if(hum01_count > 0) hum01_count -= 1;
        $('.hum01-cnt').text(hum01_count);
        break;
      case "hum02":
        if(hum02_count > 0) hum02_count -= 1;
        $('.hum02-cnt').text(hum02_count);
        break;
      case "wind":
        if(wind_count > 0) wind_count -= 1;
        $('.wind-cnt').text(wind_count);
        break;
      case "cricket":
        if(cricket_count > 0) cricket_count -= 1;
        $('.cricket-cnt').text(cricket_count);
        break;
      default:
        ;
      }
    }
  });
});
