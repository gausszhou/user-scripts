let dq = document.querySelector.bind(document);
function Reader() {
  this.init();
}

Reader.prototype.init = function () {
  console.log("欢迎使用小说整治插件");
};

Reader.prototype.mounted = function () {
  this.body = document.body;

  // create Element
  this.new_bread_el = document.createElement("div");
  this.new_bread_el.className = "_bread";
  this.new_content_el = document.createElement("div");
  this.new_content_el.className = "_content";
  this.new_title_el = document.createElement("div");
  this.new_title_el.className = "_content_title";
  this.new_nav_el = document.createElement("div");
  this.new_nav_el.className = "_nav";

};

// 网站策略判定 判定入口
Reader.prototype.judge = function () {
  try {

    if (dq(".bread_728x90")) {
      this.kehuanNet();
      return false;
    }

    if (dq(".zhengwan_top")) {
      this.uukanshu();
      return false;
    }

    if (dq("#tbox")) {
      this.ddxs();
      return false;
    }

    if (dq(".page_chapter")) {
      this.shuquge();
      return false;
    }

    if (dq(".modbg")) {
      this.shuba();
      return false;
    }

    if (dq("#content.fonts_mesne")) {
      this.ptwxz();
      return false;
    }
    if(dq("#center_tip")){
      this.e86book()
      return false;
    }

    this.biquge();
  } catch (error) {
    alert(error);
  }
};

// 各个网站的策略

Reader.prototype.kehuanNet = function () {
  this.body.classList.add("kehuan");
  this.old_bread_el = dq("#container .topnav h2");
  this.old_title_el = dq("#container > h1");
  this.old_content_el = dq("#container .text");
  this.nav_prev = dq(".next a:nth-child(1)");
  this.nav_menu = dq(".next a:nth-child(2)");
  this.nav_next = dq(".next a:nth-child(3)");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};

Reader.prototype.ddxs = function () {
  this.body.classList.add("ddxs");
  this.old_bread_el = dq("#amain dl dt");
  this.old_title_el = dq("#amain dl dd h1");
  this.old_content_el = dq("#contents");
  this.nav_prev = dq("#footlink a:nth-child(1)");
  this.nav_menu = dq("#footlink a:nth-child(2)");
  this.nav_next = dq("#footlink a:nth-child(3)");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};

Reader.prototype.uukanshu = function () {
  this.body.classList.add("uukanshu");
  this.old_bread_el = dq(".srcbox");
  this.old_title_el = dq(".h1title #timu");
  this.old_content_el = dq("#contentbox");
  this.nav_prev = dq(".fanye #prev");
  this.nav_menu = dq(".fanye #htmlmulu");
  this.nav_next = dq(".fanye #next");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};

Reader.prototype.shuquge = function () {
  this.body.classList.add("shuquge");
  this.old_bread_el = dq(".path .p");
  this.old_title_el = dq(".content h1"); // title
  this.old_content_el = dq("#content");

  this.nav_prev = dq(".page_chapter li:nth-child(1) a");
  this.nav_menu = dq(".page_chapter li:nth-child(2) a");
  this.nav_next = dq(".page_chapter li:nth-child(3) a");
  this.nav_space = dq(".page_chapter li:nth-child(4) a");
  this.ads = [".header", "div.box_con > div.bookname div.lm", ".info > .link", ".footer"];
  this.process();
};



Reader.prototype.shuba = function () {
  this.body.classList.add("shuba");
  this.old_bread_el = dq(".bread");
  this.old_title_el = dq("h1.hide720"); // title
  this.old_content_el = dq(".txtnav");
  
  this.nav_prev = dq(".page1 a:nth-child(1)");
  this.nav_menu = dq(".page1 a:nth-child(3)");
  this.nav_next = dq(".page1 a:nth-child(4)");
  this.nav_space_1 = dq(".page1 a:nth-child(5)");
  this.ads = [".hide720"];
  this.process();
};

Reader.prototype.ptwxz = function () {
  this.body.classList.add("ptwxz");
  this.old_bread_el = null;
  this.old_title_el = dq("#main #content h1"); // title
  this.old_content_el = dq("#main #content");

  this.nav_prev = dq(".toplink a:nth-child(1)");
  this.nav_menu = dq(".toplink a:nth-child(2)");
  this.nav_next = dq(".toplink a:nth-child(3)");  
  this.nav_space_1 = dq(".toplink a:nth-child(4)");
  this.nav_space_2 = dq(".toplink a:nth-child(5)");

  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};


Reader.prototype.e86book = function () {
  this.body.classList.add("e86book");
  this.old_bread_el = dq(".layout-tit");
  this.old_title_el = dq(".reader-main .title"); // title
  this.old_content_el = dq(".reader-main #content");
  
  this.nav_prev = dq(".section-opt a:nth-child(1)");
  this.nav_menu = dq(".section-opt a:nth-child(2)");
  this.nav_next = dq(".section-opt a:nth-child(3)");
  this.nav_space_1 = dq(".section-opt a:nth-child(4)");
  this.nav_space_2 = dq(".section-opt a:nth-child(5)");
  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};

