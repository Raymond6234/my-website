(function () {
var method;
var noopFun = function () {
};
var methods = [
'assert',
'clear',
'count',
'debug',
'dir',
'dirxml',
'error',
'exception',
'group',
'groupCollapsed',
'groupEnd',
'info',
'log',
'markTimeline',
'profile',
'profileEnd',
'table',
'time',
'timeEnd',
'timeStamp',
'trace',
'warn'
];
var methodLength = methods.length;
var console = (window.console = window.console || {});
while (methodLength--) {
method = methods[methodLength];
if (!console[method]) {
console[method] = noopFun;
}
}
if (!Array.prototype.forEach) {
Array.prototype.forEach = function (fun) {
var len = this.length;
if (typeof fun !== 'function') {
throw new TypeError();
}
var thisp = arguments[1];
for (var i = 0; i < len; i++) {
if (i in this) {
fun.call(thisp, this[i], i, this);
}
}
};
}
if (!Array.prototype.every) {
Array.prototype.every = function (callback) {
var len = this.length;
if (typeof callback != "function") {
throw new TypeError();
}
var thisArg = arguments[1];
for (var i = 0; i < len; i++) {
if (i in this && !callback.call(thisArg, this[i], i, this)) {
return false;
}
}
return true;
}
}
}());
var userAgent = navigator.userAgent.toLowerCase();
if (/msie/.test(userAgent) && parseInt(navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)[1]) < 9) {
var xmlHttp = null;
var resData = null;
var langRes = 'Browser version is too low';
var url = '/api/monitoring/converged-status';
if (window.XMLHttpRequest) {
xmlHttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
}
xmlHttp.open('GET', url, false);
xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
xmlHttp.send();
resData = xmlHttp.responseText;
if (typeof resData === 'string' && resData.indexOf('</CurrentLanguage>') >= 0) {
resData = resData.replace(/\n/g, '');
var curlang = ((resData.split('<CurrentLanguage>')[1]).split('</CurrentLanguage>')[0]).replace('-', '_');
var langUrl = '/language/lang_' + curlang + '.js?r=' + Math.random();
xmlHttp.open('GET', langUrl, false);
xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
xmlHttp.send();
resData = xmlHttp.responseText;
if (typeof resData === 'string' && resData.indexOf("'nosupport_IE8'") >= 0) {
langRes = ((resData.split("'nosupport_IE8'")[1]).split('\n')[0]).replace(": '", "").replace("',", "");
}
}
alert(langRes);
}
var MACRO_NET_SINGLE_MODE = 1;
var MACRO_NET_DUAL_MODE = 2;
var MACRO_NET_MODE_CHANGE = 1;
var MACRO_NET_MODE_RESET = 0;
var MACRO_NET_MODE_C = 1;
var MACRO_NET_MODE_W = 2;
var MACRO_NET_WORK_TYPE_GSM = '1';
var MACRO_MIN_PORT_RANGE = 1;
var MACRO_MAX_PORT_RANGE = 65535;
var MACRO_NOT_SUPPORT_CHAR_COMMA = 44;
var MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK = 34;
var MACRO_NOT_SUPPORT_CHAR_COLON = 58;
var MACRO_NOT_SUPPORT_CHAR_SEMICOLON = 59;
var MACRO_NOT_SUPPORT_BACKSLASH_MARK = 92;
var MACRO_NOT_SUPPORT_CHAR_38 = 38;
var MACRO_NOT_SUPPORT_CHAR_37 = 37;
var MACRO_NOT_SUPPORT_CHAR_43 = 43;
var MACRO_NOT_SUPPORT_CHAR_39 = 39;
var MACRO_NOT_SUPPORT_CHAR_60 = 60;
var MACRO_NOT_SUPPORT_CHAR_62 = 62;
var MACRO_NOT_SUPPORT_CHAR_63 = 63;
var MACRO_NET_WORK_TYPE_GPRS = '2';
var MACRO_NET_WORK_TYPE_EDGE = '3';
var MACRO_NET_WORK_TYPE_WCDMA = '4';
var MACRO_NET_WORK_TYPE_HSDPA = '5';
var MACRO_NET_WORK_TYPE_HSUPA = '6';
var MACRO_NET_WORK_TYPE_HSPA = '7';
var MACRO_NET_WORK_TYPE_TDSCDMA = '8';
var MACRO_NET_WORK_TYPE_HSPA_PLUS = '9';
var MACRO_NET_WORK_TYPE_EVDO_REV_0 = '10';
var MACRO_NET_WORK_TYPE_EVDO_REV_A = '11';
var MACRO_NET_WORK_TYPE_EVDO_REV_B = '12';
var MACRO_NET_WORK_TYPE_1XRTT = '13';
var MACRO_NET_WORK_TYPE_UMB = '14';
var MACRO_NET_WORK_TYPE_1XEVDV = '15';
var MACRO_NET_WORK_TYPE_3XRTT = '16';
var MACRO_NET_WORK_TYPE_HSPA_PLUS_64QAM = '17';
var MACRO_NET_WORK_TYPE_HSPA_PLUS_MIMO = '18';
var MACRO_NET_WORK_TYPE_LTE = '19';
var MACRO_NET_WORK_TYPE_LTE_NR = '20';
var MACRO_NET_WORK_TYPE_EX_NOSERVICE = '0';
var MACRO_NET_WORK_TYPE_EX_GSM = '1';
var MACRO_NET_WORK_TYPE_EX_GPRS = '2';
var MACRO_NET_WORK_TYPE_EX_EDGE = '3';
var MACRO_NET_WORK_TYPE_EX_IS95A = '21';
var MACRO_NET_WORK_TYPE_EX_IS95B = '22';
var MACRO_NET_WORK_TYPE_EX_CDMA_1X = '23';
var MACRO_NET_WORK_TYPE_EX_EVDO_REV_0 = '24';
var MACRO_NET_WORK_TYPE_EX_EVDO_REV_A = '25';
var MACRO_NET_WORK_TYPE_EX_EVDO_REV_B = '26';
var MACRO_NET_WORK_TYPE_EX_HYBRID_CDMA_1X = '27';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_0 = '28';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_A = '29';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_B = '30';
var MACRO_NET_WORK_TYPE_EX_EHRPD_REL_0 = '31';
var MACRO_NET_WORK_TYPE_EX_EHRPD_REL_A = '32';
var MACRO_NET_WORK_TYPE_EX_EHRPD_REL_B = '33';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_0 = '34';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_A = '35';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_B = '36';
var MACRO_NET_WORK_TYPE_EX_WCDMA = '41';
var MACRO_NET_WORK_TYPE_EX_HSDPA = '42';
var MACRO_NET_WORK_TYPE_EX_HSUPA = '43';
var MACRO_NET_WORK_TYPE_EX_HSPA = '44';
var MACRO_NET_WORK_TYPE_EX_HSPA_PLUS = '45';
var MACRO_NET_WORK_TYPE_EX_DC_HSPA_PLUS = '46';
var MACRO_NET_WORK_TYPE_EX_TD_SCDMA = '61';
var MACRO_NET_WORK_TYPE_EX_TD_HSDPA = '62';
var MACRO_NET_WORK_TYPE_EX_TD_HSUPA = '63';
var MACRO_NET_WORK_TYPE_EX_TD_HSPA = '64';
var MACRO_NET_WORK_TYPE_EX_TD_HSPA_PLUS = '65';
var MACRO_NET_WORK_TYPE_EX_802_16E = '81';
var MACRO_NET_WORK_TYPE_EX_LTE = '101';
var MACRO_NET_WORK_TYPE_EX_LTE_PLUS = '1011';
var MACRO_NET_WORK_TYPE_EX_NR = '111';
var notSame2gWifiPwd = false;
var notSame5gWifiPwd = false;
var notSameSingleWifiPwd = false;
var notSameSecWifiPwd = false;
var HOTLINK_MAX_NUMBER = 5;
var footLinkEnable = '';
var footLinkItems = null;
var footLinkItemArr = [];
var hotlinkTxtIndex = 0;
var hotlinkPicIndex = 0;
var hotlinkLang = '';
var hotlinkDom = '';
var LANGUAGE_DATA = {
current_language: 'en_us',
supportted_languages: '',
safe_question_url_cpe: {},
safe_question_url_e5: {},
usermanual_language_list: {}
};
$.fn.secureAppend = function (template, data) {
this.append(handleTemplate(template, data));
};
$.fn.securePrepend = function (template, data) {
this.prepend(handleTemplate(template, data));
};
$.fn.secureBefore = function (template, data) {
this.before(handleTemplate(template, data));
};
$.fn.secureAfter = function (template, data) {
this.after(handleTemplate(template, data));
};
$.fn.secureHtml = function (template, data) {
this.html(handleTemplate(template, data));
};
$.fn.val = function (data) {
if (data || data === '') {
var objArr = $.makeArray(this);
if (objArr) {
$.each(objArr, function (i) {
if (objArr[i]) {
objArr[i].value = data;
}
});
}
return this;
} else {
if (this.hasClass('select_on_normal') || this.hasClass('select_on_spanner') || this.hasClass('statistic_select_statistics')) {
if (this.attr('type') === 'text' && this.get(0)) {
return this.get(0).value;
}
return this.attr('value');
} else {
if (this.get(0)) {
if (typeof this.get(0).value === 'undefined') {
return this.attr('value');
}
return this.get(0).value;
}
if (this.attr('value')) {
return this.attr('value');
}
}
}
};
$.fn.size = function (data) {
return this.length;
};
$.fn.ajaxSubmit = function (option) {
var options = $.extend(true, {
url: this.attr('action'),
success: $.ajaxSettings.success,
type: 'post',
iframeSrc: 'about:blank'
}, option);
var data = [];
$.each(this.find('[name]'), function (i, el) {
if (el.files && el.type === 'file') {
var files = el.files;
if (files.length) {
for (j = 0; j < files.length; j++) {
data.push({ name: el.name, value: files[j], type: el.type });
}
} else {
data.push({ name: el.name, value: '', type: el.type });
}
} else {
data.push({ name: el.name, value: $(el).val(), type: el.type });
}
})
var formdata = new FormData();
for (var i = 0; i < data.length; i++) {
formdata.append(data[i].name, data[i].value);
}
var s = $.extend(true, {}, $.ajaxSettings, options, {
contentType: false,
processData: false,
cache: false,
type: 'post'
});
s.data = null;
s.beforeSend = function (xhr, o) {
if (options.formData) {
o.data = options.formData;
} else {
o.data = formdata;
}
};
$.ajax(s);
};
var PRIVACY_URL = {
'zh_cn': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=CN&language=zh-CN',
'id_id': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=ID&language=id-ID',
'ja_jp': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=JP&language=ja-JP',
'ko_kr': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=KR&language=ko-KR',
'vi_vn': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=VN&language=vi-VN',
'zh_hk': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?code=HK&language=zh-HK',
'zh_tw': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?code=TW&language=zh-TW',
'bg_bg': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=BG&language=bg-BG',
'da_dk': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=DK&language=da-DK',
'de_de': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=DE&language=de-DE',
'el_gr': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=GR&language=el-GR',
'en_us': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=US&language=en-US',
'es_ar': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=AR&language=es-AR',
'es_es': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=ES&language=es-ES',
'et_ee': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=EE&language=et-EE',
'fi_fi': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=FI&language=fi-FI',
'hu_hu': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=HU&language=hu-HU',
'it_it': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=IT&language=it-IT',
'nl_nl': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=NL&language=nl-NL',
'no_no': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=NO&language=nb-NO',
'pt_br': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=BR&language=pt-BR',
'pt_pt': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=PT&language=pt-PT',
'sq_al': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=AL&language=sq-AL',
'sv_se': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=SE&language=sv-SE',
'tr_tr': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=TR&language=tr-TR',
'fa_fa': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=IR&language=fa-IR',
'fr_fr': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=FR&language=fr-FR',
'mk_mk': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=MK&language=mk-MK',
'hr_hr': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=HR&language=hr-HR',
'sr_cs': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=RS&language=sr-Latn-RS',
'lv_lv': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=LV&language=lv-LV',
'ro_ro': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=RO&language=ro-RO',
'lt_lt': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=LT&language=lt-LT',
'pl_pl': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=PL&language=pl-PL',
'ru_ru': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=RU&language=ru-RU',
'uk_ua': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=UA&language=uk-UA',
'cs_cz': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=CZ&language=cs-CZ',
'sk_sk': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=SK&language=sk-SK',
'he_il': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=IL&language=he-IL',
'mt_mt': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=MT&language=en-MT',
'sl_sl': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=SI&language=sl-SI',
'ar_sa': 'https://consumer.huawei.com/minisite/legal/privacy/statement.htm?country=SA&language=ar-SA'
}
var myAccountStatus = {};
var device_differentiation = '';
function showSelectLang() {
$('#language_select_list').toggle();
}
function IsPC() {
var userAgentInfo = navigator.userAgent;
var flag = true;
if (userAgentInfo.match(/Android/i) || userAgentInfo.match(/webOS/i) || userAgentInfo.match(/iPhone/i) || userAgentInfo.match(/iPad/i) ||
userAgentInfo.match(/iPod/i) || userAgentInfo.match(/BlackBerry/i) || userAgentInfo.match(/Windows Phone/i)) {
flag = false;
}
return flag;
}
function handleWlanEnabled(page) {
var pageContentId = page + '_all_content';
var wifiOffloadPageContentId = page + '_display';
var wanpromptId = 'wlan_' + page + '_enabled';
var wanDisconnectionPromptId = 'wlan_' + page + '_disconnection_enabled';
var gmonitorstatus = null;
var gLinkTurboSwitch = null;
getAjaxData('api/wlan/link-turbo-settings', getLinkTurboSwitch, {
sync: true
});
if (gLinkTurboSwitch && gLinkTurboSwitch.linkTurboMode === "2") {
getAjaxData('api/monitoring/status', getMonitorStatus, {
sync: true
});
};
function getLinkTurboSwitch(ret) {
if (ret.type === 'response') {
gLinkTurboSwitch = ret.response;
}
};
function getMonitorStatus(ret) {
if (ret.type === 'response') {
gmonitorstatus = ret.response;
}
};
function wanRelatedPageDisplay(page) {
$('#' + wanpromptId).hide();
if (page === "wifinetworkssetting") {
if ($('#wifinetworkssetting_page .pin_unuseable').css("display") === "block") {
return;
}
if ($('#wifinetworkssetting_unenabled_display').css("display") === "block") {
return;
}
$('#' + wanDisconnectionPromptId).hide();
$('#' + wifiOffloadPageContentId).show();
} else if (page === "wifinetworkswps") {
if ($('#wifinetworkswps_page .pin_unuseable').css("display") === "block") {
return;
}
if ($('#wifinetworkswps_page_unuseable_tip').css("display") === "block") {
return;
}
$('#' + wanDisconnectionPromptId).hide();
$('#' + wifiOffloadPageContentId).show();
} else if (page === "wifinetworksconnect") {
$('#' + wanDisconnectionPromptId).hide();
$('#wifinetworksconnect_enabled_display').show();
} else {
$('#' + pageContentId).show();
}
}
if (gLinkTurboSwitch && gLinkTurboSwitch.linkTurboMode === "2") {
if (page === "wifinetworkssetting" && gmonitorstatus.WifiConnectionStatus !== "901") {
$('#wifinetworkssetting_page .pin_unuseable').hide();
$("#wifinetworkssetting_unenabled_display").hide();
$('#' + wanpromptId).hide();
$('#' + wanDisconnectionPromptId).show();
$('#' + wifiOffloadPageContentId).hide();
} else if (page === "wifinetworkswps" && gmonitorstatus.WifiConnectionStatus !== "901") {
$('#wifinetworkswps_page .pin_unuseable').hide();
$('#wifinetworkswps_page_unuseable_tip').hide();
$('#' + wanpromptId).hide();
$('#' + wanDisconnectionPromptId).show();
$('#' + wifiOffloadPageContentId).hide();
} else if (page === "wifinetworksconnect" && gmonitorstatus.WifiConnectionStatus !== "901") {
$('#' + wanpromptId).hide();
$('#' + wanDisconnectionPromptId).show();
$('#wifinetworksconnect_enabled_display').hide();
} else if ((page === "wifinetworkssetting" || page === "wifinetworkswps") && gmonitorstatus.WifiConnectionStatus === "901") {
$('#' + wanDisconnectionPromptId).hide();
$('#' + wanpromptId).show();
$('#' + wifiOffloadPageContentId).hide();
} else if (page === "wifinetworksconnect" && gmonitorstatus.WifiConnectionStatus === "901") {
$('#' + wanDisconnectionPromptId).hide();
$('#' + wanpromptId).show();
$('#wifinetworksconnect_enabled_display').hide();
} else if (gmonitorstatus.WifiConnectionStatus === "901") {
$('#' + wanpromptId).show();
$('#' + pageContentId).hide();
} else {
wanRelatedPageDisplay(page);
}
} else {
wanRelatedPageDisplay(page);
}
}
function generateLanguageSelect() {
if (LANGUAGE_DATA.supportted_languages === '') {
setTimeout(generateLanguageSelect, 100);
return;
}
var langLength = 0;
if ((LANGUAGE_DATA.supportted_languages) instanceof Array) {
langLength = LANGUAGE_DATA.supportted_languages.length;
} else {
langLength = 1
}
var langHtml = '';
if (langLength > 1) {
$('#language_table').show();
$('#language_select_list').empty();
$('#language_select_list').html('<div style="margin-bottom:-1px;" class="lang_top_normal hide"></div><div id="language_select_list_content_bg" class="hide"></div><div id="language_select_list_content"></div><div style="margin-top:-1px;" class="lang_bottom_normal hide"></div>');
setLanguageListScroll();
if (langLength > 11) {
$('#language_select_list_content').css('height', '352px');
$('#language_select_list_content_bg').css('height', '352px');
} else {
$('#language_select_list_content_bg').css('height', (langLength * 31) + 'px');
}
$('#language_select_list_content_bg').css({ 'width': '220px', 'position': 'absolute', 'left': '6px', 'right': '6px', 'background-color': 'white', 'z-index': '-1' });
$('#language_select_list').css('width', '228px');
$('#language_select_list').css('margin-top', '25px');
var langList = LANGUAGE_DATA.supportted_languages;
var curlang = LANGUAGE_DATA.current_language;
for (var loop = 0; loop < langLength; loop++) {
var language = langList[loop];
var option = language.replace(/\-/g, '_');
var langTemplateData = {
loop: loop,
language: language,
option: option
};
var pushHtml = '';
if (option === curlang) {
pushHtml = '<div id="language_select_list_{{loop}}" option="{{language}}" style="margin-top:-1px;" class="lang_middle_selected hide" onclick="changeLanguage(this)">';
} else {
pushHtml = '<div id="language_select_list_{{loop}}" option="{{language}}" style="margin-top:-1px;" class="lang_middle_normal hide" onclick="changeLanguage(this)">';
}
pushHtml += '<span lang-id="{{option}}" class="public_lang_left" option="{{language}}" ></span></div>';
$('#language_select_list_content').find('.scroll_text').secureAppend(pushHtml, langTemplateData);
$('#language_select_list_' + loop).show();
$('.lang_top_normal,.lang_bottom_normal').show();
$('#language_select_list_content_bg').show();
}
} else {
$('#language_table').hide();
}
}
var submitinterval = 0;
function utilStartConfirmDialog(notice, confirmcallback, canclecallback, confirmstr, canclestr) {
$('#confirm_light').empty();
var canclestring = (typeof canclestr === 'undefined') ? publicLang['btn.cancel'] : canclestr;
var confirmsting = (typeof confirmstr === 'undefined') ? publicLang['btn.cofirm'] : confirmstr;
var confirmhtml = '<div class="common_win_top"></div>'
+ '<div align="center" class="margin_bottom_box2 color_Darkgray color_background_white" style="font-size:16px;width:508px;padding-top:50px;padding-bottom:8px;">'
+ '    <div id="confirm_notice" style="width:450px"></div>'
+ '    <div class="color_background_white" style="padding-top:40px;">'
+ '        <div class="clearboth"></div>'
+ '        <div align="center">'
+ '            <button id="confirm_cancel" class="btn_normal_short"></button>'
+ '            <button id="confirm_confirm" class="btn_normal_short margin-left-20"></button>'
+ '        </div>'
+ '    </div>'
+ '</div><div class="common_win_bottom"></div>';
$('#confirm_light').secureHtml(confirmhtml);
$('#confirm_notice').text(notice);
$('#confirm_cancel').text(canclestring);
$('#confirm_confirm').text(confirmsting);
$(document).off('click', '#confirm_cancel');
$(document).on('click', '#confirm_cancel', function () {
utilStopConfirmDialog();
if (canclecallback) {
canclecallback();
}
});
$(document).off('click', '#confirm_confirm');
$(document).on('click', '#confirm_confirm', function () {
utilStopConfirmDialog();
if (confirmcallback) {
confirmcallback();
}
});
$('#confirm_light').show();
$('#submit_fade').show();
var heightest = $(document).height();
submitinterval = setTimeout(function () {
$('#submit_fade').css('height', heightest + 'px');
}, 50);
}
function utilStopConfirmDialog() {
clearTimeout(submitinterval);
$('#confirm_light').hide();
$('#submit_fade').hide();
}
function utilStartSubmitDialog(noticeEX, btnId) {
var notice = publicLang['content.submitting'];
if (typeof noticeEX !== 'undefined') {
notice = noticeEX;
}
var templateData = {
notice: notice,
btnId: btnId
};
$('#submit_light').empty();
var submithtml;
submithtml = '<div class="common_win_top"></div><div align="center" class="margin_bottom_box2 color_Darkgray color_background_white" style="font-size:16px;width:508px;padding-top:40px;min-height:136px;">'
+ '<div style="height:60px;"><img src="../res/submiting.gif" /></div>'
+ '<div id="utilStartSubmitDialog_contentId" style="padding:16px 16px 0 16px;">{{notice}}</div>';
if (btnId) {
submithtml += '<button id="{{btnId}}" style="margin-top:60px;margin-bottom: 8px" class="btn_normal_short" lang-id="btn.cancel">' + publicLang['btn.cancel'] + '</button>';
}
submithtml += '</div><div class="common_win_bottom"></div>';
$('#submit_light').secureHtml(submithtml, templateData);
$('#submit_light').show();
$('#submit_fade').show();
var heightest = $(document).height();
submitinterval = setTimeout(function () {
$('#submit_fade').css('height', heightest + 'px');
}, 50);
}
function utilStopSubmitDialog() {
clearTimeout(submitinterval);
$('#submit_light').hide();
$('#submit_fade').hide();
}
function utilStartCommonDialog(noticeEX) {
$('#submit_light').empty();
var templateData = {
noticeEX: noticeEX
};
var submithtml = '<div class="common_win_top"></div><div align="center" class="margin_bottom_box2 color_Darkgray color_background_white" style="font-size:16px;width:508px;padding-top:40px;min-height:100px;">'
+ '<div style="padding-top:16px;">{{noticeEX}}</div>'
+ '</div><div class="common_win_bottom"></div>';
$('#submit_light').secureHtml(submithtml, templateData);
$('#submit_light').show();
$('#submit_fade').show();
var heightest = $(document).height();
submitinterval = setTimeout(function () {
$('#submit_fade').css('height', heightest + 'px');
}, 50);
}
function utilStopCommonDialog() {
utilStopSubmitDialog();
}
function utilShowToast(info, showTime) {
if (typeof info === 'undefined' || info === '') {
return;
}
if (typeof showTime === 'undefined' || showTime === '') {
var showTimes = 1000;
} else {
var showTimes = showTime;
}
$('#toast_info').text(info);
$('#toast_location').show();
setTimeout(function () {
var lang = LANGUAGE_DATA.current_language;
var toastwidth = $('#toast_location').width();
if (lang === 'ar_sa' || lang === 'he_il' || lang === 'fa_fa') {
$('#toast_location').css('margin-right', '-' + (toastwidth / 2) + 'px');
} else {
$('#toast_location').css('margin-left', '-' + (toastwidth / 2) + 'px');
}
}, 10);
setTimeout(function () {
$('#toast_location').hide();
}, showTimes);
}
var GLOBAL = {
HOME_PAGE_URL: 'content.html#home',
INDEX_PAGE_URL: 'index.html',
INDEX_NO_SIMREDIRECT_PAGE_URL: 'index.html?noredirect'
};
var AJAX = {
HEADER: '../',
TAIL: '',
TIMEOUT: 30000,
tokens: [],
cookieFlag: true
};
function guideHref(addSearch) {
var curHref = window.location.href;
var curSearch = window.location.search;
var isGuide = false;
var isGuideSmall = false;
var hasNoPhone = false;
if (!EMUI.webWebFeatureController.content) {
EMUI.webWebFeatureController.load(null, false);
}
var isSupportCaptive = GLOBAL.modules.captivePortalGuide === '1' ? true : false;
var resSearch = '';
if (curHref.indexOf('guidesmall') >= 0) {
isGuideSmall = true;
device_differentiation = '0';
} else if (curHref.indexOf('guide') >= 0) {
isGuide = true;
} else {
}
resSearch = (curSearch || '') + (addSearch || '');
if (!isSupportCaptive) {
if (!isGuide) {
return resSearch ? '../html/guide.html' + resSearch : '../html/guide.html';
}
return false;
}
if (curSearch.indexOf('noPhone') >= 0) {
hasNoPhone = true;
}
var userAgent = navigator.userAgent;
if (userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) ||
userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i)) {
if (isSupportCaptive && !isGuideSmall && !hasNoPhone) {
device_differentiation = '0';
return resSearch ? '../html/guidesmall.html' + resSearch : '../html/guidesmall.html';
}
} else {
if (isSupportCaptive && !isGuide) {
return resSearch ? '../html/guide.html' + resSearch : '../html/guide.html';
}
}
return false;
}
function gotoPageWithoutHistory(url) {
window.location.replace(url);
}
function _recursiveXml2Object($xml) {
if ($xml.children().size() > 0) {
var _obj = {};
$xml.children().each(function () {
var _childObj = ($(this).children().size() > 0) ? _recursiveXml2Object($(this)) : $(this).text();
if ($(this).siblings().size() > 0 && $(this).siblings().get(0).tagName === this.tagName) {
if (!_obj[this.tagName]) {
_obj[this.tagName] = [];
}
_obj[this.tagName].push(_childObj);
} else {
_obj[this.tagName] = _childObj;
}
});
return _obj;
}
return $xml.text();
}
var beforeselectid = '';
function SelectItem(obj) {
var normalselect = {
select_top: 'select_top',
select_medium: 'select_medium',
select_bottom: 'select_bottom',
select_medium_selected: 'select_medium_selected',
height: 40,
width: 328
};
var shortselect = {
select_top: 'spanner_top',
select_medium: 'spanner_medium',
select_bottom: 'spanner_bottom',
select_medium_selected: 'spanner_medium_selected',
height: 32,
width: 90
};
var SHOW_MAX_ITEM_COUNT = 5;
var selectid = $(obj).attr('id');
if ($('#' + selectid).hasClass('disabled')) {
return;
}
var selectitemsid = selectid + '_list';
if (beforeselectid !== selectitemsid) {
if (beforeselectid && beforeselectid !== '') {
$('#' + beforeselectid).hide();
}
beforeselectid = selectitemsid;
}
var classes = normalselect;
if ($('#' + selectitemsid + ' .' + shortselect.select_medium).length !== 0) {
classes = shortselect;
}
$('#' + selectitemsid + ' .' + classes.select_medium).removeClass(classes.select_medium_selected);
var selectitemsLength = $('#' + selectitemsid + ' .' + classes.select_medium).length;
if ($('#' + selectitemsid + ' .' + classes.select_top).length === 0) {
var showitemcount = selectitemsLength < SHOW_MAX_ITEM_COUNT ? selectitemsLength : SHOW_MAX_ITEM_COUNT;
var height = showitemcount * classes.height - 1;
var tophtml = '<div  class="' + classes.select_top + '" ></div>';
var bottomhtml = '<div  class="' + classes.select_bottom + '"></div>';
var items = $('#' + selectitemsid).html();
items = '<div id="' + selectitemsid + '_items" style="height: ' + height + 'px; width: ' + classes.width + 'px;" >' + items + '</div>';
$('#' + selectitemsid).secureHtml(tophtml + items + bottomhtml);
$('#' + selectitemsid + '_items :last-child').css('height', classes.height - 1 + 'px');
}
$('#' + selectitemsid).toggle();
if (selectitemsLength > SHOW_MAX_ITEM_COUNT) {
EMUI.Scroll.initScroll('#' + selectitemsid + '_items');
}
var container;
var content;
var contentHeight;
if (classes = normalselect) {
for (var i = 0; i < selectitemsLength; i++) {
container = $($('#' + selectitemsid + ' .' + classes.select_medium)[i]).find("div");
content = $($('#' + selectitemsid + ' .' + classes.select_medium)[i]).find("span");
if (content.length === 1) {
container = container[0];
content = content[0];
$(container).css('width', '285px');
$(content).css('font-size', '14px');
$($('#' + selectitemsid + ' .' + classes.select_medium)[i]).css('line-height', '40px');
contentHeight = $(content).innerHeight();
if (contentHeight > 39) {
$(content).css('font-size', '13px');
contentHeight = $(content).innerHeight();
}
if (contentHeight > 39) {
$(content).css('font-size', '12px');
contentHeight = $(content).innerHeight();
}
if (contentHeight > 39) {
$($('#' + selectitemsid + ' .' + classes.select_medium)[i]).css('line-height', '20px')
}
}
}
}
}
function xml2object($xml) {
var obj = {};
if ($xml.find('response').size() > 0) {
var _response = _recursiveXml2Object($xml.find('response'));
obj.type = 'response';
obj.response = _response;
} else if ($xml.find('error').size() > 0) {
var _code = $xml.find('code').text();
var _message = $xml.find('message').text();
obj.type = 'error';
obj.error = {
code: _code,
message: _message
};
} else if ($xml.find('config').size() > 0) {
var _config = _recursiveXml2Object($xml.find('config'));
obj.type = 'config';
obj.config = _config;
} else {
obj.type = 'unknown';
}
return obj;
}
function refreshToken() {
window.getAjaxData('api/webserver/token', function ($xml) {
var ret = xml2object($xml);
if (ret.type === 'response') {
AJAX.tokens.length = 0;
AJAX.tokens.push(ret.response.token.substr(32));
}
}, {
sync: true
});
}
function getAjaxToken() {
var meta = $('meta[name=csrf_token]');
if (meta.length > 0) {
AJAX.tokens = [];
for (var i = 0; i < meta.length; i++) {
AJAX.tokens.push(meta[i].content);
}
} else {
refreshToken();
}
}
window.getAjaxData = function (urlstr, callback, options) {
var myurl = AJAX.HEADER + urlstr + AJAX.TAIL;
var isAsync = true;
var nTimeout = AJAX.TIMEOUT;
var errorCallback = null;
if (options) {
if (options.sync) {
isAsync = (options.sync !== true);
}
if (options.timeout) {
nTimeout = parseInt(options.timeout, 10);
if (isNaN(nTimeout)) {
nTimeout = AJAX.TIMEOUT;
}
}
errorCallback = options.errorCB;
}
var headers = {
'_ResponseSource': 'Broswer'
};
if (!($.isArray(AJAX.tokens))) {
headers.__RequestVerificationToken = AJAX.tokens;
}
if (urlstr === 'api/wlan/multi-basic-settings' || urlstr === 'api/wlan/basic-settings') {
headers['Login-Type'] = 'Scram';
}
if (AJAX.cookieFlag && urlstr === 'api/monitoring/status') {
AJAX.cookieFlag = false;
headers['Update-Cookie'] = 'UpdateCookie';
}
$.ajax({
async: isAsync,
headers: headers,
type: 'GET',
timeout: nTimeout,
url: myurl,
error: function (XMLHttpRequest, textStatus) {
try {
if (jQuery.isFunction(errorCallback)) {
errorCallback(XMLHttpRequest, textStatus);
} else if (window.location.hash === '#mobileconnection' && GLOBAL.isBridgeModeOpen) {
getAjaxData(urlstr, callback, options);
} else {
}
} catch (exception) {
debugInfo('getAjaxData errorCallback fail');
}
},
success: function (data) {
var xml;
var content;
content = data;
if (typeof content === 'string' || typeof content === 'number') {
if ((this.url.indexOf('/api/ussd/get') !== -1) && (content.indexOf('content') !== -1)) {
content = smsContentDeleteWrongChar(content);
}
if (!!window.ActiveXObject || "ActiveXObject" in window) {
xml = new ActiveXObject('Microsoft.XMLDOM');
xml.async = false;
xml.loadXML(content);
} else {
var parser = new DOMParser();
xml = parser.parseFromString(content, 'text/xml');
}
} else {
xml = content;
}
var ret = xml2object($(xml));
if (ret.type === 'error') {
if (ERROR_WRONG_SESSION_TOKEN === ret.error.code || ERROR_WRONG_SESSION === ret.error.code) {
gotoPageWithoutHistory(GLOBAL.HOME_PAGE_URL);
return;
}
}
if (ret.type === 'error' && ret.error.code === ERROR_WRONG_TOKEN) {
getAjaxToken();
window.getAjaxData(urlstr, callback, options);
} else if (typeof callback === 'function') {
callback(ret);
}
}
});
};
function Switch(obj, callback) {
var classlist = $(obj).attr('class');
if (classlist.indexOf('switch_on') >= 0) {
$(obj).addClass('switch_off').removeClass('switch_on');
} else {
$(obj).addClass('switch_on').removeClass('switch_off');
}
if (callback) {
callback();
}
}
function checkbox(obj, callback) {
var classlist = $(obj).attr('class');
if (classlist.indexOf('check_on') >= 0) {
$(obj).addClass('check_off').removeClass('check_on');
} else {
$(obj).addClass('check_on').removeClass('check_off');
}
if (callback) {
callback();
}
}
function radio(obj, callback) {
if ($(obj).hasClass('radio_btn_on')
|| $(obj).hasClass('radio_btn_on_disabled')
|| $(obj).hasClass('radio_btn_off_disabled')) {
return;
}
var namevalue = $(obj).attr('name');
$('div[name=' + namevalue + ']').addClass('radio_btn_off');
$('div[name=' + namevalue + ']').removeClass('radio_btn_on');
$(obj).removeClass('radio_btn_off');
$(obj).addClass('radio_btn_on');
if (callback) {
callback();
}
}
function getPassword(id) {
if (!$('#' + id + '_close').is(':visible')) {
return $('#' + id + '_text').val();
}
return $('#' + id).val();
}
function ShowPassword(obj) {
var classlist = $(obj).attr('class');
var forAttr = $(obj).attr('forpass');
var open_id = '#' + forAttr + '_open';
var close_id = '#' + forAttr + '_close';
if (classlist.indexOf('ic_eye_open') >= 0) {
$('#' + forAttr + '_open').hide();
$('#' + forAttr + '_close').show();
$('#' + forAttr).val($('#' + forAttr + '_text').val());
if (!isSupportPlaceholder() && (typeof ($(open_id + ' ' + 'input').attr('placeholder')) !== 'undefined')) {
var input_open_id = $(open_id + ' ' + 'input').attr('id');
var input_close_id = $(close_id + ' ' + 'input').attr('id');
if ($('#' + input_open_id).val() == '') {
$('#' + input_close_id).hide();
$('#' + input_close_id + '1').show();
} else {
$('#' + input_close_id + '1').hide();
$('#' + input_close_id).show();
}
}
} else {
$('#' + forAttr + '_open').show();
$('#' + forAttr + '_close').hide();
$('#' + forAttr + '_text').val($('#' + forAttr).val());
if (!isSupportPlaceholder() && (typeof ($(close_id + ' ' + 'input').attr('placeholder')) !== 'undefined')) {
var input_open_id = $(open_id + ' ' + 'input').attr('id');
var input_close_id = $(close_id + ' ' + 'input').attr('id');
if ($('#' + input_close_id).val() == '') {
$('#' + input_open_id).hide();
$('#' + input_open_id + '1').show();
} else {
$('#' + input_open_id + '1').hide();
$('#' + input_open_id).show();
}
}
$('#preLoadEyeImg').remove();
}
}
function unbindEyeEvent(selestor) {
if (!selestor) {
return;
}
var selClose = '#' + selestor + ' .ic_eye_close';
var selOpen = '#' + selestor + ' .ic_eye_open';
var selAll = selClose + ',' + selOpen;
$(selAll).removeAttr('onclick');
$(selAll).off();
}
function preLoadEyeImg() {
var eyeImg = '<div id="preLoadEyeImg"><div class="ic_guide_eye_open" style="opacity:0;height:0;margin:0"></div>\
<div class="ic_eye_open" style="opacity:0;height:0;margin:0"></div>\
</div>';
$('body').prepend(eyeImg);
}
function preLoadLangImg() {
var pushHtml = '<div id="preLoadLangImg">\
<div class="lang_top_normal" style="opacity:0;height:0;margin:0"></div>\
<div class="lang_middle_selected" style="opacity:0;height:0;margin:0"></div>\
<div class="lang_middle_normal" style="opacity:0;height:0;margin:0"></div>\
<div class="lang_bottom_normal" style="opacity:0;height:0;margin:0"></div>\
</div>';
$('body').prepend(pushHtml);
}
function bindEyeEvent(selestor, callbackFun) {
var selAll = '.ic_eye_close,.ic_eye_open';
var selClose = '.ic_eye_close';
var selOpen = '.ic_eye_open';
if (selestor) {
selClose = '#' + selestor + ' .ic_eye_close';
selOpen = '#' + selestor + ' .ic_eye_open';
selAll = selClose + ',' + selOpen;
}
$(selAll).off();
$(selAll).removeAttr('onclick');
$(selClose).off('mousedown touchstart');
$(selClose).on('mousedown touchstart', function (e) {
e.preventDefault();
ShowPassword(this);
if (selestor && callbackFun) {
callbackFun(this);
}
});
$(selClose).off('touchend touchcancel');
$(selClose).on('touchend touchcancel', function () {
var obj = this;
var classlist = $(obj).attr('class');
var forAttr = $(obj).attr('forpass');
$('#' + forAttr + '_open').hide();
$('#' + forAttr + '_close').show();
$('#' + forAttr).val($('#' + forAttr + '_text').val());
if (selestor && callbackFun) {
callbackFun(this);
}
});
$(selOpen).off('mouseup mouseleave');
$(selOpen).on('mouseup mouseleave', function () {
ShowPassword(this);
if (selestor && callbackFun) {
callbackFun(this);
}
});
}
function isEthernetConnect(page) {
var isConnect = false;
if (GLOBAL.modules.wanmanagement_enabled === '1') {
getAjaxData('api/dialup/multiWanInformation', function (ret) {
if (ret.type === 'response') {
if (typeof ret.response.service_list !== 'undefined' && ret.response.service_list !== '') {
var wanData = $.makeArray(ret.response.service_list.service);
var ethernetStatus = '0';
var internetStatus = '0';
for (var i=0;i<wanData.length;i++) {
if (wanData[i].service_name === 'ETHERNET') {
ethernetStatus = wanData[i].wan_status;
}
if (wanData[i].service_name === 'Internet') {
internetStatus = wanData[i].wan_status;
}
}
if (ethernetStatus === '1' && internetStatus === '0') {
isConnect =  true;
}
}
} else {
isConnect =  false;
}
}, {sync: true});
}
if (page) {
if (isConnect) {
$('#' +page+ "_ethernet_prompt").show();
EMUI.LanguageController.registerLanguageEx(page+ "_ethernet_prompt", 'ethernet_tips', '%1$s', 'menu.advanceset');
EMUI.LanguageController.registerLanguageEx(page+ "_ethernet_prompt", 'ethernet_tips', '%2$s', 'menu.wanconfiguration');
EMUI.LanguageController.registerLanguageEx(page+ "_ethernet_prompt", 'ethernet_tips', '%3$s', 'menu.wanmanagement');
EMUI.LanguageController.transLangEx();
$('#' +page).hide();
} else {
$('#' +page+ "_ethernet_prompt").hide();
$('#' +page).show();
}
}
return isConnect;
}
function initSelectWidth(id) {
$('#' + id).css('width', '300px');
$('#' + id).addClass('padding_right_42');
$("div[id^='" + id + "_list_item_']").addClass('ussd_text_long');
$("div[id^='" + id + "_list_item_']").css('width', '286px');
$("div[id^='" + id + "_list_item_']").addClass('padding_right_42');
for (var i = 0; i < $("div[id^='" + id + "_list_item_']").length; i++) {
$("div[id^='" + id + "_list_item_']").eq(i).attr('title', $("div[id^='" + id + "_list_item_']").eq(i).text());
}
$(document).on('mouseover', '#' + id, function () {
var selectText = $('#' + id).text();
$('#' + id).prop('title', selectText);
});
}
function resetTableHeight(itemClass, n) {
var itemEle = $('.' + itemClass).eq(n).children();
var mostHeight = 40;
for (var i = 0; i < itemEle.length; i++) {
var itemHeight = itemEle.children().eq(i).height();
if (itemHeight > mostHeight) {
mostHeight = itemHeight;
}
}
for (var i = 0; i < itemEle.length; i++) {
itemEle.children().eq(i).parent().height(mostHeight + 'px');
itemEle.children().eq(i).parent().addClass('table_content_line_item');
}
$('.' + itemClass).eq(n).height((mostHeight + 10) + 'px');
$('.' + itemClass).eq(n).addClass('table_content_line');
}
function clearAllErrorMsg() {
$('.error_message').remove();
var classVal = '';
$(':text').each(function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_error') >= 0) {
$(element).addClass('input_normal').removeClass('input_error');
}
if (classVal && classVal.indexOf('input_long_error') >= 0) {
$(element).addClass('input_long').removeClass('input_long_error');
}
});
$(':password').each(function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_error') >= 0) {
$(element).removeClass('input_error').addClass('input_normal');
}
if (classVal && classVal.indexOf('input_long_error') >= 0) {
$(element).removeClass('input_long_error').addClass('input_long');
}
});
$('div').each(function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_error') >= 0) {
$(element).removeClass('input_error').addClass('input_normal');
}
if (classVal && classVal.indexOf('input_long_error') >= 0) {
$(element).removeClass('input_long_error').addClass('input_long');
}
});
}
function showInputBorder(obj) {
var curElement = $(obj);
if (curElement && curElement.parent()) {
if (curElement.parent().hasClass('input_normal')) {
curElement.parent().addClass('input_normal_selected').removeClass('input_normal');
}
if (curElement.parent().hasClass('input_long')) {
curElement.parent().addClass('input_long_selected').removeClass('input_long');
}
}
}
function hideInputBorder(obj) {
var curElement = $(obj);
if (curElement && curElement.parent()) {
if (curElement.parent().hasClass('input_normal_selected')) {
curElement.parent().addClass('input_normal').removeClass('input_normal_selected');
}
if (curElement.parent().hasClass('input_long_selected')) {
curElement.parent().addClass('input_long').removeClass('input_long_selected');
}
}
}
function showShortInputBorder(obj) {
var curElement = $(obj);
if (curElement && curElement.parent()) {
curElement.parent().addClass('short_input_selected').removeClass('short_input');
}
}
function hideShortInputBorder(obj) {
var curElement = $(obj);
if (curElement && curElement.parent()) {
curElement.parent().addClass('short_input').removeClass('short_input_selected');
}
}
function toggleHelpInfo(obj) {
var curElement = $(obj);
if (curElement && curElement.hasClass('page_help')) {
curElement.next().toggle();
}
if (window.location.hash === '#wps') {
EMUI.LanguageController.registerLanguageEx('wps_page_help', 'wps_page_help', '%s', 'wifi_auth_label');
EMUI.LanguageController.transLangEx();
}
}
function showErrorMsg(divid, errormsgid, para) {
var msgcontent = '';
var errorLabel = '';
var msgid = (divid + errormsgid).replace('.', '');
try {
msgcontent = publicLang[errormsgid];
} catch (e) {
return;
}
if (para) {
msgcontent = msgcontent.replace('%d', para);
msgcontent = msgcontent.replace('%s', publicLang[para]);
}
errorLabel += '<div class="clearboth error_message">';
if ($('#' + divid).find('.control-label-win').length !== 0) {
errorLabel += '<div class="control-label-win">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
} else {
errorLabel += '<div class="control-label">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
}
errorLabel += '<div id="' + msgid + '" lang-id="' + errormsgid + '" class="error_info ">' + msgcontent + '</div>';
errorLabel += '</div>';
errorLabel += '</div>';
var classVal = '';
classVal = $('#' + divid).find('input').attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$('#' + divid).find('input').each(function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
});
} else {
$('#' + divid).find('div').each(function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
if (classVal && classVal.indexOf('input_normal_selected') >= 0) {
$(element).addClass('input_error').removeClass('input_normal_selected');
}
if (classVal && classVal.indexOf('input_long_selected') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long_selected');
}
});
}
$('#' + divid).secureAppend(errorLabel);
if (para) {
EMUI.LanguageController.registerLanguage(msgid, errormsgid, para);
}
}
function showRangeErrorMsg(divid, errormsgid, para1, para2) {
var msgcontent = '';
var errorLabel = '';
var msgid = (divid + errormsgid).replace('.', '');
try {
msgcontent = publicLang[errormsgid];
} catch (e) {
return;
}
if (para1 && para2) {
msgcontent = msgcontent.replace('%d1', para1);
msgcontent = msgcontent.replace('%d2', para2);
}
errorLabel += '<div class="clearboth error_message">';
if ($('#' + divid).find('.control-label-win').length !== 0) {
errorLabel += '<div class="control-label-win">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
} else {
errorLabel += '<div class="control-label">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
}
errorLabel += '<div id="' + msgid + '" lang-id="' + errormsgid + '" class="error_info ">' + msgcontent + '</div>';
errorLabel += '</div>';
errorLabel += '</div>';
var classVal = '';
classVal = $('#' + divid).find('input').attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$('#' + divid).find('input').each(function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
});
} else {
$('#' + divid).find('div').each(function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
if (classVal && classVal.indexOf('input_normal_selected') >= 0) {
$(element).addClass('input_error').removeClass('input_normal_selected');
}
if (classVal && classVal.indexOf('input_long_selected') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long_selected');
}
});
}
$('#' + divid).secureAppend(errorLabel);
if (para1 && para2) {
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%d1', para1);
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%d2', para2);
}
}
function showOffloadErrorMsg(divid, errormsgid, para1, para2, para3, para4) {
var msgcontent = '';
var errorLabel = '';
var msgid = (divid + errormsgid).replace('.', '');
try {
msgcontent = publicLang[errormsgid];
} catch (e) {
return;
}
if (para1 && para2 && para3 && para4) {
msgcontent = msgcontent.replace('%1$d', para1);
msgcontent = msgcontent.replace('%2$d', para2);
msgcontent = msgcontent.replace('%3$d', para3);
msgcontent = msgcontent.replace('%4$d', para4);
}
errorLabel += '<div class="clearboth error_message">';
if ($('#' + divid).find('.control-label-win').length !== 0) {
errorLabel += '<div class="control-label-win">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
} else {
errorLabel += '<div class="control-label">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
}
errorLabel += '<div id="' + msgid + '" lang-id="' + errormsgid + '" class="error_info ">' + msgcontent + '</div>';
errorLabel += '</div>';
errorLabel += '</div>';
var classVal = '';
classVal = $('#' + divid).find('input').attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$('#' + divid).find('input').each(function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
});
} else {
$('#' + divid).find('div').each(function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
if (classVal && classVal.indexOf('input_normal_selected') >= 0) {
$(element).addClass('input_error').removeClass('input_normal_selected');
}
if (classVal && classVal.indexOf('input_long_selected') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long_selected');
}
});
}
$('#' + divid).secureAppend(errorLabel);
if (para1 && para2 && para3 && para4) {
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%1$d', para1);
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%2$d', para2);
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%3$d', para3);
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%4$d', para4);
}
}
var DEBUG_INFO = false;
function debugInfo() {
if (DEBUG_INFO) {
for (var i = 0; i < arguments.length; i++) {
}
}
}
function smsContentDeleteWrongChar(smsStr) {
return smsStr.replace(/([\x00-\x08]|\x0b|\x0c|[\x0e-\x1f])/g, ' ');
}
function checkUrl(source) {
var lowCaseStr = source.toLowerCase();
var strRegex = '^((https|http|ftp|rtsp|mms)?://)' + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' + '(([0-9]{1,3}\.){3}[0-9]{1,3}' + '|' + '([0-9a-z_!~*\'()-]+\.)*' + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.' + '[a-z]{2,6})' + '(:[0-9]{1,4})?' + '((/?)|' + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
var regex = new RegExp(strRegex);
return regex.test(lowCaseStr);
}
function escapeURL(source) {
var outstr = '';
var index;
var copystr = source + '';
if (!checkUrl(source)) {
outstr = '/';
} else {
copystr = copystr.toLowerCase();
if (copystr.indexOf('javascript') !== -1 || copystr.indexOf('script') !== -1) {
return '/';
}
for (index = 0; index < source.length; index++) {
if (source.charAt(index) === '&' || source.charAt(index) === '<' || source.charAt(index) === '>' || source.charAt(index) === '"' || source.charAt(index) === '\'' || source.charAt(index) === '(' || source.charAt(index) === ')') {
outstr += '%';
outstr += source.charCodeAt(index).toString(16);
} else {
outstr += source.charAt(index);
}
}
}
return outstr;
}
function getQueryStringByName(item) {
var svalue = location.search.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'));
return svalue ? svalue[1] : svalue;
}
function delChromePrefix(filepath) {
return filepath.replace('C:\\fakepath\\', '');
}
var gEncPublickey = {
e: '',
n: ''
};
function storagePubkey(rsaN, rsaE) {
var storage = window.sessionStorage;
if (rsaE === '' || rsaN === '') {
return;
}
try {
storage.clear();
storage.setItem('n', rsaN);
storage.setItem('e', rsaE);
} catch (error) {
var pubkey = '[rsa_n=' + rsaN + '&rsa_e=' + rsaE + ']';
var namebk = window.name;
var keyLocation = namebk.indexOf('[rsa_n=');
var defaultValue = namebk;
if (keyLocation > 0) {
defaultValue = namebk.substr(0, keyLocation);
}
window.name = defaultValue + pubkey;
}
}
function getPubkey() {
var storage = window.sessionStorage;
try {
storage.setItem('atp', 'atp');
storage.getItem('atp');
storage.removeItem('atp');
return [
storage.getItem('n'),
storage.getItem('e')
];
} catch (error) {
var namebk = window.name;
var keylocation = namebk.indexOf('[rsa_n=');
if (keylocation >= 0) {
var pubkey = namebk.substr(keylocation);
var localE = pubkey.indexOf('&rsa_e=');
if (localE > 0) {
var e = pubkey.substring(localE + 7, pubkey.length - 1);
var n = pubkey.substring(7, localE);
return [
n,
e
];
}
}
}
return [
'',
''
];
}
var AJAX_HEADER = '/api/';
var AJAX_TIMEOUT = 30000;
var gScarmLogin = false;
var gSetCookieFlag = false;
var ERROR_SYSTEM_NO_SUPPORT = 100002;
var ERROR_SYSTEM_NO_RIGHTS = 100003;
var ERROR_SYSTEM_BUSY = 100004;
var ERROR_VOICE_BUSY = '120001';
var ERROR_WRONG_TOKEN = 125001;
var ERROR_WRONG_SESSION = 125002;
var ERROR_WRONG_SESSION_TOKEN = 125003;
var MACRO_SUPPORT_CHAR_MIN = 32;
var MACRO_SUPPORT_CHAR_MAX = 126;
var gRequestVerificationToken = [];
var gDeviceTitle = '';
function getConfigData(urlstr, callbackFunc, options) {
var myurl = '../config/' + urlstr + '';
var isAsync = true;
var nTimeout = AJAX_TIMEOUT;
var errorCallback = null;
if (options) {
if (options.sync) {
isAsync = (options.sync === true) ? false : true;
}
if (options.timeout) {
nTimeout = parseInt(options.timeout, 10);
if (isNaN(nTimeout)) {
nTimeout = AJAX_TIMEOUT;
}
}
errorCallback = options.errorCB;
}
$.ajax({
async: isAsync,
type: 'GET',
timeout: nTimeout,
url: myurl,
headers: {
'_ResponseSource': 'Broswer'
},
error: function (XMLHttpRequest, textStatus, errorThrown) {
try {
if (jQuery.isFunction(errorCallback)) {
errorCallback(XMLHttpRequest, textStatus);
}
} catch (exception) {
}
},
success: function (data) {
var xml;
if (typeof data === 'string' || typeof data === 'number') {
if (!window.ActiveXObject) {
var parser = new DOMParser();
xml = parser.parseFromString(data, 'text/xml');
} else {
xml = new ActiveXObject('Microsoft.XMLDOM');
xml.async = false;
xml.loadXML(data);
}
} else {
xml = data;
}
if (typeof callbackFunc === 'function') {
callbackFunc($(xml));
}
}
});
}
function utilGetCsrf() {
var metas = document.getElementsByTagName('meta');
for (var m = 0; m < metas.length; m++) {
if (metas[m].getAttribute('name') === 'csrf_token') {
gRequestVerificationToken.push(metas[m].getAttribute('content'));
}
}
}
var EMUI = {};
$(function () {
EMUI.Object = {};
function cloneObject(inObj) {
var newObj = (inObj instanceof Array) ? [] : {};
for (var i in inObj) {
if (inObj[i] && typeof inObj[i] === 'object' || typeof inObj[i] === Object) {
newObj[i] = cloneObject(inObj[i]);
} else {
newObj[i] = inObj[i];
}
}
return newObj;
}
function compareObject(inObj1, inObj2) {
if (inObj1 === inObj2) {
return true;
}
var obj1length = 0;
for (var i in inObj1) {
if (i) {
obj1length++;
}
}
var obj2length = 0;
for (i in inObj2) {
if (i) {
obj2length++;
}
}
if (obj1length !== obj2length) {
return false;
}
var result = true;
for (i in inObj1) {
if (inObj1[i] && typeof inObj1[i] === 'object' || typeof inObj1[i] === Object) {
result = result && compareObject(inObj1[i], inObj2[i]);
} else {
result = result && (inObj1[i] === inObj2[i]);
}
}
return result;
}
EMUI.Object.extend = function (source) {
var temp = cloneObject(this);
temp._super = this;
for (var property in source) {
if (property) {
temp[property] = source[property];
}
}
return temp;
};
EMUI.Scroll = EMUI.Object.extend({
i: 0,
cancelSelectListEvent: false,
boxH: {},
textH: {},
intervalResizeObj: {},
isHiddenOld: {},
mouseData: {
startY: 0,
curTop: 0,
startBoolear: false,
startSelector: ''
},
touchData: {
startY: 0,
curTop: 0,
startBoolear: false,
startSelector: ''
},
isStartMouseWheel: false,
initScroll: function (selectorS) {
var self = this;
$.each($(selectorS), function (index, selector) {
var $selector = $(selector);
var i = self.i;
if ($selector.find('.scroll_text').length > 0) {
return;
}
self.$selector = $selector;
self.initBoxHtml($selector, i);
self.resize($selector);
self.resizeTop($('#scroll_bar_' + i), 0);
self.intervalResizeObj[i] = setInterval(function () {
self.intervalResize($selector, i);
}, 50);
self.bindEvent(i);
self.i++;
});
},
callbacks: {},
callback: function (selectorS, callbackFun) {
var self = this;
$.each($(selectorS), function (index, selector) {
var i = $(selector).attr('scrollID');
self.callbacks[i] = callbackFun;
})
},
initBoxHtml: function ($selector, i) {
var self = this;
$selector.css('position', 'relative');
$selector.css('overflow', 'visible');
$selector.attr('scrollID', i);
$selector.wrapInner('<div id="scroll_left_' + i + '" class="scroll_left">\
<div id="scroll_text_'+ i + '" class="scroll_text"></div>\
</div>');
$selector.append('<div id="scroll_right_' + i + '" class="scroll_right" style="display:none">\
<div id="scroll_bar_'+ i + '" class="scroll_bar" style="min-height:40px;"></div>\
</div>');
},
intervalResize: function ($selector, i) {
var self = this;
if ($('#scroll_text_' + i).length === 0 && self.intervalResizeObj[i]) {
clearInterval(self.intervalResizeObj[i]);
self.intervalResizeObj[i] = null;
} else {
var isUpdated = self.resize($selector);
if (isUpdated === 'updated') {
var curTop = $('#scroll_bar_' + i)[0].offsetTop;
self.resizeTop($('#scroll_bar_' + i), curTop);
}
}
},
resize: function ($selector) {
var self = this;
if (typeof $selector === 'string') {
$.each($($selector), function (index, selector) {
self.resize($(selector));
});
return;
}
var i = $selector.attr('scrollID');
var $scrollRight = $('#scroll_right_' + i);
var $scrollLeft = $('#scroll_left_' + i);
var $scrollBar = $('#scroll_bar_' + i);
var maxHeight = parseInt($selector.css('max-height').slice(0, -2));
var height = parseInt($selector.css('height').slice(0, -2));
var currentBoxHeight = (maxHeight > height) ? maxHeight : height;
var currentTextH = $selector.find('.scroll_text').height();
var currentHidden = ($selector.is(':hidden')) ? true : false;
var firstInit = ($scrollBar.height() > 0) ? false : true;
if (currentHidden) {
self.isHiddenOld[i] = true;
return;
} else {
if (self.isHiddenOld[i] && !firstInit) {
self.resizeTop($('#scroll_bar_' + i), 0);
}
self.isHiddenOld[i] = false;
}
if (self.boxH[i] === currentBoxHeight && self.textH[i] === currentTextH) {
return;
}
self.boxH[i] = currentBoxHeight;
self.textH[i] = currentTextH;
if (currentTextH > currentBoxHeight) {
$scrollRight.css('display', 'block');
} else {
self.resizeTop($('#scroll_bar_' + i), 0);
$scrollRight.css('display', 'none');
return;
}
var rateH = currentTextH / currentBoxHeight;
var scrollBarH = currentBoxHeight / rateH;
$scrollLeft.css('max-height', currentBoxHeight + 'px');
$scrollRight.css('height', currentBoxHeight + 'px');
$scrollBar.css('height', scrollBarH + 'px');
return 'updated';
},
setTop: function (selectorS, top) {
var self = this;
$.each($(selectorS), function (index, selector) {
var i = $(selector).attr('scrollID');
var $scrollBar = $('#scroll_bar_' + i);
self.resize($(selector));
self.resizeTop($scrollBar, top);
})
},
setDomTop: function (selectorS, domTop) {
var self = this;
$.each($(selectorS), function (index, selector) {
var i = $(selector).attr('scrollID');
var $scrollBar = $('#scroll_bar_' + i);
self.resize($(selector));
self.resizeDomTop($scrollBar, domTop);
})
},
setBottom: function (selectorS, bottom) {
var self = this;
$.each($(selectorS), function (index, selector) {
var i = $(selector).attr('scrollID');
var $scrollRight = $('#scroll_right_' + i);
var $scrollBar = $('#scroll_bar_' + i);
var realHeight = $scrollRight.height();
var bottomHeight = realHeight - (bottom || 0);
self.resize($(selector));
self.resizeTop($scrollBar, bottomHeight);
})
},
resizeDomTop: function ($selectorBar, domTop) {
var self = this;
var barId = $selectorBar.attr('id');
var id = barId;
var i = id.slice('scroll_bar_'.length);
var boxH = self.boxH[i];
var textH = self.textH[i];
var barH = $selectorBar.height();
var rateH = (textH - boxH) / (boxH - barH);
var barTop = (domTop / rateH);
self.resizeTop($selectorBar, barTop);
},
resizeTop: function ($selectorBar, barTop, isAllowCallback) {
var self = this;
if ($selectorBar.is(':hidden')) {
return;
}
var barId = $selectorBar.attr('id');
var id = barId;
var i = id.slice('scroll_bar_'.length);
var boxH = self.boxH[i];
var textH = self.textH[i];
var barH = $selectorBar.height();
if (barTop < 0) {
barTop = 0;
} else if (barTop > (boxH - barH)) {
barTop = boxH - barH;
}
var rateH = (textH - boxH) / (boxH - barH);
var textTop = -(barTop * rateH);
if ($('#scroll_left_' + i).scrollTop() !== 0) {
$('#scroll_left_' + i).scrollTop(0);
}
$selectorBar.css('top', barTop + 'px');
$('#scroll_text_' + i).css('top', textTop + 'px');
if (isAllowCallback && self.callbacks[i]) {
self.callbacks[i]();
}
},
bindEvent: function (i) {
var self = this;
var $targetDom = $('[scrollID=' + i + ']');
var isStartClick = false;
$targetDom.on('mousedown click', '#scroll_right_' + i, function (e) {
if ($('#' + e.target.id).is(':hidden')) {
return;
}
e.preventDefault();
e.stopPropagation();
if ($('#' + e.target.id).hasClass('scroll_bar')) {
return;
}
if (e.type === 'mousedown') {
isStartClick = true;
}
if (e.type === 'click' && isStartClick) {
isStartClick = false;
var id = e.currentTarget.id;
var i = id.slice('scroll_right_'.length);
self.resizeTop($('#scroll_bar_' + i), e.pageY - $('#' + id).offset().top, 'allowCallback');
}
});
$targetDom.on(((document.onmousewheel !== undefined) ? "mousewheel" : "DOMMouseScroll"), '#scroll_text_' + i, function (e) {
var id = e.currentTarget.id;
var i = id.slice('scroll_text_'.length);
var $selectorBar = $('#scroll_bar_' + i);
if ($selectorBar.is(':hidden')) {
return;
}
var curTop = $selectorBar[0].offsetTop;
var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
var delta = Math.max(-1, Math.min(1, wheel));
var action = (delta < 0) ? 'down' : 'up';
var setTopData;
var needUpPropagation = false;
if (action === 'up' && curTop > 0) {
e.preventDefault();
e.stopPropagation();
setTopData = curTop - 20;
} else if (action === 'down' && $('#scroll_right_' + i).height() - $selectorBar.height() - curTop > 1) {
e.preventDefault();
e.stopPropagation();
setTopData = curTop + 20;
} else {
needUpPropagation = true;
}
if (needUpPropagation) {
return;
}
if (self.isStartMouseWheel) {
return;
}
self.isStartMouseWheel = true;
setTimeout(function () {
self.isStartMouseWheel = false;
}, 100);
if (setTopData !== undefined) {
self.resizeTop($selectorBar, setTopData, 'allowCallback');
}
});
$targetDom.on('focusin', '#scroll_text_' + i, function (e) {
var tagName = e.target.tagName || '';
if (tagName.toLowerCase() !== 'input') {
return;
}
var id = e.currentTarget.id;
var i = id.slice('scroll_text_'.length);
var $selectorBar = $('#scroll_bar_' + i);
if ($selectorBar.is(':hidden')) {
return;
}
e.preventDefault();
e.stopPropagation();
var boxTop = $('#' + id)[0].offsetTop;
var dulHeight = $(document.activeElement).offset().top - $('#' + id).offset().top;
var domHeight = $(document.activeElement).outerHeight();
var overTop = boxTop + dulHeight + domHeight - $('#scroll_left_' + i).height();
if (overTop >= 0) {
self.resizeDomTop($selectorBar, dulHeight, 'allowCallback');
}
});
$targetDom.on('touchstart', '#scroll_text_' + i + ',#scroll_bar_' + i, function (e) {
var id = e.currentTarget.id;
var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
var i;
e.stopPropagation();
if (id.indexOf('scroll_text') > -1) {
i = id.slice('scroll_text_'.length);
} else if (id.indexOf('scroll_bar') > -1) {
i = id.slice('scroll_bar_'.length);
} else {
return;
}
self.touchData = {
startBoolear: true,
startY: touch.pageY,
curTop: $('#scroll_bar_' + i)[0].offsetTop,
startSelector: 'scroll_bar_' + i
}
});
$targetDom.on('touchmove', '#scroll_text_' + i + ',#scroll_bar_' + i + ',#scroll_right_' + i, function (e) {
if (!self.touchData.startSelector || !self.touchData.startBoolear || !$('#' + self.touchData.startSelector).length) {
return;
}
var id = self.touchData.startSelector;
var i = id.slice('scroll_bar_'.length);
var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
var dulTop;
if ((e.currentTarget.id).indexOf('scroll_text') > -1) {
dulTop = self.touchData.startY - touch.pageY;
} else if ((e.currentTarget.id).indexOf('scroll_bar') > -1) {
dulTop = touch.pageY - self.touchData.startY;
}
var barTop = dulTop + self.touchData.curTop;
self.resizeTop($('#' + id), barTop);
e.preventDefault();
e.stopPropagation();
});
$targetDom.on('touchend', '#scroll_text_' + i + ',#scroll_bar_' + i, function (e) {
if (!self.touchData.startSelector || !$('#' + self.touchData.startSelector).length) {
return;
}
var id = self.touchData.startSelector;
var barTop = $('#' + id)[0].offsetTop;
self.touchData.startBoolear = false;
self.resizeTop($('#' + id), barTop, 'allowCallback');
});
$targetDom.on('mousedown', '#scroll_bar_' + i, function (e) {
var id = e.currentTarget.id;
var i = id.slice('scroll_bar_'.length);
self.mouseData = {
startBoolear: true,
startY: e.pageY,
curTop: $('#' + id)[0].offsetTop,
startSelector: id
}
});
$(document).off('mousemove mouseup');
$(document).on('mousemove', function (e) {
if (!self.mouseData.startSelector || !self.mouseData.startBoolear || !$('#' + self.mouseData.startSelector).length) {
return;
}
window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
var id = self.mouseData.startSelector;
var barTop = (e.pageY - self.mouseData.startY) + self.mouseData.curTop;
self.resizeTop($('#' + id), barTop);
});
$(document).on('mouseup', function (e) {
if (!self.mouseData.startSelector || !self.mouseData.startBoolear || !$('#' + self.mouseData.startSelector).length) {
return;
}
self.cancelSelectListEvent = true;
var id = self.mouseData.startSelector;
var barTop = $('#' + id)[0].offsetTop;
self.mouseData.startBoolear = false;
self.resizeTop($('#' + id), barTop, 'allowCallback');
});
},
unbindEvent: function () {
$('.scroll_text,.scroll_right,.scroll_bar').off();
},
destroy: function (selectorS) {
var self = this;
$.each($(selectorS), function (index, selector) {
$selector.removeAttr('scrollID');
$scrollText = $(selector).find('.scroll_text');
if ($scrollText.length === 0) {
return;
}
var id = $scrollText.attr('id');
var index = id.slice('scroll_text_'.length);
if (self.intervalResizeObj[index]) {
clearInterval(self.intervalResizeObj[index]);
self.intervalResizeObj[index] = null;
}
($(selector).find('.scroll_left')).replaceWith($scrollText.contents());
($(selector).find('.scroll_right')).remove();
});
}
});
EMUI.ObjController = EMUI.Object.extend({
objName: '',
content: null,
xmlcontent: null,
isSupportSaveInfo: true,
contentType: 'application/x-www-form-urlencoded; charset=UTF-8;',
cloneObject: function (obj) {
return cloneObject(obj);
},
compareObject: function (obj1, obj2) {
return compareObject(obj1, obj2);
},
load: function (callback, bAsync) {
var myurl = AJAX_HEADER + this.objName;
var self = this;
var nTimeout = AJAX_TIMEOUT;
var isAsyncLoad = true;
if (typeof (bAsync) !== 'undefined') {
isAsyncLoad = bAsync;
}
if (this.timeout) {
nTimeout = parseInt(this.timeout, 10);
} else {
nTimeout = AJAX_TIMEOUT;
}
var headers = {
'_ResponseSource': 'Broswer'
};
if (!($.isArray(gRequestVerificationToken))) {
headers['__RequestVerificationToken'] = gRequestVerificationToken;
}
if (this.objName === '/system/ioc_device_capacity.json') {
myurl = this.objName;
}
if ((myurl === '/api/wlan/multi-basic-settings' || myurl === '/api/wlan/basic-settings')) {
headers['Login-Type'] = 'Scram';
}
if (myurl === '/api/monitoring/status') {
headers['Update-Cookie'] = 'UpdateCookie';
isAsyncLoad = false;
}
$.ajax({
async: isAsyncLoad,
headers: headers,
type: 'GET',
timeout: nTimeout,
url: myurl,
error: function (XMLHttpRequest, textStatus) {
self.getErrorProc(XMLHttpRequest, textStatus);
},
success: function (data) {
var xml;
var xmlRet;
var resData = data;
if (myurl === '/system/ioc_device_capacity.json') {
xmlRet = resData;
} else if (myurl.indexOf('/devidentify/') !== -1 && myurl.indexOf('.png') !== -1) {
self.content = resData;
self.getsuccessProc(resData);
if (callback) {
callback(resData);
}
return;
} else {
if (self.contentType.indexOf('json') !== -1) {
if (Object.prototype.toString.call(resData) === "[object String]") {
xmlRet = JSON.parse(resData);
} else {
xmlRet = resData;
}
} else {
if (typeof resData === 'string' || typeof resData === 'number') {
if ((this.url.indexOf('/api/ussd/get') !== -1) && (resData.indexOf('content') !== -1)) {
resData = smsContentDeleteWrongChar(resData);
} else if (this.url.indexOf('/api/sdcard/sdcard') !== -1) {
resData = sdResolveCannotParseChar(resData);
}
if (!window.ActiveXObject) {
var parser = new DOMParser();
xml = parser.parseFromString(resData, 'text/xml');
} else {
xml = new ActiveXObject('Microsoft.XMLDOM');
xml.async = false;
xml.loadXML(resData);
}
} else {
xml = resData;
}
self.xmlcontent = xml;
xmlRet = self.xml2object($(xml));
}
}
self.content = xmlRet;
self.getsuccessProc(xmlRet);
if (callback) {
callback(xmlRet);
}
}
});
},
isAjaxReturnOK: function (obj) {
var ret = false;
if (obj) {
if (typeof (obj.response) === 'string') {
if (obj.response.toLowerCase() === 'ok') {
ret = true;
}
}
}
return ret;
},
utf8Encode: function (string) {
var stringTemp = string.replace(/\r\n/g, '\n');
var utftext = '';
for (var n = 0; n < stringTemp.length; n++) {
var charStr = stringTemp.charCodeAt(n);
if (charStr < 128) {
utftext += String.fromCharCode(charStr);
} else if ((charStr > 127) && (charStr < 2048)) {
utftext += String.fromCharCode((charStr >> 6) | 192);
utftext += String.fromCharCode((charStr & 63) | 128);
} else {
utftext += String.fromCharCode((charStr >> 12) | 224);
utftext += String.fromCharCode(((charStr >> 6) & 63) | 128);
utftext += String.fromCharCode((charStr & 63) | 128);
}
}
return utftext;
},
base64encode: function (str) {
var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var outputStr = '';
var char1;
var char2;
var char3;
var encry1;
var encry2;
var encry3;
var encry4;
var i = 0;
var input = this.utf8Encode(str);
while (i < input.length) {
char1 = input.charCodeAt(i++);
char2 = input.charCodeAt(i++);
char3 = input.charCodeAt(i++);
encry1 = char1 >> 2;
encry2 = ((char1 & 3) << 4) | (char2 >> 4);
encry3 = ((char2 & 15) << 2) | (char3 >> 6);
encry4 = char3 & 63;
if (isNaN(char2)) {
encry3 = encry4 = 64;
} else if (isNaN(char3)) {
encry4 = 64;
}
outputStr += keyStr.charAt(encry1) + keyStr.charAt(encry2) + keyStr.charAt(encry3) + keyStr.charAt(encry4);
}
return outputStr;
},
utf16to8: function (str) {
var output, i, leng, unic;
output = "";
leng = str.length;
for (i = 0; i < leng; i++) {
unic = str.charCodeAt(i);
if ((unic >= 0x0001) && (unic <= 0x007F)) {
output += str.charAt(i);
} else if (unic > 0x07FF) {
output += String.fromCharCode(0xE0 | ((unic >> 12) & 0x0F));
output += String.fromCharCode(0x80 | ((unic >> 6) & 0x3F));
output += String.fromCharCode(0x80 | ((unic >> 0) & 0x3F));
} else {
output += String.fromCharCode(0xC0 | ((unic >> 6) & 0x1F));
output += String.fromCharCode(0x80 | ((unic >> 0) & 0x3F));
}
}
return output;
},
utf8to16: function (str) {
var output, i, leng, unic;
var char1, char2;
output = "";
leng = str.length;
i = 0;
while (i < leng) {
unic = str.charCodeAt(i++);
switch (unic >> 4) {
case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
output += str.charAt(i - 1);
break;
case 12: case 13:
char1 = str.charCodeAt(i++);
output += String.fromCharCode(((unic & 0x1F) << 6) | (char1 & 0x3F));
break;
case 14:
char1 = str.charCodeAt(i++);
char2 = str.charCodeAt(i++);
output += String.fromCharCode(((unic & 0x0F) << 12) |
((char1 & 0x3F) << 6) |
((char2 & 0x3F) << 0));
break;
}
}
return output;
},
doRSAEncrypt: function (encstring) {
if (encstring === '') {
return '';
}
if (gEncPublickey.e === '') {
var pubkeyArray = getPubkey();
if (pubkeyArray[0] === null || pubkeyArray[0] === '') {
pubkeyArray = this.requestEncpubkey();
}
gEncPublickey.e = pubkeyArray[1];
gEncPublickey.n = pubkeyArray[0];
}
var rsa = new RSAKey();
rsa.setPublic(gEncPublickey.n, gEncPublickey.e);
var encStr = this.base64encode(encstring);
var num = encStr.length / 245;
if (EMUI.LoginStateController.rsapadingtype === '1') {
num = encStr.length / 214;
}
var restotal = '';
var rsan = gEncPublickey.n;
for (var i = 0; i < num; i++) {
if (EMUI.LoginStateController.rsapadingtype === '1') {
var encdata = encStr.substr(i * 214, 214);
var res = rsa.encryptOAEP(encdata);
} else {
var encdata = encStr.substr(i * 245, 245);
var res = rsa.encrypt(encdata);
}
if (res.length !== rsan.length) {
i--;
continue;
}
restotal += res;
}
return restotal;
},
requestEncpubkey: function () {
var encPublickey = ['', ''];
var storage = window.sessionStorage;
var classify = EMUI.BasicInfoObjController.content.response.classify;
if (typeof classify !== 'undefined' && classify !== 'hilink') {
if (typeof storage.e === "undefined" || typeof storage.n === "undefined") {
$('body').hide();
window.location.href = GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL;
return;
}
}
window.getAjaxData('api/webserver/publickey', function (ret) {
if (ret.type === 'response') {
encPublickey[1] = ret.response.encpubkeye;
encPublickey[0] = ret.response.encpubkeyn;
if (encPublickey[0] === null || encPublickey[0] === '') {
this.requestEncpubkey();
}
} else {
this.requestEncpubkey();
}
}, {
sync: true,
errorCB: function () {
this.requestEncpubkey();
}
});
return encPublickey;
},
object2xml: function (name, obj) {
var xmlstr = '<?xml version="1.0" encoding="UTF-8"?>';
xmlstr += this.recursiveObject2Xml(name, obj);
return xmlstr;
},
xml2object: function ($xml) {
var obj = {};
if ($xml.find('response').size() > 0) {
var _response = this.recursiveXml2Object($xml.find('response'));
obj.type = 'response';
obj.response = _response;
} else if ($xml.find('error').size() > 0) {
var _code = $xml.find('code').text();
var _message = $xml.find('message').text();
obj.type = 'error';
obj.error = {
code: _code,
message: _message
};
if ($xml.find('remaincount').text()) {
obj.error.remaincount = $xml.find('remaincount').text();
}
if ($xml.find('waittime').text()) {
obj.error.waittime = $xml.find('waittime').text();
}
if ($xml.find('tobelockedtime').text()) {
obj.error.tobelockedtime = $xml.find('tobelockedtime').text();
}
} else if ($xml.find('config').size() > 0) {
var _config = this.recursiveXml2Object($xml.find('config'));
obj.type = 'config';
obj.config = _config;
} else {
obj.type = 'unknown';
}
return obj;
},
createNodeStr: function (nodeName, nodeValue) {
return '<' + nodeName + '>' + nodeValue + '</' + nodeName + '>';
},
recursiveXml2Object: function ($xml) {
var self = this;
if ($xml.children().size() > 0) {
var _obj = {};
$xml.children().each(function () {
var _childObj = ($(this).children().size() > 0) ? self.recursiveXml2Object($(this)) : $(this).text();
if ($(this).siblings().size() > 0 && $(this).siblings().get(0).tagName === this.tagName) {
if (typeof _obj[this.tagName] === 'undefined' || _obj[this.tagName] === null) {
_obj[this.tagName] = [];
}
_obj[this.tagName].push(_childObj);
} else {
_obj[this.tagName] = _childObj;
}
});
return _obj;
}
return $xml.text();
},
recursiveObject2Xml: function (name, obj) {
var xmlstr = '';
var self = this;
if (typeof (obj) === 'string' || typeof (obj) === 'number') {
xmlstr = this.createNodeStr(name, obj);
} else if (jQuery.isArray(obj)) {
jQuery.each(obj, function (idx, item) {
xmlstr += self.recursiveObject2Xml(name, item);
});
} else if (typeof (obj) === 'object') {
if (obj === null) {
return '';
}
xmlstr += '<' + name + '>';
$.each(obj, function (propName, propVal) {
xmlstr += self.recursiveObject2Xml(propName, propVal);
});
xmlstr += '</' + name + '>';
}
return xmlstr;
},
clearAllErrorLabel: function () {
if (AJAX_HEADER + this.objName !== '/api/language/current-language') {
clearAllErrorMsg();
}
},
isCtrlKey: function (evt) {
if ((evt.keyCode >= 1 && evt.keyCode <= 4) ||
evt.keyCode === 8 || evt.keyCode === 9 || evt.keyCode === 12 || evt.keyCode === 13 || evt.keyCode === 27 || evt.keyCode === 144 ||
(evt.keyCode >= 16 && evt.keyCode <= 20) ||
(evt.keyCode >= 112 && evt.keyCode <= 127) ||
(evt.keyCode === 65 && evt.ctrlKey === true) ||
(evt.keyCode >= 33 && evt.keyCode <= 47)) {
return true;
}
return false;
},
checkVisibleChar: function (str) {
var numCharStr;
if (str === '') {
return true;
}
for (var i = 0; i < str.length; i++) {
numCharStr = str.charCodeAt(i);
if ((numCharStr > MACRO_SUPPORT_CHAR_MAX) || (numCharStr < MACRO_SUPPORT_CHAR_MIN)) {
return false;
}
}
return true;
},
checkProc: function () {
return true;
},
postData: function (data, callback, bAsync) {
var myurl = AJAX_HEADER + this.objName;
var nTimeout = AJAX_TIMEOUT;
var self = this;
var isAsyncLoad = true;
var requestData = data || this.content.response;
if (typeof (bAsync) !== 'undefined') {
isAsyncLoad = bAsync;
}
var headers = {
'_ResponseSource': 'Broswer'
};
if ($.isArray(gRequestVerificationToken)) {
if (gRequestVerificationToken.length > 0) {
headers.__RequestVerificationToken = gRequestVerificationToken[0];
gRequestVerificationToken.splice(0, 1);
} else {
setTimeout(function () {
self.postData(requestData, callback, bAsync);
}, 50);
return;
}
} else {
headers.__RequestVerificationToken = gRequestVerificationToken;
}
if (this.contentType.indexOf('json') > 0) {
headers['_ResponseFormat'] = 'JSON';
}
this.clearAllErrorLabel();
if (!this.checkProc()) {
return;
}
if (this.timeout) {
nTimeout = parseInt(this.timeout, 10);
} else {
nTimeout = AJAX_TIMEOUT;
}
var xmlData = '';
if (self.contentType.indexOf('json') === -1) {
xmlData = this.object2xml('request', requestData);
} else {
xmlData = JSON.stringify(requestData);
}
if (this.contentType.indexOf(';enc') > 0) {
xmlData = this.doRSAEncrypt(xmlData);
}
if (this.isSupportSaveInfo) {
utilStartSubmitDialog();
}
var postStartTime = new Date().getTime();
$.ajax({
async: isAsyncLoad,
headers: headers,
type: 'POST',
timeout: nTimeout,
url: myurl,
contentType: self.contentType,
data: xmlData,
error: function (XMLHttpRequest, textStatus) {
if (XMLHttpRequest.status === '12030' || XMLHttpRequest.status === '12031' || XMLHttpRequest.status === '12019' || XMLHttpRequest.status === '400') {
self.postData();
return;
}
self.postErrorProc(XMLHttpRequest, textStatus);
},
success: function (res) {
var xmlRet = {};
if (self.contentType.indexOf('json') !== -1) {
if (Object.prototype.toString.call(res) === "[object String]") {
xmlRet = JSON.parse(res);
} else {
xmlRet = res;
}
if (xmlRet.errcode !== 0) {
xmlRet.error = {};
xmlRet.error.code = xmlRet.errcode;
}
} else {
var xml;
var localData = res;
if (typeof localData === 'string') {
if (myurl.indexOf('/api/sms/sms-list') !== -1 && localData.indexOf('messages') !== -1) {
localData = smsContentDeleteWrongChar(localData);
}
if (!window.ActiveXObject) {
var parser = new DOMParser();
xml = parser.parseFromString(localData, 'text/xml');
} else {
xml = new ActiveXObject('Microsoft.XMLDOM');
xml.async = false;
xml.loadXML(localData);
}
} else {
xml = localData;
}
xmlRet = self.xml2object($(xml));
}
if (typeof xmlRet.error !== 'undefined' && myurl.indexOf('/api/user/session') === -1) {
if (xmlRet.error.code == ERROR_SYSTEM_NO_RIGHTS || xmlRet.error.code == ERROR_WRONG_TOKEN || xmlRet.error.code == ERROR_WRONG_SESSION_TOKEN || xmlRet.error.code == ERROR_WRONG_SESSION) {
if (xmlRet.error.code == ERROR_WRONG_SESSION_TOKEN) {
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
if (EMUI.loginallowedObjController.content.response.hilink_login === '0') {
EMUI.TokenObjController.load(function () {
}, false);
setTimeout(function () {
self.postData(requestData, callback, bAsync);
}, 50);
return;
}
}
}
}
if (GLOBAL.voiceBusyNotice === '1') {
if (xmlRet.error.code.toString() === ERROR_VOICE_BUSY.toString()) {
gotoPageWithoutHistory('../html/voicebusy.html');
return;
}
}
} else if (myurl.indexOf('/api/user/challenge_login') !== -1 || myurl.indexOf('/api/user/authentication_login') !== -1 || myurl.indexOf('/api/user/password_scram') !== -1) {
if ($.isArray(gRequestVerificationToken)) {
gRequestVerificationToken = [];
}
}
if (self.isSupportSaveInfo) {
var postEndTime = new Date().getTime();
var lastTime = postEndTime - postStartTime;
if (lastTime < 1500) {
setTimeout(function () {
utilStopSubmitDialog();
self.postSuccessProc(xmlRet);
if (callback) {
callback(xmlRet, xml);
}
}, 1500);
} else {
utilStopSubmitDialog();
self.postSuccessProc(xmlRet);
if (callback) {
callback(xmlRet, xml);
}
}
} else {
self.postSuccessProc(xmlRet);
if (callback) {
callback(xmlRet, xml);
}
}
},
complete: function (XMLHttpRequest, textStatus) {
var xmlHeaders = XMLHttpRequest.getAllResponseHeaders();
if (xmlHeaders.indexOf('__RequestVerificationTokenone') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__RequestVerificationTokenone'));
if (xmlHeaders.indexOf('__RequestVerificationTokentwo') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__RequestVerificationTokentwo'));
}
} else if (xmlHeaders.indexOf('__requestverificationtokenone') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__requestverificationtokenone'));
if (xmlHeaders.indexOf('__requestverificationtokentwo') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__requestverificationtokentwo'));
}
} else if (xmlHeaders.indexOf('__RequestVerificationToken') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__RequestVerificationToken'));
} else if (xmlHeaders.indexOf('__requestverificationtoken') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__requestverificationtoken'));
}
}
});
},
getTokenFromHeader: function (headers, tokenHeader) {
var tokenindex = headers.indexOf(tokenHeader) + tokenHeader.length + 1;
while (headers.substring(tokenindex, tokenindex + 1) === ' ') {
tokenindex++;
}
return headers.substring(tokenindex, tokenindex + 32);
},
postSuccessProc: function (retval) {
},
postErrorProc: function (XMLHttpRequest, textStatus) {
},
getsuccessProc: function (retval) {
},
getErrorProc: function (XMLHttpRequest, textStatus) {
}
});
});
$(function () {
EMUI.loginallowedObjController = EMUI.ObjController.extend({
objName: 'user/hilink_login',
});
EMUI.loginallowedObjController.load(null, false);
EMUI.PublicKeyObjController = EMUI.ObjController.extend({
objName: 'webserver/publickey',
getsuccessProc: function (data) {
gEncPublickey.e = data.encpubkeye;
gEncPublickey.n = data.encpubkeyn;
}
});
EMUI.doubleFrequencyConObjCtrl = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'wlan/wlandbho',
initStatus: false,
getsuccessProc: function (data) {
var tmp = $.makeArray(data);
if (tmp && tmp[0].DbhoEnable) {
GLOBAL.modules.isdbFrequencyStatus = true;
} else {
GLOBAL.modules.isdbFrequencyStatus = false;
}
EMUI.doubleFrequencyConObjCtrl.initStatus = GLOBAL.modules.isdbFrequencyStatus;
}
});
EMUI.intelligenceConObjCtrl = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'wlan/wlanintelligent',
getsuccessProc: function (data) {
var tmp = $.makeArray(data);
if (tmp && tmp[0].enable) {
GLOBAL.modules.isIntellOpen = tmp[0].enable;
} else {
GLOBAL.modules.isIntellOpen = false;
}
}
});
EMUI.intelligenceConStaObjCtrl = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'wlan/wlanwifisync',
isIntellComplete: true,
getsuccessProc: function (data) {
var intellStatus = $.makeArray(data);
if ((intellStatus[0].type === 'error') || (intellStatus && intellStatus[0].WifisyncStatus)) {
this.isIntellComplete = true;
} else {
this.isIntellComplete = false;
}
}
});
EMUI.TokenObjController = EMUI.ObjController.extend({
objName: 'webserver/token',
getsuccessProc: function (data) {
gRequestVerificationToken.length = 0;
gRequestVerificationToken.push(data.response.token.substr(32));
}
});
EMUI.globalDetectSmartUpgVersionController = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'system/onlineupg',
isSupportSaveInfo: false,
checkNewversion: function () {
var checkData = {
'UpdateAction': 1
};
var postContent = {
'action': 'check',
'data': checkData
};
this.postData(postContent, function (result) {
EMUI.globalSmartUpgradeStatusController.load();
});
},
toUpgradePage: function () {
EMUI.globalSmartUpgradeStatusController.fromjump = true;
EMUI.indexAutoUpgradeController.sendAutoUpg(EMUI.globalSmartUpgradeStatusController.fromjump);
EMUI.popWinController.closePopItem('upgrade');
window.location.href = '#upgrade';
}
});
EMUI.globalSmartUpgradeStatusController = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'system/onlinestate?devid=all',
hasChecked: false,
fromjump: false,
getUpgradeMAcList: function () {
var deviceContent = this.content;
var state = '';
var needUpgradeMacList = [];
var deviceLen = deviceContent.length;
for (var i = 0; i < deviceLen; i++) {
if (deviceContent[i]['IsSupportOnlineUpg'] !== 0) {
state = deviceContent[i]['UpdateState'];
if (state !== 16 && state !== 17 && state !== 20 && state !== 29 && state !== 28 && state !== 22) {
needUpgradeMacList.push(deviceContent[i]['DevId']);
}
}
}
return needUpgradeMacList.join(',');
},
generatePopWinInfo: function (dataItem) {
if (dataItem !== '') {
var newVersion = dataItem['Version'];
var oldVerion = dataItem['CurrentVersion'];
var popHtml = '<div lang-id="upgrade.pop.info">' + publicLang['upgrade.pop.info'] + '</div>'
+ '<table style="margin-top:10px;" cellpadding="0" cellspacing="0" frame=void rules=none>'
+ '<tr style="height:30px;"><td lang-id="upgrade.oldversion">' + publicLang['upgrade.oldversion'] + '</td><td style="width:20px;">&nbsp;</td><td style="direction:ltr;">' + xss(oldVerion) + '</td></tr>'
+ '<tr style="height:40px;"><td lang-id="upgrade.newversion">' + publicLang['upgrade.newversion'] + '</td><td style="width:20px;">&nbsp;</td><td style="direction:ltr;">' + xss(newVersion) + '</td></tr></table>'
+ '<div class="onekey_red" style="margin-top:-5px;" lang-id="upgrade.onekey.body">' + publicLang['upgrade.onekey.body'] + '</div>'
+ '<div id="index_autoUpg" class="clearboth hide" style="padding-top:16px"><div class="pull-left padding-right-10" style="font-size: 14px;height:20px"><div id="index_autoUpg_check" class="check_on"></div>'
+ '</div><div class="color_Darkgray" style="font-size: 14px;width: 430px;line-height:20px;" lang-id="index_autoUpg_label">' + publicLang['index_autoUpg_label'] + '</div></div>'
+ '<div class="clearboth" style="margin-top:50px;text-align:center;"><button class="btn_normal_long" onclick="EMUI.globalDetectSmartUpgVersionController.toUpgradePage();" lang-id="onlineupg.toUpgrade">' + publicLang['onlineupg.toUpgrade'] + '</button></div>';
EMUI.popWinController.addPopItem('upgrade', 'upgrade.newversion.notice', popHtml);
} else {
EMUI.popWinController.closePopItem('upgrade');
}
},
showRed: function (result) {
var isHasNewVersion = false;
if (typeof result !== 'undefined') {
for (var i = 0; i < result.length; i++) {
if (result[i]['IsMainDevice']) {
if (result[i]['UpdateState'] === 18 || result[i]['UpdateState'] === 33 || result[i]['UpdateState'] === 255) {
isHasNewVersion = true;
}
break;
}
}
if (isHasNewVersion) {
$('#header_new_version').show();
} else {
$('#header_new_version').hide();
}
}
},
getsuccessProc: function (result) {
var isHasNewVersion = false;
var needCheckNewVersion = false;
var dataItem = '';
if (typeof result !== 'undefined') {
for (var i = 0; i < result.length; i++) {
if (result[i]['IsMainDevice']) {
if (result[i]['UpdateState'] !== 23 && result[i]['UpdateState'] !== 24 && result[i]['UpdateState'] !== 25 && result[i]['UpdateState'] !== 26 && result[i]['UpdateState'] !== 27) {
needCheckNewVersion = true;
}
if (result[i]['UpdateState'] === 18 || result[i]['UpdateState'] === 33 || result[i]['UpdateState'] === 255) {
isHasNewVersion = true;
dataItem = result[i];
}
break;
}
}
if (needCheckNewVersion && !this.hasChecked) {
this.hasChecked = true;
EMUI.globalDetectSmartUpgVersionController.checkNewversion();
return;
}
if (isHasNewVersion) {
$('#header_new_version').show();
if (GLOBAL.isSecondaryAccount) {
return;
}
this.generatePopWinInfo(dataItem);
} else {
$('#header_new_version').hide();
EMUI.popWinController.closePopItem('upgrade');
}
}
}
});
EMUI.getNewComponentInfoController = EMUI.ObjController.extend({
objName: 'online-update/url-list',
fromjump: false,
toUpgradePage: function () {
EMUI.getNewComponentInfoController.fromjump = true;
EMUI.indexAutoUpgradeController.sendAutoUpg(EMUI.getNewComponentInfoController.fromjump);
EMUI.popWinController.closePopItem('upgrade');
window.location.href = '#upgrade';
},
getsuccessProc: function (data) {
if (data.type === 'response') {
var responseData = data['response'];
if (typeof responseData.ComponentList !== 'undefined') {
var deviceInfo = EMUI.mainDeviceVersionController.content;
var newVersion = '';
if (typeof responseData.ComponentList.Component !== 'undefined') {
var updateComponent = responseData.ComponentList.Component;
newVersion = updateComponent['Version'];
}
if (deviceInfo && deviceInfo['type'] === 'response') {
var deviceData = deviceInfo['response'];
var oldVerion = '';
if (typeof deviceData['SoftwareVersion'] !== 'undefined' && deviceData['SoftwareVersion'] !== '') {
oldVerion = deviceData['SoftwareVersion'];
}
if (oldVerion === '' && typeof deviceData['WebUIVersion'] !== 'undefined' && deviceData['WebUIVersion'] !== '') {
oldVerion = deviceData['WebUIVersion'];
}
}
var popHtml = '<div lang-id="upgrade.pop.info">' + publicLang['upgrade.pop.info'] + '</div>'
+ '<table style="margin-top:10px;" cellpadding="0" cellspacing="0" frame=void rules=none>'
+ '<tr style="height:30px;"><td lang-id="upgrade.oldversion">' + publicLang['upgrade.oldversion'] + '</td><td style="width:20px;">&nbsp;</td><td style="direction:ltr;">' + xss(oldVerion) + '</td></tr>'
+ '<tr style="height:40px;"><td lang-id="upgrade.newversion">' + publicLang['upgrade.newversion'] + '</td><td style="width:20px;">&nbsp;</td><td style="direction:ltr;">' + xss(newVersion) + '</td></tr></table>'
+ '<div class="onekey_red" style="margin-top:-5px;" lang-id="upgrade.onekey.body">' + publicLang['upgrade.onekey.body'] + '</div>'
+ '<div id="index_autoUpg" class="clearboth hide" style="padding-top:16px"><div class="pull-left padding-right-10" style="font-size: 14px;height:20px"><div id="index_autoUpg_check" class="check_on"></div>'
+ '</div><div class="color_Darkgray" style="font-size: 14px;width: 430px;line-height:20px;" lang-id="index_autoUpg_label">' + publicLang['index_autoUpg_label'] + '</div></div>'
+ '<div class="clearboth" style="margin-top:50px;text-align:center;"><button class="btn_normal_long" onclick="EMUI.getNewComponentInfoController.toUpgradePage();" lang-id="onlineupg.toUpgrade">' + publicLang['onlineupg.toUpgrade'] + '</button></div>';
EMUI.popWinController.addPopItem('upgrade', 'upgrade.newversion.notice', popHtml);
} else {
EMUI.popWinController.closePopItem('upgrade');
}
}
}
});
EMUI.mainCheckNewVersionController = EMUI.ObjController.extend({
objName: 'online-update/check-new-version',
isSupportSaveInfo: false,
checkNewVersion: function () {
var request = {
check: true
};
this.postData(request, function (result) {
});
}
});
EMUI.headerStautsController = EMUI.ObjController.extend({
objName: 'monitoring/check-notifications',
isLocalUpgrade: false,
hasNewVersion: false,
hasChecked: false,
getsuccessProc: function (data) {
var responceData = data['response'];
var newSmsCount = parseInt(responceData['UnreadMessage'], 10);
getAjaxData('api/pin/status', statusGetDate, {
sync: true
});
if (typeof responceData['SmsStorageFull'] !== 'undefined' && responceData['SmsStorageFull'] === '1' && apiPinStatus.SimState !== CONST.MACRO_NO_SIM_CARD) {
$('#sms_not_full').hide();
$('#sms_full_new').hide();
$('#sms_full').hide();
if (newSmsCount > 0) {
$('#sms_full_new').show();
} else {
$('#sms_full').show();
}
} else {
$('#sms_full_new').hide();
$('#sms_full').hide();
$('#sms_not_full').show();
if (newSmsCount > 0 && apiPinStatus.SimState !== CONST.MACRO_NO_SIM_CARD) {
$('#header_new_sms').show();
} else {
$('#header_new_sms').hide();
}
}
if (GLOBAL.modules.bbou_enabled !== '1') {
$('#header_upgrade_info').hide();
return;
}
if (GLOBAL.modules.bridgemode_onlineupdate_enable !== '1' && GLOBAL.isBridgeModeOpen) {
EMUI.popWinController.closePopItem('upgrade');
$('#header_new_version').hide();
return;
}
if (window.location.hash === '#upgrade') {
return;
}
if (!(GLOBAL.cradleStatus && GLOBAL.cradleStatus.cradlestatus === '1' && GLOBAL.cradleStatus.connectstatus === '901')
&& !(GLOBAL.modules.wifioffload_enabled === '1' && GLOBAL.monitoringStatus.WifiConnectionStatus === '901')
&& GLOBAL.monitoringStatus.ConnectionStatus !== '901') {
return;
}
if (GLOBAL.forbid_2g_upg_enable === '1' && GLOBAL.is2Gstatus) {
return;
}
if (GLOBAL.modules.hilink_online_update_enabled === '1') {
EMUI.globalSmartUpgradeStatusController.load();
} else {
var versionStatus = responceData['OnlineUpdateStatus'];
if (!EMUI.headerStautsController.isLocalUpgrade) {
if (versionStatus === '12' || versionStatus === '50' || versionStatus === '30' || versionStatus === '31' || versionStatus === '52' || versionStatus === '40') {
this.hasNewVersion = true;
if (versionStatus === '30') {
return;
}
$('#header_new_version').show();
if (GLOBAL.isSecondaryAccount) {
return;
}
EMUI.getNewComponentInfoController.load();
} else {
$('#header_new_version').hide();
EMUI.popWinController.closePopItem('upgrade');
if (this.hasChecked === false) {
EMUI.mainCheckNewVersionController.checkNewVersion();
this.hasChecked = true;
}
}
}
}
}
});
EMUI.publicActionController = EMUI.ObjController.extend({
toSms: function () {
window.location.hash = '#sms';
},
toUpGrade: function () {
window.location.hash = '#upgrade';
}
});
EMUI.LogoutObjController = EMUI.ObjController.extend({
objName: 'user/logout',
isSupportSaveInfo: false,
doLogout: function () {
var request = {
'Logout': 1
};
this.postData(request, function () {
window.location.href = GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL;
});
},
Logout: function () {
var hash = window.location.hash;
var self = this;
if (hash === '#sms') {
EMUI.smsSendAndSaveController.smsJumpSave(function () {
self.doLogout();
});
} else {
this.doLogout();
}
}
});
var gTraffic = {};
EMUI.pubStatisticFeatureController = EMUI.ObjController.extend({
objName: 'monitoring/statistic-feature-switch',
isDailyLimitEnable: false,
getsuccessProc: function (res) {
if (res.type === 'response') {
this.isDailyLimitEnable = (res.response.daily_statistic_limit_enable === '1') ? true : false;
}
}
});
EMUI.pubMonthStatisticsController = EMUI.ObjController.extend({
objName: 'monitoring/month_statistics',
globalTraffic: null,
beforeMonth: false,
beforeDaily: false,
beforeRoam: false,
currentMonth: false,
currentDaily: false,
currentRoam: false,
toStatistic: function () {
EMUI.popWinController.closePopItem('roamStatistic');
EMUI.popWinController.closePopItem('statistic');
window.location.href = '#statistic';
},
ignorStatistic: function () {
EMUI.popWinController.closePopItem('statistic');
},
ignorRoamStatistic: function () {
EMUI.popWinController.closePopItem('roamStatistic');
},
getsuccessProc: function (monthData) {
if (monthData.type === 'response') {
var responseData = monthData['response'];
gTraffic.usagetraffic = parseInt(responseData['CurrentMonthDownload'], 10) + parseInt(responseData['CurrentMonthUpload'], 10);
if (typeof responseData['roam_month_download'] !== 'undefined' && typeof responseData['roam_month_upload'] !== 'undefined') {
gTraffic.roamUsagetraffic = parseInt(responseData['roam_month_download'], 10) + parseInt(responseData['roam_month_upload'], 10);
} else {
gTraffic.roamUsagetraffic = 0;
}
gTraffic.dailydataused = parseInt(responseData['CurrentDayUsed'], 10);
}
this.globalTraffic = gTraffic;
var popHtml = '';
this.currentMonth = false;
this.currentDaily = false;
this.currentRoam = false;
if (gTraffic['usagetraffic'] > gTraffic['dataLimit'] && gTraffic['dataLimit'] !== 0 && gTraffic['setmonthdata'] === '1') {
popHtml = '<div lang-id="statistic.flowOver">' + publicLang['statistic.flowOver'] + '</div>'
+ '<div style="margin:0 auto;margin-top:50px;text-align:center;"><button class="btn_normal_long" lang-id="statistic.setagain" onclick="EMUI.pubMonthStatisticsController.toStatistic();">' + publicLang['statistic.setagain'] + '</button></div>'
+ '<div class="clearboth" style="margin-top:10px;text-align:center;"><div class="home_font_style pointer" onclick="EMUI.pubMonthStatisticsController.ignorStatistic();" lang-id="statistic.ignor">' + publicLang['statistic.ignor'] + '</div></div>';
if (GLOBAL.isSecondaryAccount) {
popHtml = '<div lang-id="statistic.flowOver">' + publicLang['statistic.flowOver'] + '</div>' +
'<div class="clearboth" style="margin-top:10px;text-align:center;"><div class="home_font_style pointer" onclick="EMUI.pubMonthStatisticsController.ignorStatistic();" lang-id="statistic.ignor">' + publicLang['statistic.ignor'] + '</div></div>';
}
EMUI.popWinController.addPopItem('statistic', 'statistic.overLimit', popHtml);
this.currentMonth = true;
}
if (gTraffic['daydatalimit'] !== 0 && gTraffic['dailydataused'] > gTraffic['daydatalimit'] && gTraffic['SetDayData'] === '1') {
popHtml = '<div lang-id="statistic.flowOver">' + publicLang['statistic.flowOver'] + '</div>'
+ '<div style="margin:0 auto;margin-top:50px;text-align:center;"><button class="btn_normal_long" lang-id="statistic.setagain" onclick="EMUI.pubMonthStatisticsController.toStatistic();">' + publicLang['statistic.setagain'] + '</button></div>'
+ '<div class="clearboth" style="margin-top:10px;text-align:center;"><div class="home_font_style pointer" onclick="EMUI.pubMonthStatisticsController.ignorStatistic();" lang-id="statistic.ignor">' + publicLang['statistic.ignor'] + '</div></div>';
if (GLOBAL.isSecondaryAccount) {
popHtml = '<div lang-id="statistic.flowOver">' + publicLang['statistic.flowOver'] + '</div>' +
'<div class="clearboth" style="margin-top:10px;text-align:center;"><div class="home_font_style pointer" onclick="EMUI.pubMonthStatisticsController.ignorStatistic();" lang-id="statistic.ignor">' + publicLang['statistic.ignor'] + '</div></div>';
}
EMUI.popWinController.addPopItem('statistic', 'statistic.overLimit', popHtml);
this.currentDaily = true;
}
if (gTraffic['supportRoamOver'] === true && gTraffic['setmonthdata'] === '1' && gTraffic['roamUsagetraffic'] > gTraffic['roamFlow']) {
popHtml = '<div lang-id="statistic.roamexceed">' + publicLang['statistic.roamexceed'] + '</div>'
+ '<div style="margin:0 auto;margin-top:50px;text-align:center;"><button class="btn_normal_long" lang-id="statistic.setagain" onclick="EMUI.pubMonthStatisticsController.toStatistic();">' + publicLang['statistic.setagain'] + '</button></div>'
+ '<div class="clearboth" style="margin-top:10px;text-align:center;"><div class="home_font_style pointer" onclick="EMUI.pubMonthStatisticsController.ignorRoamStatistic();" lang-id="statistic.ignor">' + publicLang['statistic.ignor'] + '</div></div>';
if (GLOBAL.isSecondaryAccount) {
popHtml = '<div lang-id="statistic.roamexceed">' + publicLang['statistic.roamexceed'] + '</div>' +
'<div class="clearboth" style="margin-top:10px;text-align:center;"><div class="home_font_style pointer" onclick="EMUI.pubMonthStatisticsController.ignorRoamStatistic();" lang-id="statistic.ignor">' + publicLang['statistic.ignor'] + '</div></div>';
}
EMUI.popWinController.addPopItem('roamStatistic', 'statistic.roamoverLimit', popHtml);
this.currentRoam = true;
}
var isChangeDaily = false;
var isChangeMonth = false;
var isChangeRoam = false;
if (this.beforeDaily !== this.currentDaily) {
isChangeDaily = true;
this.beforeDaily = this.currentDaily;
}
if (this.beforeMonth !== this.currentMonth) {
isChangeMonth = true;
this.beforeMonth = this.currentMonth;
}
if (this.beforeRoam !== this.currentRoam) {
isChangeRoam = true;
this.beforeRoam = this.currentRoam;
}
if ((isChangeDaily && this.currentDaily) || (isChangeMonth && this.currentMonth)) {
var isNeedShowAgain = false;
var contentLength = EMUI.popWinController.content.length;
for (var i = 0; i < contentLength; i++) {
if (EMUI.popWinController.content[i]['moduleName'] === 'statistic') {
if (EMUI.popWinController.content[i]['isClose']) {
EMUI.popWinController.content[i]['isClose'] = false;
isNeedShowAgain = true;
}
}
}
if (isNeedShowAgain) {
EMUI.popWinController.showPop();
showPopWin();
}
}
if (isChangeRoam && this.currentRoam) {
var isNeedShowAgain = false;
var contentLength = EMUI.popWinController.content.length;
for (var i = 0; i < contentLength; i++) {
if (EMUI.popWinController.content[i]['moduleName'] === 'roamStatistic') {
if (EMUI.popWinController.content[i]['isClose']) {
EMUI.popWinController.content[i]['isClose'] = false;
isNeedShowAgain = true;
}
}
}
if (isNeedShowAgain) {
EMUI.popWinController.showPop();
showPopWin();
}
}
}
});
EMUI.pubMonthStatisticsStartDateController = EMUI.ObjController.extend({
objName: 'monitoring/start_date',
getsuccessProc: function (startData) {
if (startData.type === 'response') {
var obj = {
'MB': 1024 * 1024,
'GB': 1024 * 1024 * 1024,
'TB': 1024 * 1024 * 1024 * 1024
};
var responseData = startData['response'];
gTraffic.turnoffdataenable = responseData['turnoffdataenable'];
gTraffic.turnoffdataswitch = responseData['turnoffdataswitch'];
gTraffic.turnoffdataflag = responseData['turnoffdataflag'];
gTraffic.setmonthdata = responseData['SetMonthData'];
var unit = '';
var datalimit = responseData['DataLimit'];
if (datalimit.length === 0) {
datalimit = 0;
} else {
unit = datalimit.substring(datalimit.length - 2);
datalimit = parseInt(datalimit.substring(0, (datalimit.length - 2)), 10);
datalimit = obj[unit] * datalimit;
}
gTraffic.dataLimit = datalimit;
if (typeof responseData['RoamSetMonthData'] !== 'undefined' && responseData['RoamSetMonthData'] === '1') {
gTraffic.supportRoamOver = true;
var roamDataLimit = 0;
if (typeof responseData['RoamDataLimit'] !== 'undefined') {
roamDataLimit = responseData['RoamDataLimit'];
if (roamDataLimit.length === 0) {
roamDataLimit = 0;
} else {
unit = roamDataLimit.substring(roamDataLimit.length - 2);
roamDataLimit = parseInt(roamDataLimit.substring(0, (roamDataLimit.length - 2)), 10);
roamDataLimit = obj[unit] * roamDataLimit;
}
}
gTraffic.roamFlow = roamDataLimit;
} else {
gTraffic.supportRoamOver = false;
gTraffic.roamFlow = 0;
}
EMUI.pubMonthStatisticsController.load();
}
}
});
EMUI.pubDailyStatisticsStartDateController = EMUI.ObjController.extend({
objName: 'monitoring/daily-data-limit',
getsuccessProc: function (dailyData) {
if (dailyData === undefined) {
return;
}
if (dailyData.type === 'response') {
var obj = {
'MB': 1024 * 1024,
'GB': 1024 * 1024 * 1024,
'TB': 1024 * 1024 * 1024 * 1024
};
var responseData = dailyData['response'];
gTraffic.dailyturnoffdataenable = responseData['dailyturnoffdataenable'];
gTraffic.dailyturnoffdataswitch = responseData['dailyturnoffdataswitch'];
gTraffic.dailyturnoffdataflag = responseData['dailyturnoffdataflag'];
gTraffic.SetDayData = responseData['SetDayData'];
var unit = '';
var daydatalimit = responseData['DayDataLimit'];
if (daydatalimit.length === 0) {
daydatalimit = 0;
} else {
unit = daydatalimit.substring(daydatalimit.length - 2);
daydatalimit = parseInt(daydatalimit.substring(0, (daydatalimit.length - 2)), 10);
daydatalimit = obj[unit] * daydatalimit;
}
gTraffic.daydatalimit = daydatalimit;
EMUI.pubMonthStatisticsController.load();
}
}
});
EMUI.globalCradleStatusController = EMUI.ObjController.extend({
objName: 'cradle/status-info',
getsuccessProc: function (ret) {
if (ret.type == 'response') {
GLOBAL.cradleStatus = ret.response;
}
}
});
EMUI.globalStatusController = EMUI.ObjController.extend({
objName: 'monitoring/status',
getsuccessProc: function (data) {
var monitoringStatus = data.response;
GLOBAL.monitoringStatus = monitoringStatus;
var newNetMode = null;
if (typeof monitoringStatus['CurrentNetworkTypeEx'] !== 'undefined' && monitoringStatus['CurrentNetworkTypeEx'] !== '') {
switch (monitoringStatus['CurrentNetworkTypeEx']) {
case MACRO_NET_WORK_TYPE_EX_IS95A:
case MACRO_NET_WORK_TYPE_EX_IS95B:
case MACRO_NET_WORK_TYPE_EX_CDMA_1X:
case MACRO_NET_WORK_TYPE_EX_EVDO_REV_0:
case MACRO_NET_WORK_TYPE_EX_EVDO_REV_A:
case MACRO_NET_WORK_TYPE_EX_EVDO_REV_B:
case MACRO_NET_WORK_TYPE_EX_HYBRID_CDMA_1X:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_0:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_A:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_B:
case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_0:
case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_A:
case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_B:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_0:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_A:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_B:
newNetMode = MACRO_NET_MODE_C;
break;
case MACRO_NET_WORK_TYPE_EX_GSM:
case MACRO_NET_WORK_TYPE_EX_GPRS:
case MACRO_NET_WORK_TYPE_EX_EDGE:
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
case MACRO_NET_WORK_TYPE_EX_LTE:
case MACRO_NET_WORK_TYPE_EX_LTE_PLUS:
case MACRO_NET_WORK_TYPE_EX_NR:
newNetMode = MACRO_NET_MODE_W;
break;
default:
break;
}
} else {
switch (monitoringStatus['CurrentNetworkType']) {
case MACRO_NET_WORK_TYPE_EVDO_REV_0:
case MACRO_NET_WORK_TYPE_EVDO_REV_A:
case MACRO_NET_WORK_TYPE_EVDO_REV_B:
case MACRO_NET_WORK_TYPE_1XRTT:
case MACRO_NET_WORK_TYPE_UMB:
case MACRO_NET_WORK_TYPE_1XEVDV:
case MACRO_NET_WORK_TYPE_3XRTT:
newNetMode = MACRO_NET_MODE_C;
break;
case MACRO_NET_WORK_TYPE_GSM:
case MACRO_NET_WORK_TYPE_GPRS:
case MACRO_NET_WORK_TYPE_EDGE:
case MACRO_NET_WORK_TYPE_WCDMA:
case MACRO_NET_WORK_TYPE_HSDPA:
case MACRO_NET_WORK_TYPE_HSUPA:
case MACRO_NET_WORK_TYPE_HSPA:
case MACRO_NET_WORK_TYPE_TDSCDMA:
case MACRO_NET_WORK_TYPE_HSPA_PLUS:
case MACRO_NET_WORK_TYPE_HSPA_PLUS_64QAM:
case MACRO_NET_WORK_TYPE_HSPA_PLUS_MIMO:
case MACRO_NET_WORK_TYPE_LTE:
case MACRO_NET_WORK_TYPE_LTE_NR:
newNetMode = MACRO_NET_MODE_W;
break;
default:
break;
}
}
if (newNetMode !== null) {
if (GLOBAL.basicInfo.netModeStatus !== newNetMode) {
GLOBAL.basicInfo.netModeStatus = newNetMode;
GLOBAL.basicInfo.netModeChange = MACRO_NET_MODE_CHANGE;
}
}
var winHref = window.location.href;
if (winHref.indexOf('/html/content.html') >= 0) {
EMUI.getWirelessProfileName.load(function (profileData) {
if (profileData.type === 'error') {
getAjaxData('api/pin/status', statusGetDate, {
sync: true
});
if (apiPinStatus.SimState === CONST.MACRO_NO_SIM_CARD || apiPinStatus.PinOptState === CONST.MACRO_CPIN_FAIL) {
$('#header_sms_info').hide();
return;
}
}
if (GLOBAL.isSecondaryAccount || (!GLOBAL.modules.sms_enabled || GLOBAL.modules.sms_enabled === '0')) {
$('#header_sms_info').hide();
} else {
$('#header_sms_info').show();
}
});
}
}
});
EMUI.getWirelessProfileName = EMUI.ObjController.extend({
objName: 'net/current-plmn',
getsuccessProc: function (data) {
var res = data.response;
if (res) {
if (res.Rat === '0') {
GLOBAL.is2Gstatus = true;
} else {
GLOBAL.is2Gstatus = false;
}
}
},
getPlmnName: function (wirelessData, monitoringStatus) {
var plmnName = '';
if (typeof wirelessData['ShortName'] !== 'undefined' && wirelessData['ShortName'].length > 0) {
plmnName = xss(wirelessData['ShortName']);
} else if (typeof wirelessData['FullName'] !== 'undefined' && wirelessData['FullName'].length > 0) {
plmnName = xss(wirelessData['FullName']);
} else if (typeof wirelessData['Numeric'] !== 'undefined' && wirelessData['Numeric'].length > 0) {
plmnName = xss(wirelessData['Numeric']);
} else {
plmnName = '';
}
if (monitoringStatus['RoamingStatus'] === '1' && monitoringStatus['ServiceStatus'] === '2') {
if (plmnName === '') {
plmnName = '<span lang-id="IDS_dialup_label_roaming">' + publicLang['IDS_dialup_label_roaming'] + '<span>';
}
}
return plmnName;
}
});
EMUI.BasicInfoObjController = EMUI.ObjController.extend({
objName: 'device/basic_information',
getsuccessProc: function (data) {
var resp = data.response;
var basicInfo = {};
var productCDMA = resp.ProductFamily === 'CDMA' ? true : false;
if (productCDMA) {
basicInfo.netModeStatus = MACRO_NET_MODE_C;
} else {
basicInfo.netModeStatus = MACRO_NET_MODE_W;
}
if (resp.MultiMode === '1') {
basicInfo.netModeType = MACRO_NET_DUAL_MODE;
} else {
basicInfo.netModeType = MACRO_NET_SINGLE_MODE;
}
basicInfo.netModeChange = MACRO_NET_MODE_RESET;
GLOBAL.basicInfo = basicInfo;
GLOBAL.deviceInfo = resp;
}
});
EMUI.HeartBeatObjController = EMUI.ObjController.extend({
objName: 'user/heartbeat',
timer: null,
refresh: function (rediretcturl) {
var self = this;
var t = 5000;
clearInterval(this.timer);
this.timer = setInterval(function () {
self.load(function (data) {
if (data.response && data.response.userlevel === '0') {
if (rediretcturl) {
window.location.href = rediretcturl;
} else {
window.location.href = GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL;
}
}
});
}, t);
},
stop: function () {
clearInterval(this.timer);
}
});
EMUI.systemDeviceInfoObjController = EMUI.ObjController.extend({
objName: 'system/deviceinfo',
contentType: 'application/json;charset=UTF-8',
getsuccessProc: function (data) {
}
});
EMUI.operatorInfoObjController = EMUI.ObjController.extend({
objName: 'app/operatorinfo',
contentType: 'application/json;charset=UTF-8',
getsuccessProc: function (data) {
}
});
EMUI.privacyNoticeInfoController = EMUI.ObjController.extend({
objName: 'app/privacypolicy',
contentType: 'application/json;charset=UTF-8',
isSupportSaveInfo: false,
isPolicyUpdate: false,
simpleEula: '',
simplePrivacyPolicy: '',
privacyPolicyUrl: '',
eulaUrl: '',
checkPrivacyNotice: function () {
var self = this;
if (GLOBAL.modules && GLOBAL.modules.gdpr_enabled === '1') {
if (LANGUAGE_DATA.current_language) {
self.objName = 'app/privacypolicy?lang=' + LANGUAGE_DATA.current_language;
}
self.load(function (resData) {
if (GLOBAL.isSecondaryAccount && (resData.OperatorEULAUpdate === 1 || resData.OperatorPrivacyPolicyUpdate === 1)) {
self.isPolicyUpdate = true;
} else if (!GLOBAL.isSecondaryAccount && (resData.IsPrivacyPolicyUpdate === 1 || resData.IsEULAUpdate === 1)) {
self.isPolicyUpdate = true;
} else {
self.isPolicyUpdate = false;
}
}, false);
}
},
popPrivacyNotice: function (callback) {
var curHref = window.location.href;
if (curHref.indexOf('guidesmall') !== -1) {
$('#guide_start_page').css('display', 'none');
$('#privacyStatement_updata_page').css('display', 'block');
$('#content_title').text(publicLang['privacy_notice_title_china']);
$('#content_title').attr('lang-id', 'privacy_notice_title_china');
EMUI.LanguageController.registerLanguageEx('agreenButton_description', 'agreen_tip_2', '%l1', 'device_user_agreement_title', EMUI.privacyNoticeInfoController.eulaUrl, '#007DFF');
EMUI.LanguageController.registerLanguageEx('agreenButton_description', 'agreen_tip_2', '%l2', 'device_privacy_statement_title', EMUI.privacyNoticeInfoController.privacyPolicyUrl, '#007DFF');
EMUI.LanguageController.transLangEx();
$('#content_privacy').secureHtml(EMUI.privacyNoticeInfoController.simplePrivacyPolicy);
$('#agreenButton_description').secureHtml($('#agreenButton_description').html().replace('%s', publicLang['index.agreeBtn']));
} else {
if (curHref.indexOf('index.html') === -1 && curHref.indexOf('guide.html') === -1 && $('body #guide_privacy_page').length === 0) {
var privacyHtml = '<div style="position: relative;">' +
'<div id="guide_privacy_page" class="out_win_content submit_background hide">' +
'    <div class="table_top" align="center"align="center">' +
'        <div id="guide_privacy_title" lang-id="" style="font-size:18px;padding-top:20px"></div>' +
'    </div>' +
'    <div class="border_left border_right color_background_white text-left" style="height:430px">' +
'        <div id="guide_privacy_box" style="height:310px">' +
'            <div id="guide_privacy_content" style="max-height:272px;padding-top:20px;margin-bottom:20px;"></div>' +
'        </div>' +
'    </div>' +
'    <div class="table_bottom"></div>' +
'</div>' +
'</div>';
$('body').secureAppend(privacyHtml);
var isPc = IsPC();
if (!isPc) {
$('#guide_privacy_page').removeClass('out_win_content').addClass('phone_out_win_content');
} else {
$('#guide_privacy_page').removeClass('phone_out_win_content').addClass('out_win_content');
}
}
var privacyContent = '<div style="padding-left:20px;padding-right:20px;"><div id="privacyTip" style="padding-bottom:5px"></div><div id="eulaTip"></div></div>';
var privacyLink = '';
if (GLOBAL.modules && GLOBAL.modules.chrlog_enable === '1') {
privacyLink += '<div id="guide_userExperience_content" style="padding-left:20px;padding-right:20px;padding-bottom:16px;">\
<table cellpadding="0" cellspacing="0" frame="void" rules="none">\
<tr>\
<td>\
<div id="user_experience_switch" class="clearboth check_on" onclick="EMUI.userBehaviorController.switchUserExpCheckbox(this)"></div>\
</td>\
<td>\
<div class="margin-left-10" id="user_experience_label"></div>\
</td>\
</tr>\
</table>\
</div>'
}
privacyLink += '<div id="agreen_tips" lang-id="" style="padding-left:20px;padding-right:20px;"></div>'
var privacyBtn = '<div align="center" style="margin:0 auto;margin-top:50px;">\
<button id="privacyDisagreen" lang-id="" class="btn_normal_short"></button>\
<button id="privacyAgreen" lang-id="" class="btn_normal_short margin-left-15"></button>\
</div>';
if (EMUI.GuideController) {
EMUI.GuideController.hideAllPage();
}
if ($('#guide_privacy_content .scroll_text').length === 0) {
EMUI.Scroll.initScroll('#guide_privacy_content');
}
if ($('#guide_privacy_content #privacyTip').length === 0) {
$('#guide_privacy_content .scroll_text').secureHtml(privacyContent);
}
if ($('#guide_privacy_page #agreen_tips').length === 0) {
$('#guide_privacy_box').secureAppend(privacyLink);
}
if ($('#guide_privacy_page #privacyAgreen').length === 0) {
$('#guide_privacy_box').secureAfter(privacyBtn);
}
$('div[id^="login_back_ground_"]').hide();
$('#guide_privacy_page').show();
EMUI.privacyNoticeInfoController.privacyFirstPage();
if (callback) {
EMUI.privacyNoticeController.callback = callback;
}
if (curHref.indexOf('guidesmall.html') === -1 && curHref.indexOf('guide.html') === -1 && curHref.indexOf('index.html') === -1) {
$('#submit_fade').show();
}
}
},
privacyFirstPage: function () {
$('#privacyTip').show();
$('#privacyTip').secureHtml(EMUI.privacyNoticeInfoController.simplePrivacyPolicy);
$('#eulaTip').hide();
$('#privacyDisagreen').attr('lang-id', 'common_cancel');
$('#privacyDisagreen').text(publicLang['common_cancel']);
$(document).off('click', '#privacyDisagreen');
$(document).on('click', '#privacyDisagreen', EMUI.privacyNoticeController.disagreePrivacyNotice);
if (GLOBAL.deviceInfo && GLOBAL.deviceInfo.restore_default_status === '1' && GLOBAL.modules && GLOBAL.modules.china_region_enable !== '1') {
$('#privacyAgreen').attr('lang-id', 'guide.next');
$('#privacyAgreen').text(publicLang['guide.next']);
$(document).off('click', '#privacyAgreen');
$(document).on('click', '#privacyAgreen', EMUI.privacyNoticeInfoController.privacySecondPage);
} else {
$('#privacyAgreen').attr('lang-id', 'index.agreeBtn');
$('#privacyAgreen').text(publicLang['index.agreeBtn']);
$(document).off('click', '#privacyAgreen');
$(document).on('click', '#privacyAgreen', EMUI.privacyNoticeController.agreePrivacyNotice);
}
if (GLOBAL.deviceInfo && GLOBAL.deviceInfo.restore_default_status === '1') {
if (GLOBAL.modules && GLOBAL.modules.china_region_enable === '1') {
EMUI.LanguageController.registerLanguageEx('agreen_tips', 'agreen_tip_2', '%l1', 'device_user_agreement_title', EMUI.privacyNoticeInfoController.eulaUrl, '#007DFF');
EMUI.LanguageController.registerLanguageEx('agreen_tips', 'agreen_tip_2', '%l2', 'device_privacy_statement_title', EMUI.privacyNoticeInfoController.privacyPolicyUrl, '#007DFF');
} else {
EMUI.LanguageController.registerLanguageEx('agreen_tips', 'understand_tip_1', '%l', 'privacy_here', EMUI.privacyNoticeInfoController.privacyPolicyUrl, '#007DFF');
}
} else {
EMUI.LanguageController.registerLanguageEx('agreen_tips', 'agreen_tip_2', '%l1', 'device_user_agreement_title', EMUI.privacyNoticeInfoController.eulaUrl, '#007DFF');
EMUI.LanguageController.registerLanguageEx('agreen_tips', 'agreen_tip_2', '%l2', 'device_privacy_statement_title', EMUI.privacyNoticeInfoController.privacyPolicyUrl, '#007DFF');
}
if (GLOBAL.modules && GLOBAL.modules.chrlog_enable === '1') {
EMUI.userBehaviorController.initUserExperience('guide_userExperience_content');
$('#guide_privacy_content').css('max-height', '200px');
EMUI.userBehaviorController.load(null, false);
EMUI.userBehaviorController.initUserExperienceSwitch('user_experience_switch', 'check_off', 'check_on');
EMUI.LanguageController.registerLanguageEx('user_experience_label', 'IDS_user_experience_label', '%l', 'menu.userExperience', EMUI.privacyNoticeInfoController.userExperienceUrl, '#007DFF');
}
if (GLOBAL.modules && GLOBAL.modules.china_region_enable === '1') {
$('#guide_privacy_title').text(publicLang['privacy_notice_title_china']);
$('#guide_privacy_title').attr('lang-id', 'privacy_notice_title_china');
} else {
$('#guide_privacy_title').text(publicLang['privacy_notice_title_oversea']);
$('#guide_privacy_title').attr('lang-id', 'privacy_notice_title_oversea');
}
EMUI.LanguageController.transLangEx();
$('#agreen_tips').secureHtml($('#agreen_tips').html().replace('%s', publicLang['index.agreeBtn']));
EMUI.Scroll.initScroll('#guide_privacy_content');
},
privacySecondPage: function () {
$('#eulaTip').secureHtml(EMUI.privacyNoticeInfoController.simpleEula);
$('#privacyTip').hide();
$('#guide_userExperience_content').hide();
$('#guide_privacy_content').attr('max-height', '220px');
$('#eulaTip').show();
$('#guide_privacy_title').text(publicLang['user_agreement_title']);
$('#guide_privacy_title').attr('lang-id', 'user_agreement_title');
EMUI.LanguageController.registerLanguageEx('agreen_tips', 'agreen_tip_1', '%l', 'user_agreement_title', EMUI.privacyNoticeInfoController.eulaUrl, '#007DFF');
EMUI.LanguageController.transLangEx();
$('#agreen_tips').secureHtml($('#agreen_tips').html().replace('%s', publicLang['index.agreeBtn']));
$('#privacyDisagreen').attr('lang-id', 'privacy_disagreen');
$('#privacyDisagreen').text(publicLang['privacy_disagreen']);
$(document).off('click', '#privacyDisagreen');
$(document).on('click', '#privacyDisagreen', EMUI.privacyNoticeInfoController.privacyFirstPage);
$('#privacyAgreen').attr('lang-id', 'index.agreeBtn');
$('#privacyAgreen').text(publicLang['index.agreeBtn']);
$(document).off('click', '#privacyAgreen');
$(document).on('click', '#privacyAgreen', EMUI.privacyNoticeController.agreePrivacyNotice);
}
});
EMUI.privacyNoticeController = EMUI.ObjController.extend({
objName: 'app/privacypolicy',
contentType: 'application/json;charset=UTF-8',
isSupportSaveInfo: false,
callback: null,
agreeButFailed: false,
agreePrivacyNotice: function () {
var requestPrivacy = {
data: {
Approve: '2',
Liscence: '0'
}
};
EMUI.privacyNoticeController.postData(requestPrivacy, function (result) {
if (result['errcode'] !== 0) {
if (window.location.href.indexOf('fileshare') !== -1 || window.location.href.indexOf('fileUpload') !== -1) {
} else {
EMUI.globalStatusController.load(function () { }, false);
}
EMUI.TokenObjController.load(function () { }, false);
EMUI.privacyNoticeController.agreePrivacyNotice();
} else {
$('#guide_privacy_page').hide();
if (!(GLOBAL.deviceInfo && GLOBAL.deviceInfo.restore_default_status === '1' && GLOBAL.modules && GLOBAL.modules.captivePortalGuide === '1')) {
if (window.location.href.indexOf('upgraderedirect.html') !== -1) {
EMUI.indexAutoUpgradeController.sendAutoUpg(true);
} else {
EMUI.indexAutoUpgradeController.sendAutoUpg();
}
}
if (GLOBAL.modules && GLOBAL.modules.chrlog_enable === '1') {
EMUI.userBehaviorController.submitGuideUserExpData();
}
if (window.location.href.indexOf('guidesmall') !== -1) {
$('#privacyStatement_updata_page').css('display', 'none');
} else if (window.location.href.indexOf('guide.html') !== -1) {
$('#privacy_notice_content').hide();
} else {
}
if (window.location.href.indexOf('guide.html') !== -1 || window.location.href.indexOf('guidesmall') !== -1) {
$('#submit_fade').hide();
if (EMUI.privacyNoticeController.callback) {
EMUI.privacyNoticeController.callback();
}
EMUI.GuideController.loginNext();
} else {
if (EMUI.privacyNoticeController.callback) {
EMUI.privacyNoticeController.callback();
return;
}
window.location.href = './content.html#home';
}
}
}, false);
},
disagreePrivacyNotice: function () {
if (window.location.href.indexOf('guidesmall') !== -1) {
var requestPrivacy = {
data: {
Approve: '0',
Liscence: '0'
}
};
EMUI.privacyNoticeController.postData(requestPrivacy, function () {
$('#privacyStatement_updata_page').css('display', 'none');
$('#guide_start_page').css('display', 'block');
EMUI.userBehaviorController.initUserExperienceSwitch('user_experience_switch', 'guide_check_off', 'guide_check_on');
$('#autoUpg_checkBox').removeClass('guide_check_off');
$('#autoUpg_checkBox').addClass('guide_check_on');
$('#autoUpg_checkBox').removeAttr('src');
$('#autoUpg_checkBox').attr('src', '../res/ic_check_on_normal.png');
EMUI.GuideController.footerPosition();
}, false);
} else {
var requestPrivacy = {
data: {
Approve: '0',
Liscence: '0'
}
};
EMUI.privacyNoticeController.postData(requestPrivacy, function () {
window.location.reload();
}, false);
}
}
});
EMUI.CurrenLangObjController = EMUI.ObjController.extend({
objName: 'monitoring/converged-status',
matchLanguageExist: function (currentLang, langListArr) {
if (!EMUI.BasicInfoObjController.content) {
EMUI.BasicInfoObjController.load(null, false);
}
var productInfo = EMUI.BasicInfoObjController.content.response.classify;
LANGUAGE_DATA.current_language = 'en_us';
if ($.isArray(langListArr)) {
var arrayLen = langListArr.length;
for (var i = 0; i < arrayLen; i++) {
var langItem = langListArr[i];
if (langItem.replace(/-/, '_') === currentLang.replace(/-/, '_')) {
LANGUAGE_DATA.current_language = langListArr[i].replace(/-/, '_');
}
}
} else if (typeof (langListArr) !== 'undefined') {
LANGUAGE_DATA.current_language = langListArr.replace(/-/, '_');
}
if (GLOBAL.modules.safeinfo_enable === '1') {
if (typeof (LANGUAGE_DATA.safe_question_url_cpe) !== 'undefined' && productInfo === 'cpe') {
$('#safeinfo').attr('href', LANGUAGE_DATA.safe_question_url_cpe[LANGUAGE_DATA.current_language]);
} else if (typeof (LANGUAGE_DATA.safe_question_url_e5) !== 'undefined' && (productInfo === 'mobile-wifi' || productInfo === 'touch')) {
$('#safeinfo').attr('href', LANGUAGE_DATA.safe_question_url_e5[LANGUAGE_DATA.current_language]);
} else {
$('#safeinfo, #safeinfo_td').hide();
}
} else {
$('#safeinfo, #safeinfo_td').hide();
}
},
adapterPrivacyurl: function () {
EMUI.systemDeviceInfoObjController.load(null, false);
if (!EMUI.devmanageCapacityObjController.content) {
EMUI.devmanageCapacityObjController.load(null, false);
}
EMUI.privacyNoticeInfoController.checkPrivacyNotice(null, false);
var devcap = EMUI.systemDeviceInfoObjController.content.devcap ? EMUI.systemDeviceInfoObjController.content.devcap.SoftwareCapability : '';
var devcap2 = EMUI.devmanageCapacityObjController.content.SoftwareCapability ? EMUI.devmanageCapacityObjController.content.SoftwareCapability : '';
var operatorName = '';
if (devcap['100'] === 1 || devcap['101'] === 1 || devcap['101'] === 2 || devcap['200'] === 1) {
if (LANGUAGE_DATA.current_language) {
EMUI.operatorInfoObjController.objName = 'app/operatorinfo?lang=' + LANGUAGE_DATA.current_language;
}
EMUI.operatorInfoObjController.load(null, false);
operatorName = EMUI.operatorInfoObjController.content.OperatorName;
}
var region = 'region=' + (GLOBAL.modules.china_region_enable !== undefined ? GLOBAL.modules.china_region_enable : '0');
var privacyPower = '?' + region +
((devcap['10'] !== undefined) ? ('&10=' + devcap['10']) : '') +
((devcap['25'] !== undefined) ? ('&25=' + devcap['25']) : '') +
((devcap['13'] !== undefined) ? ('&13=' + devcap['13']) : '') +
((devcap['100'] !== undefined) ? ('&100=' + devcap['100']) : '') +
((devcap['101'] !== undefined) ? '&101=' + devcap['101'] : '') +
((devcap['47'] !== undefined) ? '&47=' + devcap['47'] : '') +
((devcap2['81'] !== undefined) ? '&81=' + devcap2['81'] : '') +
((devcap['54'] !== undefined) ? '&54=' + devcap['54'] : '') +
((devcap['108'] !== undefined) ? '&108=' + devcap['108'] : '') +
((devcap['200'] !== undefined) ? '&200=' + devcap['200'] : '') +
(operatorName ? '&operatorName=' + xss(operatorName) : '');
var eulaPower = '?' + region;
var userExperienceUrlPower = '?' +
((devcap['54'] !== undefined) ? '54=' + devcap['54'] : '') +
((devcap['108'] !== undefined) ? '&108=' + devcap['108'] : '');
EMUI.privacyNoticeInfoController.simpleEula = privacyXss(EMUI.privacyNoticeInfoController.content.SimpleEULA, '<br />');
EMUI.privacyNoticeInfoController.simplePrivacyPolicy = privacyXss(EMUI.privacyNoticeInfoController.content.SimplePrivacyPolicy, '<br />');
var privacyUrl = LANGUAGE_DATA.current_language ? '/policy/html/privacy/privacyPolicy-lang.html'.replace('lang', LANGUAGE_DATA.current_language) : '/policy/html/privacy/privacyPolicy-en_us.html';
var eulaUrl = LANGUAGE_DATA.current_language ? '/policy/html/protocol/protocol-lang.html'.replace('lang', LANGUAGE_DATA.current_language) : '/policy/html/protocol/protocol-en_us.html';
var userExperienceUrl = LANGUAGE_DATA.current_language ? '/policy/html/userexperience/UserExperienceProgram-lang.html'.replace('lang', LANGUAGE_DATA.current_language) : '/policy/html/userexperience/UserExperienceProgram-en_us.html';
EMUI.privacyNoticeInfoController.privacyPolicyUrl = privacyUrl + privacyPower + '&r=' + Math.random();
EMUI.privacyNoticeInfoController.eulaUrl = eulaUrl + eulaPower + '&r=' + Math.random();
EMUI.privacyNoticeInfoController.userExperienceUrl = userExperienceUrl + userExperienceUrlPower + '&r=' + Math.random();
$('#footer_privacyPolicy').attr('href', EMUI.privacyNoticeInfoController.privacyPolicyUrl);
$('#footer_userAgreement').attr('href', EMUI.privacyNoticeInfoController.eulaUrl);
if ($('#guide_privacy_page').length > 0 && $('#guide_privacy_page').css('display') !== 'none') {
if ($('#guide_privacy_content #privacyTip').length > 0 && $('#guide_privacy_content #privacyTip').css('display') !== 'none') {
EMUI.privacyNoticeInfoController.privacyFirstPage();
}
if ($('#guide_privacy_content #eulaTip').length > 0 && $('#guide_privacy_content #eulaTip').css('display') !== 'none') {
EMUI.privacyNoticeInfoController.privacySecondPage();
}
}
},
getsuccessProc: function (data) {
var lang = data.response.CurrentLanguage.replace(/-/, '_');
var support_usermanual_language_list = $.makeArray(LANGUAGE_DATA.usermanual_language_list.support_language.language);
var default_usermanual_language = LANGUAGE_DATA.usermanual_language_list.default_language;
var helpAskqUrl = '../usermanual/' + default_usermanual_language + '/usermanual/faq_plugin/web_faq_topic_00001.html';
for (var loop = 0; loop < support_usermanual_language_list.length; loop++) {
if (data.response.CurrentLanguage === support_usermanual_language_list[loop]) {
helpAskqUrl = '../usermanual/' + support_usermanual_language_list[loop] + '/usermanual/faq_plugin/web_faq_topic_00001.html';
}
}
$('#help_href').attr('href', helpAskqUrl);
$('#help_href div:last-child').attr('lang-id', 'footer.faqs');
$('#help_href').show();
this.matchLanguageExist(data.response.CurrentLanguage, LANGUAGE_DATA.supportted_languages);
getLang(lang, function () {
if (GLOBAL.modules !== 'undefined' && GLOBAL.modules.dualwan_spread_name === '1') {
publicLang['menu.dualnetlink'] = publicLang['menu.dualband'];
publicLang['bridge_mode_automatic_switch_prompt'] = publicLang['bridge_mode_automatic_switch_prompt_dualband'];
}
generateLanguageSelect();
showNationalLang();
getGlobalConfig();
if (GLOBAL.config.delete_qrcode_enable && GLOBAL.config.delete_qrcode_enable === '1') {
$('.color_descroption_gray[lang-id=ailife_download]').parent().hide();
$('.color_descroption_gray[lang-id=hilink_download]').parent().hide();
$('.color_descroption_gray[lang-id=smarthome_download]').parent().hide();
}
if (GLOBAL.config.headaddbackground &&
GLOBAL.config.headaddbackground == '1') {
$('.headcontainer').addClass("headcontainernew");
$('#topmenucontainer').addClass("topmenucontainernew");
$('.onePageTitle').addClass("onePageTitlenew");
$('#language_info').addClass("language_infonew");
}
EMUI.LanguageController.transLang();
EMUI.LanguageController.transLangEx();
EMUI.LanguageController.adapterCss(lang);
EMUI.CurrenLangObjController.adapterPrivacyurl();
$('#footer_copyright').html(publicLang['footer.copyright.str'].replace('%d', xss(GLOBAL.config.copyright)));
$('#page_footer').show();
});
if ($('#emui_content_pop_win').css('display') !== 'none') {
showPopWin();
}
}
});
EMUI.LanguageController = EMUI.ObjController.extend({
objName: 'language/current-language',
isSupportSaveInfo: false,
regArray: [],
regFunction: [],
regArrayEx: [],
registerLanguage: function () {
var argLen = arguments.length;
if (argLen < 3) {
return;
}
var htmlId = arguments[0];
var resId = arguments[1];
var para = arguments[2];
var item = {};
var currReg = this.regArray;
var currRegLen = currReg.length;
var isFound = false;
for (var i = 0; i < currRegLen; i++) {
if (currReg[i]['htmlId'] === htmlId) {
this.regArray[i]['resId'] = resId;
this.regArray[i]['para'] = para;
isFound = true;
}
}
if (!isFound) {
item.htmlId = htmlId;
item.resId = resId;
item.para = para;
this.regArray.push(item);
}
},
registerLanguageEx: function (htmlId, resId, parastr, paravalue, paralink, strColor) {
if (!htmlId || !resId || !parastr || !paravalue) {
return;
}
if (parastr.indexOf('%l') !== -1
&& !paralink) {
return;
}
var item = {};
var currReg = this.regArrayEx;
var currRegLen = currReg.length;
for (var i = 0; i < currRegLen; i++) {
if (currReg[i]['htmlId'] === htmlId) {
item = currReg[i];
if (item.resId !== resId) {
currReg.splice(i, 1);
break;
}
for (var j = 0; j < item.para.length; j++) {
if (item.para[j].parastr === parastr) {
item.para.splice(j, 1);
break;
}
}
var temppara = creatParas(parastr, paravalue, paralink, strColor);
item.para.push(temppara);
return;
}
}
item = {};
item.htmlId = htmlId;
item.resId = resId;
item.para = [];
item.para.push(creatParas(parastr, paravalue, paralink, strColor));
currReg.push(item);
return;
function creatParas(str, value, link, strColor) {
var para = {};
para.parastr = str;
para.paravalue = value;
para.strColor = strColor;
if (str.indexOf('%l') !== -1) {
para.paralink = link;
}
return para;
}
},
registerFunction: function (callback) {
if (callback && typeof callback === 'function') {
this.regFunction.push(callback);
}
},
transLang: function () {
var currReg = this.regArray;
var currRegLen = currReg.length;
var i = 0;
for (i = 0; i < currRegLen; i++) {
var item = currReg[i];
if (publicLang[item.resId].indexOf('%d') >= 0) {
$('#' + item['htmlId']).html(publicLang[item.resId].replace('%d', xss(item.para)));
} else if (publicLang[item.resId].indexOf('%s') >= 0) {
$('#' + item['htmlId']).html(publicLang[item.resId].replace('%s', publicLang[xss(item.para)] ? publicLang[xss(item.para)] : xss(item.para)));
}
}
currReg = this.regFunction;
currRegLen = currReg.length;
for (i = 0; i < currRegLen; i++) {
var functionItem = currReg[i];
if (functionItem && typeof functionItem === 'function') {
functionItem();
}
}
},
transLangEx: function () {
var currReg = this.regArrayEx;
var currRegLen = currReg.length;
for (var i = 0; i < currRegLen; i++) {
var item = currReg[i];
var result = publicLang[item.resId];
for (var j = 0; j < item.para.length; j++) {
var temppara = item.para[j];
if (temppara.parastr.indexOf('$') > -1) {
var re = temppara.parastr;
} else {
var re = new RegExp(temppara.parastr, 'g');
}
var paraValueStr = '';
if (publicLang[xss(temppara.paravalue)]) {
paraValueStr = publicLang[xss(temppara.paravalue)];
} else {
paraValueStr = xss(temppara.paravalue);
}
if (temppara.parastr.indexOf('%l') === -1) {
result = result.replace(re, paraValueStr);
} else {
var templateData = {
ParavalueId: temppara.paravalue
}
var linkhtml = '<a class="selectmenu" href="' + xss(temppara.paralink) + '" id={{ParavalueId}} rel="noopener noreferrer" target="_self" style="">'
+ paraValueStr
+ '</a>';
if (temppara.strColor) {
var linkhtml = '<a href="' + xss(temppara.paralink) + '" id={{ParavalueId}} rel="noopener noreferrer" target="_blank" style="color:' + temppara.strColor + ';text-decoration:underline;">'
+ paraValueStr
+ '</a>';
}
result = result.replace(re, linkhtml);
}
}
$('#' + item['htmlId']).secureHtml(result, templateData);
}
},
setLanguage: function (lang) {
var self = this;
var langObj = {
CurrentLanguage: lang
};
this.postData(langObj, function (data) {
if (data.type === 'error') {
EMUI.TokenObjController.load(function () {
}, false);
self.setLanguage(lang);
}
EMUI.CurrenLangObjController.load();
if (typeof gMenu !== 'undefined') {
if (lang === 'ar-sa' || lang === 'he-il' || lang === 'fa-fa') {
$('#menucontents').css('right', $('.headcontainer').css('margin-left'));
} else {
$('#menucontents').css('left', $('.headcontainer').css('margin-left'));
}
}
if (lang === 'de-de' || lang === 'no-no' || lang === 'sk-sk') {
$(".file_input_on").css('font-size', '12px');
}
$('#language_select_list').hide();
});
},
adapterCss: function (lang) {
$('link').each(function (index, element) {
var link = $(element).attr('href');
var newLink = '';
if (link.indexOf('ar_') !== -1) {
if (lang !== 'ar_sa' && lang !== 'he_il' && lang !== 'fa_fa') {
newLink = link.replace('../css/ar_', '../css/');
}
} else {
if (lang === 'ar_sa' || lang === 'he_il' || lang === 'fa_fa') {
newLink = link.replace('../css/', '../css/ar_');
}
}
if (newLink) {
$(element).attr('href', newLink);
}
});
EMUI.LanguageController.adapterleftLabelStyle();
},
adapterleftLabelStyle: function (para) {
var tag;
var selectorTag;
if (window.location.href.indexOf('/html/content.html') >= 0) {
tag = '#' + window.location.hash.substr(1) + '_page';
} else {
tag = 'body';
}
selectorTag = tag + ' .control-label:visible';
if (para) {
var otherTag = tag + ' .' + para + ' .control-label-win:visible';
selectorTag = selectorTag + ',' + otherTag;
}
$(selectorTag).each(function (index, element) {
if ($(element).height() > 25) {
$(element).css('margin-top', '0px')
} else {
$(element).css('margin-top', '8px')
}
});
}
});
EMUI.ModelSwitchController = EMUI.ObjController.extend({
objName: 'global/module-switch',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.modules = data.response;
if (GLOBAL.modules.staticdns_enabled && GLOBAL.modules.staticdns_enabled !== '0') {
GLOBAL.modules.dns_enabled = '1';
}
}
}
});
EMUI.LinkAddressController = EMUI.ObjController.extend({
objName: 'global/custommenu-url',
getsuccessProc: function (data) {
if (data.type === 'response') {
if (typeof data.response.custommenu_url !== 'undefined' && data.response.custommenu_url !== '') {
GLOBAL.modules.urlmenu_display_enable = '1';
}
}
}
});
EMUI.VoiperSwitchController = EMUI.ObjController.extend({
objName: 'voice/voiperstatus',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.modules.voiper_enable = data.response.voiper_enable;
}
}
});
EMUI.ModelOnekeySwitchController = EMUI.ObjController.extend({
objName: 'device/device-feature-switch',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.modules.onekeydiag_enabled = data.response.onekeydiag_enabled;
}
}
});
EMUI.clatSwitchController = EMUI.ObjController.extend({
objName: 'lan/switch-ipmode',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.ipmode = data.response.ipmode;
GLOBAL.switchmode = data.response.switchmode;
}
}
});
EMUI.myAccountController = EMUI.ObjController.extend({
objName: 'device/encryp_imsi_imei',
getsuccessProc: function (data) {
if (data.type === 'response') {
myAccountStatus.encryp_imsi = data.response.encryp_imsi;
myAccountStatus.encryp_imei = data.response.encryp_imei;
}
}
});
EMUI.ModelDialupSwitchController = EMUI.ObjController.extend({
objName: 'dialup/dialup-feature-switch',
voiceprofile_enabled: '',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.modules.tr069profile_enabled = data.response.tr069_profile_display;
GLOBAL.modules.iptvprofile_enabled = data.response.iptv_profile_display;
EMUI.ModelDialupSwitchController.voiceprofile_enabled = data.response.voice_profile_display;
GLOBAL.modules.wanmanagement_enabled = data.response.multi_wan_enabled;
GLOBAL.modules.wanprofile_enabled = data.response.multi_wan_enabled;
}
}
});
EMUI.ModelFirewallSwitchController = EMUI.ObjController.extend({
objName: 'security/firewall-switch',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.modules.remotehttps_enabled = data.response.firewallhttpsremoteswitch;
}
}
});
EMUI.policyRoutrController = EMUI.ObjController.extend({
objName: 'ntwk/lan-wan-config',
getsuccessProc: function (data) {
if (data.type === 'response' && data.response.lan_service_type && data.response.lan_service_type !== '0') {
GLOBAL.modules.policyrouter_enabled = '1';
GLOBAL.modules.LanServiceType = data.response.lan_service_type;
}
}
});
EMUI.staticArpController = EMUI.ObjController.extend({
objName: 'dhcp/feature-switch',
getsuccessProc: function (data) {
if (data.type === 'response' && data.response.staticarp_display === '1') {
GLOBAL.modules.staticarp_enabled = '1';
}
}
});
EMUI.WifiFeatureSwitch = EMUI.ObjController.extend({
objName: 'wlan/wifi-feature-switch',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.wifiFeatureSwitch = data.response;
if (typeof GLOBAL.wifiFeatureSwitch.wifispecialcharenable === 'undefined') {
GLOBAL.wifiFeatureSwitch.wifispecialcharenable = '1';
}
if (typeof GLOBAL.wifiFeatureSwitch.chinesessid_enable === 'undefined') {
GLOBAL.wifiFeatureSwitch.chinesessid_enable = '0';
}
GLOBAL.modules.stawpsenabled = GLOBAL.wifiFeatureSwitch.stawpsenabled;
GLOBAL.modules.guestwifi_enable = data.response.guestwifi_enable;
GLOBAL.modules.dbho_special_enable = GLOBAL.wifiFeatureSwitch.dbho_special_enable;
}
}
});
EMUI.isSuportWpa3 = EMUI.ObjController.extend({
objName: 'wlan/multi-basic-settings',
getsuccessProc: function (data) {
if (data.type === 'response') {
var isSuportWpa3 = $.makeArray(data.response.Ssids.Ssid);
if (typeof isSuportWpa3[0].wifisupportsecmodelist === 'undefined' || isSuportWpa3[0].wifisupportsecmodelist === '') {
GLOBAL.modules.wifi_wpa3_enable = '0';
} else {
GLOBAL.modules.wifi_wpa3_enable = '1';
GLOBAL.modules.wifi_wpa3_list = isSuportWpa3[0].wifisupportsecmodelist;
}
}
}
});
EMUI.RebootController = EMUI.ObjController.extend({
objName: 'device/control',
isSupportSaveInfo: false,
isRebootReady: function () {
EMUI.HeartBeatObjController.refresh(GLOBAL.INDEX_PAGE_URL);
},
showRebootInfo: function (isShowdynamic) {
$('#submit_light').empty();
var submithtml = '<div class="common_win_top"></div><div align="center" class="margin_bottom_box2 color_Darkgray color_background_white" style="font-size:16px;width:508px;padding-top:28px;min-height:180px;">';
if (typeof isShowdynamic !== 'undefined' && isShowdynamic) {
submithtml += '<div style="padding-top:30px;"><img src="../res/submiting.gif" /></div>'
+ '<div style="padding-top:25px;" lang-id="content.device.reboot">' + publicLang['content.device.reboot'] + '</div>';
} else {
submithtml += '<div style="padding-left:30px; padding-right:30px">'
+ '<div class="restore_warning"></div>'
+ '<div lang-id="content.device.rebootnotice" style="font-size:16px;">' + publicLang['content.device.rebootnotice'] + '</div></div>'
+ '<div style="padding-top:40px;padding-bottom: 8px; min-height:44px"><div class="btn_normal_short pull-left public_reboot_left" onclick="EMUI.RebootController.rebootCancel()">' + publicLang['common_cancel'] + '</div>'
+ '<div class="btn_normal_short pull-left margin_left_12" onclick="EMUI.RebootController.rebootExe()">' + publicLang['content.continue'] + '</div></div>';
}
submithtml += '</div><div class="common_win_bottom"></div>';
$('#submit_light').html(submithtml);
var heightest = $(window).height();
var topheight = $(document).height();
if (heightest + 1 >= topheight) {
$('#submit_fade').css('height', heightest + 'px');
} else {
$('#submit_fade').css('height', topheight + 'px');
}
setTimeout(function () {
$('#submit_light').show();
$('#submit_fade').show();
}, 50);
},
rebootInfo: function () {
var hash = window.location.hash;
var self = this;
if (hash === '#sms') {
EMUI.smsSendAndSaveController.smsJumpSave(function () {
self.showRebootInfo();
});
} else {
this.showRebootInfo();
}
},
rebootCancel: function () {
$('#submit_light').empty();
$('#submit_light').hide();
$('#submit_fade').hide();
},
rebootExe: function () {
var self = this;
self.checkVoiceBusyApi();
var request = {
Control: 1
};
this.showRebootInfo(true);
self.postData(request, function (data) {
if (self.isAjaxReturnOK(data)) {
clearInterval(documentInterval);
documentInterval = null;
var rebootHash = window.location.hash;
rebootHash = rebootHash.substring(1, rebootHash.length);
if (window[rebootHash + 'Destruction']) {
window[rebootHash + 'Destruction']();
}
EMUI.HeartBeatObjController.stop();
self.isRebootReady();
} else {
}
});
},
checkVoiceBusyState: function () {
var monitoringStatus = {};
getAjaxData('api/monitoring/status', function (ret) {
if (ret.type === 'response') {
monitoringStatus = ret.response;
}
}, {
sync: true
});
if (monitoringStatus && monitoringStatus.voice_busy && monitoringStatus.voice_busy === '1') {
gotoPageWithoutHistory('../html/voicebusy.html');
}
},
checkVoiceBusyApi: function () {
var voiceBusyStatus = {};
if (GLOBAL.voiceBusyNotice && GLOBAL.voiceBusyNotice === '1') {
getAjaxData('api/voice/voicebusy', function (busyRet) {
if (busyRet.type === 'response') {
voiceBusyStatus = busyRet.response;
}
}, {
sync: true
});
if (voiceBusyStatus && voiceBusyStatus === 'Busy') {
gotoPageWithoutHistory('../html/voicebusy.html');
}
}
}
});
EMUI.LoginStateController = EMUI.ObjController.extend({
objName: 'user/state-login',
loginState: '',
userAccount: '',
sameWithWifiPwd: '',
historyLoginEnable: false,
rsapadingtype: '',
getsuccessProc: function (data) {
var responceData = data['response'];
this.loginState = responceData['State'];
GLOBAL.firstlogin = responceData['firstlogin'];
this.historyLoginEnable = responceData['history_login_flag'];
this.userAccount = responceData['Username'];
this.sameWithWifiPwd = responceData['wifipwdsamewithwebpwd'];
if (responceData['guidemodifypwdpageflag'] !== undefined) {
GLOBAL.guideModifyPwd = responceData['guidemodifypwdpageflag'];
}
if (responceData['forceskipguide'] !== undefined) {
GLOBAL.forceSkipGuide = responceData['forceskipguide'];
}
if (responceData.rsapadingtype) {
this.rsapadingtype = responceData['rsapadingtype'];
}
}
});
EMUI.customHistoryLoginController = EMUI.ObjController.extend({
objName: 'user/history-login',
getsuccessProc: function (data) {
var historyInfo = data['response'];
var lastLoginIp = historyInfo['last_login_ipaddr'];
var lastLoginTime = historyInfo['last_login_time'];
var lastLoginState = historyInfo['last_login_state'];
sessionStorage.setItem('lastLoginIp', lastLoginIp);
sessionStorage.setItem('lastLoginTime', lastLoginTime);
sessionStorage.setItem('lastLoginState', lastLoginState);
}
});
EMUI.guideHomePageRedirectController = EMUI.ObjController.extend({
objName: 'redirection/homepage',
getsuccessProc: function (data) {
if (data['type'] === 'response') {
var responseData = data['response'];
if ('1' == responseData.EnableRedirection) {
var homepage_url = null;
if (responseData.Homepage.length > 4 && responseData.Homepage.toLowerCase().substring(0, 4) == 'http') {
homepage_url = responseData.Homepage;
} else {
homepage_url = 'http://' + responseData.Homepage;
}
gotoPageWithoutHistory(homepage_url);
} else {
window.location.href = './content.html#home';
}
} else {
window.location.href = './content.html#home';
}
}
});
EMUI.indexHomePageRedirectController = EMUI.ObjController.extend({
objName: 'redirection/homepage',
getsuccessProc: function (data) {
if (data['type'] === 'response') {
var responseData = data['response'];
if ('1' == responseData.EnableRedirection) {
var homepage_url = null;
if (responseData.Homepage.length > 4 && responseData.Homepage.toLowerCase().substring(0, 4) == 'http') {
homepage_url = responseData.Homepage;
} else {
homepage_url = 'http://' + responseData.Homepage;
}
gotoPageWithoutHistory(homepage_url);
} else {
indexInit();
}
} else {
indexInit();
}
}
});
EMUI.webWebFeatureController = EMUI.ObjController.extend({
objName: 'user/web-feature-switch',
isSuportSimplify: '',
suportPwdSame: '',
rememberPwd: '',
isSuportPwdRuleEnable: '',
controlAutoUpdataEnable: '',
getsuccessProc: function (data) {
var responceData = data['response'];
this.isSuportSimplify = responceData['web_pwd_simplify_enabled'];
this.suportPwdSame = responceData['wifi_web_pwd_same_enabled'];
this.rememberPwd = responceData['rememberpwd_enable'];
this.isSuportPwdRuleEnable = responceData['pwd_rule_enable'];
GLOBAL.modules.captivePortalGuide = responceData['captive_portal_guide_enable'];
this.controlAutoUpdataEnable = responceData['guide_auto_update_setting_enable'];
}
});
EMUI.webAndWifiRuleController = EMUI.ObjController.extend({
objName: 'user/rule',
webRule: '0',
webMinLength: '8',
webExcludeSet: '',
wifiRule: '0',
wifiMinLength: '8',
wifiExcludeSet: '',
getsuccessProc: function (data) {
if (data.type === 'response') {
var responceData = data['response'];
this.webRule = responceData['web_rule'];
this.webMinLength = responceData['web_min_len'];
this.webExcludeSet = responceData['web_exclude_set'];
this.wifiRule = responceData['wifi_rule'];
this.wifiMinLength = responceData['wifi_min_len'];
this.wifiExcludeSet = responceData['wifi_exclude_set'];
if (parseInt(this.webMinLength) < 8 || parseInt(this.webMinLength) > 32) {
this.webMinLength = 8;
}
if (parseInt(this.wifiMinLength) < 8 || parseInt(this.wifiMinLength) > 63) {
this.wifiMinLength = 8;
}
}
},
showLoginErrorMsg: function (divid, errorlangid, loginPwdMsg) {
var diverrorlangid = (divid + errorlangid).replace('.', '');
EMUI.LanguageController.registerLanguage(diverrorlangid, errorlangid, this.webMinLength);
$('#' + diverrorlangid).attr('lang-id', errorlangid);
$('#' + diverrorlangid).text(loginPwdMsg);
},
showModifyLoginErrorMsg: function (divid, errorlangid, loginPwdMsg) {
EMUI.LanguageController.registerLanguage(divid, errorlangid, this.webMinLength);
$('#' + divid).attr('lang-id', errorlangid);
$('#' + divid).text(loginPwdMsg);
},
showWifiEasyErrorMsg: function (divid, errorlangid, wifiPwdMsg) {
setTimeout(function () {
EMUI.LanguageController.registerLanguage(divid, errorlangid, this.wifiMinLength);
$('.' + divid).attr('lang-id', errorlangid);
$('.' + divid).text(wifiPwdMsg);
}, 200);
},
showWifiSecErrorMsg: function (divid, errorlangid, wifiPwdMsg) {
EMUI.LanguageController.registerLanguage(divid, errorlangid, this.wifiMinLength);
$('.' + divid).attr('lang-id', errorlangid);
$('.' + divid).text(wifiPwdMsg);
},
showWifiErrorMsg: function (divid, errorlangid) {
var diverrorlangid = (divid + errorlangid).replace('.', '');
var wifiPwdMsg = publicLang[errorlangid].replace('%d', this.wifiMinLength);
EMUI.LanguageController.registerLanguage(diverrorlangid, errorlangid, this.wifiMinLength);
$('#' + diverrorlangid).attr('lang-id', errorlangid);
$('#' + diverrorlangid).text(wifiPwdMsg);
},
hasSameStr: function (newPassword, pwdExcludeSet) {
var hasSameStrData = {
transStr: '',
isTrueOrFalse: false
};
hasSameStrData.transStr = pwdExcludeSet;
for (var a = 0; a < newPassword.length; a++) {
for (var b = 0; b < pwdExcludeSet.length; b++) {
if (newPassword[a] === pwdExcludeSet[b]) {
hasSameStrData.isTrueOrFalse = true;
}
}
}
return hasSameStrData;
}
});
EMUI.userBehaviorController = EMUI.ObjController.extend({
objName: 'diagnosis/user_behavior',
isSupportSaveInfo: false,
UserExpEnable: '',
submitData: {},
switchId: '',
boxId: '',
getsuccessProc: function (data) {
var responceData = data['response'];
this.UserExpEnable = responceData['chrlog_upload_enable'];
},
initUserExperienceSwitch: function (switchID, disabledClass, enableClass) {
var self = this;
self.switchId = switchID;
if (GLOBAL.deviceInfo && GLOBAL.deviceInfo.restore_default_status === '1') {
$('#' + switchID).addClass(enableClass).removeClass(disabledClass);
if (window.location.href.indexOf('guidesmall.html') !== -1) {
$('#user_experience_switch').removeAttr('src');
$('#user_experience_switch').attr('src', '../res/ic_check_on_normal.png');
}
} else {
if (self.UserExpEnable === '1') {
$('#' + switchID).addClass(enableClass).removeClass(disabledClass)
} else {
$('#' + switchID).addClass(disabledClass).removeClass(enableClass)
}
}
},
initUserExperience: function (id) {
var self = this;
self.boxId = id;
if (GLOBAL.modules.chrlog_enable && GLOBAL.modules.chrlog_enable === '1') {
$('#' + id).show();
} else {
$('#' + id).hide();
}
},
UserExperienceData: function (id) {
var self = this;
var classlist = $('#' + id).attr('class');
if (classlist.indexOf('_on') < 0) {
self.submitData = {
chrlog_upload_enable: '0'
}
} else {
self.submitData = {
chrlog_upload_enable: '1'
}
}
},
switchUserExpCheckbox: function (obj) {
if ($(obj).hasClass('check_on')) {
$(obj).removeClass('check_on');
$(obj).addClass('check_off');
} else {
$(obj).removeClass('check_off');
$(obj).addClass('check_on');
}
},
submitGuideUserExpData: function () {
EMUI.userBehaviorController.UserExperienceData('user_experience_switch');
EMUI.userBehaviorController.postData(EMUI.userBehaviorController.submitData, null, false);
}
});
EMUI.ping = (function () {
var PING_TIMEOUT = 2000;
var pingIsTimeout;
var pingStartTime;
var pingTimerID;
var pingIMG = new Image();
var pingipAddress = 0;
function startPing(ipAddress, redirecturl) {
pingipAddress = ipAddress;
pingIMG.src = 'http://' + pingipAddress + '/';
pingIMG.onload = pingIMG.onerror = function () {
clearTimeout(pingTimerID);
if (pingIsTimeout) {
return;
}
if (redirecturl) {
gotoPageWithoutHistory('http://' + pingipAddress + '/html/' + redirecturl);
} else {
gotoPageWithoutHistory('http://' + pingipAddress + '/html/' + GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL);
}
};
ping();
}
function pingTimeout() {
pingIsTimeout = true;
var strEnd = pingIMG.src.lastIndexOf('/');
pingIMG.src = pingIMG.src.substring(0, strEnd);
ping();
}
function ping() {
pingStartTime = +new Date();
pingIMG.src = pingIMG.src + pingStartTime;
pingIsTimeout = false;
pingTimerID = setTimeout(pingTimeout, PING_TIMEOUT);
}
return {
startPing: startPing
};
}());
EMUI.mainDeviceVersionController = EMUI.ObjController.extend({
objName: 'device/information'
});
EMUI.imsdisplayController = EMUI.ObjController.extend({
objName: 'voice/volte',
});
EMUI.popWinController = EMUI.Object.extend({
content: [],
isautoUpgChecked: false,
closeAll: function () {
var contentLength = this.content.length;
for (var i = 0; i < contentLength; i++) {
this.content[i]['isClose'] = true;
}
$('#emui_content_pop_win').hide();
},
closePopItem: function (moduleName) {
var contentLength = this.content.length;
for (var i = 0; i < contentLength; i++) {
if (this.content[i]['moduleName'] === moduleName) {
this.content[i]['isClose'] = true;
}
}
this.showPop();
showPopWin();
},
addPopItem: function (moduleName, scribInfoId, contentItem) {
if (typeof contentItem === 'undefined' && contentItem === '') {
return;
}
var isNeedShowAgain = false;
var scribInfo = '';
if (typeof scribInfoId !== 'undefined') {
scribInfo = scribInfoId;
}
var isExist = false;
var contentLen = this.content.length;
for (var i = 0; i < contentLen; i++) {
if (this.content[i]['moduleName'] === moduleName) {
if (contentItem !== this.content[i]['contentinfo']) {
this.content[i]['scribInfoId'] = scribInfo;
this.content[i]['contentinfo'] = contentItem;
this.content[i]['isClose'] = false;
isNeedShowAgain = true;
}
isExist = true;
break;
}
}
if (!isExist) {
var conItem = {};
conItem.moduleName = moduleName;
conItem.scribInfoId = scribInfo;
conItem.contentinfo = contentItem;
conItem.isClose = false;
isNeedShowAgain = true;
this.content.push(conItem);
}
if (isNeedShowAgain) {
this.showPop();
showPopWin();
}
},
toggleMessage: function (index) {
var arrowId = 'arrow_content_message_pop_' + index;
var messageId = 'body_content_message_pop_' + index;
for (var i = 0; i < this.content.length; i++) {
var contentItem = this.content[i];
if (contentItem['isClose'] === false && i !== index) {
$('#body_content_message_pop_' + i).hide();
$('#arrow_content_message_pop_' + i).removeClass('menu_arrow_open').addClass('menu_arrow_close');
}
}
if ($('#' + arrowId).hasClass('menu_arrow_close')) {
$('#' + arrowId).removeClass('menu_arrow_close').addClass('menu_arrow_open');
} else {
$('#' + arrowId).removeClass('menu_arrow_open').addClass('menu_arrow_close');
}
$('#' + messageId).toggle();
showPopWin();
},
showPop: function () {
var self = this;
var contentLen = this.content.length;
if (contentLen === 0) {
$('#pop_win_content_area').empty();
$('#emui_content_pop_win').hide();
return;
}
var showContent = [];
var i = 0;
var openIndex = '';
var curHash = window.location.hash.substr(1);
for (i = 0; i < this.content.length; i++) {
var contentItem = this.content[i];
if (contentItem['isClose'] === false && contentItem['moduleName'].toLowerCase().indexOf(curHash) < 0) {
showContent.push(contentItem);
}
}
contentLen = showContent.length;
if (contentLen > 1) {
for (i = 0; i < contentLen; i++) {
var arrowId = 'arrow_content_message_pop_' + i;
if ($('#' + arrowId).hasClass('menu_arrow_open')) {
openIndex = i;
break;
}
}
}
$('#pop_win_content_area').empty();
$('#emui_pop_win_title').empty();
if (contentLen === 0) {
$('#pop_win_content_area').empty();
$('#emui_content_pop_win').hide();
return;
} else if (contentLen === 1) {
$('#pop_win_content_area').empty();
$('#emui_pop_win_title').empty();
$('#emui_pop_win_title').attr('lang-id', showContent[0]['scribInfoId']);
langStr('emui_pop_win_title', showContent[0]['scribInfoId']);
$('#pop_win_content_area').html(showContent[0]['contentinfo']);
} else {
var bacicHtml = [];
$('#emui_pop_win_title').attr('lang-id', 'device.new.message');
langStr('emui_pop_win_title', 'device.new.message');
for (i = 0; i < contentLen; i++) {
var classTop = 'border_top message_item_split';
if (i === 0) {
classTop = '';
}
var htmlItem = '<div id="content_message_pop_' + i + '" onclick="EMUI.popWinController.toggleMessage(' + i + ');" class="clearboth list_shared  pointer ' + classTop + '">'
+ '<div class="dev-table-ip ic_header_new pull-left"></div>'
+ '<div class="pull-left public_item_left" lang-id="' + showContent[i]['scribInfoId'] + '">' + publicLang[showContent[i]['scribInfoId']] + '</div>'
+ '<div id="arrow_content_message_pop_' + i + '" class="pull-right menu_arrow_close"></div></div><div class="clearboth"></div>'
+ '<div class="border_top hide" id="body_content_message_pop_' + i + '" style="margin-top:20px;"><div style="margin-top:20px;">' + showContent[i]['contentinfo'] + '</div></div><div class="clearboth"></div>';
bacicHtml.push(htmlItem);
}
bacicHtml = '<div style="margin-bottom:10px;">' + bacicHtml.join('') + '</div>';
$('#pop_win_content_area').html(bacicHtml);
}
$(showContent).each(function (i, value) {
if (value.moduleName === 'upgrade' && GLOBAL.modules.china_region_enable === '1') {
self.autoUpgStatus();
}
});
$('#emui_content_pop_win').show();
if (openIndex !== '') {
this.toggleMessage(openIndex);
}
},
autoUpgStatus: function () {
if (!this.isautoUpgChecked) {
EMUI.indexAutoUpgradeController.load(null, false);
this.isautoUpgChecked = true;
}
if (EMUI.indexAutoUpgradeController.isOpenAutoUpg === 1) {
$('#index_autoUpg').show();
$('#index_autoUpg_check').attr('class', 'check_on');
} else if (EMUI.indexAutoUpgradeController.isOpenAutoUpg === 0) {
$('#index_autoUpg').show();
$('#index_autoUpg_check').attr('class', 'check_off');
} else {
$('#index_autoUpg').hide();
}
}
});
EMUI.CBSNewListController = EMUI.ObjController.extend({
objName: 'sms/get-cbsnewslist',
getsuccessProc: function (data) {
if (data.type === 'response') {
var responceData = data['response'];
var newCBSList = responceData['cbsnewslist'];
if (newCBSList !== null && newCBSList !== '') {
EMUI.popWinController.addPopItem('cbssettings', 'IDS_CBS_NewList', xss(newCBSList));
} else {
EMUI.popWinController.closePopItem('cbssettings');
}
}
}
});
EMUI.indexAutoUpgradeController = EMUI.ObjController.extend({
objName: 'online-update/autoupdate-config',
isSupportSaveInfo: false,
isOpenAutoUpg: '',
getsuccessProc: function (data) {
if (data['type'] !== 'response') {
$('#index_autoUpg').hide();
return;
}
if (data['response']['auto_update'] === '1') {
$('#index_autoUpg').hide();
} else {
if ($('#index_autoUpg').attr('class').indexOf('tagName_tr') > -1) {
$('#index_autoUpg').css('display', '');
} else {
$('#index_autoUpg').css('display', 'block');
}
if (device_differentiation && device_differentiation == '0') {
EMUI.indexAutoUpgradeController.isOpenAutoUpg = 1;
} else {
var className = $('#index_autoUpg_check').attr('class');
if (className.substring(className.length - 3, className.length) === 'off') {
className = className.replace('off', 'on');
}
EMUI.indexAutoUpgradeController.isOpenAutoUpg = 1;
if (EMUI.BasicInfoObjController.content.response.restore_default_status !== '1') {
className = className.replace('on', 'off');
EMUI.indexAutoUpgradeController.isOpenAutoUpg = 0;
}
$('#index_autoUpg_check').attr('class', className);
$(document).on('click', '#index_autoUpg_check', EMUI.indexAutoUpgradeController.autoUpgSwitch);
}
}
},
autoUpgSwitch: function () {
if (window.location.href.indexOf('upgraderedirect.html') !== -1) {
return;
}
var className = $('#index_autoUpg_check').attr('class');
if (className.substring(className.length - 2, className.length) === 'on') {
className = className.replace('on', 'off');
EMUI.indexAutoUpgradeController.isOpenAutoUpg = 0;
} else {
className = className.replace('off', 'on');
EMUI.indexAutoUpgradeController.isOpenAutoUpg = 1;
}
$('#index_autoUpg_check').attr('class', className);
},
sendAutoUpg: function (fromjump) {
if (GLOBAL.modules.bbou_enabled !== '1') {
return;
}
if (EMUI.indexAutoUpgradeController.isOpenAutoUpg === '') {
return;
}
var self = this;
var request = {
auto_update: self.isOpenAutoUpg,
ui_download: 0
};
if (fromjump) {
request.auto_download_trigger = 2;
}
EMUI.TokenObjController.load(function () {
}, false);
self.postData(request, null, false);
}
});
EMUI.devmanageCapacityObjController = EMUI.ObjController.extend({
objName: 'system/devcapacity',
contentType: 'application/json;charset=UTF-8',
getsuccessProc: function (data) {
if (data && data.SoftwareCapability && data.SoftwareCapability[81] === 1) {
GLOBAL.modules.support_devcapacity = true;
} else {
GLOBAL.modules.support_devcapacity = false;
}
}
});
});
function changeLanguage(obj) {
var lang = $(obj).attr('option');
EMUI.LanguageController.setLanguage(lang);
}
function passwordRule1Check(pwd) {
var hasnum = 0;
var haslow = 0;
var hasup = 0;
var hasspe = 0;
if (!!pwd.match(/[0-9]/)) {
hasnum = 1;
}
if (!!pwd.match(/[a-z]/)) {
haslow = 1;
}
if (!!pwd.match(/[A-Z]/)) {
hasup = 1;
}
if (!!pwd.match(/\W/) || !!pwd.match(/[_]/)) {
hasspe = 1;
}
if (((hasnum + haslow + hasup) < 3) || hasspe) {
return false;
}
return true;
}
function passwordRule2Check(pwd) {
var hasnum = 0;
var haslow = 0;
var hasup = 0;
var hasspe = 0;
if (!!pwd.match(/[0-9]/)) {
hasnum = 1;
}
if (!!pwd.match(/[a-z]/)) {
haslow = 1;
}
if (!!pwd.match(/[A-Z]/)) {
hasup = 1;
}
if (!!pwd.match(/\W/) || !!pwd.match(/[_]/)) {
hasspe = 1;
}
if ((hasnum + haslow + hasup + hasspe) < 3) {
return false;
}
return true;
}
function passwordRule3Check(pwd) {
var hasnum = 0;
var haslow = 0;
var hasup = 0;
var hasspe = 0;
if (!!pwd.match(/[0-9]/)) {
hasnum = 1;
}
if (!!pwd.match(/[a-z]/)) {
haslow = 1;
}
if (!!pwd.match(/[A-Z]/)) {
hasup = 1;
}
if (!!pwd.match(/\W/) || !!pwd.match(/[_]/)) {
hasspe = 1;
}
if ((hasnum + haslow + hasup + hasspe) < 2) {
return false;
}
return true;
}
function createHiLinkAppDownloadCancel() {
$('.hilinkapp_download_box').hide();
$('#submit_fade').hide();
}
function createHiLinkAppDownload() {
var outwin = $('.hilinkapp_download_box');
outwin.show();
$('#submit_fade').show();
var outwinheight = outwin.height();
outwin.css('margin-top', '-' + outwinheight / 2 + 'px');
var heightest = $(document).height();
$('#submit_fade').css('height', heightest + 'px');
$('#submit_fade').show();
outwin.show();
}
var security_info_cpe = '';
var security_info_e5 = '';
function getLangList() {
getConfigData('global/languagelist.xml', function ($xml) {
var langListRet = xml2object($xml);
if (langListRet.type === 'config') {
LANGUAGE_DATA.supportted_languages = langListRet.config.languages.language;
LANGUAGE_DATA.usermanual_language_list = langListRet.config.usermanual_language;
if (GLOBAL.modules.safeinfo_enable === '1' && langListRet.config.safe_question_url) {
LANGUAGE_DATA.safe_question_url_cpe = langListRet.config.safe_question_url.cpe;
LANGUAGE_DATA.safe_question_url_e5 = langListRet.config.safe_question_url.e5;
security_info_cpe = langListRet.config.safe_question_url.cpe;
security_info_e5 = langListRet.config.safe_question_url.e5;
}
}
}, {
sync: true
});
}
function getGlobalConfig(callback) {
getConfigData('global/config.xml', function ($xml) {
var globalConfig = xml2object($xml);
if (globalConfig.type === 'config') {
var lang = LANGUAGE_DATA.current_language.replace('_', '-');
if (globalConfig['config']['titles_langAdapter']) {
if (globalConfig['config']['titles_langAdapter'][lang]) {
gDeviceTitle = globalConfig['config']['titles_langAdapter'][lang];
} else {
gDeviceTitle = globalConfig['config']['titles_langAdapter']['en-us'];
}
} else {
gDeviceTitle = globalConfig['config']['title'];
}
if (globalConfig['config']['voice_busy_notice']) {
GLOBAL.voiceBusyNotice = globalConfig['config']['voice_busy_notice'];
} else {
GLOBAL.voiceBusyNotice = null;
}
if (globalConfig['config']['pinlock'] === '1') {
GLOBAL.modules.pinlock_Enabled = '0';
} else {
GLOBAL.modules.pinlock_Enabled = '1';
}
if (callback) {
callback(globalConfig['config']);
}
GLOBAL.config = globalConfig['config'];
GLOBAL.homedeviceinfo = globalConfig['config']['homedeviceinfo'];
document.title = gDeviceTitle;
if (device_differentiation == '0') {
if ($('.guide_index_title').length > 0) {
$('.guide_index_title').html(publicLang['guide.welcome'].replace('%s', xss(gDeviceTitle)));
}
} else {
if ($('.guide_step_start_title').length > 0) {
$('.guide_step_start_title').html(publicLang['guide.welcome'].replace('%s', xss(gDeviceTitle)));
}
}
initAppQrcode(globalConfig);
}
}, {
sync: true
});
}
function initAppQrcode(globalConfig) {
if (window.location.href.indexOf('guidesmall.html') != -1) {
if (globalConfig['config']['appmanagements']['enabled'] && globalConfig['config']['appmanagements']['enabled'] === '1') {
$('#app_install').attr('href', globalConfig['config']['appmanagements']['hilink']['domestic']);
}
if (globalConfig['config']['smarthomeapp']['enabled'] && globalConfig['config']['smarthomeapp']['enabled'] === '1') {
$('#app_install').attr('href', globalConfig['config']['smarthomeapp']['smartapp']);
}
} else {
if (globalConfig['config']['appmanagements']['enabled'] && globalConfig['config']['appmanagements']['enabled'] === '1') {
$('#qrcodeaddr, #commends_hilinkapp_download, .hilinkapp_download_href').attr('href', globalConfig['config']['appmanagements']['hilink']['domestic']);
$('#qrcodeaddr, .hilinkapp_download_href').find('div').removeClass('smart_qrcode').addClass('hlink_qrcode');
$('.hilinkdown_left').attr('lang-id', 'hilink_download');
$('.hilinkdown_left').text(publicLang['hilink_download']);
$('.hilinkapp_string').attr('lang-id', 'index.qrcode');
$('.hilinkapp_string').text(publicLang['index.qrcode']);
$("[data-smarthome='qrcode']").attr("lang-id", 'index.qrcode');
$("[data-smarthome='qrcode']").text(publicLang['index.qrcode']);
$("[data-smarthome='download']").attr("lang-id", 'hilink_download');
$("[data-smarthome='download']").text(publicLang['hilink_download']);
}
if (globalConfig['config']['smarthomeapp']['enabled'] && globalConfig['config']['smarthomeapp']['enabled'] === '1') {
$('#qrcodeaddr, #commends_hilinkapp_download, .hilinkapp_download_href').attr('href', globalConfig['config']['smarthomeapp']['smartapp']);
$('#qrcodeaddr, .hilinkapp_download_href').find('div').removeClass('hlink_qrcode').addClass('smart_qrcode');
var  str1 = 'ailife_download';
var  str2 = 'index.ailife';
$('.hilinkdown_left').attr('lang-id', str1);
$('.hilinkdown_left').text(publicLang[str1]);
$('.hilinkapp_string').attr('lang-id', str2);
$('.hilinkapp_string').text(publicLang[str2]);
$("[data-smarthome='qrcode']").attr("lang-id", str2);
$("[data-smarthome='qrcode']").text(publicLang[str2]);
$("[data-smarthome='download']").attr("lang-id", str1);
$("[data-smarthome='download']").text(publicLang[str1]);
}
EMUI.webWebFeatureController.load(null, false);
if (GLOBAL.modules.captivePortalGuide === '1' && EMUI.BasicInfoObjController.content.response.restore_default_status === '1') {
$('.hilinkapp_download_box .hilinkapp_download_href').removeAttr('href');
$('.hilinkapp_download_box .hilinkapp_btn').hide();
}
}
}
function sdResolveCannotParseChar(xmlStr) {
if (typeof xmlStr !== 'undefined' && xmlStr !== null && xmlStr !== '') {
return xmlStr.replace(/(\&|\')/g, function ($0, $1) {
return {
'&': '&amp;',
"'": '&#39;'
}[$1];
});
}
return '';
}
function hasSpaceOrTabAtHead(str) {
if (str.indexOf(' ') === 0 || str.indexOf('\t') === 0) {
return true;
}
return false;
}
function wifiSsidResolveCannotParseChar(xmlStr) {
if (typeof xmlStr !== 'undefined' && xmlStr !== null && xmlStr !== '') {
return xmlStr.replace(/(\&|\'|\"|\>|\<)/g, function Rep($0, $1) {
return {
'&': '&amp;',
"'": '&apos;',
'"': '&quot;',
'<': '&lt;',
'>': '&gt;'
}[$1];
});
}
return '';
}
window.xss = function (xmlStr) {
if ($.type(xmlStr) === 'number') {
return xmlStr;
}
if ($.type(xmlStr) !== 'string') {
return '';
}
return xmlStr.replace(/(\&|\'|\"|\>|\<|\/|\(|\))/g, function Rep($0, $1) {
return {
'&': '&amp;',
"'": '&#39;',
'"': '&quot;',
'<': '&lt;',
'>': '&gt;',
'/': '&#x2F;',
'(': '&#40;',
')': '&#41;'
}[$1];
});
};
window.xssDecode = function (xmlStr) {
return xmlStr.replace(/(&lt;|&gt;|&amp;|&#39;|&quot;|&#x2F;|&#40;|&#41;)/g, function ($0, $1) {
return {
'&lt;': '<',
'&gt;': '>',
'&amp;': '&',
'&#39;': "'",
'&quot;': '\"',
'&#x2F;': '/',
'&#40;': '(',
'&#41;': ')'
}[$1];
});
};
window.privacyXss = function (xssStr, splitStr) {
if ($.type(xssStr) !== 'string' || $.type(splitStr) !== 'string') {
return '';
}
var xssArr = xssStr.split(splitStr);
for (var i = 0; i < xssArr.length; i++) {
xssArr[i] = xss(xssArr[i]);
}
return xssArr.join(splitStr);
};
function isButtonEnable(buttonId) {
var $button = $('#' + buttonId);
if ($button) {
return !($button.hasClass('btn_disabled'));
}
return false;
}
function resolveXMLEntityReference(str) {
if (typeof str !== 'undefined' && str !== null && str !== '') {
return str.replace(/(\'|\&|\"|\>|\<|\/|\(|\))/g, function Rep($0, $1) {
return {
"'": '&#39;',
'&': '&amp;',
'"': '&quot;',
'<': '&lt;',
'>': '&gt;',
'/': '&#x2F;',
'(': '&#40;',
')': '&#41;'
}[$1];
});
}
return '';
}
function xssResolveHtmlReturnChar(xmlStr) {
if (typeof xmlStr !== 'undefined' && xmlStr !== null && xmlStr !== '') {
return xmlStr.replace(/(\'|\"|\/|\(|\))/g, function Rep($0, $1) {
return {
"'": '&apos;',
'"': '&quot;',
'/': '&#x2F;',
'(': '&#40;',
')': '&#41;'
}[$1];
});
}
return '';
}
function isPlusInteger(value) {
if (/^\d+$/.test(value) && parseInt(value, 10) >= 0) {
return true;
}
return false;
}
function showSelectedValue(selectid, selectval) {
var selectlist = selectid + '_list';
var selectClass = ' .select_medium';
if ($('#' + selectlist).children().hasClass('spanner_medium')) {
selectClass = ' .spanner_medium';
}
var selectitems = $('#' + selectlist + selectClass);
var selectLength = selectitems.length;
var selectparent = $('#' + selectid);
for (var loop = 0; loop < selectLength; loop++) {
var selectitem = $(selectitems[loop]);
var selectvalue = selectitem.attr('option') || selectitem.find('span').attr('option');
var description = selectitem.text() || selectitem.find('span').text();
var selectlangid = selectitem.attr('lang-id') || selectitem.find('span').attr('lang-id') || '';
if (selectval === selectvalue) {
if (selectparent[0].localName !== 'input' && selectparent[0].localName !== 'textarea') {
selectparent.attr('value', selectval);
} else {
selectparent.val(selecthtml);
}
selectparent.text(description);
selectparent.attr('lang-id', selectlangid);
break;
}
}
}
function getTransation(langId) {
if (typeof publicLang === 'undefined') {
setTimeout(showNationalLang, 100);
return '<span lang-id="' + langId + '"></span>';
}
return '<span lang-id="' + langId + '">' + publicLang[langId] + '</span>';
}
function handleTemplate(template, data) {
var processed = template.replace(/{{.+?}}/g, function (match) {
var cmd = match.substr(2, match.length - 4);
if (cmd.substr(0, 2) === 't ') {
return getTransation(cmd.substr(2));
}
var evalValue = data;
cmd.split('.').forEach(function (key) {
if (!evalValue) {
return;
}
evalValue = evalValue[key];
});
if (typeof evalValue === 'number') {
return evalValue;
}
return xss(evalValue);
});
return processed;
}
function isValidIpAddress(address, flag) {
var addrParts = address.split('.');
if (addrParts.length !== 4) {
return false;
}
for (var i = 0; i < 4; i++) {
if (isNaN(addrParts[i])) {
return false;
}
if (addrParts[i] === '') {
return false;
}
if (addrParts[i].indexOf(' ') !== -1) {
return false;
}
if ((addrParts[i].indexOf('0') === 0) && (addrParts[i].length !== 1)) {
return false;
}
}
if (typeof flag === 'undefined') {
if ((addrParts[0] <= 0 || addrParts[0] === '127' || addrParts[0] > 223) ||
(addrParts[1] < 0 || addrParts[1] > 255) ||
(addrParts[2] < 0 || addrParts[2] > 255) ||
(addrParts[3] <= 0 || addrParts[3] >= 255)) {
return false;
}
} else if ((addrParts[0] <= 0 || addrParts[0] === '127' || addrParts[0] > 223) ||
(addrParts[1] < 0 || addrParts[1] > 255) ||
(addrParts[2] < 0 || addrParts[2] > 255) ||
(addrParts[3] < 0 || addrParts[3] > 255)) {
return false;
}
return true;
}
function spaceToNbsp(str) {
return str.replace(/ /g, '&nbsp;');
}
function nbspToSpace(str) {
return str.replace(/(\&nbsp;)/g, function ($0, $1) {
return {
'&nbsp;': ' '
}[$1];
}
);
}
function utilGetTimeString(timeVal) {
var timeString = '';
var tmpVal;
if (!timeVal) {
return '';
}
var timeInt = parseInt(timeVal, 10);
tmpVal = parseInt(timeInt / (60 * 60 * 24), 10);
if (tmpVal > 0) {
timeString += tmpVal;
var langId = 'public.day';
timeString += '<span lang-id="' + langId + '">' + publicLang[langId] + '</span>';
}
timeInt %= 60 * 60 * 24;
tmpVal = parseInt(timeInt / (60 * 60), 10);
if (tmpVal > 0) {
timeString += tmpVal;
if (tmpVal > 1) {
langId = 'public.hours';
} else {
langId = 'public.hour';
}
timeString += '<span lang-id="' + langId + '">' + publicLang[langId] + '</span>';
}
timeInt %= 60 * 60;
tmpVal = parseInt(timeInt / (60), 10);
if (tmpVal > 0) {
timeString += tmpVal;
if (tmpVal > 1) {
langId = 'public.minutes';
} else {
langId = 'public.minute';
}
timeString += '<span lang-id="' + langId + '">' + publicLang[langId] + '</span>';
}
timeInt %= 60;
tmpVal = parseInt(timeInt, 10);
if (tmpVal > 0) {
timeString += tmpVal;
if (tmpVal > 1) {
langId = 'public.seconds';
} else {
langId = 'public.second';
}
timeString += '<span lang-id="' + langId + '">' + publicLang[langId] + '</span>';
}
return timeString;
}
function resizeWindow() {
var winheight = $(window).height();
if (userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) ||
userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i)) {
$('#page_footer').removeClass('footer-location');
} else {
if ($('#page_footer').hasClass('footer-location')) {
winheight = $(window).height() - $('#page_footer').height();
}
var docHeight = $('body').height();
if (winheight > docHeight) {
if ($('#page_footer').hasClass('footer-location')) {
return;
}
$('#page_footer').addClass('footer-location');
} else {
$('#page_footer').removeClass('footer-location');
}
}
}
function getCurrentTime(time) {
var finalTime = '';
var times = parseInt(time, 10);
var day = parseInt((times / 86400), 10);
if (day > 0) {
finalTime = day;
}
times = times - day * 86400;
if (finalTime !== '') {
finalTime += '<span lang-id="public.day">' + publicLang['public.day'] + '</span> ';
}
var hours = parseInt((times / 3600), 10);
if (hours > 9) {
finalTime += hours + ':';
} else if (hours >= 0) {
finalTime += '0' + hours + ':';
}
times = times - hours * 3600;
var minutes = parseInt(times / 60, 10);
if (minutes > 9) {
finalTime += minutes + ':';
} else if (minutes > 0) {
finalTime += '0' + minutes + ':';
} else if (minutes === 0) {
finalTime += '00' + ':';
}
times = times - minutes * 60;
if (times > 9) {
finalTime += times;
} else if (times > 0) {
finalTime += '0' + times;
} else if (times === 0) {
finalTime += '00';
}
return finalTime;
}
var documentInterval = null;
function globalIntervalProc() {
if (documentInterval !== null) {
return;
}
documentInterval = setInterval(function () {
if (GLOBAL.modules.cradle_enabled === '1') {
EMUI.globalCradleStatusController.load();
}
if (window.location.href.indexOf('fileshare') !== -1 || window.location.href.indexOf('fileUpload') !== -1) {
} else {
EMUI.globalStatusController.load();
}
EMUI.headerStautsController.load();
if (GLOBAL.modules.statistic_enabled === '1') {
EMUI.pubMonthStatisticsStartDateController.load();
if (EMUI.pubStatisticFeatureController.isDailyLimitEnable) {
EMUI.pubDailyStatisticsStartDateController.load();
}
}
if (typeof GLOBAL.modules !== 'undefined' && typeof GLOBAL.modules.cbs_enabled !== 'undefined' && GLOBAL.modules.cbs_enabled === '1') {
if (window.location.hash !== '#cbssettings') {
EMUI.CBSNewListController.load();
}
}
}, 6000);
}
function getMyAccountData() {
if (GLOBAL.modules.myaccount === '1') {
EMUI.myAccountController.load(null, false);
var myAccountHref = '';
if (typeof GLOBAL.config.plmn_url !== 'undefined' && GLOBAL.config.plmn_url !== '') {
myAccountHref = GLOBAL.config.plmn_url + 'IMEI=' + myAccountStatus.encryp_imei + '&IMSI=' + myAccountStatus.encryp_imsi;
$('#my_account').show();
$('#my_account').attr('href', myAccountHref);
} else {
$('#my_account').hide();
}
} else {
$('#my_account').hide();
}
}
function stopBubble() {
window.location.href = '#onekey';
event.stopPropagation();
}
function icmpStatusChange(obj) {
var option = $('#' + obj.id).attr('option');
if (option === '1') {
$('#input_ipfilter_lan_port').val('');
$('#input_ipfilter_wan_port').val('');
$('#input_ipfilter_lan_port').attr('disabled', 'disabled');
$('#input_ipfilter_wan_port').attr('disabled', 'disabled');
} else {
$('#input_ipfilter_lan_port').removeAttr('disabled', 'disabled');
$('#input_ipfilter_wan_port').removeAttr('disabled', 'disabled');
}
}
$(document).ready(function () {
EMUI.BasicInfoObjController.load(null, false);
EMUI.globalStatusController.load();
twoAccountVersionFlag();
secondaryAccountFlag();
EMUI.ModelSwitchController.load(function () {
}, false);
preLoadLangImg();
getLangList();
getConfigData('global/config.xml', function ($xml) {
var globalConfig = xml2object($xml);
if (globalConfig.type === 'config') {
GLOBAL.config = globalConfig['config'];
}
}, {
sync: true
});
if (GLOBAL.config.delete_qrcode_enable && GLOBAL.config.delete_qrcode_enable ==='1'){
$(".qrcodecontainer").hide();
$(".logincontainer").removeClass('pull-left');
$("#loginqrcodecontainer").hide();
$("#logincontainerwidth").removeClass('pull-left');
$("#login_back_ground_top").addClass('login_pop_top_noQRcode')
$("#login_back_ground_top").removeClass('login_pop_top');
$("#login_back_ground_bottom").addClass('login_pop_bottom_noQRcode')
$("#login_back_ground_bottom").removeClass('login_pop_bottom');
$("#login_back_ground_icon").css('width', '364px');
} else {
$(".qrcodecontainer").show();
$(".logincontainer").addClass('pull-left');
$("#loginqrcodecontainer").show();
$("#logincontainerwidth").addClass('pull-left');
$("#login_back_ground_top").removeClass('login_pop_top_noQRcode')
$("#login_back_ground_top").addClass('login_pop_top');
$("#login_back_ground_bottom").removeClass('login_pop_bottom_noQRcode')
$("#login_back_ground_bottom").addClass('login_pop_bottom');
}
if (GLOBAL.config.headaddbackground &&
GLOBAL.config.headaddbackground == '1') {
$('.headcontainer').addClass("headcontainernew");
$('#topmenucontainer').addClass("topmenucontainernew");
$('.onePageTitle').addClass("onePageTitlenew");
$('#language_info').addClass("language_infonew");
}
var winHref = window.location.href;
if (winHref.indexOf('/html/content.html') >= 0) {
getConfigData('update/config.xml', function ($xml) {
var globalConfig = xml2object($xml);
if (globalConfig.type === 'config') {
GLOBAL.forbid_2g_upg_enable = globalConfig['config']['forbid_2g_upg_enable'];
}
}, {
sync: true
});
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
if (EMUI.loginallowedObjController.content.response.hilink_login === '1') {
EMUI.ModelFirewallSwitchController.load();
}
} else {
EMUI.ModelFirewallSwitchController.load();
}
EMUI.policyRoutrController.load();
EMUI.staticArpController.load();
EMUI.mainDeviceVersionController.load();
isBridgeModeOpen();
EMUI.headerStautsController.load();
globalIntervalProc();
if (GLOBAL.modules.statistic_enabled === '1') {
EMUI.pubMonthStatisticsStartDateController.load();
EMUI.pubStatisticFeatureController.load(null, false);
if (EMUI.pubStatisticFeatureController.isDailyLimitEnable) {
EMUI.pubDailyStatisticsStartDateController.load();
}
}
if (GLOBAL.modules.hilink_enabled === '1') {
EMUI.intelligenceConObjCtrl.load();
}
EMUI.LinkAddressController.load();
if (GLOBAL.modules['voip_enabled'] === '1' || GLOBAL.modules['volte_enabled'] === '1') {
EMUI.VoiperSwitchController.load(function () {
}, false);
}
EMUI.ModelOnekeySwitchController.load();
if (window.location.href.indexOf('fileshare') !== -1 || window.location.href.indexOf('fileUpload') !== -1) {
} else {
EMUI.WifiFeatureSwitch.load();
}
if (EMUI.LoginStateController.content && EMUI.LoginStateController.content.response && EMUI.LoginStateController.content.response.State === '0') {
EMUI.isSuportWpa3.load();
}
EMUI.ModelDialupSwitchController.load(null, false);
getConfigData('dialup/config.xml', function ($xml) {
var config = xml2object($xml).config;
if (EMUI.ModelDialupSwitchController.voiceprofile_enabled === '1' || (config !== 'undefined' && (config.voip_data_switch_display_enable === '1' || config.voip_display_connection_status_enable === '1'))) {
GLOBAL.modules.voiceprofile_enabled = '1';
} else {
GLOBAL.modules.voiceprofile_enabled = '0';
}
}, {
sync: true
});
} else {
bindEyeEvent();
preLoadEyeImg();
}
if (typeof GLOBAL.modules !== 'undefined' && typeof GLOBAL.modules.help_enabled !== 'undefined' && GLOBAL.modules.help_enabled === '1') {
$('#help_href').show();
}
EMUI.devmanageCapacityObjController.load(null, false);
EMUI.CurrenLangObjController.load(function () {}, false);
if (GLOBAL.config.footer_hotlinks) {
footLinkItems = GLOBAL.config.footer_hotlinks.items;
footLinkEnable = GLOBAL.config.footer_hotlinks.enable;
if ((footLinkEnable && footLinkEnable === '1') && (footLinkItems && footLinkItems.item)) {
footLinkItemArr = handleHotlinkData(footLinkItems);
creatHotlinkDom(footLinkItemArr, 'foot_hotlink_content');
setHotlinkClick(footLinkItemArr, 'foot_hotlink_content');
$('#foot_hotlink_container').show();
$('#page_footer').height('130px');
$('#page_footer div').eq(0).height('130px');
$('.footercontainer').height('112px');
} else {
$('#foot_hotlink_container').hide();
}
}
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
$('body').css('cursor', 'pointer');
}
getMyAccountData();
setInterval(function () {
resizeWindow();
}, 100);
$('body').click(function (e) {
if (EMUI.Scroll.cancelSelectListEvent) {
EMUI.Scroll.cancelSelectListEvent = false;
return;
}
var target = $(e.target);
var targetPartentID = $(e.target).parent().attr('id');
var targetID = target.attr('id');
var tagetFLag = '';
if (target && target.attr('class')) {
var classlist = target.attr('class');
if (classlist.indexOf('select_') < 0 && classlist.indexOf('_dragger') < 0) {
$('.select_list').hide();
}
} else {
$('.select_list').hide();
}
if (typeof targetID === 'undefined' || targetID.indexOf('language_') < 0) {
$('#language_select_list').hide();
}
if (typeof targetID === 'undefined' || targetID.indexOf('statistics_select_') < 0) {
$('[class^=statistics_select_]').hide();
}
if (typeof targetID === 'undefined' || targetID.indexOf('device_status_') < 0) {
$('#device_status_list').hide();
}
if (typeof targetID === 'undefined' || targetID.indexOf('dual_device_status_') < 0) {
$('#dual_device_status_list').hide();
}
if (targetID) {
tagetFLag = targetID;
} else if (targetPartentID) {
tagetFLag = targetPartentID;
} else {
tagetFLag = false;
}
if (tagetFLag) {
if (tagetFLag.indexOf('_list_item_') > 0) {
var selectval = $('#' + tagetFLag).attr('option');
var parentselectid = tagetFLag.substr(0, tagetFLag.indexOf('_list_item_'));
var selecthtml = $('#' + tagetFLag).text();
$('#' + parentselectid + '_list > div').removeClass('select_top_selected select_bottom_selected select_medium_selected');
if ($('#' + tagetFLag).hasClass('spanner_top')) {
$('#' + tagetFLag).addClass('spanner_top_selected');
} else if ($('#' + tagetFLag).hasClass('spanner_medium')) {
$('#' + tagetFLag).addClass('spanner_medium_selected');
} else if ($('#' + tagetFLag).hasClass('spanner_bottom')) {
$('#' + tagetFLag).addClass('spanner_bottom_selected');
} else if ($('#' + tagetFLag).hasClass('select_top')) {
$('#' + tagetFLag).addClass('select_top_selected');
} else if ($('#' + tagetFLag).hasClass('select_medium')) {
$('#' + tagetFLag).addClass('select_medium_selected');
} else if ($('#' + tagetFLag).hasClass('select_bottom')) {
$('#' + tagetFLag).addClass('select_bottom_selected');
}
if ($('#' + parentselectid)[0].localName !== 'input' && $('#' + parentselectid)[0].localName !== 'textarea') {
$('#' + parentselectid).attr('value', selectval);
} else {
$('#' + parentselectid).val(selecthtml);
}
$('#' + parentselectid).removeAttr('lang-id');
$('#' + parentselectid).attr('lang-id', $('#' + tagetFLag).attr('lang-id'));
$('#' + parentselectid).text(selecthtml);
$('.select_list').hide();
}
}
});
if (LANGUAGE_DATA.current_language === 'zh_cn' || LANGUAGE_DATA.current_language === 'zh_tw') {
$(".hilinkapp_string").css("width", "210px");
} else {
$(".hilinkapp_string").css("width", "200px");
}
EMUI.LanguageController.registerFunction(function () {
if (LANGUAGE_DATA.current_language === 'zh_cn' || LANGUAGE_DATA.current_language === 'zh_tw') {
$(".hilinkapp_string").css("width", "210px");
} else {
$(".hilinkapp_string").css("width", "200px");
}
});
});
window.onload = function () {
var imgDom = $(".header div.logo img")[0];
imgDom && $(".header").height(imgDom.height);
generateLanguageSelect();
showNationalLang();
};
function showPopWin() {
var pop_top = $('.adv_pop_win_top').height();
var pop_middle = $('.adv_pop_win_middle').height();
var pop_bottom = $('.adv_pop_win_bottom').height();
if (!pop_top && !pop_bottom) {
return;
}
var popInterval = setInterval(function () {
pop_middle = $('.adv_pop_win_middle').height();
if (pop_middle > 0) {
clearInterval(popInterval);
var pop_height = pop_top + pop_middle + pop_bottom;
var winh = $(window).height();
var userDevice = navigator.userAgent;
var pop_offset = winh - pop_height;
$('#emui_content_pop_win').css('top', pop_offset);
}
}, 200)
}
var VALIDATION = {};
VALIDATION.isValidDomainName = function (value) {
var flag = '';
if (!VALIDATION.isValidAscIICharset(value) || !VALIDATION.isValidDomainNameChar(value)) {
flag = false;
} else if ((value.indexOf('.') === -1 && value !== '') || (value.indexOf('.') !== -1 && value.length === 1)) {
flag = false;
} else if (/\.$/.exec(value) || /^\./.exec(value) || /-$/.exec(value) || /^-/.exec(value)) {
flag = false;
} else {
flag = true;
}
return flag;
};
VALIDATION.isValidDomainNameChar = function (val) {
if (val === '') {
return false;
}
for (var j = 0; j < val.length; j++) {
var c = val.charAt(j);
if (c >= 'a' && c <= 'z') {
continue;
} else if (c >= 'A' && c <= 'Z') {
continue;
} else if (c >= '0' && c <= '9') {
continue;
} else if (c === '-' || c === '.') {
continue;
} else {
return false;
}
}
return true;
};
VALIDATION.isVailDomainLen = function (val) {
if (val === '') {
return false;
}
var valArr = val.split('.');
for (var i = 0; i < valArr.length; i++) {
if (valArr[i].length > 63) {
return false;
}
}
return true;
}
VALIDATION.isValidAscIICharset = function (str) {
for (var i = 0; i < str.length; i++) {
if (!(str.charCodeAt(i) >= 33 && str.charCodeAt(i) <= 126)) {
return false;
}
}
return true;
};
VALIDATION.isSameSubnetAddrs = function (ip1, ip2, mask) {
var addrParts1 = ip1.split('.');
var addrParts2 = ip2.split('.');
var maskParts = mask.split('.');
for (var i = 0; i < 4; i++) {
if (((Number(addrParts1[i])) & (Number(maskParts[i]))) !== ((Number(addrParts2[i])) & (Number(maskParts[i])))) {
return false;
}
}
return true;
};
VALIDATION.isValidNetworkSegment = function isValidNetworkSegment(netSeg, mask) {
var addrParts = netSeg.split('.');
var maskParts = mask.split('.');
for (var i = 0; i < 4; i++) {
if (Number(addrParts[i]) !== ((Number(addrParts[i])) & (Number(maskParts[i])))) {
return false;
}
}
return true;
};
VALIDATION.isSameNetSegment = function isSameNetSegment(ipmax, ipmin, maskmax, maskmin) {
var addrPartsmax = ipmax.split('.');
var addrPartsmin = ipmin.split('.');
var maskPartsmax = maskmax.split('.');
var maskPartsmin = maskmin.split('.');
var maskParts = null;
for (var i = 0; i < 4; i++) {
if (Number(maskPartsmax[i]) > Number(maskPartsmin[i])) {
return false;
}
maskParts = Number(maskPartsmax[i]) & Number(maskPartsmin[i]);
if ((Number(addrPartsmax[i]) & maskParts) !== (Number(addrPartsmin[i]) & maskParts)) {
return false;
}
}
return true;
};
VALIDATION.isBroadcastOrNetworkAddress = function (ipAddress, netmask) {
var ip;
var mask;
var netaddr;
var broadaddr;
function inetAton(a) {
var n;
n = a.split(/\./);
if (n.length !== 4) {
return 0;
}
return ((n[0] << 24) | (n[1] << 16) | (n[2] << 8) | n[3]);
}
ip = inetAton(ipAddress);
mask = inetAton(netmask);
netaddr = ip & mask;
broadaddr = netaddr | ~mask;
if (netaddr === ip || ip === broadaddr) {
return false;
}
return true;
};
function portPartsParse(_port) {
var portArr = [];
_port = $.trim(_port);
if (_port.indexOf('-') === -1) {
portArr = [_port, _port];
} else {
_port = _port.split('-');
portArr = [$.trim(_port[0]), $.trim(_port[1])];
}
return portArr;
}
VALIDATION.isValidMacAddress = function (mac) {
var macAddress = $.trim(mac);
macAddress = macAddress.toLowerCase();
var c = 0;
var i = 0;
var j = 0;
if (macAddress === 'ff:ff:ff:ff:ff:ff' || macAddress === '00:00:00:00:00:00') {
return false;
}
var addrParts = macAddress.split(':');
if (addrParts.length !== 6) {
return false;
}
for (i = 0; i < 6; i++) {
if (addrParts[i].length !== 2) {
return false;
}
for (j = 0; j < addrParts[i].length; j++) {
c = addrParts[i].charAt(j);
if ((c >= '0' && c <= '9') || (c >= 'a' && c <= 'f')) {
continue;
} else {
return false;
}
}
}
c = parseInt(addrParts[0].charAt(1), 16);
if (c % 2) {
return false;
}
return true;
};
VALIDATION.isValidIpAddressCommon = function (address) {
var addrParts = address.split('.');
if (addrParts.length !== 4) {
return false;
}
for (var i = 0; i < 4; i++) {
if (isNaN(addrParts[i]) === true) {
return false;
}
if (addrParts[i] === '') {
return false;
}
if (addrParts[i].indexOf(' ') !== -1) {
return false;
}
if ((addrParts[i].indexOf('0') === 0) && (addrParts[i].length !== 1)) {
return false;
}
}
if ((addrParts[0] < 0 || addrParts[0] > 255) || (addrParts[1] < 0 || addrParts[1] > 255) || (addrParts[2] < 0 || addrParts[2] > 255) || (addrParts[3] < 0 || addrParts[3] > 255)) {
return false;
}
return true;
};
VALIDATION.isValidIpAddress = function (address) {
var addrParts = address.split('.');
if (addrParts.length !== 4) {
return false;
}
for (var i = 0; i < 4; i++) {
if (isNaN(addrParts[i])) {
return false;
}
if (addrParts[i] === '') {
return false;
}
if (addrParts[i].indexOf(' ') !== -1) {
return false;
}
if ((addrParts[i].indexOf('0') === 0) && (addrParts[i].length !== 1)) {
return false;
}
}
if ((addrParts[0] <= 0 || addrParts[0] === '127' || addrParts[0] > 223) ||
(addrParts[1] < 0 || addrParts[1] > 255) ||
(addrParts[2] < 0 || addrParts[2] > 255) ||
(addrParts[3] <= 0 || addrParts[3] >= 255)) {
return false;
}
return true;
};
VALIDATION.isValidStaticIpAddress = function (address) {
var addrParts = address.split('.');
if (addrParts.length !== 4) {
return false;
}
for (var i = 0; i < 4; i++) {
if (isNaN(addrParts[i])) {
return false;
}
if (addrParts[i] === '') {
return false;
}
if (addrParts[i].indexOf(' ') !== -1) {
return false;
}
if ((addrParts[i].indexOf('0') === 0) && (addrParts[i].length !== 1)) {
return false;
}
}
if ((addrParts[0] <= 0 || addrParts[0] === '127' || addrParts[0] > 223) ||
(addrParts[1] < 0 || addrParts[1] > 255) ||
(addrParts[2] < 0 || addrParts[2] > 255) ||
(addrParts[3] < 0 || addrParts[3] > 255)) {
return false;
}
return true;
};
VALIDATION.portJoin = function portJoin(startPort, endPort) {
var _port;
var startPt = $.trim(startPort);
var endPt = $.trim(endPort);
if (startPt === '' || endPt === '' || startPt === endPt) {
_port = startPort;
} else {
_port = startPort + '-' + endPort;
}
return _port;
};
VALIDATION.isVaildSpecialPort = function isVaildSpecialPort(port, showTarget) {
var portParts = $.trim(port);
var c = '';
var i = 0;
if (portParts === '') {
showErrorMsg(showTarget, 'firewall_hint_port_empty');
return false;
}
if ((portParts.indexOf('0') === 0) && (portParts.length !== 1)) {
showErrorMsg(showTarget, 'firewall_hint_port_invalid');
return false;
}
for (i = 0; i < portParts.length; i++) {
c = portParts.toLowerCase().charAt(i);
if ((c >= '0') && (c <= '9')) {
continue;
} else {
showErrorMsg(showTarget, 'firewall_hint_port_invalid');
return false;
}
}
if ((portParts < MACRO_MIN_PORT_RANGE) || (portParts > MACRO_MAX_PORT_RANGE)) {
showErrorMsg(showTarget, 'firewall_hint_port_number_valid_char');
return false;
}
return true;
};
VALIDATION.isVaildPortForIPFilter = function isVaildPortForIPFilter(port, showTarget) {
var portParts = $.trim(port);
if (portParts === '') {
showErrorMsg(showTarget, 'firewall_hint_port_empty');
return false;
}
if (port < MACRO_MIN_PORT_RANGE || port > MACRO_MAX_PORT_RANGE) {
showErrorMsg(showTarget, 'firewall_hint_port_number_valid_char');
return false;
}
var splitPort = portPartsParse(port);
var i = 0;
for (i = 0; i < splitPort.length; i++) {
if (isNaN(splitPort[i])) {
showErrorMsg(showTarget, 'firewall_hint_port_invalid');
return false;
}
}
portParts = $.trim(port);
if (portParts.indexOf('-') === -1) {
if (!VALIDATION.isVaildSpecialPort(portParts, showTarget)) {
return false;
}
} else {
portParts = port.split('-');
if (portParts.length === 2) {
for (i = 0; i < 2; i++) {
if (isNaN(portParts[i]) === true) {
showErrorMsg(showTarget, 'firewall_hint_port_invalid');
return false;
}
if (portParts[i] === '') {
showErrorMsg(showTarget, 'firewall_hint_port_invalid');
return false;
}
if (!VALIDATION.isVaildSpecialPort(portParts[i], showTarget)) {
return false;
}
}
if (parseInt(portParts[0], 10) > parseInt(portParts[1], 10)) {
showErrorMsg(showTarget, 'firewall_hint_start_greater_end_port');
return false;
}
} else {
showErrorMsg(showTarget, 'firewall_hint_port_invalid');
return false;
}
}
return true;
};
VALIDATION.checkInputPPPoeChar = function checkInputChar(str) {
var i;
var charI;
var numCharI;
if (str === '') {
return false;
}
for (i = 0; i < str.length; i++) {
charI = str.charAt(i);
numCharI = charI.charCodeAt();
if ((numCharI > MACRO_SUPPORT_CHAR_MAX) || (numCharI < MACRO_SUPPORT_CHAR_MIN)) {
return false;
}
}
return true;
};
VALIDATION.checkTr069InputUserNameChar = function checkInputChar(str) {
var i;
var charI;
var numCharI;
if (str === '') {
return false;
}
for (i = 0; i < str.length; i++) {
charI = str.charAt(i);
numCharI = charI.charCodeAt();
if ((numCharI > MACRO_SUPPORT_CHAR_MAX) || (numCharI < MACRO_SUPPORT_CHAR_MIN)) {
return false;
} else if (MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK === numCharI || MACRO_NOT_SUPPORT_CHAR_39 === numCharI) {
return false;
}
}
return true;
};
VALIDATION.checkInputChar = function checkInputChar(str) {
var i;
var charI;
var numCharI;
if (str === '') {
return false;
}
for (i = 0; i < str.length; i++) {
charI = str.charAt(i);
numCharI = charI.charCodeAt();
if ((numCharI > MACRO_SUPPORT_CHAR_MAX) || (numCharI < MACRO_SUPPORT_CHAR_MIN)) {
return false;
} else if ((MACRO_NOT_SUPPORT_CHAR_COMMA === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_COLON === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_SEMICOLON === numCharI) ||
(MACRO_NOT_SUPPORT_BACKSLASH_MARK === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_38 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_37 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_43 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_39 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_60 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_62 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_63 === numCharI)) {
return false;
}
}
return true;
};
VALIDATION.checkChar = function checkChar(str, unsupportChar) {
var i;
var charI;
var numCharI;
if (str === '') {
return false;
}
if (!$.isArray(unsupportChar)) {
return false;
}
for (i = 0; i < str.length; i++) {
charI = str.charAt(i);
numCharI = charI.charCodeAt();
if ((numCharI > MACRO_SUPPORT_CHAR_MAX) || (numCharI < MACRO_SUPPORT_CHAR_MIN)) {
return false;
} else {
for (j = 0; j < unsupportChar.length; j++) {
if (unsupportChar[j] === charI) {
return false;
}
}
}
}
return true;
};
VALIDATION.checkApnInputChar = function checkApnInputChar(str) {
var reg = /^[a-zA-Z0-9\-\.]+$/;
var value = reg.test(str);
if (str !== '' && !value || str.indexOf('-.') >= 0 || str.indexOf('.-') >= 0) {
return 'IDS_hint_apn_name_invalidate';
}
reg = /[a-zA-Z0-9]/;
if (!reg.test(str[0]) || !reg.test(str[str.length - 1])) {
return 'IDS_apn_start_end_error';
}
if (str.toUpperCase() === 'IMS') {
return 'IDS_hint_apn_name_invalidate_volte';
}
str = str.toLocaleLowerCase();
if (str.indexOf('rac') === 0 || str.indexOf('lac') === 0 || str.indexOf('sgsn') === 0 || str.indexOf('rnc') === 0
|| ((str.length > 5) && (str.indexOf('.gprs') === (str.length - 5)))) {
return 'IDS_mobileconnection_unable_set_string';
}
return false;
}
VALIDATION.isGlobalIpv6Address = function isGlobalIpv6Address(strAddress) {
var tempAddress = getFullIpv6Address(strAddress);
if ((tempAddress === '')
|| (tempAddress === '0000:0000:0000:0000:0000:0000:0000:0000')
|| (tempAddress === '0000:0000:0000:0000:0000:0000:0000:0001')
|| (tempAddress.substring(0, 2) === 'ff')) {
return false;
}
return true;
};
function getFullIpv6Address(strVAddress) {
var j = 0;
var m = 0;
var asciiStr;
var strLength;
var str;
var startAddress = [];
var endAddress = [];
var finalAddress = '';
var finalAddressArray = [];
var lowerAddress;
lowerAddress = strVAddress.toLowerCase();
var addrParts = lowerAddress.split('::');
if (addrParts.length === 2) {
if (addrParts[0] !== '') {
startAddress = parseIpv6Array(addrParts[0]);
if (startAddress.length === 0) {
return '';
}
}
if (addrParts[1] !== '') {
endAddress = parseIpv6Array(addrParts[1]);
if (endAddress.length === 0) {
return '';
}
for (var i = 0; i < endAddress.length; i++) {
strLength = endAddress[i].toString().length;
str = endAddress[i].toString();
if (strLength > 4) {
return '';
}
for (m = 0; m < strLength; m++) {
asciiStr = str.charCodeAt(m);
if (!((asciiStr >= 48 && asciiStr <= 57) || (asciiStr >= 97 && asciiStr <= 102))) {
return '';
}
}
}
}
if (startAddress.length + endAddress.length >= 8) {
return '';
}
} else if (addrParts.length === 1) {
startAddress = parseIpv6Array(addrParts[0]);
if (startAddress.length !== 8) {
return '';
}
} else {
return '';
}
for (i = 0; i < startAddress.length; i++) {
strLength = startAddress[i].toString().length;
str = startAddress[i].toString();
if (strLength > 4) {
return '';
}
for (m = 0; m < strLength; m++) {
asciiStr = str.charCodeAt(m);
if (!((asciiStr >= 48 && asciiStr <= 57) || (asciiStr >= 97 && asciiStr <= 102))) {
return '';
}
}
finalAddress += startAddress[i];
if (i !== 7) {
finalAddress += ':';
}
}
for (; i < 8 - endAddress.length; i++) {
finalAddress += '0000';
if (i !== 7) {
finalAddress += ':';
}
}
for (; i < 8; i++) {
finalAddress += endAddress[i - (8 - endAddress.length)];
if (i !== 7) {
finalAddress += ':';
}
}
finalAddressArray = finalAddress.split(':');
for (j = 0; j < 8; j++) {
var onePart = finalAddressArray[j];
if (onePart.length !== 4) {
switch (onePart.length) {
case 1:
finalAddressArray[j] = '000' + finalAddressArray[j];
break;
case 2:
finalAddressArray[j] = '00' + finalAddressArray[j];
break;
case 3:
finalAddressArray[j] = '0' + finalAddressArray[j];
break;
default:
break;
}
}
}
return finalAddressArray.join(':');
function parseIpv6Array(strParseAddress) {
return strParseAddress.split(':');
}
}
VALIDATION.isDigital = function isDigital(str) {
return !(str.match(/^[0-9]+$/) === null);
};
VALIDATION.isIPv6 = function isIPv6(strIP) {
var ipv6AddrParts = strIP.split(':');
if (ipv6AddrParts.length <= 1) {
return false;
}
var lastParts = ipv6AddrParts[ipv6AddrParts.length - 1];
if (lastParts.indexOf('/') !== -1) {
var ipv6LastPart = lastParts.split('/');
if (ipv6LastPart.length !== 2) {
return false;
}
if (ipv6LastPart[0] !== '') {
for (var j = 0; j < 2; j++) {
if (isNaN(ipv6LastPart[j]) === true) {
return false;
}
if (ipv6LastPart[j] === '') {
return false;
}
}
if (parseInt(ipv6LastPart[0], 16) > parseInt(ipv6LastPart[1], 16)) {
return false;
}
if (parseInt(ipv6LastPart[1], 10) > 128 || parseInt(ipv6LastPart[1], 10) < 0) {
return false;
}
strIP = '';
for (var i = 0; i < ipv6AddrParts.length - 1; i++) {
strIP += ipv6AddrParts[i] + ':';
}
strIP += '0001';
} else {
if (parseInt(ipv6LastPart[1], 10) > 128 || parseInt(ipv6LastPart[1], 10) < 0) {
return false;
}
if (ipv6LastPart[1] === '') {
return false;
}
if (isNaN(ipv6LastPart[1]) === true) {
return false;
}
strIP = '';
for (i = 0; i < ipv6AddrParts.length - 1; i++) {
strIP += ipv6AddrParts[i] + ':';
}
}
}
var strlen = strIP.length - 2;
if (strlen >= 0 && strIP.lastIndexOf('::') === strlen) {
strIP = strIP + '0000';
}
return strIP.match(/:/g).length <= 7 && (/::/.test(strIP) ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(strIP) : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(strIP));
};
VALIDATION.obverseMask = function (ip, mask) {
var obverseMaskAndIp = '';
var obvMask = '';
var ipAddr = ip.split('.');
var subMask = mask.split('.');
for (var i = 0; i < 4; i++) {
obverseMaskAndIp += (255 - Number(subMask[i])) & Number(ipAddr[i]);
obverseMaskAndIp = obverseMaskAndIp + '.';
obvMask += 255 - (Number(subMask[i]));
obvMask = obvMask + '.';
}
obverseMaskAndIp = obverseMaskAndIp.substring(0, obverseMaskAndIp.length - 1);
obvMask = obvMask.substring(0, obvMask.length - 1);
if (obverseMaskAndIp === '0.0.0.0' || obverseMaskAndIp === obvMask) {
return false;
}
return true;
};
VALIDATION.isValidMask = function (mask) {
var i = 0;
var num = 0;
var zeroBitPos = 0;
var oneBitPos = 0;
var zeroBitExisted = false;
if (mask === '0.0.0.0') {
return false;
}
if (mask === '255.255.255.255' || mask === '255.255.255.254') {
return false;
}
var maskParts = mask.split('.');
if (maskParts.length !== 4) {
return false;
}
for (i = 0; i < 4; i++) {
if (isNaN(maskParts[i]) === true) {
return false;
}
if (maskParts[i] === '') {
return false;
}
if (maskParts[i].indexOf(' ') !== -1) {
return false;
}
if ((maskParts[i].indexOf('0') === 0) && (maskParts[i].length !== 1)) {
return false;
}
num = parseInt(maskParts[i], 10);
if (num < 0 || num > 255) {
return false;
}
if (zeroBitExisted === true && num !== 0) {
return false;
}
zeroBitPos = getLeftMostZeroBitPos(num);
oneBitPos = getRightMostOneBitPos(num);
if (zeroBitPos < oneBitPos) {
return false;
}
if (zeroBitPos < 8) {
zeroBitExisted = true;
}
}
function getLeftMostZeroBitPos(iputnum) {
var j = 0;
var numArr = [128, 64, 32, 16, 8, 4, 2, 1];
for (j = 0; j < numArr.length; j++) {
if ((iputnum & numArr[j]) === 0) {
return j;
}
}
return numArr.length;
}
function getRightMostOneBitPos(iputnum) {
var j = 0;
var numArr = [1, 2, 4, 8, 16, 32, 64, 128];
for (j = 0; j < numArr.length; j++) {
if (((iputnum & numArr[j]) >> j) === 1) {
return (numArr.length - j - 1);
}
}
return -1;
}
return true;
};
function IsDigital(str) {
return !(str.match(/^[0-9]+$/) === null);
}
function check_port(port) {
if (!IsDigital(port)) {
return false;
}
if (port < 1 || port > 65535) {
return false;
}
return true;
}
function is_ValidUrl(url) {
var result = url.match('^[https:\/]*([^\/]*)');
if (result[1]) {
var domain = result[1].match('^([A-Za-z0-9-_]+\.){1,}([A-Za-z]+)$');
try {
return domain[0];
} catch (e) {
}
;
}
return false;
}
function reSetLineHeightForTable(pageName, lineNum, maxLineHeight) {
var someLine = $('.' + pageName + '_item');
if (maxLineHeight > 96) {
someLine.eq(lineNum).children().removeClass('ip_filter_tb');
someLine.eq(lineNum).children().removeClass('ip_filter_tb_max');
someLine.eq(lineNum).children().addClass('special_app_tb_max');
someLine.eq(lineNum).css('height', '240px');
} else if (maxLineHeight > 50) {
someLine.eq(lineNum).children().removeClass('ip_filter_tb');
someLine.eq(lineNum).children().addClass('ip_filter_tb_max');
someLine.eq(lineNum).css('height', '96px');
} else {
}
}
function showTipInBridgeMode(disableAreaId) {
var BridgeModeSwitch = EMUI.ObjController.extend({
objName: 'security/bridgemode'
});
var voipPageArr = ['serverbasic', 'sipbasic', 'speeddial', 'voiceprofile', 'advancecodec', 'voiceadvanced'];
var tr069PageArr = ['tr069settings', 'tr069profile', 'tr111settings'];
var videoPageArr = ['video'];
var currentHash = window.location.hash.substring(1);
BridgeModeSwitch.load(null, false);
$('.bridgemode_tip_info').length !== 0 && $('.bridgemode_tip_info').remove();
if (BridgeModeSwitch.content && BridgeModeSwitch.content.response
&& BridgeModeSwitch.content.response.bridgemode === '1') {
GLOBAL.isBridgeModeOpen = true;
if ((($.inArray(currentHash, voipPageArr) > -1) && BridgeModeSwitch.content.response.voiceshareinternet === '0') ||
(($.inArray(currentHash, tr069PageArr) > -1) && BridgeModeSwitch.content.response.cwmpshareinternet === '0') ||
(($.inArray(currentHash, videoPageArr) > -1) && BridgeModeSwitch.content.response.iptvshareinternet === '0')) {
$('#' + disableAreaId).show();
return false;
}
var bridgeModeTip = '<div class="clearboth text-left bridgemode_tip_info" style="margin-top:40px;margin-bottom:-10px">'
+ '<div><em class="ic_upgrade_failed"></em></div>'
+ '<div id="bridgemode_common_tip" class="padding-right-10 ic_upgrade_failed_left"></div>'
+ '</div>';
$('#' + disableAreaId).hide();
$('#' + disableAreaId).secureAfter(bridgeModeTip, null);
EMUI.LanguageController.registerLanguageEx('bridgemode_common_tip', 'IDS_system_bridge_mode_warning', '%l', 'menu.bridgemode', '#bridgemode');
EMUI.LanguageController.transLangEx();
return true;
}
$('#' + disableAreaId).show();
GLOBAL.isBridgeModeOpen = false;
return false;
}
function showTipInClat(pageName) {
if (GLOBAL.modules.lan_ipmodeswitch_enabled === '1') {
EMUI.clatSwitchController.load(null, false);
var clatArr = ['lanipfilter', 'virtualserver', 'specialapplication', 'dmzsettings', 'sipalgsettings', 'upnp', 'pcp', 'bridgemode', 'vpnsettings', 'nat', 'remotehttpsaccess', 'ddns'];
var currentHash = window.location.hash.substring(1);
var clat_notice_lang_id = '';
var clatTip = '' + '<div id = "clat_common_tip" class="bridgemode_tip_info page_scenes_info_text" style="display:table;margin-top:40px;">' + '</div>';
$('.bridgemode_tip_info').length !== 0 && $('.bridgemode_tip_info').remove();
if (GLOBAL.ipmode === '1') {
if ((($.inArray(currentHash, clatArr) > -1) && GLOBAL.ipmode !== '1')) {
$('#' + pageName).show();
return false;
}
if (currentHash === 'firewallswitch' && GLOBAL.config.menu_v2.advanceset.security.lanipfilter === 'lanipfilter') {
if (GLOBAL.switchmode &&
GLOBAL.switchmode === '2') {
$('#' + pageName).show();
} else {
$('#' + pageName).show();
$('#' + pageName).secureBefore(clatTip, null);
clat_notice_lang_id = 'iptype_clat_on_related_firwallswitch_page_message';
}
} else if (currentHash === 'firewallswitch' && GLOBAL.config.menu_v2.advanceset.security.lanipfilter === undefined) {
$('#' + pageName).show();
} else {
$('#' + pageName).hide();
$('#' + pageName).secureAfter(clatTip, null);
clat_notice_lang_id = 'iptype_clat_on_related_page_message';
}
if (currentHash === 'acl') {
$('#' + pageName).show();
$('#' + pageName).secureBefore(clatTip, null);
clat_notice_lang_id = 'iptype_acl_clat_notice_message';
}
if (GLOBAL.switchmode &&
GLOBAL.switchmode === '2') {
$('#' + pageName).show();
return false;
} else {
EMUI.LanguageController.registerLanguageEx(
'clat_common_tip',
clat_notice_lang_id,
'%l',
'menu.iptype',
'#iptype');
EMUI.LanguageController.transLangEx();
return true;
}
}
if (GLOBAL.ipmode === '2') {
if (currentHash === 'vpnsettings' || currentHash === 'staticdns' || currentHash === 'acl') {
$('#' + pageName).show();
$('#' + pageName).secureBefore(clatTip, null);
EMUI.LanguageController.registerLanguageEx('clat_common_tip', 'iptype_double_stack_ipv4_notice_message', '%l', 'menu.iptype', '#iptype');
EMUI.LanguageController.transLangEx();
return true;
}
}
$('#' + pageName).show();
return false;
}
}
function isBridgeModeOpen() {
var BridgeModeOpen = EMUI.ObjController.extend({
objName: 'security/bridgemode'
});
if (GLOBAL.modules.lan_ipmodeswitch_enabled === '1') {
EMUI.clatSwitchController.load(null, false);
}
if (GLOBAL.modules.bridge_enabled === '1' && GLOBAL.ipmode !== '1') {
BridgeModeOpen.load(null, false);
} else {
return false;
}
if (BridgeModeOpen.content && BridgeModeOpen.content.response
&& BridgeModeOpen.content.response.bridgemode === '1') {
GLOBAL.isBridgeModeOpen = true;
if (BridgeModeOpen.content.response.bridgemodegatway && BridgeModeOpen.content.response.bridgemodegatway !== '') {
GLOBAL.bridgeSupportGatwayPage = [];
if (BridgeModeOpen.content.response.bridgemodegatway.indexOf(';')>-1) {
GLOBAL.bridgeSupportGatwayPage = BridgeModeOpen.content.response.bridgemodegatway.split(';');
} else {
GLOBAL.bridgeSupportGatwayPage.push(BridgeModeOpen.content.response.bridgemodegatway);
}
}
return true;
}
GLOBAL.isBridgeModeOpen = false;
return false;
}
function showTipInFirewall(disableId, switchname, errmsg) {
var FirewallSwitch = EMUI.ObjController.extend({
objName: 'security/firewall-switch'
});
FirewallSwitch.load(null, false);
$('.bridgemode_tip_info').length !== 0 && $('.bridgemode_tip_info').remove();
if (FirewallSwitch.content.response
&& FirewallSwitch.content.response.FirewallMainSwitch === '0') {
var firewallTip = ''
+ '<div id = "firewall_common_tip" class="bridgemode_tip_info page_prompt_info page_scenes_info_text" style="display:table;">'
+ '</div>';
$('#' + disableId).hide();
$('#' + disableId).secureAfter(firewallTip, null);
EMUI.LanguageController.registerLanguageEx('firewall_common_tip', 'IDS_security_message_firewall_disabled', '%l', 'menu.firewallswitch', '#firewallswitch');
EMUI.LanguageController.transLangEx();
return true;
}
if (FirewallSwitch.content.response
&& FirewallSwitch.content.response[switchname]
&& FirewallSwitch.content.response[switchname] === '0') {
var firewallTip = ''
+ '<div id = "firewall_common_tip" class="bridgemode_tip_info page_prompt_info page_scenes_info_text" style="display:table;">'
+ '</div>';
$('#' + disableId).hide();
$('#' + disableId).secureAfter(firewallTip, null);
EMUI.LanguageController.registerLanguageEx('firewall_common_tip', errmsg, '%l', 'menu.firewallswitch', '#firewallswitch');
EMUI.LanguageController.transLangEx();
return true;
}
$('#' + disableId).show();
return false;
}
function isHexString(str) {
var constNum = {
CHARCODE_A: 65,
CHARCODE_F: 70,
CHARCODE_a: 97,
CHARCODE_f: 102,
CHARCODE_0: 48,
CHARCODE_9: 57
}
for (var i = 0; i < str.length; i++) {
var c = str.charCodeAt(i);
if (!((c >= constNum.CHARCODE_0 && c <= constNum.CHARCODE_9)
|| (c >= constNum.CHARCODE_A && c <= constNum.CHARCODE_F)
|| (c >= constNum.CHARCODE_a && c <= constNum.CHARCODE_f)
)) {
return false;
}
}
return true;
}
function secondaryAccountFlag() {
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
if (EMUI.loginallowedObjController.content.response.hilink_login === '1') {
if (!EMUI.LoginStateController.content) {
EMUI.LoginStateController.load(function () {}, false);
}
} else {
return;
}
} else {
if (!EMUI.LoginStateController.content) {
EMUI.LoginStateController.load(function () {}, false);
}
}
if (EMUI.LoginStateController.content.response && EMUI.LoginStateController.content.response.accounts_number
&& EMUI.LoginStateController.content.response.accounts_number === '2' && EMUI.LoginStateController.content.response.userlevel
&& EMUI.LoginStateController.content.response.userlevel === '1') {
GLOBAL.isSecondaryAccount = true;
} else {
GLOBAL.isSecondaryAccount = false;
}
}
function twoAccountVersionFlag() {
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
if (EMUI.loginallowedObjController.content.response.hilink_login === '1') {
EMUI.LoginStateController.load(function () {
}, false);
} else {
return;
}
} else {
EMUI.LoginStateController.load(function () {
}, false);
}
if (EMUI.LoginStateController.content.response && EMUI.LoginStateController.content.response.accounts_number
&& EMUI.LoginStateController.content.response.accounts_number === '2') {
GLOBAL.hasTwoAccountFlag = true;
} else {
GLOBAL.hasTwoAccountFlag = false;
}
}
function addSelectItem(id, value) {
if ($('#' + id).length === 0) {
return;
}
var fatherid = id;
if ($('#' + fatherid + '_items').length !== 0) {
fatherid = fatherid + '_items';
}
var index = $('#' + fatherid).children().length + 1;
var itemid = id + '_item_' + index;
var templateData = {
itemid: itemid,
option: value.option,
langid: value.langid,
text: value.text
};
var itemhtml = '<div id={{itemid}} option="{{option}}" class="select_medium" lang-id="{{langid}}" >{{text}}</div>';
$('#' + fatherid).secureAppend(itemhtml, templateData);
}
function clearSelectItme(id) {
$('#' + id).empty();
}
Date.prototype.Format = function (format) {
var o = {
'M+': this.getMonth() + 1,
'd+': this.getDate(),
'H+': this.getHours(),
'm+': this.getMinutes(),
's+': this.getSeconds()
};
var k;
if (/(y+)/.test(format)) {
format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
}
for (k in o) {
if (new RegExp('(' + k + ')').test(format)) {
format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
}
}
return format;
}
function intelligenceOpenStatus() {
EMUI.intelligenceConStaObjCtrl.load(function () {
}, false);
return EMUI.intelligenceConStaObjCtrl.isIntellComplete;
}
function isIntelligenceConnect() {
if (GLOBAL.modules.hilink_enabled === '1' && GLOBAL.modules.isIntellOpen) {
return intelligenceOpenStatus();
} else {
return true;
}
}
function setLanguageListScroll() {
EMUI.Scroll.initScroll('#language_select_list_content');
}
function addSelectedBorder(obj) {
var curElement = $(obj);
var curClassArray = curElement.parent().attr('class').split(' ');
var curClass = '';
for (var i = 0; i < curClassArray.length; i++) {
if (curClassArray[i].indexOf('input') !== -1 && curClassArray[i].indexOf('_selected') === -1) {
curClass = curClassArray[i];
}
};
if (curClass) {
curElement.parent().removeClass(curClass).addClass(curClass + '_selected');
}
}
function hideSelectedBorder(obj) {
var curElement = $(obj);
var curClassArray = curElement.parent().attr('class').split(' ');
var curClass = '';
for (var i = 0; i < curClassArray.length; i++) {
if (curClassArray[i].indexOf('input') !== -1) {
curClass = curClassArray[i];
}
};
if (curClass) {
curElement.parent().removeClass(curClass).addClass(curClass.substr(0, curClass.indexOf('_selected')));
}
}
function checkServerAddress(url) {
var index = '';
rgExp = /^((https|http):\/\/)[a-zA-Z0-9\.\-\[\]\:]+[\:\/]?/;
if (!rgExp.test(url)) {
return false;
}
url = url.replace(/((https|http):\/\/)/, '');
if (/\//.test(url)) {
index = url.indexOf('/');
var path = url.substring(index + 1);
url = url.substring(0, index);
for (var i = 0; i < path.length; i++) {
if (!(path.charCodeAt(i) >= 32 && path.charCodeAt(i) <= 126)) {
return false;
}
}
}
var sumColon = 0;
for (var i = 0; i < url.length; i++) {
if (/\:/.test(url[i])) {
sumColon++;
}
}
if (sumColon > 1) {
var ipv6 = url;
index = url.indexOf(']');
if (index !== -1) {
var port = url.substring(index + 2);
ipv6 = url.substring(1, index - 1);
if (!checkPort(port)) {
return false;
}
}
if (!checkIpv6(ipv6)) {
return false;
}
} else {
var ipv4Domain = url;
if (sumColon === 1) {
index = url.indexOf(':');
var port = url.substring(index + 1);
if (!checkPort(port)) {
return false;
}
ipv4Domain = url.substring(0, index);
}
if (/^[0-9]+[0-9\.]+[0-9]+$/.test(ipv4Domain)) {
if (!checkIpv4(ipv4Domain)) {
return false;
}
} else {
if (!checkDomainName(ipv4Domain)) {
return false;
}
}
}
function checkPort(port) {
if (!(0 < port && port <= 65535) || /^0\d+/.test(port)) {
return false;
}
return true;
}
function checkIpv6(ip) {
return VALIDATION.isIPv6(ip)
}
return true;
}
function checkIpv4(ip) {
if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip)) {
return VALIDATION.isValidStaticIpAddress(ip);
}
return false;
}
function solvePlaceholderSupport() {
if (!isSupportPlaceholder()) {
$('input[placeholder]').each(function () {
var pwdField = $(this);
var pwdVal = pwdField.attr('placeholder');
var pwdClass = pwdField.attr('class');
var pwLangid = pwdField.attr('lang-id');
var pwdId = pwdField.attr('id');
if (typeof pwdVal !== 'undefined') {
pwdField.after('<input id="' + pwdId + '1" style="color:#a0a0a0" lang-id-set="value" type="text" autocomplete="off" />');
var pwdPlaceholder = $('#' + pwdId + '1');
pwdPlaceholder.addClass(pwdClass);
pwdPlaceholder.attr('value', pwdVal);
pwdPlaceholder.attr('lang-id', pwLangid);
if (pwdField.val() == '') {
pwdPlaceholder.show();
pwdField.hide();
} else {
pwdPlaceholder.hide();
pwdField.show();
}
pwdPlaceholder.focus(function () {
pwdPlaceholder.hide();
pwdField.show();
pwdField.focus();
});
pwdField.blur(function () {
if (pwdField.val() == '') {
pwdPlaceholder.show();
pwdField.hide();
}
});
}
});
}
}
function isSupportPlaceholder() {
var input = document.createElement('input');
return 'placeholder' in input;
}
function checkDomainName(urlDomain) {
if (/^[a-zA-Z0-9].*[a-zA-Z0-9]$/.test(urlDomain)) {
for (var i = 0; i < urlDomain.length; i++) {
if (!(/[a-zA-Z0-9\.\/\-]/.test(urlDomain[i]))) {
return false;
}
}
if ((urlDomain.indexOf('.') === -1 && urlDomain !== '') || (urlDomain.indexOf('..') !== -1)) {
return false;
}
return true;
}
return false;
}
var language_cultures = {};
language_cultures["ar_sa"] = {
numberFormat: '.',
timeFormat: 'dd/MM/yyyy HH:mm:ss'
};
language_cultures["bg_bg"] = {
numberFormat: ',',
timeFormat: 'd.M.yyyy HH:mm:ss'
};
language_cultures["cs_cz"] = language_cultures["fi_fi"] = language_cultures["sl_sl"] = language_cultures["sr_cs"] = {
numberFormat: ',',
timeFormat: 'd.M.yyyy H:mm:ss'
};
language_cultures["da_dk"] = language_cultures["pt_pt"] = {
numberFormat: ',',
timeFormat: 'dd-MM-yyyy HH:mm:ss'
};
language_cultures["de_de"] = language_cultures["mk_mk"] = language_cultures["no_no"] = language_cultures["ro_ro"] = language_cultures["tr_tr"] = {
numberFormat: ',',
timeFormat: 'dd.MM.yyyy HH:mm:ss'
};
language_cultures["el_gr"] = {
numberFormat: ',',
timeFormat: 'd/M/yyyy H:mm:ss'
};
language_cultures["en_us"] = {
numberFormat: '.',
timeFormat: 'M/d/yyyy H:mm:ss'
};
language_cultures["es_ar"] = {
numberFormat: ',',
timeFormat: 'dd/MM/yyyy HH:mm:ss'
};
language_cultures["es_es"] = language_cultures["id_id"] = {
numberFormat: ',',
timeFormat: 'dd/MM/yyyy H:mm:ss'
};
language_cultures["et_ee"] = {
numberFormat: ',',
timeFormat: 'd.MM.yyyy H:mm:ss'
};
language_cultures["fa_fa"] = {
numberFormat: '.',
timeFormat: 'MM/dd/yyyy HH:mm:ss'
};
language_cultures["fr_fr"] = language_cultures["it_it"] = language_cultures["pt_br"] = {
numberFormat: ',',
timeFormat: 'dd/MM/yyyy HH:mm:ss'
};
language_cultures["he_il"] = language_cultures["mt_mt"] = {
numberFormat: '.',
timeFormat: 'dd/MM/yyyy HH:mm:ss'
};
language_cultures["hr_hr"] = {
numberFormat: ',',
timeFormat: 'd.M.yyyy. H:mm:ss'
};
language_cultures["hu_hu"] = language_cultures["lv_lv"] = {
numberFormat: ',',
timeFormat: 'yyyy.MM.dd. H:mm:ss'
};
language_cultures["ja_jp"] = {
numberFormat: '.',
timeFormat: 'yyyy/MM/dd H:mm:ss'
};
language_cultures["ko_kr"] = {
numberFormat: '.',
timeFormat: 'yyyy-MM-dd H:mm:ss'
};
language_cultures["lt_lt"] = {
numberFormat: ',',
timeFormat: 'yyyy.MM.dd HH:mm:ss'
};
language_cultures["nl_nl"] = {
numberFormat: ',',
timeFormat: 'd-M-yyyy H:mm:ss'
};
language_cultures["pl_pl"] = language_cultures["sv_se"] = {
numberFormat: ',',
timeFormat: 'yyyy-MM-dd HH:mm:ss'
};
language_cultures["ru_ru"] = language_cultures["uk_ua"] = {
numberFormat: ',',
timeFormat: 'dd.MM.yyyy H:mm:ss'
};
language_cultures["sk_sk"] = {
numberFormat: ',',
timeFormat: 'd. M. yyyy H:mm:ss'
};
language_cultures["sq_al"] = {
numberFormat: ',',
timeFormat: 'yyyy-MM-dd H:mm:ss'
};
language_cultures["vi_vn"] = {
numberFormat: ',',
timeFormat: 'dd/MM/yyyy H:mm:ss'
};
language_cultures["zh_cn"] = {
numberFormat: '.',
timeFormat: 'yyyy/M/d H:mm:ss'
};
language_cultures["zh_hk"] = {
numberFormat: '.',
timeFormat: 'd/M/yyyy H:mm:ss'
};
language_cultures["zh_tw"] = {
numberFormat: '.',
timeFormat: 'yyyy/M/d HH:mm:ss'
};
function formatNumberAndTime(value, culture) {
culture = culture.replace(/-/, '_');
if (value instanceof Date) {
value = formatDate(value, culture);
} else if (typeof value === "number") {
value = formatNumber(value, culture);
}
return value;
}
function formatDate(value, culture) {
var ret = [],
format = language_cultures[culture].timeFormat;
var tokenRegExp = /\/|dd|d|MM|M|yyyy|hh|h|HH|H|mm|ss/g;
for (; ;) {
var index = tokenRegExp.lastIndex,
array = tokenRegExp.exec(format);
if (!array) {
break;
}
var preMatch = format.slice(index, array ? array.index : format.length);
ret.push(preMatch);
var current = array[0],
clength = current.length;
switch (current) {
case "d":
case "dd":
var days = value.getDate();
ret.push(
padZeros(days, clength)
);
break;
case "M":
case "MM":
var months = value.getMonth() + 1;
ret.push(
padZeros(months, clength)
);
break;
case "yyyy":
var years = value.getFullYear();
ret.push(
padZeros(years, clength)
);
break;
case "h":
case "hh":
var hours = value.getHours() % 12;
if (hours === 0)
hours = 12;
ret.push(
padZeros(hours, clength)
);
break;
case "H":
case "HH":
ret.push(
padZeros(value.getHours(), clength)
);
break;
case "mm":
ret.push(
padZeros(value.getMinutes(), clength)
);
break;
case "ss":
ret.push(
padZeros(value.getSeconds(), clength)
);
break;
case "/":
ret.push("/");
break;
default:
break;
}
}
return ret.join("");
}
function formatNumber(value, culture) {
var ret = "",
numberString = value + "",
format = language_cultures[culture].numberFormat;
if (format == '.') {
ret = numberString;
} else {
ret = numberString.replace('.', format);
}
return ret;
}
function padZeros(num, c) {
var zeros = ["0", "00", "000"];
var r, s = num + "";
if (c > 1 && s.length < c) {
r = (zeros[c - 2] + s);
return r.substr(r.length - c, c);
} else {
r = s;
}
return r;
}
function formatFloat(src, pos) {
return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
}
function createSubFolderTree(objId) {
if ($('#' + objId).hasClass('lastExpandable')) {
$('#' + objId).addClass('collapsable');
$('#' + objId).removeClass('expandable');
$('#' + objId).addClass('lastCollapsable');
$('#' + objId).removeClass('lastExpandable');
$('#' + objId).children('div').addClass('collapsable-hitarea');
$('#' + objId).children('div').removeClass('expandable-hitarea');
$('#' + objId).addClass('loaded_sublist');
} else {
$('#' + objId).addClass('collapsable');
$('#' + objId).removeClass('expandable');
$('#' + objId).children('div').addClass('collapsable-hitarea');
$('#' + objId).children('div').removeClass('expandable-hitarea');
$('#' + objId).addClass('loaded_sublist');
}
}
function showSubFolderTree(objId) {
if ($('#' + objId).hasClass('lastExpandable')) {
$('#' + objId).addClass('collapsable');
$('#' + objId).removeClass('expandable');
$('#' + objId).addClass('lastCollapsable');
$('#' + objId).removeClass('lastExpandable');
$('#' + objId).children('div').addClass('collapsable-hitarea');
$('#' + objId).children('div').removeClass('expandable-hitarea');
$('#' + objId).children('ul').css({
'display': 'block'
});
} else {
$('#' + objId).addClass('collapsable');
$('#' + objId).removeClass('expandable');
$('#' + objId).children('div').addClass('collapsable-hitarea');
$('#' + objId).children('div').removeClass('expandable-hitarea');
$('#' + objId).children('ul').css({
'display': 'block'
});
}
}
function hideSubFolderTree(objId) {
if ($('#' + objId).hasClass('lastCollapsable')) {
$('#' + objId).addClass('expandable');
$('#' + objId).removeClass('collapsable');
$('#' + objId).addClass('lastExpandable');
$('#' + objId).removeClass('lastCollapsable');
$('#' + objId).children('div').addClass('expandable-hitarea');
$('#' + objId).children('div').removeClass('collapsable-hitarea');
$('#' + objId).children('ul').css({
'display': 'none'
});
} else {
$('#' + objId).addClass('expandable');
$('#' + objId).removeClass('collapsable');
$('#' + objId).children('div').addClass('expandable-hitarea');
$('#' + objId).children('div').removeClass('collapsable-hitarea');
$('#' + objId).children('ul').css({
'display': 'none'
});
}
}
var singleComplexRule = {
rules: function (count) {
var str = 'other';
count = Number($.trim(count));
if (isNaN(count)) {
return str;
}
var self = this;
var setName = self.lang2rule();
str = self[setName](count);
return str;
},
lang2rule: function () {
var self = this;
var x = '1';
switch (LANGUAGE_DATA.current_language) {
case 'zh_cn':
case 'id_id':
case 'ja_jp':
case 'ko_kr':
case 'vi_vn':
case 'zh_hk':
case 'zh_tw':
x = '1';
break;
case 'bg_bg':
case 'da_dk':
case 'de_de':
case 'el_gr':
case 'en_us':
case 'es_ar':
case 'es_es':
case 'et_ee':
case 'fi_fi':
case 'hu_hu':
case 'it_it':
case 'nl_nl':
case 'no_no':
case 'pt_pt':
case 'sq_al':
case 'sv_se':
case 'tr_tr':
x = '2';
break;
case 'fa_fa':
case 'fr_fr':
case 'pt_br':
x = '2_1';
break;
case 'mk_mk':
x = '2_2';
break;
case 'hr_hr':
case 'sr_cs':
x = '3';
break;
case 'lv_lv':
x = '3_1';
break;
case 'ro_ro':
x = '3_2';
break;
case 'lt_lt':
x = '3_3';
break;
case 'pl_pl':
x = '3_4';
break;
case 'ru_ru':
x = '3_5';
break;
case 'uk_ua':
x = '3_6';
break;
case 'cs_cz':
case 'sk_sk':
x = '4';
break;
case 'he_il':
x = '4_1';
break;
case 'mt_mt':
x = '4_2';
break;
case 'sl_sl':
x = '4_3';
break;
case 'ar_sa':
x = '6';
break;
}
return 'set' + x;
},
set1: function (count) {
return 'other';
},
set2: function (count) {
if (count === 1) {
return 'one';
} else {
return 'other';
}
},
set2_1: function (count) {
if (count === 0 || count === 1) {
return 'one';
} else {
return 'other';
}
},
set2_2: function (count) {
if (count % 10 === 1 && count % 100 !== 11) {
return 'one';
} else {
return 'other';
}
},
set3: function (count) {
if (count % 10 === 1 && count % 100 !== 11) {
return 'one';
} else if ((count % 10 >= 2 && count % 10 <= 4) && (count % 100 < 12 || count % 100 > 14)) {
return 'few';
} else {
return 'other';
}
},
set3_1: function (count) {
if (count % 10 === 0 || (count % 100 >= 11 && count % 100 <= 19)) {
return 'zero';
} else if (count % 10 === 1 && count % 100 !== 11) {
return 'one';
} else {
return 'other';
}
},
set3_2: function (count) {
if (count === 1) {
return 'one';
} else if (count === 0 || (count % 100 >= 2 && count % 100 <= 19)) {
return 'few';
} else {
return 'other';
}
},
set3_3: function (count) {
if (count % 10 === 1 && (count % 100 < 11 || count % 100 > 19)) {
return 'one';
} else if ((count % 10 >= 2 && count % 10 <= 9) && (count % 100 < 11 || count % 100 > 19)) {
return 'few';
} else {
return 'many';
}
},
set3_4: function (count) {
if (count === 1) {
return 'one';
} else if ((count % 10 >= 2 && count % 10 <= 4) && (count % 100 < 12 || count % 100 > 14)) {
return 'few';
} else {
return 'many';
}
},
set3_5: function (count) {
if (count % 10 === 1 && count % 100 !== 11) {
return 'one';
} else if ((count % 10 >= 2 && count % 10 <= 4) && (count % 100 < 12 || count % 100 > 14)) {
return 'few';
} else {
return 'many';
}
},
set3_6: function (count) {
if (count % 10 === 1 && count % 100 !== 11) {
return 'one';
} else if ((count % 10 >= 2 && count % 10 <= 4) && (count % 100 < 12 || count % 100 > 14)) {
return 'few';
} else {
return 'many';
}
},
set4: function (count) {
if (count === 1) {
return 'one';
} else if (count >= 2 && count <= 4) {
return 'few';
} else {
return 'other';
}
},
set4_1: function (count) {
if (count === 1) {
return 'one';
} else if (count === 2) {
return 'two';
} else if (count % 10 === 0 && count > 10) {
return 'many';
} else {
return 'other';
}
},
set4_2: function (count) {
if (count === 1) {
return 'one';
} else if (count === 0 || (count % 100 >= 2 && count % 100 <= 10)) {
return 'few';
} else if (count % 100 >= 11 && count % 100 <= 19) {
return 'many';
} else {
return 'other';
}
},
set4_3: function (count) {
if (count % 100 === 1) {
return 'one';
} else if (count % 100 === 2) {
return 'two';
} else if (count % 100 === 3 || count % 100 === 4) {
return 'few';
} else {
return 'other';
}
},
set6: function (count) {
if (count === 0) {
return 'zero';
} else if (count === 1) {
return 'one';
} else if (count === 2) {
return 'two';
} else if (count % 100 >= 3 && count % 100 <= 10) {
return 'few';
} else if (count % 100 >= 11 && count % 100 <= 99) {
return 'many';
} else {
return 'other';
}
}
}
function showDevHostOrActualName(devsHostArr) {
for (var i = 0; i < devsHostArr.length; i++) {
if (GLOBAL.modules.support_devcapacity) {
if ((devsHostArr[i].DevBrands.toLowerCase() === 'huawei'
|| devsHostArr[i].DevBrands.toLowerCase() === 'honor')
&& devsHostArr[i].IconType.toLowerCase() === 'mobile') {
if (devsHostArr[i].ActualName === devsHostArr[i].HostName) {
var nameStr = devsHostArr[i].ActualName.replace(/\-/g, ':');
if (nameStr !== devsHostArr[i].MACAddress) {
var t = devsHostArr[i].HostName.indexOf('-');
if (t > 0) {
if (devsHostArr[i].HostName.charCodeAt(t + 1) < 65 || devsHostArr[i].HostName.charCodeAt(t + 1) > 90) {
devsHostArr[i].HostName = devsHostArr[i].HostName.slice(0, t);
}
}
}
} else {
if (GLOBAL.modules.hostnamechange_enabled) {
if (devsHostArr[i].ActualName !== '') {
devsHostArr[i].HostName = devsHostArr[i].ActualName;
}
}
}
} else {
if (GLOBAL.modules.hostnamechange_enabled) {
if (devsHostArr[i].ActualName !== '') {
devsHostArr[i].HostName = devsHostArr[i].ActualName;
}
}
}
} else {
if (GLOBAL.modules.hostnamechange_enabled) {
if (devsHostArr[i].ActualName !== '') {
devsHostArr[i].HostName = devsHostArr[i].ActualName;
}
}
}
}
return devsHostArr;
}
function handleHotlinkData(hotlinkItems) {
if (!$.isArray(hotlinkItems.item)) {
hotlinkItems = [hotlinkItems.item];
} else {
hotlinkItems = hotlinkItems.item;
}
if (hotlinkItems.length > HOTLINK_MAX_NUMBER) {
hotlinkItems = hotlinkItems.slice(0, HOTLINK_MAX_NUMBER);
}
return hotlinkItems;
}
function creatHotlinkDom(hotlinkCell, hotlinkContainer) {
if ($('#' + hotlinkContainer).html()) {
return;
}
$.each(hotlinkCell, function (index, value) {
switch (value.type) {
case '1':
hotlinkTxtIndex++;
hotlinkLang = 'hotlinks_' + hotlinkTxtIndex;
hotlinkDom += '<li><a class="txt signal_txt" href="javascript: void(0)" lang-id-set="title" lang-id="' + hotlinkLang + '"><span lang-id="' + hotlinkLang + '">' + publicLang[hotlinkLang] + '</span></a></li>';
break;
case '2':
hotlinkPicIndex++;
hotlinkPicId = 'hotlinks_' + hotlinkPicIndex;
hotlinkDom += '<li><a class="pic" id="' + hotlinkPicId + '" href="javascript: void(0)"></a></li>';
break;
case '3':
hotlinkTxtIndex++;
hotlinkLang = 'hotlinks_' + hotlinkTxtIndex;
if (hotlinkContainer.indexOf('foot') > -1) {
hotlinkDom += '<li><a class="txt signal_txt" href="javascript: void(0)" lang-id-set="title" lang-id="' + hotlinkLang + '"><span lang-id="' + hotlinkLang + '">' + publicLang[hotlinkLang] + '</span></a></li>';
} else {
hotlinkPicIndex++;
hotlinkPicId = 'hotlinks_' + hotlinkPicIndex;
hotlinkDom += '<li><a class="pic" id="' + hotlinkPicId + '"href="javascript: void(0)"></a><a class="txt" href="javascript: void(0)" lang-id-set="title" lang-id="' + hotlinkLang + '"><span lang-id="' + hotlinkLang + '">' + publicLang[hotlinkLang] + '</span></a></li>';
}
break;
default:
hotlinkTxtIndex++;
hotlinkLang = 'hotlinks_' + hotlinkTxtIndex;
hotlinkDom += '<li><a class="txt signal_txt" href="javascript: void(0)" lang-id-set="title" lang-id="' + hotlinkLang + '"><span lang-id="' + hotlinkLang + '">' + publicLang[hotlinkLang] + '</span></a></li>';
break;
}
});
$('#' + hotlinkContainer).secureAppend(hotlinkDom);
hotlinkDom = '';
hotlinkTxtIndex = 0;
hotlinkPicIndex = 0;
}
function setHotlinkClick(hotlinkItem, hotlinkContainer) {
$.each(hotlinkItem, function (index, value) {
if (value.link) {
switch (value.click_area) {
case '1':
$('#' + hotlinkContainer + ' li').eq(index).find('.txt').attr({ 'href': value.link, 'target': '_blank' });
$('#' + hotlinkContainer + ' li').eq(index).find('.txt').addClass('cursor');
break;
case '2':
$('#' + hotlinkContainer + ' li').eq(index).find('.pic').attr({ 'href': value.link, 'target': '_blank' });
$('#' + hotlinkContainer + ' li').eq(index).find('.pic').addClass('cursor');
break;
case '3':
if (hotlinkContainer.indexOf('foot') <= -1) {
$('#' + hotlinkContainer + ' li').eq(index).find('a').attr({ 'href': value.link, 'target': '_blank' });
$('#' + hotlinkContainer + ' li').eq(index).find('a').addClass('cursor');
}
break;
default:
break;
}
}
});
}
