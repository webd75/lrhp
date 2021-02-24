/**
 * Copyright (c) 2008,2009,2010,2011,2012 AimToG. All rights reserved. Code
 * licensed under the AimToG License Version 2.2.4
 * 
 * @author jacojang<jacojang@aimtog.co.kr>
 * @author hkkang<hkkang@aimtog.co.kr>
 */
var NetFunnel = {};
NetFunnel.Skin = {};

// EditZoneStart
// ----------------------------------------------------------------
NetFunnel.TS_HOST = 'nf.erebates.or.kr'; // Default TS host
NetFunnel.TS_PORT = 443; // Default TS port
NetFunnel.TS_PROTO = 'https'; // Default TS protocol [http|https]
NetFunnel.TS_QUERY = 'ts.wseq'; // Default request query
NetFunnel.TS_SERVICE_ID = 'service_1'; // Default TS Service id
NetFunnel.TS_ACTION_ID = 'act_1'; // Default TS Action id
NetFunnel.TS_MAX_TTL = 30; // Default max ttl (second) 5~30
NetFunnel.TS_CONN_TIMEOUT = 3; // Default connect timeout (second)
NetFunnel.TS_CONN_RETRY = 2; // Default connect retry count
NetFunnel.TS_COOKIE_ID = 'NetFunnel_ID'; // Default Cookie ID
NetFunnel.TS_COOKIE_TIME = 10; // Default Cookie Time (minute)
NetFunnel.TS_COOKIE_DOMAIN = ''; // Default Cookie Domain
NetFunnel.TS_BYPASS = false; // NetFunnel Routine Bypass [true|false]
NetFunnel.TS_POPUP_TOP = false; // Popup Top Position ( "false" is center )
NetFunnel.TS_POPUP_LEFT = false; // Popup Left Position ( "false" is center )
NetFunnel.TS_AUTO_COMPLETE = true; // Auto setComplete [true|false]
NetFunnel.TS_DEBUG_MODE = false; // Debug Mode
NetFunnel.TS_SHOWTIME_LIMIT = 0; // Show WaitTime Limit (second, 0 is
									// Unlimited)
NetFunnel.TS_SHOWCNT_LIMIT = 0; // Show WaitUser Limit (0 is Unlimited)
NetFunnel.TS_SHOWNEXT_LIMIT = 0; // Show NextWaitUser Limit (0 is Unlimited)
NetFunnel.TS_LIMIT_TEXT = '다수'; // SHOWCNT,SHOWNEXT Limit를 넘었을때 출력되는 문자열
NetFunnel.TS_IFRAME_RESIZE = false; // true | false
NetFunnel.TS_USE_UNFOCUS = true; // object unfocus after netfunnel call
NetFunnel.TS_VIRT_WAIT = 10000; // virtual wait time (millisecond)
NetFunnel.TS_USE_MOBILE_UI = false; // Mobile UI
NetFunnel.TS_POPUP_TARGET = window; // Popup target window
NetFunnel.TS_USE_FRAME_BLOCK = false; // Block FrameSet Page
NetFunnel.TS_FRAME_BLOCK_LIST = []; // Frame Block Window List
NetFunnel.TS_USE_PRE_WAIT = false; // Pre waiting popup use
NetFunnel.TS_USER_DATA_KEYS = []; // Input UserData Key &
									// Type(c=cookie,v=variable)
// ex) [ {"key":<user_data_key>, "type":<c|v>}, ... ]
NetFunnel.TS_CONFIG_USE = true; // 무조건 Config에 있는 IP 와 PORT로 사용
NetFunnel.TS_POPUP_ZINDEX = 32000; // 대기 Popup창의 z-index 값.
// 대기창이 뒤로 숨지 않도록 적당한 값을 넣어줘야 한다.
NetFunnel.TS_IP_ERROR_RETRY = true; // Retry(Re-Issue) Where IP Validation Error

// 일정 기간 동안 대기인원 변함 없을시 Bypass 처리
NetFunnel.TS_NWAIT_BYPASS = true; // 사용 유무
NetFunnel.TS_MAX_NWAIT_COUNT = 100; // 대기인원 반복 체크 기준값

// Server Block
NetFunnel.TS_BLOCK_MSG = 'Service Block!!';// Server Block시 팝업에 표시할 문구
NetFunnel.TS_BLOCK_URL = ''; // Server Block시 등록된 url로 이동(미등록시 경고창 후 서비스 진입
								// 불가)
NetFunnel.TS_IPBLOCK_WAIT_COUNT = 20; // Server IP Block 가상대기창 반복 횟수
NetFunnel.TS_IPBLOCK_WAIT_TIME = 10000; // Server IP Block 가상대기시간

// 대기창 미리보기
NetFunnel.TS_SHOW_WAIT_POPUP = false; // 대기창 보기

// event skin 지정
NetFunnel.TS_SKIN_ID = ''; // Skin ID (미지정시 default 대기창)

// Variable for MProtect
NetFunnel.MP_USE = false; // 매크로방지기능 사용유무 (true|false)
NetFunnel.MP_TIMELIMIT = 20000; // 사용자의 요청을 체크하기 위한 단위 시간 (ms)
NetFunnel.MP_MAXREQLIMIT = NetFunnel.MP_TIMELIMIT / 1100; // TIMELIMIT 시간 내에
															// getTidChkEnter를
															// 요청가능한 최대값
NetFunnel.MP_DEVLIMIT = 20; // 요청주기의 표준편차 제한값 (ms)
NetFunnel.MP_DEVCNTLIMIT = 7; // 표준편차 계산을 위한 item숫자
NetFunnel.MP_REQONLYLIMIT = 10; // setComplete 없이 getTidChkEnter만 요청한 횟수 제한값(횟수)
NetFunnel.MP_MINCOUNT = 5; // 계산을 하지 않는 자료개수

// Logo Image Data -------------------------------------------------------------
// - height:16 pixel
// - GIF Format Data (Base64 Encoding)
NetFunnel.gLogoData = 'R0lGODlhkwAfAHfpACH5BAAAAAAALAAAAACTAB8AhwAAAAA5ewA5jABChABCjABClABKjABKlABKnABSnABSpQBSrQBapQBarQgICAgpWghCcwhChAhCjAhKjAhKlAhSnAhSpQhSrQhapQharRAQEBAxYxA5cxBCexBKjBBSlBgYGBg5axhCcxhKcxhKexhKjBhSjBhSlBhanCEhISE5ayFCcyFKcyFKeyFSjCFSlCFalCkpKSlCcylKcylKeylalCljlCljpSlztTExMTFSezFalDFjnDFjpTFrpTk5OTlSczlaezlajDljlDljnDlrlDlrpTlzrTmEtUJCQkJahEJjlEJjnEJzpUJ7rUpKSkpjhEpjjEprjEprlEprnEp7pUp7rUp7tVJSUlJzjFJzlFJznFJzrVJ7pVJ7rVJ7tVpSWlpaWlpzjFp7lFp7pVqEpVqErVqEtWNjY2N7lGOEnGOEpWOErWOEtWOMvWOUvWOUxmtja2tra2uEnGuMrWuMvWuUrWuUtWuc1nNzc3OMpXOUtXOUxnOcxnt7e3uUrXucvXucxnulvXulxnut54R7hISEhISctYScvYScxoSlxoSlzoStxoyEjIyMjIylvYytxoytzozG3pSMlJSUlJSlvZStxpS11pycnJy1zpy11py13py9zpy91py93py955zO3pzO76WcpaWlpaW1xqW91qW93qXG3qXG562tra3G3q3G563O563O77WttbW1tbXG3rXO3rXO97XW57XW77XW9729vb3O3r3W3r3W573W973e773e973n/8a9xsbGxsbW3sbW58be58be78be/8bn987Gzs7Ozs7e587e787n787n/87v987v/9bO1tbW1tbe59bn79bn99bv79bv/9b//97e3t7n797v997v/973/+fe5+fn5+fv9+f39+f3/+f//+/n7+/v7+/39+/3/+////fv9/f39/f//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAj+ANMJHEiwIEF0BhMqXMiwocOHECNKnDjQGzZhrTyhojUNG0KKIEOKHEmSYblch+boOWRJjSBLf9TMsaRMJDdxCm8qPGetoDicCcVZA1qSorVzC3U2RJctSxBU5dCh6wXBS9R02fbosPQRojUNfmIYSmgNwFiBSJGmywOgYJgwBo/9AEA3hS2Hz9DIkaNXTp60efb2ReOK4S8Hr9KJe/aL8TFr1kBQWvpIC6lx6aQqq2GBgpur6bD9mXKLYaoUqFN9NRTDUVk/BLmZTVcoBwgAOXI889P22dswKUC8RfMsHTcNT2w9sxUGhNqBx8L86JnOFog8frL7MZTWEfbseUD+YBooLscP8zm4HQNw1xaWJLixvIo8eWE5KVq+dS3XJEGDBQQkkplA6AgDhCxdFeRAHuI84YAtGrBmiGywDSTbWOOcgwkA5yDFWzrnvPLLK6Ng8ootv+D0VRjcKOaHA0Sl8+Jtxwj0yw8R/TAeeT9RAoA1v7CH1jMpvHLOM69oUF9C6KyhRoLfnHEABg1g4EEg3oBIYDAqlJKgQM8AkNiGmDjAmiMUGhdGEnOdlc6GA30IIlvmCdeiQKIkEUMKMSQxSUG2ULJejem84kASiCKKxXMFxZBKQqMA8Mx6o1BnaBy/JJGDA0sWhE4iUpDTFTqBHJCBAhkUYEYzQACTIDL+NERjUFl3RaqBWWK9BuZyswnEFqFy2iLmT9Y5kk4qhhjix15ybGfIKAWFSeg5xxwz6bXpWBNDbrltC0AKT9w5UCEAiLOeBimkcwwIKQCQBzfPSKZQLA/kchArHmTAQAMUNPGNHRIYgU1BgERRTkFlJRYpJhG2luZAZZ1lKAgx9ESujQ6Mwg03qchLCaLoJnHbD0n4wai0DYKg8sorv0KJIY5QIjMljjiCSYypaJBHOkGOgiRy4rwCgh/0JUTOFmuMOosHFjSQgQUvFDMIBRkgYNVA6EgTwiUJnqPzOWEA8AtYYsmGxi+/YPLsbEmiIVe4cqYjx7cxOBCGWsdgoUH+DE/c9gSjYAJQozXPLIcJJqNY+ww31jyR2EBoPDrQOS/KgdMxiKXjCyVqLV60QcOQoA3W1PBgwb4rentacarCKKQMs4HQAiCTIxhDfFESJBrhTsprD7AaXQg6pmCVODGgIJM4PjhjSFoiRphIm52D6gR12YccoUFnT5uEAu3sTGhkWMtecwo7ZgqABtBg/ns4TOwvEzQ/oHwQIE12BY8UBDTRgwQea7IJCBQ1QQAWIgItgdKUWITBgtBqTrYaN5Sc/ud5sjmKhtQCAG2h4wlySgIX4YAEy70HUE3JQrrgITiDrwcRNjhGDGCDlK09wVnjIdw5DFAc6QhIIFtqXjnGEA3D+mRHCHT6Cjj4IQF8ZIIAdqgGDCmSgARV4wTBA0QH9COQbLODaQnbnptj0yiDKC9orxkjGV6TiFUIByy+OscYUGYQb77IRe5DyvhSoSDLnEEcedcQQzKkPC2FgoyAJRRBqjCASH8EGZ/ZFgSsUwwkU+A8GBHAKVpSAAHtACDrKsYQ6fIkg4jDEK7BAvtjkoJQEoUQOHOIMTXErNxVayDnyoAEObutx1nDlK+OXELn8YiCGwIIwh9lFgSCQFJrMxQeotIAjZOMNTmRABiRAiGSYAAMWsAE4CNSFL5AEiAQBZ0IwY44eRoRatqBOOLXEToaIkyG7EAEnBhKLDzRtAUj+kMQEMLAABnhGG01QAAMU4ILaZYYMXPhkQc4hrqC803oQiaDx3hkRiFYUosTgQCc0KQwTXCB/FYik6xAwBGxUAX8WqEARDpaOcnTBCwZ5BsyMIRBKpMt4ykkHkZ7xBMkZ5Be6oYgjsKCiFCwpWUhN1i8NcqTOgWCp5LkhxGxhi1TYYnh5+MGiCqKNEUDiI90w3b7yB1IbNCMQBnhiAyQQCQJxkg+A0sAP5mIsHw3kGRnjmdhyAC1hqSw4SALBDeXwt4HMLUbcYJdijfrFJzjWsT/gVEIOs9QwQVUgyisIb+YaLgAAJweAK8cU2tAVTwygAWNVAAY+sIpQfCAD/az+QA9EJRBtsKATBcHC386Bhh/UcHnZcgAmUvErvlZHA/OxhjNCJFiByCEHKELbEy5YkGPkgU95sNYXC5LYTg1kbEulVUEySxDl2eJEQQKObw0SiR0QsYiRZMC+EICHXQTgdPo7QS668okVICNBMRTIKGIgDrsKJBUOQAMW2nUM4yYpnRurTnPl5gDUoOZW1vODztCwINmEYRRAjAwqMbbU9VxWHPDhpfJQY4jpgiEF6y2INFowDIJ4wwuRzF8CcHADAKJqAJsYFRWowFLDpuAZ28hBEs7hiOVxwzwawMSgjCss1OyJG9YZbBJ+kkc0lJAgfrBLxz4IgB/IIRVhQEP+mt8y3SfApSBN3pF4BWKLH6QACw5ohFrMW9X0whii5SADFIqcDm2UAIBO+0/+MECBRSRIGCFoRUzrBgANPMqu8fKt8orb1wkfeMJyiAElDocJ+DQURBwGABYYNxvr5mF60ptetFLgANDqVGwg4s0TcMKwGNTIEbhzgM4csOAYFyQaGyhFQYYBAwu4Tr6opYAZMDOQcqyBDgoNh4i2IZAmq+lOVt1rp6fFDaHdcBR+2Utg/kKQX6ABDbYJg257hUFCiiMPdyGINUjmDJIVTkjWCEMqnmONPIwnj2xUjpmbJU5dzMAbozpFADDAgGcfwAXbxJoqaNANhYSJfAbWqQb+RJEt4hg3eABwQMoBQAlP40UUqUjFKFJxjFf0qix5iHkqbtepxKZHMSDAQpAuyxDl0YUuDjC2px4RBVkRkREUoJL+bLAMgpSjFDIARlJYPjl14rWUEdyGzmN+jI494xyUgLXa1ekrN4lDDrgsMyB1K1mCHIPb7oPXHCmhnb5nh1CG2PJNuAHjd6LDEkCIxqjgEEkLREAV762EEmS1kDAZ4jHWomBwXYP5xSkkyxqixCQwMerSY0KqApF34QgHmcBJjifyaoiJz7HzmdmeEksNPEFioHSDoAMWUlCE4jODDSNQwANfzQw5YlGGMVyjIU/m1nlyEF5XTh94n/8B6h+OkodXwvJ6vuvd+BxijRQQfSGOsHDvttoQbGRCCnPwhDbKwQwfDOIb4NgFJMaQhltIxSEQFIDPEYAQJE48QVEJkUcESBSQ0YCQYVGzgoDk4YCQcWoMgQ6nMAdiMAZ0QAZ7oAZjMAZ/wAsKVRQmeIIoOBLoMA7QAAwuGAzXUIIpOIM0WIMXOCA2mIM6WBQBAQA7'; 

NetFunnel.gLogoText = '';
NetFunnel.gLogoURL = 'http://www.energy.or.kr';

NetFunnel.gPreWaitData = 'R0lGODlhKAAoALMMAPj4+MTExPT09NTU1NPT08XFxcbGxsLCwtXV1cPDw/X19b+/v////wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQAMACwAAAAAKAAoAAAEgJDJSau9OOvNu/9gKI5kaZ5oqq5sCwKIYSAABcv0qQRLvwQCyc73C5YGxB5BgkwuS4nk4iCJJqlQKdZKxJII0ifYaRLwfECJmZg2AQaFwqA2ecfnrry+dJvR80NoRi5NRE8uXD5eLYk9iyxjhnprgnt2cn97mpucnZ6foKGio3oRACH5BAkFAAwALAAAAAAoACgAAASAkMlJq7046827/2AojmRpnmiqrmwLAohhIAAFy/SpBEu/BALJzvcLlgbEHkGCTC5LieTiIIkmqVAp1krEkgjSJ9hpEvB8QImZmDYBBoXCoDZ5x+euvP4Vm9HzQ2hGLk1ETy5cPl4tiT2LLGOGemuCe3Zyf3uam5ydnp+goaKjnREAIfkECQUADAAsAAAAACgAKAAABICQyUmrvTjrzbv/YCiOZGmeaKqubAsCiGEgAAXL9KkES78EAsnO9wuWBsQeQYJMLkuJ5OIgiSapUCnWSsSSCNIn2GkS8HxAiZmYNgEGhcKgNnnH5668fnOb0fNDaEYuTURPLlw+Xi2JPYssY4Z6a4J7dnJ/e5qbnJ2en6ChoqOiEQAh+QQJBQAMACwAAAAAKAAoAAAEgJDJSau9OOvNu/9gKI5kaZ5oqq5sCwKIYSCAOynBoi+BYDOD3Y7wSwh1h+JxkbQRlkQJTEY7CXK7ngQn1JoAg0JhUJMEj1GX8dhUL9uk6azMeKJN3KyPce3uSWdCaWBiZCdrQnAsiDuKK3aCP316PwyEY3SVmpucnZ6foKGio6IRACH5BAkFAAwALAAAAAAoACgAAAR9kMlJq7046827/2AojmRpnmiqrmwLAohhIIA7KcGiL4FgM4PdjvBLCHWH4nGRtBGWRJsgt+v9GIBBoTCoXb/gDUxGo4xn3hJOaGWsq75S8BidC6Mk47GpFzbzS3yBJk90EoV3JlNscYtwJ1lbXWZaXGlhmJmam5ydnp+goBEAIfkECQUADAAsAAAAACgAKAAABH2QyUmrvTjrzbv/YCiOZGmeaKqubFsCiGEggDspwaIvgWAzg92O8EsIdYficZG0EZZEmyC36/0YgEGhMKhdv2ALTEajjGfeEk5oZayrvlLwGJ0LoyTjsakXNvNLfIEmT3QShXcmU2xxi3AnWVtdZlpcaWGYmZqbnJ2en6CgEQAh+QQJBQAMACwAAAAAKAAoAAAEfZDJSau9OOvNu/9gKI5kaZ5oqq5sqwKIYSCAOynBoi+BYDOD3Y7wSwh1h+JxkbQRlkSbILfr/RiAQaEwqF2/YGxs5pXAZLQTTmhlrKu+UvAYnQujJOOxqRc280t8gSZPdBKFdyZTbHGLcCdZW10UkVxlYZiZmpucnZ6foKARACH5BAUFAAwALAAAAAAoACgAAASBkMlJq7046827/2AojmRpnmiqrmyrAohhIIA7KcGiL4FgM4PdjvBLCHWH4nGRNMFktAlhSSzhhD2JILfLloLHKgMwKBQGNZPx2HSthe3WNDx5ztKlLdbHuHb5JWRmaBNgQmItbztxLIpIP3OHP3p/P2NlZ3iWm5ydnp+goaKjpD8RADs=';