Reader.prototype.biquge = function () {
  this.body.classList.add("biquge");
  this.old_bread_el = dq(".con_top");
  this.old_title_el = dq(".content_read .bookname h1"); // title
  this.old_content_el = dq(".content_read #content");
  
  this.nav_prev = dq(".bottem2 a:nth-child(1)");
  this.nav_menu = dq(".bottem2 a:nth-child(2)");
  this.nav_next = dq(".bottem2 a:nth-child(3)");
  this.nav_space_1 = dq(".bottem2 a:nth-child(4)");
  this.nav_space_2 = dq(".bottem2 a:nth-child(5)");
  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};

// 开始处理 入口
Reader.prototype.process = function () {
  if (this.old_content_el) {
    this.mode = "read";
    this.processRead();
    this.body.classList.add("read");
  }else {
    console.log("未获取到内容");
  }
  this.processRemoveAD();
};

// 处理页面
Reader.prototype.processRead = function () {
  this.processReadBread();
  this.processReadContent();
  this.processReadNav();
  this.body.innerHTML = "";
  this.body.appendChild(this.new_bread_el);
  this.body.appendChild(this.new_content_el);
  this.body.appendChild(this.new_nav_el);
  let p_list = document.querySelectorAll("._content > p");
  p_list.forEach((p) => {
    p.innerHTML = p.innerHTML.trim();
    p.innerHTML = p.innerHTML.replace(/\s/g,"")
  });
};

// 去除广告
Reader.prototype.processRemoveAD = function () {
  if (this.ads.length) {
    console.log(this.ads.length);
    this.ads.forEach((selector) => {
      let ad = dq(selector);
      console.log(ad);
      if (ad) ad.parentElement.removeChild(ad);
    });
  }
};

// 处理面包屑
Reader.prototype.processReadBread = function () {
  this.breadCrumbs = this.old_bread_el && this.old_bread_el.getElementsByTagName("a");
  if (this.breadCrumbs && this.breadCrumbs.length) {
    Array.from(this.breadCrumbs).forEach((item, index) => {
      if (index < 3) this.new_bread_el.appendChild(item);
      if (index < 2) {
        let separate = document.createElement("span");
        separate.className += "separate";
        separate.innerText = ">";
        this.new_bread_el.appendChild(separate);
      }
    });
  }
};

// 处理正文

Reader.prototype.processReadContent = function () {
  this.new_title_el.innerHTML = this.old_title_el.innerHTML;
  let txt = this.new_title_el.outerHTML + this.old_content_el.innerHTML;
  this.new_content_el.innerHTML = removeTextADS(txt);
  this.new_content_el.querySelector("h1")?.remove()
  this.new_content_el.querySelector("table")?.remove()
  Array.from(this.new_content_el.querySelectorAll("a")).forEach(el=>el.remove())
  // 
  let mark = document.createElement("div");
  mark.className += "book-mark";
  this.new_content_el.appendChild(mark);
};

// 去除正文中的广告
function removeTextADS(txt) {
  let ads = [
    /https?(.+)html/g,
    /wa?(.+)com/g,
    /八一中文网(.+)com/g,
    /<h1>.+<h1>/g,
    /请记住(.+)域名：/g,
    "【推荐下，换源app追书真的好用，这里下载大家去快可以试试吧。】",
    "【认识十年的老书友给我推荐的追书app，换源app！真特么好用，开车、睡前都靠这个朗读听书打发时间，这里可以下载】",
    "【讲真，最近一直用换源app看书追更，换源切换，朗读音色多，安卓苹果均可。】",
    "【话说，目前朗读听书最好用的app，换源app，安装最新版。】"
  ];
  ads.forEach((item) => {
    txt = txt.replace(item, "");
  });
  return txt;
}

// 处理底部导航
Reader.prototype.processReadNav = function () {
  if (this.nav_prev) {
    this.new_nav_el.appendChild(this.nav_prev);
  } else {
    this.new_nav_el.innerHTML += "<span>上一张</span>";
  }

  this.processReadNavSeparate();

  if (this.nav_menu) {
    this.new_nav_el.appendChild(this.nav_menu);
  } else {
    this.new_nav_el.innerHTML += "<span>目录</span>";
  }
  this.processReadNavSeparate();
  if (this.nav_next) {
    this.new_nav_el.appendChild(this.nav_next);
  } else {
    this.new_nav_el.innerHTML += "<span>下一章</span>";
  }
  this.processReadNavSeparate();

  if (this.nav_space_1) {
    this.new_nav_el.appendChild(this.nav_space_1);
  }

  if (this.nav_space_2) {
    this.new_nav_el.appendChild(this.nav_space_2);
  }
};

// 处理底部分割线
Reader.prototype.processReadNavSeparate = function () {
  let separate = document.createElement("div");
  separate.className += "separate";
  this.new_nav_el.appendChild(separate);
};

export default Reader;
