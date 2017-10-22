//jQuery dependant library!!
//use following objects only in
//
// $( document ).ready(function() { ... });
//

////ui utilities
function Btn(elem, coloron, coloroff, blinktime, callback) {
    this.elem = elem;
    this.coloron = coloron;
    this.coloroff = coloroff;
    this.blinktime = blinktime;
    this.callback = callback;
    $(this.elem).addClass(coloroff);

    $(elem).click(function() {
	$(this).removeClass(coloroff).addClass(coloron);
	if (callback != null) callback();
	setTimeout(function() {
	    $(this).removeClass(coloron).addClass(coloroff);
	}.bind(this), blinktime);
    });

    this.click = function() {
	$(this.elem).click();
    }
}

function Tgl(elem, coloron, coloroff, callbackon, callbackoff) {
    this.elem = elem;
    this.coloron = coloron;
    this.coloroff = coloroff;
    this.callbackon = callbackon;
    this.callbackoff = callbackoff;
    $(this.elem).addClass(coloroff);

    $(elem).change(function() {
	if ($(this).prop('checked') == true) {
	    $(this).removeClass(coloroff).addClass(coloron);
	    if (callbackon != null) callbackon();
	}
	else {
	    $(this).removeClass(coloron).addClass(coloroff);
	    if (callbackoff != null) callbackoff();
	}
    });
    
    this.set = function() {
	$(this.elem).prop('checked', true).change();
    }
    
    this.clear = function() {
	$(this.elem).prop('checked', false).change();
    }
}

function Flasher(elem, flashtime) {
    this.elem = elem;
    this.flashtime = flashtime;
    this.color = 'bg-white';
    $(this.elem).addClass(this.color);
    // this.colors = ['bg-white', 'bg-red', 'bg-yellow', 'bg-green', 'bg-blue', 'bg-hot-pink', 'bg-light-purple', 'bg-lime'];
    this.colors = ['bg-white'];

    this.flash = function() {
	$(this.elem).stop(true, true);
	$(this.elem).hide();
	$(this.elem).removeClass(this.color);
	this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
	$(this.elem).addClass(this.color);
	$(this.elem).show();
	$(this.elem).fadeOut(this.flashtime);
    };
}

function Paginator(names, callbacks) { // names: array of page names (div class prop), callbacks: array of p. chg. callbacks
  this.names = names;
  this.elems = [];
  for (var ee = 0; ee < names.length; ee++) {
    this.elems[ee] = $(names[ee]);
  }
  this.callbacks = callbacks;
  this.curpage = 0;

  this.go = function(newpage) {
    $(this.elems[this.curpage]).hide();
    $(this.elems[newpage]).show();
    this.callbacks[newpage]();
    this.curpage = newpage;
  };
  this.next = function() {
    if (this.curpage >= (this.elems.length - 1)) {
      this.go(0);
    } else {
      this.go(this.curpage + 1);
    }
  };
  this.prev = function() {
    if (this.curpage <= 0) {
      this.go(this.elems.length - 1);
    } else {
      this.go(this.curpage - 1);
    }
  };
}
