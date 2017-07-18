
FlowRouter.route('/' ,{
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {top:"headerTemplate", main:"uiList"});
    console.log("task template");
  }
});
FlowRouter.route('/task/:taskIds', {
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', { top: "subTaskHeader", main: "subTaskList" });
    // document.body.innerHTML = "";
    console.log("Yeah! We are on the post:", params.taskIds);
  }
});