NetFunnel.gFixelData = 'R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==';
// EditZoneEnd
// ------------------------------------------------------------------
NetFunnel.RTYPE_NONE = 0;
NetFunnel.RTYPE_CHK_ENTER = 5002;
NetFunnel.RTYPE_ALIVE_NOTICE = 5003;
NetFunnel.RTYPE_SET_COMPLETE = 5004;
NetFunnel.RTYPE_GET_TID_CHK_ENTER = 5101;
NetFunnel.RTYPE_INIT = 5105;
NetFunnel.RTYPE_STOP = 5106;
NetFunnel.kSuccess = 200;
NetFunnel.kContinue = 201;
NetFunnel.kContinueDebug = 202;
NetFunnel.kTsBypass = 300;
NetFunnel.kTsBlock = 301;
NetFunnel.kTsIpBlock = 302;
NetFunnel.kTsExpressNumber = 303;
NetFunnel.kTsErrorNoUservice = 500;
NetFunnel.kTsErrorNoAction = 501;
NetFunnel.kTsErrorAComplete = 502;
NetFunnel.kTsErrorWrongServer = 503;
NetFunnel.kTsErrorTooRecreate = 504;
NetFunnel.kTsErrorNoKey = 505;
NetFunnel.kTsErrorInvalidID = 506;
NetFunnel.kTsErrorInvalidKey = 507;
NetFunnel.kTsErrorInvalidIdStr = 508;
NetFunnel.kTsErrorDuplicate = 509;
NetFunnel.kTsErrorDelAction = 510;
NetFunnel.kTsErrorUserviceExist = 511;
NetFunnel.kTsErrorActionExist = 512;
NetFunnel.kTsErrorLicenseOver = 513;
NetFunnel.kTsErrorSize = 514;
NetFunnel.kTsErrorNoUserAction = 515;
NetFunnel.kTsErrorTooBigKey = 516;
NetFunnel.kTsErrorInvalidIp = 517;
NetFunnel.kErrorAuth = 900;
NetFunnel.kErrorNotFound = 901;
NetFunnel.kErrorNoinit = 902;
NetFunnel.kErrorCode = 903;
NetFunnel.kErrorParam = 904;
NetFunnel.kErrorData = 905;
NetFunnel.kErrorUnknownType = 906;
NetFunnel.kErrorAlready = 907;
NetFunnel.kErrorService = 908;
NetFunnel.kErrorExecution = 909;
NetFunnel.kErrorSock = 920;
NetFunnel.kErrorSockSend = 921;
NetFunnel.kErrorSockRecv = 922;
NetFunnel.kErrorNotFoundLocalIP = 925;
NetFunnel.kErrorSockConnect = 926;
NetFunnel.kErrorNoConnect = 927;
NetFunnel.kErrorSockData = 928;
NetFunnel.kErrorIO = 991;
NetFunnel.kErrorArunning = 992;
NetFunnel.kErrorPermission = 993;
NetFunnel.kErrorExpiredTime = 994;
NetFunnel.kErrorOverCounter = 995;
NetFunnel.kErrorSecurity = 996;
NetFunnel.kErrorSystemStopping = 997;
NetFunnel.kErrorNotSupport = 998;
NetFunnel.kErrorSystem = 999;
NetFunnel.PS_N_RUNNING = 0;
NetFunnel.PS_RUNNING = 1;
NetFunnel.PS_CONTINUE = 2;
NetFunnel.PS_TIMEOUT = 3;
NetFunnel.PS_ERROR = 99;
NetFunnel.CONN_TIMEOUT_KEY = "connection_timeout";
NetFunnel.gControl = null;
NetFunnel.gShowtimeLimit = false;
NetFunnel.gShowcntLimit = false;
NetFunnel.gShownextLimit = false;
NetFunnel.gSkinId = "";
NetFunnel.gPopupTop = false;
NetFunnel.gPopupLeft = false;
NetFunnel.gTotWait = -1;
NetFunnel.gPrevWaitTime = -1;
NetFunnel.gLastSkinID = "default";
NetFunnel.gUseMobileUI = false;
NetFunnel.gUseUnfocus = false;
NetFunnel.gAlreadyProc = 0;
NetFunnel.gWaitPop = null;
NetFunnel.gIPBlockWaitCount = 0;
NetFunnel.gNWaitCount = 0;
NetFunnel.gNWaitTemp = 0;
NetFunnel.gReTimer = null;
NetFunnel.gDebugflag = false;
NetFunnel.Util = {
	makeDebugMsg : function(l, k, c, f, d) {
		var b = "\n";
		var a = "       ";
		if (d == true) {
			b = "<br>";
			a = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
		}
		var j = "Unknown";
		var h = "Unkonwn Error";
		switch (k) {
		case NetFunnel.RTYPE_GET_TID:
			j = "getTicketID";
			break;
		case NetFunnel.RTYPE_CHK_ENTER:
			j = "chkEnter";
			break;
		case NetFunnel.RTYPE_ALIVE_NOTICE:
			j = "aliveNotice";
			break;
		case NetFunnel.RTYPE_SET_COMPLETE:
			j = "setComplete";
			break;
		case NetFunnel.RTYPE_GET_TID_CHK_ENTER:
			j = "getTID+ChkEnter";
			break;
		case NetFunnel.RTYPE_INIT:
			j = "Init";
			break;
		case NetFunnel.RTYPE_STOP:
			j = "stop";
			break;
		default:
			j = "Unknown";
			break
		}
		switch (c) {
		case NetFunnel.kSuccess:
			h = "Normal";
			break;
		case NetFunnel.kContinue:
			h = "Continue";
			break;
		case NetFunnel.kContinueDebug:
			h = "Debug Continue mode";
			break;
		case NetFunnel.kTsBypass:
			h = "ServerSide Bypass";
			break;
		case NetFunnel.kTsBlock:
			h = "ServerSide Block";
			break;
		case NetFunnel.kTsIpBlock:
			h = "ServerSide Ip Block";
			break;
		case NetFunnel.kErrorSystem:
			h = "System Error";
			break;
		case NetFunnel.kErrorSecurity:
			h = "Security Error";
			break;
		case NetFunnel.kErrorIO:
			h = "I/O Error";
			break;
		case NetFunnel.kErrorSockConnect:
			h = "Connection Timeout";
			break;
		case NetFunnel.kErrorAlready:
			h = "Already Running";
			break;
		case NetFunnel.kErrorNoinit:
			h = "Init Error";
			break;
		case NetFunnel.E_INSERT:
			h = "Insert Error";
			break;
		case NetFunnel.kErrorPermission:
			h = "No Permission";
			break;
		case NetFunnel.kErrorExpiredTime:
			h = "Key Expire";
			break;
		case NetFunnel.kErrorParam:
			h = "Parameter Error";
			break;
		case NetFunnel.E_NOT_STARTED:
			h = "No service time";
			break;
		case NetFunnel.kTsErrorNoUserAction:
			h = "No action Error";
			break;
		default:
			h = "Unknown Error";
			break
		}
		var g = l + " " + b + b + "  - type : " + j + " (" + k + ")" + b
				+ " - Code : " + h + " (" + c + ")" + b + " - Params" + b;
		for ( var e in f) {
			g += a + e + " ---> " + f[e] + b
		}
		return g
	},
	goNextPage : function(b, d) {
		var a = b;
		for ( var c in d) {
			a += "&" + c + "=" + d[c]
		}
		document.location.href = a
	},
	alertDebugMsg : function(a) {
		alert(a)
	},
	decodeBase64 : function(d) {
		var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var a = "";
		var l, j, g;
		var k, h, f, e;
		var c = 0;
		d = d.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		do {
			k = b.indexOf(d.charAt(c++));
			h = b.indexOf(d.charAt(c++));
			f = b.indexOf(d.charAt(c++));
			e = b.indexOf(d.charAt(c++));
			l = (k << 2) | (h >> 4);
			j = ((h & 15) << 4) | (f >> 2);
			g = ((f & 3) << 6) | e;
			a += String.fromCharCode(l);
			if (f != 64) {
				a += String.fromCharCode(j)
			}
			if (e != 64) {
				a += String.fromCharCode(g)
			}
		} while (c < d.length);
		return a
	},
	getParam : function(a) {
		a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var b = "[\\?&]" + a + "=([^&#]*)";
		var d = new RegExp(b);
		var c = d.exec(document.location.href);
		if (c === null) {
			return ""
		}
		return c[1]
	},
	isSmartPhone : function() {
		var b = [ "iPhone", "iPod", "iPad", "BlakBerry", "Android",
				"WindowsCE", "LG", "MOT", "SAMSUNG", "SonyEricsson", "Nokia",
				"Webos", "Opera mini", "Opera mobi", "Iemobile" ];
		try {
			for (var a = 0; a < b.length; a++) {
				if (navigator.userAgent.match(b[a]) !== null) {
					return true
				}
			}
		} catch (c) {
		}
		return false
	},
	calcStdDev : function(g, f) {
		if (typeof g != "object") {
			return false
		}
		if (g.length < 2) {
			return false
		}
		if (f > 1 || f < 0) {
			f = 0
		}
		var e = 0, d = 0;
		for (d = 0; d < g.length; d++) {
			e += parseInt(g[d], 10)
		}
		var a = e / g.length;
		var b = 0;
		for (d = 0; d < g.length; d++) {
			b += ((parseInt(g[d], 10) - a) * (parseInt(g[d], 10) - a))
		}
		var c = Math.sqrt(b / (g.length - f));
		return c
	},
	delFocus : function(g) {
		try {
			var f = document;
			if (typeof g == "object" && typeof g.document == "object") {
				f = g.document
			}
			var b = f.getElementsByTagName("body")[0];
			var a = f.createElement("iframe");
			a.style.position = "absolute";
			a.style.width = "0px";
			a.style.height = "0px";
			a.style.border = "0px";
			a.style.top = NetFunnel.PopupUtil.getScrollTop(f);
			a.style.left = NetFunnel.PopupUtil.getScrollLeft(f);
			b.appendChild(a);
			a.focus();
			var c = a.parentNode;
			if (c && typeof c == "object") {
				c.removeChild(a)
			}
		} catch (d) {
		}
	},
	isVirtualWait : function(a) {
		if (typeof a != "object") {
			return false
		}
		if (typeof a.mprotect == "number" && a.mprotect > 0) {
			return true
		}
		return false
	},
	getTimeStr : function(g, E, L, b) {
		var d = parseInt(g, 10);
		if (typeof E == "undefined") {
			E = "%H시간 %M분 %S초"
		}
		if (typeof L == "undefined") {
			L = " "
		}
		if (typeof b == "undefined") {
			b = false
		}
		var n = 0;
		var c = 0;
		var r = 0;
		var C = 0;
		var K = false;
		var I = false;
		var F = false;
		var x = false;
		var u = false;
		var G = E.match(/%[-]*[0-9]*[H|M|S]/g);
		for (C = 0; C < G.length; C++) {
			K = G[C];
			I = K.charAt(K.length - 1);
			if (I == "H") {
				F = true
			}
			if (I == "M") {
				x = true
			}
			if (I == "S") {
				u = true
			}
		}
		if (F == true) {
			c = Math.floor(d / 3600)
		}
		if (x == true) {
			if (F == true) {
				n = Math.floor((d % 3600) / 60)
			} else {
				n = Math.floor(d / 60)
			}
		}
		if (u == true) {
			if (F == false && x == false) {
				r = d
			} else {
				if (x == true) {
					r = d % 60
				} else {
					if (F == true && x == false) {
						r = Math.floor(d % 3600)
					}
				}
			}
		}
		var q = "";
		var w = E.split(L);
		for (var D = 0; D < w.length; D++) {
			var o = w[D];
			G = o.match(/%[-]*[0-9]*[H|M|S]/g);
			var M = true;
			for (C = 0; G && C < G.length; C++) {
				K = G[C];
				var p = "";
				var H = false;
				var e = "&nbsp;";
				var a = false;
				var v = 0;
				I = K.charAt(K.length - 1);
				if (K.length > 2) {
					var B = "";
					var f = true;
					for (var A = 1; A < K.length - 1; A++) {
						var z = K[A];
						if (z == "-") {
							a = true
						} else {
							if (z == "0" && f == true) {
								e = "0";
								f = false;
								H = true
							} else {
								B += z;
								H = true
							}
						}
					}
					v = parseInt(B, 10)
				}
				var J = "";
				if (I == "H") {
					if (c == 0) {
						M = false
					}
					J = "" + c
				} else {
					if (I == "M") {
						if (n == 0) {
							M = false
						}
						J = "" + n
					} else {
						if (I == "S") {
							J = "" + r
						}
					}
				}
				if (H) {
					if (a) {
						p = J
					}
					var t = v - J.length;
					for (var y = 0; y < t; y++) {
						p += e
					}
					if (!a) {
						p += J
					}
				} else {
					p = J
				}
				o = o.replace(K, p)
			}
			if (b == true || M == true) {
				if (q.length > 0) {
					q = q + L + o
				} else {
					q = o
				}
			}
		}
		return q
	},
	getFrameWindowList : function(d) {
		var c = [];
		for (var a = 0; a < top.frames.length; a++) {
			var b = top.frames[a];
			if (b === d) {
				continue
			}
			c.push({
				win : b,
				popup : null
			})
		}
		return c
	}
};
NetFunnel.BrowserDetect = {
	init : function() {
		this.browser = this.searchString(this.dataBrowser)
				|| "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS"
	},
	searchString : function(d) {
		for (var a = 0; a < d.length; a++) {
			var b = d[a].string;
			var c = d[a].prop;
			this.versionSearchString = d[a].versionSearch || d[a].identity;
			if (b) {
				if (b.indexOf(d[a].subString) != -1) {
					return d[a].identity
				}
			} else {
				if (c) {
					return d[a].identity
				}
			}
		}
		return ""
	},
	searchVersion : function(b) {
		var a = b.indexOf(this.versionSearchString);
		if (a == -1) {
			return 0
		}
		return parseFloat(b.substring(a + this.versionSearchString.length + 1))
	},
	dataBrowser : [ {
		string : navigator.userAgent,
		subString : "Chrome",
		identity : "Chrome"
	}, {
		string : navigator.userAgent,
		subString : "OmniWeb",
		versionSearch : "OmniWeb/",
		identity : "OmniWeb"
	}, {
		string : navigator.vendor,
		subString : "Apple",
		identity : "Safari"
	}, {
		prop : window.opera,
		identity : "Opera"
	}, {
		string : navigator.vendor,
		subString : "iCab",
		identity : "iCab"
	}, {
		string : navigator.vendor,
		subString : "KDE",
		identity : "Konqueror"
	}, {
		string : navigator.userAgent,
		subString : "Firefox",
		identity : "Firefox"
	}, {
		string : navigator.vendor,
		subString : "Camino",
		identity : "Camino"
	}, {
		string : navigator.userAgent,
		subString : "Netscape",
		identity : "Netscape"
	}, {
		string : navigator.userAgent,
		subString : "MSIE",
		identity : "Explorer",
		versionSearch : "MSIE"
	}, {
		string : navigator.userAgent,
		subString : "Gecko",
		identity : "Mozilla",
		versionSearch : "rv"
	}, {
		string : navigator.userAgent,
		subString : "Mozilla",
		identity : "Netscape",
		versionSearch : "Mozilla"
	} ],
	dataOS : [ {
		string : navigator.platform,
		subString : "Win",
		identity : "Windows"
	}, {
		string : navigator.platform,
		subString : "Mac",
		identity : "Mac"
	}, {
		string : navigator.platform,
		subString : "Linux",
		identity : "Linux"
	} ]
};
NetFunnel.BrowserDetect.init();
if (NetFunnel.BrowserDetect.browser == "Explorer") {
	if (typeof Array.push != "function") {
		Array.prototype.push = function() {
			var b = this.length >>> 0;
			for (var a = 0; a < arguments.length; a++) {
				this[b] = arguments[a];
				b = b + 1 >>> 0
			}
			this.length = b;
			return b
		}
	}
	if (typeof Array.pop != "function") {
		Array.prototype.pop = function() {
			var b = this.length >>> 0, a;
			if (b) {
				a = this[--b];
				delete this[b]
			}
			this.length = b;
			return a
		}
	}
}
NetFunnel.getCommandStr = function(f, e) {
	var c = "";
	var b = 0;
	if (f == "recv") {
		b = parseInt(e.substring(0, 4), 10)
	} else {
		var d = /opcode=([0-9]+)&/;
		var a = d.exec(e);
		if (a.length > 1) {
			b = parseInt(a[1], 10)
		}
	}
	switch (b) {
	case 5101:
		c = "getTidchkEnter";
		break;
	case 5002:
		c = "chkEnter      ";
		break;
	case 5003:
		c = "aliveNotice   ";
		break;
	case 5004:
		c = "setComplete   ";
		break;
	default:
		c = "Unknown       "
	}
	return c
};
NetFunnel.writeDebugMsg = function(j, i, c) {
	var l = new Date();
	var e = parseInt(l.getHours(), 10);
	var f = parseInt(l.getMinutes(), 10);
	var k = parseInt(l.getSeconds(), 10);
	var a = parseInt(l.getMilliseconds(), 10);
	var g = "";
	if (e < 10) {
		g += "0"
	}
	g += e + ":";
	if (f < 10) {
		f += "0"
	}
	g += f + ":";
	if (k < 10) {
		k += "0"
	}
	g += k;
	g += "." + a;
	var h = "";
	var b = "";
	var m = "";
	if (i == "recv") {
		h = "padding-left:1px;";
		b = "#9E9E9E;";
		m = g + " | Recv | <b>" + NetFunnel.getCommandStr(i, c) + "</b> | "
	} else {
		h = "margin-top:5px;";
		b = "#EEEEEE;";
		m = g + " | Send | <b>" + NetFunnel.getCommandStr(i, c) + "</b> | "
	}
	j.document
			.write("<div onload='this.focus()' style='width:650;overflow:hidden;padding:1px;border:1px solid #eeeeee;margin:0px;font-size:10px;font-family:맑은 고딕,Malgun Gothic;background-color:"
					+ b + h + "'>" + m + c.substring(0, 50) + "</div>")
};
NetFunnel.printDebugMsg = function(c, a, b) {
	NetFunnel.debugWindow = window.open("", "NetFunnel_debugWindow",
			"status=1,width=700,height=300,resizable=1,scrollbars=1");
	if (typeof NetFunnel.debugWindow == "object") {
		NetFunnel.writeDebugMsg(NetFunnel.debugWindow, c, a)
	}
};
NetFunnel.Storage = function(a) {
	this.html5Support = this.supportsHtml5Storage();
	if (typeof a == "number") {
		this.type = a
	}
};
NetFunnel.Storage.prototype.supportsHtml5Storage = function() {
	try {
		return "localStorage" in window && window.localStorage !== null
	} catch (a) {
		return false
	}
};
NetFunnel.Storage.prototype.html5Support = false;
NetFunnel.Storage.prototype.length = 0;
NetFunnel.Storage.prototype.type = 1;
NetFunnel.Storage.prototype.setStorageType = function(a) {
	if (a < 1 || a > 2) {
		this.type = 1
	} else {
		this.type = a
	}
};
NetFunnel.Storage.prototype.getStorage = function() {
	if (this.type == 1) {
		return localStorage
	} else {
		if (this.type == 2) {
			return sessionStorage
		}
	}
	return localStorage
};
NetFunnel.Storage.prototype.setItem = function(b, d, a, c) {
	try {
		if (this.html5Support) {
			this.getStorage().setItem(b, d);
			NetFunnel.Cookie.set(b, d, a, c)
		} else {
			NetFunnel.Cookie.set(b, d, a, c)
		}
		return true
	} catch (f) {
		return false
	}
};
NetFunnel.Storage.prototype.setItemStorageOnly = function(b, d, a, c) {
	try {
		if (this.html5Support) {
			this.getStorage().setItem(b, d)
		} else {
			NetFunnel.Cookie.set(b, d, a, c)
		}
		return true
	} catch (f) {
		return false
	}
};
NetFunnel.Storage.prototype.getItem = function(b, c) {
	var a = false;
	try {
		if (this.html5Support) {
			a = this.getStorage().getItem(b);
			if (!a && (c == undefined || c == false)) {
				a = NetFunnel.Cookie.get(b)
			}
		} else {
			a = NetFunnel.Cookie.get(b)
		}
		return a
	} catch (d) {
		return false
	}
};
NetFunnel.Storage.prototype.removeItem = function(a, b) {
	try {
		if (this.html5Support) {
			this.getStorage().removeItem(a);
			if (b == undefined || b == false) {
				NetFunnel.Cookie.del(a)
			}
		} else {
			NetFunnel.Cookie.del(a)
		}
		return true
	} catch (c) {
		return false
	}
};
NetFunnel.Storage.prototype.clear = function() {
	try {
		if (this.html5Support) {
			this.getStorage().clear()
		}
		return true
	} catch (a) {
		return false
	}
};
NetFunnel.MProtect = function() {
	try {
		var s = new NetFunnel.Storage();
		var b = new Date();
		var n = b.getTime();
		var l = s.getItem("NFMPT.data", true);
		if (l === null) {
			l = ""
		}
		var c = s.getItem("NFMPT.stdData", true);
		if (c === null) {
			c = ""
		}
		var a = parseInt(s.getItem("NFMPT.lastTime", true), 10);
		if (isNaN(a) || a === null || a == "") {
			a = 0
		}
		var r = parseInt(s.getItem("NFMPT.reqCnt", true), 10);
		if (isNaN(r) || r === null || r == "") {
			r = 0
		}
		var m = [];
		var h = [];
		if (l != "") {
			m = l.split(",")
		}
		if (c != "") {
			h = c.split(",")
		}
		if (a != 0) {
			m[m.length] = n - a;
			h[h.length] = n - a
		}
		a = n;
		var k = m.length - 1;
		var f = 0;
		for (; k >= 0; k--) {
			f += parseInt(m[k], 10);
			if (f > NetFunnel.MP_TIMELIMIT) {
				break
			}
		}
		var g = h.length - NetFunnel.MP_DEVCNTLIMIT;
		if (g < 0) {
			g = 0
		}
		var q = h.slice(g);
		var d = m.slice(k + 1);
		s.setItemStorageOnly("NFMPT.data", d.join(","));
		s.setItemStorageOnly("NFMPT.stdData", q.join(","));
		s.setItemStorageOnly("NFMPT.lastTime", a + "");
		s.setItemStorageOnly("NFMPT.reqCnt", (++r) + "");
		var p = NetFunnel.Util.calcStdDev(q, 0);
		if (p != false && p < NetFunnel.MP_DEVLIMIT) {
			return 2
		}
		if (d.length < NetFunnel.MP_MINCOUNT) {
			return 0
		}
		if (d.length + 1 > NetFunnel.MP_MAXREQLIMIT) {
			return 1
		}
		if (r > NetFunnel.MP_REQONLYLIMIT) {
			s.setItemStorageOnly("NFMPT.reqCnt", "0");
			return 3
		}
	} catch (o) {
	}
	return 0
};
NetFunnel.ProgressBar = function(f, e, g) {
	this._bar = null;
	this._bar2 = null;
	this._config = {};
	this._totWaitCnt = 0;
	this._wflag = 0;
	if (typeof f == "string") {
		this._obj = g.getElementById(f)
	} else {
		this._obj = f
	}
	this._config.width = 360;
	this._config.height = 5;
	this._config.count = 50;
	this._config.interval = 50;
	this._config.color = this._color;
	this._config.bgcolor = this._bgcolor;
	this._config.waitchk = 0;
	if (typeof e == "object") {
		for ( var c in e) {
			this._config[c] = e[c]
		}
	}
	if (this._config.count <= 0) {
		this._config.count = 50
	}
	this._oTable = g.createElement("table");
	this._oTable.style.width = this._config.width + "px";
	this._oTable.style.height = this._config.height + "px";
	this._oTable.cellPadding = 0;
	this._oTable.cellSpacing = 0;
	var d = g.createElement("tbody");
	var h = g.createElement("tr");
	var a = g.createElement("td");
	a.style.height = this._config.height + "px";
	a.style.backgroundColor = this._config.bgcolor;
	var b = g.createElement("td");
	b.style.backgroundColor = this._config.bgcolor;
	h.appendChild(a);
	h.appendChild(b);
	d.appendChild(h);
	this._oTable.appendChild(d);
	this._obj.appendChild(this._oTable);
	this._bar = a;
	this._bar2 = b;
	this.show = function() {
		this._obj.style.visibility = "visible";
		var i = this;
		this._timer = setInterval(function() {
			i._action(0)
		}, this._config.interval);
		return
	};
	this.hide = function() {
		this._obj.style.visibility = "hidden";
		if (this._timer) {
			clearTimeout(this._timer);
			this._timer = null
		}
		return
	};
	this._action = function() {
		try {
			if (this._config.waitchk != 0) {
				if (parseInt(this._config.waitchk, 10) < parseInt(
						NetFunnel.gLastData.nwait, 10)) {
					NetFunnel.gLastData.nwait = this._config.waitchk
				}
			}
			if (this._wflag == 0 && NetFunnel.retryData === null) {
				this._wflag = 1
			}
			this._oTable.style.width = this._config.width + "px";
			if (NetFunnel.gTotWait <= 0) {
				NetFunnel.gTotWait = NetFunnel.gLastData.nwait
			}
			if (parseInt(NetFunnel.gLastData.nwait, 10) > parseInt(
					NetFunnel.gTotWait, 10)) {
				NetFunnel.gTotWait = NetFunnel.gLastData.nwait
			}
			var i = this._config.width
					- Math
							.round((NetFunnel.gLastData.nwait / NetFunnel.gTotWait)
									* this._config.width);
			var k = this._config.width - i;
			this._bar.style.width = i + "px";
			this._bar.style.backgroundColor = this._config.color;
			this._bar2.style.width = k + "px";
			this._bar2.style.backgroundColor = this._config.bgcolor;
			this._config.waitchk = NetFunnel.gLastData.nwait
		} catch (j) {
		}
		return true
	}
};
NetFunnel.ProgressBar.prototype._mmm = 0;
NetFunnel.ProgressBar.prototype._curr = 0;
NetFunnel.ProgressBar.prototype._direct = 0;
NetFunnel.ProgressBar.prototype._obj = null;
NetFunnel.ProgressBar.prototype._cells = null;
NetFunnel.ProgressBar.prototype._timer = null;
NetFunnel.ProgressBar.prototype._oTable = null;
NetFunnel.ProgressBar.prototype._config = null;
NetFunnel.ProgressBar.prototype._color = "#2a509b";
NetFunnel.ProgressBar.prototype._bgcolor = "#b6dffd";
NetFunnel.Cookie = {
	set : function(c, e, b, d) {
		var f = c + "=" + escape(e);
		if (typeof b != "undefined" && (b.constructor == Number) && b > 0) {
			var a = new Date();
			a.setMinutes(a.getMinutes() + b);
			f += ";expires=" + a.toGMTString()
		}
		if (typeof d != "undefined" && d.constructor == String && d != "") {
			f += ";domain=" + d
		} else {
			if (NetFunnel.TS_COOKIE_DOMAIN != "") {
				f += ";domain=" + NetFunnel.TS_COOKIE_DOMAIN
			}
		}
		f += ";path=/;";
		document.cookie = f
	},
	del : function(a) {
		NetFunnel.Cookie.set(a, "", -1)
	},
	get : function(b) {
		if (document.cookie.length > 0) {
			var c = document.cookie.indexOf(b + "=");
			if (c != -1) {
				c = c + b.length + 1;
				var a = document.cookie.indexOf(";", c);
				if (a == -1) {
					a = document.cookie.length
				}
				return unescape(document.cookie.substring(c, a))
			}
		}
		return ""
	}
};
NetFunnel.getUrlParameters = function(f) {
	if (typeof f != "string" || f == "") {
		return ""
	}
	var e = "";
	var d = document.location.href;
	if (d.indexOf("?") > -1) {
		var c = d.substr(d.indexOf("?"));
		var g = c.split("&");
		for (var b = 0; b < g.length; b++) {
			if (g[b].indexOf(f + "=") > -1) {
				var a = g[b].indexOf(f + "=") + f.length + 1;
				e = g[b].substr(a);
				break
			}
		}
	}
	return unescape(e)
};
NetFunnel.gPop = null;
NetFunnel.gTimer = null;
NetFunnel.gLastData = null;
NetFunnel.countdown_stop = function() {
	try {
		if (!NetFunnel.Util.isVirtualWait(NetFunnel.gLastData)) {
			NetFunnel.gControl.fireEvent(null, NetFunnel.gControl, "onStop", {
				next : NetFunnel.gControl.next.stop
			});
			NetFunnel_sendStop();
			if (NetFunnel.gPop) {
				NetFunnel.gPop.hide();
				NetFunnel.gPop.destroy();
				delete NetFunnel.gPop;
				NetFunnel.gPop = null
			}
			if (NetFunnel.gControl.getConfig("use_frame_block") == true) {
				NetFunnel.PopupUtil.hideBlockList(NetFunnel.gControl
						.getConfig("frame_block_list"))
			}
		}
	} catch (a) {
	}
};
NetFunnel.countdown = function() {
	if (NetFunnel.gLastData && NetFunnel.gLastData.time_left >= 0) {
		if (NetFunnel.gPop) {
			var tTime = NetFunnel.gPop
					.getObj("NetFunnel_Loading_Popup_TimeLeft");
			var tCount = NetFunnel.gPop.getObj("NetFunnel_Loading_Popup_Count");
			var tNext = NetFunnel.gPop
					.getObj("NetFunnel_Loading_Popup_NextCnt");
			if (this._gNWaitView != 0) {
				if (parseInt(this._gNWaitView, 10) < parseInt(
						NetFunnel.gLastData.nwait, 10)) {
					NetFunnel.gLastData.nwait = this._gNWaitView
				}
			}
			this._gNWaitView = NetFunnel.gLastData.nwait;
			var tformat = "";
			var tformat_arr = null;
			var shownext_limit = 0;
			var showcnt_limit = 0;
			if (tCount) {
				showcnt_limit = NetFunnel.gControl.getConfig("showcnt_limit");
				if (showcnt_limit > 0
						&& NetFunnel.gLastData.nwait > showcnt_limit) {
					tformat = tCount.className;
					if (tformat.length > 0) {
						tCount.innerHTML = tformat
					} else {
						tCount.innerHTML = NetFunnel.TS_LIMIT_TEXT
					}
				} else {
					tCount.innerHTML = String(NetFunnel.gLastData.nwait)
				}
			}
			if (tNext) {
				shownext_limit = NetFunnel.gControl.getConfig("shownext_limit");
				if (NetFunnel.gLastData.nnext == undefined) {
					tNext.innerHTML = "0"
				} else {
					if (shownext_limit > 0
							&& NetFunnel.gLastData.nnext > shownext_limit) {
						tformat = tNext.className;
						if (tformat.length > 0) {
							tNext.innerHTML = tformat
						} else {
							tNext.innerHTML = NetFunnel.TS_LIMIT_TEXT
						}
					} else {
						tNext.innerHTML = String(NetFunnel.gLastData.nnext)
					}
				}
			}
			if (tTime) {
				var showtime_limit = NetFunnel.gControl
						.getConfig("showtime_limit");
				if (showtime_limit > 0
						&& NetFunnel.gLastData.real_time_left > showtime_limit) {
					tformat = tTime.className;
					tformat_arr = tformat.split("^");
					if (tformat_arr.length == 4 && tformat_arr[3].length > 0) {
						tTime.innerHTML = tformat_arr[3]
					} else {
						if (tTime.innerHTML.length >= 5) {
							tTime.innerHTML = "."
						} else {
							tTime.innerHTML += "."
						}
					}
				} else {
					tformat = tTime.className;
					if (tformat.length > 0) {
						tformat_arr = tformat.split("^");
						tTime.innerHTML = NetFunnel.Util.getTimeStr(
								NetFunnel.gLastData.real_time_left,
								tformat_arr[0], tformat_arr[1],
								eval(tformat_arr[2]))
					} else {
						tTime.innerHTML = NetFunnel.Util
								.getTimeStr(NetFunnel.gLastData.real_time_left)
					}
				}
			}
			try {
				if (typeof tTime == "object") {
					if (tTime.style.textDecoration == "none") {
						tTime.style.textDecoration = "underline"
					} else {
						tTime.style.textDecoration = "none"
					}
				}
				if (typeof tTime == "object") {
					if (tNext.style.textDecoration == "none") {
						tNext.style.textDecoration = "underline"
					} else {
						tNext.style.textDecoration = "none"
					}
				}
				if (typeof tCount == "object") {
					if (tCount.style.textDecoration == "none") {
						tCount.style.textDecoration = "underline"
					} else {
						tCount.style.textDecoration = "none"
					}
				}
			} catch (e) {
			}
		}
	}
	if (NetFunnel.gLastData.time_left <= 0 && NetFunnel.gTimer) {
		if (NetFunnel.gPop) {
		}
		return
	}
	var left_perc = 0;
	var skinObj = NetFunnel.SkinUtil.get(NetFunnel.gSkinId, NetFunnel.Util
			.isSmartPhone());
	if (typeof skinObj.updateCallback == "function") {
		if (parseInt(NetFunnel.gTotWait, 10) <= 0) {
			left_perc = 0
		} else {
			if (parseInt(NetFunnel.gTotWait, 10) < parseInt(
					NetFunnel.gLastData.nwait, 10)) {
				NetFunnel.gTotWait = parseInt(NetFunnel.gLastData.nwait, 10)
			}
			left_perc = parseInt(
					((NetFunnel.gTotWait - NetFunnel.gLastData.nwait) * 100)
							/ NetFunnel.gTotWait, 10)
		}
		skinObj.updateCallback(left_perc, NetFunnel.gLastData.nwait,
				NetFunnel.gTotWait, NetFunnel.gLastData.real_time_left, true)
	}
	NetFunnel.gLastData.time_left--;
	var self = this;
	NetFunnel.gTimer = setTimeout(function() {
		self.countdown()
	}, 500)
};
NetFunnel.SkinUtil = {
	prevID : "",
	add : function(d, c, a) {
		try {
			if (typeof d != "string" || d == "") {
				return false
			}
			if (typeof c != "object") {
				return false
			}
			if (typeof a != "string" || a == "") {
				a = "normal"
			}
			if (typeof NetFunnel.Skin[d] != "object") {
				NetFunnel.Skin[d] = {}
			}
			NetFunnel.Skin[d][a] = c;
			NetFunnel.gLastSkinID = d;
			return true
		} catch (b) {
			return false
		}
	},
	get : function(d, a) {
		try {
			if (typeof d != "string" || d == "") {
				d = NetFunnel.gLastSkinID
			}
			var b = "normal";
			if (NetFunnel.gUseMobileUI == true && a == true) {
				b = "mobile"
			}
			if (typeof NetFunnel.Skin[d] == "object"
					&& typeof NetFunnel.Skin[d][b] == "object") {
				return NetFunnel.Skin[d][b]
			}
			if (NetFunnel.TS_SKIN_ID != "" && NetFunnel.TS_SKIN_ID != d) {
				if (typeof NetFunnel.Skin[NetFunnel.TS_SKIN_ID] == "object"
						&& typeof NetFunnel.Skin[NetFunnel.TS_SKIN_ID][b] == "object") {
					return NetFunnel.Skin[NetFunnel.TS_SKIN_ID][b]
				}
			}
			return NetFunnel.Skin["default"][b]
		} catch (c) {
		}
		return NetFunnel.Skin["default"]["normal"]
	}
};
NetFunnel.SkinUtil
		.add(
				"default",
				{
					htmlStr : ' 	<div id="NetFunnel_Skin_Top" style="border-radius: 5px; border: 6px solid rgb(234, 239, 243); border-image: none; background-color: rgb(255, 255, 255); -moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px;"> 					<div style="text-align: right; line-height: 25px; padding-top: 5px; padding-right: 5px;"> 					</div>					<div style="padding-top:5px;padding-left:5px;padding-right:5px"> 						<div style="text-align:center;font-size:16px;color:#001f6c;height:22px"><b><span style="color:#013dc1">접속대기 중</span>입니다.</b></div> 						<div style="text-align:right;font-size:16px;color:#4d4b4c;padding-top:4px;height:17px;" ><b>예상시간 : <span id="NetFunnel_Loading_Popup_TimeLeft" class="%M분 %02S초^ ^false"></span></b></div> 						<div style="padding-top:6px;padding-bottom:6px;vertical-align:center;width:80%" id="NetFunnel_Loading_Popup_Progressbar"></div> 						<div style="background-color:#ededed;padding-bottom:8px;overflow:hidden;width:228px"> 							<div style="padding-left:5px"> 								<div style="text-align:center;font-size:16px;color:#4d4b4c;padding:3px;padding-top:10px;padding-bottom:10px;height:20px">앞에 <b><span style="color:#2a509b"><span id="NetFunnel_Loading_Popup_Count" class="'
							+ NetFunnel.TS_LIMIT_TEXT
							+ '"></span></span></b> 명의 대기자가 있습니다.</div> 								<div style="text-align:center;ffont-size:16px;color:#4d4b4c;padding:3px;height:12px">현재 접속자가 많아 대기 중이며</div> 								<div style="text-align:center;font-size:16px;color:#4d4b4c;padding:3px;height:10px;">잠시만 기다리시면</div> 								<div style="text-align:center;font-size:16px;color:#4d4b4c;padding:3px;height:45px;">서비스로 자동 접속 됩니다.</div> 								<div style="text-align:center;font-size:16px;color:#2a509b;padding-top:10px;"> 									<b>[<span id="NetFunnel_Countdown_Stop" style="cursor:pointer">중지</span>]</b> 								</div> 							</div> 						</div> 					<div style="height:5px;"></div> 				</div> 			</div>'
				}, "mobile");
