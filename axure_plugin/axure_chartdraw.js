var j=document.createElement('script');
j.src='http://localhost/jquery-ui.js';
document.head.appendChild(j);

var m=document.createElement('script');
m.src='http://localhost/jquery-ui.multidatespicker.js';
document.head.appendChild(m);

var s=document.createElement('script');
s.src='http://localhost/Chart.min.js';
document.head.appendChild(s);

var g=document.createElement('script');
g.type='text/javascript';
g.src='http://localhost/jsapi';
document.head.appendChild(g);


var jtheme = document.createElement('link');
jtheme.href='http://localhost/jquery-ui.theme.min.css';
jtheme.type='text/css';
jtheme.rel='stylesheet';
document.head.appendChild(jtheme);

function drawChain() {
	for (i=1; i<=5; i++) {
		var canvas = '<canvas id="chart'+i+'" width="200" height="250"></canvas>';
		$('[data-label="label'+i+'"]').empty().append(canvas);
		var data = {
			labels : [""],
			datasets : [{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				data : [50 + i*3]
			}, {
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				data : [Math.round(Math.random()*100)]
			}
			]
		};
		options = {};
		new Chart(document.getElementById("chart"+i).getContext("2d")).Bar(data,options);
	}
}

function drawGoogleChain() {
	for (i=1; i<=6; i++) {
		var canvas = '<canvas id="chain_chart'+i+'" width="850" height="100"></canvas>';
		$('[data-label="labelchain'+i+'"]').empty().append(canvas);
		var data = {
			labels : [""],
			datasets : [{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				data : [50 + i*3]
			}, {
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				data : [Math.round(Math.random()*100)]
			}
			]
		};
		options = {
			graphMin : 0
		};
		new Chart(document.getElementById("chain_chart"+i).getContext("2d")).HorizontalBar(data,options);
	}
}

