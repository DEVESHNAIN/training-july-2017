var language=[
  {"title":"HTML","desc":"Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript it forms a triad of cornerstone technologies for the World Wide Web."},
  {"title":"CSS","desc":"CSS stands for Cascading Style Sheets 1)CSS describes how HTML elements are to be displayed on screen, paper, or in other media CSS saves a lot of work. 2)It can control the layout of multiple web pages all at onceExternal stylesheets are stored in CSS files"},
  {"title":"javascript","desc":"JavaScript, often abbreviated as JS, is a high-level, dynamic, untyped, object-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production."},
  {"title":"jquery","desc":"jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers."},
  {"title":"nodeJs","desc":"Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser."}
];
class accordion {
  myfunction() {
    let str="";
    let str1="";
    let str2="";
    let ids;
    language.forEach(item => {
      ids=language.indexOf(item);
      $("#acc").append(`<div class="oneBlock"> <div class="heading" id=${item.title}${ids} ><h2>${item.title}</h2></div>`);
      $("#acc").append(`<div class="desc" id=${item.title}${ids}desc >${item.desc}</div></div>`);
    });
    $("style").append(".heading, .desc { padding: 5px;  text-align: center;   background-color: #e5eecc; border: solid 1px #c3c3c3;} .desc { padding: 50px; display: none;}");
    $(document).ready(function(){
      $(".heading").click(function(){
        $(".desc").slideUp(1000);
        $("#"+($(this).attr("id")+"desc")).slideDown(1000);
        });
        $("#acc").draggable({
          });
      });
    }
  }
accordion = new accordion();
