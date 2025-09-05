function homeGenPage(){
var page = '<div id="home_page"><div class="clearboth" align="center" style="margin:0 auto;height:440px;">\
<div class="home_status_topo home_status_topo_left" style="margin:0 auto;padding-top:80px">\
<div id="home_dual_wan" class="pull-left" style="margin-top:40px;height:98px;max-width:210px;">\
<a id="home_wan_status" href="#home" target="_self" rel="noopener noreferrer" style="display:block;"></a>\
<div class="clearboth" style="margin-top: 5px; display: inline-block;">\
<div id="5g_reject_tips" class="pull-left speed_limited hide" style="margin-right:5px;position:relative" onclick="EMUI.homeStatusDetectController.show5gRejectTips_toast()">\
<div id="5g_reject_tips_toast" style="position:absolute;top:-10px;right:35px" class="text-left hide">\
<div lang-id="5G_Reject_Tip" style="font-size:13px;width:180px;border:solid 1px"></div>\
</div>\
</div>\
<div id="plmn_roam_box" class="pull-left margin-right-5" style="display: table;height: 22px;" align="center">\
<span id="home_plmn_description" class="secondmenu_child" style="display:none;"></span>&nbsp;<em style="height:20px;font-size:18px" id="roam_icon" class="eth_no_connected hide" lang-id-set="title" lang-id="statistic.roaming">&nbsp;&nbsp;&nbsp;&nbsp;</em>\
</div>\
<div id="home_wan_description" class="pull-left" style="display: table;height: 20px;"></div>\
</div>\
</div>\
<div class="pull-left" id="home_wan_connect_info" style="width:240px;margin:0 auto;font-size:14px;">\
<div id="home_wan_connected_status" class="hide color_Darkgray" style="margin:0 auto;" align="center">\
<table cellpadding="0" cellspacing="0" frame=void rules=none style="height:148px;width:160px;">\
<tr><td><table cellpadding="0" cellspacing="0" frame=void rules=none id="wan_connect_rate" class="pointer hide" style="margin-top:72px;" align="center" onclick="EMUI.homeStatusDetectController.jumpToPage();">\
<tr><td><div class="home_up">&nbsp;</div></td><td><div class="home_icon_text_split" id="home_up_rate"></div></td></tr>\
<tr><td><div class="home_down">&nbsp;</div></td><td><div class="home_icon_text_split" id="home_down_rate"></div></td></tr></table>\
<div id="home_traffic_overflow" style="margin-top:38px;text-align:center;" class="hide pointer"></div>\
</td></tr>\
<tr><td style="height:25px;">\
<div id="home_wan_connect_status" class="home_connect_ok"></div>\
</td></tr>\
</table>\
</div>\
<div id="home_wan_disconnected_status" class="hide color_Darkgray" style="margin:0 auto;" align="center">\
<table cellpadding="0" cellspacing="0" frame=void rules=none style="height:148px;width:160px;text-align:center;"><tr><td><div id="home_error_info" style="margin-top:10px;" onclick="EMUI.homeStatusDetectController.jumpToPage();"></div></td></tr>\
<tr><td style="height:25px;"><div id="home_connect_failed_type" class="home_connect_fail"></div></td></tr>\
</table>\
</div>\
</div>\
<div class="pull-left">\
<a href="#deviceinformation" target="_self" rel="noopener noreferrer">\
<div id="battery_device_block" class="hide pointer" style="padding-top:45px;position:relative">\
<div id="home_battery_status" class="hide" style="padding-top:8px;">\
<div id="home_battery_low" class="hide battery_low" style="margin-top:8px;padding-top:3px;">&nbsp;</div>\
<div id="home_battery_normal" class="hide battery_normal" align="left" style="margin-top:8px;direction:ltr !important;">\
<div id="home_battery_dynamic_back" class="home_battery_dynamic_back"></div>\
</div>\
<div id="home_battery_charge" class="hide battery_charge" style="margin-top:8px;padding-top:3px;">&nbsp;</div>\
</div>\
<div class="color_home_gray" id="home_battery_number" style="position:absolute;top:105px;left:80px;font-size:12px"></div>\
</div>\
<div id="no_battery_device_block" class="hide home_router pointer" style="position: relative;z-index: 2;"></div>\
</a>\
<div id="home_device_name" lang-id="home_myDevice" style="margin-top:5px;width:78px;"></div>\
</div>\
<div id="home_dual_wifi" class="pull-left" align="center" style="font-size:14px;margin:0 auto;width:240px;">\
<table cellpadding="0" cellspacing="0" frame=void rules=none style="height:148px;"><tr><td>\
<table cellpadding="0" cellspacing="0" frame=void rules=none class="pointer" style="margin-top:72px;" align="center" onclick="EMUI.homeStatusDetectController.iconClickWifi();">\
<tr id="home_wifi2_satus" class="hide"><td><a href="#wifieasy" target="_self" rel="noopener noreferrer"><div id="home_wifi2_status_icon" class="home_wifisingle_enable">&nbsp;</div></a></td><td><a href="#wifieasy" target="_self" rel="noopener noreferrer"><div id="home_wifi_24g" class="home_icon_text_split pointer" lang-id="wps_wifi_mode_24G"></div></a></td></tr>\
<tr id="home_wifi5_satus" class="hide"><td><a href="#wifieasy" target="_self" rel="noopener noreferrer"><div id="home_wifi5_status_icon" class="home_wifisingle">&nbsp;</div></a></td><td><a href="#wifieasy" target="_self" rel="noopener noreferrer"><div id="home_wifi_5g" class="home_icon_text_split pointer" lang-id="wps_wifi_mode_5G"></div></a></td></tr></table>\
</td></tr>\
<tr><td style="height:25px;"><div id="home_wlan_connect_status" class="home_connect_ok"></div></td></tr></table>\
</div>\
<div id="home_dual_device" class="pull-left" style="margin-top:38px;">\
<div class="home_desktop pointer" style="position: relative;z-index: 2;" onclick="EMUI.homeStatusDetectController.iconClickDevice();">\
<div class="clearboth" align="center" style="margin-top:23px;">\
<table cellpadding="0" cellspacing="0" frame=void rules=none style="max-width:120px; text-align:center;direction: ltr;"><tr><td><a href="#devicemanagement" target="_self" rel="noopener noreferrer"><div class="selectmenu" style="font-size:36px;" id="home_device_active_count"></div></a></td><td style="width:21px;"></td></tr></table>\
</div>\
</div>\
<div style="margin-top:5px;" class="wordbreak" lang-id="menu.devicemanagement"></div>\
</div>\
</div>\
<div class="clearboth">&nbsp;</div>\
<div id="home_dual_internet" class="home_status_topo home_status_topo_left" style="margin:0 auto;display: inline-block;margin-top: -120px;width: 100%;">\
<div class="pull-left" style="margin-top:30px;height:115px;max-width:160px;">\
<a id="home_wan_status" href="#ethernetsettings" target="_self" rel="noopener noreferrer" style="display:block;" class="home_internet"></a>\
<a id="home_wan_status1" href="#ethernetsettings" target="_self" rel="noopener noreferrer" style="display:none;" class="home_internet1"></a>\
<div id="plmn_roam_box" style="max-width:160px;margin-top:5px;" align="center">\
<span id="home_plmn_description" style="margin-top:5px;" lang-id="home.internet"></span>&nbsp;\
</div>\
</div>\
<div class="pull-left" style="width:240px;margin:0 auto;font-size:14px;">\
<div id="home_inter_ok_hide" class="color_Darkgray" style="margin:0 auto;margin-top: -60px;" align="center">\
<table cellpadding="0" cellspacing="0" frame=void rules=none style="height:148px;width:160px;"><tr><td>\
<table cellpadding="0" cellspacing="0" frame=void rules=none id="wan_connect_rate" style="margin-top:82px;" align="center">\
<tr>\
<td>\
<div class="home_up" style="cursor: auto;">&nbsp;</div></td><td><div class="home_icon_text_split" id="home_up_inter_rate">\
</div></td></tr>\
<tr><td><div class="home_down" style="cursor: auto;">&nbsp;</div></td><td><div class="home_icon_text_split" id="home_down_inter_rate"></div></td></tr>\
</table>\
<div id="home_traffic_overflow" style="margin-top:38px;text-align:center;" class="hide pointer"></div>\
</td></tr>\
<tr><td style="height:25px;">\
<div id="home_wan_connect_status" class="home_connect_ok"></div>\
</td></tr>\
</table>\
</div>\
<div id="home_inter_error_hide" class="hide color_Darkgray" style="margin:0 auto;margin-top: -60px;" align="center">\
<table cellpadding="0" cellspacing="0" frame=void rules=none style="height:148px;width:160px;text-align:center;">\
<tr><td><div id="home_error_info" style="margin-top:82px;"><a href="#onekey" id="home_etherror" class="home_font_style" target="_self"></a></div></td></tr>\
<tr><td style="height:25px;"><div class="home_connect_fail"></div></td></tr>\
</table>\
</div>\
</div>\
<div class="pull-left margin-left-78" align="center" style="font-size:14px;margin:0 auto;width:240px;margin-top: -60px;">\
<table cellpadding="0" cellspacing="0" frame=void rules=none style="height:148px;"><tr><td>\
<table cellpadding="0" cellspacing="0" frame=void rules=none class="pointer" style="margin-top:72px;" align="center" onclick="EMUI.homeStatusDetectController.iconClickWifi();">\
<tr id="homenet_wifi2_satus"><td><a href="#wifieasy" target="_self" rel="noopener noreferrer"><div id="homenet_wifi2_status_icon" class="home_wifisingle_enable">&nbsp;</div></a></td><td><a href="#wifieasy" target="_self" rel="noopener noreferrer"><div id="homenet_wifi_24g" class="home_icon_text_split pointer" lang-id="wps_wifi_mode_24G"></div></a></td></tr>\
<tr id="homenet_wifi5_satus" class="hide"><td><a href="#wifieasy" target="_self" rel="noopener noreferrer"><div id="homenet_wifi5_status_icon" class="home_wifisingle">&nbsp;</div></a></td><td><a href="#wifieasy" target="_self" rel="noopener noreferrer"><div id="homenet_wifi_5g" class="home_icon_text_split pointer" lang-id="wps_wifi_mode_5G"></div></a></td></tr></table>\
</td></tr>\
<tr><td style="height:25px;"><div id="home_wlan_connect_status" class="home_connect_ok"></div></td></tr></table>\
</div>\
<div class="pull-left" style="margin-top:30px;">\
<div class="home_desktop pointer" onclick="EMUI.homeStatusDetectController.iconClickDevice();">\
<div class="clearboth" align="center" style="margin-top:23px;">\
<table cellpadding="0" cellspacing="0" frame=void rules=none style="max-width:120px; text-align:center;direction: ltr;"><tr><td><a href="#devicemanagement" target="_self" rel="noopener noreferrer"><div class="selectmenu" style="font-size:36px;" id="home_inter_device_active_count"></div></a></td><td style="width:21px;"></td></tr></table>\
</div>\
</div>\
<div style="margin-top:5px;" class="wordbreak" lang-id="menu.devicemanagement"></div>\
</div>\
</div>\
<div class="clearboth">&nbsp;</div>\
<div class="clearboth">\
<div class="clearboth home_connet_btn" id="home_profile_btn_father" align="center" >\
<button class="btn_normal_long home_open hide" id="home_profile_btn" lang-id="home.closemobile" onclick="EMUI.homeDataSwitchController.setDialUpSwitch();"></button>\
<button class="btn_normal_long home_open hide" id="home_statistic_connect_btn" lang-id="home.openmobile" onclick="EMUI.homeSetDailyDialContinueController.startMobileConnect();"></button>\
</div>\
<div class="clearboth hide home_connet_btn" id="home_connect_btn_father" align="center" >\
<button class="btn_normal_long home_open " id="home_connect_btn" lang-id="common_connect" onclick="EMUI.homeConnectController.connectBtnClick();"></button>\
</div>\
<div class="clearboth home_connet_btn hide" id="home_location_btn_father" align="center" >\
<button class="btn_normal_long home_open " id="home_location_btn" onclick="EMUI.homeConnectController.locationBtnClick();" lang-id="home.signalQualityAssessment"></button>\
</div>\
</div>\
</div>\
<div id="home_hotlink_container"  class="hotlink_container hide">\
<ul id="home_hotlink_content">\
</ul>\
</div><div style="height:40px;">&nbsp;</div></div>';
$("#rightpagearea").prepend(page);
setTimeout(function(){
showNationalLang();
},100);
if(typeof homeRenderPage == "function"){
beforeRenderPage("home");
homeRenderPage();
afterRenderPage("home");
}
}
﻿
var homeObj = (function () {
var pageName = 'home';
var plmnRat = '';
var isHasEnable = false;
var dualwanstatus = '0';
var currentNetworkMode = null;
var ethaccessRes = [];
var umtsaccessRes = [];
var isMobilewifi = EMUI.mainDeviceVersionController.content && EMUI.mainDeviceVersionController.content.response && EMUI.mainDeviceVersionController.content.response.Classify === 'mobile-wifi';
var homeLinkEnable = '';
var homeLinkItems = null;
var homeLinkItemArr = [];
EMUI.homeStatusDetectController = EMUI.ObjController.extend({
objName: 'monitoring/status',
batteryLeval: '',
getSimSingle: function (isConnected, single, singlenr) {
if (!EMUI.homeStatusDetectController.content || !EMUI.homeStatusDetectController.content.response) {
return;
}
var home_status_content = EMUI.homeStatusDetectController.content;
var plmnRat = checkServiceAvailable(home_status_content.response);
var serveFourFive = home_status_content.response['EndcStatus'];
if (plmnRat === '' || typeof (plmnRat) === 'undefined') {
$('#home_plmn_description').attr('lang-id', 'dialup_label_no_service');
$('#home_plmn_description').text(publicLang['dialup_label_no_service']);
} else {
$('#home_plmn_description').text(plmnRat);
}
if (GLOBAL.modules.nrProductEnable === '1') {
if (plmnRat !== "5G" && serveFourFive === "1") {
$('#home_plmn_description').hide();
} else {
$('#home_plmn_description,#plmn_roam_box').show();
}
} else {
$('#home_plmn_description,#plmn_roam_box').show();
}
$('#home_wan_description').show();
var currentClass = '';
if (GLOBAL.modules.nrProductEnable === '1') {
if (plmnRat !== "5G" && serveFourFive === "1") {
if (isConnected) {
if (single === '0' || single === '5' || single === '4' || single === '3' || single === '2' || single === '1') {
if (singlenr === '0' || singlenr === '5' || singlenr === '4' || singlenr === '3' || singlenr === '2' || singlenr === '1') {
currentClass = 'home_sim_5g4g_on_' + single + singlenr;
}
}
} else {
if (single === '0' || single === '5' || single === '4' || single === '3' || single === '2' || single === '1') {
if (singlenr === '0' || singlenr === '5' || singlenr === '4' || singlenr === '3' || singlenr === '2' || singlenr === '1') {
currentClass = 'home_sim_5g4g_off_' + single + singlenr;
}
}
}
} else {
if (isConnected) {
if (single === '5' || single === '4' || single === '3' || single === '2' || single === '1') {
currentClass = 'home_sim_on_' + single;
} else {
currentClass = 'home_sim_on_0';
}
} else {
if (single === '5' || single === '4' || single === '3' || single === '2' || single === '1') {
currentClass = 'home_sim_off_' + single;
} else {
currentClass = 'home_sim_off_0';
}
}
}
} else {
if (isConnected) {
if (single === '5' || single === '4' || single === '3' || single === '2' || single === '1') {
currentClass = 'home_sim_on_' + single;
} else {
currentClass = 'home_sim_on_0';
}
} else {
if (single === '5' || single === '4' || single === '3' || single === '2' || single === '1') {
currentClass = 'home_sim_off_' + single;
} else {
currentClass = 'home_sim_off_0';
}
}
}
return currentClass;
},
timeoutInterval: null,
show5gRejectTips_toast: function () {
var self = this;
if ($('#5g_reject_tips_toast').is(':visible')) {
clearTimeout(self.timeoutInterval);
self.timeoutInterval = null;
} else {
$('#5g_reject_tips_toast').show();
}
self.timeoutInterval = setTimeout(function () { $('#5g_reject_tips_toast').hide() }, 10 * 1000);
},
showRate: function (up, down) {
var upRate = 0;
var downRate = 0;
if (typeof up !== 'undefined') {
upRate = up;
}
if (typeof down !== 'undefined') {
downRate = down;
}
upRate = parseInt(up, 10) * 8;
downRate = parseInt(down, 10) * 8;
var gRate = 1024 * 1024 * 1024;
var mRate = 1024 * 1024;
var kRate = 1024;
if (upRate >= gRate) {
upRate = (upRate / gRate).toFixed(1) + 'Gbps';
} else if (upRate >= mRate) {
upRate = (upRate / mRate).toFixed(1) + 'Mbps';
} else if (upRate >= kRate) {
upRate = (upRate / kRate).toFixed(1) + 'Kbps';
} else {
upRate += 'bps';
}
if (downRate >= gRate) {
downRate = (downRate / gRate).toFixed(1) + 'Gbps';
} else if (downRate >= mRate) {
downRate = (downRate / mRate).toFixed(1) + 'Mbps';
} else if (downRate >= kRate) {
downRate = (downRate / kRate).toFixed(1) + 'Kbps';
} else {
downRate += 'bps';
}
$('#home_up_rate').text(upRate);
$('#home_down_rate').text(downRate);
$('#wan_connect_rate').show();
$('#home_traffic_overflow').hide();
if (GLOBAL.modules.dualwan_enable && GLOBAL.modules.dualwan_enable === '1') {
if(GLOBAL.modules.hide_eth_wan_rate && GLOBAL.modules.hide_eth_wan_rate === '1'){
$('#home_inter_ok_hide #wan_connect_rate').hide();
$('#wan_connect_ok').show();
}
}
},
showTotalFlow: function (up, down) {
var gRate = 1024 * 1024 * 1024;
var mRate = 1024 * 1024;
var kRate = 1024;
var totalUp = parseInt(up, 10);
var totalDown = parseInt(down, 10);
if (totalUp > gRate) {
totalUp = (totalUp / gRate).toFixed(1) + publicLang['common_unit_gb'];
} else if (totalUp > mRate) {
totalUp = (totalUp / mRate).toFixed(1) + publicLang['common_unit_mb'];
} else if (totalUp > kRate) {
totalUp = (totalUp / kRate).toFixed(1) + publicLang['common_unit_kb'];
} else {
totalUp += publicLang['common_unit_byte'];
}
if (totalDown > gRate) {
totalDown = (totalDown / gRate).toFixed(1) + publicLang['common_unit_gb'];
} else if (totalDown > mRate) {
totalDown = (totalDown / mRate).toFixed(1) + publicLang['common_unit_mb'];
} else if (totalDown > kRate) {
totalDown = (totalDown / kRate).toFixed(1) + publicLang['common_unit_kb'];
} else {
totalDown += publicLang['common_unit_byte'];
}
$('#home_total_up_flow').text(totalUp);
$('#home_total_down_flow').text(totalDown);
$('#wan_home_uptotalstream').show();
$('#wan_home_downtotalstream').show();
},
jumpToPage: function () {
if (GLOBAL.isSecondaryAccount) {
if (pageName.indexOf('mobileconnection') > -1 || pageName.indexOf('statistic') > -1) {
return;
}
}
if (pageName.indexOf('.html') > 0) {
window.location.href = pageName;
} else {
window.location.href = '#' + pageName;
}
},
iconClickWifi: function () {
window.location.href = '#wifieasy';
},
iconClickDevice: function () {
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
return;
}
window.location.href = '#devicemanagement';
},
ToMobileConnection: function () {
window.location.href = '#mobileconnection';
},
ToWifiConnection: function () {
window.location.href = '#wifinetworkssetting';
},
ToEthConnect: function () {
window.location.href = '#ethernetsettings';
}
});
EMUI.homeCellLockStatus = EMUI.ObjController.extend({
objName: 'ntwk/celllock',
isCellLocked: false
});
EMUI.homeTraficController = EMUI.ObjController.extend({
objName: 'monitoring/traffic-statistics'
});
EMUI.homeCradelController = EMUI.ObjController.extend({
objName: 'cradle/status-info'
});
EMUI.homeDeviceFeatureSwitch = EMUI.ObjController.extend({
objName: 'device/device-feature-switch',
coulometerFlag: false,
getsuccessProc: function (data) {
if (data['type'] === 'response') {
var responseData = data['response'];
this.coulometerFlag = responseData['coulometer_enabled'] === '1' ? true : false;
}
}
});
EMUI.homeDataSwitchController = EMUI.ObjController.extend({
objName: 'dialup/mobile-dataswitch',
isDataSwitchOpen: false,
isSupportSaveInfo: false,
getsuccessProc: function (data) {
if (data.type === 'response') {
var responceData = data['response'];
var homeBtn = $('#home_profile_btn');
if (responceData['dataswitch'] === '0') {
this.isDataSwitchOpen = false;
homeBtn.attr('lang-id', 'home.openmobile');
langStr('home_profile_btn', 'home.openmobile');
homeBtn.removeClass('home_open');
} else {
this.isDataSwitchOpen = true;
homeBtn.attr('lang-id', 'home.closemobile');
langStr('home_profile_btn', 'home.closemobile');
homeBtn.addClass('home_open');
}
}
},
setDialUpSwitch: function () {
var self = this;
var dialSwitch = '0';
if (this.content.response.dataswitch === '0') {
dialSwitch = '1';
}
var dateObj = {
dataswitch: dialSwitch
};
var submitInfo = publicLang['home.closeinfo'];
if (dialSwitch === '1') {
submitInfo = publicLang['home.openinfo'];
}
utilStartSubmitDialog(submitInfo);
this.postData(dateObj, function (result) {
self.load(function () {
setTimeout(function () {
homeStatus();
utilStopSubmitDialog();
}, 2000);
});
});
}
});
EMUI.homeSetDialContinueController = EMUI.ObjController.extend({
objName: 'monitoring/start_date',
isSupportSaveInfo: false,
isOutUsedMonth: false,
setStatistic: function () {
var content = this.content.response;
var startDate = content.StartDay;
var dataLimit = content.DataLimit;
var monthThreshold = content.MonthThreshold;
var setMonthData = content.SetMonthData;
var postdata = {
StartDay: startDate,
DataLimit: dataLimit,
MonthThreshold: monthThreshold,
SetMonthData: setMonthData,
turnoffdataswitch: 2
};
utilStartSubmitDialog(publicLang['home.openinfo']);
this.postData(postdata, function (result) {
EMUI.homeDataSwitchController.load(function () {
setTimeout(function () {
homeStatus();
utilStopSubmitDialog();
}, 2000);
});
});
}
});
EMUI.homeSetDailyDialContinueController = EMUI.ObjController.extend({
objName: 'monitoring/daily-data-limit',
isSupportSaveInfo: false,
isOutUsedDaily: false,
setDailyStatistic: function () {
var content = this.content.response;
var DayDataLimit = content.DayDataLimit;
var SetDayData = content.SetDayData;
var dailytrafficmaxlimit = content.dailytrafficmaxlimit;
var dailyturnoffdataenable = content.dailyturnoffdataenable;
var dailyturnoffdataflag = content.dailyturnoffdataflag;
var postdata = {
DayDataLimit: DayDataLimit,
SetDayData: SetDayData,
dailytrafficmaxlimit: dailytrafficmaxlimit,
dailyturnoffdataenable: dailyturnoffdataenable,
dailyturnoffdataflag: dailyturnoffdataflag,
dailyturnoffdataswitch: 2
};
utilStartSubmitDialog(publicLang['home.openinfo']);
this.postData(postdata, function (result) {
EMUI.homeDataSwitchController.load(function () {
setTimeout(function () {
homeStatus();
utilStopSubmitDialog();
}, 2000);
});
});
},
startMobileConnect: function () {
if (EMUI.homeSetDialContinueController.isOutUsedMonth) {
EMUI.homeSetDialContinueController.setStatistic();
EMUI.homeSetDialContinueController.isOutUsedMonth = false;
}
if (EMUI.homeSetDailyDialContinueController.isOutUsedDaily) {
EMUI.homeSetDailyDialContinueController.setDailyStatistic();
EMUI.homeSetDailyDialContinueController.isOutUsedDaily = false;
}
}
});
var autormodeSupportManulDisconnect = false;
EMUI.homeConnectController = EMUI.ObjController.extend({
objName: 'dialup/connection',
connectModeDate: '0',
conectionconfig: '',
getsuccessProc: function (data) {
if (typeof data.response === 'undefined') {
return;
}
this.conectionconfig = data.response;
autormodeSupportManulDisconnect = false;
getConfigData('dialup/config.xml', function ($xml) {
var config = xml2object($xml).config;
if (typeof config !== 'undefined' && typeof config.manual_disconnect_mode !== 'undefined') {
if (config.manual_disconnect_mode === '1' || config.manual_disconnect_mode === '2') {
autormodeSupportManulDisconnect = true;
}
}
}, { sync: true });
EMUI.homeConnectController.initConnectButton();
},
connectBtnClick: function () {
var self = this;
var connectstatus = '1';
if ($('#home_connect_btn').hasClass('btn_disabled')) {
return;
}
$('#home_connect_btn').addClass('btn_disabled');
if ($('#home_connect_btn').hasClass('home_open')) {
connectstatus = '0';
}
var dateObj = {
Action: connectstatus
};
EMUI.homeDialupConnectController.postData(dateObj, function () {
init();
$('#home_connect_btn').removeClass('btn_disabled');
});
},
locationBtnClick: function () {
window.location.href = '../html/location.html';
},
initConnectButton: function () {
if (!EMUI.homeStatusDetectController.content || !EMUI.homeStatusDetectController.content.response
|| typeof autormodeSupportManulDisconnect === 'undefined') {
return;
}
var connetionstatus = EMUI.homeStatusDetectController.content.response;
if (typeof GLOBAL.modules.dataswitch_enabled !== 'undefined' && GLOBAL.modules.dataswitch_enabled === '1') {
return;
}
$('#home_profile_btn_father').hide();
$('#home_connect_btn_father').show();
if (connetionstatus.WifiConnectionStatus === '901') {
return;
}
if (!autormodeSupportManulDisconnect) {
if (this.conectionconfig.ConnectMode === '0') {
$('#home_connect_btn').hide();
return;
}
}
$('#home_connect_btn').removeClass('btn_disabled');
if (EMUI.homeConnectController.conectionconfig.ConnectMode === '1') {
if (connetionstatus.CurrentNetworkType === '0') {
$('#home_connect_btn').addClass('btn_disabled');
} else {
$('#home_connect_btn').removeClass('btn_disabled');
}
} else {
if (connetionstatus.CurrentNetworkType === '0') {
$('#home_connect_btn').addClass('btn_disabled');
} else {
$('#home_connect_btn').removeClass('btn_disabled');
}
}
if (connetionstatus.ConnectionStatus === '901' ||
connetionstatus.ConnectionStatus === '903') {
$('#home_connect_btn').attr('lang-id', 'common_disconnect');
langStr('home_connect_btn', 'common_disconnect');
$('#home_connect_btn').addClass('home_open');
if (connetionstatus.ConnectionStatus === '903') {
$('#home_connect_btn').addClass('btn_disabled');
}
} else {
$('#home_connect_btn').attr('lang-id', 'common_connect');
langStr('home_connect_btn', 'common_connect');
$('#home_connect_btn').removeClass('home_open');
}
if (EMUI.homePinStatusController.isNeedPin ||
EMUI.homePinStatusController.isNeedPuk ||
EMUI.homePinStatusController.isNoSimCard ||
EMUI.homePinStatusController.isSimLocked) {
$('#home_connect_btn').addClass('btn_disabled');
}
$('#home_connect_btn').show();
}
});
EMUI.homeDialupConnectController = EMUI.ObjController.extend({
objName: 'dialup/dial'
});
EMUI.homeWifiOffLoadStatusController = EMUI.ObjController.extend({
objName: 'wlan/station-information',
beforeSingle: '0',
beforeNetworkName: '',
getsuccessProc: function (data) {
if (data.type === 'response') {
var responceData = data['response'];
var signalIntension = '0';
switch (responceData['SignalStrength']) {
case '1':
signalIntension = '1';
break;
case '2':
signalIntension = '2';
break;
case '3':
signalIntension = '3';
break;
case '4':
case '5':
signalIntension = '4';
break;
default:
signalIntension = '0';
break;
}
this.beforeSingle = signalIntension;
var homeWanStatusObj = $('#home_wan_status');
homeWanStatusObj.attr('class', 'home_wifi_' + signalIntension);
homeWanStatusObj.attr('href', '#wifinetworkssetting');
if (responceData['NetworkName'] !== this.beforeNetworkName) {
var templateData = {
beforeNetworkName: responceData['NetworkName']
}
var homeWan = '<table cellpadding="0" cellspacing="0" frame=void rules=none><tr><td style="max-width:160px;text-align:center;"><pre>{{beforeNetworkName}}</pre></td></tr></table>';
$('#home_wan_description').secureHtml(homeWan, templateData);
}
var timeStr = getCurrentTime(xss(responceData['CurrentTime']));
$('#home_wan_connect_lasttime').html(timeStr);
if (typeof responceData['TxRate'] !== 'undefined') {
var upRate = responceData['TxRate'];
var downRate = responceData['RxRate'];
EMUI.homeStatusDetectController.showRate(upRate, downRate);
} else {
$('#wan_connect_rate').hide();
}
var upFlow = responceData['TxFlux'];
var downFlow = responceData['RxFlux'];
EMUI.homeStatusDetectController.showTotalFlow(upFlow, downFlow);
$('#wan_home_uptotalstream').show();
$('#wan_home_downtotalstream').show();
pageName = 'wifinetworkssetting';
}
}
});
EMUI.homePinStatusController = EMUI.ObjController.extend({
objName: 'monitoring/converged-status',
isNoSimCard: false,
isNeedPin: false,
isNeedPuk: false,
isSimLocked: false,
setStatus: function (hasSim, needPin, needPuk) {
this.isNoSimCard = hasSim;
this.isNeedPin = needPin;
this.isNeedPuk = needPuk;
},
getsuccessProc: function (data) {
if (data.type === 'response') {
var responceData = data['response'];
var simState = responceData['SimState'];
if (simState === '255') {
this.setStatus(true, false, false);
} else if (simState === '260') {
this.setStatus(false, true, false);
} else if (simState === '261') {
this.setStatus(false, false, true);
}
if (responceData['SimLockEnable'] === '1') {
this.isSimLocked = true;
}
}
}
});
EMUI.homeDevicePowerOnTimeController = EMUI.ObjController.extend({
objName: 'device/boot_time',
getsuccessProc: function (result) {
if (result.type === 'response') {
var rebootTime = result['response']['boot_time'];
$('#home_device_up_time').text(rebootTime);
$('#home_power_last_time').css('display', 'inline-block');
$('#home_power_last_time_margin_div').css('display', 'inline-block');
}
}
});
EMUI.homeMultiWlancontroller = EMUI.ObjController.extend({
objName: 'wlan/multi-basic-settings'
});
EMUI.homeWlanSwitchControler = EMUI.ObjController.extend({
objName: 'wlan/status-switch-settings',
ismulti2open: false,
ismulti5open: false,
wlanLen: null,
getsuccessProc: function (data) {
var self = this;
EMUI.homeMultiWlancontroller.load(function (multiData) {
var multiResponcedata = multiData['response'];
var wifidata = multiResponcedata['Ssids']['Ssid'];
if (typeof wifidata.length !== 'undefined') {
var wifidatalength = wifidata.length;
for (var loop = 0; loop < wifidatalength; loop++) {
var wifiitem = wifidata[loop];
if (wifiitem['ID'].indexOf('1.Ssid.1') > 0) {
if (wifiitem['WifiEnable'] === '1') {
self.ismulti2open = true;
} else {
self.ismulti2open = false;
}
} else if (wifiitem['ID'].indexOf('2.Ssid.1') > 0) {
if (wifiitem['WifiEnable'] === '1') {
self.ismulti5open = true;
} else {
self.ismulti5open = false;
}
}
}
if (GLOBAL.wifiFeatureSwitch.hilink_dbho_enable === '1') {
EMUI.doubleFrequencyConObjCtrl.load(function () {
if (GLOBAL.modules.dbho_special_enable === '1' && GLOBAL.modules.isdbFrequencyStatus) {
for (var i = 0; i < wifidatalength; i++) {
if (wifidata[i].wifiisdbhospecial === '1' && wifidata[i].WifiEnable === '1') {
self.ismulti5open = true;
} else {
self.ismulti5open = false;
}
}
}
}, false);
}
} else {
if (wifidata['ID'].indexOf('1.Ssid.1') > 0) {
if (wifidata['WifiEnable'] === '1') {
self.ismulti2open = true;
} else {
self.ismulti2open = false;
}
}
if (wifidata['ID'].indexOf('2.Ssid.1') > 0) {
if (wifidata['WifiEnable'] === '1') {
self.ismulti5open = true;
} else {
self.ismulti5open = false;
}
}
}
self.homeWifiStatus(data);
self.WifiNetStatus();
});
},
homeWifiStatus: function (data) {
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
$('#home_wifi5_satus').hide();
$('#home_wifi2_satus').hide();
return;
}
var self = this;
var responceData = data['response']['radios']['radio'];
var wifiRadioArr = $.makeArray(responceData);
wlanLen = wifiRadioArr.length;
if (wlanLen === 1) {
if (EMUI.homeStatusDetectController.wififrequence === '1') {
$('#home_wifi5_satus').show();
$('#home_wifi2_satus').hide();
isHasEnable = true;
$('#home_wifi_5g').addClass('selectmenu').removeClass('color_homeWlan_gray');
$('#home_wifi5_status_icon').attr('class', 'home_wifisingle_enable');
$('#homenet_wifi5_status_icon').attr('class', 'home_wifisingle_enable');
} else {
$('#home_wifi2_satus').show();
$('#home_wifi5_satus').hide();
isHasEnable = true;
$('#home_wifi2_status_icon').attr('class', 'home_wifisingle_enable');
$('#homenet_wifi2_status_icon').attr('class', 'home_wifisingle_enable');
$('#home_wifi_24g').addClass('selectmenu').removeClass('color_homeWlan_gray');
}
return;
}
for (var i = 0; i < wlanLen; i++) {
var item = wifiRadioArr[i];
if (item['index'] === '0') {
$('#home_wifi2_satus').show();
$('#homenet_wifi2_satus').show();
if (item['wifienable'] === '1' && self.ismulti2open) {
isHasEnable = true;
$('#home_wifi2_status_icon').attr('class', 'home_wifisingle_enable');
$('#homenet_wifi2_status_icon').attr('class', 'home_wifisingle_enable');
$('#home_wifi_24g').addClass('selectmenu').removeClass('color_homeWlan_gray');
} else {
$('#home_wifi_24g').addClass('color_homeWlan_gray').removeClass('selectmenu');
$('#home_wifi2_status_icon').attr('class', 'home_wifisingle');
$('#homenet_wifi2_status_icon').attr('class', 'home_wifisingle');
}
}
if (item['index'] === '1') {
$('#home_wifi5_satus').show();
$('#homenet_wifi5_satus').show();
if (item['wifienable'] === '1' && self.ismulti5open) {
isHasEnable = true;
$('#home_wifi_5g').addClass('selectmenu').removeClass('color_homeWlan_gray');
$('#home_wifi5_status_icon').attr('class', 'home_wifisingle_enable');
$('#homenet_wifi5_status_icon').attr('class', 'home_wifisingle_enable');
} else {
$('#home_wifi_5g').addClass('color_homeWlan_gray').removeClass('selectmenu');
$('#home_wifi5_status_icon').attr('class', 'home_wifisingle');
$('#homenet_wifi5_status_icon').attr('class', 'home_wifisingle');
}
}
}
},
WifiNetStatus: function () {
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
$('#home_wlan_connect_status').attr('class', 'home_connect_ok');
return;
}
var self = this;
if (isHasEnable && EMUI.homeStatusDetectController.wifistatus === '1') {
$('#home_wlan_connect_status').attr('class', 'home_connect_ok');
} else {
$('#home_wlan_connect_status').attr('class', 'home_connect_fail');
$('#home_wifi2_status_icon').attr('class', 'home_wifisingle');
$('#home_wifi5_status_icon').attr('class', 'home_wifisingle');
$('#home_wifi_5g').addClass('color_homeWlan_gray').removeClass('selectmenu');
$('#home_wifi_24g').addClass('color_homeWlan_gray').removeClass('selectmenu');
}
if (self.wlanLen === 1) {
$('#home_wlan_connect_status').css('margin-top', '40px;');
} else if (self.wlanLen === 2) {
$('#home_wlan_connect_status').css('margin-top', '30px;');
} else {
$('#home_wlan_connect_status').css('margin-top', '20px;');
}
}
});
function refreshNetStatus() {
if ((EMUI.homeStatusDetectController.currentnetworktype === '0') && (EMUI.homeConnectController.conectionconfig.ConnectMode === '1')) {
$('#home_connect_btn').addClass('btn_disabled');
} else {
$('#home_connect_btn').removeClass('btn_disabled');
if (EMUI.homePinStatusController.isNeedPin ||
EMUI.homePinStatusController.isNeedPuk ||
EMUI.homePinStatusController.isNoSimCard ||
EMUI.homePinStatusController.isSimLocked) {
$('#home_connect_btn').addClass('btn_disabled');
}
}
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
$('#home_wlan_connect_status').attr('class', 'home_connect_ok');
return;
}
if (isHasEnable && EMUI.homeStatusDetectController.wifistatus === '1') {
$('#home_wlan_connect_status').attr('class', 'home_connect_ok');
} else {
$('#home_wlan_connect_status').attr('class', 'home_connect_fail');
$('#home_wifi2_status_icon').attr('class', 'home_wifisingle');
$('#home_wifi5_status_icon').attr('class', 'home_wifisingle');
$('#home_wifi_5g').addClass('color_homeWlan_gray').removeClass('selectmenu');
$('#home_wifi_24g').addClass('color_homeWlan_gray').removeClass('selectmenu');
}
}
var homeConnectType = '';
var networkType = [];
function getNetTypes() {
getConfigData('global/net-type.xml', function ($xml) {
var ret = xml2object($xml);
var networktype = ret.config.networktypes;
if ($.isArray(networktype)) {
var i = 0;
for (i = 0; i < networktype.length; i++) {
networkType[parseInt(networktype[i].index, 10)] = networktype[i].networktype;
}
}
}, {
sync: true
});
}
function isValidType(inputType, defaultType) {
if (typeof inputType === 'undefined' || inputType === '' || inputType === ' ') {
return defaultType;
}
return inputType;
}
function checkServiceAvailable(monitoringStatus) {
var plmnRat = '';
if (monitoringStatus['ServiceStatus'] === '2') {
if (typeof monitoringStatus['CurrentNetworkTypeEx'] !== 'undefined' && monitoringStatus['CurrentNetworkTypeEx'] !== '') {
switch (monitoringStatus['CurrentNetworkTypeEx']) {
case MACRO_NET_WORK_TYPE_EX_GSM:
case MACRO_NET_WORK_TYPE_EX_GPRS:
case MACRO_NET_WORK_TYPE_EX_EDGE:
case MACRO_NET_WORK_TYPE_EX_IS95A:
case MACRO_NET_WORK_TYPE_EX_IS95B:
case MACRO_NET_WORK_TYPE_EX_CDMA_1X:
case MACRO_NET_WORK_TYPE_EX_HYBRID_CDMA_1X:
plmnRat = isValidType(networkType[parseInt(monitoringStatus['CurrentNetworkTypeEx'], 10)], '2G');
break;
case MACRO_NET_WORK_TYPE_EX_EVDO_REV_0:
case MACRO_NET_WORK_TYPE_EX_EVDO_REV_A:
case MACRO_NET_WORK_TYPE_EX_EVDO_REV_B:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_0:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_A:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_B:
case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_0:
case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_A:
case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_B:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_0:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_A:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_B:
case MACRO_NET_WORK_TYPE_EX_WCDMA:
case MACRO_NET_WORK_TYPE_EX_HSDPA:
case MACRO_NET_WORK_TYPE_EX_HSUPA:
case MACRO_NET_WORK_TYPE_EX_HSPA:
case MACRO_NET_WORK_TYPE_EX_HSPA_PLUS:
case MACRO_NET_WORK_TYPE_EX_DC_HSPA_PLUS:
case MACRO_NET_WORK_TYPE_EX_TD_SCDMA:
case MACRO_NET_WORK_TYPE_EX_TD_HSDPA:
case MACRO_NET_WORK_TYPE_EX_TD_HSUPA:
case MACRO_NET_WORK_TYPE_EX_TD_HSPA:
case MACRO_NET_WORK_TYPE_EX_TD_HSPA_PLUS:
plmnRat = isValidType(networkType[parseInt(monitoringStatus['CurrentNetworkTypeEx'], 10)], '3G');
break;
case MACRO_NET_WORK_TYPE_EX_LTE:
plmnRat = isValidType(networkType[parseInt(monitoringStatus['CurrentNetworkTypeEx'], 10)],
'4G');
break;
case MACRO_NET_WORK_TYPE_EX_LTE_PLUS:
plmnRat = isValidType(networkType[parseInt(monitoringStatus['CurrentNetworkTypeEx'], 10)], '4G+');
break;
case MACRO_NET_WORK_TYPE_EX_NR:
plmnRat = isValidType(networkType[parseInt(monitoringStatus['CurrentNetworkTypeEx'], 10)], '5G');
break;
default:
break;
}
} else {
switch (monitoringStatus['CurrentNetworkType']) {
case MACRO_NET_WORK_TYPE_GSM:
case MACRO_NET_WORK_TYPE_GPRS:
case MACRO_NET_WORK_TYPE_EDGE:
case MACRO_NET_WORK_TYPE_1XRTT:
case MACRO_NET_WORK_TYPE_1XEVDV:
plmnRat = isValidType(networkType[parseInt(monitoringStatus['CurrentNetworkType'], 10)], '2G');
break;
case MACRO_NET_WORK_TYPE_WCDMA:
case MACRO_NET_WORK_TYPE_TDSCDMA:
case MACRO_NET_WORK_TYPE_EVDO_REV_0:
case MACRO_NET_WORK_TYPE_EVDO_REV_A:
case MACRO_NET_WORK_TYPE_EVDO_REV_B:
case MACRO_NET_WORK_TYPE_HSDPA:
case MACRO_NET_WORK_TYPE_HSUPA:
case MACRO_NET_WORK_TYPE_HSPA:
case MACRO_NET_WORK_TYPE_HSPA_PLUS:
case MACRO_NET_WORK_TYPE_HSPA_PLUS_64QAM:
case MACRO_NET_WORK_TYPE_HSPA_PLUS_MIMO:
plmnRat = isValidType(networkType[parseInt(monitoringStatus['CurrentNetworkType'], 10)], '3G');
break;
case MACRO_NET_WORK_TYPE_LTE:
plmnRat = isValidType(networkType[parseInt(monitoringStatus['CurrentNetworkType'], 10)], '4G');
break;
case MACRO_NET_WORK_TYPE_LTE_NR:
plmnRat = isValidType(networkType[parseInt(monitoringStatus['CurrentNetworkType'], 10)], '5G');
break;
default:
break;
}
}
}
return plmnRat;
}
function homeStatusDetectFun(result, wirelessData) {
var isconnected = false;
var monitoringStatus = '';
var homeWan = '';
var gTraffic = EMUI.pubMonthStatisticsController.globalTraffic;
if (result['type'] === 'response') {
monitoringStatus = result['response'];
if (monitoringStatus['ConnectionStatus'] === '901' && monitoringStatus['ServiceStatus'] === '2' && wirelessData !== '' && wirelessData['Rat'] !== '') {
homeConnectType = 'umts';
isconnected = true;
pageName = 'mobileconnection';
if (GLOBAL.isSecondaryAccount) {
pageName = 'home';
$('#home_wan_status').css('cursor', 'auto');
}
if (EMUI.homeCellLockStatus.isCellLocked) {
isconnected = false;
pageName = 'celllock';
var errorInfo = '<a lang-id="celllock.tips" href="#celllock" class="home_font_style" target="_self">' + publicLang['celllock.tips'] + '</a>';
$('#home_error_info').html(errorInfo);
$('#home_connect_failed_type').attr('class', 'home_connect_fail');
$('#home_profile_btn').hide();
$('#home_statistic_connect_btn').hide();
$('#home_wan_connected_status').hide();
$('#home_wan_disconnected_status').show();
}
var serviceStr = checkServiceAvailable(monitoringStatus);
if (GLOBAL.modules.nrProductEnable === '1') {
if (serviceStr === "5G" && monitoringStatus['EndcStatus'] !== "1") {
var singleStrength = EMUI.homeStatusDetectController.getSimSingle(isconnected, monitoringStatus['SignalIconNr']);
} else if (serviceStr !== "5G" && monitoringStatus['EndcStatus'] === "1") {
var singleStrength = EMUI.homeStatusDetectController.getSimSingle(isconnected, monitoringStatus['SignalIcon'], monitoringStatus['SignalIconNr']);
} else {
var singleStrength = EMUI.homeStatusDetectController.getSimSingle(isconnected, monitoringStatus['SignalIcon']);
}
} else {
var singleStrength = EMUI.homeStatusDetectController.getSimSingle(isconnected, monitoringStatus['SignalIcon']);
}
$('#home_wan_status').attr('class', singleStrength);
var plmnName = EMUI.getWirelessProfileName.getPlmnName(wirelessData, monitoringStatus);
homeWan = '<div class="secondmenu_child">' + plmnName + '</div>';
if (monitoringStatus['RoamingStatus'] === '1' && monitoringStatus['ServiceStatus'] === '2') {
$('#roam_icon,#plmn_roam_box').show();
} else {
$('#roam_icon').hide();
if ($('#home_plmn_description').css('display') === 'none') {
$('#plmn_roam_box').hide();
} else {
$('#plmn_roam_box').show();
}
}
$('#home_wan_description').html(homeWan);
$('#home_wan_status').attr('href', '#' + pageName);
EMUI.homeTraficController.load(function (traficData) {
var responceData = traficData['response'];
var upRate = 0;
var downRate = 0;
var upFlow = 0;
var downFlow = 0;
if (typeof responceData.CurrentUploadRate !== 'undefined') {
upRate = responceData.CurrentUploadRate;
}
if (typeof responceData.CurrentDownloadRate !== 'undefined') {
downRate = responceData.CurrentDownloadRate;
}
if (typeof responceData.CurrentUpload !== 'undefined') {
upFlow = responceData.CurrentUpload;
}
if (typeof responceData.CurrentDownload !== 'undefined') {
downFlow = responceData.CurrentDownload;
}
if ((gTraffic && gTraffic['turnoffdataenable'] === 1 && gTraffic.turnoffdataswitch === '2' && gTraffic['turnoffdataflag'] === '0' && gTraffic.usagetraffic > gTraffic.dataLimit && gTraffic.dataLimit !== 0 && gTraffic.setmonthdata === '1') ||
(gTraffic && gTraffic['dailyturnoffdataenable'] === '1' && gTraffic['dailyturnoffdataswitch'] === '2' && gTraffic['dailydataused'] > gTraffic['daydatalimit'] && gTraffic['daydatalimit'] !== 0 && gTraffic['SetDayData'] === '1')) {
var overflowInfo = '<a lang-id="IDS_dialup_label_connected_exceed" href="#statistic" class="home_font_style" target="_self">' + publicLang['IDS_dialup_label_connected_exceed'] + '</a>';
if (GLOBAL.isSecondaryAccount) {
overflowInfo = '<a lang-id="IDS_dialup_label_connected_exceed" href="#home" class="home_font_style" target="_self">' + publicLang['IDS_dialup_label_connected_exceed'] + '</a>';
}
$('#wan_connect_rate').hide();
$('#home_traffic_overflow').html(overflowInfo);
$('#home_traffic_overflow').show();
} else {
EMUI.homeStatusDetectController.showRate(upRate, downRate);
}
EMUI.homeStatusDetectController.showTotalFlow(upFlow, downFlow);
if (responceData['CurrentConnectTime'] === '0') {
$('#home_wan_connect_lasttime').text('0');
} else {
var timeStr = getCurrentTime(xss(responceData['CurrentConnectTime']));
$('#home_wan_connect_lasttime').html(timeStr);
}
if (!EMUI.homeCellLockStatus.isCellLocked) {
pageName = 'statistic';
if (GLOBAL.isSecondaryAccount) {
pageName = 'home';
$('#home_wan_status').css('cursor', 'auto');
}
}
});
} else {
$('#home_total_up_flow').text('0');
$('#home_total_down_flow').text('0');
}
var fullName = EMUI.getWirelessProfileName.getPlmnName(wirelessData, monitoringStatus);
if (fullName.length > 10) {
$("#plmn_roam_box").removeClass("pull-left margin-right-5").addClass("clearboth");
$("#home_wan_description").removeClass("pull-left").addClass("clearboth");
$("#home_wan_description").css({ "max-width": "160px", "word-wrap": "break-word" });
}
return [isconnected, monitoringStatus, homeWan];
}
return [false, '', ''];
}
function homeStatus() {
var globalData = GLOBAL['modules'];
var isconnected = false;
var wirelessData = '';
var cradleStatus = '';
var monitoringStatus = '';
var homeWan = '';
pageName = 'home';
homeConnectType = '';
if ($('#roam_icon').css('display') === 'none' && $('#home_plmn_description').css('display') === 'none') {
$('#plmn_roam_box').hide();
} else {
$('#plmn_roam_box').show();
}
var simContent = '';
if (typeof GLOBAL.homedeviceinfo !== 'undefined' && GLOBAL.homedeviceinfo.onoff === '1') {
EMUI.homeDevicePowerOnTimeController.load();
}
getAjaxData('api/net/net-mode', function(res) {
if (res.type === 'response') {
currentNetworkMode = res['response'].NetworkMode
}
}, {sync: true});
EMUI.homePinStatusController.load(function (data) {
if (data.type === 'response') {
simContent = data['response'];
}
}, false);
EMUI.getWirelessProfileName.load(function (result) {
if (result.type === 'response') {
wirelessData = result['response'];
}
}, false);
var homeStatusDetectResultArr;
EMUI.homeStatusDetectController.load(function (result) {
homeStatusDetectResultArr = homeStatusDetectFun(result, wirelessData);
if (result.type === 'response') {
EMUI.homeStatusDetectController.wifistatus = result.response.WifiStatus;
EMUI.homeStatusDetectController.wififrequence = result.response.wififrequence;
EMUI.homeStatusDetectController.currentnetworktype = result.response.CurrentNetworkType;
var reject5g = result.response['endcRestrictedStatus'];
if (reject5g === '1' && currentNetworkMode !=="03") {
$('#5g_reject_tips').show();
} else {
$('#5g_reject_tips').hide();
clearTimeout(EMUI.homeStatusDetectController.timeoutInterval);
EMUI.homeStatusDetectController.timeoutInterval = null;
$('#5g_reject_tips_toast').hide()
}
}
}, false);
EMUI.homeCradelController.load(function (result) {
if (result.type === 'response') {
EMUI.homeCradelController.cradlestatus = result.response.cradlestatus;
EMUI.homeCradelController.connectstatus = result.response.connectstatus;
EMUI.homeCradelController.connectionmode = result.response.connectionmode;
}
}, false);
getAjaxData('api/wlan/status-switch-settings', function (res) {
if (res.type === 'response') {
EMUI.homeWlanSwitchControler.homeWifiStatus(res);
EMUI.homeWlanSwitchControler.WifiNetStatus();
}
}, { sync: true })
if (typeof GLOBAL.modules.dualwan_enable !== 'undefined' && GLOBAL.modules.dualwan_enable === '1') {
if (!EMUI.homePinStatusController.isNoSimCard || (EMUI.homeCradelController.cradlestatus === '1' && EMUI.homeCradelController.connectionmode !== '5' && EMUI.homeCradelController.connectionmode !== '0')) {
dualwanstatus = '1';
EMUI.homewaninfoStatus.load(function (data) {
if (data['type'] === 'response') {
EMUI.homewaninfoStatus.dualwanmode = data.response.dualwanmode;
EMUI.homewaninfoStatus.dualwanstatus = data.response.dualwanstatus;
EMUI.homewaninfoStatus.selectwantype_enable = data.response.selectwantype_enable;
EMUI.homewaninfoStatus.selectwantype = data.response.selectwantype;
if (EMUI.homewaninfoStatus.dualwanstatus === '0') {
dualwanstatus = '0';
}
}
}, false);
EMUI.homeUpAndData.load(null, false);
} else {
dualwanstatus = '0';
homeDualNetworkDualUtms();
}
} else {
dualwanstatus = '0';
}
if (dualwanstatus === '0') {
homeDualNetworkDualPassIndexHide();
} else {
if (EMUI.homePinStatusController.isNoSimCard && EMUI.homeCradelController.cradlestatus === '1' && EMUI.homeCradelController.connectionmode !== '5' && EMUI.homeCradelController.connectionmode !== '0') {
if (ethaccessRes.indexOf("connected") !== -1) {
$("#home_wan_status1").prev().css({
"display": "block"
});
$("#home_wan_status1").css({
"display": "none"
});
homeDualNetworkDualEth();
}
if (ethaccessRes.indexOf("connected") === -1) {
$("#home_wan_status1").prev().css({
"display": "none"
});
$("#home_wan_status1").css({
"display": "block"
});
homeDualNetworkDualEth();
}
} else if (!EMUI.homePinStatusController.isNoSimCard && (EMUI.homeCradelController.cradlestatus !== '1' || (EMUI.homeCradelController.cradlestatus === '1' && (EMUI.homeCradelController.connectionmode === '5' || EMUI.homeCradelController.connectionmode === '0')))) {
homeDualNetworkDualUtms();
}else{
if (EMUI.homewaninfoStatus.selectwantype_enable && EMUI.homewaninfoStatus.selectwantype_enable === '1' && EMUI.homewaninfoStatus.selectwantype && EMUI.homewaninfoStatus.selectwantype === '1') {
if (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") === -1) {
$("#home_wan_status1").prev().css({ "display": "none" });
$("#home_wan_status1").css({ "display": "block" });
homeDualNetworkDualPassoneIndex();
} else if (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") !== -1) {
$("#home_wan_status1").prev().css({ "display": "none" });
$("#home_wan_status1").css({ "display": "block" });
homeDualNetworkDualPassoneIndex();
} else {
$("#home_wan_status1").prev().css({ "display": "block" });
$("#home_wan_status1").css({ "display": "none" });
homeDualNetworkDualPassoneIndex();
}
}else{
if (EMUI.homewaninfoStatus.dualwanmode === '0') {
if (ethaccessRes.indexOf("connected") !== -1 && umtsaccessRes.indexOf("connected") !== -1) {
$("#home_wan_status1").prev().css({ "display": "block" });
$("#home_wan_status1").css({ "display": "none" });
homeDualNetworkDualPassIndex();
}
if (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") === -1) {
$("#home_wan_status1").prev().css({ "display": "none" });
$("#home_wan_status1").css({ "display": "block" });
homeDualNetworkDualPassIndex();
}
if (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") !== -1) {
$("#home_wan_status1").prev().css({ "display": "none" });
$("#home_wan_status1").css({ "display": "block" });
homeDualNetworkDualPassoneIndex();
}
if (ethaccessRes.indexOf("connected") !== -1 && umtsaccessRes.indexOf("connected") === -1) {
$("#home_wan_status1").prev().css({ "display": "block" });
$("#home_wan_status1").css({ "display": "none" });
homeDualNetworkDualPassoneIndex();
}
} else {
if (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") === -1) {
$("#home_wan_status1").prev().css({ "display": "none" });
$("#home_wan_status1").css({ "display": "block" });
homeDualNetworkDualPassoneIndex();
} else if (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") !== -1) {
$("#home_wan_status1").prev().css({ "display": "none" });
$("#home_wan_status1").css({ "display": "block" });
homeDualNetworkDualPassoneIndex();
} else {
$("#home_wan_status1").prev().css({ "display": "block" });
$("#home_wan_status1").css({ "display": "none" });
homeDualNetworkDualPassoneIndex();
}
}
}
}
}
EMUI.homeConnectController.initConnectButton();
if (typeof globalData.celllock_enabled !== 'undefined' && globalData.celllock_enabled === '1') {
EMUI.homeCellLockStatus.load(function (data) {
if (data.type === 'response') {
var responceData = data['response'];
if (responceData['celllockStatus'] === '2' && responceData['celllockEnable'] === '1') {
EMUI.homeCellLockStatus.isCellLocked = true;
EMUI.homeStatusDetectController.load(function (result) {
homeStatusDetectResultArr = homeStatusDetectFun(result, wirelessData);
}, false);
} else {
EMUI.homeCellLockStatus.isCellLocked = false;
}
}
});
}
if (homeStatusDetectResultArr) {
isconnected = homeStatusDetectResultArr[0];
monitoringStatus = homeStatusDetectResultArr[1];
homeWan = homeStatusDetectResultArr[2];
}
EMUI.homeHostsController = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'system/HostInfo',
getsuccessProc: function (data) {
var responceData = $.makeArray(data);
var hostLen = responceData.length;
var activeCount = 0;
var inter_activeCount = 0;
for (var i = 0; i < hostLen; i++) {
var hostItem = responceData[i];
if (dualwanstatus !== '0' && !EMUI.homePinStatusController.isNoSimCard && EMUI.homeCradelController.cradlestatus === '1' && EMUI.homeCradelController.connectionmode !== '5' && EMUI.homeCradelController.connectionmode !== '0') {
if (hostItem && hostItem['CurrentWanType'] === 1 && hostItem['Active'] === true) {
inter_activeCount = inter_activeCount + 1;
}
if (hostItem && hostItem['CurrentWanType'] === 2 && hostItem['Active'] === true) {
activeCount = activeCount + 1;
}
} else {
if (hostItem  && hostItem['Active'] === true) {
activeCount = activeCount + 1;
}
}
}
if (dualwanstatus !== '0' && !EMUI.homePinStatusController.isNoSimCard && EMUI.homeCradelController.cradlestatus === '1' && EMUI.homeCradelController.connectionmode !== '5' && EMUI.homeCradelController.connectionmode !== '0') {
if (EMUI.homewaninfoStatus.selectwantype_enable && EMUI.homewaninfoStatus.selectwantype_enable === '1' && EMUI.homewaninfoStatus.selectwantype && EMUI.homewaninfoStatus.selectwantype === '1') {
if ((ethaccessRes.indexOf("connected") !== -1 && umtsaccessRes.indexOf("connected") !== -1) || (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") === -1)) {
activeCount = activeCount + inter_activeCount;
activeCount = Number(activeCount);
}
if (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") !== -1) {
activeCount = Number(activeCount);
}
if (ethaccessRes.indexOf("connected") !== -1 && umtsaccessRes.indexOf("connected") === -1) {
activeCount = Number(inter_activeCount);
}
} else {
if (EMUI.homewaninfoStatus.dualwanmode === '0') {
if (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") !== -1 || ethaccessRes.indexOf("connected") !== -1 && umtsaccessRes.indexOf("connected") === -1) {
activeCount = activeCount + inter_activeCount;
activeCount = Number(activeCount);
} else {
activeCount = Number(activeCount);
}
} else {
if ((ethaccessRes.indexOf("connected") !== -1 && umtsaccessRes.indexOf("connected") !== -1) || (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") === -1)) {
activeCount = activeCount + inter_activeCount;
activeCount = Number(activeCount);
}
if (ethaccessRes.indexOf("connected") === -1 && umtsaccessRes.indexOf("connected") !== -1) {
activeCount = Number(activeCount);
}
if (ethaccessRes.indexOf("connected") !== -1 && umtsaccessRes.indexOf("connected") === -1) {
activeCount = Number(inter_activeCount);
}
}
}
} else {
activeCount = Number(activeCount);
inter_activeCount = Number(activeCount);
}
$('#home_device_active_count').text(activeCount);
$('#home_inter_device_active_count').text(inter_activeCount);
}
});
if (EMUI.BasicInfoObjController.content.response.classify !== 'hilink') {
EMUI.homeHostsController.load();
}
if (isMobilewifi && GLOBAL.config.battery_enabled === '1') {
$('#battery_device_block').show();
var batLev = 'normal'; // monitoringStatus['BatteryLevel'];
var status = monitoringStatus['BatteryStatus'];
if (status === '1') {
batLev = 'charge';
} else if (status === '-1') {
batLev = 'low';
} else {
batLev = 'normal';
}
if (EMUI.homeStatusDetectController.batteryLeval !== batLev) {
$('#home_battery_low').hide();
$('#home_battery_normal').hide();
$('#home_battery_charge').hide();
if (batLev === 'charge') {
$('#home_battery_charge').show();
} else if (batLev === 'low') {
$('#home_battery_low').show();
} else {
$('#home_battery_normal').show();
}
EMUI.homeStatusDetectController.batteryLeval = batLev;
}
var batteryPercent = 0;
if (EMUI.homeDeviceFeatureSwitch.coulometerFlag) {
batteryPercent = monitoringStatus['BatteryPercent'];
$('#home_battery_number').text(monitoringStatus['BatteryPercent'] + '%');
} else {
var percentArray = [0, 20, 40, 70, 100];
batteryPercent = percentArray[monitoringStatus['BatteryLevel']];
$('#home_battery_number').hide();
}
var batteryWidth = (parseInt(batteryPercent, 10) / 100) * 11;
if (batLev === 'normal') {
$('#home_battery_dynamic_back').css('width', batteryWidth + 'px');
}
} else {
$('#no_battery_device_block').show();
}
if (isconnected) {
if (wirelessData !== '') {
if (GLOBAL.isSecondaryAccount || (!GLOBAL.modules.sms_enabled || GLOBAL.modules.sms_enabled === '0')) {
$('#header_sms_info').hide();
} else {
$('#header_sms_info').show();
}
if (isEthernetConnect()) {
$('#home_profile_btn').hide();
} else {
$('#home_profile_btn').show();
}
$('#home_statistic_connect_btn').hide();
}
$('#home_wan_connected_status').show();
if (GLOBAL.isSecondaryAccount) {
$('.home_up, .home_down, #home_up_rate, #home_down_rate').css('cursor', 'auto');
}
$('#home_wan_disconnected_status').hide();
return;
}
if (dualwanstatus !== '1' && typeof globalData.cradle_enabled !== 'undefined' && globalData.cradle_enabled === '1') {
EMUI.homeCradelController.load(function (result) {
if (result.type === 'response') {
cradleStatus = result['response'];
if (cradleStatus['connectstatus'] === '901') {
$('#wan_connect_rate').hide();
isconnected = true;
homeConnectType = 'eth';
var timeStr = getCurrentTime(xss(cradleStatus['currenttime']));
$('#home_wan_connect_lasttime').html(timeStr);
$('#wan_home_uptotalstream').hide();
$('#wan_home_downtotalstream').hide();
$('#home_wan_status').attr('class', 'home_internet');
$('#home_wan_status').attr('href', '#ethernetsettings');
homeWan = '<table cellpadding="0" cellspacing="0" frame=void rules=none><tr><td style="max-width:160px;"><div style="text-align:center;" lang-id="home.internet">' + publicLang['home.internet'] + '</div></td></tr></table>';
$('#home_wan_description').html(homeWan);
$('#home_plmn_description').hide();
$('#roam_icon').hide();
$('#plmn_roam_box').hide();
var ethInfo = '<a lang-id="home.connectsiccess" href="#ethernetsettings" class="home_font_style" target="_self">' + publicLang['home.connectsiccess'] + '</a>';
$('#wan_connect_rate').hide();
$('#home_traffic_overflow').html(ethInfo);
$('#home_traffic_overflow').show();
pageName = 'ethernetsettings';
$('#home_profile_btn').hide();
} else {
$('#home_traffic_overflow').empty();
$('#home_traffic_overflow').hide();
$('#home_wan_connect_lasttime').text('0');
$('#wan_home_uptotalstream').show();
$('#wan_home_downtotalstream').show();
}
}
}, false);
}
if (isconnected) {
$('#home_wan_connected_status').show();
$('#home_wan_disconnected_status').hide();
return;
}
var wifiOffStatus = '';
if (monitoringStatus['WifiConnectionStatus'] === '901') {
EMUI.homeWifiOffLoadStatusController.load(function () {
homeConnectType = 'wifi';
isconnected = true;
pageName = 'wifinetworkssetting';
}, false);
$('#home_profile_btn').hide();
$('#home_plmn_description').hide();
$('#roam_icon').hide();
$('#plmn_roam_box').hide();
}
if (isconnected) {
$('#home_wan_connected_status').show();
$('#home_wan_disconnected_status').hide();
return;
}
$('#home_wan_connected_status').hide();
$('#home_wan_disconnected_status').show();
$('#home_wan_connect_lasttime').text('0');
homeWan = '<table cellpadding="0" cellspacing="0" frame=void rules=none><tr><td style="wmax-width:160px;"><div class="wordbreak" lang-id="home.internet">' + publicLang['home.internet'] + '</div></td>';
if (monitoringStatus['RoamingStatus'] === '1' && monitoringStatus['ServiceStatus'] === '2') {
$('#roam_icon,#plmn_roam_box').show();
} else {
$('#roam_icon').hide();
if ($('#home_plmn_description').css('display') === 'none') {
$('#plmn_roam_box').hide();
} else {
$('#plmn_roam_box').show();
}
}
homeWan += '</tr></table>';
var gTraffic = EMUI.pubMonthStatisticsController.globalTraffic;
if (homeConnectType === '') {
homeWan = '<table cellpadding="0" cellspacing="0" frame=void rules=none><tr><td style="max-width:160px;"><div class="wordbreak" lang-id="home.internet">' + publicLang['home.internet'] + '</div></td>';
homeWan += '<td style="width:10px;">&nbsp;</td>';
if (EMUI.homePinStatusController.isNoSimCard) {
homeWan += '<td><div class="sim_no_connected" lang-id-set="title" title="' + publicLang['home.nocard'] + '" lang-id="home.nocard"></div></td>';
}
homeWan += '</tr></table>';
if (dualwanstatus !== '1' && typeof globalData.cradle_enabled !== 'undefined' && globalData.cradle_enabled === '1') {
if (cradleStatus['cradlestatus'] === '1' && (cradleStatus['connectionmode'] !== '5' && cradleStatus['connectionmode'] !== '0')) {
$('#home_profile_btn').hide();
pageName = 'ethernetsettings';
var errorInfo = '';
if (cradleStatus['connectstatus'] === '900') {
errorInfo = '<a lang-id="home.eth.connecting" href="#ethernetsettings" class="home_font_style" target="_self">' + publicLang['home.eth.connecting'] + '</a>';
} else if (cradleStatus['connectstatus'] === '902') {
errorInfo = '<a lang-id="home.eth.disconnect" href="#ethernetsettings" class="home_font_style" target="_self">' + publicLang['home.eth.disconnect'] + '</a>';
} else if (cradleStatus['connectstatus'] === '903') {
errorInfo = '<a lang-id="home.eth.disconnecting" href="#ethernetsettings" class="home_font_style" target="_self">' + publicLang['home.eth.disconnecting'] + '</a>';
} else if (cradleStatus['connectstatus'] === '904') {
errorInfo = '<a lang-id="home.eth.failed" href="#ethernetsettings" class="home_font_style" target="_self">' + publicLang['home.eth.failed'] + '</a></div>';
} else if (cradleStatus['connectstatus'] === '905') {
errorInfo = '<a lang-id="home.eth.noneaccount" href="#ethernetsettings" class="home_font_style" target="_self">' + publicLang['home.eth.noneaccount'] + '</a>';
} else if (cradleStatus['connectstatus'] === '906') {
errorInfo = '<a lang-id="home.eth.authErr" href="#ethernetsettings" class="home_font_style" target="_self">' + publicLang['home.eth.authErr'] + '</a>';
} else {
errorInfo = '<a lang-id="home.eth.failed" href="#ethernetsettings" class="home_font_style" target="_self">' + publicLang['home.eth.failed'] + '</a>';
}
$('#home_wan_status').attr('class', 'home_internet');
$('#home_wan_status').attr('href', '#' + pageName);
$('#home_error_info').html(errorInfo);
$('#home_wan_description').html(homeWan);
$('#home_plmn_description').hide();
$('#roam_icon').hide();
$('#plmn_roam_box').hide();
$('#home_connect_failed_type').attr('class', 'home_connect_fail');
return;
}
}
if (wifiOffStatus['PowerStatus'] === '1') {
$('#home_profile_btn').hide();
if (wifiOffStatus['ConnectStatus'] === '0') {
$('#home_wan_status').attr('class', 'home_wifi_0');
$('#home_wan_status').attr('href', '#' + pageName);
$('#home_error_info').html('<a lang-id="home.wifioffload.disconnect" href="#wifinetworkssetting" class="home_font_style" target="_self">' + publicLang['home.wifioffload.disconnect'] + '</a>');
$('#home_wan_status').attr('href', '#wifinetworkssetting');
$('#home_plmn_description').hide();
$('#roam_icon').hide();
$('#plmn_roam_box').hide();
return;
} else if (wifiOffStatus['ConnectStatus'] === '1') {
pageName = 'wifinetworkssetting';
$('#home_wan_status').attr('class', 'home_wifi_0');
$('#home_error_info').html('<a lang-id="home.wifioffload.connecting" href="#wifinetworkssetting" class="home_font_style" target="_self">' + publicLang['home.wifioffload.connecting'] + '</a>');
$('#home_wan_status').attr('href', '#' + pageName);
$('#home_plmn_description').hide();
$('#roam_icon').hide();
$('#plmn_roam_box').hide();
return;
} else if (wifiOffStatus['ConnectStatus'] === '3') {
pageName = 'wifinetworkssetting';
$('#home_wan_status').attr('class', 'home_wifi_0');
$('#home_error_info').html('<a lang-id="home.wifioffload.disconnecting" href="#wifinetworkssetting" class="home_font_style" target="_self">' + publicLang['home.wifioffload.disconnecting'] + '</a>');
$('#home_wan_status').attr('href', '#' + pageName);
$('#home_plmn_description').hide();
$('#roam_icon').hide();
$('#plmn_roam_box').hide();
return;
}
}
if (EMUI.homePinStatusController.isNoSimCard) {
$('#home_wan_status').attr('class', 'home_no_sim');
$('#home_wan_status').css('cursor', 'default');
$('#home_error_info').html('<div lang-id="home.nocard" style="" class="color_home_gray">' + publicLang['home.nocard'] + '</div>');
$('#home_wan_description').html(homeWan);
$('#home_profile_btn').hide();
$('#home_plmn_description').hide();
$('#roam_icon').hide();
$('#plmn_roam_box').hide();
if (GLOBAL.modules.dualwan_enable && GLOBAL.modules.dualwan_enable === '1') {
if(GLOBAL.modules.hide_eth_wan_rate && GLOBAL.modules.hide_eth_wan_rate === '1'){
$('#home_inter_ok_hide #wan_connect_rate').hide();
$('#wan_connect_ok').show();
}
}
return;
}
if (EMUI.homePinStatusController.isNeedPin) {
pageName = '/html/redirectdisconnect.html#pinlock';
if (simContent !== '' && parseInt(simContent['SimPinTimes'], 10) < 3) {
$('#home_error_info').html('<a lang-id="home.pinerr" href="/html/redirectdisconnect.html#pinlock" class="home_font_style" target="_self">' + publicLang['home.pinerr'] + '</a>');
} else {
$('#home_error_info').html('<a lang-id="home.needpin" href="/html/redirectdisconnect.html#pinlock" class="home_font_style" target="_self">' + publicLang['home.needpin'] + '</a>');
}
$('#home_wan_status').attr('class', 'home_no_sim');
$('#home_wan_status').attr('href', pageName);
$('#home_wan_description').html(homeWan);
$('#home_plmn_description').hide();
$('#roam_icon').hide();
$('#plmn_roam_box').hide();
return;
}
if (EMUI.homePinStatusController.isNeedPuk) {
pageName = '/html/redirectdisconnect.html#puklock';
if (simContent !== '' && parseInt(simContent['SimPukTimes'], 10) < 10) {
$('#home_error_info').html('<a lang-id="home.pukerr" href="/html/redirectdisconnect.html#puklock" class="home_font_style" target="_self">' + publicLang['home.pukerr'] + '</a>');
} else {
$('#home_error_info').html('<a lang-id="home.needpuk" href="/html/redirectdisconnect.html#puklock" class="home_font_style" target="_self">' + publicLang['home.needpuk'] + '</a>');
}
$('#home_wan_status').attr('class', 'home_no_sim');
$('#home_wan_status').attr('href', pageName);
$('#home_wan_description').html(homeWan);
$('#home_plmn_description').hide();
$('#roam_icon').hide();
$('#plmn_roam_box').hide();
return;
}
var simStatus = parseInt(monitoringStatus['ConnectionStatus'], 10);
var simErrorInfo = '';
var isNoService = false;
var connectType = '';
if (typeof monitoringStatus.CurrentNetworkTypeEx !== 'undefined' && monitoringStatus.CurrentNetworkTypeEx !== '') {
connectType = monitoringStatus.CurrentNetworkTypeEx;
} else {
connectType = monitoringStatus.CurrentNetworkType;
}
var isNeedConnect = false;
pageName = 'mobileconnection';
if (GLOBAL.isSecondaryAccount) {
pageName = 'home';
$('#home_wan_status').css('cursor', 'auto');
}
if (simStatus === 2 || simStatus === 3 || simStatus === 5 || simStatus === 8 || simStatus === 20 || simStatus === 21 || simStatus === 23 || simStatus === 27
|| simStatus === 28 || simStatus === 29 || simStatus === 30 || simStatus === 31 || simStatus === 32 || simStatus === 33 || simStatus === 65538 || simStatus === 65539
|| simStatus === 65567 || simStatus === 65568 || simStatus === 131073 || simStatus === 131074 || simStatus === 131076 || simStatus === 131078) {
if (typeof globalData['dataswitch_enabled'] !== 'undefined') {
simErrorInfo = '<a lang-id="home.dialup_connection_fail_wrong_param" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.dialup_connection_fail_wrong_param'] + '</a>';
} else {
simErrorInfo = '<a lang-id="home.unconnect" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.unconnect'] + '</a>';
}
} else if (simStatus === 7 || simStatus === 11 || simStatus === 14 || simStatus === 37 || simStatus === 131079 || simStatus === 131080 || simStatus === 131081
|| simStatus === 131082 || simStatus === 131083 || simStatus === 131084 || simStatus === 131085 || simStatus === 131086 || simStatus === 131087 || simStatus === 131088 || simStatus === 131089) {
if (typeof globalData['dataswitch_enabled'] !== 'undefined') {
simErrorInfo = '<a lang-id="home.dialup_connection_fail_network_unvisitable" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.dialup_connection_fail_network_unvisitable'] + '</a>';
} else {
simErrorInfo = '<a lang-id="home.unconnect" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.unconnect'] + '</a>';
}
} else if (simStatus === 905) {
if (typeof globalData['dataswitch_enabled'] !== 'undefined') {
simErrorInfo = '<a lang-id="home.connection_failed_signal_poor" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.connection_failed_signal_poor'] + '</a>';
} else {
simErrorInfo = '<a lang-id="home.unconnect" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.unconnect'] + '</a>';
}
} else if (simStatus === 201) {
pageName = 'statistic';
if (GLOBAL.isSecondaryAccount) {
pageName = 'home';
$('#home_wan_status').css('cursor', 'auto');
}
isNeedConnect = true;
if (typeof globalData['dataswitch_enabled'] !== 'undefined') {
simErrorInfo = '<a lang-id="home.static_traffic_exceeded_limited" href="#statistic" class="home_font_style" target="_self">' + publicLang['home.static_traffic_exceeded_limited'] + '</a>';
} else {
simErrorInfo = '<a lang-id="home.unconnect" href="#statistic" class="home_font_style" target="_self">' + publicLang['home.unconnect'] + '</a>';
}
} else if (simStatus === 12 || simStatus === 13) {
if (typeof globalData['dataswitch_enabled'] !== 'undefined') {
simErrorInfo = '<a lang-id="home.dialup_connection_fail_roaming_unallowable" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.dialup_connection_fail_roaming_unallowable'] + '</a>';
} else {
simErrorInfo = '<a lang-id="home.unconnect" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.unconnect'] + '</a>';
}
} else if (simStatus === 900) {
simErrorInfo = '<a lang-id="home.eth.connecting" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.eth.connecting'] + '</a>';
} else if (simStatus === 903) {
simErrorInfo = '<a lang-id="home.eth.disconnecting" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.eth.disconnecting'] + '</a>';
} else if (simStatus === 902) {
if ((connectType === '0' || monitoringStatus.CurrentServiceDomain === '0' || monitoringStatus.ServiceStatus !== '2') && typeof globalData['dataswitch_enabled'] !== 'undefined') {
simErrorInfo = '<a lang-id="home.hilink_label_connect_failed" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.hilink_label_connect_failed'] + '</a>';
} else {
simErrorInfo = '<a lang-id="home.unconnect" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.unconnect'] + '</a>';
}
} else if (simStatus === 112 || simStatus === 114) {
simErrorInfo = '<a lang-id="home.unconnect" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.unconnect'] + '</a>';
} else if (simStatus === 113 || simStatus === 115) {
if (parseInt(monitoringStatus['RoamingStatus'], 10) === 1 && (!globalData['dataswitch_enabled'] || (globalData['dataswitch_enabled'] && EMUI.homeDataSwitchController.isDataSwitchOpen))) {
if (globalData['dataswitch_enabled'] === '1') {
if (GLOBAL.isSecondaryAccount) {
simErrorInfo = '<a lang-id="IDS_advanced_roaming_auto_connection_forbid" class="home_font_style" style="cursor:auto" target="_self">' + publicLang['IDS_advanced_roaming_auto_connection_forbid'] + '</a>';
} else {
if (GLOBAL.modules && GLOBAL.modules.roamdisplay_enable === '0') {
simErrorInfo = '<span lang-id="data_roaming_prompt_after_trimming"  class="home_font_style" >' + publicLang['data_roaming_prompt_after_trimming'] + '</span>';
$('#home_error_info').css('pointer-events','none');
} else {
simErrorInfo = '<a lang-id="IDS_label_roaming_auto_connection_forbid" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['IDS_label_roaming_auto_connection_forbid'] + '</a>';
}
}
} else {
simErrorInfo = '<a lang-id="home.hilink_label_roaming_auto_connection_forbid" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.hilink_label_roaming_auto_connection_forbid'] + '</a>';
}
} else {
simErrorInfo = '<a lang-id="home.unconnect" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.unconnect'] + '</a>';
}
} else {
simErrorInfo = '<a lang-id="home.unconnect" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['home.unconnect'] + '</a>';
}
var serviceStr = checkServiceAvailable(monitoringStatus);
if (connectType === '0' || monitoringStatus.CurrentServiceDomain === '0' || monitoringStatus.ServiceStatus !== '2' || serviceStr === '') {
isNoService = true;
if (GLOBAL.modules.onekeydiag_enabled === '1') {
simErrorInfo = '<div onclick="stopBubble()">' + '<a id="onekey_no_service" href="#onekey" class="home_font_style" target="_self"></a>' + '</div>';
} else {
simErrorInfo = '<a lang-id="dialup_label_no_service" href="#mobileconnection" class="home_font_style" target="_self">' + publicLang['dialup_label_no_service'] + '</a>';
}
}
if (gTraffic && gTraffic['turnoffdataenable'] === '1' && gTraffic['turnoffdataswitch'] === '1' && gTraffic['usagetraffic'] > gTraffic['dataLimit'] && gTraffic['dataLimit'] !== 0 && gTraffic['setmonthdata'] === '1') {
simErrorInfo = '<a lang-id="IDS_static_traffic_exceeded_limited" href="#statistic" class="home_font_style" target="_self">' + publicLang['IDS_static_traffic_exceeded_limited'] + '</a>';
EMUI.homeSetDialContinueController.isOutUsedMonth = true;
}
if (gTraffic && gTraffic['dailyturnoffdataenable'] === '1' && gTraffic['dailyturnoffdataswitch'] === '1' && gTraffic['dailydataused'] > gTraffic['daydatalimit'] && gTraffic['daydatalimit'] !== 0 && gTraffic['SetDayData'] === '1') {
simErrorInfo = '<a lang-id="IDS_static_traffic_exceeded_limited" href="#statistic" class="home_font_style" target="_self">' + publicLang['IDS_static_traffic_exceeded_limited'] + '</a>';
EMUI.homeSetDailyDialContinueController.isOutUsedDaily = true;
}
if (wirelessData !== '' && wirelessData['Rat'] !== '') {
var plmnName = EMUI.getWirelessProfileName.getPlmnName(wirelessData, monitoringStatus);
homeWan = '<div class="secondmenu_child">' + plmnName + '</div>';
if (monitoringStatus['RoamingStatus'] === '1' && monitoringStatus['ServiceStatus'] === '2') {
$('#roam_icon,#plmn_roam_box').show();
} else {
$('#roam_icon').hide();
if ($('#home_plmn_description').css('display') === 'none') {
$('#plmn_roam_box').hide();
} else {
$('#plmn_roam_box').show();
}
}
$('#home_wan_description').html(homeWan);
$('#home_connect_failed_type').attr('class', 'home_sim_close');
if (GLOBAL.modules.nrProductEnable === '1') {
if (serviceStr === "5G" && monitoringStatus['EndcStatus'] !== "1") {
var singleStrength = EMUI.homeStatusDetectController.getSimSingle(false, monitoringStatus['SignalIconNr']);
} else if (serviceStr !== "5G" && monitoringStatus['EndcStatus'] === "1") {
var singleStrength = EMUI.homeStatusDetectController.getSimSingle(false, monitoringStatus['SignalIcon'], monitoringStatus['SignalIconNr']);
} else {
var singleStrength = EMUI.homeStatusDetectController.getSimSingle(false, monitoringStatus['SignalIcon']);
}
} else {
var singleStrength = EMUI.homeStatusDetectController.getSimSingle(false, monitoringStatus['SignalIcon']);
}
$('#home_wan_status').attr('class', singleStrength);
$('#home_wan_status').attr('href', '#' + pageName);
} else {
$('#home_wan_description').html(homeWan);
$('#home_plmn_description').hide();
$('#roam_icon').hide();
$('#plmn_roam_box').hide();
$('#home_connect_failed_type').attr('class', 'home_connect_fail');
if (isNoService) {
$('#home_wan_status').attr('class', 'home_sim_off_0');
$('#home_wan_status').attr('href', '#' + pageName);
} else {
$('#home_wan_status').attr('class', 'home_no_sim');
}
}
if (wirelessData === '') {
if (isNoService && !GLOBAL.isSecondaryAccount && (GLOBAL.modules.sms_enabled && GLOBAL.modules.sms_enabled === '1')) {
$('#header_sms_info').show();
} else {
$('#header_sms_info').hide();
}
$('#home_profile_btn').hide();
$('#home_statistic_connect_btn').hide();
} else {
if (GLOBAL.isSecondaryAccount || (!GLOBAL.modules.sms_enabled || GLOBAL.modules.sms_enabled === '0')) {
$('#header_sms_info').hide();
} else {
$('#header_sms_info').show();
}
if (isNeedConnect) {
$('#home_profile_btn').hide();
if (isEthernetConnect()) {
$('#home_statistic_connect_btn').hide();
} else {
$('#home_statistic_connect_btn').show();
}
} else {
$('#home_statistic_connect_btn').hide();
if (isEthernetConnect()) {
$('#home_profile_btn').hide();
} else {
$('#home_profile_btn').show();
}
}
}
if (GLOBAL.isSecondaryAccount) {
if (simErrorInfo.indexOf('#mobileconnection') > -1 || simErrorInfo.indexOf('#statistic') > -1) {
simErrorInfo = simErrorInfo.replace(/#mobileconnection/g, '#home');
simErrorInfo = simErrorInfo.replace(/#statistic/g, '#home');
$('#home_wan_status').css('cursor', 'auto');
}
}
$('#home_error_info').html(simErrorInfo);
EMUI.LanguageController.registerLanguageEx(
'onekey_no_service',
'onekey_dialup_label_no_service', '%s',
'menu.onekey');
EMUI.LanguageController.transLangEx();
}
}
var homeInterval = null;
var homeSetload = null;
var ethernetInterval = null;
var firstdEvents = true;
function clonePcTime() {
var now = new Date();
var strYear = now.getFullYear();
var strMonth = now.getMonth() + 1;
if (strMonth < 10) {
strMonth = '0' + strMonth;
}
var strDay = now.getDate();
if (strDay < 10) {
strDay = '0' + strDay;
}
var strHour = now.getHours();
if (strHour < 10) {
strHour = '0' + strHour;
}
var strMin = now.getMinutes();
if (strMin < 10) {
strMin = '0' + strMin;
}
var strSec = now.getSeconds();
if (strSec < 10) {
strSec = '0' + strSec;
}
var strTime = strYear.toString() + strMonth.toString() + strDay.toString() + strHour.toString() + strMin.toString() + strSec.toString();
var strTimezone = clientTimeZone();
var hostInfo = {
Time: strTime,
Timezone: strTimezone
};
var TIMEHOSTINFO = EMUI.ObjController.extend({
objName: 'host/info',
isSupportSaveInfo: false
});
TIMEHOSTINFO.postData(hostInfo);
function clientTimeZone() {
var munites = new Date().getTimezoneOffset();
var hour = parseInt(munites / 60, 10);
var munite = munites % 60;
var prefix = 'GMT-';
if (hour < 0 || munite < 0) {
prefix = 'GMT+';
hour = -hour;
if (munite < 0) {
munite = -munite;
}
}
hour = hour + '';
munite = munite + '';
if (hour.length === 1) {
hour = '0' + hour;
}
if (munite.length === 1) {
munite = '0' + munite;
}
return prefix + hour + ':' + munite;
}
}
function getHistoryLoginTime() {
var lastLoginIp = sessionStorage.getItem('lastLoginIp');
var lastLoginTime = sessionStorage.getItem('lastLoginTime');
var lastLoginState = sessionStorage.getItem('lastLoginState');
if (!lastLoginIp) {
lastLoginIp = '<span lang-id="common_unknown">' + publicLang['common_unknown'] + '</span>';
$('#home_last_login_ip').html(lastLoginIp);
} else {
var templateDate = {
lastLoginIpaddr: lastLoginIp
}
lastLoginIp = '<span>{{lastLoginIpaddr}}</span>';
$('#home_last_login_ip').secureHtml(lastLoginIp, templateDate);
}
var historyTime = lastLoginTime;
if (!historyTime) {
historyTime = '<span lang-id="common_unknown">' + publicLang['common_unknown'] + '</span>';
$('#home_last_login_time').html(historyTime);
} else {
var templateDate = {
lastLoginTime: lastLoginTime
}
historyTime = '<span>{{lastLoginTime}}</span>';
$('#home_last_login_time').secureHtml(historyTime, templateDate);
}
var lastState = lastLoginState;
var lastStateVal = 'common_abnormal';
if (lastState === '0') {
lastStateVal = 'common_normal';
}
if (lastState === '1') {
lastStateVal = '';
}
if (lastStateVal === '') {
lastStateVal = 'common_unknown';
}
$('#home_last_login_status').html('<span lang-id="' + lastStateVal + '">' + publicLang[lastStateVal] + '</span>');
$('#home_history_login_info').show();
}
EMUI.homewaninfoStatus = EMUI.ObjController.extend({
objName: 'ntwk/dualwaninfo',
});
function homeDualNetworkDualPassoneIndex() {
$("#home_dual_wan").css({
"margin-top": "-50px"
});
$("#home_wan_connected_status,#home_wan_disconnected_status").css({
"margin-top": "-130px"
});
$("#home_dual_device").css({
"margin-top": "25px"
});
$("#home_dual_wifi").css({
"margin-top": "-60px"
});
$("#home_dual_internet").show();
$("#home_dual_internet").find("div.pull-left:gt(1)").hide();
}
function homeDualNetworkDualPassIndex() {
$("#home_dual_wan").css({
"margin-top": "-50px"
});
$("#home_wan_connected_status,#home_wan_disconnected_status,#home_dual_wifi").css({
"margin-top": "-130px"
});
$("#home_dual_device").css({
"margin-top": "-40px"
});
$("#home_dual_internet").show();
$("#home_dual_internet").find("div.pull-left:gt(1)").show();
}
function homeDualNetworkDualPassIndexHide() {
$("#home_dual_wan").css({
"margin-top": "40px"
});
$("#home_wan_connected_status,#home_wan_disconnected_status,#home_dual_wifi").css({
"margin-top": "0px"
});
$("#home_dual_device").css({
"margin-top": "40px"
});
$("#home_traffic_overflow").css({
"margin-top": "72px"
});
$("#home_dual_internet").hide();
if(EMUI.homePinStatusController.isNoSimCard){
$("#home_dual_wan,#home_wan_connect_info,#home_dual_wifi,#home_dual_device").show();
if (LANGUAGE_DATA.current_language === 'ar_sa' || LANGUAGE_DATA.current_language === 'he_il' || LANGUAGE_DATA.current_language === 'fa_fa') {
$("#battery_device_block").parent("a").parent("div").css({
"margin-right": "0"
});
} else {
$("#battery_device_block").parent("a").parent("div").css({
"margin-left": "0"
});
}
}
}
function homeDualNetworkDualEth() {
$("#home_dual_wan,#home_wan_connect_info,#home_dual_wifi,#home_dual_device").hide();
if (LANGUAGE_DATA.current_language === 'ar_sa' || LANGUAGE_DATA.current_language === 'he_il' || LANGUAGE_DATA.current_language === 'fa_fa') {
$("#battery_device_block").parent("a").parent("div").css({ "margin-right": "355px" });
} else {
$("#battery_device_block").parent("a").parent("div").css({ "margin-left": "355px" });
}
$("#home_dual_internet").show();
$("#home_dual_internet").find("div.margin-left-78").show();
$("#home_dual_internet").find("div.home_desktop").parent("div").show();
$("#home_dual_internet").css({ "height": "200px" });
$("#home_dual_internet").find("div.pull-left:lt(1)").css({ "margin-top": "-10px" });
$("#home_dual_internet").find("div.home_desktop").parent("div").css({ "margin-top": "-10px" });
}
function homeDualNetworkDualUtms() {
$("#home_dual_internet").hide();
$("#home_dual_wan,#home_wan_connect_info,#home_dual_wifi,#home_dual_device").show();
$("#home_dual_wan").css({
"margin-top": "40px"
});
$("#home_wan_connected_status,#home_wan_disconnected_status,#home_dual_wifi").css({
"margin-top": "0px"
});
$("#home_dual_device").css({
"margin-top": "40px"
});
if (LANGUAGE_DATA.current_language === 'ar_sa' || LANGUAGE_DATA.current_language === 'he_il' || LANGUAGE_DATA.current_language === 'fa_fa') {
$("#battery_device_block").parent("a").parent("div").css({
"margin-right": "0"
});
} else {
$("#battery_device_block").parent("a").parent("div").css({
"margin-left": "0"
});
}
}
EMUI.homeUpAndData = EMUI.ObjController.extend({
objName: 'staticroute/wanpath',
getsuccessProc: function (data) {
if (data['type'] === 'response') {
var responseData = data['response']['wanpaths']['wanpath'];
ethaccessRes = [];
umtsaccessRes = [];
for (var i = 0; i < responseData.length; i++) {
if (responseData[i].AccessType === 'ethernet' || responseData[i].AccessType === 'dsl') {
ethaccessRes.push(responseData[i].WanPathStatusV4);
ethaccessRes.push(responseData[i].WanPathStatusV6);
} else {
umtsaccessRes.push(responseData[i].WanPathStatusV4);
umtsaccessRes.push(responseData[i].WanPathStatusV6);
}
}
if (ethaccessRes.indexOf("connected") !== -1) {
EMUI.homeUpAndDataWidth.load();
$("#home_inter_ok_hide").show();
$("#home_inter_error_hide").hide();
if (GLOBAL.modules.dualwan_enable && GLOBAL.modules.dualwan_enable === '1') {
if(GLOBAL.modules.hide_eth_wan_rate && GLOBAL.modules.hide_eth_wan_rate === '1'){
$('#home_inter_ok_hide #wan_connect_rate').hide();
$('#wan_connect_ok').show();
}
}
} else {
if (EMUI.homeCradelController.cradlestatus === '0') {
$('#home_etherror').attr('lang-id', 'IDS_ethernet_settings_disconnected');
langStr('home_etherror', 'IDS_ethernet_settings_disconnected');
}
if (EMUI.homeCradelController.connectstatus === '900') {
$('#home_etherror').attr('lang-id', 'onekey_on_connect');
langStr('home_etherror', 'onekey_on_connect');
}
if (EMUI.homeCradelController.connectstatus !== '900' && EMUI.homeCradelController.connectstatus !== '901') {
EMUI.LanguageController.registerLanguageEx(
'home_etherror',
'Network_connection_failed', '%s',
'menu.onekey');
EMUI.LanguageController.transLangEx();
}
$("#home_inter_ok_hide").hide();
$("#home_inter_error_hide").show();
}
}
}
});
EMUI.homeUpAndDataWidth = EMUI.ObjController.extend({
objName: 'ntwk/ethwanrate',
getsuccessProc: function (data) {
if (data['type'] === 'response') {
var responseData = data['response']['wanrates']['wanrate'];
var up = responseData.realupbandwidth;
var down = responseData.realdownbandwidth;
var inter_upRate = 0;
var inter_downRate = 0;
if (typeof up !== 'undefined') {
inter_upRate = up;
}
if (typeof down !== 'undefined') {
inter_downRate = down;
}
inter_upRate = parseInt(up, 10) * 8;
inter_downRate = parseInt(down, 10) * 8;
var gRate = 1024 * 1024 * 1024;
var mRate = 1024 * 1024;
var kRate = 1024;
if (inter_upRate >= gRate) {
inter_upRate = (inter_upRate / gRate).toFixed(1) + 'Gbps';
} else if (inter_upRate >= mRate) {
inter_upRate = (inter_upRate / mRate).toFixed(1) + 'Mbps';
} else if (inter_upRate >= kRate) {
inter_upRate = (inter_upRate / kRate).toFixed(1) + 'Kbps';
} else {
inter_upRate += 'bps';
}
if (inter_downRate >= gRate) {
inter_downRate = (inter_downRate / gRate).toFixed(1) + 'Gbps';
} else if (inter_downRate >= mRate) {
inter_downRate = (inter_downRate / mRate).toFixed(1) + 'Mbps';
} else if (inter_downRate >= kRate) {
inter_downRate = (inter_downRate / kRate).toFixed(1) + 'Kbps';
} else {
inter_downRate += 'bps';
}
$("#home_up_inter_rate").text(inter_upRate);
$("#home_down_inter_rate").text(inter_downRate);
}
}
});
function ethStyle() {
var langjpja = $("#home_wan_disconnected_status").find("div#home_error_info").children().attr("lang-id");
var ua = navigator.userAgent.toLowerCase();
var isIE = ua.indexOf("msie") > -1;
var safariVersion;
if (isIE) {
safariVersion = ua.match(/msie ([\d.]+)/)[1];
}
$("#home_dual_internet").css({
"margin-top": "-120px"
});
$("#home_inter_error_hide").css({
"margin": "-60px auto 0px",
"height": "151px"
});
$("#home_dual_internet .margin-left-78").css({
"margin-top": "-60px"
});
if (LANGUAGE_DATA.current_language === 'tr_tr' || LANGUAGE_DATA.current_language === 'et_ee' || LANGUAGE_DATA.current_language === 'es_es' || LANGUAGE_DATA.current_language === 'es_ar' || LANGUAGE_DATA.current_language === 'el_gr' || LANGUAGE_DATA.current_language === 'da_dk' || LANGUAGE_DATA.current_language === 'bg_bg' || LANGUAGE_DATA.current_language === 'en_us' || LANGUAGE_DATA.current_language === 'sl_sl' || LANGUAGE_DATA.current_language === 'vi_vn' || LANGUAGE_DATA.current_language === 'id_id' || LANGUAGE_DATA.current_language === 'de_de' || LANGUAGE_DATA.current_language === 'nl_nl' || LANGUAGE_DATA.current_language === 'no_no' || LANGUAGE_DATA.current_language === 'pl_pl' || LANGUAGE_DATA.current_language === 'pt_pt' || LANGUAGE_DATA.current_language === 'ru_ru') {
$("#home_dual_internet .margin-left-78").css({
"margin-top": "-55px"
});
}
if (LANGUAGE_DATA.current_language === 'ar_sa' || LANGUAGE_DATA.current_language === 'pt_pt') {
$("#home_dual_internet").css({
"margin-top": "-133px"
});
}
if (LANGUAGE_DATA.current_language === 'mt_mt' || LANGUAGE_DATA.current_language === 'hu_hu' || LANGUAGE_DATA.current_language === 'lv_lv' || LANGUAGE_DATA.current_language === 'mk_mk' || LANGUAGE_DATA.current_language === 'uk_ua' || LANGUAGE_DATA.current_language === 'cs_cz' || LANGUAGE_DATA.current_language === 'hr_hr' || LANGUAGE_DATA.current_language === 'sk_sk' || LANGUAGE_DATA.current_language === 'ro_ro') {
$("#home_dual_internet").css({
"margin-top": "-133px"
});
$("#home_inter_error_hide").css({
"margin": "-82px auto 0px"
});
}
if (LANGUAGE_DATA.current_language === 'lt_lt') {
$("#home_dual_internet").css({
"margin-top": "-110px"
});
$("#home_inter_error_hide").css({
"margin": "-82px auto 0px"
});
}
if (LANGUAGE_DATA.current_language === 'fr_fr') {
$("#home_inter_error_hide").css({
"margin": "-80px auto 0px"
});
}
if (LANGUAGE_DATA.current_language === 'fi_fi') {
$("#home_inter_error_hide").css({
"margin": "-70px auto 0px"
});
$("#home_dual_internet .margin-left-78").css({
"margin-top": "-33px"
});
}
if (LANGUAGE_DATA.current_language === 'sl_sl') {
$("#home_inter_error_hide").css({
"margin": "-92px auto 0px"
});
}
if (LANGUAGE_DATA.current_language === 'it_it' || LANGUAGE_DATA.current_language === 'pt_br' || LANGUAGE_DATA.current_language === 'sq_al') {
$("#home_dual_internet").css({
"margin-top": "-133px"
});
$("#home_inter_error_hide").css({
"margin": "-68px auto 0px"
});
}
if (LANGUAGE_DATA.current_language === 'es_ar' || LANGUAGE_DATA.current_language === 'sr_cs' || LANGUAGE_DATA.current_language === 'da_dk' || LANGUAGE_DATA.current_language === 'bg_bg' || LANGUAGE_DATA.current_language === 'pl_pl') {
$("#home_inter_error_hide").css({
"margin": "-78px auto 0px"
});
}
if (LANGUAGE_DATA.current_language === 'el_gr' || LANGUAGE_DATA.current_language === 'vi_vn') {
$("#home_dual_internet").css({
"margin-top": "-150px",
"height": "160px"
});
}
if (safariVersion <= 10.0) {
if (LANGUAGE_DATA.current_language === 'ja_jp') {
if (langjpja === "IDS_label_roaming_auto_connection_forbid") {
$("#home_inter_error_hide").css({
"margin": "-70px auto 0px"
});
$("#home_dual_internet .margin-left-78").css({
"margin-top": "-45px"
});
} else {
$("#home_inter_error_hide").css({
"margin": "-80px auto 0px"
});
}
}
} else {
if (LANGUAGE_DATA.current_language === 'ja_jp') {
$("#home_inter_error_hide").css({
"margin": "-80px auto 0px"
});
$("#home_dual_internet .margin-left-78").css({
"margin-top": "-45px"
});
if (langjpja === "IDS_label_roaming_auto_connection_forbid") {
$("#home_dual_internet").css({
"margin-top": "-90px"
});
$("#home_dual_internet .margin-left-78").css({
"margin-top": "-50px"
});
} else {
$("#home_dual_internet").css({
"margin-top": "-120px"
});
}
}
}
}
function init() {
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
$("#home_dual_device").css("pointer-events","none");
if (window.navigator.userAgent.indexOf("MSIE") >= 1 || (!!window.ActiveXObject || "ActiveXObject" in window)) {
$("#rightpagearea,#home_status").hide();
$("#home_status").css("margin-top", "420px");
}
$("#home_device_active_count").text("1");
$("#home_device_active_count").parent("a").attr("href", "#home");
$("#home_dual_device>div.pointer").removeClass("home_desktop").addClass("home_desktophilink");
$("#no_battery_device_block").removeClass("home_router").addClass("home_routerhilink");
if (LANGUAGE_DATA.current_language === 'ar_sa' || LANGUAGE_DATA.current_language === 'he_il' || LANGUAGE_DATA.current_language === 'fa_fa') {
$("#home_device_active_count").css("margin-right", "15px");
} else {
$("#home_device_active_count").css("margin-left", "15px");
}
if (EMUI.loginallowedObjController.content.response.hilink_login === '0') {
$("#home_history_login_info_margin_div,#home_history_login_info").hide();
} else {
$("#home_history_login_info_margin_div,#home_history_login_info").show();
}
}
if (EMUI.BasicInfoObjController.content.response.classify === 'wingle') {
$("#no_battery_device_block").removeClass("home_router").addClass("home_routerwingle");
}
if (firstdEvents) {
if (navigator.userAgent.indexOf("Firefox") > 0) {
$("#rightpagearea").hide();
}
firstdEvents = false;
}
EMUI.homeDataSwitchController.load(null, false);
EMUI.homeDeviceFeatureSwitch.load(null, false);
EMUI.homePinStatusController.load();
if (EMUI.globalStatusController.content && EMUI.globalStatusController.content.response) {
EMUI.homeStatusDetectController.wifistatus = EMUI.globalStatusController.content.response.WifiStatus;
EMUI.homeStatusDetectController.wififrequence = EMUI.globalStatusController.content.response.wififrequence;
} else {
EMUI.homeStatusDetectController.load(function (result) {
if (result.type === 'response') {
EMUI.homeStatusDetectController.wifistatus = result.response.WifiStatus;
EMUI.homeStatusDetectController.wififrequence = result.response.wififrequence;
}
}, false);
}
EMUI.homeConnectController.load(function (result) {
if (result.type === 'response') {
EMUI.homeConnectController.conectionconfig.ConnectMode = result.response.ConnectMode;
}
}, false);
if ((EMUI.homeStatusDetectController.currentnetworktype === '0') && (EMUI.homeConnectController.conectionconfig.ConnectMode === '1')) {
$('#home_connect_btn').addClass('btn_disabled');
}
EMUI.homeWlanSwitchControler.load();
ethernetInterval = setInterval(function () {
ethStyle();
}, 100);
EMUI.homeSetDialContinueController.load();
if (GLOBAL.modules.statistic_enabled === '1' && EMUI.pubMonthStatisticsController.globalTraffic['SetDayData'] === '1') {
EMUI.homeSetDailyDialContinueController.load();
}
clonePcTime();
getNetTypes();
homeStatus();
homeInterval = setInterval(homeStatus, 6000);
homeSetload = setInterval(function () {
refreshNetStatus();
}, 6000);
if (navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.toLowerCase().toString().indexOf('qqbrowser') > -1) {
$("#home_wan_disconnected_status").find("div#home_connect_failed_type").parent("td").css({
"height": "22px"
});
}
if (GLOBAL.modules.sdcard_enabled === '1') {
$('#home_sd_link_info').css('display', 'inline-block');
$('#home_sd_link_info_margin_div').css('display', 'inline-block');
}
if (EMUI.LoginStateController.historyLoginEnable === '0') {
if (EMUI.LoginStateController.loginState === '0') {
getHistoryLoginTime();
}
}
if (typeof GLOBAL.homedeviceinfo !== 'undefined' && GLOBAL.homedeviceinfo.onoff === '1') {
EMUI.homeDevicePowerOnTimeController.load();
if (GLOBAL.modules.sdcard_enabled === '1') {
$('.home_status_control_margin').addClass('home_status_margin_13');
$('#home_sd_link_info').addClass('home_sd_link_info_max_width');
} else {
$('.home_status_control_margin').addClass('home_status_margin_30');
$('#home_history_login_info_title').removeClass('home_status_max_width');
}
} else {
if (GLOBAL.modules.sdcard_enabled === '1') {
$('.home_status_control_margin').addClass('home_status_margin_30');
$('#home_history_login_info_title').removeClass('home_status_max_width');
} else {
$('.home_status_control_margin').addClass('home_status_margin_60');
$('#home_history_login_info_title').removeClass('home_status_max_width');
}
}
$('#home_status').show();
$('#page_split_area').hide();
resizeHomeWindow();
if (window.addEventListener) {
window.addEventListener('resize', resizeHomeWindow, false);
} else {
window.attachEvent('resize', resizeHomeWindow);
}
if (isMobilewifi && GLOBAL.config.battery_enabled === '1') {
$('#home_battery_status').show();
}
if (GLOBAL.config.home_hotlinks) {
homeLinkItems = GLOBAL.config.home_hotlinks.items;
homeLinkEnable = GLOBAL.config.home_hotlinks.enable;
if ((homeLinkEnable && homeLinkEnable === '1') && (homeLinkItems && homeLinkItems.item)) {
homeLinkItemArr = handleHotlinkData(homeLinkItems);
creatHotlinkDom(homeLinkItemArr,'home_hotlink_content');
setHotlinkClick(homeLinkItemArr,'home_hotlink_content');
$('#home_hotlink_container').show();
} else {
$('#home_hotlink_container').hide();
}
}
if (!$('#home_page').hasClass('registerFunction')) {
$('#home_page').addClass('registerFunction');
}
if (GLOBAL.hasTwoAccountFlag && GLOBAL.isSecondaryAccount) {
$('#secound_account_hide').hide();
$('#home_history_login_info_margin_div').remove();
$('#home_history_login_info').addClass('pull-left');
$('#home_history_login_info').css({ 'margin-left': '60px' });
}
if (GLOBAL.modules.nrProductEnable === '1' && GLOBAL.modules.locationNominateEnable === '1') {
$('#home_location_btn_father').show();
} else {
$('#home_location_btn_father').hide();
}
if (GLOBAL.modules.externalProductFlag === '1') {
$('#home_location_btn_father').show();
$('#home_location_btn').attr('lang-id', 'outdoor_cpe_button');
$('#home_location_btn').text(publicLang['outdoor_cpe_button']);
}
$('#page_footer').css({
'position': '',
'left': '',
'bottom': ''
})
}
function resizeHomeWindow() {
var winheight = $(window).height();
var staticHeigh = 754;
if (userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) ||
userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i)) {
$('#home_status').css('height', 'auto');
} else {
if (winheight > 899) {
$('#home_status').css('height', (winheight - staticHeigh) + 'px');
} else {
$('#home_status').css('height', '171px');
}
}
}
function destory() {
clearInterval(homeSetload);
clearInterval(homeInterval);
clearInterval(ethernetInterval);
$('#home_status').hide();
$('#page_split_area').show();
clearTimeout(EMUI.homeStatusDetectController.timeoutInterval);
EMUI.homeStatusDetectController.timeoutInterval = null;
$('#5g_reject_tips_toast').hide()
}
﻿
return { init: init, destory: destory };
}());
window.homeRenderPage = function () {
homeObj.init();
setTimeout(function () {
$("#rightpagearea").show();
$("#home_status").css("margin-top", "0");
}, 1);
};
window.homeDestruction = function () {
homeObj.destory();
};
