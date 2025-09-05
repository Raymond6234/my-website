
$(function () {
var ERROR_LOGIN_ALREADY_LOGIN = '108003';
var ERROR_LOGIN_TOOMANY_LOGIN = '108005';
var ERROR_LOGIN_USERNAME_PWD_WRONG = '108006';
var ERROR_LOGIN_USERNAME_PWD_ORERRUN = '108007';
var ERROR_LOGIN_IN_DEFFERENT_DEVICES = '108009';
var ERROR_LOGIN_FREQUENTLY_LOGIN = '108010';
var firstloginpassword = "";
var CONST = {
MACRO_PASSWORD_LOW: 1,
MACRO_PASSWORD_MID: 2,
MACRO_PASSWORD_HIG: 3,
MODIFY_STATUS: 0,
MACRO_SUPPORT_CHAR_MAX: 126,
MACRO_SUPPORT_CHAR_MIN: 32,
MODIFYPASSWORD_LOGOUT: '125002',
MODIFYPASSWORD_ERROR: '108008',
DIALOG_TIMEOUT: 1000,
KEY_CODE_37: 37,
KEY_CODE_38: 38,
KEY_CODE_39: 39,
KEY_CODE_40: 40
};
EMUI.LoginObjController = EMUI.ObjController.extend({
objName: 'user/challenge_login',
isSupportSaveInfo: false,
remaincount: 0,
waittime: 0,
checkProc: function (name, password) {
var password = password;
if (GLOBAL.hasTwoAccountFlag || (GLOBAL.modules.loginusername_enable && GLOBAL.modules.loginusername_enable === '1')) {
if (name === '') {
var classPart = 'login_';
if ($('#login_username_div').hasClass('guideLogin')) {
classPart = 'guide_';
}
$('#login_error_info').attr('lang-id', 'login.username.emptyerr');
$('#login_error_info').text(publicLang['login.username.emptyerr']);
$('#login_error_info').show();
$('#login_username').val('');
$('#login_username').focus();
$('#login_username_div').addClass(classPart + 'password_error').removeClass(classPart + 'password ' + classPart + 'password_selected');
return false;
}
}
if (password === '') {
this.chearInput('login.password.emptyerr');
return false;
}
return true;
},
initLoginBoxStyle: function () {
if (GLOBAL.hasTwoAccountFlag || (GLOBAL.modules.loginusername_enable && GLOBAL.modules.loginusername_enable === '1')) {
$('#login_username_input').show();
$('.qrcodecontainer').css('padding-top', '120px');
$('#index_login_title').attr('lang-id', 'index.loginTitle').text(publicLang['index.loginTitle']);
$('#login_username').attr('disabled', false);
$('#login_username').removeAttr("disabled");
setTimeout(function () {
if (!isSupportPlaceholder()) {
$("#login_username1").focus();
$("#login_password1").blur();
} else {
$("#login_username").focus();
$("#login_password").blur();
}
}, 200);
} else {
$('#login_username_input').hide();
$('.qrcodecontainer').css('padding-top', '80px');
$('#index_login_title').attr('lang-id', 'index.loginpassword').text(publicLang['index.loginpassword']);
setTimeout(function () {
if (!isSupportPlaceholder()) {
$("#login_password1").focus();
} else {
$("#login_password").focus();
}
}, 200);
}
if (EMUI.rememberPassController.getrememberpwdStatus() === '1') {
$('#login_btn').css('margin-bottom', '38px');
}
$(document).off('keyup change', '#login_password,#login_username');
$(document).on('keyup change', '#login_password,#login_username', function () {
if (!EMUI.loginLockStatusController.isChecked) {
EMUI.loginLockStatusController.isChecked = true;
EMUI.loginLockStatusController.checkLoginLockStatus();
}
});
},
autorunRedirect: function () {
var deviceVersion = '';
var disAutoFlag = '';
var pcVersion = getQueryStringByName('version');
if (pcVersion === null || pcVersion.length <= 0 || pcVersion === 'null') {
return false;
}
getAjaxData('api/device/autorun-version', function (xml) {
var AutorunVer = xml;
if (AutorunVer.type === 'response') {
deviceVersion = AutorunVer.response.Version;
disAutoFlag = AutorunVer.response.AutoRunFlag;
}
}, {
sync: true
});
var string1list = pcVersion.split('.');
var string2list = deviceVersion.split('.');
var isNewVersionFound = false;
var isValidVersion = false;
if (string1list.length === string2list.length) {
var count;
for (count = 0; count < string1list.length; count++) {
if (isNaN(string1list[count]) || isNaN(string2list[count])) {
break;
}
}
if (string1list.length === count) {
isValidVersion = true;
}
}
if (isValidVersion) {
if (parseInt(string1list[4], 10) !== parseInt(string2list[4], 10)) {
isNewVersionFound = true;
}
var i = 0;
for (i; i < 4; i++) {
if (string1list[i] < string2list[i]) {
isNewVersionFound = true;
} else if (string1list[i] > string2list[i]) {
break;
}
}
}
if (isNewVersionFound) {
if (disAutoFlag !== undefined && disAutoFlag === '1') {
return false;
} else {
gotoPageWithoutHistory('../html/update_autorun.html?version=' + pcVersion);
return true;
}
}
return false;
},
showLoginPasswordBorder: function (obj) {
var curElement = $(obj);
var classPart = 'login_';
if (curElement && curElement.parent()) {
if (curElement.parent().hasClass('guideLogin')) {
classPart = 'guide_';
}
var classAttr = curElement.parent().attr('class');
if (classAttr !== classPart + 'password_error') {
curElement.parent().addClass(classPart + 'password_selected').removeClass(classPart + 'password');
}
}
},
hideLoginPasswordBorder: function (obj) {
var curElement = $(obj);
var classPart = 'login_';
if (curElement && curElement.parent()) {
if (curElement.parent().hasClass('guideLogin')) {
classPart = 'guide_';
}
var classAttr = curElement.parent().attr('class');
if (classAttr !== classPart + 'password_error') {
curElement.parent().addClass(classPart + 'password').removeClass(classPart + 'password_selected');
}
}
},
chearInput: function (errId, repalceFlag) {
var classPart = 'login_';
if ($('.login_password_div').hasClass('guideLogin')) {
classPart = 'guide_';
}
$('#login_error_info').attr('lang-id', errId);
$('#login_error_info').text(publicLang[errId]);
$('#login_error_info').show();
if (EMUI.rememberPassController.getrememberpwdStatus() === '1' && $('#checkbox_remember_password').hasClass('check_on')) {
$('#login_password').val('******');
} else {
$('#login_password').val('');
$('#login_password_text').val('');
}
$('.login_password_div').addClass(classPart + 'password_error').removeClass(classPart + 'password ' + classPart + 'password_selected');
$('#login_username').val('');
$('#login_username').focus();
$('#login_username_div').addClass(classPart + 'password_error').removeClass(classPart + 'password ' + classPart + 'password_selected');
if (repalceFlag) {
EMUI.LoginObjController.PasswordErrorStr(errId)
}
},
PasswordErrorStr: function (errId) {
var remaincount = EMUI.LoginObjController.remaincount;
var waittime = EMUI.LoginObjController.waittime;
if (remaincount > 1) {
var str = singleComplexRule.rules(remaincount);
str = publicLang['index_attempt_' + str].replace('%d', remaincount)
$('#login_error_info').text(publicLang[errId].replace('%s', str));
} else if (waittime) {
var str = singleComplexRule.rules(waittime);
str = publicLang['index_minute_' + str].replace('%d', waittime)
$('#login_error_info').text(publicLang[errId].replace('%s', str))
}
$('#login_error_info').show();
},
clearErrorMsg: function () {
var classPart = 'login_';
if ($('.login_password_div').hasClass('guideLogin')) {
classPart = 'guide_';
}
$('#login_error_info').attr('lang-id', '');
$('#login_error_info').text('');
$('#login_error_info').hide();
$('.login_password_div').removeClass(classPart + 'password_error').addClass(classPart + 'password');
$('#login_username_div').removeClass(classPart + 'password_error').addClass(classPart + 'password');
if (GLOBAL.hasTwoAccountFlag || (GLOBAL.modules.loginusername_enable && GLOBAL.modules.loginusername_enable === '1')) {
$("#login_username").focus();
$("#login_password").blur();
} else {
$("#login_password").focus();
}
},
hideWin: function () {
$('#submit_light').hide();
$('#submit_fade').hide();
},
showForgetPassInfo: function () {
if (GLOBAL.config && GLOBAL.config['no_reset_button'] === '1') {
if(GLOBAL.modules && GLOBAL.modules.china_region_enable === '1' && GLOBAL.modules.captivePortalGuide === '1') {
$('#forgetpassword_info').attr('lang-id', 'index.forgetpassword.nolabel.zh');
$('#forgetpassword_info').text(publicLang['index.forgetpassword.nolabel.zh']);
} else {
$('#forgetpassword_info').attr('lang-id', 'index.forgetpassword.nolabel');
$('#forgetpassword_info').text(publicLang['index.forgetpassword.nolabel']);
}
}else{
if (GLOBAL.modules && GLOBAL.modules.china_region_enable === '1' && GLOBAL.modules.captivePortalGuide === '1') {
$('#forgetpassword_info').attr('lang-id', 'index.forgetpassword.info.zh');
$('#forgetpassword_info').text(publicLang['index.forgetpassword.info.zh']);
}
}
if (EMUI.BasicInfoObjController.content.response.classify !== 'hilink') {
$('#submit_light').show();
$('#submit_fade').show();
var heightest = $(document).height();
setTimeout(function () {
$('#submit_fade').css('height', heightest + 'px');
}, 50);
} else {
window.location.href = "../html/secretlogin.html";
}
},
resizeWindow: function () {
var winHei = $(window).height();
var popHeight = 386;
var blueBackgroundHeight = 0;
if (winHei < 700) {
winHei = 700;
}
blueBackgroundHeight = winHei - $('.headcontainer').height() - $('#page_footer').height();
$('#login_win').height(blueBackgroundHeight);
var clientWidth = document.body.clientWidth;
if (GLOBAL.config.delete_qrcode_enable && GLOBAL.config.delete_qrcode_enable ==='1'){
var winMargin = (100 * ((clientWidth - 364) / clientWidth / 2) - 0.15).toFixed(2) + '%';
$(".indexcontainer").css('width', '364px');
} else {
var winMargin = (100 * ((clientWidth - 630) / clientWidth / 2) - 0.15).toFixed(2) + '%';
}
$(".indexcontainer").css('padding-top', (blueBackgroundHeight - popHeight) * 0.5);
$(".indexcontainer").css('margin-left', winMargin);
$(".indexcontainer").css('margin-right', winMargin);
},
SHA256: function (s) {
var chrsize = 8;
var hexacase = 0;
function add_safely(x, y) {
var lowsw = (x & 0xFFFF) + (y & 0xFFFF);
var midsw = (x >> 16) + (y >> 16) + (lowsw >> 16);
return (midsw << 16) | (lowsw & 0xFFFF);
}
function SS(x, n) {
return (x >>> n) | (x << (32 - n));
}
function RR(x, n) {
return (x >>> n);
}
function Chh(x, y, z) {
return ((x & y) ^ ((~x) & z));
}
function Maja(x, y, z) {
return ((x & y) ^ (x & z) ^ (y & z));
}
function Sigma0256Alg(x) {
return (SS(x, 2) ^ SS(x, 13) ^ SS(x, 22));
}
function Sigma1256Alg(x) {
return (SS(x, 6) ^ SS(x, 11) ^ SS(x, 25));
}
function Gamma0256Alg(x) {
return (SS(x, 7) ^ SS(x, 18) ^ RR(x, 3));
}
function Gamma1256Alg(x) {
return (SS(x, 17) ^ SS(x, 19) ^ RR(x, 10));
}
function core_sha256_algotithm(m, l) {
var K_Array = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
var HASH_Array = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
var W_Array = new Array(64);
var a, b, c, d, e, f, g, h, i, j;
var T1, T2;
m[l >> 5] |= 0x80 << (24 - l % 32);
m[((l + 64 >> 9) << 4) + 15] = l;
for (var i = 0; i < m.length; i += 16) {
a = HASH_Array[0];
b = HASH_Array[1];
c = HASH_Array[2];
d = HASH_Array[3];
e = HASH_Array[4];
f = HASH_Array[5];
g = HASH_Array[6];
h = HASH_Array[7];
for (var j = 0; j < 64; j++) {
if (j < 16)
W_Array[j] = m[j + i];
else
W_Array[j] = add_safely(add_safely(add_safely(Gamma1256Alg(W_Array[j - 2]), W_Array[j - 7]), Gamma0256Alg(W_Array[j - 15])), W_Array[j - 16]);
T1 = add_safely(add_safely(add_safely(add_safely(h, Sigma1256Alg(e)), Chh(e, f, g)), K_Array[j]), W_Array[j]);
T2 = add_safely(Sigma0256Alg(a), Maja(a, b, c));
h = g;
g = f;
f = e;
e = add_safely(d, T1);
d = c;
c = b;
b = a;
a = add_safely(T1, T2);
}
HASH_Array[0] = add_safely(a, HASH_Array[0]);
HASH_Array[1] = add_safely(b, HASH_Array[1]);
HASH_Array[2] = add_safely(c, HASH_Array[2]);
HASH_Array[3] = add_safely(d, HASH_Array[3]);
HASH_Array[4] = add_safely(e, HASH_Array[4]);
HASH_Array[5] = add_safely(f, HASH_Array[5]);
HASH_Array[6] = add_safely(g, HASH_Array[6]);
HASH_Array[7] = add_safely(h, HASH_Array[7]);
}
return HASH_Array;
}
function str2binbcode(str) {
var bin = Array();
var mask = (1 << chrsize) - 1;
for (var i = 0; i < str.length * chrsize; i += chrsize) {
bin[i >> 5] |= (str.charCodeAt(i / chrsize) & mask) << (24 - i % 32);
}
return bin;
}
function Utf8Encode(str) {
str = str.replace(/\r\n/g, "\n");
var utfStr = "";
for (var n = 0; n < str.length; n++) {
var c = str.charCodeAt(n);
if (c < 128) {
utfStr += String.fromCharCode(c);
} else if ((c > 127) && (c < 2048)) {
utfStr += String.fromCharCode((c >> 6) | 192);
utfStr += String.fromCharCode((c & 63) | 128);
} else {
utfStr += String.fromCharCode((c >> 12) | 224);
utfStr += String.fromCharCode(((c >> 6) & 63) | 128);
utfStr += String.fromCharCode((c & 63) | 128);
}
}
return utfStr;
}
function binbcode2hex(binArray) {
var hex_tab = hexacase ? "0123456789ABCDEF" : "0123456789abcdef";
var str = "";
for (var i = 0; i < binArray.length * 4; i++) {
str += hex_tab.charAt((binArray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
hex_tab.charAt((binArray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
}
return str;
}
s = Utf8Encode(s);
return binbcode2hex(core_sha256_algotithm(str2binbcode(s), s.length * chrsize));
},
loginFailInfo: function (result) {
var self = this;
var text = 'password_';
if (GLOBAL.hasTwoAccountFlag || (GLOBAL.modules.loginusername_enable && GLOBAL.modules.loginusername_enable === '1')) {
text = 'username_or_password_';
}
if (result.error.code === ERROR_LOGIN_USERNAME_PWD_ORERRUN) {
self.waittime = parseInt(result.error.waittime, 10);
self.chearInput(text + 'login_overrun', true);
EMUI.loginLockStatusController.checkLoginLockStatus();
} else if (result.error.code === ERROR_LOGIN_USERNAME_PWD_WRONG) {
if (result.error.remaincount) {
self.remaincount = parseInt(result.error.remaincount, 10);
if (self.remaincount === 1) {
if (result.error.tobelockedtime) {
self.waittime = parseInt(result.error.tobelockedtime, 10);
} else {
self.waittime = parseInt(result.error.waittime, 10);
if (self.waittime === 0) {
self.waittime = self.waittime + 1;
} else {
self.waittime = self.waittime * 2;
}
}
self.chearInput(text + 'login_wrong_last_time', true);
} else {
self.chearInput(text + 'login_wrong', true);
}
} else {
if (GLOBAL.hasTwoAccountFlag || (GLOBAL.modules.loginusername_enable && GLOBAL.modules.loginusername_enable === '1')) {
self.chearInput('login_username_or_password_wrong');
} else {
self.chearInput('IDS_login_username_password_wrong');
}
}
} else if (result.error.code === ERROR_LOGIN_TOOMANY_LOGIN) {
self.chearInput('IDS_login_duplicate_login');
} else if (result.error.code === ERROR_LOGIN_ALREADY_LOGIN) {
self.chearInput('IDS_touch_user_login_repeat');
} else if (result.error.code === ERROR_LOGIN_FREQUENTLY_LOGIN) {
self.chearInput('IDS_login_frequently_warning');
} else if (result.error.code === ERROR_LOGIN_IN_DEFFERENT_DEVICES) {
self.chearInput('IDS_touch_user_login_repeat');
} else {
self.chearInput('IDS_login_fialed_prompt');
}
},
showChangePasswordPage: function () {
$('div[id^="login_back_ground_"]').hide();
$('#submit_light').hide();
$('#submit_fade').hide();
$('#privacy_notice_content').hide();
$('#guide_changepassword_page').show();
$('#same_wifi_password').css('visibility', 'hidden');
$('#same_wifi_password').hide();
$('#same_wifi_switch').removeClass('switch_on').addClass('switch_off');
$('#guide_newpassword_aero').show();
if (GLOBAL.guideModifyPwd === '1') {
$('#guide_skip_password').show();
}
},
loginSuccessCallback: function (loginaim, caLLback, id, nocheck) {
var caLLbackFun;
var self = this;
secondaryAccountFlag();
EMUI.privacyNoticeInfoController.checkPrivacyNotice();
if (EMUI.webWebFeatureController && EMUI.webWebFeatureController.rememberPwd === '1' && !nocheck) {
var request = {
rememberpwd_status: 0
};
var className = $('#checkbox_remember_password').attr('class');
request.rememberpwd_status = className.substring(className.length - 2, className.length) === 'on' ? '1' : '0';
EMUI.TokenObjController.load(function () { }, false);
EMUI.rememberPassController.postData(request, null, false);
}
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
if (EMUI.loginallowedObjController.content.response.hilink_login === '1') {
EMUI.HeartBeatObjController.refresh();
}
} else {
EMUI.HeartBeatObjController.refresh();
}
if (loginaim === 0) {
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
if (EMUI.loginallowedObjController.content.response.hilink_login === '1') {
EMUI.LoginStateController.load(null, false);
}
} else {
EMUI.LoginStateController.load(null, false);
}
EMUI.customHistoryLoginController.load(null, false);
if (GLOBAL.hasTwoAccountFlag && GLOBAL.deviceInfo.restore_default_status === '0' && GLOBAL.firstlogin === '0') {
if (GLOBAL.forceSkipGuide === '1' || GLOBAL.guideModifyPwd === '2') {
caLLbackFun = function () {
EMUI.GuideWlanObjController.setWlanAndAccount(2);
}
} else {
caLLbackFun = self.showChangePasswordPage;
}
} else {
$('#' + id).hide();
caLLbackFun = caLLback;
}
if (EMUI.privacyNoticeInfoController.isPolicyUpdate) {
EMUI.privacyNoticeInfoController.popPrivacyNotice(caLLbackFun);
} else {
if (window.location.href.indexOf('upgraderedirect.html') !== -1) {
EMUI.indexAutoUpgradeController.sendAutoUpg(true);
} else {
EMUI.indexAutoUpgradeController.sendAutoUpg();
}
if (caLLbackFun) {
caLLbackFun();
return;
}
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
if (EMUI.loginallowedObjController.content.response.hilink_login === '1') {
if (firstloginpassword === "admin") {
$("#modify_login").show();
$("#logincontainerwidth").hide();
return;
} else {
window.location.href = './content.html#home';
}
}
} else {
window.location.href = './content.html#home';
}
}
} else {
if (loginaim === 1) {
if (EMUI.privacyNoticeInfoController.isPolicyUpdate) {
EMUI.privacyNoticeInfoController.popPrivacyNotice();
} else {
if (GLOBAL.modules.captivePortalGuide !== '1') {
EMUI.indexAutoUpgradeController.sendAutoUpg();
}
EMUI.GuideController.loginNext();
}
}
}
},
Login: function (loginaim, caLLback, id, flag) {
var self = this;
var name = $('#login_username').val();
var password = (GLOBAL.modules.captivePortalGuide === '1' && GLOBAL.deviceInfo.restore_default_status === '1') ? '' : $('#login_password').val();
var username = (GLOBAL.hasTwoAccountFlag || (GLOBAL.modules.loginusername_enable && GLOBAL.modules.loginusername_enable === '1')) ? window.xss(name) : 'admin';
EMUI.globalStatusController.load(function () { }, false);
EMUI.TokenObjController.load(function () { }, false);
if (EMUI.loginLockStatusController.isLoginLocked) {
return;
}
if (nocheck_login()) {
password = EMUI.ObjController.base64encode($('#login_password').val());
var request = {
Username: username,
Password: password,
password_type: '0'
};
self.objName = 'user/login';
self.postData(request, function (result) {
if (result['type'] === 'response') {
self.loginSuccessCallback(loginaim, caLLback, id, true);
} else {
self.loginFailInfo(result);
}
});
return;
}
if (!(GLOBAL.modules.captivePortalGuide === '1' && GLOBAL.deviceInfo.restore_default_status === '1') && !this.checkProc(name, password)) {
return;
}
self.objName = 'user/challenge_login';
$('#login_error_info').empty();
$('#login_error_info').hide();
var scram = CryptoJS.SCRAM();
var firstNonce = scram.nonce().toString();
var firstPostData = {
username: username,
firstnonce: firstNonce,
mode: 1
};
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
if (flag) {
finalPostData = {
clientproof: clientProof,
finalnonce: finalNonce,
loginflag: '2'
};
}
if (data['response']['newType'] && data['response']['newType'] == '1') {
var newSalt = CryptoJS.enc.Hex.parse(data['response']['newSalt']);
var newIter = data['response']['newIterations'];
var newSaltPassword = scram.saltedPassword(password, newSalt, newIter).toString();
var newStoredKey = scram.storedKey(scram.clientKey(CryptoJS.enc.Hex.parse(newSaltPassword))).toString();
var newServerKey = scram.serverKey(CryptoJS.enc.Hex.parse(newSaltPassword)).toString();
var hashOldNewPwd = self.SHA256(newStoredKey + newServerKey + clientProof);
finalPostData = {
clientproof: clientProof,
finalnonce: finalNonce,
hashOldNewPwd: hashOldNewPwd,
newStoredKey: newStoredKey,
newServerKey: newServerKey
}
if (flag) {
finalPostData = {
clientproof: clientProof,
finalnonce: finalNonce,
hashOldNewPwd: hashOldNewPwd,
newStoredKey: newStoredKey,
newServerKey: newServerKey,
loginflag: '2'
}
}
}
self.objName = 'user/authentication_login';
self.postData(finalPostData, function (result) {
if (result['type'] === 'response') {
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
if (EMUI.loginallowedObjController.content.response.hilink_login === '1') {
EMUI.LoginStateController.load(function () {
}, false);
}
} else {
EMUI.LoginStateController.load(function () {
}, false);
}
var serverProof = scram.serverProof(password, scarmSalt, iter, authMsg);
serverProof = serverProof.toString();
if ((GLOBAL.modules.captivePortalGuide === '1' && GLOBAL.deviceInfo.restore_default_status === '1') || result['response']['serversignature'] === serverProof) {
var publicKey = result['response']['rsan'];
var publicKeySignature = scram.signature(CryptoJS.enc.Hex.parse(publicKey), CryptoJS.enc.Hex.parse(serverKey));
publicKeySignature = publicKeySignature.toString();
if ((GLOBAL.modules.captivePortalGuide === '1' && GLOBAL.deviceInfo.restore_default_status === '1') || result['response']['rsapubkeysignature'] === publicKeySignature) {
firstloginpassword = password;
gEncPublickey.e = result['response']['rsae'];
gEncPublickey.n = result['response']['rsan'];
storagePubkey(gEncPublickey.n, gEncPublickey.e);
self.loginSuccessCallback(loginaim, caLLback, id, false);
} else {
self.chearInput('IDS_login_fialed_prompt');
}
} else {
self.chearInput('IDS_login_fialed_prompt');
}
} else {
EMUI.LoginObjController.loginFailInfo(result)
}
});
} else {
EMUI.LoginObjController.loginFailInfo(data)
}
}, false);
}
});
EMUI.loginLockStatusController = EMUI.ObjController.extend({
isLoginLocked: false,
isChecked: false,
checkLoginLockStatus: function () {
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
if (EMUI.loginallowedObjController.content.response.hilink_login === '0') {
return;
}
}
EMUI.LoginStateController.load(function (data) {
if (data.type === 'response') {
if (data.response.lockstatus === '1') {
var text = 'password_';
if (GLOBAL.hasTwoAccountFlag || (GLOBAL.modules.loginusername_enable && GLOBAL.modules.loginusername_enable === '1')) {
text = 'username_or_password_';
}
EMUI.LoginObjController.waittime = parseInt(data.response.remainwaittime, 10);
if (!EMUI.loginLockStatusController.isLoginLocked) {
EMUI.LoginObjController.chearInput(text + 'login_overrun', true);
EMUI.loginLockStatusController.isLoginLocked = true;
} else {
EMUI.LoginObjController.PasswordErrorStr(text + 'login_overrun');
}
setTimeout(EMUI.loginLockStatusController.checkLoginLockStatus, 6000)
} else {
if (EMUI.loginLockStatusController.isLoginLocked) {
EMUI.loginLockStatusController.isLoginLocked = false;
EMUI.LoginObjController.clearErrorMsg();
}
}
}
}, false);
}
});
EMUI.rememberPassController = EMUI.ObjController.extend({
objName: 'user/remember-pwd',
isSupportSaveInfo: false,
rememberStatus: '',
getsuccessProc: function (data) {
if (data.type === 'response') {
rememberStatus = data['response']['rememberpwd_status'];
var className = $('#checkbox_remember_password').attr('class');
if (rememberStatus === '1') {
if (className.substring(className.length - 3, className.length) === 'off') {
className = className.replace('off', 'on');
$('#checkbox_remember_password').attr('Class', className);
}
} else {
if (className.substring(className.length - 3, className.length) === 'on') {
className = className.replace('on', 'off');
$('#checkbox_remember_password').attr('Class', className);
}
}
EMUI.rememberPassController.changeinputStatus();
}
},
changeinputStatus: function () {
if (EMUI.rememberPassController.getrememberpwdStatus() === '1') {
$('#login_password_close').show();
$('#login_password_open').hide();
$('#login_error_info').empty();
var className = $('#checkbox_remember_password').attr('class');
if (className.substring(className.length - 2, className.length) === 'on') {
unbindEyeEvent('login_password_close');
$('#login_password_close div').removeClass('ic_eye_close').addClass('ic_eye_close_disable');
$('#login_password_close input').attr("disabled", "disabled");
$('#login_password').val('*******');
$('#login_warn_info').show();
$('#forgetpassword_show').hide();
$('#guide_password_tips').hide();
} else {
$('#login_password_close div').removeClass('ic_eye_close_disable').addClass('ic_eye_close');
bindEyeEvent('login_password_close');
$('#login_password_close input').removeAttr('disabled');
$('#login_password').val('');
$('#forgetpassword_show').show();
}
}
},
changeboxStatus: function () {
var className = $('#checkbox_remember_password').attr('class');
if (className.substring(className.length - 3, className.length) === 'off') {
className = className.replace('off', 'on');
$('#checkbox_remember_password').attr('Class', className);
$('#login_warn_info').show();
$('#remember_pass').css('margin-bottom', '8px');
if (EMUI.rememberPassController.getrememberpwdStatus() === '1') {
$('#login_btn').css('margin-bottom', '38px');
$('#login_height').css('height', '1px');
}
} else {
className = className.replace('on', 'off');
$('#checkbox_remember_password').attr('Class', className);
$('#login_password').val('');
$('#login_warn_info').hide();
$('#login_btn').css('margin-bottom', '0px');
$('#login_height').css('height', '38px');
$('#remember_pass').css('margin-bottom', '16px');
}
EMUI.rememberPassController.changeinputStatus();
},
getrememberpwdStatus: function () {
var rememberpwdStatus = '';
rememberpwdStatus = (EMUI.rememberPassController.content && EMUI.rememberPassController.content.response) ? EMUI.rememberPassController.content.response.rememberpwd_status : null;
return rememberpwdStatus;
}
});
function nocheck_login() {
var className = $('#checkbox_remember_password').attr('class');
if (EMUI.rememberPassController && EMUI.rememberPassController.getrememberpwdStatus() === '1' && className.substring(className.length - 2, className.length) === 'on') {
return true;
}
return false;
}
EMUI.AccountObjController = EMUI.ObjController.extend({
objName: 'user/password_scram',
contentType: 'application/x-www-form-urlencoded; charset=UTF-8;enc',
checkPasswordChar: function (str) {
var numChar = '';
if (str === '') {
return true;
}
for (var i = 0; i < str.length; i++) {
numChar = str.charCodeAt(i);
if ((numChar > CONST.MACRO_SUPPORT_CHAR_MAX) || (numChar < CONST.MACRO_SUPPORT_CHAR_MIN)) {
return false;
}
}
return true;
},
checkModifyProc: function (newPassword, confirmPassword) {
if (!this.checkPasswordChar(newPassword)) {
$('#newlogin_password').focus();
showErrorMsg('new_password_error', 'IDS_password_type_notes');
return false;
} else if (newPassword === '') {
$('#newlogin_password').focus();
showErrorMsg('new_password_error', 'system_hint_new_password_empty');
return false;
} else if (confirmPassword === '') {
showErrorMsg('confirm_password_error', 'system_hint_new_confirm_password_empty');
$('#confirm_password').focus();
return false;
} else if (this.hasSpaceOrTabAtHead(newPassword)) {
showErrorMsg('new_password_error', 'input_cannot_begin_with_space');
$('#newlogin_password').focus();
return false;
} else if (this.hasSpaceOrTabAtHead(confirmPassword)) {
showErrorMsg('confirm_password_error', 'input_cannot_begin_with_space');
$('#confirm_password').focus();
return false;
} else if (newPassword !== confirmPassword) {
$('#newlogin_password').val('');
$('#confirm_password').val('');
showErrorMsg('confirm_password_error', 'IDS_modify_password_wrong_msg');
this.clearPasswordStrength();
return false;
}
if (EMUI.webWebFeatureController.isSuportSimplify && EMUI.webWebFeatureController.isSuportSimplify === '1') {
if (newPassword.length < 8) {
showErrorMsg('new_password_error', 'IDS_simple_password_length_prompt');
return false;
}
}
if (!EMUI.webWebFeatureController.isSuportSimplify || EMUI.webWebFeatureController.isSuportSimplify === '0') {
if (this.checkPWStrength(newPassword) === CONST.MACRO_PASSWORD_LOW && newPassword !== '') {
$('#newlogin_password').focus();
showErrorMsg('new_password_error', 'IDS_psw_login_remind');
return false;
}
}
return true;
},
ModifyPassword: function () {
clearAllErrorMsg();
var self = this;
var currentPassword = $('#login_password').val();
var newPassword = $('#newlogin_password').val();
var confirmPassword = $('#confirm_password').val();
if (!this.checkModifyProc(newPassword, confirmPassword)) {
return;
}
self.isSupportSaveInfo = false;
var request = {
username: 'admin',
currentpassword: xss(currentPassword),
newpassword: xss(newPassword)
};
EMUI.BasicInfoObjController.load(null, false);
EMUI.HeartBeatObjController.stop();
self.postData(request, function (data) {
if (self.isAjaxReturnOK(data)) {
utilStartCommonDialog(publicLang.common_success);
setTimeout(function () {
utilStopCommonDialog();
window.location.href = '/';
}, CONST.DIALOG_TIMEOUT);
} else if (data.error.code === CONST.MODIFYPASSWORD_LOGOUT || data.error.code === CONST.MODIFYPASSWORD_ERROR) {
utilStartCommonDialog(publicLang.IDS_current_password_inputshow);
setTimeout(function () {
utilStopCommonDialog();
window.location.href = '/';
}, CONST.DIALOG_TIMEOUT);
} else {
EMUI.HeartBeatObjController.refresh();
showErrorMsg('current_password_error', 'system_hint_wrong_password');
$('#current_password').val('');
}
});
},
clearPasswordStrength: function () {
$('.modifypwdstreng').hide();
},
showPwdStrengthByID: function (id, level) {
var temp = id;
var idSuffix = ['_week', '_medium', '_strong'];
if (level < 1 || level > 3) {
return;
}
temp = temp.replace('_text', '');
$('#' + temp + idSuffix[0]).hide();
$('#' + temp + idSuffix[1]).hide();
$('#' + temp + idSuffix[2]).hide();
var pwdStrengthID = '#' + temp + idSuffix[level - 1];
$(pwdStrengthID).show();
},
showPwdStrength: function (event) {
this.clearPasswordStrength();
var newvalue = $('#newlogin_password').val();
if ((event.type === 'keydown' || event.type === 'keypress' || event.type === 'keyup')
&& (event.keyCode === CONST.KEY_CODE_37 || event.keyCode === CONST.KEY_CODE_38 || event.keyCode === CONST.KEY_CODE_39 || event.keyCode === CONST.KEY_CODE_40)) {
return;
}
if (newvalue.length <= 0) {
return;
}
var checkval = this.checkPWStrength(newvalue);
this.showPwdStrengthByID('newlogin_password', checkval);
},
hasSpaceOrTabAtHead: function (str) {
if (str.indexOf(' ') === 0 || str.indexOf('\t') === 0) {
return true;
}
return false;
},
showPasswordRuleBox: function () {
var outwin = $('#password_rule_win');
var outwinheight = outwin.height();
outwin.css('margin-top', '-' + outwinheight / 2 + 'px');
var heightest = $(document).height();
$('#submit_fade').css('height', heightest + 'px');
$('#submit_fade').show();
outwin.show();
},
modifyPwdConfirm: function () {
$('#password_rule_win').hide();
$('#submit_fade').hide();
},
checkPWStrength: function (passValue, userName, currentPwd) {
var nameSame = false;
var pwdSame = false;
if (userName !== '' && (userName !== null)) {
if (userName) {
nameSame = true;
}
}
if (currentPwd !== '' && (currentPwd !== null)) {
if (currentPwd === passValue) {
pwdSame = true;
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
function charMode(iN) {
if (iN >= 48 && iN <= 57) {
return 1;
} else if (iN >= 65 && iN <= 90) {
return 2;
} else if (iN >= 97 && iN <= 122) {
return 4;
}
return 8;
}
function bitTotal(num) {
var modes = 0;
var count = num;
for (i = 0; i < 4; i++) {
if (count & 1) {
modes++;
}
count >>>= 1;
}
return modes;
}
var ret = 0;
var sPWLength = passValue.length;
var sPWModes = 0;
for (i = 0; i < sPWLength; i++) {
sPWModes |= charMode(passValue.charCodeAt(i));
}
sPWModes = bitTotal(sPWModes);
if (sPWLength < 6 || sPWModes === 1 || nameSame === true || pwdSame === true) {
ret = CONST.MACRO_PASSWORD_LOW;
} else if ((sPWModes === 2 && (sPWLength >= 6) && (sPWLength <= 10))) {
if (parseFloat((repeatPass / parseInt(sPWLength, 10)).toString()) > 0.667) {
ret = CONST.MACRO_PASSWORD_LOW;
} else {
ret = CONST.MACRO_PASSWORD_MID;
}
} else if ((sPWModes >= 3 && (sPWLength >= 6)) || (sPWModes === 2 && (sPWLength > 10))) {
if (parseFloat((repeatPass / parseInt(sPWLength, 10)).toString()) > 0.334 && (parseFloat((repeatPass / parseInt(sPWLength, 10)).toString()) <= 0.667)) {
ret = CONST.MACRO_PASSWORD_MID;
} else if (parseFloat((repeatPass / parseInt(sPWLength, 10)).toString()) > 0.667) {
ret = CONST.MACRO_PASSWORD_LOW;
} else {
ret = CONST.MACRO_PASSWORD_HIG;
}
} else {
ret = CONST.MACRO_PASSWORD_LOW;
}
return ret;
}
});
EMUI.loginallowedObjController = EMUI.ObjController.extend({
objName: 'user/hilink_login',
});
function setPwdBtnStatus() {
if ($('#modifypassword_button').hasClass('btn_disabled')) {
$('#modifypassword_button').attr('disabled', false);
$('#modifypassword_button').removeClass('btn_disabled');
}
}
$(document).ready(function () {
solvePlaceholderSupport();
if (GLOBAL.modules.web_feature_enabled === '1') {
if (!EMUI.webWebFeatureController.content) {
EMUI.webWebFeatureController.load(null, false);
}
}
$(document).on('keydown keypress keyup change', '#newlogin_password, #confirm_password ', setPwdBtnStatus);
var winHref = window.location.href;
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
EMUI.loginallowedObjController.load(null, false);
}
if (EMUI.BasicInfoObjController.content.response.classify === 'hilink') {
if (EMUI.loginallowedObjController.content.response.hilink_login === '1') {
$("#loginqrcodecontainer").hide();
$("#logincontainerwidth").css({ "width": "100%" });
if (window.location.href.indexOf('index.html') !== -1) {
$("#login_error_info").addClass("margin-left-135");
}else{
$("#login_error_info").addClass("margin-left-0");
}
}
}
$('#login_password ,#login_password_text').bind('keyup change', function (evt) {
if (evt.target.id === 'login_password') {
$('#login_password_text').val($('#login_password').val());
} else {
$('#login_password').val($('#login_password_text').val());
}
});
EMUI.LanguageController.registerFunction(function () {
var errId = $('#login_error_info').attr('lang-id');
if (errId && publicLang[errId].indexOf('%s') > 0) {
EMUI.LoginObjController.PasswordErrorStr(errId);
}
});
if (GLOBAL.modules.china_region_enable === '1') {
EMUI.indexAutoUpgradeController.load(null, false);
}
if (EMUI.webWebFeatureController && EMUI.webWebFeatureController.rememberPwd === '1') {
EMUI.rememberPassController.load(null, false);
$('#remember_pass').show();
$('#guide_password_tips').hide();
$('#checkbox_remember_password').bind('click', EMUI.rememberPassController.changeboxStatus);
}
});
});
