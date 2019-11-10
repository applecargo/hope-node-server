var g_seat_no = 0;

$( document ).ready(function() {

  ////overlay-ed flasher
  var flasher = new Flasher($('.flasher')[0], 500);

  ////paginations
  var pages = ['#page-welcome', '#page-seatsel', '#page-loading', '#page-checklist', '#page-act'];
  var pagin = new Paginator(pages, [
    function() { //'#page-welcome'
    },
    function() { //'#page-seatsel'
    },
    function() { //'#page-loading'
      audioloader();
    },
    function() { //'#page-checklist'
      $(".show-seatsel").text(g_seat_no);
    },
    function() { //'#page-act'
    }
  ]);
  //
  $(".page-next").click(function() { pagin.next(); });
  $(".page-prev").click(function() { pagin.prev(); });

  ////seat selector
  var seat1 = new Btn($(".seat-1"), 'bg-yellow', 'bg-hot-pink', 300, function () { g_seat_no = 1; pagin.next(); });
  var seat2 = new Btn($(".seat-2"), 'bg-yellow', 'bg-hot-pink', 300, function () { g_seat_no = 2; pagin.next(); });
  var seat3 = new Btn($(".seat-3"), 'bg-yellow', 'bg-hot-pink', 300, function () { g_seat_no = 3; pagin.next(); });
  var seat4 = new Btn($(".seat-4"), 'bg-yellow', 'bg-hot-pink', 300, function () { g_seat_no = 4; pagin.next(); });
  var seat5 = new Btn($(".seat-5"), 'bg-yellow', 'bg-hot-pink', 300, function () { g_seat_no = 5; pagin.next(); });
  var seat6 = new Btn($(".seat-6"), 'bg-yellow', 'bg-hot-pink', 300, function () { g_seat_no = 6; pagin.next(); });
  var seat7 = new Btn($(".seat-7"), 'bg-yellow', 'bg-hot-pink', 300, function () { g_seat_no = 7; pagin.next(); });
  var seat8 = new Btn($(".seat-8"), 'bg-yellow', 'bg-hot-pink', 300, function () { g_seat_no = 8; pagin.next(); });

  ////audio buffer loader
  //START >>> audioloader
  var clap;
  var marimba;
  function audioloader() {

    var url;

    //error seat no. not initilized!
    if (g_seat_no == 0) return; // error.

    //
    clap =  new Tone.Player({ "url" : "audio/clap@2/01.mp3" }).toMaster();
    // clap.loop = true;
    clap.retrigger = true;
    clap_srcs = [];
    //
    marimba = new Tone.MultiPlayer(
      [
        "audio/marimba@15/01.mp3",
        "audio/marimba@15/02.mp3",
        "audio/marimba@15/03.mp3",
        "audio/marimba@15/04.mp3",
        "audio/marimba@15/05.mp3",
        "audio/marimba@15/06.mp3",
        "audio/marimba@15/07.mp3",
        "audio/marimba@15/08.mp3",
        "audio/marimba@15/09.mp3",
        "audio/marimba@15/10.mp3",
        "audio/marimba@15/11.mp3",
        "audio/marimba@15/12.mp3",
        "audio/marimba@15/13.mp3",
        "audio/marimba@15/14.mp3",
        "audio/marimba@15/15.mp3"
      ]
    ).toMaster();
    //
    dama =  new Tone.Player({ "url" : "audio/dama@8/"  + ("0" + g_seat_no + ".mp3") }).toMaster();
    dama.loop = true;
    dama.retrigger = true;
    dama_srcs = [];
    //
    tiger =  new Tone.Player({ "url" : "audio/tiger@8/"  + ("0" + g_seat_no + ".mp3") }).toMaster();
    tiger.loop = true;
    tiger.retrigger = true;
    tiger_srcs = [];
    //
    bee =  new Tone.Player({ "url" : "audio/bee@8/"  + ("0" + g_seat_no + ".mp3") }).toMaster();
    bee.loop = true;
    bee.retrigger = true;
    bee_srcs = [];
    //
    bell =  new Tone.Player({ "url" : "audio/bell@8/"  + ("0" + g_seat_no + ".mp3") }).toMaster();
    bell.loop = true;
    bell.retrigger = true;
    bell_srcs = [];
    //
    bird =  new Tone.Player({ "url" : "audio/bird@8/"  + ("0" + g_seat_no + ".mp3") }).toMaster();
    bird.loop = true;
    bird.retrigger = true;
    bird_srcs = [];
    //
    m01 =  new Tone.Player({ "url" : "audio/m01@8/"  + ("0" + g_seat_no + ".mp3") }).toMaster();
    m01.loop = true;
    m01.retrigger = true;
    m01_srcs = [];
    //
    hum01 =  new Tone.Player({ "url" : "audio/hum01@8/"  + ("0" + g_seat_no + ".mp3") }).toMaster();
    hum01.loop = true;
    hum01.retrigger = true;
    hum01_srcs = [];
    //
    hum02 =  new Tone.Player({ "url" : "audio/hum02@8/"  + ("0" + g_seat_no + ".mp3") }).toMaster();
    hum02.loop = true;
    hum02.retrigger = true;
    hum02_srcs = [];
    //
    wind =  new Tone.Player({ "url" : "audio/wind@8/"  + ("0" + g_seat_no + ".mp3") }).toMaster();
    wind.loop = true;
    wind.retrigger = true;
    wind_srcs = [];
    //
    cricket =  new Tone.Player({ "url" : "audio/cricket@8/"  + ("0" + g_seat_no + ".mp3") }).toMaster();
    cricket.loop = true;
    cricket.retrigger = true;
    cricket_srcs = [];

    //buffering
    console.log('buffering started');
    Tone.Buffer.on("load", function(){
      console.log('buffering done');
      pagin.next();
    });

    //setup network
    setup_socket();
  }
  // <<< END audioloader

  ////local sounds (ui-triggered)

  //sndcheck audio
  $('.ui-clap').click(function() {
    clap.start();
    flasher.flash();
  });

  ////network triggered
  //START >>> setup_socket
  var socket;
  var netstat;
  function setup_socket() {
    //network
    socket = io('http://13.125.85.223:5999'); //temporal ip - amazon aws ec2 server
    netstat = new Tgl($(".netstat")[0], 'bg-white', 'bg-near-black', null, null);
    socket.on('connect', function() {
      netstat.set();
      socket.on('disconnect', function() {
        netstat.clear();
      });
    });

    socket.on('sound', function(msg) {
      switch(msg.name) {
      case "clap":
        if (msg.action == "start") {
          clap.start();
        }
        break;
      case "marimba":
        if (msg.action == "start") {
          var note = Math.floor(Math.random()*15); // 0 - 14
          marimba.start(note);
        }
        break;
      case "dama":
        if (msg.action == "start") {
          dama_srcs.push(dama.start()._source); // start playbacks and collect their '_source's..
          flasher.flash();
        }
        else if (msg.action == "stop") {
          if (dama_srcs.length != 0) { (dama_srcs.shift()).stop(); flasher.flash(); }
          if (g_seat_no == 1) { socket.emit("sound", {name:"stopped", action:"dama"}); }
        }
        else if (msg.action == "faster") { if (dama_srcs.length != 0) { dama_srcs[dama_srcs.length - 1].playbackRate.value += 0.2; } }
        else if (msg.action == "slower") { if (dama_srcs.length != 0) { dama_srcs[dama_srcs.length - 1].playbackRate.value -= 0.2; } }
        break;
      case "tiger":
        if (msg.action == "start") {
          tiger_srcs.push(tiger.start()._source); // start playbacks and collect their '_source's..
          flasher.flash();
        }
        else if (msg.action == "stop") {
          if (tiger_srcs.length != 0) { (tiger_srcs.shift()).stop(); flasher.flash(); }
          if (g_seat_no == 1) { socket.emit("sound", {name:"stopped", action:"tiger"}); }
        }
        else if (msg.action == "faster") { if (tiger_srcs.length != 0) { tiger_srcs[tiger_srcs.length - 1].playbackRate.value += 0.2; } }
        else if (msg.action == "slower") { if (tiger_srcs.length != 0) { tiger_srcs[tiger_srcs.length - 1].playbackRate.value -= 0.2; } }
        break;
      case "bee":
        if (msg.action == "start") {
          bee_srcs.push(bee.start()._source); // start playbacks and collect their '_source's..
          flasher.flash();
        }
        else if (msg.action == "stop") {
          if (bee_srcs.length != 0) { (bee_srcs.shift()).stop(); flasher.flash(); }
          if (g_seat_no == 1) { socket.emit("sound", {name:"stopped", action:"bee"}); }
        }
        else if (msg.action == "faster") { if (bee_srcs.length != 0) { bee_srcs[bee_srcs.length - 1].playbackRate.value += 0.2; } }
        else if (msg.action == "slower") { if (bee_srcs.length != 0) { bee_srcs[bee_srcs.length - 1].playbackRate.value -= 0.2; } }
        break;
      case "bell":
        if (msg.action == "start") {
          bell_srcs.push(bell.start()._source); // start playbacks and collect their '_source's..
          flasher.flash();
        }
        else if (msg.action == "stop") {
          if (bell_srcs.length != 0) { (bell_srcs.shift()).stop(); flasher.flash(); }
          if (g_seat_no == 1) { socket.emit("sound", {name:"stopped", action:"bell"}); }
        }
        else if (msg.action == "faster") { if (bell_srcs.length != 0) { bell_srcs[bell_srcs.length - 1].playbackRate.value += 0.2; } }
        else if (msg.action == "slower") { if (bell_srcs.length != 0) { bell_srcs[bell_srcs.length - 1].playbackRate.value -= 0.2; } }
        break;
      case "bird":
        if (msg.action == "start") {
          bird_srcs.push(bird.start()._source); // start playbacks and collect their '_source's..
          flasher.flash();
        }
        else if (msg.action == "stop") {
          if (bird_srcs.length != 0) { (bird_srcs.shift()).stop(); flasher.flash(); }
          if (g_seat_no == 1) { socket.emit("sound", {name:"stopped", action:"bird"}); }
        }
        else if (msg.action == "faster") { if (bird_srcs.length != 0) { bird_srcs[bird_srcs.length - 1].playbackRate.value += 0.2; } }
        else if (msg.action == "slower") { if (bird_srcs.length != 0) { bird_srcs[bird_srcs.length - 1].playbackRate.value -= 0.2; } }
        break;
      case "m01":
        if (msg.action == "start") {
          m01_srcs.push(m01.start()._source); // start playbacks and collect their '_source's..
          flasher.flash();
        }
        else if (msg.action == "stop") {
          if (m01_srcs.length != 0) { (m01_srcs.shift()).stop(); flasher.flash(); }
          if (g_seat_no == 1) { socket.emit("sound", {name:"stopped", action:"m01"}); }
        }
        else if (msg.action == "faster") { if (m01_srcs.length != 0) { m01_srcs[m01_srcs.length - 1].playbackRate.value += 0.2; } }
        else if (msg.action == "slower") { if (m01_srcs.length != 0) { m01_srcs[m01_srcs.length - 1].playbackRate.value -= 0.2; } }
        break;
      case "hum01":
        if (msg.action == "start") {
          hum01_srcs.push(hum01.start()._source); // start playbacks and collect their '_source's..
          flasher.flash();
        }
        else if (msg.action == "stop") {
          if (hum01_srcs.length != 0) { (hum01_srcs.shift()).stop(); flasher.flash(); }
          if (g_seat_no == 1) { socket.emit("sound", {name:"stopped", action:"hum01"}); }
        }
        else if (msg.action == "faster") { if (hum01_srcs.length != 0) { hum01_srcs[hum01_srcs.length - 1].playbackRate.value += 0.2; } }
        else if (msg.action == "slower") { if (hum01_srcs.length != 0) { hum01_srcs[hum01_srcs.length - 1].playbackRate.value -= 0.2; } }
        break;
      case "hum02":
        if (msg.action == "start") {
          hum02_srcs.push(hum02.start()._source); // start playbacks and collect their '_source's..
          flasher.flash();
        }
        else if (msg.action == "stop") {
          if (hum02_srcs.length != 0) { (hum02_srcs.shift()).stop(); flasher.flash(); }
          if (g_seat_no == 1) { socket.emit("sound", {name:"stopped", action:"hum02"}); }
        }
        else if (msg.action == "faster") { if (hum02_srcs.length != 0) { hum02_srcs[hum02_srcs.length - 1].playbackRate.value += 0.2; } }
        else if (msg.action == "slower") { if (hum02_srcs.length != 0) { hum02_srcs[hum02_srcs.length - 1].playbackRate.value -= 0.2; } }
        break;
      case "wind":
        if (msg.action == "start") {
          wind_srcs.push(wind.start()._source); // start playbacks and collect their '_source's..
          flasher.flash();
        }
        else if (msg.action == "stop") {
          if (wind_srcs.length != 0) { (wind_srcs.shift()).stop(); flasher.flash(); }
          if (g_seat_no == 1) { socket.emit("sound", {name:"stopped", action:"wind"}); }
        }
        else if (msg.action == "faster") { if (wind_srcs.length != 0) { wind_srcs[wind_srcs.length - 1].playbackRate.value += 0.2; } }
        else if (msg.action == "slower") { if (wind_srcs.length != 0) { wind_srcs[wind_srcs.length - 1].playbackRate.value -= 0.2; } }
        break;
      case "cricket":
        if (msg.action == "start") {
          cricket_srcs.push(cricket.start()._source); // start playbacks and collect their '_source's..
          flasher.flash();
        }
        else if (msg.action == "stop") {
          if (cricket_srcs.length != 0) { (cricket_srcs.shift()).stop(); flasher.flash(); }
          if (g_seat_no == 1) { socket.emit("sound", {name:"stopped", action:"cricket"}); }
        }
        else if (msg.action == "faster") { if (cricket_srcs.length != 0) { cricket_srcs[cricket_srcs.length - 1].playbackRate.value += 0.2; } }
        else if (msg.action == "slower") { if (cricket_srcs.length != 0) { cricket_srcs[cricket_srcs.length - 1].playbackRate.value -= 0.2; } }
        break;
      case "stopped": // only conductor will receive this.
        break;
      default:
        console.log("(socket.io)protocol error");
      }
    });
  } //END >>> setup_socket
});