function drawDistStruct(type) {
	type = type || 0;
	
    var global_set_left = $('[data-label="global_var_drawDistStruct_left"] input')[0].value;
    global_set_left = 'initial'==global_set_left ? type : parseInt(global_set_left);
    var global_set_right = $('[data-label="global_var_drawDistStruct_right"] input')[0].value;
    global_set_right = 'initial'==global_set_right ? type : parseInt(global_set_right);

//	if (type < 0) {
//		var divid=4;
//	} else if (2==type || 8==type) {
//		var divid=3;
//	} else if (type>2) {
//		var divid=2;
//	} else {
//		var divid=1;
//	}

    if (2==global_set_left || 8==global_set_left) {
		var divid=3;
	} else if (global_set_left>2) {
		var divid=2;
	} else {
		var divid=1;
	}
	
	var div = '<div id="google_piechart'+divid+'" style="width: 1000px; height: 610px;"></div>';
	$('[data-label="label_dist_struct'+divid+'"]').empty().append(div);
	
	google.load("visualization", "1", {packages:["corechart"]});
	//google.setOnLoadCallback(drawChart);
	function drawLeftChart() {
		if (0==global_set_left) {
			var data = google.visualization.arrayToDataTable([
			  ['dimension', 'measurement'],
			  ['国民足球',     	Math.round(Math.random()*10000)],
			  ['征途2',			Math.round(Math.random()*10000)],
			  ['征途',    		Math.round(Math.random()*10000)],
			  ['绿色征途',   	Math.round(Math.random()*10000)],
			  ['大主宰', 		Math.round(Math.random()*10000)],
			  ['征途手机版',  	Math.round(Math.random()*10000)]
			]);
			var options = {
			  title: '产品贡献结构',
			  is3D: true
			};
		} else if (1==global_set_left) {
			var data = google.visualization.arrayToDataTable([
			  ['dimension', 'measurement'],
			  ['APP STORE',     		Math.round(Math.random()*10000)],
			  ['ANDROID 全部',			Math.round(Math.random()*10000)],
			  ['ANDROID 4399',    		Math.round(Math.random()*10000)],
			  ['ANDROID 机锋',   		Math.round(Math.random()*10000)],
			  ['ANDROID 360', 			Math.round(Math.random()*10000)],
			  ['ANDROID 百度',  		Math.round(Math.random()*10000)]
			]);
			var options = {
			  title: '渠道贡献结构',
			  is3D: true
			};
		} else if (2==global_set_left || 3==global_set_left || 4==global_set_left || 5==global_set_left || 6==global_set_left || 7==global_set_left) {
			var data = google.visualization.arrayToDataTable([
			  ['dimension', 'measurement'],
			  ['0~10元',     		Math.round(Math.random()*10000)],
			  ['11~100元',			Math.round(Math.random()*10000)],
			  ['101~500元',    		Math.round(Math.random()*10000)],
			  ['501~3000元',   		Math.round(Math.random()*10000)],
			  ['3001~10000元', 		Math.round(Math.random()*10000)],
			  ['10000元以上',  		Math.round(Math.random()*10000)]
			]);
			var options = {
			  title: '付费人数结构',
			  is3D: true
			};
			
			switch (global_set_left) {
				case 3:
					options.title = '新增付费人数结构';
					break;
				case 4:
					options.title = '流失付费人数结构';
					break;
				case 5:
					options.title = $('[data-label="topxxxSelector"]').find('select')[0].value + '付费人数结构';
					break;
				case 6:
					options.title = $('[data-label="topxxxSelector"]').find('select')[0].value + '流失人数结构';
					break;
				case 7:
					options.title = $('[data-label="topxxxSelector"]').find('select')[0].value + '总流失人数结构';
					break;
			}
		} else if (8==global_set_left) {
			var data = google.visualization.arrayToDataTable([
			  ['dimension', 'measurement'],
			  ['付费人数',     				Math.round(Math.random()*10000)],
			  ['非付费人数',				Math.round(Math.random()*10000)]
			]);
			var options = {
			  title: '活跃用户付费分布结构',
			  is3D: true
			};
		} else if (9==global_set_left) {
			var data = google.visualization.arrayToDataTable([
			  ['dimension', 'measurement'],
			  ['新用户（第一天登陆）',     				Math.round(Math.random()*10000)],
			  ['摸索阶段用户（累积登陆1~4天）',			Math.round(Math.random()*10000)],
			  ['忠实用户（累积登陆5天以上）',    		Math.round(Math.random()*10000)]
			]);
			var options = {
			  title: '流失用户阶段分布结构',
			  is3D: true
			};
			
			switch (global_set_left) {
				case 9:
					options.title = '流失用户阶段分布结构';
					break;
			}
		}

		var chart = new google.visualization.PieChart(document.getElementById('google_piechart'+divid));
		chart.draw(data, options);
	}
	drawLeftChart();


    if (0 != global_set_right) {
        var divid = 4;
        var div = '<div id="google_piechart'+divid+'" style="width: 1000px; height: 610px;"></div>';
        $('[data-label="label_dist_struct'+divid+'"]').empty().append(div);
        google.load("visualization", "1", {packages:["corechart"]});
        function drawRightChart() {
            if (-2==global_set_right || -3==global_set_right) {
                var data = google.visualization.arrayToDataTable([
                    ['dimension', 'measurement'],
                    ['新用户（第一天登陆）',     				Math.round(Math.random()*10000)],
                    ['摸索阶段用户（累积登陆1~4天）',			Math.round(Math.random()*10000)],
                    ['忠实用户（累积登陆5天以上）',    		Math.round(Math.random()*10000)]
                ]);
                var options = {
                    title: '流失用户阶段分布结构',
                    is3D: true
                };

                switch (global_set_right) {
                    case -3:
                        options.title = '活跃用户阶段分布结构';
                        break;
                }
				
            } else if (-1==global_set_right) {
                var data = google.visualization.arrayToDataTable([
                    ['dimension', 'measurement'],
                    ['1元',	     		Math.round(Math.random()*10000)],
                    ['6元',	     		Math.round(Math.random()*10000)],
                    ['30元',	     		Math.round(Math.random()*10000)],
                    ['68元',				Math.round(Math.random()*10000)],
                    ['128元',    			Math.round(Math.random()*10000)],
                    ['328元',   			Math.round(Math.random()*10000)],
                    ['648元', 			Math.round(Math.random()*10000)],
                    ['648元以上',  		Math.round(Math.random()*10000)]
                ]);
                var options = {
                    title: '付费额度结构',
                    is3D: true
                };
            }

            var chart = new google.visualization.PieChart(document.getElementById('google_piechart'+divid));
            chart.draw(data, options);
        }
        drawRightChart();
    }
}
function drawDistStructWithLost() {
	var div = '<div id="google_piechart11" style="width: 1000px; height: 610px;"></div>';
	$('[data-label="label_dist_struct11"]').empty().append(div);
	
	google.load("visualization", "1", {packages:["corechart"]});
	//google.setOnLoadCallback(drawChart);
	function drawChart() {
		var data = google.visualization.arrayToDataTable([
		  ['dimension', 'measurement'],
		  ['国民足球',     	13580],
		  ['征途2',			9870],
		  ['征途',    		7890],
		  ['绿色征途',   	570],
		  ['大主宰', 		660],
		  ['征途手机版',  	190]
		]);

		var options = {
		  title: '产品贡献结构',
		  is3D: true
		};

		var chart = new google.visualization.PieChart(document.getElementById('google_piechart11'));

		chart.draw(data, options);
	}
	drawChart();
}


