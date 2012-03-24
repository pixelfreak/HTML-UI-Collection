;(function($)
{
	$.fn.customSelect = function(settings)
	{
		if (!($.browser.msie && parseInt($.browser.version) == 6))
		{
			this.each(function(i)
			{
				var $select = $(this);
				var $this = $select.wrap('<div class="selectmenu '+ $select[0].className +'"></div>').parent();
				$select[0].className = '';
				
				var $display = $('<div><span></span></div>').prependTo($this).find('span');
				if ($select.attr('disabled'))
				{
					$display.parent().addClass('disabled');
				}
				$select.data('display', $display);
				$display.text($select.find('option:selected').text());
			});

			this.change(function(evt)
			{
				var $this = $(this);
				var $display= $this.data('display');
				$display.text($this.find('option:selected').text());
			})
			.focus(function(evt)
			{
				$(this).parent().addClass('focus');
			})
			.blur(function(evt)
			{
				$(this).parent().removeClass('focus');
			})
			.keyup(function(evt)
			{
				// Exclude Tab, Space, Enter
				switch (evt.keyCode)
				{
					case 9:
					case 13:
					case 17:
					case 18:
					case 32:
					case 224:
						break;
					default:
						var $this = $(this);
						var $display= $this.data('display');
						$display.text($this.find('option:selected').text());
				}
			});
		}

		return this;
	};
})(jQuery);