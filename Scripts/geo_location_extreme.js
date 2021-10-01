if ($response.statusCode != 200) {
  $done(null);
}

const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']
var city0 = "xXx";
var org0 = "xXx";
var isp0 = "xXx";
var as0 = "xXx";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return city0
//emojis[getRandomInt(emojis.length)]
  }
}

function Owner_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return org0
//emojis[getRandomInt(emojis.length)]
  }
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
//emojis[getRandomInt(emojis.length)]
  }
}

function AS_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return as0
//emojis[getRandomInt(emojis.length)]
  }
}


var flags = new Map([[ "AC" , "🇦🇨" ] , [ "AE" , "🇦🇪" ] , [ "AF" , "🇦🇫" ] , [ "AI" , "🇦🇮" ] , [ "AL" , "🇦🇱" ] , [ "AM" , "🇦🇲" ] , [ "AQ" , "🇦🇶" ] , [ "AR" , "🇦🇷" ] , [ "AS" , "🇦🇸" ] , [ "AT" , "🇦🇹" ] , [ "AU" , "🇦🇺" ] , [ "AW" , "🇦🇼" ] , [ "AX" , "🇦🇽" ] , [ "AZ" , "🇦🇿" ] , [ "BA" , "🇧🇦" ] , [ "BB" , "🇧🇧" ] , [ "BD" , "🇧🇩" ] , [ "BE" , "🇧🇪" ] , [ "BF" , "🇧🇫" ] , [ "BG" , "🇧🇬" ] , [ "BH" , "🇧🇭" ] , [ "BI" , "🇧🇮" ] , [ "BJ" , "🇧🇯" ] , [ "BM" , "🇧🇲" ] , [ "BN" , "🇧🇳" ] , [ "BO" , "🇧🇴" ] , [ "BR" , "🇧🇷" ] , [ "BS" , "🇧🇸" ] , [ "BT" , "🇧🇹" ] , [ "BV" , "🇧🇻" ] , [ "BW" , "🇧🇼" ] , [ "BY" , "🇧🇾" ] , [ "BZ" , "🇧🇿" ] , [ "CA" , "🇨🇦" ] , [ "CF" , "🇨🇫" ] , [ "CH" , "🇨🇭" ] , [ "CK" , "🇨🇰" ] , [ "CL" , "🇨🇱" ] , [ "CM" , "🇨🇲" ] , [ "CN" , "🇨🇳" ] , [ "CO" , "🇨🇴" ] , [ "CP" , "🇨🇵" ] , [ "CR" , "🇨🇷" ] , [ "CU" , "🇨🇺" ] , [ "CV" , "🇨🇻" ] , [ "CW" , "🇨🇼" ] , [ "CX" , "🇨🇽" ] , [ "CY" , "🇨🇾" ] , [ "CZ" , "🇨🇿" ] , [ "DE" , "🇩🇪" ] , [ "DG" , "🇩🇬" ] , [ "DJ" , "🇩🇯" ] , [ "DK" , "🇩🇰" ] , [ "DM" , "🇩🇲" ] , [ "DO" , "🇩🇴" ] , [ "DZ" , "🇩🇿" ] , [ "EA" , "🇪🇦" ] , [ "EC" , "🇪🇨" ] , [ "EE" , "🇪🇪" ] , [ "EG" , "🇪🇬" ] , [ "EH" , "🇪🇭" ] , [ "ER" , "🇪🇷" ] , [ "ES" , "🇪🇸" ] , [ "ET" , "🇪🇹" ] , [ "EU" , "🇪🇺" ] , [ "FI" , "🇫🇮" ] , [ "FJ" , "🇫🇯" ] , [ "FK" , "🇫🇰" ] , [ "FM" , "🇫🇲" ] , [ "FO" , "🇫🇴" ] , [ "FR" , "🇫🇷" ] , [ "GA" , "🇬🇦" ] , [ "GB" , "🇬🇧" ] , [ "GE" , "🇬🇪" ] , [ "GL" , "🇬🇱" ] , [ "GR" , "🇬🇷" ] , [ "HK" , "🇭🇰" ] , [ "HR" , "🇭🇷" ] ,["HU","🇭🇺"], [ "ID" , "🇮🇩" ] , [ "IE" , "🇮🇪" ] , [ "IL" , "🇮🇱" ] , [ "IM" , "🇮🇲" ] , [ "IN" , "🇮🇳" ] , [ "IR" , "🇮🇷" ] , [ "IS" , "🇮🇸" ] , [ "IT" , "🇮🇹" ] , [ "JO" , "🇯🇴" ] , [ "JP" , "🇯🇵" ] , [ "KE" , "🇰🇪" ] , [ "KH" , "🇰🇭" ] , [ "KR" , "🇰🇷" ] , [ "KZ" , "🇰🇿" ] , [ "LT" , "🇱🇹" ] , [ "LU" , "🇱🇺" ] , [ "LV" , "🇱🇻" ] , [ "MA" , "🇲🇦" ] , [ "MC" , "🇲🇨" ] , [ "MD" , "🇲🇩" ] , [ "ME" , "🇲🇪" ] , [ "MK" , "🇲🇰" ] , [ "MN" , "🇲🇳" ] , [ "MO" , "🇲🇴" ] , [ "MT" , "🇲🇹" ] , [ "MX" , "🇲🇽" ] , [ "MY" , "🇲🇾" ] , [ "NG" , "🇳🇬" ] , [ "NL" , "🇳🇱" ] , [ "NO" , "🇳🇴" ] , [ "NZ" , "🇳🇿" ] , [ "PA" , "🇵🇦" ] , [ "PE" , "🇵🇪" ] , [ "PH" , "🇵🇭" ] , [ "PK" , "🇵🇰" ] , [ "PL" , "🇵🇱" ] , [ "PT" , "🇵🇹" ] , [ "QA" , "🇶🇦" ] , [ "RO" , "🇷🇴" ] , [ "RS" , "🇷🇸" ] , [ "RU" , "🇷🇺" ] , [ "RW" , "🇷🇼" ] , [ "SA" , "🇸🇦" ] , [ "SB" , "🇸🇧" ] , [ "SC" , "🇸🇨" ] , [ "SD" , "🇸🇩" ] , [ "SE" , "🇸🇪" ] , [ "SG" , "🇸🇬" ] , [ "SI" , "🇸🇮" ] , [ "SK" , "🇸🇰" ] , [ "TH" , "🇹🇭" ] , [ "TN" , "🇹🇳" ] , [ "TO" , "🇹🇴" ] , [ "TR" , "🇹🇷" ] , [ "TV" , "🇹🇻" ] , [ "TW" , "🇹🇼" ] , [ "UA" , "🇺🇦" ] , [ "UK" , "🇬🇧" ] , [ "UM" , "🇺🇲" ] , [ "US" , "🇺🇸" ] , [ "UY" , "🇺🇾" ] , [ "UZ" , "🇺🇿" ] , [ "VA" , "🇻🇦" ] , [ "VE" , "🇻🇪" ] , [ "VG" , "🇻🇬" ] , [ "VI" , "🇻🇮" ] , [ "VN" , "🇻🇳" ] , [ "ZA" , "🇿🇦"]])
var body = $response.body;
var obj = JSON.parse(body);
var title =flags.get(obj['countryCode']) + ' '+ Owner_ValidCheck(obj['org']) + '@' + City_ValidCheck(obj['city']) ;
var subtitle = ISP_ValidCheck(obj['isp']);
var ip = obj['query'];
var description = 'IP : '+ obj['query'] + '\n\n' +'Host : '+ obj['ipName'] + '\n\n'+'Type : '+ obj['ipType'] + '\n\n' +'Owner : '+ obj['org'] + '\n\n' +'ISP : '+obj['isp'] + '\n\n'+'Country : '+obj['country'] + '\n\n' +'Region : '+obj['region'] + '\n\n' +'City : '+obj['city'];
$done({title, subtitle, ip, description});