function drawTrend(type) {
    type = type || 0;
    var global_set = $('[data-label="global_var_drawTrend"] input')[0].value;
    type = 'initial'==global_set ? type : global_set;

    if (0==type) {
        var divid=1;
    } else if (1==type) {
        var divid=2;
    } else if (2==type) {
        var divid=3;
    }
	var div = '<div id="google_trendchart'+divid+'" style="width: 1000px; height: 450px;"></div>';
	$('[data-label="label_trend'+divid+'"]').empty().append(div);
	
	google.load('visualization', '1', {'packages':['annotationchart']});
	//google.setOnLoadCallback(drawChart);
	function drawChart() {
		var data = new google.visualization.DataTable();
		data.addColumn('date', 'Date');
		data.addColumn('number', '度量');
		for (i=1; i<=30; i++) {
			data.addRows([
				[new Date(2015, 2, i), Math.round(Math.random()*1000)]
			]);
		}
		

		var chart = new google.visualization.AnnotationChart(document.getElementById('google_trendchart' + divid));

		var options = {
			displayAnnotations: true
		};

		chart.draw(data, options);
	}
	drawChart();
}
function drawTrendWithLostLine() {
	var div = '<div id="google_losttrendchart1" style="width: 1000px; height: 450px;"></div>';
	$('[data-label="label_losttrend11"]').empty().append(div);
	
	google.load('visualization', '1', {'packages':['annotationchart']});
	//google.setOnLoadCallback(drawChart);
	function drawChart() {
		var data = new google.visualization.DataTable();
		data.addColumn('date', 'Date');
		/*data.addColumn('number', '净新增');*/
		data.addColumn('number', '新增');
		data.addColumn('number', '流失');
		for (i=1; i<=14; i++) {
			var newmeasurement = Math.round(Math.random()*1000);
			var lostmeasurement = Math.round(Math.random()*1000);
			var netNew = newmeasurement - lostmeasurement;
			data.addRows([
				[new Date(2015, 2, i)/*, netNew*/, newmeasurement, lostmeasurement]
			]);
		}
		
		var chart = new google.visualization.AnnotationChart(document.getElementById('google_losttrendchart1'));

		var options = {
			displayAnnotations: true,
			colors: ['green', 'red'/*, '#CDCDCD'*/],
			fill: 10
		};

		chart.draw(data, options);
	}
	drawChart();
}
function drawRechTrendWithLostLine() {
    var div = '<div id="google_losttrendchart2" style="width: 1000px; height: 450px;"></div>';
    $('[data-label="label_dist_struct12"]').empty().append(div);

    google.load('visualization', '1', {'packages':['annotationchart']});
    //google.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        /*data.addColumn('number', '净新增');*/
        data.addColumn('number', '新增');
        data.addColumn('number', '流失');
        for (i=1; i<=14; i++) {
            var newmeasurement = Math.round(Math.random()*1000);
            var lostmeasurement = Math.round(Math.random()*1000);
            var netNew = newmeasurement - lostmeasurement;
            data.addRows([
                [new Date(2015, 2, i)/*, netNew*/, newmeasurement, lostmeasurement]
            ]);
        }

        var chart = new google.visualization.AnnotationChart(document.getElementById('google_losttrendchart2'));

        var options = {
            displayAnnotations: true,
            colors: ['green', 'red'/*, '#CDCDCD'*/],
			fill: 10
        };

        chart.draw(data, options);
    }
    drawChart();
}


