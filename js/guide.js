$( function () {
var gMonitoringStatus = '';
function wifienablehide (){
if (EMUI.WlanFeatureSwitchController.gWifidisable === '0') {
EMUI.GuideWlanObjController.load(function () {
$('#guide_wifi_page').show();
});
} else {
EMUI.GuideCaptiveSimStatusController.load(null, false);
var hasSim = EMUI.GuideCaptiveSimStatusController.hasSim;
$('#guide_changepassword_page').hide();
EMUI.GuideController.hideAllPage();
$('#guide_reboot_page').show();
if(hasSim){
$("#guide_rebootinfo_nosim,#guide_reboot_device_button").hide();
$("#guide_rebootinfo,#guide_finish_device_button").show();
}
}
}
EMUI.AutoUpgradeController = EMUI.ObjController.extend({
objName: 'online-update/autoupdate-config',
isSupportSaveInfo: false,
isUpg: '',
isStopCaptiveDetect: false,
clickAutoUpgBtn: function (id) {
EMUI.GuideCaptiveSimStatusController.load(null, false);
var hasSim = EMUI.GuideCaptiveSimStatusController.hasSim;
if (id === 'guide_agreeUpg_btn') {
EMUI.AutoUpgradeController.isUpg = 1;
EMUI.GuideController.hideAllPage();
this.gotoGuideWlanOrNocardPage();
if(EMUI.BasicInfoObjController.content.response.classify === 'hilink'){
if (hasSim) {
$("#guide_rebootinfo_nosim,#guide_reboot_device_button").hide();
$("#guide_rebootinfo,#guide_finish_device_button").show();
}
}
}
if (id === 'guide_disAgreeUpg_btn') {
EMUI.AutoUpgradeController.isUpg = 0;
EMUI.GuideController.hideAllPage();
this.gotoGuideWlanOrNocardPage();
if(EMUI.BasicInfoObjController.content.response.classify === 'hilink'){
if (hasSim) {
$("#guide_rebootinfo_nosim,#guide_reboot_device_button").hide();
$("#guide_rebootinfo,#guide_finish_device_button").show();
}
}
}
},
checkAutoUpgradeSwitch: function (flag) {
EMUI.AutoUpgradeController.isUpg = flag;
$('#guide_upgrade_close_auto_upgrade_notice').hide();
$('#submit_fade').hide();
EMUI.GuideController.hideAllPage();
this.gotoGuideWlanOrNocardPage();
},
captiveDeteCtSimCradle: function() {
var simResult = EMUI.GuideSimCardStatusController.content.response.SimState;
var isSupportCradle = GLOBAL.modules.cradle_enabled === '1' ? true : false;
EMUI.GuideCaptiveSimStatusController.load(null, false);
if (isSupportCradle) {
EMUI.GuideFactoryMacController.load(null, false);
EMUI.GuideCradleDetectController.load(null, false);
}
var hasSim = EMUI.GuideCaptiveSimStatusController.hasSim;
var hasCradle = EMUI.GuideCradleDetectController.hasCradle;
$('#guide_uncable_page').show();
$('.guide_uncable_page_sub').hide();
if (hasSim) {
if (isSupportCradle) {
if (hasCradle) {
$('#has_sim_and_has_cable').show();
} else {
$('#has_sim_and_no_cable').show();
}
} else {
$('#only_support_sim_but_has_sim_card').show();
}
} else {
if (isSupportCradle) {
if (hasCradle) {
var connectionmode = EMUI.GuideCradleDetectController.connectionmode;
if (connectionmode === '1' || connectionmode === '2' || connectionmode === '3' || connectionmode === '4') {
$('#no_sim_and_has_cable').show();
$('#guide_next_btn').show();
$('#no_sim_and_has_cable_img').attr('class', 'guide_nosimcard_captive');
$('#guide_nosim_hascradle_notice').attr('lang-id', 'guide.internet.byline');
$('#guide_nosim_hascradle_notice').text(publicLang['guide.internet.byline']);
} else {
$('#no_sim_and_has_cable').show();
$('#guide_next_btn').hide();
$('#no_sim_and_has_cable_img').attr('class', 'guide_nosimcard_captive');
$('#guide_nosim_hascradle_notice').attr('lang-id', 'guide.nosim_lan_only');
$('#guide_nosim_hascradle_notice').text(publicLang['guide.nosim_lan_only']);
}
} else {
$('#no_sim_and_no_cable').show();
}
} else {
$('#only_support_sim_but_no_sim_card').show();
}
}
setTimeout(function() {
if (!EMUI.GuideCradleDetectController.isStopCaptiveDetect) {
EMUI.AutoUpgradeController.captiveDeteCtSimCradle();
}
}, 2000);
},
captiveToWifi: function() {
EMUI.GuideCradleDetectController.isStopCaptiveDetect = true;
EMUI.GuideController.hideAllPage();
wifienablehide();
},
gotoGuideWlanOrNocardPage: function () {
EMUI.LanguageController.registerLanguageEx('no_sim_cable_continueconfig', 'guide.insertlater', '%l', 'guide.continueconfig', '#');
EMUI.LanguageController.transLangEx();
EMUI.LanguageController.registerLanguageEx('no_cable_continueconfig', 'guide.insertcartnotice.simline', '%l', 'guide.continueconfig', '#');
EMUI.LanguageController.transLangEx();
EMUI.LanguageController.registerLanguageEx('no_sim_continueconfig', 'guide.insertcartnotice.byline', '%l', 'guide.continueconfig', '#');
EMUI.LanguageController.transLangEx();
EMUI.LanguageController.registerLanguageEx('only_support_sim_no_sim_continueconfig', 'guide.insertsimlater', '%l', 'guide.continueconfig', '#');
EMUI.LanguageController.transLangEx();
if (GLOBAL.modules.captivePortalGuide !== '1') {
$(document).on('click','#no_sim_cable_continueconfig a', function() {
EMUI.GuideController.haveInsertCardNext(0);
});
$(document).on('click','#only_support_sim_no_sim_continueconfig a', function() {
EMUI.GuideController.haveInsertCardNext(0);
});
$(document).on('click','#no_sim_continueconfig a', function() {
EMUI.GuideController.haveInsertCardNext(1);
});
if(GLOBAL.config.nosupportinsertsim !=='undefined' && GLOBAL.config.nosupportinsertsim === '1'){
$("#no_sim_card").attr('lang-id','redirect.nocardsim');
langStr('no_sim_card', 'redirect.nocardsim');
$("#inserted_sim_card").attr('lang-id','guide.continueconfig');
langStr('inserted_sim_card', 'guide.continueconfig');
$("#inserted_sim_card").attr('onclick','EMUI.GuideController.haveInsertCardNext(0)');
$('#only_support_sim_no_sim_continueconfig').hide();
$('#only_support_sim_but_no_sim_card').css('padding-bottom','20px');
}
} else {
EMUI.LanguageController.registerLanguageEx('only_support_sim_but_has_sim_continueconfig', 'guide.insertsim', '%l', 'guide.continueconfig', '#');
EMUI.LanguageController.transLangEx();
$('#no_sim_cable_continueconfig a').attr('href', '#guide_wifi_content');
$('#no_cable_continueconfig a').attr('href', '#guide_eth_content');
$('#no_sim_continueconfig a').attr('href', '#guide_wifi_content');
$('#only_support_sim_no_sim_continueconfig a').attr('href', '#guide_wifi_content');
$('#only_support_sim_but_has_sim_continueconfig a').attr('href', '#guide_wifi_content');
$(document).on('click','#no_sim_cable_continueconfig a', function() {
EMUI.AutoUpgradeController.captiveToWifi();
});
$(document).on('click','#no_cable_continueconfig a', function() {
EMUI.GuideController.ethConfig(0);
});
$(document).on('click','#no_sim_continueconfig a', function() {
EMUI.AutoUpgradeController.captiveToWifi();
});
$(document).on('click','#only_support_sim_no_sim_continueconfig a', function() {
EMUI.AutoUpgradeController.captiveToWifi();
});
$(document).on('click','#only_support_sim_but_has_sim_continueconfig a', function() {
EMUI.AutoUpgradeController.captiveToWifi();
});
}
EMUI.GuideController.hideAllPage();
secondaryAccountFlag();
if (GLOBAL.isSecondaryAccount) {
$('#guide_wifi_page .ic_eye_close').hide();
$('#guide_wifi_page .ic_eye_open').hide();
EMUI.GuideWlanObjController.isNoNeedWifiPwd = true;
} else {
$('#guide_wifi_page .ic_eye_close').show();
$('#guide_wifi_page .ic_eye_open').show();
}
if (GLOBAL.guideModifyPwd === '2') {
$('#guide_wifi_to_next').hide();
$('#guide_wifi_to_over').show();
} else {
$('#guide_wifi_to_next').show();
$('#guide_wifi_to_over').hide();
}
$(document).on('click focus','#guide_wifi_password', function() {
if (GLOBAL.isSecondaryAccount) {
$(this).val('');
EMUI.GuideWlanObjController.isNoNeedWifiPwd = false;
}
});
EMUI.GuideCaptiveSimStatusController.load(null, false);
var isSupportCradle = GLOBAL.modules.cradle_enabled === '1' ? true : false;
if (isSupportCradle) {
EMUI.GuideFactoryMacController.load(null, false);
EMUI.GuideCradleDetectController.load(null, false);
}
var hasSim = EMUI.GuideCaptiveSimStatusController.hasSim;
var hasCradle = EMUI.GuideCradleDetectController.hasCradle;
var connectionmode = EMUI.GuideCradleDetectController.connectionmode;
var connectstatus = EMUI.GuideCradleDetectController.connectstatus;
if (GLOBAL.modules.captivePortalGuide === '1') {
if (hasSim) {
if (isSupportCradle) {
if (hasCradle && (connectionmode === '1' || connectionmode === '2' || connectionmode === '4')) {
EMUI.GuideCradleDetectController.scanning(EMUI.GuideCradleDetectController.content);
} else {
wifienablehide();
}
} else {
wifienablehide();
}
} else {
if (isSupportCradle) {
if (hasCradle) {
if (connectionmode === '0' || connectionmode === '5' || connectionmode === '6') {
EMUI.AutoUpgradeController.captiveDeteCtSimCradle();
} else if (connectionmode === '1' || connectionmode === '2' || connectionmode === '4') {
EMUI.GuideCradleDetectController.scanning(EMUI.GuideCradleDetectController.content);
} else {
wifienablehide();
}
} else {
EMUI.AutoUpgradeController.captiveDeteCtSimCradle();
}
} else {
if (GLOBAL.config.nosupportinsertsim !=='undefined' && GLOBAL.config.nosupportinsertsim === '1') {
$('#guide_uncable_page').show();
$('.guide_uncable_page_sub').hide();
$('#only_support_sim_but_no_sim_card').show();
$("#no_sim_card").attr('lang-id','redirect.nocardsim');
langStr('no_sim_card', 'redirect.nocardsim');
$('#only_support_sim_no_sim_continueconfig').hide();
var btnStr='<div class="btn_normal_long margin-left-10" lang-id="guide.continueconfig" onclick="EMUI.GuideController.haveInsertCardNext(0)">'+publicLang['guide.continueconfig']+'</div>';
$('#only_support_sim_no_sim_continueconfig').after(btnStr);
}else{
EMUI.AutoUpgradeController.captiveDeteCtSimCradle();
}
}
}
return;
}
if (hasSim) {
if (isSupportCradle) {
EMUI.GuideFactoryMacController.load();
if (hasCradle && connectstatus !== '901' && (connectionmode !== '0' || connectionmode !== '5' || connectionmode !== '6')) {
EMUI.GuideCradleDetectController.scanning(EMUI.GuideCradleDetectController.content);
} else {
wifienablehide();
}
} else {
wifienablehide();
}
} else {
if (isSupportCradle) {
EMUI.GuideFactoryMacController.load();
if (hasCradle) {
if (connectionmode === '0' || connectionmode === '5' || connectionmode === '6') {
EMUI.GuideCradleDetectController.detectCabled(EMUI.GuideCradleDetectController.content);
} else if (connectstatus === '901') {
wifienablehide();
} else {
EMUI.GuideCradleDetectController.scanning(EMUI.GuideCradleDetectController.content);
}
} else {
EMUI.GuideCradleDetectController.detectCabled(EMUI.GuideCradleDetectController.content);
}
} else {
$('#guide_uncable_page').show();
$('.guide_uncable_page_sub').hide();
$('#only_support_sim_but_no_sim_card').show();
}
}
},
initLoginInput: function () {
if (EMUI.webWebFeatureController.rememberPwd && EMUI.webWebFeatureController.rememberPwd === '1') {
EMUI.rememberPassController.load(null, false);
}
if (EMUI.rememberPassController.getrememberpwdStatus() !== '1') {
setTimeout(function () {
$('#login_password').attr('disabled', false);
$('#login_password').removeAttr("disabled");
}, 100);
}
if (GLOBAL.config && GLOBAL.config['no_reset_button'] === '1') {
$('#guide_password_tips').attr('lang-id','guide.password.tips.nolabel');
$('#guide_password_tips').text(publicLang['guide.password.tips.nolabel']);
}
$('#guide_login_page').show();
$('#login_password').focus();
$(document).off('keyup change','#login_password,#login_username');
$(document).on('keyup change','#login_password,#login_username', function() {
if (!EMUI.loginLockStatusController.isChecked) {
EMUI.loginLockStatusController.isChecked = true;
EMUI.loginLockStatusController.checkLoginLockStatus();
}
});
},
sendUpgData: function (captivePost) {
var self = this;
if (GLOBAL.modules.bbou_enabled !== '1') {
return;
}
if (self.isUpg === '') {
return;
}
var request = {
auto_update: self.isUpg,
ui_download: 0
};
if (!captivePost) {
$('#submit_fade').hide();
}
self.postData(request, function (result) {
if (result['type'] === 'error') {
EMUI.globalStatusController.load( function () {
}, false);
EMUI.TokenObjController.load( function () {
}, false);
self.sendUpgData();
}
},false);
}
});
EMUI.GuidePwdObjController = EMUI.ObjController.extend({
objName: 'user/pwd',
isSupportSaveInfo: false,
pwdData: '',
getDAesString: function (encrypted, keystr, ivstr) {
var key = CryptoJS.enc.Hex.parse(keystr);
var iv = CryptoJS.enc.Hex.parse(ivstr);
var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
iv: iv,
mode: CryptoJS.mode.CBC,
padding: CryptoJS.pad.Pkcs7
});
return decrypted.toString(CryptoJS.enc.Latin1);
},
getWlanPwd: function () {
var self = this;
var scram = CryptoJS.SCRAM();
var wifiNonce = scram.nonce().toString();
var wifiSalt = scram.nonce().toString();
var nonceStr = wifiNonce + wifiSalt;
try {
var nonceData = this.doRSAEncrypt(nonceStr);
} catch (exception) {
debugInfo('doRSAEncrypt error ');
return;
}
var wlanpwddata = {
module: 'wlan',
nonce: nonceData
};
this.postData(wlanpwddata, function (pwdret) {
if (!pwdret.response
|| !pwdret.response.pwd
|| !pwdret.response.hash
|| !pwdret.response.iter) {
return;
}
var wifiEncrypted = pwdret.response.pwd;
var salt = CryptoJS.enc.Hex.parse(wifiSalt);
var iter = pwdret.response.iter;
var saltedStr = scram.saltedPassword(wifiNonce, salt, iter);
saltedStr = saltedStr.toString();
var aesKey = saltedStr.substring(0, 32);
var aesIV = saltedStr.substring(32, 48);
var hmacKey = saltedStr.substring(48, 64);
var hashData = scram.signature(CryptoJS.enc.Hex.parse(wifiEncrypted), CryptoJS.enc.Hex.parse(hmacKey));
hashData = hashData.toString();
if (pwdret.response.hash !== hashData) {
return;
}
var encrypted = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(wifiEncrypted));
var decryptedData = self.getDAesString(encrypted, aesKey, aesIV);
decryptedData = decryptedData.substring(decryptedData.indexOf('<response>'));
var xml;
if (typeof decryptedData === 'string' || typeof decryptedData === 'number') {
if (!window.ActiveXObject) {
var parser = new DOMParser();
xml = parser.parseFromString(decryptedData, 'text/xml');
} else {
xml = new ActiveXObject('Microsoft.XMLDOM');
xml.async = false;
xml.loadXML(decryptedData);
}
} else {
xml = decryptedData;
}
var keydata = self.xml2object($(xml));
var ssids = $.makeArray(keydata['response']['Ssids']['Ssid']);
EMUI.GuidePwdObjController.pwdData = ssids;
if (GLOBAL.modules.captivePortalGuide === '1') {
$('#guide_wifi_password').val('');
$('#guide_wifi_password_text').val('');
} else {
$('#guide_wifi_password').val(ssids[0]['WifiWpapsk']);
$('#guide_wifi_password_text').val(ssids[0]['WifiWpapsk']);
oldWifipw = ssids[0]['WifiWpapsk'];
oldWifiPassword = ssids[0]['WifiWpapsk'];
}
});
}
});
EMUI.WlanFeatureSwitchController = EMUI.ObjController.extend({
objName: 'wlan/wifi-feature-switch',
gWifidisable: '0'
});
EMUI.guideRebootController = EMUI.ObjController.extend({
objName: 'device/control',
isSupportSaveInfo: false
});
EMUI.WlanMutiBasicController = EMUI.ObjController.extend({
objName: 'wlan/multi-basic-settings',
wlanBasic5gEnable: false,
isSupportSaveInfo: false,
getsuccessProc: function (data) {
var responcedata = data['response'];
var wlanBasicData = $.makeArray(responcedata['Ssids']['Ssid']);
var self = this;
$(wlanBasicData).each( function (i) {
var wlanBasicItem = wlanBasicData[i];
if (wlanBasicItem['ID'].indexOf('2.Ssid.1') > 0 && wlanBasicItem['WifiEnable'] === '1') {
self.wlanBasic5gEnable = true;
}
})
},
});
EMUI.WlanStatusSwitchController = EMUI.ObjController.extend({
objName: 'wlan/status-switch-settings',
wlanStatus5gEnable: false,
getsuccessProc: function (data) {
var responcedata = data['response'];
var wlanStatusData = $.makeArray(responcedata['radios']['radio']);
var self = this;
var wlanSwitchDataLeng = wlanStatusData.length;
$(wlanStatusData).each( function (i) {
if (wlanSwitchDataLeng > 1) {
if (wlanStatusData[i]['index'] === '1' && wlanStatusData[i]['wifienable'] === '1') {
self.wlanStatus5gEnable = true;
}
}
})
},
initGuide5gWlanInfo: function () {
EMUI.WlanStatusSwitchController.load(null, false);
EMUI.WlanMutiBasicController.load(null, false);
if (EMUI.WlanStatusSwitchController.wlanStatus5gEnable && EMUI.WlanMutiBasicController.wlanBasic5gEnable) {
$('#guide_wifi_ssid_5g').show();
$('.wifi_24gpassword_5gpass_same').show();
} else {
$('#guide_wifi_ssid_5g').hide();
$('.wifi_24gpassword_5gpass_same').hide();
}
}
});
EMUI.GuideWifiPowerObjController = EMUI.ObjController.extend({
objName: '',
curPowertype: '',
curFrequencytype: '',
getDefaultValue: function(radio) {
var defaultvalue = [];
defaultvalue['0'] = {
mode: 'b/g/n',
bandwidth: '0',
channel: '0'
};
defaultvalue['1'] = {
mode: GLOBAL.wifiFeatureSwitch.acmode_enable !== '1' ? 'a/n' : 'a/n/ac',
bandwidth: (EMUI.WlanFeatureSwitchController.autoBandwidth5g === '1') ? '0' : '20',
channel: '0'
};
return defaultvalue[radio];
},
isSupportPowerSetting: function() {
if (GLOBAL.wifiFeatureSwitch !== '' &&
GLOBAL.wifiFeatureSwitch.guidepowerenable &&
GLOBAL.wifiFeatureSwitch.guidepowerenable === '1') {
return true;
}
return false;
},
isSupportFrequencySetting: function() {
if (GLOBAL.wifiFeatureSwitch !== '' && GLOBAL.wifiFeatureSwitch.guidefrequencyenable && GLOBAL.wifiFeatureSwitch.guidefrequencyenable === '1') {
return true;
}
return false;
},
isSingleChip: function() {
if (typeof GLOBAL.wifiFeatureSwitch === 'undefined') {
return false;
}
if (!GLOBAL.wifiFeatureSwitch.wifi_dbdc_enable ||
!GLOBAL.wifiFeatureSwitch.isdoublechip) {
return false;
}
if (GLOBAL.wifiFeatureSwitch.wifi_dbdc_enable === '0' && GLOBAL.wifiFeatureSwitch.isdoublechip === '0') {
return true;
}
return false;
},
showWifiPowerToPage: function() {
if (this.isSupportPowerSetting()) {
$('#wifi_power').show();
showSelectedValue('wifi_power_type', '2');
this.showWifiPowerExplain('2');
EMUI.GuideWifiPowerObjController.curPowertype = '2';
$(document).on('click','#wifi_power_type_list', EMUI.GuideWifiPowerObjController.selectPowerTypeHandle);
} else {
$('#wifi_power').hide();
}
},
showWifiFrequencyToPage: function() {
if (this.isSupportFrequencySetting()) {
$('#wifi_frequency').show();
showSelectedValue('wifi_frequency_type', '1');
EMUI.GuideWifiPowerObjController.curFrequencytype = '1';
this.showWifiFrequencyExplain('1');
$(document).on('click','#wifi_frequency_type_list', EMUI.GuideWifiPowerObjController.selectFrequencyTypeHandle);
} else {
$('#wifi_frequency').hide();
}
},
showWifiPowerExplain: function(wifiModel) {
if (wifiModel === '1') {
$('#wifi_power_warn').attr('lang-id', 'wifi_power_standard_explain');
$('#wifi_power_warn').text(publicLang['wifi_power_standard_explain']);
} else if (wifiModel === '2') {
$('#wifi_power_warn').attr('lang-id', 'wifi_power_throuhtwall_explain');
$('#wifi_power_warn').text(publicLang['wifi_power_throuhtwall_explain']);
}
},
showWifiFrequencyExplain: function(wifiFrequency) {
if (wifiFrequency === '0') {
$('#wifi_frequency_warn').attr('lang-id', 'wifi_frequency_warn_24');
$('#wifi_frequency_warn').text(publicLang['wifi_frequency_warn_24']);
$('#wifi_frequency_warn_tips').hide();
} else {
$('#wifi_frequency_warn').attr('lang-id', 'wifiadv.5gwarn');
$('#wifi_frequency_warn').text(publicLang['wifiadv.5gwarn']);
$('#wifi_frequency_warn_tips').show();
}
},
selectList: function(self) {
var selfId = self.id;
var boxId = selfId.replace('_type','');
$('#' + boxId).css({
'margin-bottom': ' 0px'
});
if (GLOBAL.modules.captivePortalGuide !== '1' && $('#'+ selfId +'_list').css('display') === 'none') {
$('#' + boxId).css({
'margin-bottom': ' 70px'
});
}
SelectItem(self);
if (selfId.indexOf('power') > -1) {
EMUI.GuideWifiPowerObjController.curPowertype = $('#' + selfId).attr('value');
}else{
EMUI.GuideWifiPowerObjController.curFrequencytype = $('#' + selfId).attr('value');
}
if (GLOBAL.modules.captivePortalGuide === '1') {
EMUI.Scroll.setTop('#wifi_content',350);
} else {
EMUI.Scroll.setTop('#wifi_content',300);
}
},
selectPowerTypeHandle: function() {
$('#wifi_power').css({
'margin-bottom': ' 0px'
});
var wifiPowerType = $('#wifi_power_type').attr('value');
EMUI.GuideWifiPowerObjController.showWifiPowerExplain(wifiPowerType);
if (GLOBAL.modules.captivePortalGuide === '1' && EMUI.GuideWifiPowerObjController.curPowertype !== wifiPowerType && wifiPowerType === '1') {
utilStartConfirmDialog(publicLang['guide.wifi_power_standard_tips'], EMUI.GuideWifiPowerObjController.selectStandardConfirm, EMUI.GuideWifiPowerObjController.selectStandardCancel);
}
},
selectFrequencyTypeHandle: function() {
$('#wifi_frequency').css({
'margin-bottom': ' 0px'
});
var wifiFrequencyType = $('#wifi_frequency_type').attr('value');
EMUI.GuideWifiPowerObjController.showWifiFrequencyExplain(wifiFrequencyType);
},
selectStandardConfirm: function() {
showSelectedValue('wifi_power_type', '2');
EMUI.GuideWifiPowerObjController.showWifiPowerExplain('2');
EMUI.GuideWifiPowerObjController.curPowertype = '2';
},
selectStandardCancel: function() {
showSelectedValue('wifi_power_type', '1');
EMUI.GuideWifiPowerObjController.showWifiPowerExplain('1');
EMUI.GuideWifiPowerObjController.curPowertype = '1';
},
sendPowerData: function() {
var self = this;
if (!self.isSupportPowerSetting() && !self.isSupportFrequencySetting()) {
return
}
var senddata = ' ';
var needFrequencyPost = $('#wifi_frequency_type').val() === '1' ? true : false;
if (self.isSingleChip()) {
if (self.isSupportPowerSetting()) {
getAjaxData('api/wlan/multi-security-settings', function(ret) {
if (ret.type === 'response') {
senddata = $.makeArray(ret.response);
senddata[0].wifipowermode = $('#wifi_power_type').val();
senddata[0].WifiRestart = '0';
self.postSecurity(senddata[0], null);
}
}, { sync: true });
}
if (self.isSupportFrequencySetting() && needFrequencyPost) {
var defaultvalue = self.getDefaultValue($('#wifi_frequency_type').val());
getAjaxData('api/wlan/multi-security-settings-ex', function(ret) {
if (ret.type === 'response') {
senddata = $.makeArray(ret.response.ssids.ssid);
for (var i = 0; i < senddata.length; i++) {
senddata[i].WifiMode = defaultvalue.mode;
senddata[i].wifibandwidth = defaultvalue.bandwidth;
senddata[i].WifiChannel = defaultvalue.channel;
}
self.postSecurityEx(senddata, null);
}
}, { sync: true });
}
} else if (self.isSupportPowerSetting()) {
getAjaxData('api/wlan/multi-security-settings-ex', function(ret) {
if (ret.type === 'response') {
senddata = $.makeArray(ret.response.ssids.ssid);
for (var i = 0; i < senddata.length; i++) {
senddata[i].wifipowermode = $('#wifi_power_type').val();
}
self.postSecurityEx(senddata, null);
}
}, { sync: true });
}else{}
$('#wifi_change_info').show();
EMUI.GuideController.isWifiReboot = true;
},
postSecurity: function(senddata, callback) {
this.isSupportSaveInfo = false;
this.objName = 'wlan/multi-security-settings';
this.postData(senddata, callback);
},
postSecurityEx: function(senddata, callback) {
this.isSupportSaveInfo = false;
this.objName = 'wlan/multi-security-settings-ex';
var postdata = {
ssids: {
ssid: senddata
},
WifiRestart: 0
};
this.postData(postdata, callback);
},
});
EMUI.GuideWlanObjController = EMUI.ObjController.extend({
objName: 'wlan/wlan-guide-settings',
contentType: 'application/x-www-form-urlencoded; charset=UTF-8;enc',
isSupportSaveInfo: false,
isGoToReboot: false,
isNoNeedWifiPwd: false,
oldSsidData: [],
getsuccessProc: function (data) {
var responcedata = data['response'];
var wifidata = responcedata['Ssids']['Ssid'];
EMUI.GuideWlanObjController.oldSsidData = $.makeArray(EMUI.ObjController.cloneObject(wifidata));
if (typeof wifidata.length !== 'undefined') {
var wifidatalength = wifidata.length;
for (var loop = 0; loop < wifidatalength; loop++) {
var wifiitem = wifidata[loop];
if (wifiitem['ID'].indexOf('1.Ssid.1') > 0) {
$('#guide_wifi_name').val(wifiitem['WifiSsid']);
$('#guide_wifi_name').attr('maxlength', 32);
} else if (wifiitem['ID'].indexOf('2.Ssid.1') > 0) {
EMUI.WlanStatusSwitchController.initGuide5gWlanInfo();
$('#guide_wifi_name_5g').text(wifiitem['WifiSsid']);
if (GLOBAL.wifiFeatureSwitch && GLOBAL.wifiFeatureSwitch.wifi5gnamepostfix) {
$('#guide_wifi_name').attr('maxlength', 32 - GLOBAL.wifiFeatureSwitch.wifi5gnamepostfix.length);
} else {
$('#guide_wifi_name').attr('maxlength', 29);
}
}
}
} else {
$('#guide_wifi_name').val(wifidata['WifiSsid']);
};
ssidCheckChinese('#guide_wifi_name');
if (EMUI.WlanStatusSwitchController.wlanStatus5gEnable) {
if (GLOBAL.wifiFeatureSwitch.hilink_dbho_enable && GLOBAL.wifiFeatureSwitch.hilink_dbho_enable === '1') {
EMUI.doubleFrequencyConObjCtrl.load(null, false);
if (GLOBAL.wifiFeatureSwitch.dbhoswitchshow && GLOBAL.wifiFeatureSwitch.dbhoswitchshow === '1') {
$('#wifi_guide_dbho_swtich_div').show();
$('#wifi_guide_dbho_prompt_div').show();
} else {
$('#wifi_guide_dbho_swtich_div').hide();
$('#wifi_guide_dbho_prompt_div').hide();
}
$('#wifi_guide_top_padding').hide();
$(document).off('click','#wifi_guide_dbho_switch');
$(document).on('click','#wifi_guide_dbho_switch',changeDbhoSwitch);
if (GLOBAL.modules.isdbFrequencyStatus) {
$('#wifi_guide_dbho_switch').addClass('switch_on').removeClass('switch_off');
if (GLOBAL.modules.dbho_special_enable === '1') {
$('#wifi_guide_dbho_prompt_div').hide();
if (GLOBAL.wifiFeatureSwitch.dbhoswitchshow && GLOBAL.wifiFeatureSwitch.dbhoswitchshow === '1') {
$('#wifi_2gdbho_prompt_div').show();
} else {
$('#wifi_2gdbho_prompt_div').hide();
}
$('#wifi_5gdbho_prompt_div').show();
$('#guide_wifi_ssid_5g').show();
$('.wifi_24gpassword_5gpass_same').show();
for (var i=0;i<wifidata.length;i++) {
if (wifidata[i].wifiisdbhospecial === '1') {
$('#guide_wifi_name_5g').text(wifidata[i].WifiSsid);
}
}
} else {
$('#guide_wifi_ssid_5g').hide();
$('.wifi_24gpassword_5gpass_same').hide();
}
} else {
$('#wifi_guide_dbho_switch').addClass('switch_off').removeClass('switch_on');
$('#guide_wifi_ssid_5g').show();
$('.wifi_24gpassword_5gpass_same').show();
if (GLOBAL.modules.dbho_special_enable === '1') {
$('#wifi_guide_dbho_prompt_div').hide();
if (GLOBAL.wifiFeatureSwitch.dbhoswitchshow && GLOBAL.wifiFeatureSwitch.dbhoswitchshow === '1') {
$('#wifi_2gdbho_prompt_div').show();
} else {
$('#wifi_2gdbho_prompt_div').hide();
}
$('#wifi_5gdbho_prompt_div').show();
}
}
};
}
if (GLOBAL.deviceInfo && GLOBAL.deviceInfo.devicename) {
if (GLOBAL.deviceInfo.devicename === 'H312-371' || GLOBAL.deviceInfo.devicename === 'H312m-371') {
$('#guide_outdoor_prompt').show();
}
} else {
$('#guide_outdoor_prompt').hide();
}
EMUI.GuideWifiPowerObjController.showWifiPowerToPage();
EMUI.GuideWifiPowerObjController.showWifiFrequencyToPage();
},
checkSSIDChar: function (unamepwd) {
var reg = /^[a-zA-Z0-9\_\- \.]+$/;
return reg.test(unamepwd);
},
hideWpaStrangth: function () {
$('#wifi_password_strong').hide();
$('#wifi_password_medium').hide();
$('#wifi_password_week').hide();
},
isCheckKey: function (evt) {
if ((evt.type === 'keydown' || evt.type === 'keypress' || evt.type === 'keyup')
&& (evt.keyCode === 37 || evt.keyCode === 38 || evt.keyCode === 39 || evt.keyCode === 40)) {
return true;
}
return false;
},
charMode: function (iN) {
if (iN >= 48 && iN <= 57) {
return 1;
} else if (iN >= 65 && iN <= 90) {
return 2;
} else if (iN >= 97 && iN <= 122) {
return 4;
}
return 8;
},
bitTotal: function (num) {
var modes = 0;
var i = 0;
var count = num;
for (i = 0; i < 4; i++) {
if (count & 1) {
modes++;
}
count >>>= 1;
}
return modes;
},
checkWpaStrength: function (passValue, ssidName) {
var ret = 0;
var sPWLength = passValue.length;
this.hideWpaStrangth();
if (passValue === '') {
return;
}
var nameSame = false;
if (ssidName !== '' && (ssidName !== null)) {
if (ssidName === passValue || ssidName.split('').reverse().join('') === passValue) {
nameSame = true;
}
}
var repeatPass = 0;
var tempArray = passValue.split('');
var n = 0;
for (var i = 0; i < tempArray.length; i++) {
var sliceArray = [];
if (tempArray[i] !== tempArray[i + 1]) {
sliceArray = tempArray.slice(n, i + 1);
if (sliceArray.length > 1) {
repeatPass += sliceArray.length;
}
n = i + 1;
}
}
var sPWModes = 0;
for (var j = 0; j < sPWLength; j++) {
sPWModes |= this.charMode(passValue.charCodeAt(j));
}
sPWModes = this.bitTotal(sPWModes);
if (sPWLength < 6 || sPWModes === 1 || nameSame === true) {
ret = 1;
} else if (sPWLength >= 6) {
if (sPWLength <= 10 && sPWModes === 2) {
ret = 2;
}
if (sPWModes >= 3 || (sPWLength > 10 && sPWModes === 2)) {
ret = 3;
}
if (3 * repeatPass > sPWLength) {
ret = 2;
}
if (3 * repeatPass > sPWLength * 2) {
ret = 1;
}
}
if (ret === 3) {
$('#wifi_password_strong').show();
} else if (ret === 2) {
$('#wifi_password_medium').show();
} else {
$('#wifi_password_week').show();
}
},
checkWpa: function (str) {
if (str === '') {
return true;
}
for (var i = 0; i < str.length; i++) {
var numCharStr = str.charCodeAt(i);
if ((numCharStr > 126) || (numCharStr < 32)) {
return false;
} else if ((numCharStr === 44) || (numCharStr === 34) || (numCharStr === 58) || (numCharStr === 59) || (numCharStr === 92) || (numCharStr === 38) || (numCharStr === 37)
|| ( numCharStr === 43) || ( numCharStr === 39) || ( numCharStr === 60) || (numCharStr === 62) || ( numCharStr === 63)) {
return false;
}
continue;
}
return true;
},
checkWpakey: function () {
var pwdVal = $('#guide_wifi_password').val();
var wlanFeaterContent = EMUI.WlanFeatureSwitchController.content.response;
var wpaKeyLen = pwdVal.length;
if (typeof wlanFeaterContent.chinesessid_enable === 'undefined') {
wlanFeaterContent.chinesessid_enable = '0';
}
if (typeof wlanFeaterContent.wifispecialcharenable === 'undefined') {
wlanFeaterContent.wifispecialcharenable = wlanFeaterContent.chinesessid_enable;
}
if (wpaKeyLen === 0) {
if (GLOBAL.modules.captivePortalGuide !== '1') {
return 'dialup_hint_password_empty';
} else {
return 'captiveGuide_hint_password_empty';
}
} else if (hasSpaceOrTabAtHead(pwdVal)) {
return 'input_cannot_begin_with_space';
} else {
EMUI.webAndWifiRuleController.load(null, false);
if (EMUI.webAndWifiRuleController && EMUI.webAndWifiRuleController.wifiMinLength) {
var wifiPwdMinLength = EMUI.webAndWifiRuleController.wifiMinLength;
wifiPwdMinLength = parseInt(wifiPwdMinLength);
}
if (oldWifiPassword !=getPassword('guide_wifi_password') && EMUI.webWebFeatureController.isSuportPwdRuleEnable &&
EMUI.webWebFeatureController.isSuportPwdRuleEnable === '1' && EMUI.webAndWifiRuleController &&
(EMUI.webAndWifiRuleController.wifiRule != '0' || wifiPwdMinLength > 8 ||
(EMUI.webAndWifiRuleController.wifiExcludeSet && EMUI.webAndWifiRuleController.wifiExcludeSet.length > 0))) {
if (EMUI.webAndWifiRuleController.wifiRule === '1') {
if (!passwordRule1Check(pwdVal) || (wpaKeyLen < wifiPwdMinLength)) {
return 'wifi_password_rule_tips1';
}
} else if (EMUI.webAndWifiRuleController.wifiRule === '2') {
if (!passwordRule2Check(pwdVal) || (wpaKeyLen < wifiPwdMinLength)) {
return 'wifi_password_rule_tips2';
}
} else {
if (wpaKeyLen < wifiPwdMinLength) {
return 'wifi_password_rule_tips4';
}
if (wlanFeaterContent.wifispecialcharenable === '1') {
if (!this.checkVisibleChar(pwdVal)) {
return 'wlan_hint_ssid_valid_char_new';
}
} else {
if (!this.checkWpa(pwdVal)) {
return 'wlan_hint_wps_pwd_valid_char';
}
}
}
if (EMUI.webAndWifiRuleController.wifiExcludeSet && EMUI.webAndWifiRuleController.wifiExcludeSet.length > 0) {
var wifiHasSameStrData = EMUI.webAndWifiRuleController.hasSameStr(pwdVal,EMUI.webAndWifiRuleController.wifiExcludeSet);
if (wifiHasSameStrData.isTrueOrFalse) {
wifiHasSameStrData.isTrueOrFalse = false;
return 'wifi_password_rule_tips5';
}
}
} else {
if(wpaKeyLen < 8){
return 'wlan_hint_wps_pwd_valid_type';
}
if (wlanFeaterContent.wifispecialcharenable === '1') {
if (!this.checkVisibleChar(pwdVal)) {
return 'wlan_hint_ssid_valid_char_new';
}
} else {
if (!this.checkWpa(pwdVal)) {
return 'wlan_hint_wps_pwd_valid_char';
}
}
}
}
return '';
},
getssiderrmsg: function (supportchinese, supportspecailchar) {
if (supportchinese === '0' && supportspecailchar === '0') {
return 'wlan_hint_ssid_valid_char';
} else if (supportchinese === '1' && supportspecailchar === '0') {
return 'wlan_hint_ssid_char_cn';
} else if (supportchinese === '0' && supportspecailchar === '1') {
return 'wlan_hint_ssid_valid_char_new';
}
return 'wlan_hint_ssid_valid_char_cn';
},
checkSsidPara: function () {
var ssid = $('#guide_wifi_name').val();
var wlanFeaterContent = EMUI.WlanFeatureSwitchController.content.response;
if (typeof wlanFeaterContent.chinesessid_enable === 'undefined') {
wlanFeaterContent.chinesessid_enable = '0';
}
if (typeof wlanFeaterContent.wifispecialcharenable === 'undefined') {
wlanFeaterContent.wifispecialcharenable = wlanFeaterContent.chinesessid_enable;
}
var byteCount = 0;
var charCount = 0;
var chineseChar = /[\u4e00-\u9fa5]/;
ssid = $.trim(ssid);
if (ssid === '') {
return 'wlan_hint_ssid_empty';
}
var ssidLen = ssid.length;
var byteCountLimit = 32;
if (EMUI.WlanMutiBasicController.wlanBasic5gEnable) {
byteCountLimit = 29;
}
if (wlanFeaterContent.wifispecialcharenable === '0' && hasSpaceOrTabAtHead(ssid)) {
return 'input_cannot_begin_with_space';
}
for (var i = 0; i < ssidLen; i++) {
var c = ssid.charAt(i);
if (this.checkSSIDChar(c)) {
byteCount++;
} else if (c.charCodeAt() <= 126 && c.charCodeAt() >= 32) {
if (wlanFeaterContent.wifispecialcharenable === '0') {
return this.getssiderrmsg(wlanFeaterContent.chinesessid_enable, wlanFeaterContent.wifispecialcharenable);
}
byteCount++;
} else if (chineseChar.test(c)) {
if (wlanFeaterContent.chinesessid_enable === '0') {
return this.getssiderrmsg(wlanFeaterContent.chinesessid_enable, wlanFeaterContent.wifispecialcharenable);
}
byteCount += 3;
} else {
return this.getssiderrmsg(wlanFeaterContent.chinesessid_enable, wlanFeaterContent.wifispecialcharenable);
}
charCount++;
if (byteCount > byteCountLimit) {
charCount--;
if (EMUI.WlanStatusSwitchController.wlanStatus5gEnable) {
if (GLOBAL.wifiFeatureSwitch && GLOBAL.wifiFeatureSwitch.wifi5gnamepostfix) {
$('#guide_wifi_name_5g').text($.trim($('#guide_wifi_name').val()) + GLOBAL.wifiFeatureSwitch.wifi5gnamepostfix);
} else {
$('#guide_wifi_name_5g').text($.trim($('#guide_wifi_name').val()) + '_5G');
}
}
return 'stk_content_too_long';
}
}
return '';
},
checkSsidSamePara:function() {
var ssid = $('#guide_wifi_name').val();
var wifidata = EMUI.GuideWlanObjController.oldSsidData;
for(var i=0;i<wifidata.length;i++) {
if (wifidata[i].ID.indexOf('Radio.1.Ssid.1.') > -1) {
continue;
}
if (EMUI.WlanStatusSwitchController.wlanStatus5gEnable && wifidata[i].ID.indexOf('Radio.2.Ssid.1.') > -1) {
continue;
}
if (GLOBAL.deviceInfo && (GLOBAL.deviceInfo.devicename === 'H112-370' || GLOBAL.deviceInfo.devicename === 'H112-372-A') && wifidata[i].ID.indexOf('Radio.2') > -1 && wifidata[i].ID.indexOf('Radio.2.Ssid.1.') < 0) {
continue;
}
if (GLOBAL.modules.dbho_special_enable === '1') {
if (wifidata[i].wifiisdbhospecial === '1') {
continue;
}
}
if (wifidata[i].WifiSsid === ssid) {
return 'multi_ssid_same_message';
}
}
return '';
},
createPostData: function (wifiObj, accountObj, rebootobj) {
var postData = {};
var Ssids = {};
Ssids.Ssid = wifiObj;
postData.Ssids = Ssids;
postData.rebootInfo = rebootobj;
postData.accountInfo = accountObj;
return postData;
},
setWlanAndAccount: function (data) {
var self = this;
if (data === 2) {
if(EMUI.WlanFeatureSwitchController.gWifidisable === '0'){
EMUI.GuideWlanObjController.load(null, false);
}
this.content.response.rebootInfo = 0;
delete this.content.response.accountInfo;
self.postData(this.content.response, function (result) {
if (EMUI.ObjController.isAjaxReturnOK(result)) {
EMUI.GuideToLoginObjController.jumpHome();
}
});
return;
}
if(EMUI.WlanFeatureSwitchController.gWifidisable === '0'){
var postdata = this.content.response;
var wifiPostData = [];
var wifidata = postdata['Ssids']['Ssid'];
}
if (this.isGoToReboot) {
return;
}
if (EMUI.WlanStatusSwitchController.wlanStatus5gEnable && GLOBAL.wifiFeatureSwitch.hilink_dbho_enable && GLOBAL.wifiFeatureSwitch.hilink_dbho_enable === '1') {
var sendData = {
data: {
DbhoEnable: GLOBAL.modules.isdbFrequencyStatus,
WifiRestart: 0
}
};
EMUI.GuideWlanDbhoObjController.postDbho(sendData, null, false);
}
EMUI.GuideWifiPowerObjController.sendPowerData();
$('#guide_reboot_device_button').addClass('btn_disabled');
this.isGoToReboot = true;
if(EMUI.WlanFeatureSwitchController.gWifidisable === '0'){
if (typeof wifidata.length !== 'undefined') {
var wifidatalength = wifidata.length;
for (var loop = 0; loop < wifidatalength; loop++) {
var wifiitem = wifidata[loop];
if (wifiitem['ID'].indexOf('1.Ssid.1') > 0) {
postdata['Ssids']['Ssid'][loop]['WifiSsid'] = window.xss($('#guide_wifi_name').val());
postdata['Ssids']['Ssid'][loop]['WifiWpapsk'] = window.xss($('#guide_wifi_password').val());
wifiPostData.push(postdata['Ssids']['Ssid'][loop]);
} else if (wifiitem['ID'].indexOf('2.Ssid.1') > 0 && EMUI.WlanStatusSwitchController.wlanStatus5gEnable) {
postdata['Ssids']['Ssid'][loop]['WifiSsid'] = window.xss($('#guide_wifi_name_5g').text());
if (GLOBAL.wifiFeatureSwitch.hilink_dbho_enable && GLOBAL.wifiFeatureSwitch.hilink_dbho_enable === '1' && GLOBAL.modules.isdbFrequencyStatus) {
postdata['Ssids']['Ssid'][loop]['WifiSsid'] = window.xss($('#guide_wifi_name').val());
}
postdata['Ssids']['Ssid'][loop]['WifiWpapsk'] = window.xss($('#guide_wifi_password').val());
wifiPostData.push(postdata['Ssids']['Ssid'][loop]);
}
if (GLOBAL.wifiFeatureSwitch.hilink_dbho_enable && GLOBAL.wifiFeatureSwitch.hilink_dbho_enable === '1'
&& GLOBAL.modules.isdbFrequencyStatus && GLOBAL.modules.dbho_special_enable === '1') {
if (wifiitem.wifiisdbhospecial === '1') {
postdata['Ssids']['Ssid'][loop]['WifiSsid'] = window.xss($('#guide_wifi_name_5g').text());
postdata['Ssids']['Ssid'][loop]['WifiWpapsk'] = window.xss($('#guide_wifi_password').val());
wifiPostData.push(postdata['Ssids']['Ssid'][loop]);
}
}
}
} else {
postdata['Ssids']['Ssid']['WifiSsid'] = window.xss($('#guide_wifi_name').val());
postdata['Ssids']['Ssid']['WifiWpapsk'] = window.xss($('#guide_wifi_password').val());
wifiPostData.push(postdata['Ssids']['Ssid']);
}
}
var account = {};
account.currentpassword = (GLOBAL.modules.captivePortalGuide !== '1') ? window.xss($('#login_password').val()) : '';
if ($('#same_wifi_switch').hasClass('switch_on') || $('#same_wifi_switch').hasClass('check_on')) {
account.newpassword = window.xss(getPassword('guide_wifi_password'));
account.confirmpwd = window.xss(getPassword('guide_wifi_password'));
} else {
account.newpassword = window.xss($('#new_password').val());
account.confirmpwd = window.xss($('#new_password').val());
}
var reboot = {};
reboot.isReboot = 0;
var setData = this.createPostData(wifiPostData, account, reboot);
EMUI.HeartBeatObjController.stop();
if (GLOBAL.modules.captivePortalGuide !== '1') {
if (EMUI.GuideController.isShowReboot) {
EMUI.GuideController.deviceReboot();
} else {
EMUI.GuideController.wifiReboot();
checkSSIDAndPwdChange();
}
}
if (EMUI.GuideWlanObjController.isNoNeedWifiPwd) {
if (setData['Ssids'] && setData['Ssids']['Ssid'] && $.isArray(setData['Ssids']['Ssid'])) {
$(setData['Ssids']['Ssid']).each(function(i) {
setData['Ssids']['Ssid'][i]['WifiWpapsk'] = null;
})
}
}
if (data === 1 && (GLOBAL.guideModifyPwd === '1' || GLOBAL.guideModifyPwd === '2')) {
delete setData['accountInfo'];
}
self.postData(setData, function (result) {
self.isGoToReboot = false;
setWlanCallback(result);
});
function setWlanCallback(result) {
$('#guide_reboot_device_button').removeClass('btn_disabled');
EMUI.checkUserController.isHasClick = false;
$('#guide_modify_password').removeClass('btn_disabled');
if (!result.response || result.response !== 'OK') {
if (result.error.code === '100004') {
setTimeout(function(){
self.postData(setData, function(result) {
self.isGoToReboot = false;
setWlanCallback(result);
});
},100);
return;
}
window.location.href = GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL;
return;
}
if (EMUI.ObjController.isAjaxReturnOK(result)) {
if (data === 1) {
EMUI.GuideToLoginObjController.loginCallback();
} else {
EMUI.GuideToLoginObjController.relogin();
}
setTimeout( function () {
$('#wifi_change_info').show();
}, 15000);
}
}
}
});
EMUI.RestoreDefaultStatus = EMUI.ObjController.extend({
objName: 'device/basic_information',
isSupportSaveInfo: false,
setRestoreFlag: function () {
var self = this;
var data = {
restore_default_status: 0
};
var callback = setWifiRebootOrDeviceReboot;
if (GLOBAL.modules.captivePortalGuide === '1') {
callback = captiveSetReboot;
}
self.postData(data, callback, false);
}
});
function captiveSetReboot() {
EMUI.GuideCaptiveSimStatusController.load(null, false);
var simOperEvent = EMUI.GuideCaptiveSimStatusController.content.response.SimOperEvent;
if (simOperEvent === '1') {
$('#finish_reboot_des_1').attr('lang-id', 'guide.device_finish_reboot_des_1');
$('#finish_reboot_des_1').text(publicLang['guide.device_finish_reboot_des_1']);
EMUI.GuideController.timeNum = 50;
var request = {
Control: 1
};
EMUI.guideRebootController.postData(request, EMUI.GuideController.showFinishPage, false);
} else {
$('#finish_reboot_des_1').attr('lang-id', 'guide.wifi_finish_reboot_des_1');
$('#finish_reboot_des_1').text(publicLang['guide.wifi_finish_reboot_des_1']);
EMUI.GuideController.timeNum = 5;
EMUI.WlanMutiBasicController.load(null, false);
var wifidata = EMUI.WlanMutiBasicController.content.response;
wifidata.WifiRestart = 1;
if(typeof wifidata.Ssids.Ssid.length !== 'undefined'){
for(var i=0;i<wifidata.Ssids.Ssid.length;i++){
wifidata.Ssids.Ssid[i].WifiSsid = xss(wifidata.Ssids.Ssid[i].WifiSsid);
}
} else {
wifidata.Ssids.Ssid.WifiSsid = xss(wifidata.Ssids.Ssid.WifiSsid);
}
EMUI.WlanMutiBasicController.postData(wifidata, EMUI.GuideController.showFinishPage, false);
}
}
function setWifiRebootOrDeviceReboot() {
if (EMUI.GuideController.isShowReboot) {
var request = {
Control: 1
};
EMUI.guideRebootController.postData(request, null, false);
} else {
if(EMUI.GuideController.isWifiReboot){
EMUI.WlanMutiBasicController.load(null, false);
var wifidata = EMUI.WlanMutiBasicController.content.response;
wifidata.WifiRestart = 1;
if(typeof wifidata.Ssids.Ssid.length !== 'undefined'){
for(var i=0;i<wifidata.Ssids.Ssid.length;i++){
wifidata.Ssids.Ssid[i].WifiSsid = xss(wifidata.Ssids.Ssid[i].WifiSsid);
}
} else {
wifidata.Ssids.Ssid.WifiSsid = xss(wifidata.Ssids.Ssid.WifiSsid);
}
EMUI.WlanMutiBasicController.postData(wifidata, EMUI.GuideToLoginObjController.jumpHome, false);
} else {
EMUI.GuideToLoginObjController.jumpHome();
}
}
}
EMUI.GuideToLoginObjController = EMUI.ObjController.extend({
objName: 'user/challenge_login',
isSupportSaveInfo: false,
captivelogin: function() {
EMUI.AutoUpgradeController.isUpg = EMUI.indexAutoUpgradeController.isOpenAutoUpg;
EMUI.indexAutoUpgradeController.isOpenAutoUpg = '';
EMUI.LoginObjController.Login(1);
},
relogin: function () {
var self = this;
self.login(self.loginCallback);
},
loginCallback: function () {
EMUI.globalStatusController.load( function () {
}, false);
EMUI.TokenObjController.load( function () {
}, false);
EMUI.RestoreDefaultStatus.setRestoreFlag();
},
jumpHome: function() {
getAjaxData('api/monitoring/status', function (ret) {
if (ret.type === 'response') {
gMonitoringStatus = ret.response;
}
}, {
sync: true
});
EMUI.customHistoryLoginController.load(null, false);
if (gMonitoringStatus != '' && gMonitoringStatus.ConnectionStatus == '901') {
EMUI.guideHomePageRedirectController.load();
} else {
window.location.href = './content.html#home';
}
},
login: function (loginCallback) {
var self = this;
if (!this.checkProc()) {
return;
}
var name = EMUI.LoginStateController.userAccount;
self.objName = 'user/challenge_login';
EMUI.globalStatusController.load( function () {
}, false);
EMUI.TokenObjController.load( function () {
}, false);
var scram = CryptoJS.SCRAM();
var firstNonce = scram.nonce().toString();
var firstPostData = {
username: (GLOBAL.hasTwoAccountFlag || (GLOBAL.modules.loginusername_enable && GLOBAL.modules.loginusername_enable === '1')) ? window.xss(name) : 'admin',
firstnonce: firstNonce,
mode: 1
};
if ($('#same_wifi_switch').hasClass('switch_on') || $('#same_wifi_switch').hasClass('check_on')) {
var password = getPassword('guide_wifi_password');
} else {
var password = getPassword('new_password');
}
self.postData(firstPostData, function (data) {
if (data['type'] === 'response') {
var scarmSalt = CryptoJS.enc.Hex.parse(data['response']['salt']);
var iter = data['response']['iterations'];
var finalNonce = data['response']['servernonce'];
var authMsg = firstNonce + ',' + finalNonce + ',' + finalNonce;
var saltPassword = scram.saltedPassword(password, scarmSalt, iter);
saltPassword = saltPassword.toString();
var serverKey = scram.serverKey(CryptoJS.enc.Hex.parse(saltPassword));
serverKey = serverKey.toString();
var clientProof = scram.clientProof(password, scarmSalt, iter, authMsg);
clientProof = clientProof.toString();
var finalPostData = {
clientproof: clientProof,
finalnonce: finalNonce
};
self.objName = 'user/authentication_login';
EMUI.TokenObjController.load( function () {
}, false);
self.postData(finalPostData, function (result) {
if (result['type'] === 'response') {
var serverProof = scram.serverProof(password, scarmSalt, iter, authMsg);
serverProof = serverProof.toString();
if (result['response']['serversignature'] === serverProof) {
var publicKey = result['response']['rsan'];
var publicKeySignature = scram.signature(CryptoJS.enc.Hex.parse(publicKey), CryptoJS.enc.Hex.parse(serverKey));
publicKeySignature = publicKeySignature.toString();
if (result['response']['rsapubkeysignature'] === publicKeySignature) {
gEncPublickey.e = result['response']['rsae'];
gEncPublickey.n = result['response']['rsan'];
storagePubkey(gEncPublickey.n, gEncPublickey.e);
if (loginCallback) {
loginCallback();
return;
}
}
}
}
}, false);
}
}, false);
if(EMUI.BasicInfoObjController.content.response.classify === 'hilink'){
if (EMUI.loginallowedObjController.content.response.hilink_login === '1') {
EMUI.LoginStateController.load(function () {
}, false);
}
}else{
EMUI.LoginStateController.load(function () {
}, false);
}
}
});
EMUI.GuideSimCardStatusController = EMUI.ObjController.extend({
isSupportSaveInfo: false,
objName: 'pin/status'
});
EMUI.GuideCaptiveSimStatusController = EMUI.ObjController.extend({
isSupportSaveInfo: false,
objName: 'monitoring/check-notifications',
hasSim: false,
getsuccessProc: function(data) {
var simStatus = EMUI.GuideSimCardStatusController.content.response.SimState;
if (data.type === 'response') {
var simOperEvent = data['response']['SimOperEvent'];
if (simOperEvent === '1') {
this.hasSim = (simOperEvent === '1') ? true : false;
} else {
this.hasSim = (simStatus !== '255') ? true : false;
}
}
}
});
EMUI.GuideDhcpController = EMUI.ObjController.extend({
isSupportSaveInfo: false,
objName: 'dhcp/settings'
});
EMUI.checkUserController = EMUI.ObjController.extend({
objName: 'user/guide-checkpassword',
contentType: 'application/x-www-form-urlencoded; charset=UTF-8;enc',
isSupportSaveInfo: false,
isHasClick: false,
isContainNumber: function (pwd) {
return !!pwd.match(/[0-9]/);
},
isContainLowerCase: function (pwd) {
return !!pwd.match(/[a-z]/);
},
isContainUpperCase: function (pwd) {
return !!pwd.match(/[A-Z]/);
},
isContainSpecialCase: function (pwd) {
return !!pwd.match(/\W/);
},
showStrength: function (level) {
$('[id^=modify_password_strength]').hide();
if (level === 3) {
$('#modify_password_strength_strong').show();
} else if (level === 2) {
$('#modify_password_strength_medium').show();
} else {
$('#modify_password_strength_week').show();
}
},
countRepeatLength: function (pwd) {
var loopi = 0;
var loopj = 0;
var pwdlen = pwd.length;
var repeatLen = 0;
var currentlen = 1;
var curChar = '';
for (loopi = 0; loopi < pwdlen; loopi++) {
curChar = pwd.charAt(loopi);
currentlen = 1;
for (loopj = loopi + 1; loopj < pwdlen; loopj++) {
if (curChar === pwd.charAt(loopj)) {
loopi++;
currentlen++;
} else {
break;
}
}
if (currentlen > 1) {
repeatLen += currentlen;
}
}
return repeatLen;
},
checkModifyPasswordStrength: function (newpassword) {
var newpasslength = newpassword.length;
$('#modify_password_strength_week').hide();
$('#modify_password_strength_medium').hide();
$('#modify_password_strength_strong').hide();
var username = window.xss(EMUI.LoginStateController.content.response.Username);
if (newpasslength === 0) {
$('[id^=modify_password_strength]').hide();
return;
}
var ishasnum = this.isContainNumber(newpassword);
var ishaslow = this.isContainLowerCase(newpassword);
var ishasup = this.isContainUpperCase(newpassword);
var ishasspe = this.isContainSpecialCase(newpassword);
var repeatLen = this.countRepeatLength(newpassword);
if ((newpasslength > 10 && ((ishasnum & ishaslow) || (ishasnum & ishasup ) || (ishasnum & ishasspe) || (ishaslow & ishasup) || (ishaslow & ishasspe ) || (ishasup & ishasspe) ) ) ||
( newpasslength >= 6 && ((ishasnum & ishaslow & ishasup) || (ishasnum & ishaslow & ishasspe ) || (ishasnum & ishasup & ishasspe) || (ishaslow & ishasup & ishasspe) ) )) {
if ((repeatLen * 3) > (newpasslength * 2)) {
this.showStrength(1);
return;
}
if (((repeatLen * 3) > newpasslength) && ((repeatLen * 3) <= (2 * newpasslength))) {
this.showStrength(2);
return;
}
this.showStrength(3);
return;
}
if ((newpasslength >= 6 && newpasslength <= 10) &&
( (ishasnum & ishaslow) || (ishasnum & ishasup ) || (ishasnum & ishasspe) || (ishaslow & ishasup) || (ishaslow & ishasspe ) || (ishasup & ishasspe))) {
if ((repeatLen * 3) > (newpasslength * 2)) {
this.showStrength(1);
return;
}
this.showStrength(2);
return;
}
if (newpasslength < 6 || ( (ishasnum & !ishaslow & !ishasup & !ishasspe) || (!ishasnum & ishaslow & !ishasup & !ishasspe) ) ||
(!ishasnum & !ishaslow & ishasup & !ishasspe) || (!ishasnum & !ishaslow & !ishasup & ishasspe) || ( username === newpassword ) ||
(newpassword.split('').reverse().join('') === username)) {
this.showStrength(1);
return;
}
return;
},
hasSpaceOrTabAtHead: function (str) {
if (str.indexOf(' ') === 0 || str.indexOf('\t') === 0) {
return true;
}
return false;
},
checkModifyProc: function (newPassword) {
clearAllErrorMsg();
var username = window.xss(EMUI.LoginStateController.content.response.Username);
var newpasslength = newPassword.length;
var ishasnum = this.isContainNumber(newPassword);
var ishaslow = this.isContainLowerCase(newPassword);
var ishasup = this.isContainUpperCase(newPassword);
var ishasspe = this.isContainSpecialCase(newPassword);
var repeatLen = this.countRepeatLength(newPassword);
if (newPassword === '') {
$('#new_password').focus();
if (GLOBAL.modules.captivePortalGuide !== '1') {
EMUI.GuideController.showErrorMsg('guide_new_password', 'system_hint_new_password_empty');
} else {
EMUI.GuideController.showErrorMsg('guide_new_password', 'captiveGuide_hint_password_empty');
}
return false;
}
if (this.hasSpaceOrTabAtHead(newPassword)) {
EMUI.GuideController.showErrorMsg('guide_new_password', 'input_cannot_begin_with_space');
$('#new_password').focus();
return false;
}
if (EMUI.webWebFeatureController.isSuportPwdRuleEnable && EMUI.webWebFeatureController.isSuportPwdRuleEnable === '1') {
if (EMUI.LoginStateController.content.response && EMUI.LoginStateController.content.response.userlevel === '2') {
EMUI.webAndWifiRuleController.load(null, false);
if (EMUI.webAndWifiRuleController && EMUI.webAndWifiRuleController.webMinLength) {
var webPwdMinLength = EMUI.webAndWifiRuleController.webMinLength;
webPwdMinLength = parseInt(webPwdMinLength);
}
if (EMUI.webAndWifiRuleController && EMUI.webAndWifiRuleController.webRule != '0' || webPwdMinLength > 8 ||
(EMUI.webAndWifiRuleController.webExcludeSet && EMUI.webAndWifiRuleController.webExcludeSet.length > 0)) {
if (EMUI.webAndWifiRuleController.webRule === '1') {
if (!(ishasnum && ishaslow && ishasup) || ishasspe || (newpasslength < webPwdMinLength)) {
EMUI.GuideController.showErrorMsg('guide_new_password', 'login_password_rule_tips1');
var loginPwdMsg1 = publicLang['login_password_rule_tips1'].replace('%d', webPwdMinLength);
EMUI.webAndWifiRuleController.showLoginErrorMsg('guide_new_password', 'login_password_rule_tips1',loginPwdMsg1);
return false;
}
} else if (EMUI.webAndWifiRuleController.webRule === '2') {
if (!passwordRule2Check(newPassword) || (newpasslength < webPwdMinLength)) {
EMUI.GuideController.showErrorMsg('guide_new_password', 'login_password_rule_tips2');
var loginPwdMsg2 = publicLang['login_password_rule_tips2'].replace('%d', webPwdMinLength);
EMUI.webAndWifiRuleController.showLoginErrorMsg('guide_new_password', 'login_password_rule_tips2',loginPwdMsg2);
return false;
}
} else if (EMUI.webAndWifiRuleController.webRule === '3') {
if (newpasslength < webPwdMinLength || ( (ishasnum & !ishaslow & !ishasup & !ishasspe) ||
(!ishasnum & ishaslow & !ishasup & !ishasspe) ) || (!ishasnum & !ishaslow & ishasup & !ishasspe) ||
(!ishasnum & !ishaslow & !ishasup & ishasspe) || ( username === newPassword ) ||
(newPassword.split('').reverse().join('') === username)) {
EMUI.GuideController.showErrorMsg('guide_new_password', 'IDS_psw_login_remind');
return false;
}
} else {
if (webPwdMinLength && (newpasslength < webPwdMinLength)) {
EMUI.GuideController.showErrorMsg('guide_new_password', 'login_password_rule_tips4');
var loginPwdMsg4 = publicLang['login_password_rule_tips4'].replace('%d', webPwdMinLength);
EMUI.webAndWifiRuleController.showLoginErrorMsg('guide_new_password', 'login_password_rule_tips4',loginPwdMsg4);
return false;
}
}
if (EMUI.webAndWifiRuleController.webExcludeSet && EMUI.webAndWifiRuleController.webExcludeSet.length > 0) {
var loginHasSameStrData = EMUI.webAndWifiRuleController.hasSameStr(newPassword,EMUI.webAndWifiRuleController.webExcludeSet);
if (loginHasSameStrData.isTrueOrFalse) {
loginHasSameStrData.isTrueOrFalse = false;
EMUI.GuideController.showErrorMsg('guide_new_password', 'login_password_rule_tips5');
EMUI.LanguageController.registerLanguageEx('guide_new_passwordlogin_password_rule_tips5', 'login_password_rule_tips5', '%s', loginHasSameStrData.transStr);
EMUI.LanguageController.transLangEx();
return false;
}
}
}
}
}
if (EMUI.webWebFeatureController.isSuportSimplify && EMUI.webWebFeatureController.isSuportSimplify === '1') {
if (newPassword.length < 8) {
if (window.location.href.indexOf('guide.html') !== -1) {
EMUI.GuideController.showErrorMsg('guide_new_password', 'wlan_hint_wps_pwd_valid_type');
}
return false;
}
}
if (!this.checkVisibleChar(newPassword)) {
$('#new_password').focus();
EMUI.GuideController.showErrorMsg('guide_new_password', 'IDS_password_type_notes');
return false;
}
if (!EMUI.webWebFeatureController.isSuportSimplify || EMUI.webWebFeatureController.isSuportSimplify === '0') {
if (newpasslength < 6 || ( (ishasnum & !ishaslow & !ishasup & !ishasspe) || (!ishasnum & ishaslow & !ishasup & !ishasspe) ) ||
(!ishasnum & !ishaslow & ishasup & !ishasspe) || (!ishasnum & !ishaslow & !ishasup & ishasspe) || ( username === newPassword ) ||
(newPassword.split('').reverse().join('') === username)) {
clearAllErrorMsg();
$('#new_password').focus();
EMUI.GuideController.showErrorMsg('guide_new_password', 'IDS_psw_login_remind');
return false;
}
}
return true;
},
checkWifiPwdStrong: function() {
var wifiPwd = getPassword('guide_wifi_password');
var username = window.xss(EMUI.LoginStateController.content.response.Username);
var wifiPwdlength = wifiPwd.length;
var ishasnum = this.isContainNumber(wifiPwd);
var ishaslow = this.isContainLowerCase(wifiPwd);
var ishasup = this.isContainUpperCase(wifiPwd);
var ishasspe = this.isContainSpecialCase(wifiPwd);
var repeatLen = this.countRepeatLength(wifiPwd);
if (wifiPwdlength < 6 || ( (ishasnum & !ishaslow & !ishasup & !ishasspe) || (!ishasnum & ishaslow & !ishasup & !ishasspe) ) ||
(!ishasnum & !ishaslow & ishasup & !ishasspe) || (!ishasnum & !ishaslow & !ishasup & ishasspe) || ( username === wifiPwd ) ||
(wifiPwd.split('').reverse().join('') === username)) {
return false;
}
return true;
},
isSkipModifyPsd:false,
checkCurrentPAssword: function (data) {
EMUI.checkUserController.isSkipModifyPsd = data;
if (GLOBAL.modules.externalProductFlag === '1' && GLOBAL.modules.captivePortalGuide === '1') {
EMUI.GuideController.allPostData();
return;
}
var self = this;
if (GLOBAL.guideModifyPwd !== '2' && data!== 1) {
if ($('#same_wifi_switch').hasClass('switch_on') || $('#same_wifi_switch').hasClass('check_on')) {
var newPass = window.xss(getPassword('guide_wifi_password'));
var conPass = window.xss(getPassword('guide_wifi_password'));
} else {
var newPass = getPassword('new_password');
var conPass = newPass;
}
if (!this.checkModifyProc(newPass)) {
return;
}
if (this.isHasClick) {
return;
}
$('#guide_modify_password').addClass('btn_disabled');
this.isHasClick = true;
}
if (GLOBAL.guideModifyPwd === '2') {
clearAllErrorMsg();
if (!EMUI.GuideController.showWifiErrMsg()) {
return;
}
if (!EMUI.GuideController.showWifiPwdErrMsg()) {
return;
}
}
if (GLOBAL.hasTwoAccountFlag && GLOBAL.deviceInfo.restore_default_status === '0' && GLOBAL.firstlogin === '0') {
EMUI.GuideModifyPwdController.ModifyPassword();
} else if (EMUI.GuideController.isShowReboot) {
$('#guide_modify_password').removeClass('btn_disabled');
self.isHasClick = false;
EMUI.GuideController.hideAllPage();
$('#guide_reboot_page').show();
} else {
EMUI.AutoUpgradeController.sendUpgData();
if (data === 1) {
EMUI.GuideWlanObjController.setWlanAndAccount(1)
} else {
if (GLOBAL.guideModifyPwd === '2') {
EMUI.GuideWlanObjController.setWlanAndAccount(1)
} else {
EMUI.GuideWlanObjController.setWlanAndAccount();
}
}
}
}
});
EMUI.GuideCurMacController = EMUI.ObjController.extend({
isSupportSaveInfo: false,
contentType: 'application/x-www-form-urlencoded; charset=UTF-8;enc',
objName: 'cradle/current-mac'
});
EMUI.GuideMacInfoController = EMUI.ObjController.extend({
objName: 'cradle/mac-info'
});
EMUI.GuideSetCradleController = EMUI.ObjController.extend({
isSupportSaveInfo: false,
contentType: 'application/x-www-form-urlencoded; charset=UTF-8;enc',
objName: 'cradle/basic-info'
});
EMUI.GuideFactoryMacController = EMUI.ObjController.extend({
objName: 'cradle/factory-mac'
});
EMUI.GuideModifyPwdController = EMUI.ObjController.extend({
objName: 'user/password_scram',
contentType: 'application/x-www-form-urlencoded; charset=UTF-8;enc',
ModifyPassword: function () {
clearAllErrorMsg();
var self = this;
var currentPassword = window.xss($('#login_password').val());
var newPassword = $('#new_password').val();
var confirmPassword = $('#new_password').val();
self.isSupportSaveInfo = false;
var request = {
username: EMUI.LoginStateController.content.response.Username,
currentpassword: xss(currentPassword),
newpassword: xss(newPassword)
};
EMUI.HeartBeatObjController.stop();
$('#guide_reboot_page').show();
$('#wifi_reboot_loading').show();
self.postData(request, function (data) {
setTimeout(function () {
EMUI.HeartBeatObjController.refresh();
}, 1000);
if (EMUI.ObjController.isAjaxReturnOK(data)) {
EMUI.GuideToLoginObjController.relogin();
setTimeout( function () {
$('#wifi_change_info').show();
}, 15000);
}
});
}
});
EMUI.GuideCradleDetectController = EMUI.ObjController.extend({
objName: 'cradle/status-info',
isSupportSaveInfo: false,
isStopDetect: false,
isChangePassword: true,
hasCradle: false,
connectionmode: '0',
connectstatus: '0',
captiveEthData: {},
getsuccessProc: function(data) {
if (data.type === 'response') {
this.hasCradle = (data['response']['cradlestatus'] === '1') ? true : false;
this.connectionmode = data['response']['connectionmode'];
this.connectstatus = data['response']['connectstatus'];
}
},
hideEthAllPage: function () {
$('#eth_loading_div').hide();
$('#eth_ppp_div').hide();
$('#eth_dhcp_div').hide();
$('#eth_btn').hide();
$('#manual_mac_div').hide();
},
detectCabled: function (result) {
if (result['type'] === 'response') {
var wanresult = result['response'];
EMUI.GuideController.hideAllPage();
$('#guide_uncable_page').show();
$('.guide_uncable_page_sub').hide();
if (wanresult['cradlestatus'] === '1') {
if (wanresult['connectionmode'] === '0' || wanresult['connectionmode'] === '5' || wanresult['connectionmode'] === '6') {
$('#no_sim_and_has_cable').show();
$('#guide_next_btn').hide();
$('#no_sim_and_has_cable_img').attr('class', 'guide_nosimcard_captive');
$('#guide_nosim_hascradle_notice').attr('lang-id', 'guide.nosim_lan_only');
$('#guide_nosim_hascradle_notice').text(publicLang['guide.nosim_lan_only']);
} else {
$('#no_sim_and_has_cable').show();
$('#guide_next_btn').show();
$('#no_sim_and_has_cable_img').attr('class', 'guide_nosimcard');
$('#guide_nosim_hascradle_notice').attr('lang-id', 'guide.internet.byline');
$('#guide_nosim_hascradle_notice').text(publicLang['guide.internet.byline']);
}
} else {
$('#no_sim_and_no_cable').show();
}
}
setTimeout( function () {
if (!EMUI.GuideCradleDetectController.isStopDetect) {
EMUI.GuideCradleDetectController.load(EMUI.GuideCradleDetectController.detectCabled);
}
}, 2000);
},
scanning: function (result) {
if (result['type'] === 'response') {
var wanresult = result['response'];
EMUI.GuideController.hideAllPage();
if (wanresult['cradlestatus'] === '0') {
$('#guide_uncable_page').show();
$('.guide_uncable_page_sub').hide();
$('#no_sim_and_no_cable').show();
return;
}
EMUI.GuideController.ethInit(false);
}
},
wanConnecting: function () {
},
wandetect: function () {
EMUI.GuideCradleDetectController.load(EMUI.GuideCradleDetectController.detectCabled);
},
wanCheck: function (username, password, isNeedCheckMac, macAddress) {
clearAllErrorMsg();
if (username === '' || username === null) {
EMUI.GuideController.showErrorMsg('ppp_username_div', 'settings_hint_user_name_empty');
$('#ppp_username').focus();
$('#ppp_username').val('');
return false;
} else if (password === '' || password === null) {
EMUI.GuideController.showErrorMsg('ppp_password_div', 'dialup_hint_password_empty');
$('#ppp_password').focus();
$('#ppp_password').val('');
$('#ppp_password_text').val('');
return false;
}
if (VALIDATION.checkInputPPPoeChar(username) === false) {
EMUI.GuideController.showErrorMsg('ppp_username_div', 'IDS_ethernet_pppoe_username');
$('#ppp_username').focus();
$('#ppp_username').val('');
return false;
} else if (VALIDATION.checkInputPPPoeChar(password) === false) {
EMUI.GuideController.showErrorMsg('ppp_password_div', 'IDS_ethernet_pppoe_password');
$('#ppp_password').focus();
$('#ppp_password').val('');
$('#ppp_password_text').val('');
return false;
}
if (isNeedCheckMac) {
if (macAddress.length === 0 || macAddress === null) {
EMUI.GuideController.showErrorMsg('manual_mac_div', 'IDS_mac_clone_mac_address_empty');
$('#manual_mac').focus();
$('#manual_mac').val('');
return false;
} else if ((macAddress.length > 0) && (!VALIDATION.isValidMacAddress(macAddress))) {
EMUI.GuideController.showErrorMsg('manual_mac_div', 'wlan_hint_mac_address_invalid');
$('#manual_mac').focus();
$('#manual_mac').val('');
return false;
}
}
return true;
},
wanInitPage: function (ethStatusResult, ethBasicResult, isInitOrSaveRender, noCradleLine) {
EMUI.GuideController.hideAllPage();
if (ethStatusResult['connectstatus'] === '901' || (!noCradleLine && ethStatusResult['connectionmode'] !== '6' && ethStatusResult['connectionmode'] !== '2' && ethStatusResult['connectionmode'] !== '3')) {
wifienablehide();
return;
}
$('#guide_eth_page').show();
EMUI.GuideCradleDetectController.hideEthAllPage();
if (GLOBAL.modules.captivePortalGuide !== '1' && (ethStatusResult['connectionmode'] === '3' || ethBasicResult['connectionmode'] === '3')) {
$('#guide_dhcp_type_label').attr('class', 'radio_btn_on');
$('#guide_ppp_type_label').attr('class', 'radio_btn_off');
$('#eth_dhcp_div').show();
} else {
$('#guide_ppp_type_label').attr('class', 'radio_btn_on');
$('#guide_dhcp_type_label').attr('class', 'radio_btn_off');
$('#eth_ppp_div').show();
$('#eth_ppp_div input').val('');
}
$('#eth_btn_next').text(publicLang['guide.next']);
$('#eth_btn_next').attr('lang-id', 'guide.next');
$('#eth_btn').show();
$('#eth_btn').css({
'padding-top': ' 50px'
});
$('#ppp_username_div').css({
'padding-top': ' 40px'
});
if (ethBasicResult && ethBasicResult.pppoeuser !== '') {
$('#eth_ppp_div #ppp_username').val(ethBasicResult.pppoeuser);
$('#eth_ppp_div .ppp_pwd').val(ethBasicResult.pppoepwd);
$('#eth_ppp_div #ppp_password_open').hide();
$('#eth_ppp_div #ppp_password_close').show();
EMUI.GuideCradleDetectController.isChangePassword = false;
$('#eth_ppp_div #ppp_password').one('focus click', function () {
$(this).val('');
$("#ppp_password_div div[forpass='ppp_password']").show();
EMUI.GuideCradleDetectController.isChangePassword = true;
});
}
if (!isInitOrSaveRender) {
return;
}
if (ethStatusResult['cradlestatus'] === '1' && (ethStatusResult['connectstatus'] === '900' || ethStatusResult['connectstatus'] === '902' || ethStatusResult['connectstatus'] === '903')) {
EMUI.GuideCradleDetectController.hideEthAllPage();
$('#eth_loading_div').show();
if (ethBasicResult['connectionmode'] === '3') {
$('#eth_loading_text').attr('lang-id', 'guide_dhcp_loading');
$('#eth_loading_text').text(publicLang['guide_dhcp_loading']);
$('#guide_dhcp_type_label').attr('class', 'radio_btn_on_disabled');
$('#guide_ppp_type_label').attr('class', 'radio_btn_off_disabled');
} else {
$('#eth_loading_text').attr('lang-id', 'wifinetworkssetting_wifi_ap_connecting');
$('#eth_loading_text').text(publicLang['wifinetworkssetting_wifi_ap_connecting']);
$('#guide_ppp_type_label').attr('class', 'radio_btn_on_disabled');
$('#guide_dhcp_type_label').attr('class', 'radio_btn_off_disabled');
}
setTimeout( function () {
EMUI.GuideController.ethInit(true);
}, 6000);
return;
}
if (ethBasicResult['connectionmode'] === '3') {
$('#eth_btn_next').text(publicLang['guide.retry']);
$('#eth_btn_next').attr('lang-id', 'guide.retry');
$('#dhcp_error_info').show();
if (ethStatusResult['cradlestatus'] === '0') {
$('#dhcp_error_info_label').text(publicLang['IDS_ethernet_settings_disconnected']);
$('#dhcp_error_info_label').attr('lang-id', 'IDS_ethernet_settings_disconnected');
} else {
$('#dhcp_error_info_label').attr('lang-id', 'guide_dhcp_error');
$('#dhcp_error_info_label').text(publicLang['guide_dhcp_error']);
}
$('#dhcp_error_info_sub').attr('lang-id', 'IDS_ethernet_settings_disconnected_notes');
$('#dhcp_error_info_sub').text(publicLang['IDS_ethernet_settings_disconnected_notes']);
return;
}
$('#ppp_error_info').show();
$('#ppp_username_div').css({
'padding-top': ' 30px'
});
if (ethStatusResult['cradlestatus'] === '0') {
$('#ppp_error_info_label').text(publicLang['IDS_ethernet_settings_disconnected']);
$('#ppp_error_info_label').attr('lang-id', 'IDS_ethernet_settings_disconnected');
$('#ppp_error_info_sub').attr('lang-id', 'IDS_ethernet_settings_disconnected_notes');
$('#ppp_error_info_sub').text(publicLang['IDS_ethernet_settings_disconnected_notes']);
return;
}
if (ethStatusResult['connectstatus'] === '904') {
$('#ppp_error_info_label').text(publicLang['IDS_ethernet_settings_no_response']);
$('#ppp_error_info_label').attr('lang-id', 'IDS_ethernet_settings_no_response');
$('#ppp_error_info_sub').attr('lang-id', 'IDS_ethernet_settings_no_response_notes');
$('#ppp_error_info_sub').text(publicLang['IDS_ethernet_settings_no_response_notes']);
} else if (ethStatusResult['connectstatus'] === '905' || ethStatusResult['connectstatus'] === '906') {
$('#ppp_error_info_label').text(publicLang['IDS_ethernet_settings_error_authentication']);
$('#ppp_error_info_label').attr('lang-id', 'IDS_ethernet_settings_error_authentication');
$('#ppp_error_info_sub').attr('lang-id', 'IDS_ethernet_settings_error_authentication_notes');
$('#ppp_error_info_sub').text(publicLang['IDS_ethernet_settings_error_authentication_notes']);
} else if (ethStatusResult['connectstatus'] === '908') {
$('#ppp_error_info_label').text(publicLang['IDS_ethernet_settings_authentication_limit']);
$('#ppp_error_info_label').attr('lang-id', 'IDS_ethernet_settings_authentication_limit');
$('#ppp_error_info_sub').attr('lang-id', 'IDS_ethernet_settings_authentication_limit_notes');
$('#ppp_error_info_sub').text(publicLang['IDS_ethernet_settings_authentication_limit_notes']);
} else if (ethStatusResult['connectstatus'] === '907') {
EMUI.GuideMacInfoController.load( function (data) {
var macInfo = publicLang['guide_local_mac_clone_tip'].replace('%d', data.response.hostmac);
EMUI.LanguageController.registerLanguage('mac_clone_list_item_0', 'guide_local_mac_clone_tip', data.response.hostmac);
$('#mac_clone_list_item_0').attr('lang-id', 'guide_local_mac_clone_tip');
$('#mac_clone_list_item_0').text(macInfo);
if (data.response.currentmac === EMUI.GuideFactoryMacController.content.response.factorymac || data.response.hostmac === data.response.currentmac) {
EMUI.LanguageController.registerLanguage('mac_clone', 'guide_local_mac_clone_tip', data.response.hostmac);
$('#mac_clone').attr('lang-id', 'guide_local_mac_clone_tip');
$('#mac_clone').text(macInfo);
$('#manual_mac').val('');
$('#manual_mac_div').hide();
$('#manual_mac_descript').hide();
} else {
$('#mac_clone').text(publicLang.IDS_ethernet_label_mac_clone_address);
$('#mac_clone').attr('lang-id', 'IDS_ethernet_label_mac_clone_address');
$('#manual_mac').val(data.response.currentmac);
$('#manual_mac_div').show();
$('#manual_mac_descript').show();
}
$('#mac_address').show();
$('#eth_btn').css({
'padding-top': ' 30px'
});
});
$('#ppp_error_info_label').text(publicLang['IDS_ethernet_settings_mac_limit']);
$('#ppp_error_info_label').attr('lang-id', 'IDS_ethernet_settings_mac_limit');
$('#ppp_error_info_sub').attr('lang-id', 'IDS_ethernet_settings_mac_limit_notes');
$('#ppp_error_info_sub').text(publicLang['IDS_ethernet_settings_mac_limit_notes']);
} else if (ethStatusResult['connectstatus'] === '909') {
$('#ppp_error_info_label').text(publicLang['IDS_ethernet_settings_error_unknown']);
$('#ppp_error_info_label').attr('lang-id', 'IDS_ethernet_settings_error_unknown');
$('#ppp_error_info_sub').attr('lang-id', 'IDS_ethernet_settings_no_response_notes');
$('#ppp_error_info_sub').text(publicLang['IDS_ethernet_settings_no_response_notes']);
}
},
selectPPP: function () {
if ($('#guide_ppp_type_label').hasClass('radio_btn_on')) {
$('#eth_ppp_div').show();
$('#eth_dhcp_div').hide();
$('#eth_btn_next').text(publicLang['guide.next']);
$('#eth_btn_next').attr('lang-id', 'guide.next');
if (EMUI.GuideCradleDetectController.content.response.connectstatus === '907') {
$('#eth_btn').css({
'padding-top': ' 30px'
});
}
}
},
selectDHCP: function () {
if ($('#guide_dhcp_type_label').hasClass('radio_btn_on')) {
if ($('#dhcp_error_info').css('display') !== 'none') {
$('#eth_btn_next').text(publicLang['guide.retry']);
$('#eth_btn_next').attr('lang-id', 'guide.retry');
}
$('#eth_ppp_div').hide();
$('#eth_dhcp_div').show();
$('#eth_btn').css({
'padding-top': ' 50px'
});
}
},
SelectMacCloneItem: function (option) {
$('#mac_address').css({
'margin-bottom': ' 20px'
});
$('#manual_mac_div').hide();
$('#manual_mac_descript').hide();
$('#mac_clone').attr('value', option);
var macInfo = publicLang['guide_local_mac_clone_tip'].replace('%d', EMUI.GuideMacInfoController.content.response.hostmac);
EMUI.LanguageController.registerLanguage('mac_clone', 'guide_local_mac_clone_tip', EMUI.GuideMacInfoController.content.response.hostmac);
$('#mac_clone').attr('lang-id', 'guide_local_mac_clone_tip');
$('#mac_clone').text(macInfo);
if (option === '1') {
$('#mac_clone').text(publicLang.IDS_ethernet_label_mac_clone_address);
$('#mac_clone').attr('lang-id', 'IDS_ethernet_label_mac_clone_address');
$('#manual_mac_div').show();
$('#manual_mac_descript').show();
if ($('#manual_mac_div ').find($('.error_info')).length !== 0) {
clearAllErrorMsg();
}
}
},
SelectMacCloneList: function (self) {
$('#mac_address').css({
'margin-bottom': ' 20px'
});
if ($('#mac_clone_list').css('display') === 'none' && $('#manual_mac_div').css('display') === 'none') {
$('#mac_address').css({
'margin-bottom': ' 150px'
});
}
SelectItem(self);
EMUI.Scroll.setTop('#eth_ppp_div',300);
},
captiveSelectEthType: function(type) {
clearAllErrorMsg();
$('.ethSubPage').hide();
if (type === '0') {
$('#eth_ppp_div').show();
} else if (type === '1') {
$('#eth_dhcp_div').show();
} else {
$('#eth_static_div').show();
$('#eth_btn').css({
'padding-top': ' 30px'
});
}
},
ipPlusip: function(part1, part2) {
var result = '';
var partOne = part1.split('.');
var partTwo = part2.split('.');
for (var i = 0; i < 4; i++) {
result += Number(partOne[i]) & Number(partTwo[i]);
result = result + '.';
}
result = result.substring(0, result.length - 1);
return result;
},
ethStaticCheck: function(ipaddress, subnetMask, defaultGateway, primaryDnsServer, secondaryDnsServer) {
clearAllErrorMsg();
var dhcpNetmask = EMUI.GuideDhcpController.content.response.DhcpLanNetmask;
var dhcpIpaddress = EMUI.GuideDhcpController.content.response.DhcpIPAddress;
var plusMask = EMUI.GuideCradleDetectController.ipPlusip(subnetMask, dhcpNetmask);
var plusIp = EMUI.GuideCradleDetectController.ipPlusip(ipaddress, plusMask);
var plusDhcp = EMUI.GuideCradleDetectController.ipPlusip(dhcpIpaddress, plusMask);
var plusGateway = EMUI.GuideCradleDetectController.ipPlusip(defaultGateway, plusMask);
var plusDnsserver = EMUI.GuideCradleDetectController.ipPlusip(primaryDnsServer, plusMask);
var plusSparedns = EMUI.GuideCradleDetectController.ipPlusip(secondaryDnsServer, plusMask);
if (!VALIDATION.isValidStaticIpAddress(ipaddress)) {
EMUI.GuideController.showErrorMsg('eth_static-ip', 'dialup_hint_ip_address_empty');
$('#eths_static_ip').focus();
$('#eths_static_ip').val('');
return false;
}
if (!VALIDATION.isValidMask(subnetMask)) {
EMUI.GuideController.showErrorMsg('eth_static-mask', 'IDS_ethernet_subnet_mask_error');
$('#eths_static_mask').focus();
$('#eths_static_mask').val('');
return false;
}
if (plusIp === plusDhcp) {
EMUI.GuideController.showErrorMsg('eth_static-ip', 'IDS_ethernet_vefify_ipdhcpip');
$('#eths_static_ip').focus();
$('#eths_static_ip').val('');
return false;
}
if (!VALIDATION.obverseMask(ipaddress, subnetMask)) {
EMUI.GuideController.showErrorMsg('eth_static-ip', 'dialup_hint_ip_address_empty');
$('#eths_static_ip').focus();
$('#eths_static_ip').val('');
return false;
}
if (!VALIDATION.isValidStaticIpAddress(defaultGateway)) {
EMUI.GuideController.showErrorMsg('eth_static-gateway', 'IDS_ethernet_gateway_address_error');
$('#eths_static_gateway').focus();
$('#eths_static_gateway').val('');
return false;
}
if (plusGateway === plusDhcp) {
EMUI.GuideController.showErrorMsg('eth_static-gateway', 'IDS_ethernet_vefify_gatewaydhcpip');
$('#eths_static_gateway').focus();
$('#eths_static_gateway').val('');
return false;
}
if (!VALIDATION.obverseMask(defaultGateway, subnetMask)) {
EMUI.GuideController.showErrorMsg('eth_static-gateway', 'IDS_ethernet_gateway_address_error');
$('#eths_static_gateway').focus();
$('#eths_static_gateway').val('');
return false;
}
if (!VALIDATION.isSameSubnetAddrs(ipaddress, defaultGateway, subnetMask)) {
EMUI.GuideController.showErrorMsg('eth_static-gateway', 'IDS_ethernet_verify_ipgateway');
$('#eths_static_gateway').focus();
$('#eths_static_gateway').val('');
return false;
}
if (!VALIDATION.isValidStaticIpAddress(primaryDnsServer)) {
EMUI.GuideController.showErrorMsg('eth_static-primary-dns', 'IDS_ethernet_primary_dns');
$('#eths_static_primary_dns').focus();
$('#eths_static_primary_dns').val('');
return false;
}
if (primaryDnsServer !== '' && primaryDnsServer !== '0.0.0.0') {
if (plusDnsserver === plusDhcp) {
EMUI.GuideController.showErrorMsg('eth_static-primary-dns', 'IDS_ethernet_vefify_dnsdhcip');
$('#eths_static_primary_dns').focus();
$('#eths_static_primary_dns').val('');
return false;
}
}
if (secondaryDnsServer !== '' && secondaryDnsServer !== '0.0.0.0') {
if (!VALIDATION.isValidStaticIpAddress(secondaryDnsServer)) {
EMUI.GuideController.showErrorMsg('eth_static-secondary-dns', 'IDS_ethernet_secondary_dns');
$('#eths_static_secondary_dns').focus();
$('#eths_static_secondary_dns').val('');
return false;
}
if (plusSparedns === plusDhcp) {
EMUI.GuideController.showErrorMsg('eth_static-secondary-dns', 'IDS_ethernet_vefify_sparednsdhcip');
$('#eths_static_secondary_dns').focus();
$('#eths_static_secondary_dns').val('');
return false;
}
}
return true;
}
});
EMUI.GuideDualNetworkController = EMUI.ObjController.extend({
objName: 'ntwk/dualwaninfo',
isSupportSaveInfo: false,
isneedPost: false,
dualwanmode: null,
smartmodeenable:'',
selectwantypeEnable: '',
dualwanstatus: '',
getsuccessProc: function(data) {
if (data.type === 'response') {
var responceData = data['response'];
smartmodeenable = responceData.smartmodeenable;
dualwanmode = responceData.dualwanmode;
selectwantypeEnable = responceData.selectwantype_enable;
dualwanstatus = responceData.dualwanstatus;
}
}
});
EMUI.GuideController = EMUI.ObjController.extend({
isShowReboot: false,
isSupportSaveInfo: false,
isWifiReboot:false,
timeNum: 0,
hideAllPage: function () {
$('#guide_start_page').hide();
$('#guide_login_page').hide();
$('#guide_autoupdate_page').hide();
$('#guide_uncable_page').hide();
$('#guide_eth_page').hide();
$('#guide_wifi_page').hide();
$('#guide_changepassword_page').hide();
$('#guide_dualNetwork_page').hide();
$('#guide_reboot_page').hide();
$('#guide_finish_page').hide();
$('#outdoor_cpe_prompt_page').hide();
},
setLogPwdGotoWlanPage: function () {
this.hideAllPage();
$('#guide_wifi_page').show();
},
ethInit: function (isInitOrSaveRender, noCradleLine) {
EMUI.GuideSetCradleController.load( function (data) {
EMUI.GuideCradleDetectController.load( function (result) {
var ethBasicResult = data.response;
var ethStatusResult = result.response;
EMUI.GuideCradleDetectController.wanInitPage(ethStatusResult, ethBasicResult, isInitOrSaveRender, noCradleLine);
});
});
},
ethOverPass: function () {
this.hideAllPage();
wifienablehide();
},
ethNext: function () {
var username = '';
var password = '';
if (GLOBAL.modules.captivePortalGuide === '1') {
var captiveEthData = {};
if (device_differentiation === '0') {
var type = ethModeType;
} else {
var type = $('#eth_select').val();
}
if (type === '0') {
username = $('#ppp_username').val();
password = $('.ppp_pwd:visible').val();
if (EMUI.GuideCradleDetectController.wanCheck(username, password, false)) {
captiveEthData = {
connectionmode: '2',
pppoeuser: xss(username),
pppoepwd: xss(password)
}
}
} else if (type === '1') {
captiveEthData.connectionmode = '3';
} else {
var ipaddress = $('#eths_static_ip').val();
var subnetMask = $('#eths_static_mask').val();
var defaultGateway = $('#eths_static_gateway').val();
var primaryDnsServer = $('#eths_static_primary_dns').val();
var secondaryDnsServer = $('#eths_static_secondary_dns').val();
if (EMUI.GuideCradleDetectController.ethStaticCheck(ipaddress, subnetMask, defaultGateway, primaryDnsServer, secondaryDnsServer)) {
captiveEthData = {
connectionmode: '4',
ipaddress: ipaddress,
netmask: subnetMask,
gateway: defaultGateway,
primarydns: primaryDnsServer,
secondarydns: secondaryDnsServer
}
}
}
if (captiveEthData.connectionmode) {
EMUI.GuideCradleDetectController.captiveEthData = captiveEthData;
EMUI.GuideController.hideAllPage();
wifienablehide();
}
return;
}
var ethBasicResult = EMUI.GuideSetCradleController.content.response;
if ($('#guide_ppp_type_label').hasClass('radio_btn_on')) {
ethBasicResult.connectionmode = '2';
}
if ($('#guide_dhcp_type_label').hasClass('radio_btn_on')) {
ethBasicResult.connectionmode = '3';
}
ethBasicResult.pppvlanenable = null;
ethBasicResult.pppvlanid = null;
ethBasicResult.ipvlanenable = null;
ethBasicResult.ipvlanid = null;
ethBasicResult.pppoeauth = null;
if (ethBasicResult.connectionmode === '3') {
EMUI.GuideCradleDetectController.hideEthAllPage();
$('#eth_loading_div').show();
$('#eth_loading_text').attr('lang-id', 'guide_dhcp_loading');
$('#eth_loading_text').text(publicLang['guide_dhcp_loading']);
$('#guide_dhcp_type_label').attr('class', 'radio_btn_on_disabled');
$('#guide_ppp_type_label').attr('class', 'radio_btn_off_disabled');
EMUI.GuideSetCradleController.postData(ethBasicResult, function (data) {
if (EMUI.ObjController.isAjaxReturnOK(data)) {
EMUI.GuideController.ethInit(true);
}
});
return;
}
username = $('#ppp_username').val();
password = $('.ppp_pwd:visible').val();
ethBasicResult.pppoeuser = xss(username);
ethBasicResult.pppoepwd = xss(password);
var isNeedCheckMac = false;
var macAddress = '';
if ($('#mac_address').css('display') !== 'none') {
var macCloneMode = $('#mac_clone').attr('value');
if (macCloneMode === '0') {
macAddress = EMUI.GuideMacInfoController.content.response.hostmac;
}
if (macCloneMode === '1') {
isNeedCheckMac = true;
macAddress = $.trim($('#manual_mac').val());
}
}
var saveMacDate = {
currentmac: macAddress
};
if (EMUI.GuideCradleDetectController.wanCheck(username, password, isNeedCheckMac, macAddress)) {
if (!EMUI.GuideCradleDetectController.isChangePassword) {
delete ethBasicResult.pppoepwd;
}
EMUI.GuideCradleDetectController.hideEthAllPage();
$('#eth_loading_div').show();
$('#eth_loading_text').attr('lang-id', 'wifinetworkssetting_wifi_ap_connecting');
$('#eth_loading_text').text(publicLang['wifinetworkssetting_wifi_ap_connecting']);
$('#guide_ppp_type_label').attr('class', 'radio_btn_on_disabled');
$('#guide_dhcp_type_label').attr('class', 'radio_btn_off_disabled');
if ($('#mac_address').css('display') !== 'none') {
EMUI.GuideCurMacController.postData(saveMacDate, function (macResult) {
if (EMUI.ObjController.isAjaxReturnOK(macResult)) {
EMUI.GuideSetCradleController.postData(ethBasicResult, function (cradleResult) {
if (EMUI.ObjController.isAjaxReturnOK(cradleResult)) {
EMUI.GuideController.ethInit(true);
}
})
}
});
} else {
EMUI.GuideSetCradleController.postData(ethBasicResult, function (cradleResult) {
if (EMUI.ObjController.isAjaxReturnOK(cradleResult)) {
EMUI.GuideController.ethInit(true);
}
})
}
}
},
showRebootPage: function () {
this.hideAllPage();
$('#guide_reboot_page').show();
$('#reboot_operate').hide();
$('#wifi_reboot_loading').hide();
$('#reboot_loading').hide();
},
deviceReboot: function () {
$('#reboot_operate').hide();
$('#wifi_reboot_loading').hide();
$('#reboot_loading').show();
setTimeout(function () {
EMUI.HeartBeatObjController.refresh();
}, 60000);
},
wifiReboot: function () {
this.hideAllPage();
$('#reboot_operate').hide();
$('#reboot_loading').hide();
$('#guide_reboot_page').show();
$('#wifi_reboot_loading').show();
setTimeout(function () {
EMUI.HeartBeatObjController.refresh();
}, 10000);
},
showWifiErrMsg: function () {
var ssidError = EMUI.GuideWlanObjController.checkSsidPara();
if (ssidError !== '') {
showNationalLang();
this.showErrorMsg('guide_wifi_config_ssid', ssidError);
return false;
}
return true;
},
showWifissidSameErrMsg: function() {
var ssidSameError = EMUI.GuideWlanObjController.checkSsidSamePara();
if (ssidSameError !== '') {
showNationalLang();
this.showErrorMsg('guide_wifi_config_ssid', ssidSameError, 'wifi_ssid_label');
return false;
}
return true;
},
showWifiPwdErrMsg: function () {
var keyError = EMUI.GuideWlanObjController.checkWpakey();
if (keyError !== '') {
if (device_differentiation === '0') {
this.showErrorMsg('guide_wifi_password_open', keyError);
this.showErrorMsg('guide_wifi_password_close', keyError);
} else {
this.showErrorMsg('wifi_password_open', keyError);
this.showErrorMsg('wifi_password_close', keyError);
if (EMUI.webWebFeatureController.isSuportPwdRuleEnable && EMUI.webWebFeatureController.isSuportPwdRuleEnable === '1') {
if (EMUI.webAndWifiRuleController.wifiMinLength) {
var wifiPwdMinLength = EMUI.webAndWifiRuleController.wifiMinLength;
wifiPwdMinLength = parseInt(wifiPwdMinLength);
}
if (oldWifiPassword != getPassword('guide_wifi_password')) {
if (EMUI.webAndWifiRuleController.wifiRule != '0' || wifiPwdMinLength > 8 ||
(EMUI.webAndWifiRuleController.wifiExcludeSet && EMUI.webAndWifiRuleController.wifiExcludeSet.length > 0)) {
if (publicLang[keyError].indexOf('%d') > 0) {
EMUI.webAndWifiRuleController.showWifiErrorMsg('wifi_password_open', keyError);
EMUI.webAndWifiRuleController.showWifiErrorMsg('wifi_password_close', keyError);
}
if (publicLang[keyError].indexOf('%s') > 0) {
var wifiHasSameStrData = EMUI.webAndWifiRuleController.hasSameStr($('#guide_wifi_password').val(),EMUI.webAndWifiRuleController.wifiExcludeSet);
EMUI.LanguageController.registerLanguageEx('wifi_password_open' + keyError, keyError,'%s',wifiHasSameStrData.transStr);
EMUI.LanguageController.registerLanguageEx('wifi_password_close' + keyError, keyError,'%s',wifiHasSameStrData.transStr);
EMUI.LanguageController.transLangEx();
}
}
}
}
}
return false;
}
return true;
},
showFinishPage: function() {
setTimeout(function() {
utilStopSubmitDialog();
EMUI.GuideController.hideAllPage();
$('#guide_finish_page').show();
$('#captive_rebooting').show();
$('#captive_finish').hide();
$('#captive_timing').text(EMUI.GuideController.timeNum);
intervalTime = setInterval(function() {
EMUI.GuideController.timeNum--;
if (EMUI.GuideController.timeNum > 0) {
$('#captive_timing').text(EMUI.GuideController.timeNum);
} else {
$('#captive_rebooting').hide();
$('#captive_finish').show();
$('#finish_reboot_des_1').attr('lang-id', 'guide.finish_reboot_des_1');
$('#finish_reboot_des_1').text(publicLang['guide.finish_reboot_des_1']);
clearInterval(intervalTime);
intervalTime = null;
}
}, 1000)
}, 1000)
},
isallPostData: false,
allPostData: function() {
if (EMUI.GuideController.isallPostData) {
return;
}
EMUI.GuideController.isallPostData = true;
utilStartSubmitDialog();
EMUI.AutoUpgradeController.sendUpgData(true);
if (EMUI.GuideCradleDetectController.captiveEthData.connectionmode) {
var ethBasicResult = EMUI.GuideSetCradleController.content.response;
for (var attr in EMUI.GuideCradleDetectController.captiveEthData) {
ethBasicResult[attr] = EMUI.GuideCradleDetectController.captiveEthData[attr];
}
EMUI.GuideSetCradleController.postData(ethBasicResult);
}
if (EMUI.GuideDualNetworkController.isneedPost) {
var dualwanData = {
'dualwanmode': EMUI.GuideDualNetworkController.dualwanmode,
'modeconfigway': '0'
}
EMUI.GuideDualNetworkController.postData(dualwanData, null, false)
}
EMUI.GuideWlanObjController.setWlanAndAccount();
},
dualNetworkNext: function() {
if ($('#manual_network_radio').hasClass('radio_btn_on')) {
EMUI.GuideDualNetworkController.dualwanmode = '0';
} else {
EMUI.GuideDualNetworkController.dualwanmode = '1';
}
EMUI.GuideController.allPostData();
},
wifiNext: function () {
clearAllErrorMsg();
if (!this.showWifiErrMsg()) {
return;
}
if (!this.showWifissidSameErrMsg()) {
return;
}
if (!this.showWifiPwdErrMsg()) {
return;
}
if (GLOBAL.modules.captivePortalGuide === '1') {
if ($('#same_wifi_switch').hasClass('check_on')) {
var newPass = getPassword('guide_wifi_password');
} else {
var newPass = getPassword('new_password');
}
if (!EMUI.checkUserController.checkModifyProc(newPass)) {
return;
}
$('#new_wifi_ssid_2').text($('#guide_wifi_name').val());
if ($('#guide_wifi_ssid_5g').css('display') !== 'none') {
$('#new_wifi_ssid_5').text($('#guide_wifi_name_5g').text());
$('#new_wifi_ssid_5_div').show();
} else {
$('#new_wifi_ssid_5_div').hide();
}
if (GLOBAL.modules.dualwan_enable === '1') {
var isSupportCradle = GLOBAL.modules.cradle_enabled === '1' ? true : false;
EMUI.GuideCaptiveSimStatusController.load(null, false);
if (isSupportCradle) {
EMUI.GuideFactoryMacController.load(null, false);
EMUI.GuideCradleDetectController.load(null, false);
}
var hasSim = EMUI.GuideCaptiveSimStatusController.hasSim;
var hasCradle = EMUI.GuideCradleDetectController.hasCradle;
var connectionmode = EMUI.GuideCradleDetectController.connectionmode;
if (hasSim && hasCradle && connectionmode !== '5' && connectionmode !== '6' && smartmodeenable === '1' && selectwantypeEnable !== '1' && GLOBAL.modules.dualwan_switch_display && GLOBAL.modules.dualwan_switch_display === '1' && dualwanstatus === '1') {
this.hideAllPage();
$('#guide_dualNetwork_page').show();
EMUI.GuideDualNetworkController.isneedPost = true;
return;
}
} else {
if (GLOBAL.modules.externalProductFlag === '1' && GLOBAL.guideModifyPwd !== '2') {
this.hideAllPage();
$('#outdoor_cpe_prompt_page').show();
return;
}
}
EMUI.GuideController.allPostData();
return;
}
this.hideAllPage();
var wifiPwd = getPassword('guide_wifi_password');
$('#guide_newpassword_aero').css('padding-top','30px');
if((GLOBAL.hasTwoAccountFlag && GLOBAL.isSecondaryAccount)
|| ((!EMUI.webWebFeatureController.isSuportSimplify || EMUI.webWebFeatureController.isSuportSimplify === '0')&&(!EMUI.checkUserController.checkWifiPwdStrong()))
|| (wifiPwd.length > 32 || !EMUI.webWebFeatureController.suportPwdSame || EMUI.webWebFeatureController.suportPwdSame === '0') ||
(EMUI.webWebFeatureController && EMUI.webWebFeatureController.isSuportPwdRuleEnable === '1')) {
$('#same_wifi_password').css('visibility', 'hidden');
$('#same_wifi_password').hide();
$('#guide_newpassword_aero').css('padding-top','80px');
$('#same_wifi_switch').removeClass('switch_on').addClass('switch_off');
$('#guide_wifiPwdSetWebPwd_close').hide();
$('#guide_wifiPwdSetWebPwd_open').hide();
$('#guide_newpassword_aero').show();
$('#new_password_close').show();
$('#new_password_open').hide();
$('#new_password').val('');
$('#new_password_text').val('');
$('[id^=modify_password_strength]').hide();
} else {
$('#same_wifi_password').css('visibility', 'visible');
$('#same_wifi_password').show();
$('#same_wifi_switch').removeClass('switch_on').addClass('switch_off');
$('#guide_wifiPwdSetWebPwd_close').hide();
$('#guide_wifiPwdSetWebPwd_open').hide();
$('#guide_newpassword_aero').show();
}
if (!EMUI.webWebFeatureController.isSuportSimplify || EMUI.webWebFeatureController.isSuportSimplify === '0') {
$('#guide_setpassinfo_tips').show();
var pwdInfoStr = publicLang["wlan_hint_wps_pwd_valid_type"];
$('.guide_setpassinfo').text(pwdInfoStr.replace(/8/g, 6));
}else{
$('#guide_setpassinfo_tips').hide();
}
if (GLOBAL.guideModifyPwd === '1') {
$('#guide_initial_password').show();
} else {
$('#guide_initial_password').hide();
if (GLOBAL.modules.externalProductFlag === '1' && GLOBAL.guideModifyPwd !== '2') {
$('#guide_modify_password_next').show();
$('#guide_modify_password').hide();
}
}
$('#guide_changepassword_page').show();
$('#guide_wifiPwdSetWebPwd').val(getPassword('guide_wifi_password'));
},
loginPasswordNext: function () {
if ($('#same_wifi_switch').hasClass('switch_on')) {
var newPass = window.xss(getPassword('guide_wifi_password'));
} else {
var newPass = getPassword('new_password');
}
if (!EMUI.checkUserController.checkModifyProc(newPass)) {
return;
}
this.hideAllPage();
$('#outdoor_cpe_prompt_page').show();
},
ethConfig: function (type) {
this.hideAllPage();
EMUI.GuideCradleDetectController.isStopDetect = true;
EMUI.GuideCradleDetectController.isStopCaptiveDetect = true;
var connectionmode = EMUI.GuideCradleDetectController.connectionmode;
if (type === 1) {
this.isShowReboot = true;
$('#guide_modify_password').attr('lang-id', 'guide.next');
langStr('guide_modify_password', 'guide.next');
if (GLOBAL.guideModifyPwd === '2') {
$('#guide_wifi_to_over').attr('lang-id', 'guide.next');
langStr('guide_wifi_to_over', 'guide.next');
}
}
if (GLOBAL.modules.captivePortalGuide === '1' && (EMUI.GuideCradleDetectController.connectionmode === '3' || EMUI.GuideCradleDetectController.connectionmode === '0'|| EMUI.GuideCradleDetectController.connectionmode === '5')) {
EMUI.AutoUpgradeController.captiveToWifi();
return;
}
EMUI.GuideController.ethInit(false, 'noCradleLine');
},
loginNext: function () {
this.hideAllPage();
EMUI.AutoUpgradeController.load(null, false);
EMUI.GuideDhcpController.load();
EMUI.GuidePwdObjController.getWlanPwd();
getConfigData('wifi/configure.xml', function ($xml) {
var globalConfig = xml2object($xml);
if (globalConfig.type === 'config') {
EMUI.WlanFeatureSwitchController.autoBandwidth5g = globalConfig['config']['autoBandwidth5g'];
EMUI.WlanFeatureSwitchController.gWifidisable = globalConfig['config']['disable_wlan'];
if (EMUI.WlanFeatureSwitchController.gWifidisable !== '1') {
EMUI.WlanFeatureSwitchController.gWifidisable = '0';
}
}
}, {
sync: true
});
if (EMUI.WlanFeatureSwitchController.gWifidisable === '0') {
EMUI.WlanFeatureSwitchController.load();
}
if (GLOBAL.modules.captivePortalGuide === '1' || (GLOBAL.modules.bbou_enabled !== '1' || (EMUI.AutoUpgradeController.content.response && EMUI.AutoUpgradeController.content.response.auto_update === '1')) ||
(EMUI.webWebFeatureController.controlAutoUpdataEnable && EMUI.webWebFeatureController.controlAutoUpdataEnable ==='0')) {
$('#guide_autoupdate_page').hide();
EMUI.AutoUpgradeController.gotoGuideWlanOrNocardPage();
} else {
$('#guide_autoupdate_page').show();
EMUI.LanguageController.registerLanguageEx('guide_auto_upgrade_des1', 'guide.autoupg_1', '%s', 'upgrade.auto.switch');
EMUI.LanguageController.registerLanguageEx('guide_auto_upgrade_des2', 'guide.autoupg_3', '%s1', 'upgrade.auto.switch');
EMUI.LanguageController.registerLanguageEx('guide_auto_upgrade_des2', 'guide.autoupg_3', '%s2', 'menu.advanceset');
EMUI.LanguageController.registerLanguageEx('guide_auto_upgrade_des2', 'guide.autoupg_3', '%s3', 'menu.upgrade');
EMUI.LanguageController.transLangEx();
if (GLOBAL.modules.china_region_enable === '1') {
$('#guide_upg_content').hide();
$('#guide_upgrade_close_auto_upgrade_notice').show();
$('#autoUpgTip').attr('lang-id','guide_china_autoupg');
$('#autoUpgTip').secureHtml(publicLang['guide_china_autoupg']);
$('#autoUpgBtnClose').attr('lang-id','guide.autoupdate.close');
$('#autoUpgBtnClose').text(publicLang['guide.autoupdate.close']);
$('#autoUpgBtnOpen').attr('lang-id','celllock.enable_1');
$('#autoUpgBtnOpen').text(publicLang['celllock.enable_1']);
}
}
},
showErrorMsg: function(divid, errormsgid, para) {
var msgcontent = '';
var errorLabel = '';
try {
msgcontent = publicLang[errormsgid];
} catch (e) {
return;
}
if (para) {
msgcontent = msgcontent.replace('%s', publicLang[para]);
}
var errorId = (divid + errormsgid).replace('.', '');
errorLabel += '<div class="clearboth error_message" style="margin-left:0px;">';
errorLabel += '<div class="pull-left" style="width:330px;">&nbsp;</div>';
errorLabel += '<div class="pull-left">';
errorLabel += '<div style="margin-left:0px;" id="' + errorId + '" lang-id="' + errormsgid + '" class="error_info">' + msgcontent + '</div>';
errorLabel += '</div></div>';
var classVal = '';
classVal = $('#' + divid).find('input').attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$('#' + divid).find('input').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
});
} else {
$('#' + divid).find('div').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_normal_selected') >= 0) {
$(element).addClass('input_error').removeClass('input_normal_selected');
}
});
}
$('#' + divid).append(errorLabel);
if (para) {
EMUI.LanguageController.registerLanguage(errorId, errormsgid, para);
}
},
guideModifyPasswordSwitch: function (obj) {
clearAllErrorMsg();
Switch(obj, function () {
var classlist = $(obj).attr('class');
if (classlist.indexOf('switch_off') >= 0) {
$('#guide_wifiPwdSetWebPwd_close').hide();
$('#guide_wifiPwdSetWebPwd_open').hide();
$('#guide_newpassword_aero').show();
$('#new_password_close').show();
$('#new_password_open').hide();
$('#new_password').val('');
$('#new_password_text').val('');
$('[id^=modify_password_strength]').hide();
} else {
$('#guide_wifiPwdSetWebPwd_close').show();
$('#guide_newpassword_aero').hide();
}
});
},
captiveModifyPasswordSwitch: function(obj) {
clearAllErrorMsg();
if ($(obj).attr('class').indexOf('check_off_disable') >= 0) {
return;
}
checkbox(obj, function() {
var classlist = $(obj).attr('class');
if (classlist.indexOf('check_off') >= 0) {
$('#guide_wifiPwdSetWebPwd_close').hide();
$('#guide_wifiPwdSetWebPwd_open').hide();
$('#guide_newpassword_aero').show();
$('#new_password_close').show();
$('#new_password_open').hide();
$('#new_password').val('');
$('#new_password_text').val('');
$('[id^=modify_password_strength]').hide();
} else {
$('#guide_wifiPwdSetWebPwd_close').show();
$('#guide_newpassword_aero').hide();
}
});
},
haveInsertCardNext: function (type) {
this.hideAllPage();
EMUI.GuideCradleDetectController.isStopDetect = true;
if (type === 1) {
this.isShowReboot = true;
$('#guide_modify_password').attr('lang-id', 'guide.next');
langStr('guide_modify_password', 'guide.next');
if (GLOBAL.guideModifyPwd === '2') {
$('#guide_wifi_to_over').attr('lang-id', 'guide.next');
langStr('guide_wifi_to_over', 'guide.next');
}
if(EMUI.BasicInfoObjController.content.response.classify === 'hilink'){
$("#guide_rebootinfo_nosim,#guide_reboot_device_button").show();
$("#guide_rebootinfo,#guide_finish_device_button").hide();
}
} else {
if(EMUI.BasicInfoObjController.content.response.classify === 'hilink'){
$("#guide_rebootinfo_nosim,#guide_reboot_device_button").hide();
$("#guide_rebootinfo,#guide_finish_device_button").show();
}
}
wifienablehide();
},
resizeWindow: function () {
var winHei = $(window).height();
var popHeight = 480;
var adjustHeight = 0;
var blueBackgroundHeight = 0;
if (winHei < 860) {
winHei = 860;
}
blueBackgroundHeight = winHei - $('.headcontainer').height() - $('#page_footer').height();
$('#guide_height').height(blueBackgroundHeight);
adjustHeight = (blueBackgroundHeight - popHeight) * 0.5;
if (GLOBAL.modules.captivePortalGuide !== '1') {
$('#guide_start_page').css('padding-top', (blueBackgroundHeight - $('#guide_start_containter').height()) * 0.4 + 'px');
} else {
$('#guide_start_page').css('padding-top', (adjustHeight+100) + 'px');
var domWidth = $('body').width();
var winWidth = $('window').width();
if (domWidth > winWidth) {
setTimeout(function() {
$('body').scrollTop($('.headcontainer').height() + adjustHeight);
$('body').scrollLeft(($('body').width() - $(window).width()) / 2);
}, 1000)
}
}
$('#guide_autoupdate_page').css('padding-top', adjustHeight + 'px');
$('#guide_uncable_page').css('padding-top', adjustHeight + 'px');
$('#guide_eth_page').css('padding-top', adjustHeight + 'px');
$('#guide_wifi_page').css('padding-top', adjustHeight + 'px');
$('#guide_changepassword_page').css('padding-top', adjustHeight + 'px');
$('#guide_dualNetwork_page').css('padding-top', adjustHeight + 'px');
$('#guide_reboot_page').css('padding-top', adjustHeight + 'px');
$('#guide_finish_page,#guide_privacy_page').css('padding-top', adjustHeight + 'px');
$('#outdoor_cpe_prompt_page').css('padding-top', adjustHeight + 'px');
},
guideInitLoginBoxStyle: function () {
if (GLOBAL.hasTwoAccountFlag || (GLOBAL.modules.loginusername_enable && GLOBAL.modules.loginusername_enable === '1')) {
$('#login_username_input').show();
$('.qrcodecontainer').css('padding-top', '60px');
$('#login_username').attr('disabled', false);
$('#login_username').removeAttr("disabled");
setTimeout(function () {
$("#login_username").focus();
}, 200);
} else {
$('#login_username_input').hide();
$('.qrcodecontainer').css('padding-top', '60px');
setTimeout(function () {
$("#login_password").focus();
}, 200);
}
},
});
EMUI.guideCancleRedirect = EMUI.ObjController.extend({
objName: 'online-update/redirect_cancel',
isSupportSaveInfo: false,
cancelRedirect: function () {
EMUI.globalStatusController.load();
if (GLOBAL.monitoringStatus.ConnectionStatus === '901') {
EMUI.guideCancleRedirect.load();
}
}
});
EMUI.GuideWlanDbhoObjController = EMUI.ObjController.extend({
postDbho: function (senddata, callback) {
this.contentType= 'application/json;charset=UTF-8';
this.isSupportSaveInfo = false;
this.objName = 'wlan/wlandbho';
this.postData(senddata, callback);
}
})
});
function changeDbhoSwitch () {
if (GLOBAL.wifiFeatureSwitch.hilink_dbho_enable && GLOBAL.wifiFeatureSwitch.hilink_dbho_enable === '1') {
if (!GLOBAL.modules.isdbFrequencyStatus) {
$('#wifi_guide_dbho_switch').addClass('switch_on').removeClass('switch_off');
if (GLOBAL.modules.dbho_special_enable !== '1') {
$('#guide_wifi_ssid_5g').hide();
$('.wifi_24gpassword_5gpass_same').hide();
}
} else {
$('#wifi_guide_dbho_switch').addClass('switch_off').removeClass('switch_on');
if (GLOBAL.modules.dbho_special_enable !== '1') {
$('#guide_wifi_ssid_5g').show();
$('.wifi_24gpassword_5gpass_same').show();
if (EMUI.doubleFrequencyConObjCtrl.initStatus) {
var guideWifiName = $('#guide_wifi_name').val();
if (GLOBAL.wifiFeatureSwitch && GLOBAL.wifiFeatureSwitch.wifi5gnamepostfix) {
$('#guide_wifi_name_5g').text(guideWifiName + GLOBAL.wifiFeatureSwitch.wifi5gnamepostfix);
} else {
$('#guide_wifi_name_5g').text(guideWifiName + '_5G');
}
}
}
}
GLOBAL.modules.isdbFrequencyStatus = !GLOBAL.modules.isdbFrequencyStatus;
}
}
function checkSSIDAndPwdChange() {
var new24SSID = $.trim($('#guide_wifi_name').val());
var newPwd = getPassword('guide_wifi_password');
var new5SSID = '';
var old24SSID = '';
var old24Pwd = '';
var old5Pwd = '';
var old5SSID = '';
var is5gOpen = false;
if (EMUI.WlanStatusSwitchController.wlanStatus5gEnable && EMUI.WlanMutiBasicController.wlanBasic5gEnable) {
is5gOpen = true;
if (GLOBAL.modules.isdbFrequencyStatus) {
new5SSID = $.trim($('#guide_wifi_name').val());
} else {
new5SSID = $.trim($('#guide_wifi_name_5g').text());
}
}
if (EMUI.GuideWlanObjController.oldSsidData) {
var ssidData = EMUI.GuideWlanObjController.oldSsidData;
var pwdData = EMUI.GuidePwdObjController.pwdData;
for (var i = 0; i < ssidData.length; i++) {
for (var j = 0; j < pwdData.length; j++) {
var ssidIndex = ssidData[i]['Index'];
var pwdIndex = pwdData[j]['Index'];
if ( ssidIndex === pwdIndex ) {
if (ssidData[i]['ID'].indexOf('1.Ssid.1') > 0) {
old24SSID = ssidData[i]['WifiSsid'];
old24Pwd = pwdData[j]['WifiWpapsk'];
} else if (ssidData[i]['ID'].indexOf('2.Ssid.1') > 0 && is5gOpen) {
old5SSID = ssidData[i]['WifiSsid'];
old5Pwd = pwdData[j]['WifiWpapsk'];
}
}
}
}
}
if (old24SSID !== new24SSID || old24Pwd !== newPwd || (is5gOpen && old5Pwd !== old24Pwd) || (is5gOpen && new5SSID !== old5SSID)) {
$('#wifi_change_info').show();
EMUI.GuideController.isWifiReboot = true;
}
}
function ssidCheckChinese(ssidSelector){
var wlanFeaterContent = EMUI.WlanFeatureSwitchController.content.response;
if (wlanFeaterContent.chinesessid_enable !== '1') {
$('#'+boxId + ' .ssid_cn_prompt').hide();
return;
}
var ssidVal = $.trim(($(ssidSelector)).val());
var boxId =  'wifi_content';
var haschinese =false;
var chinesechar = /[\u4e00-\u9fa5]/;
for (var i = 0; i < ssidVal.length; i++) {
var c = ssidVal.charAt(i);
if (chinesechar.test(c)) {
haschinese = true;
$('#'+boxId + ' .ssid_cn_prompt').show();
return;
}
}
if(!haschinese){
$('#'+boxId + ' .ssid_cn_prompt').hide();
}
}
var oldWifipw = '';
var oldWifiPassword = '';
var oldloginpw = '';
$(document).ready( function () {
if (EMUI.BasicInfoObjController.content.response.classify !== 'hilink') {
$("#hilink_disenable").show();
}else{
$("#hilink_disenable").hide();
$("#login_guide_step_start_title,#hilink_start_title").hide();
$(".guide_table_middle").hide();
$("#login_captive_guide").show();
}
utilGetCsrf();
if (GLOBAL.modules.web_feature_enabled === '1') {
EMUI.webWebFeatureController.load(null, false);
}
if (GLOBAL.modules.dualwan_enable === '1') {
EMUI.GuideDualNetworkController.load(null, false);
}
if (EMUI.webWebFeatureController.isSuportPwdRuleEnable && EMUI.webWebFeatureController.isSuportPwdRuleEnable === '1') {
$('.guide_setpassinfo').hide();
}
EMUI.WifiFeatureSwitch.load();
if (GLOBAL.modules.captivePortalGuide === '1') {
var guide_start_containter = '<div style="margin: 0 auto;width:1000px;position:absolute" class="captive_guide">\
<div class="topmenuselect guide_step_start_title" lang-id="" style="font-size:48px;"></div>\
<div style="margin:0 auto">\
<table class="text-left" cellpadding="0" cellspacing="0" frame="void" rules="none" style="border-collapse: separate;border-spacing: 16px;margin-top:30px;">\
<tr id="index_autoUpg" class="tagName_tr">\
<td>\
<div id="index_autoUpg_check" class="guide_check_on"></div>\
</td>\
<td>\
<div lang-id="index_autoUpg_label" class="topmenuselect"></div>\
</td>\
</tr>\
</table>\
</div>\
<div class="btn_normal_long" id="login_btn" onclick="EMUI.GuideToLoginObjController.captivelogin()" lang-id="guide.btn.start" style="line-height:44px;margin-top:50px;"></div>\
</div>';
var guide_eth_header = '<div align="center">\
<div lang-id="menu.ethernetsettings" style="font-size:18px;"></div>\
</div>\
<div class="captive_guide clearboth" id="eth_select_box" style="padding-top:64px;">\
<div class="pull-left" style="width:330px;">\
<div lang-id="guide.ethtype" class="text-right guide_input_label"></div>\
</div>\
<div class="controls text-left">\
<div id="eth_select" class="select_on_normal enable_mac_save_btn" onclick="SelectItem(this)" value=0 lang-id="guide.eth.ppp"></div>\
<div id="eth_select_list" class="select_list hide">\
<div id="eth_select_list_item_0" option="0" lang-id="guide.eth.ppp" class="select_medium" onclick="EMUI.GuideCradleDetectController.captiveSelectEthType(\'0\')"></div>\
<div id="eth_select_list_item_1" option="1" lang-id="guide.eth.dhcp" class="select_medium" onclick="EMUI.GuideCradleDetectController.captiveSelectEthType(\'1\')"></div>\
<div id="eth_select_list_item_2" option="2" lang-id="IDS_ethernet_setting_staticip" class="select_medium" onclick="EMUI.GuideCradleDetectController.captiveSelectEthType(\'2\')"></div>\
</div>\
</div>\
</div>';
var guide_wifipage_wifisame = '<div id="same_wifi_password" class="clearboth" style="padding-top:22px;">\
<div class="pull-left" style="width:330px;">\
<div lang-id="guide.devicePwd.label.phone" class="text-right guide_input_label"></div>\
</div>\
<div class="pull-left">\
<div id="same_wifi_switch" style="margin-top:8px;" class="check_off margin_right_10" onclick="EMUI.GuideController.captiveModifyPasswordSwitch(this)"></div>\
</div>\
<div class="pull-left">\
<div style="margin-top:8px;" lang-id="guide.samewifi"></div>\
</div>\
</div>';
var guide_finish_page_content = '<div style="min-height:333px;">\
<div style="padding-top:108px;" align="center">\
<div id="captive_finish" class="guide_finish"></div>\
<div id="captive_rebooting" class="home_font_style"><span id="captive_timing" style="font-size:40px"></span><span style="font-size:30px">s</span></div>\
<div id="finish_reboot_des_1" lang-id="guide.wifi_finish_reboot_des_1" style="margin-top:20px;font-size:16px" class="clearboth"></div>\
<div>\
<div lang-id="guide.new_reboot_wlan_name" class="color_descroption_gray" style="margin-top:40px"></div>\
<table class="text-left color_descroption_gray" cellpadding="0" cellspacing="0" frame="void" rules="none" style="border-collapse:separate;border-spacing:5px 10px;">\
<tbody>\
<tr>\
<td>\
<div class="guide_wifi_icon"></div>\
</td>\
<td>\
<div id="new_wifi_ssid_2"></div>\
</td>\
</tr>\
<tr id="new_wifi_ssid_5_div">\
<td>\
<div class="guide_wifi_icon"></div>\
</td>\
<td>\
<div id="new_wifi_ssid_5"></div>\
</td>\
</tr>\
</tbody>\
</table>\
</div>\
<div id="finish_reboot_des_3" lang-id="guide.finish_reboot_des_3" style="margin-top:24px;" class="clearboth"></div>\
</div>\
</div>';
var guide_dualNetwork_page = '<div style="margin:0 auto;position:absolute;">\
<div class="guide_table_top">&nbsp;</div>\
<div class="margin_bottom_box2 color_background_white" style="min-height:456px;">\
<div style="min-height:333px;">\
<div style="padding-top:20px;height:48px;" class="border_bottom" align="center">\
<div class="guide_sub_tip" style="font-size:18px;"></div>\
</div>\
<div id="manual_network" class="clearboth" style="padding-top:40px;">\
<div class="pull-left" style="width:330px;">\
<div lang-id="menu.dualnetlink" class="text-right guide_input_label"></div>\
</div>\
<div class="pull-left">\
<div id="manual_network_radio" style="margin-top:8px;" name="dualNetworkType" class="radio_btn_on margin_right_10" onclick="radio(this)"></div>\
</div>\
<div class="pull-left text-left" style="width:560px">\
<div style="margin-top:8px;" lang-id="guide.manual_network"></div>\
<div style="margin-top:8px;" class="guide_input_descript" lang-id="guide.manual_network_des"></div>\
</div>\
</div>\
<div id="smart_network" class="clearboth" style="padding-top:30px;">\
<div class="pull-left" style="width:330px;">\
<div class="text-right guide_input_label"></div>\
</div>\
<div class="pull-left">\
<div id="smart_network_radio" style="margin-top:8px;" name="dualNetworkType" class="radio_btn_off margin_right_10" onclick="radio(this)"></div>\
</div>\
<div class="pull-left text-left" style="width:560px">\
<div style="margin-top:8px;" lang-id="guide.smart_network"></div>\
<div style="margin-top:8px;" class="guide_input_descript" lang-id="guide.smart_network_des"></div>\
</div>\
</div>\
<div id="guide_reboot_tip" class="clearboth" style="padding-top:30px;">\
<div class="pull-left" style="width:330px;">\
<div class="text-right guide_input_label"></div>\
</div>\
</div>\
</div>\
<div class="clearboth" align="center" style="margin-top:5px;">\
<div id="guide_dualNetwork_to_next" lang-id="guide.finish" style="position: relative;" class="btn_normal_long" onclick="EMUI.GuideController.dualNetworkNext()"></div>\
</div>\
</div>\
<div class="guide_table_bottom">&nbsp;</div>\
</div>';
var guide_wifi_btns = '<div id="guide_wifi_btns" class="clearboth" align="center" style="margin-top:5px;">\
<div id="guide_wifi_to_next" lang-id="guide.next" style="position: relative;" class="btn_normal_long" onclick="EMUI.GuideController.wifiNext()"></div>\
<div id="guide_wifi_to_over" lang-id="guide.finish" style="position: relative;" class="btn_normal_long" onclick="EMUI.checkUserController.checkCurrentPAssword();"></div>\
</div>';
$('#guide_start_containter').html(guide_start_containter);
$('#guide_eth_header').html(guide_eth_header);
$('#guide_wifipage_wifisame').html(guide_wifipage_wifisame);
$('#guide_wifipage_wifisame').append($('#guide_wifisame_input').html());
$('#guide_finish_page_content').html(guide_finish_page_content);
$('#guide_dualNetwork_page').html(guide_dualNetwork_page);
$('#captive_wifi_btns').html(guide_wifi_btns);
$('#no_sim_and_has_cable_img').attr('class','guide_nosimcard_captive');
$('#has_sim_and_no_cable_img').attr('class','guide_uncabled_captive');
$('#has_sim_and_has_cable_img').attr('class','guide_cabled_simcard_captive');
$('.guide_sub_tip').attr('lang-id', 'guide.sub_title');
$('.guide_sub_tip').text(publicLang['guide.sub_title']);
$('.no_captive_guide').remove();
$('#guide_wifi_password,#guide_wifi_password_text,#new_password,#new_password_text').attr('placeholder', '');
$('#guide_wifi_password,#guide_wifi_password_text,#new_password,#new_password_text').attr('lang-id-set', 'placeholder');
$('#guide_wifi_password,#guide_wifi_password_text').attr('lang-id', 'captiveGuide_hint_password_empty');
$('#new_password,#new_password_text').attr('lang-id', 'captiveGuide_hint_password_empty');
if (GLOBAL.modules.dualwan_enable !== '1') {
$('#guide_wifi_to_next').attr('lang-id','guide.finish');
$('#guide_wifi_to_next').text(publicLang['guide.finish']);
}
showNationalLang();
bindEyeEvent('guide_wifipage_wifisame');
} else {
$('.captive_guide').remove();
$('#wifi_content').css('max-height', '310px');
}
$('.guide_step_start_title').html(publicLang['guide.welcome'].replace('%s', xss(document.title)));
EMUI.AutoUpgradeController.initLoginInput();
var globalData = GLOBAL['modules'];
if (window.location.href.indexOf('guide.html') !== -1) {
EMUI.GuideController.resizeWindow();
$("#ppp_password_div div[forpass='ppp_password']").hide();
EMUI.BasicInfoObjController.load( function (data) {
if (data['response']['restore_default_status'] === '0' && GLOBAL.firstlogin === '1') {
window.location.href = '/';
}
if (data['response']['restore_default_status'] === '0' && GLOBAL.forceSkipGuide === '1') {
window.location.href = '/';
}
}, false);
if (globalData['bbou_enabled'] === '1') {
EMUI.guideCancleRedirect.cancelRedirect();
}
EMUI.GuideController.guideInitLoginBoxStyle();
$('#login_qrcode_text').css('width', '160px');
EMUI.Scroll.initScroll('#eth_ppp_div');
EMUI.Scroll.initScroll('#wifi_content');
EMUI.Scroll.initScroll('#eth_static_div');
EMUI.GuideSimCardStatusController.load(null, false);
$('#guide_wifi_password, #guide_wifi_password_text').bind('keyup change', function (evt) {
if (oldWifipw === $('#'+evt.target.id).val()) {
return;
}
oldWifipw = $('#'+evt.target.id).val();
if (evt.target.id === 'guide_wifi_password'){
$('#guide_wifi_password_text').val($('#guide_wifi_password').val());
} else {
$('#guide_wifi_password').val($('#guide_wifi_password_text').val());
}
var passTxt = $('#guide_wifi_password').val();
EMUI.GuideWlanObjController.checkWpaStrength(passTxt, $('#guide_wifi_name').val());
clearAllErrorMsg();
EMUI.GuideController.showWifiPwdErrMsg();
if (GLOBAL.modules.captivePortalGuide === '1') {
$('#guide_wifiPwdSetWebPwd').val(passTxt);
$('#guide_wifiPwdSetWebPwd_text').val(passTxt);
if (((!EMUI.webWebFeatureController.isSuportSimplify || EMUI.webWebFeatureController.isSuportSimplify === '0') && (!EMUI.checkUserController.checkWifiPwdStrong())) ||
(passTxt.length > 32 || !EMUI.webWebFeatureController.suportPwdSame || EMUI.webWebFeatureController.suportPwdSame === '0')) {
if ($('#same_wifi_switch').attr('class').indexOf('check_off_disable') === -1) {
$('#same_wifi_switch').removeClass('check_on').removeClass('check_off').addClass('check_off_disable');
$('#guide_wifiPwdSetWebPwd_close').hide();
$('#guide_wifiPwdSetWebPwd_open').hide();
$('#guide_newpassword_aero').show();
$('#new_password_close').show();
$('#new_password_open').hide();
$('#new_password').val('');
$('#new_password_text').val('');
$('[id^=modify_password_strength]').hide();
}
} else {
if ($('#same_wifi_switch').attr('class').indexOf('check_off_disable') !== -1) {
$('#same_wifi_switch').removeClass('check_off_disable').addClass('check_off');
$('#guide_wifiPwdSetWebPwd_close').hide();
$('#guide_wifiPwdSetWebPwd_open').hide();
$('#guide_newpassword_aero').show();
$('#new_password_close').show();
$('#new_password_open').hide();
$('#new_password').val('');
$('#new_password_text').val('');
$('[id^=modify_password_strength]').hide();
}
}
if (!EMUI.webWebFeatureController.isSuportSimplify || EMUI.webWebFeatureController.isSuportSimplify === '0') {
$('#guide_setpassinfo_tips').show();
var pwdInfoStr = publicLang["wlan_hint_wps_pwd_valid_type"];
$('.guide_setpassinfo').text(pwdInfoStr.replace(/8/g, 6));
} else {
$('#guide_setpassinfo_tips').hide();
}
}
});
$('#guide_wifi_name').bind('keyup change', function () {
clearAllErrorMsg();
ssidCheckChinese('#guide_wifi_name');
EMUI.GuideController.showWifiErrMsg();
if (EMUI.WlanStatusSwitchController.wlanStatus5gEnable) {
if (GLOBAL.wifiFeatureSwitch && GLOBAL.wifiFeatureSwitch.wifi5gnamepostfix) {
$('#guide_wifi_name_5g').text($.trim($('#guide_wifi_name').val()) + GLOBAL.wifiFeatureSwitch.wifi5gnamepostfix);
} else {
$('#guide_wifi_name_5g').text($.trim($('#guide_wifi_name').val()) + '_5G');
}
}
});
}
$('#new_password, #new_password_text').bind('keyup change', function (evt) {
if (oldloginpw === $('#'+evt.target.id).val()) {
return;
}
oldloginpw = $('#'+evt.target.id).val();
if (evt.target.id === 'new_password'){
$('#new_password_text').val($('#new_password').val());
} else {
$('#new_password').val($('#new_password_text').val());
}
var newpass = getPassword('new_password');
EMUI.checkUserController.checkModifyPasswordStrength(newpass);
EMUI.checkUserController.checkModifyProc(newpass);
});
$('body').keydown(function (e) {
var curKey = e.which;
if (curKey === 13) {
if (GLOBAL.deviceInfo.restore_default_status === '1') {
if ($('#guide_start_page').is(':visible')) {
EMUI.LoginObjController.Login(1);
return;
}
}
}
});
$(document).on('click','#guide_reboot_device_button', function () {
EMUI.AutoUpgradeController.sendUpgData();
if (EMUI.BasicInfoObjController.content.response.classify !== 'hilink') {
if ((GLOBAL.guideModifyPwd === '1' && EMUI.checkUserController.isSkipModifyPsd === 1) || GLOBAL.guideModifyPwd === '2') {
EMUI.GuideWlanObjController.setWlanAndAccount(1);
} else {
EMUI.GuideWlanObjController.setWlanAndAccount();
}
}else{
EMUI.RebootController.rebootExe();
EMUI.GuideToLoginObjController.loginCallback();
}
});
$(document).on('click','#guide_finish_device_button', function () {
EMUI.AutoUpgradeController.sendUpgData();
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
EMUI.GuideToLoginObjController.loginCallback();
}
});
$(document).on("click","#login_btn_allowed",function(){
if (EMUI.privacyNoticeInfoController.isPolicyUpdate) {
EMUI.privacyNoticeInfoController.popPrivacyNotice();
} else {
if (GLOBAL.modules.captivePortalGuide !== '1') {
EMUI.indexAutoUpgradeController.sendAutoUpg();
}
EMUI.GuideController.loginNext();
}
});
if (window.addEventListener) {
window.addEventListener('resize', EMUI.GuideController.resizeWindow, false);
} else {
window.attachEvent('resize', EMUI.GuideController.resizeWindow);
}
setTimeout(EMUI.GuideController.resizeWindow, 200);
if (GLOBAL.modules.captivePortalGuide === '1') {
$('.guide_nosim_notice').show();
if (GLOBAL.deviceInfo.restore_default_status === '1') {
$('#safeinfo_td').hide();
}
}
});