NetFunnel.tstr = '	<div id="NetFunnel_Skin_Top" style="background-color:#ffffff;border:1px solid #9ab6c4;width:800px;-moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;"> 		<div style="background-color:#ffffff;border:6px solid #eaeff3;-moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;"> 			<div style="text-align:right;padding-top:5px;padding-right:5px;line-height:25px;"> 			<b><span id="NetFunnel_Loding_Popup_Debug_Alerts" style="text-align:left;color:#ff0000"></span></b> 			<span style="text-align:right;"><a href="'
		+ NetFunnel.gLogoURL
		+ '" target="_blank" style="cursor:pointer;text-decoration:none;">';
if ((NetFunnel.BrowserDetect.browser == "Explorer" && NetFunnel.BrowserDetect.version == "6")
		|| NetFunnel.gLogoData == "") {
	NetFunnel.tstr += '<b style="font-size:16px;">' + NetFunnel.gLogoText
			+ "</b></a>"
} else {
	NetFunnel.tstr += '<b style="font-size:16px;">'
			+ NetFunnel.gLogoText
			+ '</b><img style="color:black;font-size:16px;padding-right:15px;padding-top:10px" border=0 src="data:image/gif;base64,'
			+ NetFunnel.gLogoData + '" ></a>'
}
NetFunnel.tstr += '</span></div> 			<div style="padding-top:0px;padding-left:25px;padding-right:25px"> 				<div style="text-align:left;font-size:18px;color:#001f6c;height:22px"> <b>에너지효율 1등급 가전 인센티브환급시스템 <span style="color:#013dc1">접속대기 중</span>입니다.</b></div> 				<div style="text-align:right;font-size:14px;color:#4d4b4c;padding-top:4px;height:14px" ><b>예상대기시간 : <span id="NetFunnel_Loading_Popup_TimeLeft" class="%H시간 %M분 %02S초^ ^false"></span></b></div> 				<div style="padding-top:20px;padding-bottom:6px;vertical-align:center;width:737px;height:24px" id="NetFunnel_Loading_Popup_Progressbar"></div> 				<div style="background-color:#ededed;width:100%;padding-bottom:8px;overflow:hidden"> 					<div style="padding-left:5px"> 						<div style="text-align:left;font-size:16px;color:#4d4b4c;padding:3px;padding-top:10px;height:20px">고객님 앞에 <b><span style="color:#2a509b"><span id="NetFunnel_Loading_Popup_Count" class="'
		+ NetFunnel.TS_LIMIT_TEXT
		+ '"></span></span></b> 명의 대기자가 있습니다.  </div> 						<div style="text-align:left;font-size:16px;color:#4d4b4c;padding:3px;height:24px">현재 접속 사용자가 많아 대기 중이며, 잠시만 기다리시면 </div> 						<div style="text-align:left;font-size:16px;color:#4d4b4c;padding:3px;height:45px;">환급신청 서비스로 자동 접속 됩니다.</div> 						<div style="padding-bottom:20px;text-align:center;font-size:16px;color:#2a509b;padding-top:10px;padding-bottom:20px"> 							<b>※ 재 접속하시면 대기시간이 더 길어집니다. <span id="NetFunnel_Countdown_Stop" style="cursor:pointer">[중지]</span> </b> 						</div> 					</div> 				</div> 				<div style="height:5px;"></div> 			</div> 		</div> 	</div>';