function drawOnline() {
	var div = '<div id="google_onlinechart1" style="width: 1000px; height: 450px;"></div>';
	$('[data-label="label_online1"]').empty().append(div);
	
	google.load('visualization', '1', {'packages':['annotationchart']});
	//google.setOnLoadCallback(drawChart);
	function drawChart() {
		var data = new google.visualization.DataTable();
		data.addColumn('date', 'Date');
		data.addColumn('number', '在线人数');
		for (j=1; j<=15; j++) {
			for (i=0; i<=23; i++) {
				data.addRows([
					[new Date(2015, 2, j, i, 0, 0), 1000 + Math.round(Math.random()*500)]
				]);
			}
		}
		
		var chart = new google.visualization.AnnotationChart(document.getElementById('google_onlinechart1'));

		var options = {
			displayAnnotations: true,
			zoomEndTime: new Date(2015, 2, 15, 23, 0, 0),
			zoomStartTime: new Date(2015, 2, 15, 0, 0, 0),
			min: 0
		};

		chart.draw(data, options);
	}
	drawChart();
}



function drawRemain() {
	var div = '<div id="google_remainchart1" style="width: 1000px; height: 500px;"></div>';
	$('[data-label="label_remain1"]').empty().append(div);
	
	google.load('visualization', '1', {'packages':['corechart']});
	//google.setOnLoadCallback(drawChart);
	function drawChart() {
		var data_array = [
			['留存日', '留存比例(%)']
		];
		for (j=1; j<=30; j++) {
			data_array.push([j+'日', Math.round(Math.random()*100)]);
		}
		data_array.push(['2月', Math.round(Math.random()*100)]);
		data_array.push(['3月', Math.round(Math.random()*100)]);
		var data = google.visualization.arrayToDataTable(data_array);
		
		var chart = new google.visualization.LineChart(document.getElementById('google_remainchart1'));

		var options = {
		};
		chart.draw(data, options);
	}
	drawChart();
}



function drawNetNewRech() {
	var div = '<div id="google_netnewrechchart1" style="width: 1000px; height: 550px;"></div>';
	$('[data-label="label_newnetrech1"]').empty().append(div);
	
	google.load('visualization', '1', {'packages':['corechart']});
	//google.setOnLoadCallback(drawChart);
	function drawChart() {
		var data_array = [
			['区段', '新增付费用户数', '流失付费用户数']
		];
		var seg_array = ['0~10元', '11~100元', '101~500元', '501~3000元', '3001~10000元', '10000元以上']
		for (j=0; j<=5; j++) {
			var newmeasurement = Math.round(Math.random()*1000);
			var lostmeasurement = Math.round(Math.random()*1000);
			data_array.push([seg_array[j], newmeasurement, lostmeasurement]);
		}
		var data = google.visualization.arrayToDataTable(data_array);
		
		var chart = new google.visualization.BarChart(document.getElementById('google_netnewrechchart1'));

		var options = {
			max: 1250,
			title: '净新增付费用户人数分布'
		};
		chart.draw(data, options);
	}
	drawChart();
}

