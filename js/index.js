jQuery(document).ready(function($) {
	$.getJSON('http://capitol.tw/gene/monkey.php', function(json) {
		$.each(json, function(key, value) {
			/* iterate through array or object */
			var cardList = $('#card-list');

			cardList.append(
				'<div class="column">'+
					'<div class="ui card">'+
							'<a class="img" href="'+value.link+'">'+
								'<div class="image">'+
									'<img src="'+value.picture+'">'+
								'</div>'+
							'</a>'+
							'<div class="content">'+
								'<a href="'+value.link+'" class="header from-name" data-fbid="'+value.from_fbid+'">'+value.from_name+'</a>'+
								'<div class="meta">'+
									'<span class="date">'+value.created_time+'</span>'+
								'</div>'+
								'<div class="description">'+
									value.message+
								'</div>'+
							'</div>'+
							'<div class="extra content">'+
								'<a class="likes">'+
									'<i class="thumbs outline up icon"></i> '+value.likes+' Likes'+
								'</a>'+
								'<a class="shares">'+
									'<i class="share alternate icon"></i> '+value.shares+' Shares'+
								'</a>'+
							'</div>'+
					'</div>'+
				'</div>'
				);
		});
	
		// waterfall
		$('#card-list').waterfall({
			colMinWidth: 300, 
			defaultContainerWidth: 1000,
			autoresize: true,
			callbacks: {
				loadingFinished: function($loading, isBeyondMaxPage) {
					if ( !isBeyondMaxPage ) {
						$(window).resize();
					}
				}
			}
		});
	});
});

$(window).load(function(){
	$(window).resize();
});