NetFunnel.SkinUtil.add("default", {
	htmlStr : NetFunnel.tstr
}, "normal");
NetFunnel.PopupSetup = function(d, b, c) {
	if (c === null || c == "") {
		c = NetFunnel.gSkinId
	}
	var e = NetFunnel.SkinUtil.get(c, NetFunnel.Util.isSmartPhone());
	switch (d) {
	case "vcontinue":
		b.data.nwait = 1000000;
		b.data.ttl = "2";
		b.data.tps = 1;
		break;
	case "continue":
		break;
	case "alert":
		break;
	default:
		break
	}
	if (d != "alert" && typeof b == "object") {
		NetFunnel.gLastData = b.data;
		NetFunnel.gLastData.time_left = parseInt(b.data.ttl, 10);
		NetFunnel.gLastData.tps = parseInt(b.data.tps, 10);
		if (NetFunnel.gLastData.tps == 0) {
			NetFunnel.gLastData.tps = 1
		}
		NetFunnel.gLastData.real_time_left = Math.round(parseInt(b.data.nwait,
				10)
				/ NetFunnel.gLastData.tps);
		if (NetFunnel.gLastData.real_time_left < 1) {
			NetFunnel.gLastData.real_time_left = 1
		}
		if (NetFunnel.gPrevWaitTime > -1
				&& NetFunnel.gLastData.real_time_left > NetFunnel.gPrevWaitTime) {
			NetFunnel.gLastData.real_time_left = NetFunnel.gPrevWaitTime
		}
		NetFunnel.gPrevWaitTime = NetFunnel.gLastData.real_time_left;
		if (NetFunnel.gTotWait < 0) {
			NetFunnel.gTotWait = NetFunnel.gLastData.nwait
		}
	}
	if (!NetFunnel.gPop) {
		NetFunnel.gPop = new NetFunnel.Popup(e.htmlStr, NetFunnel.gPopupTop,
				NetFunnel.gPopupLeft, NetFunnel.gControl
						.getConfig("popup_target"), false, false,
				NetFunnel.gControl.getConfig("popup_zindex"));
		if (typeof e.prepareCallback == "function") {
			e.prepareCallback()
		}
		this._gNWaitView = 0
	}
	NetFunnel.gPop.show();
	var a = null;
	if (NetFunnel.gPop.getObj("NetFunnel_Loding_Popup_Debug_Alerts")) {
		if (NetFunnel.gDebugflag) {
			a = NetFunnel.gPop.getObj("NetFunnel_Loding_Popup_Debug_Alerts");
			a.innerHTML = " Debug Mode "
		} else {
			a = NetFunnel.gPop.getObj("NetFunnel_Loding_Popup_Debug_Alerts");
			a.innerHTML = ""
		}
	}
	if (NetFunnel.gControl.getConfig("use_frame_block") == true) {
		NetFunnel.PopupUtil.showBlockList(NetFunnel.gControl
				.getConfig("frame_block_list"))
	}
	if (d != "alert") {
		NetFunnel.countdown()
	}
};
NetFunnel.DefaultCallback = {
	onSuccess : function(b, a, c) {
		if (NetFunnel.gTimer) {
			clearTimeout(NetFunnel.gTimer)
		}
		if (NetFunnel.gPop) {
			NetFunnel.gPop.hide();
			NetFunnel.gPop.destroy();
			delete NetFunnel.gPop;
			NetFunnel.gPop = true
		}
		if (c.getConfig("use_frame_block") == true) {
			NetFunnel.PopupUtil.hideBlockList(c.getConfig("frame_block_list"))
		}
		if (typeof a.next == "string" && a.next != "") {
			document.location.href = a.next
		} else {
			if (typeof a.next == "function") {
				DefaultCallback_onSuccess(b, a, c)
			}
		}
		NetFunnel.gPop = null
	},
	onContinued : function(b, a, c) {
		if (typeof a.next == "string") {
			document.location.href = a.next;
			return
		}
		if (typeof a.next == "function") {
			if (a.next(b, a) == false) {
				return
			}
		}
		if (a.rtype == NetFunnel.RTYPE_CHK_ENTER
				|| a.rtype == NetFunnel.RTYPE_GET_TID_CHK_ENTER) {
			if (NetFunnel.gTimer) {
				clearTimeout(NetFunnel.gTimer)
			}
			NetFunnel.PopupSetup("continue", a, NetFunnel.gSkinId)
		}
	},
	onError : function(b, a, c) {
		if (NetFunnel.gPop) {
			NetFunnel.gPop.hide();
			NetFunnel.gPop.destroy();
			delete NetFunnel.gPop;
			NetFunnel.gPop = null
		}
		if (c.getConfig("use_frame_block") == true) {
			NetFunnel.PopupUtil.hideBlockList(c.getConfig("frame_block_list"))
		}
		if (typeof a.next == "string" && a.next != "") {
			document.location.href = a.next;
			return
		}
		if (typeof a.next == "function") {
			if (a.next(b, a) == false) {
				return
			}
		}
	},
	onStop : function(b, a) {
		if (typeof a.next == "string" && a.next != "") {
			document.location.href = a.next;
			return
		}
		if (typeof a.next == "function") {
			if (a.next(b, a) == false) {
				return
			}
		}
	},
	onBypass : function(b, a, c) {
		if (NetFunnel.gTimer) {
			clearTimeout(NetFunnel.gTimer)
		}
		if (NetFunnel.gPop) {
			NetFunnel.gPop.hide();
			NetFunnel.gPop.destroy();
			delete NetFunnel.gPop;
			NetFunnel.gPop = null
		}
		if (c.getConfig("use_frame_block") == true) {
			NetFunnel.PopupUtil.hideBlockList(c.getConfig("frame_block_list"))
		}
		if (typeof a.next == "string" && a.next != "") {
			document.location.href = a.next;
			return
		}
		if (typeof a.next == "function") {
			if (a.next(b, a) == false) {
				return
			}
		}
	},
	onExpressnumber : function(b, a, c) {
		if (NetFunnel.gTimer) {
			clearTimeout(NetFunnel.gTimer)
		}
		if (NetFunnel.gPop) {
			NetFunnel.gPop.hide();
			NetFunnel.gPop.destroy();
			delete NetFunnel.gPop;
			NetFunnel.gPop = null
		}
		if (c.getConfig("use_frame_block") == true) {
			NetFunnel.PopupUtil.hideBlockList(c.getConfig("frame_block_list"))
		}
		if (typeof a.next == "string" && a.next != "") {
			document.location.href = a.next;
			return
		}
		if (typeof a.next == "function") {
			if (a.next(b, a) == false) {
				return
			}
		}
	},
	onBlock : function(b, a, c) {
		if (NetFunnel.gTimer) {
			clearTimeout(NetFunnel.gTimer)
		}
		if (NetFunnel.gPop) {
			NetFunnel.gPop.hide();
			NetFunnel.gPop.destroy();
			delete NetFunnel.gPop;
			NetFunnel.gPop = null
		}
		if (typeof a.next == "string" && a.next != "") {
			document.location.href = a.next;
			return
		}
		if (typeof a.next == "function") {
			if (a.next(b, a) == false) {
				return
			}
		}
		if (typeof c.getConfig("block_url") != "string"
				|| c.getConfig("block_url") == "") {
			if (c.getConfig("block_msg") == ""
					|| typeof c.getConfig("block_msg") != "string") {
				alert("[NetFUNNEL]Service Block!")
			} else {
				alert(c.getConfig("block_msg"))
			}
			return
		}
		document.location.href = c.getConfig("block_url")
	},
	onIpBlock : function(b, a) {
		if (typeof a.next == "string") {
			document.location.href = a.next;
			return
		}
		if (typeof a.next == "function") {
			if (a.next(b, a) == false) {
				return
			}
		}
		if (NetFunnel.gTimer) {
			clearTimeout(NetFunnel.gTimer)
		}
		NetFunnel.PopupSetup("vcontinue", a, NetFunnel.gSkinId)
	}
};
NetFunnel.Event = function() {
	this.events = [];
	this.builtinEvts = []
};
NetFunnel.Event.prototype.getActionIdx = function(f, c, e, g) {
	if (f && c) {
		var b = this.events[f][c];
		if (b) {
			var a = b.length;
			for (var d = a - 1; d >= 0; d--) {
				if (b[d].action == e && b[d].binding == g) {
					return d
				}
			}
		} else {
			return -1
		}
	}
	return -1
};
NetFunnel.Event.prototype.addListener = function(d, b, c, e) {
	if (this.events[d]) {
		if (this.events[d][b]) {
			if (this.getActionIdx(d, b, c, e) == -1) {
				var a = this.events[d][b];
				a[a.length] = {
					action : c,
					binding : e
				}
			}
		} else {
			this.events[d][b] = [];
			this.events[d][b][0] = {
				action : c,
				binding : e
			}
		}
	} else {
		this.events[d] = [];
		this.events[d][b] = [];
		this.events[d][b][0] = {
			action : c,
			binding : e
		}
	}
};
NetFunnel.Event.prototype.removeListener = function(d, b, c, e) {
	if (this.events[d]) {
		if (this.events[d][b]) {
			var a = this.actionExists(d, b, c, e);
			if (a >= 0) {
				this.events[d][b].splice(a, 1)
			}
		}
	}
};
NetFunnel.Event.prototype.fireEvent = function(i, h, c, f) {
	if (!i) {
		i = window.event
	}
	if (h && this.events) {
		var d = this.events[h];
		if (d) {
			var b = d[c];
			if (b) {
				for (var a = 0; b.length > a; a++) {
					var g = b[a].action;
					if (b[a].binding) {
						g = g.bind(b[a].binding)
					}
					g(i, f, h)
				}
			}
		}
	}
};
NetFunnel.gPopup = [];
NetFunnel.PopupUtil = {
	getViewportHeight : function(b, a) {
		if (b.innerHeight != b.undefined) {
			return b.innerHeight
		}
		if (a.compatMode == "CSS1Compat") {
			return a.documentElement.clientHeight
		}
		if (a.body) {
			return a.body.clientHeight
		}
		return b.undefined
	},
	getViewportWidth : function(b, a) {
		if (b.innerWidth != b.undefined) {
			return b.innerWidth
		}
		if (a.compatMode == "CSS1Compat") {
			return a.documentElement.clientWidth
		}
		if (a.body) {
			return a.body.clientWidth
		}
		return 0
	},
	getScrollTop : function(a) {
		if (a.pageYOffset) {
			return a.pageYOffset
		} else {
			if (a.documentElement
					&& typeof a.documentElement.scrollTop == "number") {
				return a.documentElement.scrollTop
			} else {
				if (a.body) {
					return a.body.scrollTop
				}
			}
		}
		return 0
	},
	getScrollLeft : function(a) {
		if (a.pageXOffset) {
			return a.pageXOffset
		} else {
			if (a.documentElement
					&& typeof a.documentElement.scrollLeft == "number") {
				return a.documentElement.scrollLeft
			} else {
				if (a.body) {
					return a.body.scrollLeft
				}
			}
		}
		return 0
	},
	resizePopup : function() {
		for (var a = 0; NetFunnel.gPopup.length > a; a++) {
			NetFunnel.gPopup[a]._centerPopWin()
		}
	},
	getObjWidth : function(b) {
		if (!b) {
			return 0
		}
		var a = 0;
		if (parseInt(b.style.width, 10) > parseInt(b.offsetWidth, 10)) {
			a = parseInt(b.style.width, 10)
		} else {
			a = b.offsetWidth
		}
		return a
	},
	getObjHeight : function(b) {
		if (!b) {
			return 0
		}
		var a = 0;
		if (parseInt(b.style.height, 10) > parseInt(b.offsetHeight, 10)) {
			a = parseInt(b.style.height, 10)
		} else {
			a = b.offsetHeight
		}
		return a
	},
	showBlockList : function(a) {
		for (var b = 0; b < a.length; b++) {
			try {
				var d = a[b];
				d.popup = new NetFunnel.Popup("", NetFunnel.gPopupTop,
						NetFunnel.gPopupLeft, d.win, false, false,
						NetFunnel.gControl.getConfig("popup_zindex"));
				d.popup.show()
			} catch (c) {
			}
		}
	},
	hideBlockList : function(a) {
		for (var b = 0; b < a.length; b++) {
			try {
				var d = a[b];
				if (d.popup) {
					d.popup.hide();
					d.popup.destroy();
					delete d.popup;
					d.popup = null
				}
			} catch (c) {
			}
		}
	},
	hideWaitPopup : function() {
		if (typeof NetFunnel == "object") {
			if (NetFunnel.gWaitPop) {
				NetFunnel.gWaitPop.hide();
				NetFunnel.gWaitPop.destroy();
				NetFunnel.gWaitPop = null
			}
		}
	},
	showWaitPopup : function() {
		if (typeof NetFunnel == "object") {
			var a = '<div style="padding:2px;border:1px solid darkgray;"> 				<table> 					<tr>';
			if (NetFunnel.BrowserDetect.browser == "Explorer"
					&& NetFunnel.BrowserDetect.version == "6") {
				a += "<td></td>"
			} else {
				a += '<td><img style="" border=0 src="data:image/gif;base64,'
						+ NetFunnel.gPreWaitData + '" ></td>'
			}
			a += '	<td style="valign:middle;font-size:9pt">wait...</td> 					</tr> 				</table> 			</div>';
			NetFunnel.gWaitPop = new NetFunnel.Popup(a, false, false,
					NetFunnel.gControl, true, "NetFunnel_Waiting_Popup",
					NetFunnel.gControl.getConfig("popup_zindex"));
			NetFunnel.gWaitPop.show()
		}
	},
	getDocumentEntireHeight : function(d) {
		var b = d.body, c = d.documentElement;
		var a = Math.max(b.scrollHeight, b.offsetHeight, c.clientHeight,
				c.scrollHeight, c.offsetHeight);
		return a
	}
};
NetFunnel.Popup = function(f, i, d, b, q, h, n) {
	if (typeof b == "object") {
		this._mWin = b;
		if (typeof b.document == "object") {
			this._mDoc = b.document
		} else {
			this._mWin = window;
			this._mDoc = document
		}
	} else {
		this._mWin = window;
		this._mDoc = document
	}
	if (typeof q != "boolean") {
		q = false
	}
	if (typeof h != "string") {
		h = "NetFunnel_Loading_Popup"
	}
	if (typeof n != "undefined" && !isNaN(n)) {
		this._mZindex = n
	}
	var o = this._mDoc.getElementsByTagName("BODY")[0];
	if (!o) {
		return
	}
	var c = this._mDoc.getElementById(h);
	if (!c || NetFunnel.SkinUtil.prevID != NetFunnel.gSkinId) {
		c = this._mDoc.createElement("div");
		c.id = h;
		c.style.display = "none";
		c.style.top = 0;
		c.style.left = 0;
		c.innerHTML = f;
		o.appendChild(c);
		var k = this._mDoc
				.getElementById("NetFunnel_Loading_Popup_Progressbar");
		if (k) {
			var m = {
				count : 50,
				interval : 50
			};
			var j = parseInt(k.style.width, 10);
			var l = parseInt(k.style.height, 10);
			if (!isNaN(j)) {
				m.width = j
			}
			if (!isNaN(l)) {
				m.height = l
			}
			var a = new NetFunnel.ProgressBar(k, m, this._mDoc);
			a.show();
			this._mProgress = a
		}
		var e = this._mDoc.getElementById("NetFunnel_Countdown_Stop");
		if (e) {
			e.onclick = NetFunnel.countdown_stop
		}
		this.new_draw = true
	}
	NetFunnel.SkinUtil.prevID = NetFunnel.gSkinId;
	var p = this._mDoc.getElementById("mpopup_bg");
	var g = this._mDoc.getElementById("pop_iframe");
	if (!p) {
		p = this._mDoc.createElement("div");
		p.id = "mpopup_bg";
		p.innerHTML = "<div style='width:100%; height=100%'>&nbsp;</div>";
		p.style.position = "absolute";
		p.style.zIndex = (this._mZindex + 1);
		p.style.top = "0px";
		p.style.left = "0px";
		p.style.width = "100%";
		p.style.height = NetFunnel.PopupUtil
				.getDocumentEntireHeight(this._mDoc)
				+ "px";
		p.style.margin = "0";
		p.style.padding = "0";
		p.style.border = "0px solid black";
		p.fontSize = "0";
		o.appendChild(p)
	}
	if (!g) {
		g = this._mDoc.createElement("iframe");
		g.id = "pop_iframe";
		g.frameborder = "0";
		g.border = "0";
		g.framespacing = "0";
		g.marginheight = "0";
		g.marginwidth = "0";
		if (q) {
			g.style.opacity = "0";
			g.style.filter = "alpha(opacity=0)"
		} else {
			g.style.opacity = "0.5";
			g.style.filter = "alpha(opacity=50)"
		}
		g.style.zIndex = this._mZindex;
		g.style.top = "0px";
		g.style.left = "0px";
		g.style.width = "100%";
		g.style.height = NetFunnel.PopupUtil
				.getDocumentEntireHeight(this._mDoc)
				+ "px";
		g.style.position = "absolute";
		g.style.border = "0px solid #FFFFFF";
		g.style.backgroundColor = "#FFFFFF";
		o = this._mDoc.getElementsByTagName("BODY")[0];
		o.appendChild(g)
	}
	c.style.position = "absolute";
	c.style.visibility = "hidden";
	this._mCount++;
	this._mMask = p;
	this._mPopIFrame = g;
	this._mObj = c;
	this._mTop = i;
	this._mLeft = d;
	this.mid = "mpopup_" + this._mCount;
	this.addListener(this._mWin, "resize", NetFunnel.PopupUtil.resizePopup);
	NetFunnel.gPopup.push(this)
};
NetFunnel.Popup.prototype = new NetFunnel.Event();
NetFunnel.Popup.prototype._mCount = 0;
NetFunnel.Popup.prototype._mid = "";
NetFunnel.Popup.prototype._mWin = window;
NetFunnel.Popup.prototype._mDoc = document;
NetFunnel.Popup.prototype._mObj = null;
NetFunnel.Popup.prototype._mMask = null;
NetFunnel.Popup.prototype._mPopIFrame = null;
NetFunnel.Popup.prototype._mIsShown = false;
NetFunnel.Popup.prototype._mIframeResize = NetFunnel.TS_IFRAME_RESIZE;
NetFunnel.Popup.prototype._mProgress = null;
NetFunnel.Popup.prototype._mZindex = NetFunnel.TS_POPUP_ZINDEX;
NetFunnel.Popup.prototype._setMaskSize = function() {
	var b = this._mDoc.getElementsByTagName("BODY")[0];
	if (!b) {
		return
	}
	var a = 0;
	if (NetFunnel.Util.isSmartPhone() == true) {
		a = NetFunnel.PopupUtil.getViewportHeight(window, this._mDoc)
	} else {
		a = NetFunnel.PopupUtil.getViewportHeight(this._mWin, this._mDoc)
	}
	var d = NetFunnel.PopupUtil.getViewportWidth(this._mWin, this._mDoc);
	var e = 0;
	var c = 0;
	if (a > b.scrollHeight) {
		e = a
	} else {
		e = b.scrollHeight
	}
	if (d > b.scrollWidth) {
		c = d
	} else {
		c = b.scrollWidth
	}
};
NetFunnel.Popup.prototype._centerPopWin = function() {
	if (this._mIsShown) {
		var d = this._mDoc.getElementsByTagName("BODY")[0];
		if (!d) {
			return
		}
		var e;
		if (NetFunnel.Util.isSmartPhone() == true) {
			e = window
		} else {
			if (NetFunnel.BrowserDetect.browser == "Explorer") {
				e = this._mDoc
			} else {
				e = this._mWin
			}
		}
		var a = parseInt(NetFunnel.PopupUtil.getScrollTop(e), 10);
		var c = parseInt(d.scrollLeft, 10);
		this._setMaskSize();
		var b = 0;
		if (NetFunnel.Util.isSmartPhone() == true) {
			b = NetFunnel.PopupUtil.getViewportHeight(window, this._mDoc)
		} else {
			b = NetFunnel.PopupUtil.getViewportHeight(this._mWin, this._mDoc)
		}
		var f = NetFunnel.PopupUtil.getViewportWidth(this._mWin, this._mDoc);
		if (typeof this._mTop == "number") {
			this._mObj.style.top = this._mTop + "px"
		} else {
			this._mObj.style.top = (a + ((b - NetFunnel.PopupUtil
					.getObjHeight(this._mObj)) / 2))
					+ "px"
		}
		if (typeof this._mLeft == "number") {
			this._mObj.style.left = this._mLeft + "px"
		} else {
			this._mObj.style.left = (c + ((f - NetFunnel.PopupUtil
					.getObjWidth(this._mObj)) / 2))
					+ "px"
		}
		if (this._mIframeResize && typeof this._mPopIFrame == "object") {
			this._mPopIFrame.style.top = this._mObj.style.top;
			this._mPopIFrame.style.left = this._mObj.style.left;
			this._mPopIFrame.style.width = this._mObj.style.width;
			this._mPopIFrame.style.height = parseInt(this._mObj.style.height,
					10) + 6
		}
	}
};
NetFunnel.Popup.prototype.getObj = function(a) {
	return this._mDoc.getElementById(a)
};
NetFunnel.Popup.prototype.show = function() {
	var a = this._mDoc.getElementsByTagName("BODY")[0];
	if (!a) {
		return
	}
	a.style.overflow = "auto";
	this._mObj.style.zIndex = this._mZindex + 2;
	this._mObj.style.visibility = "visible";
	this._mObj.style.display = "block";
	this._mMask.style.visiblity = "visible";
	this._mMask.style.display = "block";
	this._mPopIFrame.style.visiblity = "visible";
	this._mPopIFrame.style.display = "block";
	this._mIsShown = true;
	this._centerPopWin()
};
NetFunnel.Popup.prototype.hide = function() {
	var a = this._mDoc.getElementsByTagName("BODY")[0];
	if (!a) {
		return
	}
	a.style.overflow = "auto";
	this._mObj.style.visibility = "hidden";
	this._mObj.style.display = "none";
	this._mMask.style.visiblity = "hidden";
	this._mMask.style.display = "none";
	this._mPopIFrame.style.visiblity = "hidden";
	this._mPopIFrame.style.display = "none";
	this._mIsShown = false
};
NetFunnel.Popup.prototype.destroy = function() {
	var c = this._mDoc.getElementsByTagName("BODY")[0];
	if (!c) {
		return
	}
	var f = NetFunnel.gPopup.length;
	try {
		var a = this._mDoc.getElementById("mpopup_bg");
		c.removeChild(a)
	} catch (h) {
	}
	try {
		var d = this._mDoc.getElementById("pop_iframe");
		c.removeChild(d)
	} catch (h) {
	}
	for (var b = 0; b < f; b++) {
		var g = NetFunnel.gPopup.pop();
		if (g.mid == this.mid) {
			try {
				c.removeChild(g._mObj)
			} catch (h) {
			}
			continue
		}
		NetFunnel.gPopup.push(g)
	}
	if (this._mProgress) {
		this._mProgress.hide()
	}
};
NetFunnel.RetVal = function(a) {
	this._mParam = {};
	this._mRtype = parseInt(a.substr(0, 4), 10);
	this._mCode = parseInt(a.substr(5, 3), 10);
	this._mRetStr = a.substr(9, a.length - 9);
	this._parse()
};
NetFunnel.RetVal.prototype._ltrim = function(b) {
	var a = 0;
	for (; a < b.length && this._isWhitespace(b.charAt(a)); a++) {
	}
	return b.substring(a, b.length)
};
NetFunnel.RetVal.prototype._rtrim = function(b) {
	var a = b.length - 1;
	for (; a >= 0 && this._isWhitespace(b.charAt(a)); a--) {
	}
	return b.substring(0, a + 1)
};
NetFunnel.RetVal.prototype._trim = function(a) {
	return this._ltrim(this._rtrim(a))
};
NetFunnel.RetVal.prototype._isWhitespace = function(a) {
	var b = " \t\n\r\f";
	return (b.indexOf(a) != -1)
};
NetFunnel.RetVal.prototype._parse = function() {
	var a = "";
	var c = "";
	var d = "";
	var e = this._mRetStr.split("&");
	for (var b = 0; e.length > b; b++) {
		a = e[b].split("=");
		if (a.length > 1) {
			c = this._trim(a[0]);
			d = this._trim(a[1]);
			this._mParam[c] = d
		}
	}
};
NetFunnel.RetVal.prototype.getRetCode = function() {
	return this._mCode
};
NetFunnel.RetVal.prototype.setRetCode = function(a) {
	this._mCode = a;
	return this._mCode
};
NetFunnel.RetVal.prototype.getReqType = function() {
	return this._mRtype
};
NetFunnel.RetVal.prototype.setReqType = function(a) {
	this._mRtype = a;
	return this._mRtype
};
NetFunnel.RetVal.prototype.getRetStr = function() {
	return this._mRetStr
};
NetFunnel.RetVal.prototype.getValue = function(a) {
	try {
		return this._mParam[a]
	} catch (b) {
		return null
	}
};
NetFunnel.RetVal.prototype.setValue = function(b, c) {
	var a = null;
	try {
		if (this.isKeyExist(b)) {
			a = this.getValue(b)
		}
		this._mParam[b] = c;
		return a
	} catch (d) {
		return null
	}
};
NetFunnel.RetVal.prototype.getNumber = function(a) {
	try {
		return parseInt(this._mParam[a], 10)
	} catch (b) {
		return 0
	}
};
NetFunnel.RetVal.prototype.isKeyExist = function(a) {
	try {
		if (this._mParam[a] !== null) {
			return true
		}
	} catch (b) {
	}
	return false
};
NetFunnel.RetVal.prototype.getParam = function() {
	return this._mParam
};
NetFunnel.TsClient = function(b, c) {
	this.mConfig = {};
	this.mConfig.host = NetFunnel.TS_HOST;
	this.mConfig.port = NetFunnel.TS_PORT;
	this.mConfig.proto = NetFunnel.TS_PROTO;
	this.mConfig.query = NetFunnel.TS_QUERY;
	this.mConfig.max_ttl = NetFunnel.TS_MAX_TTL;
	this.mConfig.conn_timeout = NetFunnel.TS_CONN_TIMEOUT;
	this.mConfig.conn_retry = NetFunnel.TS_CONN_RETRY;
	this.mConfig.cookie_id = NetFunnel.TS_COOKIE_ID;
	this.mConfig.cookie_time = NetFunnel.TS_COOKIE_TIME;
	this.mConfig.cookie_domain = NetFunnel.TS_COOKIE_DOMAIN;
	this.mConfig.showcnt_limit = NetFunnel.TS_SHOWCNT_LIMIT;
	this.mConfig.showtime_limit = NetFunnel.TS_SHOWTIME_LIMIT;
	this.mConfig.shownext_limit = NetFunnel.TS_SHOWNEXT_LIMIT;
	this.mConfig.popup_top = NetFunnel.TS_POPUP_TOP;
	this.mConfig.popup_left = NetFunnel.TS_POPUP_LEFT;
	this.mConfig.skin_id = NetFunnel.TS_SKIN_ID;
	this.mConfig.use_unfocus = NetFunnel.TS_USE_UNFOCUS;
	this.mConfig.virt_wait = NetFunnel.TS_VIRT_WAIT;
	this.mConfig.use_mobile_ui = NetFunnel.TS_USE_MOBILE_UI;
	this.mConfig.mp_use = NetFunnel.MP_USE;
	this.mConfig.use_frame_block = NetFunnel.TS_USE_FRAME_BLOCK;
	this.mConfig.frame_block_list = NetFunnel.TS_FRAME_BLOCK_LIST;
	this.mConfig.use_pre_wait = NetFunnel.TS_USE_PRE_WAIT;
	this.mConfig.popup_target = NetFunnel.TS_POPUP_TARGET;
	this.mConfig.user_data = false;
	this.mConfig.user_data_keys = NetFunnel.TS_USER_DATA_KEYS;
	this.mConfig.block_msg = NetFunnel.TS_BLOCK_MSG;
	this.mConfig.block_url = NetFunnel.TS_BLOCK_URL;
	this.mConfig.ipblock_wait_count = NetFunnel.TS_IPBLOCK_WAIT_COUNT;
	this.mConfig.ipblock_wait_time = NetFunnel.TS_IPBLOCK_WAIT_TIME;
	this.mConfig.service_id = NetFunnel.TS_SERVICE_ID;
	this.mConfig.action_id = NetFunnel.TS_ACTION_ID;
	this.mConfig.show_wait_popup = NetFunnel.TS_SHOW_WAIT_POPUP;
	this.mConfig.config_use = NetFunnel.TS_CONFIG_USE;
	this.mConfig.popup_zindex = NetFunnel.TS_POPUP_ZINDEX;
	this.mConfig.ip_error_retry = NetFunnel.TS_IP_ERROR_RETRY;
	this.mConfig._host_changed = false;
	this.mConfig._port_changed = false;
	if (typeof b == "object") {
		for ( var a in b) {
			this.mConfig[a] = b[a];
			if (a == "host") {
				this.mConfig._host_changed = true
			}
			if (a == "port") {
				this.mConfig._port_changed = true
			}
		}
	}
	NetFunnel.gPopupLeft = this.mConfig.popup_left;
	NetFunnel.gPopupTop = this.mConfig.popup_top;
	NetFunnel.gPopupLeft = this.mConfig.popup_left;
	NetFunnel.gBlockList = this.mConfig.block_list;
	if (this.mConfig.skin_id == "") {
		NetFunnel.gSkinId = NetFunnel.TS_SKIN_ID
	} else {
		NetFunnel.gSkinId = this.mConfig.skin_id
	}
	if (typeof this.mConfig.use_unfocus != "boolean") {
		if (typeof this.mConfig.use_unfocus == "string"
				&& this.mConfig.use_unfocus == "true") {
			this.mConfig.use_unfocus = true
		} else {
			this.mConfig.use_unfocus = false
		}
	}
	NetFunnel.gUseUnfocus = this.mConfig.use_unfocus;
	if (typeof this.mConfig.use_mobile_ui != "boolean") {
		if (typeof this.mConfig.use_mobile_ui == "string"
				&& this.mConfig.use_mobile_ui == "true") {
			this.mConfig.use_mobile_ui = true
		} else {
			this.mConfig.use_mobile_ui = false
		}
	}
	NetFunnel.gUseMobileUI = this.mConfig.use_mobile_ui;
	if (typeof this.mConfig.use_frame_block != "boolean") {
		if (typeof this.mConfig.use_frame_block == "string"
				&& this.mConfig.use_frame_block == "true") {
			this.mConfig.use_frame_block = true
		} else {
			this.mConfig.use_frame_block = false
		}
	}
	if (this.mConfig.use_frame_block == true) {
		if (this.mConfig.frame_block_list.length < 1) {
			this.mConfig.frame_block_list = NetFunnel.Util
					.getFrameWindowList(this.mConfig.popup_target)
		}
	} else {
		this.mConfig.frame_block_list = []
	}
	this.id = 0;
	NetFunnel.TsClient._Objects[this.id] = this;
	NetFunnel.TsClient._Count += 1;
	if (c.onSuccess) {
		this.addListener(this, "onSuccess", c.onSuccess)
	}
	if (c.onContinued) {
		this.addListener(this, "onContinued", c.onContinued)
	}
	if (c.onBypass) {
		this.addListener(this, "onBypass", c.onBypass)
	}
	if (c.onBlock) {
		this.addListener(this, "onBlock", c.onBlock)
	}
	if (c.onIpBlock) {
		this.addListener(this, "onIpBlock", c.onIpBlock)
	}
	if (c.onError) {
		this.addListener(this, "onError", c.onError)
	}
	if (c.onStop) {
		this.addListener(this, "onStop", c.onStop)
	}
	if (c.onExpressnumber) {
		this.addListener(this, "onExpressnumber", c.onExpressnumber)
	}
	this.counter[NetFunnel.RTYPE_NONE] = 0;
	this.counter[NetFunnel.RTYPE_GET_TID_CHK_ENTER] = 0;
	this.counter[NetFunnel.RTYPE_GET_TID] = 0;
	this.counter[NetFunnel.RTYPE_CHK_ENTER] = 0;
	this.counter[NetFunnel.RTYPE_ALIVE_NOTICE] = 0;
	this.counter[NetFunnel.RTYPE_SET_COMPLETE] = 0;
	this.counter[NetFunnel.RTYPE_INIT] = 0;
	this.counter[NetFunnel.RTYPE_STOP] = 0;
	this.connTimeout = function d() {
		if (this != NetFunnel.gControl) {
			return d.apply(NetFunnel.gControl, arguments)
		}
		if (NetFunnel.gAlreadyProc != 0) {
			return false
		}
		this._resetScript();
		if (this.counter[this._mReqType] < this.mConfig.conn_retry) {
			this._mStatus = NetFunnel.PS_TIMEOUT;
			this.counter[this._mReqType] += 1;
			switch (this._mReqType) {
			case NetFunnel.RTYPE_GET_TID:
				this.getTicketID(this.user_id, this.user_tid, false);
				return true;
			case NetFunnel.RTYPE_CHK_ENTER:
				this.chkEnter(this.key, false);
				return true;
			case NetFunnel.RTYPE_GET_TID_CHK_ENTER:
				this.getTidChkEnter(this.user_id, this.user_tid, false);
				return true;
			case NetFunnel.RTYPE_ALIVE_NOTICE:
				this.aliveNotice(this.key, "", "", false);
				return true;
			case NetFunnel.RTYPE_SET_COMPLETE:
				this.setComplete(this.key, "", "", false);
				return true;
			default:
			}
		}
		NetFunnel.PopupUtil.hideWaitPopup();
		if (this._mReqType == NetFunnel.RTYPE_CHK_ENTER
				|| this._mReqType == NetFunnel.RTYPE_GET_TID_CHK_ENTER) {
			var e = new NetFunnel.Storage(2);
			e
					.setItem(this.mConfig.cookie_id, "5002:200:key="
							+ NetFunnel.CONN_TIMEOUT_KEY, 1,
							this.mConfig.cookie_domain)
		}
		if (NetFunnel.gAlreadyProc >= 1) {
			return false
		}
		this.fireEvent(null, this, "onError", {
			rtype : this._mReqType,
			code : NetFunnel.kErrorSockConnect,
			data : {
				msg : "Connection Timeout"
			},
			next : this.next.error
		});
		this._mStatus = NetFunnel.PS_ERROR;
		return true
	}
};
NetFunnel.TsClient._Count = 0;
NetFunnel.TsClient._Objects = {};
NetFunnel.TsClient.prototype = new NetFunnel.Event();
NetFunnel.TsClient.prototype._initDone = false;
NetFunnel.TsClient.prototype.id = null;
NetFunnel.TsClient.prototype.mConfig = null;
NetFunnel.TsClient.prototype.key = null;
NetFunnel.TsClient.prototype.script = null;
NetFunnel.TsClient.prototype.alarm = null;
NetFunnel.TsClient.prototype._mReqType = NetFunnel.RTYPE_NONE;
NetFunnel.TsClient.prototype._mMousePos = 0;
NetFunnel.TsClient.prototype._mNoActTime = 0;
NetFunnel.TsClient.prototype._mStatus = NetFunnel.PS_N_RUNNING;
NetFunnel.TsClient.prototype.counter = {};
NetFunnel.TsClient.prototype.next = {
	success : "",
	error : ""
};
NetFunnel.TsClient.prototype.init = function() {
	this._nCount++;
	this._initDone = true
};
NetFunnel.TsClient.prototype.getConfig = function(a) {
	return this.mConfig[a]
};
NetFunnel.TsClient.prototype._isNoAction = function() {
	if (this._mMousePos == NetFunnel.MouseX) {
		return true
	}
	this._mMousePos = NetFunnel.MouseX;
	return false
};
NetFunnel.TsClient.prototype._resetAlarm = function() {
	if (this.alarm !== null) {
		clearTimeout(this.alarm)
	}
	this.alarm = null
};
NetFunnel.TsClient.prototype._resetRetryTimer = function() {
	if (this.retryTimer !== null) {
		clearTimeout(this.retryTimer)
	}
	this.retryTimer = null
};
NetFunnel.TsClient.prototype._resetScript = function() {
	try {
		if (this.script && typeof this.script == "object") {
			var a = this.script.parentNode;
			if (a && typeof a == "object") {
				a.removeChild(this.script)
			}
		}
	} catch (b) {
	}
	this.script = null
};
NetFunnel.TsClient.prototype.getUserdata = function() {
	try {
		var userdata = "";
		var uKey = this.mConfig.user_data_keys;
		if (typeof this.mConfig.user_data == "string") {
			return this.mConfig.user_data
		}
		if (Object.prototype.toString.call(uKey).slice(8, -1) != "Array") {
			return false
		}
		for (var i = 0; i < uKey.length; i++) {
			var keydata = uKey[i];
			if (typeof keydata != "object") {
				continue
			}
			if (keydata.type == "v") {
				try {
					userdata = eval(keydata.key);
					if (userdata != "") {
						break
					}
				} catch (e) {
				}
			}
			if (keydata.type == "c") {
				userdata = NetFunnel.Cookie.get(keydata.key);
				if (userdata != "") {
					break
				}
			}
		}
		return userdata
	} catch (e) {
		return false
	}
};
NetFunnel.TsClient.prototype._showResult = function() {
	this._resetAlarm();
	if (NetFunnel.gAlreadyProc == 1
			&& NetFunnel.gRtype == NetFunnel.RTYPE_GET_TID_CHK_ENTER) {
		return
	}
	NetFunnel.gAlreadyProc = 1;
	NetFunnel.PopupUtil.hideWaitPopup();
	this.retval = new NetFunnel.RetVal(this.result);
	if (this.retval.getReqType() == NetFunnel.RTYPE_GET_TID_CHK_ENTER) {
		this.retval.setReqType(NetFunnel.RTYPE_CHK_ENTER)
	}
	if (NetFunnel.TS_DEBUG_MODE) {
		NetFunnel.printDebugMsg("recv", this.result)
	}
	NetFunnel.ttl = 0;
	this.counter[this._mReqType] = 0;
	if (this.retval.getRetCode() == NetFunnel.kContinueDebug) {
		NetFunnel.gDebugflag = true
	} else {
		NetFunnel.gDebugflag = false
	}
	switch (this.retval.getReqType()) {
	case NetFunnel.RTYPE_GET_TID:
		this._showResultGetTicketID(this.retval);
		break;
	case NetFunnel.RTYPE_CHK_ENTER:
		this._showResultChkEnter(this.retval);
		break;
	case NetFunnel.RTYPE_ALIVE_NOTICE:
		this._showResultAliveNotice(this.retval);
		break;
	case NetFunnel.RTYPE_SET_COMPLETE:
		this._showResultSetComplete(this.retval);
		break;
	default:
		var a = new NetFunnel.Storage(2);
		a.removeItem(this.mConfig.cookie_id);
		this.fireEvent(null, this, "onError", {
			rtype : NetFunnel.RTYPE_NONE,
			code : this.retval.getRetCode(),
			data : this.retval.getParam(),
			next : this.next.error
		});
		this._mStatus = NetFunnel.PS_ERROR
	}
};
NetFunnel.TsClient.prototype._showResultGetTicketID = function(a) {
	var b = new NetFunnel.Storage(2);
	switch (a.getRetCode()) {
	case NetFunnel.kSuccess:
		b.setItem(this.mConfig.cookie_id, this.result,
				this.mConfig.cookie_time, this.mConfig.cookie_domain);
		this._mStatus = NetFunnel.PS_N_RUNNING;
		this.fireEvent(null, this, "onSuccess", {
			rtype : a.getReqType(),
			code : a.getRetCode(),
			data : a.getParam(),
			next : this.next.success
		});
		break;
	default:
		b.removeItem(this.mConfig.cookie_id);
		this._mStatus = NetFunnel.PS_ERROR;
		this.fireEvent(null, this, "onError", {
			rtype : a.getReqType(),
			code : a.getRetCode(),
			data : a.getParam(),
			next : this.next.error
		})
	}
	return
};
NetFunnel.TsClient.prototype._showResultChkEnter = function(b) {
	var c = this;
	var e = new NetFunnel.Storage(2);
	switch (b.getRetCode()) {
	case NetFunnel.kSuccess:
		e.setItem(this.mConfig.cookie_id, this.result,
				this.mConfig.cookie_time, this.mConfig.cookie_domain);
		this._mStatus = NetFunnel.PS_N_RUNNING;
		NetFunnel.gNWaitTemp = 0;
		NetFunnel.gNWaitCount = 0;
		this.fireEvent(null, this, "onSuccess", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.success
		});
		break;
	case NetFunnel.kContinueDebug:
	case NetFunnel.kContinue:
		this._mStatus = NetFunnel.PS_CONTINUE;
		var a = b.getNumber("ttl");
		if (a > this.mConfig.max_ttl) {
			a = this.mConfig.max_ttl;
			b.setValue("ttl", a)
		}
		var d = b.getNumber("nwait");
		if (NetFunnel.TS_NWAIT_BYPASS) {
			if (NetFunnel.gNWaitTemp == d) {
				NetFunnel.gNWaitCount += 1
			} else {
				NetFunnel.gNWaitTemp = d;
				NetFunnel.gNWaitCount = 0
			}
			if (NetFunnel.TS_MAX_NWAIT_COUNT <= NetFunnel.gNWaitCount) {
				this.fireEvent(null, this, "onSuccess", {
					rtype : b.getReqType(),
					code : b.getRetCode(),
					data : b.getParam(),
					next : this.next.success
				});
				break
			}
		}
		this.fireEvent(null, this, "onContinued", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.continued
		});
		NetFunnel.gAlreadyProc = 0;
		if (a > 0 && this._mStatus != NetFunnel.PS_N_RUNNING) {
			if (this.retryTimer) {
				clearTimeout(this.retryTimer)
			}
			NetFunnel.ttl = a;
			this.retryTimer = setTimeout(function() {
				c.chkEnterCont(c.retval.getValue("key"))
			}, a * 1000)
		}
		break;
	case NetFunnel.kTsBlock:
		this._mStatus = NetFunnel.PS_N_RUNNING;
		e.setItem(this.mConfig.cookie_id, this.result,
				this.mConfig.cookie_time, this.mConfig.cookie_domain);
		this.fireEvent(null, this, "onBlock", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.block
		});
		if (this.retryTimer) {
			clearTimeout(this.retryTimer)
		}
		NetFunnel.ttl = a;
		break;
	case NetFunnel.kTsIpBlock:
		this._mStatus = NetFunnel.PS_N_RUNNING;
		if (this.retryTimer) {
			clearTimeout(this.retryTimer)
		}
		this.fireEvent(null, this, "onIpBlock", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.ipblock
		});
		NetFunnel.gAlreadyProc = 0;
		if (this.mConfig.ipblock_wait_count >= NetFunnel.gIPBlockWaitCount + 1) {
			NetFunnel.gReTimer = setTimeout(function() {
				c.getTidChkEnter(c.user_id, c.user_tid, true)
			}, this.mConfig.ipblock_wait_time)
		} else {
			e.setItem(this.mConfig.cookie_id, this.result,
					this.mConfig.cookie_time, this.mConfig.cookie_domain);
			this._mStatus = NetFunnel.PS_N_RUNNING;
			this.fireEvent(null, this, "onSuccess", {
				rtype : b.getReqType(),
				code : b.getRetCode(),
				data : b.getParam(),
				next : this.next.success
			});
			break
		}
		if (this.mConfig.ipblock_wait_count != 0) {
			NetFunnel.gIPBlockWaitCount += 1
		}
		break;
	case NetFunnel.kTsBypass:
		this._mStatus = NetFunnel.PS_N_RUNNING;
		e.setItem(this.mConfig.cookie_id, this.result,
				this.mConfig.cookie_time, this.mConfig.cookie_domain);
		this.fireEvent(null, this, "onBypass", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.bypass
		});
		break;
	case NetFunnel.kTsExpressNumber:
		this._mStatus = NetFunnel.PS_N_RUNNING;
		e.setItem(this.mConfig.cookie_id, this.result,
				this.mConfig.cookie_time, this.mConfig.cookie_domain);
		this.fireEvent(null, this, "onExpressnumber", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.expressnumber
		});
		break;
	default:
		e.removeItem(this.mConfig.cookie_id);
		this._mStatus = NetFunnel.PS_ERROR;
		if (b.getRetCode() == NetFunnel.kTsErrorInvalidIp
				&& this.mConfig.ip_error_retry == true) {
			NetFunnel.gAlreadyProc = 0;
			this._mStatus = NetFunnel.PS_N_RUNNING;
			NetFunnel.gReTimer = setTimeout(function() {
				c.getTidChkEnter(c.user_id, c.user_tid, true,
						NetFunnel.gTotWait)
			}, 100)
		} else {
			this._mStatus = NetFunnel.PS_ERROR;
			this.fireEvent(null, this, "onError", {
				rtype : b.getReqType(),
				code : b.getRetCode(),
				data : b.getParam(),
				next : this.next.error
			})
		}
	}
	return
};
NetFunnel.TsClient.prototype._showResultAliveNotice = function(b) {
	var d = new NetFunnel.Storage(2);
	switch (b.getRetCode()) {
	case NetFunnel.kSuccess:
		this._mStatus = NetFunnel.PS_N_RUNNING;
		this.fireEvent(null, this, "onSuccess", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.success
		});
		break;
	case NetFunnel.kContinueDebug:
	case NetFunnel.kContinue:
		this._mStatus = NetFunnel.PS_CONTINUE;
		if (this._mNoActTime > this.mConfig.no_action) {
			this.fireEvent(null, this, "onError", {
				rtype : b.getReqType(),
				code : NetFunnel.kTsErrorNoUserAction,
				data : b.getParam(),
				next : this.next.error
			});
			this._mNoActTime = 0;
			this._mStatus = NetFunnel.PS_ERROR;
			break
		}
		var a = b.getNumber("ttl");
		if (a > this.mConfig.max_ttl) {
			a = this.mConfig.max_ttl;
			b.setValue("ttl", a)
		}
		this.fireEvent(null, this, "onContinued", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.continued
		});
		NetFunnel.gAlreadyProc = 0;
		if (a > 0 && this._mStatus != NetFunnel.PS_N_RUNNING) {
			if (this.retryTimer) {
				clearTimeout(this.retryTimer)
			}
			if (this._isNoAction()) {
				this._mNoActTime += a
			} else {
				this._mNoActTime = 0
			}
			d.setItem(this.mConfig.cookie_id, this.result,
					this.mConfig.cookie_time, this.mConfig.cookie_domain);
			var c = this;
			this.retryTimer = setTimeout(function() {
				c.aliveNoticeCont(c.retval.getValue("key"), c.retval
						.getValue("ip"), c.retval.getValue("port"), c.retval
						.getValue("first"))
			}, a * 1000)
		}
		break;
	case NetFunnel.kTsBlock:
		this._mStatus = NetFunnel.PS_N_RUNNING;
		this.fireEvent(null, this, "onBlock", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.block
		});
		break;
	case NetFunnel.kTsExpressNumber:
		this._mStatus = NetFunnel.PS_N_RUNNING;
		this.fireEvent(null, this, "onExpressnumber", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.expressnumber
		});
		break;
	case NetFunnel.kTsBypass:
		this._mStatus = NetFunnel.PS_N_RUNNING;
		this.fireEvent(null, this, "onBypass", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.bypass
		});
		break;
	case NetFunnel.kTsIpBlock:
		this._mStatus = NetFunnel.PS_N_RUNNING;
		this.fireEvent(null, this, "onIpBlock", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.ipblock
		});
		break;
	default:
		if (b.getRetCode() == NetFunnel.kErrorExpiredTime) {
			d.removeItem(this.mConfig.cookie_id)
		}
		this._mStatus = NetFunnel.PS_ERROR;
		this.fireEvent(null, this, "onError", {
			rtype : b.getReqType(),
			code : b.getRetCode(),
			data : b.getParam(),
			next : this.next.error
		})
	}
	return
};
NetFunnel.TsClient.prototype._showResultSetComplete = function(a) {
	var b = new NetFunnel.Storage(2);
	b.removeItem(this.mConfig.cookie_id);
	switch (a.getRetCode()) {
	case NetFunnel.kSuccess:
		this._mStatus = NetFunnel.PS_N_RUNNING;
		this.fireEvent(null, this, "onSuccess", {
			rtype : a.getReqType(),
			code : a.getRetCode(),
			data : a.getParam(),
			next : this.next.success
		});
		break;
	default:
		this._mStatus = NetFunnel.PS_ERROR;
		this.fireEvent(null, this, "onError", {
			rtype : a.getReqType(),
			code : a.getRetCode(),
			data : a.getParam(),
			next : this.next.error
		})
	}
	return
};
NetFunnel.TsClient.prototype._connInit = function(b) {
	this.result = null;
	this._mReqType = b;
	this._resetAlarm();
	this._resetScript();
	this._resetRetryTimer();
	var a = this;
	this.alarm = setTimeout(function() {
		a.connTimeout(0)
	}, parseInt(this.mConfig.conn_timeout, 10) * 1000);
	if (!this.mConfig.host || this.mConfig.host == "") {
		return false
	}
	if (!this.mConfig.port || this.mConfig.port == "") {
		return false
	}
	if (!this.mConfig.query || this.mConfig.query == "") {
		return false
	}
	if (!this.mConfig.service_id || this.mConfig.service_id == "") {
		return false
	}
	if (!this.mConfig.action_id || this.mConfig.action_id == "") {
		return false
	}
	this._mStatus = NetFunnel.PS_RUNNING;
	return true
};
NetFunnel.TsClient.prototype._sendRequest = function(a) {
	this.script = document.createElement("script");
	this.script.src = a;
	var b = document.getElementsByTagName("head").item(0);
	if (NetFunnel.TS_DEBUG_MODE) {
		NetFunnel.printDebugMsg("send", a)
	}
	b.appendChild(this.script);
	return true
};
NetFunnel.TsClient.prototype._sendError = function(c, a) {
	var b = "";
	switch (a) {
	case NetFunnel.kErrorAlready:
		b = "Already running";
		break;
	case NetFunnel.kErrorNoinit:
		b = "Uninitialized object";
		break;
	case NetFunnel.kErrorSystem:
	default:
		b = "System error"
	}
	this.fireEvent(null, this, "onError", {
		rtype : c,
		code : a,
		data : {
			msg : b
		},
		next : this.next.error
	})
};
NetFunnel.TsClient.prototype.setNext = function(a) {
	if (typeof a == "object") {
		this.next = a
	} else {
		try {
			this.next.success = undefined;
			this.next.continued = undefined;
			this.next.bypass = undefined;
			this.next.expressnumber = undefined;
			this.next.block = undefined;
			this.next.ipblock = undefined;
			this.next.error = undefined;
			this.next.stop = undefined
		} catch (b) {
			this.next.success = window.undefined;
			this.next.continued = window.undefined;
			this.next.bypass = window.undefined;
			this.next.expressnumber = window.undefined;
			this.next.block = window.undefined;
			this.next.ipblock = window.undefined;
			this.next.error = window.undefined;
			this.next.stop = window.undefined
		}
	}
};
NetFunnel.TsClient.prototype.sendStop = function(a) {
	if (NetFunnel.TS_BYPASS == true) {
		this.fireEvent(null, this, "onSuccess", {
			rtype : this._mReqType,
			code : NetFunnel.kSuccess,
			data : {},
			next : this.next.success
		});
		return true
	}
	if (a == "undefined") {
		a = true
	}
	if (a) {
		this.counter[NetFunnel.RTYPE_STOP] = 0
	}
	this._resetAlarm();
	this._resetRetryTimer();
	this._resetScript();
	this.fireEvent(null, this, "onSuccess", {
		rtype : this._mReqType,
		code : NetFunnel.kSuccess,
		data : {},
		next : this.next.success
	});
	this._mStatus = NetFunnel.PS_N_RUNNING;
	return true
};
NetFunnel.TsClient.prototype.getTicketID = function(a, f, h) {
	NetFunnel.gPrevWaitTime = -1;
	if (NetFunnel.TS_BYPASS == true) {
		this.fireEvent(null, this, "onSuccess", {
			rtype : this._mReqType,
			code : NetFunnel.kSuccess,
			data : {},
			next : this.next.success
		});
		return true
	}
	if (this.mConfig.use_unfocus == true) {
		NetFunnel.Util.delFocus(this.getConfig("popup_target"))
	}
	NetFunnel.gTotWait = -1;
	NetFunnel.retryData = null;
	var e = (this.mConfig.mp_use == true) ? NetFunnel.MProtect() : 0;
	if (e != 0) {
		this.fireEvent(null, this, "onContinued", {
			rtype : NetFunnel.RTYPE_CHK_ENTER,
			code : NetFunnel.kContinue,
			data : {
				tps : 1,
				eps : 2,
				nwait : (NetFunnel.gControl.getConfig("showcnt_limit") * 2),
				mprotect : e,
				ttl : 10
			}
		});
		if (this.retryTimer) {
			clearTimeout(this.retryTimer)
		}
		NetFunnel.retryData = {
			user_id : a,
			user_tid : f,
			first : h
		};
		var b = this;
		this.retryTimer = setTimeout(function() {
			b.retryFunction(NetFunnel.RTYPE_GET_TID)
		}, this.mConfig.virt_wait);
		return false
	}
	if (h == "undefined") {
		h = true
	}
	if (h) {
		this.counter[NetFunnel.RTYPE_GET_TID] = 0
	}
	if (this._mStatus == NetFunnel.PS_RUNNING) {
		this._sendError(NetFunnel.RTYPE_GET_TID, NetFunnel.kErrorAlready);
		return false
	}
	this.user_id = a;
	this.user_tid = f;
	var d = this.mConfig.proto + "://" + this.mConfig.host + ":"
			+ this.mConfig.port + "/" + this.mConfig.query + "?opcode="
			+ NetFunnel.RTYPE_GET_TID + "&nfid=" + this.id
			+ "&prefix=NetFunnel.gRtype=" + NetFunnel.RTYPE_GET_TID + ";";
	d += "&sid=" + this.mConfig.service_id + "&aid=" + this.mConfig.action_id;
	var c = this.getUserdata();
	if (c != "") {
		d += "&user_data=" + c
	}
	d += "&js=yes";
	var g = new Date();
	d += "&" + g.getTime();
	if (!this._connInit(NetFunnel.RTYPE_GET_TID)) {
		this._sendError(NetFunnel.RTYPE_GET_TID, NetFunnel.kErrorNoinit);
		return false
	}
	this._sendRequest(d);
	return true
};
NetFunnel.TsClient.prototype.chkEnter = function(a, b) {
	if (NetFunnel.TS_BYPASS == true) {
		this.fireEvent(null, this, "onSuccess", {
			rtype : this._mReqType,
			code : NetFunnel.kSuccess,
			data : {},
			next : this.next.success
		});
		return true
	}
	if (this._mStatus == NetFunnel.PS_RUNNING
			|| this._mStatus == NetFunnel.PS_CONTINUE) {
		this._sendError(NetFunnel.RTYPE_CHK_ENTER, NetFunnel.kErrorAlready);
		return false
	}
	return this.chkEnterProc(a, b)
};
NetFunnel.TsClient.prototype.chkEnterCont = function(a, b) {
	if (this._mStatus == NetFunnel.PS_RUNNING) {
		this._sendError(NetFunnel.RTYPE_CHK_ENTER, NetFunnel.kErrorAlready);
		return false
	}
	return this.chkEnterProc(a, b)
};
NetFunnel.TsClient.prototype.chkEnterProc = function(d, g) {
	if (g == "undefined") {
		g = true
	}
	if (g) {
		this.counter[NetFunnel.RTYPE_CHK_ENTER] = 0
	}
	if (!d || d == "") {
		if (this.key) {
			d = this.key
		} else {
			this._sendError(NetFunnel.RTYPE_CHK_ENTER, NetFunnel.kErrorParam);
			return false
		}
	}
	this.key = d;
	var f = this.retval.getValue("ip");
	if (this.mConfig.conn_retry > 1
			&& this.counter[this._mReqType] == (this.mConfig.conn_retry)) {
		f = this.mConfig.config_use
	}
	var a = this.retval.getValue("port");
	var c = "";
	if (f && f != "" && a && a != "" && !this.mConfig.config_use) {
		c = this.mConfig.proto + "://" + f + ":" + a + "/"
	} else {
		c = this.mConfig.proto + "://" + this.mConfig.host + ":"
				+ this.mConfig.port + "/"
	}
	c = c + this.mConfig.query + "?opcode=" + NetFunnel.RTYPE_CHK_ENTER
			+ "&key=" + d + "&nfid=" + this.id + "&prefix=NetFunnel.gRtype="
			+ NetFunnel.RTYPE_CHK_ENTER + ";";
	if (NetFunnel.ttl > 0) {
		c = c + "&ttl=" + NetFunnel.ttl
	}
	c += "&sid=" + this.mConfig.service_id + "&aid=" + this.mConfig.action_id;
	var b = this.getUserdata();
	if (b != "") {
		c += "&user_data=" + b
	}
	c += "&js=yes";
	var e = new Date();
	c += "&" + e.getTime();
	if (!this._connInit(NetFunnel.RTYPE_CHK_ENTER)) {
		this._sendError(NetFunnel.RTYPE_CHK_ENTER, NetFunnel.kErrorNoinit);
		return false
	}
	this._sendRequest(c);
	return true
};
NetFunnel.retryData = null;
NetFunnel.retryFunction = function(b) {
	if (typeof NetFunnel.retryData == "object") {
		var a = NetFunnel.retryData;
		if (b == NetFunnel.RTYPE_GET_TID) {
			NetFunnel.gControl.getTicketID(a.user_id, a.user_tid, a.first)
		} else {
			if (b == NetFunnel.RTYPE_GET_TID_CHK_ENTER) {
				NetFunnel.gControl.getTidChkEnter(a.user_id, a.user_tid,
						a.first)
			}
		}
	}
};
NetFunnel.TsClient.prototype.getTidChkEnter = function(a, c, e, d) {
	NetFunnel.gPrevWaitTime = -1;
	if (NetFunnel.TS_BYPASS == true) {
		this.fireEvent(null, this, "onSuccess", {
			rtype : this._mReqType,
			code : NetFunnel.kSuccess,
			data : {},
			next : this.next.success
		});
		return true
	}
	if (this._mStatus == NetFunnel.PS_RUNNING
			|| this._mStatus == NetFunnel.PS_CONTINUE) {
		this._sendError(NetFunnel.RTYPE_CHK_ENTER, NetFunnel.kErrorAlready);
		return false
	}
	if (this.mConfig.use_unfocus == true) {
		NetFunnel.Util.delFocus(this.getConfig("popup_target"))
	}
	NetFunnel.gTotWait = (d == undefined || isNaN(d)) ? -1 : d;
	NetFunnel.retryData = null;
	var b = (this.mConfig.mp_use == true) ? NetFunnel.MProtect() : 0;
	if (b == 0 && this.mConfig.show_wait_popup == false) {
		if (this.getConfig("use_pre_wait")) {
			NetFunnel.PopupUtil.showWaitPopup()
		}
		return (this.getTidChkEnterProc(a, c, e))
	}
	this.fireEvent(null, this, "onContinued", {
		rtype : NetFunnel.RTYPE_CHK_ENTER,
		code : NetFunnel.kContinue,
		data : {
			tps : 1,
			eps : 2,
			nwait : (NetFunnel.gControl.getConfig("showcnt_limit") * 2),
			mprotect : b,
			ttl : 10
		}
	});
	if (this.retryTimer) {
		clearTimeout(this.retryTimer)
	}
	NetFunnel.retryData = {
		user_id : a,
		user_tid : c,
		first : e
	};
	this.retryTimer = setTimeout(function() {
		NetFunnel.retryFunction(NetFunnel.RTYPE_GET_TID_CHK_ENTER)
	}, this.mConfig.virt_wait);
	return false
};
NetFunnel.TsClient.prototype.getTidChkEnterProc = function(a, d, f) {
	if (f == "undefined") {
		f = true
	}
	if (f) {
		this.counter[NetFunnel.RTYPE_GET_TID_CHK_ENTER] = 0
	}
	this.user_id = a;
	this.user_tid = d;
	var c = this.mConfig.proto + "://" + this.mConfig.host + ":"
			+ this.mConfig.port + "/" + this.mConfig.query + "?opcode="
			+ NetFunnel.RTYPE_GET_TID_CHK_ENTER + "&nfid=" + this.id
			+ "&prefix=NetFunnel.gRtype=" + NetFunnel.RTYPE_GET_TID_CHK_ENTER
			+ ";";
	if (NetFunnel.ttl > 0) {
		c = c + "&ttl=" + NetFunnel.ttl
	}
	c += "&sid=" + this.mConfig.service_id + "&aid=" + this.mConfig.action_id;
	c += "&js=yes";
	var b = this.getUserdata();
	if (b != "") {
		c += "&user_data=" + b
	}
	var e = new Date();
	c += "&" + e.getTime();
	if (!this._connInit(NetFunnel.RTYPE_GET_TID_CHK_ENTER)) {
		this._sendError(NetFunnel.RTYPE_GET_TID_CHK_ENTER,
				NetFunnel.kErrorNoinit);
		return false
	}
	this._sendRequest(c);
	return true
};
NetFunnel.TsClient.prototype.aliveNoticeProc = function(d, g, a, f) {
	if (f == "undefined") {
		f = true
	}
	if (f) {
		this.counter[NetFunnel.RTYPE_ALIVE_NOTICE] = 0
	}
	if (!d || d == "") {
		if (this.key) {
			d = this.key
		} else {
			this
					._sendError(NetFunnel.RTYPE_ALIVE_NOTICE,
							NetFunnel.kErrorParam);
			return false
		}
	}
	this.key = d;
	this.ip = g;
	this.port = a;
	if (this.mConfig.conn_retry > 1
			&& (this.counter[this._mReqType] == this.mConfig.conn_retry)) {
		g = this.mConfig.config_use
	}
	var c = "";
	if (g && g != "" && a && a != "" && !this.mConfig.config_use) {
		this.ip = (this.mConfig._host_changed == false) ? g : this.mConfig.host;
		this.port = (this.mConfig._port_changed == false) ? a
				: this.mConfig.port;
		c = this.mConfig.proto + "://" + this.ip + ":" + this.port + "/"
	} else {
		c = this.mConfig.proto + "://" + this.mConfig.host + ":"
				+ this.mConfig.port + "/"
	}
	c = c + this.mConfig.query + "?opcode=" + NetFunnel.RTYPE_ALIVE_NOTICE
			+ "&key=" + d + "&nfid=" + this.id + "&prefix=NetFunnel.gRtype="
			+ NetFunnel.RTYPE_ALIVE_NOTICE + ";";
	c += "&sid=" + this.mConfig.service_id + "&aid=" + this.mConfig.action_id;
	var b = this.getUserdata();
	if (b != "") {
		c += "&user_data=" + b
	}
	c += "&js=yes";
	var e = new Date();
	c += "&" + e.getTime();
	if (!this._connInit(NetFunnel.RTYPE_ALIVE_NOTICE)) {
		this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE, NetFunnel.kErrorNoinit);
		return false
	}
	this._sendRequest(c);
	return true
};
NetFunnel.TsClient.prototype.aliveNotice = function(b, d, a, c) {
	if (NetFunnel.TS_BYPASS == true) {
		this.fireEvent(null, this, "onSuccess", {
			rtype : this._mReqType,
			code : NetFunnel.kSuccess,
			data : {},
			next : this.next.success
		});
		return true
	}
	if (this._mStatus == NetFunnel.PS_RUNNING
			|| this._mStatus == NetFunnel.PS_CONTINUE) {
		this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE, NetFunnel.kErrorAlready);
		return false
	}
	return this.aliveNoticeProc(b, d, a, c)
};
NetFunnel.TsClient.prototype.aliveNoticeCont = function(b, d, a, c) {
	if (this._mStatus == NetFunnel.PS_RUNNING) {
		this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE, NetFunnel.kErrorAlready);
		return false
	}
	return this.aliveNoticeProc(b, d, a, c)
};
NetFunnel.TsClient.prototype.setComplete = function(h, f, d, e) {
	var i = new NetFunnel.Storage();
	i.setItemStorageOnly("NFMPT.reqCnt", "0");
	if (NetFunnel.TS_BYPASS == true) {
		this.fireEvent(null, this, "onSuccess", {
			rtype : this._mReqType,
			code : NetFunnel.kSuccess,
			data : {},
			next : this.next.success
		});
		return true
	}
	if (e == "undefined") {
		e = true
	}
	if (e) {
		this.counter[NetFunnel.RTYPE_SET_COMPLETE] = 0
	}
	if (this._mStatus == NetFunnel.PS_RUNNING) {
		this._sendError(NetFunnel.RTYPE_SET_COMPLETE, NetFunnel.kErrorAlready);
		return false
	}
	if (!h || h == "") {
		if (this.key) {
			h = this.key
		} else {
			this
					._sendError(NetFunnel.RTYPE_SET_COMPLETE,
							NetFunnel.kErrorParam);
			return false
		}
	}
	this.key = h;
	this.ip = f;
	if (this.mConfig.conn_retry > 1
			&& this.counter[this._mReqType] == (this.mConfig.conn_retry - 1)) {
		f = this.mConfig.config_use
	}
	this.port = d;
	if (h == NetFunnel.CONN_TIMEOUT_KEY) {
		var b = new NetFunnel.RetVal(NetFunnel.RTYPE_SET_COMPLETE + ":"
				+ NetFunnel.kSuccess + ":utime=1");
		this._showResultSetComplete(b);
		return true
	}
	var a = "";
	if (f && f != "" && d && d != "" && !this.mConfig.config_use) {
		this.ip = (this.mConfig._host_changed == false) ? f : this.mConfig.host;
		this.port = (this.mConfig._port_changed == false) ? d
				: this.mConfig.port;
		a = this.mConfig.proto + "://" + this.ip + ":" + this.port + "/"
	} else {
		a = this.mConfig.proto + "://" + this.mConfig.host + ":"
				+ this.mConfig.port + "/"
	}
	a = a + this.mConfig.query + "?opcode=" + NetFunnel.RTYPE_SET_COMPLETE
			+ "&key=" + h + "&nfid=" + this.id + "&prefix=NetFunnel.gRtype="
			+ NetFunnel.RTYPE_SET_COMPLETE + ";";
	var g = this.getUserdata();
	if (g != "") {
		a += "&user_data=" + g
	}
	a += "&js=yes";
	var c = new Date();
	a += "&" + c.getTime();
	if (!this._connInit(NetFunnel.RTYPE_SET_COMPLETE)) {
		this._sendError(NetFunnel.RTYPE_SET_COMPLETE, NetFunnel.kErrorNoinit);
		return false
	}
	this._sendRequest(a);
	return true
};
NetFunnel.TsClient.prototype.cookieExist = function() {
	var d = new NetFunnel.Storage(2);
	var a = d.getItem(this.mConfig.cookie_id);
	if (a == false || a == "") {
		return false
	}
	var b = new NetFunnel.RetVal(a);
	var c = b.getValue("key");
	if (!c) {
		d.removeItem(this.mConfig.cookie_id);
		return false
	}
	return true
};
NetFunnel.TsClient.prototype.isRunning = function() {
	if (this._mStatus == NetFunnel.PS_RUNNING
			|| this._mStatus == NetFunnel.PS_CONTINUE) {
		return true
	}
	return false
};
function NetFunnel_init(c, a, b) {
	if (NetFunnel.gControl) {
		NetFunnel.gControl._resetScript();
		NetFunnel.gControl = null
	}
	if (typeof b == "undefined") {
		b = NetFunnel.DefaultCallback
	} else {
		if (!b.onSuccess) {
			b.onSuccess = NetFunnel.DefaultCallback.onSuccess
		}
		if (!b.onContinued) {
			b.onContinued = NetFunnel.DefaultCallback.onContinued
		}
		if (!b.onError) {
			b.onError = NetFunnel.DefaultCallback.onError
		}
		if (!b.onStop) {
			b.onStop = NetFunnel.DefaultCallback.onStop
		}
		if (!b.onBypass) {
			b.onBypass = NetFunnel.DefaultCallback.onBypass
		}
		if (!b.onBlock) {
			b.onBlock = NetFunnel.DefaultCallback.onBlock
		}
		if (!b.onExpressnumber) {
			b.onExpressnumber = NetFunnel.DefaultCallback.onExpressnumber
		}
		if (!b.onIpBlock) {
			b.onIpBlock = NetFunnel.DefaultCallback.onIpBlock
		}
	}
	NetFunnel.gControl = new NetFunnel.TsClient(a, b);
	return true
}
function NetFunnel_sendStop(a) {
	try {
		if (!NetFunnel.gControl) {
			NetFunnel_init()
		}
		NetFunnel.gAlreadyProc = 0;
		NetFunnel.gControl.setNext(a);
		NetFunnel.gControl.sendStop();
		return true
	} catch (b) {
		return false
	}
}
function NetFunnel_getTicketID(c, a, b) {
	if (!NetFunnel.gControl) {
		NetFunnel_init()
	}
	NetFunnel.gAlreadyProc = 0;
	NetFunnel.gControl.setNext(c);
	NetFunnel.gControl.getTicketID(a, b);
	return true
}
function NetFunnel_chkEnter(d, e) {
	if (!NetFunnel.gControl) {
		NetFunnel_init()
	}
	NetFunnel.gAlreadyProc = 0;
	var c;
	if (typeof e != "undefined" && e.constructor == Object) {
		c = e.key;
		if (!c) {
			return false
		}
	} else {
		var f = new NetFunnel.Storage(2);
		var a = f.getItem(NetFunnel.gControl.mConfig.cookie_id);
		if (a === null || a == "") {
			return false
		}
		var b = new NetFunnel.RetVal(a);
		c = b.getValue("key");
		if (!c) {
			f = new NetFunnel.Storage(2);
			f.removeItem(this.mConfig.cookie_id);
			return false
		}
	}
	NetFunnel.gControl.setNext(d);
	NetFunnel.gControl.chkEnter(c);
	return true
}
function NetFunnel_getTidChkEnter(c, a, b) {
	if (!NetFunnel.gControl) {
		NetFunnel_init()
	}
	NetFunnel.gAlreadyProc = 0;
	NetFunnel.gControl.setNext(c);
	NetFunnel.gControl.getTidChkEnter(a, b);
	return true
}
function NetFunnel_aliveNotice(f, e) {
	try {
		if (!NetFunnel.gControl) {
			NetFunnel_init()
		}
		NetFunnel.gAlreadyProc = 0;
		var h = "";
		var g = "";
		var b = "";
		if (typeof e != "undefined" && e.constructor == Object) {
			h = e.key;
			if (!h) {
				return false
			}
			g = e.ip;
			b = e.port
		} else {
			var d = new NetFunnel.Storage(2);
			var i = d.getItem(NetFunnel.gControl.mConfig.cookie_id);
			if (i === null || i == "") {
				return false
			}
			var a = new NetFunnel.RetVal(i);
			h = a.getValue("key");
			if (!h) {
				d.removeItem(this.mConfig.cookie_id);
				return false
			}
			g = a.getValue("ip");
			b = a.getValue("port")
		}
		NetFunnel.gControl.setNext(f);
		NetFunnel.gControl.aliveNotice(h, g, b);
		return true
	} catch (c) {
		return false
	}
}
function NetFunnel_setComplete(f, e) {
	if (!NetFunnel.gControl) {
		NetFunnel_init()
	}
	NetFunnel.gAlreadyProc = 0;
	NetFunnel.gControl.setNext(f);
	var j = "";
	var g = "";
	var b = "";
	if (typeof e != "undefined" && e.constructor == Object) {
		j = e.key;
		if (!j) {
			NetFunnel.gControl._sendError(NetFunnel.RTYPE_SET_COMPLETE,
					NetFunnel.kErrorSystem);
			return false
		}
		g = e.ip;
		b = e.port
	} else {
		var d = new NetFunnel.Storage(2);
		var k = d.getItem(NetFunnel.gControl.mConfig.cookie_id);
		if (k === null || k == "") {
			NetFunnel.gControl._sendError(NetFunnel.RTYPE_SET_COMPLETE,
					NetFunnel.kErrorSystem);
			return false
		}
		var a = new NetFunnel.RetVal(k);
		var h = a.getRetCode();
		var c = a.getReqType();
		if (h != NetFunnel.kSuccess
				&& h != NetFunnel.kTsBypass
				&& !(c == NetFunnel.RTYPE_ALIVE_NOTICE && h == NetFunnel.kContinue)) {
			var i = new NetFunnel.RetVal(NetFunnel.RTYPE_SET_COMPLETE
					+ ':200:msg="Success"');
			NetFunnel.gControl._showResultSetComplete(i);
			return true
		}
		j = a.getValue("key");
		if (!j) {
			d = new NetFunnel.Storage(2);
			d.removeItem(NetFunnel.gControl.mConfig.cookie_id);
			NetFunnel.gControl._sendError(NetFunnel.RTYPE_SET_COMPLETE,
					NetFunnel.kErrorSystem);
			return false
		}
		g = a.getValue("ip");
		b = a.getValue("port")
	}
	NetFunnel.gControl.setComplete(j, g, b);
	return true
}
function NetFunnel_cookieExist() {
	if (!NetFunnel.gControl) {
		return false
	}
	return NetFunnel.gControl.cookieExist()
}
function NetFunnel_isRunning() {
	if (!NetFunnel.gControl) {
		return false
	}
	return NetFunnel.gControl.isRunning()
}
function NetFunnel_goForm(d, c, a) {
	var e = null;
	if (typeof c == "string") {
		e = document.getElementById(c);
		if (typeof e != "object" || e === null) {
			var b = document.getElementsByName(c);
			e = b[0];
			if (typeof e != "object" || e === null) {
				alert("[NetFUNNEL] Invalid input form");
				return false
			}
		}
	} else {
		if (typeof c == "object") {
			e = c
		} else {
			alert("[NetFUNNEL] Invalid input form");
			return false
		}
	}
	if (typeof a != "function") {
		a = function(g, f) {
			return false
		}
	}
	NetFunnel_init(null, d);
	NetFunnel_getTidChkEnter({
		success : function(g, f) {
			if (e !== null) {
				e.submit()
			}
		},
		error : function(g, f) {
			if (e !== null) {
				e.submit()
			}
		},
		bypass : function(g, f) {
			if (e !== null) {
				e.submit()
			}
		},
		stop : a
	});
	return false
}
function NetFunnel_goUrl(c, a, b) {
	if (typeof a != "string") {
		alert("[NetFUNNEL] Invalid input url");
		return false
	}
	if (typeof b != "function") {
		b = function(e, d) {
			return false
		}
	}
	NetFunnel_init(null, c);
	NetFunnel_getTidChkEnter({
		success : a,
		error : a,
		bypass : a,
		stop : b
	});
	return false
}
function NetFunnel_goFunc(c, b, a) {
	if (typeof b != "function") {
		alert("[NetFUNNEL] Invalid input function");
		return false
	}
	if (typeof a != "function") {
		a = function(e, d) {
			return false
		}
	}
	NetFunnel_init(null, c);
	NetFunnel_getTidChkEnter({
		success : b,
		error : b,
		bypass : b,
		stop : a
	});
	return false
}
function NetFunnel_goComplete(b, a) {
	if (typeof a != "function") {
		a = function(d, c) {
			return false
		}
	}
	NetFunnel_init(null, b);
	NetFunnel_setComplete({
		success : a,
		error : a,
		bypass : a
	});
	return false
}
function NetFunnel_goAliveNotice(b, a) {
	if (typeof a != "function") {
		a = function(d, c) {
			return false
		}
	}
	NetFunnel_init(null, b);
	NetFunnel_aliveNotice({
		success : a,
		error : a,
		bypass : a
	});
	return false
}
function NetFunnel_Action(f, d) {
	var j = null;
	var k = d.success;
	var b = d.continued;
	var i = d.stop;
	var h = d.error;
	var e = d.bypass;
	var c = d.block;
	var g = d.ipblock;
	var a = d.expressnumber;
	if (typeof d.success == "undefined") {
		k = d
	}
	if (typeof k == "object") {
		j = k
	}
	if (typeof i == "undefined") {
		i = function(m, l) {
			return false
		}
	}
	if (typeof h == "undefined") {
		h = k
	}
	if (typeof e == "undefined") {
		e = k
	}
	if (typeof a == "undefined") {
		a = k
	}
	NetFunnel_init(null, f);
	if (j === null) {
		NetFunnel_getTidChkEnter({
			success : k,
			error : h,
			stop : i,
			bypass : e,
			block : c,
			ipblock : g,
			expressnumber : a,
			continued : b
		})
	} else {
		NetFunnel_getTidChkEnter({
			success : function(m, l) {
				if (j !== null) {
					j.submit()
				}
			},
			error : function(m, l) {
				if (j !== null) {
					j.submit()
				}
			},
			bypass : function(m, l) {
				if (j !== null) {
					j.submit()
				}
			},
			expressnumber : function(m, l) {
				if (j !== null) {
					j.submit()
				}
			},
			stop : i,
			block : c,
			ipblock : g,
			continued : b
		})
	}
	return false
}
function NetFunnel_Complete(b, a) {
	if (typeof a != "function") {
		a = function(d, c) {
			return false
		}
	}
	NetFunnel_init(null, b);
	NetFunnel_setComplete({
		success : a,
		error : a,
		bypass : a
	});
	return false
}
function NetFunnel_AliveNotice(f, c) {
	NetFunnel_init(null, f);
	if (typeof c == "function") {
		NetFunnel_aliveNotice({
			success : c,
			error : c,
			bypass : c,
			continued : c
		})
	} else {
		if (typeof c == "object") {
			var j = c.success;
			var b = c.continued;
			var i = c.stop;
			var h = c.error;
			var e = c.bypass;
			var d = c.block;
			var g = c.ipblock;
			var a = c.expressnumber;
			NetFunnel_aliveNotice({
				success : j,
				error : h,
				stop : i,
				bypass : e,
				block : d,
				ipblock : g,
				expressnumber : a,
				continued : b
			})
		} else {
			c = function(l, k) {
				return false
			};
			NetFunnel_aliveNotice({
				success : c,
				error : c,
				bypass : c,
				continued : c
			})
		}
	}
	return false
}
function DefaultCallback_onSuccess(e, b, f) {
	if (navigator.userAgent.toLowerCase().indexOf("chrome") > 0) {
		if (NetFunnel.gPop) {
			var d = f.getConfig("popup_target").document;
			var c = document.createElement("IMG");
			c.src = "data:image/gif;base64," + NetFunnel.gFixelData;
			c.style.position = "absolute";
			c.style.top = "-10px";
			c.style.left = "-10px";
			c.style.display = "none";
			c.onload = function() {
				b.next(e, b);
				var g = d.getElementsByTagName("body")[0];
				g.removeChild(c)
			};
			var a = d.getElementsByTagName("body")[0];
			a.appendChild(c)
		} else {
			b.next(e, b)
		}
	} else {
		b.next(e, b)
	}
	return false
}
if (NetFunnel.TS_AUTO_COMPLETE == true) {
	NetFunnel_Complete()
};