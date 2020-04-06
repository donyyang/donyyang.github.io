var obj = {
  init: function () {
    this.tab();
  },
  tab: function () {
    $('.noMore').on('click', function () {
      var index = $(this).index();
      $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
      $(".list-content").hide();
      console.log(index);
      $(".list-content").eq(index).show();
    });

    var $iosActionsheet = $('#iosActionsheet');
    var $iosMask = $('#iosMask');

    function hideActionSheet() {
      $iosActionsheet.removeClass('weui-actionsheet_toggle');
      $iosMask.fadeOut(200);
    }

    $iosMask.on('click', hideActionSheet);
    $('#iosActionsheetCancel').on('click', hideActionSheet);
    $("#showIOSActionSheet").on("click", function () {
      $iosActionsheet.addClass('weui-actionsheet_toggle');
      $iosMask.fadeIn(200);
    });
  },
}

obj.init();