function drawNetNew() {
	var div = '<div id="google_netnewchart1" style="width: 1000px; height: 550px;"></div>';
	$('[data-label="label_newnet1"]').empty().append(div);

	google.load('visualization', '1', {'packages':['corechart']});
	//google.setOnLoadCallback(drawChart);
	function drawChart() {
		var data_array = [
			['区段', '新增用户数', '流失用户数']
		];
		var seg_array = ['新用户（第一天登陆）', '摸索阶段用户（累积登陆1~4天）', '忠实用户（累积登陆5天以上）']
		for (j=0; j<=2; j++) {
			var newmeasurement = Math.round(Math.random()*1000);
			var lostmeasurement = Math.round(Math.random()*1000);
			data_array.push([seg_array[j], newmeasurement, lostmeasurement]);
		}
		var data = google.visualization.arrayToDataTable(data_array);
		
		var chart = new google.visualization.BarChart(document.getElementById('google_netnewchart1'));

		var options = {
			max: 1250,
			title: '净新增用户人数分布'
		};
		chart.draw(data, options);
	}
	drawChart();
}






function showRemainAllDatePicker() {
	_createRemainDatePicker('input_remain_all');
}
function showRemainActiveDatePicker() {
	_createRemainDatePicker('input_remain_active');
}
function showRemainRechDatePicker() {
	_createRemainDatePicker('input_remain_rech');
}

function _createRemainDatePicker(axure_shapename) {
	$($('[data-label="'+axure_shapename+'"] input')[0]).datepicker({
		showButtonPanel: true,
		beforeShow: function (input) {
			setTimeout(function () {
				var buttonPane = $(input)
					.datepicker("widget")
					.find(".ui-datepicker-buttonpane");

				var btn = $('<button class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" type="button">重置</button>');
				btn.unbind("click")
				.bind("click", function () {
					//$.datepicker._clearDate(input);
					//alert('custom text');
					$(input).datepicker("hide");
					$(input).val("开服首日");
				});

				btn.appendTo(buttonPane);

			}, 1);
		}
	});
	$($('[data-label="'+axure_shapename+'"] input')[0]).datepicker('show');
}



function showDatePickerDiy() {
	_createDatePicker('datepicker_diy', 'label_chain_diy_topsel');
}
function showDateCompPickerDiy() {
	_createDatePicker('label_chain_diy_compwidget', 'label_chain_diy_compsel');
	$('#label_chain_diy_compwidget div').datepicker('refresh').show().css({top:-280, left:30});
}
function showDatePickerDay() {
	_createDayPicker('datepicker_day');
}
function showDatePickerWeek() {
	_createSegmentPicker('datepicker_week', 7);
}
function showDatePickerMonth() {
	_createSegmentPicker('datepicker_month', 30);
}
function showDatePickerQuartor() {
	_createSegmentPicker('datepicker_quartor', 90);
}

