var rule = {
	title: 'HG影院[V2]', // csp_AppYsV2
	host: 'http://bbq.1006.tk',
	// homeUrl:'/api.php/v1.vod/vodPhbAll',
	homeUrl:'/api.php/v1.vod?limit=12&page=1',
	// url: '/api.php/v1.vod?type=fyclass&limit=20&page=fypage',
	url: '/api.php/v1.vod?type=fyclassfyfilter&limit=20&page=fypage',
	filter_url:'&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}&by={{fl.by}}',
	filter: {
		"2":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"古装","v":"古装"},{"n":"言情","v":"言情"},{"n":"武侠","v":"武侠"},{"n":"偶像","v":"偶像"},{"n":"家庭","v":"家庭"},{"n":"青春","v":"青春"},{"n":"都市","v":"都市"},{"n":"喜剧","v":"喜剧"},{"n":"战争","v":"战争"},{"n":"军旅","v":"军旅"},{"n":"谍战","v":"谍战"},{"n":"悬疑","v":"悬疑"},{"n":"罪案","v":"罪案"},{"n":"穿越","v":"穿越"},{"n":"宫廷","v":"宫廷"},{"n":"历史","v":"历史"},{"n":"神话","v":"神话"},{"n":"科幻","v":"科幻"},{"n":"年代","v":"年代"},{"n":"农村","v":"农村"},{"n":"商战","v":"商战"},{"n":"剧情","v":"剧情"},{"n":"奇幻","v":"奇幻"},{"n":"网剧","v":"网剧"},{"n":"竖短片","v":"竖短片"},{"n":"国产","v":"国产"},{"n":"欧美","v":"欧美"},{"n":"日韩","v":"日韩"},{"n":"港台","v":"港台"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"韩国","v":"韩国"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
		"1":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"科幻","v":"科幻"},{"n":"动画","v":"动画"},{"n":"喜剧","v":"喜剧"},{"n":"动作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"惊悚","v":"惊悚"},{"n":"犯罪","v":"犯罪"},{"n":"冒险","v":"冒险"},{"n":"悬疑","v":"悬疑"},{"n":"剧情","v":"剧情"},{"n":"武侠","v":"武侠"},{"n":"战争","v":"战争"},{"n":"歌舞","v":"歌舞"},{"n":"奇幻","v":"奇幻"},{"n":"传记","v":"传记"},{"n":"警匪","v":"警匪"},{"n":"历史","v":"历史"},{"n":"运动","v":"运动"},{"n":"伦理","v":"伦理"},{"n":"灾难","v":"灾难"},{"n":"西部","v":"西部"},{"n":"魔幻","v":"魔幻"},{"n":"枪战","v":"枪战"},{"n":"恐怖","v":"恐怖"},{"n":"纪录","v":"纪录"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"香港","v":"香港"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"法国","v":"法国"},{"n":"意大利","v":"意大利"},{"n":"德国","v":"德国"},{"n":"西班牙","v":"西班牙"},{"n":"泰国","v":"泰国"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
		"3":[{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"韩国","v":"韩国"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
		"4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"国创","v":"国创"},{"n":"番剧","v":"番剧"},{"n":"热血","v":"热血"},{"n":"励志","v":"励志"},{"n":"冒险","v":"冒险"},{"n":"战斗","v":"战斗"},{"n":"搞笑","v":"搞笑"},{"n":"治愈","v":"治愈"},{"n":"经典","v":"经典"},{"n":"科幻","v":"科幻"},{"n":"玄幻","v":"玄幻"},{"n":"魔幻","v":"魔幻"},{"n":"武侠","v":"武侠"},{"n":"恋爱","v":"恋爱"},{"n":"推理","v":"推理"},{"n":"日常","v":"日常"},{"n":"校园","v":"校园"},{"n":"悬疑","v":"悬疑"},{"n":"真人","v":"真人"},{"n":"历史","v":"历史"},{"n":"竞技","v":"竞技"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"韩国","v":"韩国"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]
	},
	detailUrl:'/api.php/v1.vod/detail?vod_id=fyid',
	searchUrl: '/api.php/v1.vod?wd=**&page=fypage',
	searchable: 2,
	quickSearch: 0,
	filterable:1,//是否启用分类筛选,
	headers:{'User-Agent':'okhttp/4.1.0'},
	timeout:5000,
	class_name:'4k影视剧&4k影视片&综艺&4k动漫', // 分类筛选 /api.php/v1.vod/types
	class_url:'2&1&3&4',
	play_parse:true,
	lazy:'js:input = /mp4/.test(input)?{jx:0,url:input,parse:0}:input',
	limit:6,
	// 推荐:'json:data.zhui.vod_list;*;*;*;*',
	推荐:'*',
	一级:'json:data.list;vod_name;vod_pic;vod_remarks;vod_id',
	二级:'js:try{let html=request(input);print(html);html=JSON.parse(html);let node=html.data;VOD={vod_id:node["vod_id"],vod_name:node["vod_name"],vod_pic:node["vod_pic"],type_name:node["vod_class"],vod_year:node["vod_year"],vod_area:node["vod_area"],vod_remarks:node["vod_remarks"],vod_actor:node["vod_actor"],vod_director:node["vod_director"],vod_content:node["vod_content"].strip()};let episodes=node.vod_play_list;let playMap={};if(typeof play_url==="undefined"){var play_url=""}episodes.forEach(function(ep){let source=ep["from"];if(!playMap.hasOwnProperty(source)){playMap[source]=[]}playMap[source].append(ep["url"])});let playFrom=[];let playList=[];Object.keys(playMap).forEach(function(key){playFrom.append(key);playList.append(playMap[key])});let vod_play_from=playFrom.join("$$$");let vod_play_url=playList.join("$$$");VOD["vod_play_from"]=vod_play_from;VOD["vod_play_url"]=vod_play_url}catch(e){log("获取二级详情页发生错误:"+e.message)}',
	搜索:'*',
}
