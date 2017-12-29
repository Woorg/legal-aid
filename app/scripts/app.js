import svg4everybody from 'svg4everybody';
import $ from 'jquery';

(function ($) {
	svg4everybody();

	$(function() {

		var styles = [
			'padding: 9px',
			'background: #fff',
			'color: #000',
			'display: inline-block',
			'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
			'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
			'line-height: 1.4',
			'text-align: left',
			'font-size: 12px',
			'font-weight: 400'
		].join(';');

		console.log('%c заказать html верстку',  styles);
		console.log('%c gorlov35@gmail.com',  styles);

		function pageWidget(pages) {
			var widgetWrap = $('<div class="widget"><ul class="widget__list"></ul></div>');
			widgetWrap.prependTo("body");
			for (var i = 0; i < pages.length; i++) {
				$('<li class="widget__item"><a class="widget__link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget__list');
			}
			var widgetStilization = $('<style>body {position:relative} .widget{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget__item{padding:0 0 10px}.widget__link{color:#fff;text-decoration:none;font-size:15px;}.widget__link:hover{text-decoration:underline} </style>');
			widgetStilization.prependTo(".widget");
			}

		pageWidget(['index', 'hbk-news', 'hbk-results']);

	});


})(jQuery);