function _createDayPicker(axure_shapename) {
	var html_seg = '<div class="wrapper"><div id="'+axure_shapename+'" class="dates"><input class="jrange_input_singleday" /><div class="jrange_div"></div></div></div>';
	$('[data-label="'+axure_shapename+'"]').empty().append(html_seg);
	
	$($('#'+axure_shapename+' input')[0]).datepicker();
	$($('#'+axure_shapename+' input')[0]).datepicker('show');
}
function _createDatePicker(axure_shapename, reflectboard) {
	var html_seg = '<div class="wrapper"><div id="'+axure_shapename+'" class="dates">';
	if ('label_chain_diy_compwidget' == axure_shapename) {
		html_seg += '<input class="jrange_input" />';
	}
	html_seg += '<div class="jrange_div"></div></div></div>';
	$('[data-label="'+axure_shapename+'"]').empty().append(html_seg);

	var cur = -1, prv = -1;
	$('#'+axure_shapename+' div')
	.datepicker({
		//numberOfMonths: 3,
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		beforeShowDay: function ( date ) {
			return [true, ( (date.getTime() >= Math.min(prv, cur) && date.getTime() <= Math.max(prv, cur)) ? 'date-range-selected' : '')];
		},
		onSelect: function ( dateText, inst ) {
			var d1, d2;
			prv = cur;
			cur = (new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay)).getTime();
			if ( prv == -1 || prv == cur ) {
				prv = cur;
				$('#'+axure_shapename+' input').val( dateText );
			} else {
				d1 = $.datepicker.formatDate( 'mm/dd/yy', new Date(Math.min(prv,cur)), {} );
				d2 = $.datepicker.formatDate( 'mm/dd/yy', new Date(Math.max(prv,cur)), {} );
				$('#'+axure_shapename+' input').val( d1+' - '+d2 );
				$('[data-label="'+reflectboard+'"]').html(d1 + ' - ' + d2);
				$('[data-label="time_prompt"]').html(d1 + " - " + d2);
			}
		},
		onChangeMonthYear: function ( year, month, inst ) {
			//prv = cur = -1;
		},
		onAfterUpdate: function ( inst ) {
			$('<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">完成</button>')
				.appendTo($('#'+axure_shapename+' div .ui-datepicker-buttonpane'))
				.on('click', function () {
					$('#'+axure_shapename+' div').hide(); drawGoogleChain();
				});
		}
	})
	.position({
		my: 'right top',
		at: 'left bottom',
		of: $('#'+axure_shapename+' input')
	});
	//.hide();
	
	$('#'+axure_shapename+' input').on('focus', function (e) {
		var v = this.value,
			d;
		try {
			if ( v.indexOf(' - ') > -1 ) {
			   d = v.split(' - ');
			   prv = $.datepicker.parseDate( 'mm/dd/yy', d[0] ).getTime();
			   cur = $.datepicker.parseDate( 'mm/dd/yy', d[1] ).getTime();
			} else if ( v.length > 0 ) {
			   prv = cur = $.datepicker.parseDate( 'mm/dd/yy', v ).getTime();
			}
		} catch ( e ) {
			cur = prv = -1;
		}
		if ( cur > -1 )
			$('#'+axure_shapename+' div').datepicker('setDate', new Date(cur));
		$('#'+axure_shapename+' div').datepicker('refresh').show().css({top:0, left:-80});
	});
}
function _createSegmentPicker(axure_shapename, duration) {
	var html_seg = '<div class="wrapper"><div id="'+axure_shapename+'" class="dates"><input class="jrange_input" /><div class="jrange_div"></div></div></div>';
	$('[data-label="'+axure_shapename+'"]').empty().append(html_seg);
	
	$($('#'+axure_shapename+' input')[0])
	.multiDatesPicker({
		mode: 'daysRange',
		autoselectRange: [0, duration]
		//showButtonPanel: true
	});
	$($('#'+axure_shapename+' input')[0]).datepicker('show');
}


var interval;
function startInterval() {
	$(function() {
		interval = setInterval(function () {
			$($('[data-label="dmpdata"]')).each(function (k, seg) {
				var span = $(seg).find('span');
				var spansnum = span.length;
				var lastspantext = $(span[spansnum - 1]).html();

				var ksegs = lastspantext.split(',');
				var lastkseg = ksegs[ksegs.length - 1];

				if (parseInt(lastkseg) >= 999)
					lastkseg = 0;
				var newvar = parseInt(lastkseg) + 1;
				var newstr = "";
				for (k in ksegs) {
					if (k == ksegs.length - 1) {
						newstr += newvar;
					} else {
						newstr += ksegs[k] + ',';
					}
				}

				$(span[spansnum - 1]).html(newstr);
			});
		}, 1000);
	});
}

startInterval();

function delInterval() {
	clearTimeout(interval);
}