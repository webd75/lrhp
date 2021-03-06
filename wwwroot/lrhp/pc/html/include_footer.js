$(function(){


    var footer = `
		<!--footer 컴포넌트-->
		<footer class="footer">
			
			<div class="footer-link">
				<div class="inner">
					<ul>
						<li>
							<a href="#n" onclick="members.goWithNoAuth('https://direct.lotterentacar.net/main/main.do?utm_source=lotterentacar&utm_medium=footer&utm_campaign=FamilySite&utm_content=신차장다이렉트', 'Y');ga('send', 'event', '풋터', 'goToDirect', '신차장다이렉트');">신차장다이렉트</a>
						</li>
						<li>
							<a href="#n" onclick="members.goWithNoAuth('https://manager.lotterentacar.net/main.do', 'Y');ga('send', 'event', '풋터', '패밀리사이트', '신차장_멤버십랜딩');">신차장멤버십</a>
						</li>
						<li>
							<a href="#n" onclick="members.goWithNoAuth('https://www.lotteautoauction.net/hp/pub/cmm/viewMain.do', 'Y');ga('send', 'event', '풋터', '패밀리사이트', '오토옥션랜딩');">롯데오토옥션</a>				
						</li>
						<li>
							<a href="https://www.lotte-autolease.net" onclick="ga('send', 'event', '풋터', '패밀리사이트', '오토리스랜딩');" target="_blank">롯데오토리스</a>
						</li>
						<li>
							<a href="http://www.greencar.co.kr" onclick="ga('send', 'event', '풋터', '패밀리사이트', '그린카랜딩');" target="_blank">그린카</a>
						</li>
						<li>
							<a href="https://lotterental.com/" onclick="ga('send', 'event', '풋터', '패밀리사이트', '일반랜탈랜딩');" target="_blank">일반렌탈</a>
						</li>
						<li>
							<a href="/kor/recruit/main.do?mnCd=FN0905" target="_blank">인재채용</a>
						</li>
					</ul>
					<div class="family">
						<button type="button" class="btn btn-family family-btn" data-target="family-cont-01" data-on="true" data-siblings="true">FAMILY SITE</button>
						<div class="family-toggle-cont family-cont-01">
							<div class="detail-layer-in">
								<ul class="detail-layer-list-wrap">
									<li>
										<p><a href="#">식품부문</a></p>
										<div class="detail-layer-list">
											<ul>
												<li><a href="#">롯데제과</a></li>
												<li><a href="#">롯데유통사업본부</a></li>
												<li><a href="#">롯데칠성음료</a></li>
												<li><a href="#">롯데칠성음료 주류부문</a></li>
												<li><a href="#">롯데아시히주류</a></li>
												<li><a href="#">롯데푸드</a></li>
												<li><a href="#">롯데리아</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">관광부문</a></p>
										<div class="detail-layer-list">
											<ul>
												<li><a href="#">롯데호텔</a></li>
												<li><a href="#">부산롯데호텔</a></li>
												<li><a href="#">롯데면세점</a></li>
												<li><a href="#">롯데월드</a></li>
												<li><a href="#">롯데물산</a></li>
												<li><a href="#">롯데리조트</a></li>
												<li><a href="#">롯데제이티비</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">금융부문</a></p>
										<div class="detail-layer-list">
											<ul>
												<li><a href="#">롯데카드</a></li>
												<li><a href="#">롯데손해보험</a></li>
												<li><a href="#">롯데캐피탈</a></li>
												<li><a href="#">롯데자이언츠</a></li>
												<li><a href="#">롯데멤버스</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">석유화학/건설/제조 부문</a></p>
										<div class="detail-layer-list">
											<ul>
												<li><a href="#">롯데케미칼</a></li>
												<li><a href="#">케이피켐텍</a></li>
												<li><a href="#">롯데엠알시</a></li>
												<li><a href="#">롯데건설</a></li>
												<li><a href="#">롯데건설 CM사업본부</a></li>
												<li><a href="#">캐논 코리아비즈니스솔루션(주)</a></li>
												<li><a href="#">한국후지필름</a></li>
												<li><a href="#">롯데알미늄</a></li>
												<li><a href="#">롯데기공</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">유통부문</a></p>
										<div class="detail-layer-list">
											<ul>
												<li><a href="#">롯데백화점</a></li>
												<li><a href="#">롯데마트</a></li>
												<li><a href="#">롯데슈퍼</a></li>
												<li><a href="#">롯데시네마</a></li>
												<li><a href="#">롯데홈쇼핑</a></li>
												<li><a href="#">코리아세븐</a></li>
												<li><a href="#">FRL코리아</a></li>
												<li><a href="#">롯데상사</a></li>
												<li><a href="#">롯데닷컴</a></li>
												<li><a href="#">롯데하이마트</a></li>
												<li><a href="#">롭스</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#"></a>서비스/연구/지원 부문</p>
										<div class="detail-layer-list">
											<ul>
												<li><a href="#">롯데정보통신</a></li>
												<li><a href="#">현대정보기술</a></li>
												<li><a href="#">롯데스카이힐C.C</a></li>
												<li><a href="#">대홍기획</a></li>
												<li><a href="#">롯데자산개발</a></li>
												<li><a href="#">롯데로지스틱스</a></li>
												<li><a href="#">롯데피에스넷</a></li>
												<li><a href="#">마이비</a></li>
												<li><a href="#">이비카드</a></li>
												<li><a href="#">롯데중앙연구소</a></li>
												<li><a href="#">롯데인재개발원</a></li>
												<li><a href="#">롯데장학재단</a></li>
												<li><a href="#">롯데복지재단</a></li>
												<li><a href="#">롯데삼동복지재단</a></li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div class="inner">
				<div class="footer-logo">
					<img src="/lrhp/pc/images/common/logo-footer.png" alt="LOTTE rental"/>
				</div>
				<div class="footer-bottom-menu">
					<div class="footer-infos-wrap">
						<div class="sitemap">
							<ul>
								<li><a href="/kor/footer/footerPolicyNew.do?mnCd=FN0901" class="txt_point">개인정보처리방침</a></li>
								<li><a href="/kor/content/190/main.do?mnCd=FN0902" class="txt_point">영상정보처리기기 운영관리방침</a></li>
								<li><a href="/kor/footer/footerTermsNew.do?mnCd=FN0903">이용약관</a></li>
								<li><a href="#" class="layer-refuse-email-open" data-layer="layer-refuse-email">이메일주소무단수집거부</a></li>
								<li><a href="/kor/content/192/main.do?mnCd=FN0908">CONTACT US</a></li>
								<li><a href="/kor/myPage/popCarlifeContract.do?mnCd=FN1008">계약서 조회</a></li>
								<li><a href="/kor/content/183/main.do?mnCd=FN0801" target="_blank">회사소개</a></li>
							</ul>
						</div>
			
						<div class="site-infos">
			
							<div class="information">
								<ul class="entrepreneur-info">
									<li>롯데렌탈㈜ 대표이사 김현수</li>
									<li>
										<ul class="address">
											<li>경기도 안양시 동안구 전파로 88 신원비젼타워 8층 / 서울본사: 서울시 강남구 테헤란로 422 KT타워 6~9층</li>
											<li>사업자등록번호 : <a href="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=2148779183" target="_blank" onclick="window.open(this.href, '', 'toolbar=no,scrollbars=yes,resizable=no,top=50,left=500,width=750,height=700'); return false;" class="btn_entrepreneur_info">214-87-79183</a> / 통신판매업신고번호 : 제2010-경기안양-420호<span><a href="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=2148779183" target="_blank" onclick="window.open(this.href, '', 'toolbar=no,scrollbars=yes,resizable=no,top=50,left=500,width=750,height=700'); return false;" class="btn_entrepreneur_info">사업자 정보 확인</a></span></li>
											<li>해외 82-2-797-8000 / 보험대차 1588-4920 / 일반상품렌탈 1577-5100+1</li>
											<li>copyright ⓒ 2021 LOTTE rental co., ltd.All Rights Reserved.</li>
										</ul>
									</li>
								</ul>
							</div>
							
						</div>
						<div class="footer-infos-bn">
							<div class="footer-infos-bn-box">
								<img src="/lrhp/pc/images/icons/ico-foot-bn.png" alt="업계최초 국내3대 고객만족도 평가 3관왕">
							</div>
							<div class="footer-infos-list">
								<div class="detail-view-list-wrap">
									
									<div class="swiper-container detail-view-list">
										<p class="detail-view-list-tit">롯데렌터카 수상 내역</p>
										<div class="swiper-wrapper">
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded01.png" alt="한국서비스대상 명예의 전당 2015년 명예의 전당 헌정">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded02.png" alt="2019 국가고객만족도  렌터카부문1위 (5년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded03.png" alt="2020 한국산업의 브랜드 파워 1위 (18년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded04.png" alt="대한민국 브랜드 스타 (14년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded05.png" alt="2019 국가브랜드 경쟁력  지수 1위 (8년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded06.png" alt="2019 한국서비스 품질지수 1위 (8년 연속) ">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded07.png" alt="한국산업의 고객만족도 (4년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded08.png" alt="2020 대한민국 퍼스트  브랜드 (16년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded09.png" alt="2019 프리미엄 브랜드 지수 1위 (11년 연속) ">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded10.png" alt="2019 한국품질만족지수 1위 2013년~2015년, 2019년 수상">
											</div>
										</div>
										<div class="swiper-pagination-wrap">
											<div class="swiper-button-next"></div>
											<div class="swiper-button-prev"></div>
											<!-- <div class="swiper-button-play">play</div>
											<div class="swiper-button-pause">stop</div> -->
										</div>
									</div>
								</div>
								
							</div>
							<div class="footer-infos-sns">
								<p>롯데렌터카 공식 SNS 채널</p>
								<ul>
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsK">카카오톡</i></a>
									</li>
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsF">페이스북</i></a>
									</li>
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsI">인스타그램</i></a>
									</li>
									<!-- <li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsY">유튜브</i></a>
									</li> -->
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsP">포스트</i></a>
									</li>
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsB">블로그</i></a>
									</li>
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsT">트위터</i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="footer-center-wrap">
						<div class="footer-center-top">
							<p>고객센터</p>
							<b>
								<a href="tel:1588-1230">1588-1230</a>
							</b>
						</div>
						<div class="footer-center-info">
							평일 08:30 ~ 20:00<br>
							단, 사고처리 문의는 24시간 가능
						</div>
						<div class="footer-center-btn">
							<button type="button" class="btn btn-simple">1:1 고객센터</button>
						</div>
					</div>
					<div class="footer-app-wrap">
						<p>앱 다운로드</p>
						<ul>
							<li><a href="#" target="_blank"><i class="icon app01">Google Play</i></a></li>
							<li><a href="#" target="_blank"><i class="icon app02">App Store</i></a></li>
						</ul>
					</div>
				</div>


			</div>
		</footer>
		<!--//footer 컴포넌트-->

	<!--bg-dimmed 컴포넌트-->
	<div class="bg-dimmed">딤(Dim)처리 배경</div>
	<!--//bg-dimmed 컴포넌트-->

	<div class="fixedRight noLauncher">
        <button type="button" class="btn btn-goTop">탑으로</button>
    </div>

	<!-- 비밀번호 변경 레이어 -->
	<div class="layer-wrap layer-popup layer-mypage layer-password-reenter-info">
		<div class="pop-inner">
			<div class="popup-top">
				<h4>비밀번호 재입력</h4>
				<button type="button" class="layer-popup-close" data-layer="layer-password-reenter-info"><span class="icon pop-close">닫기 버튼</span></button>
			</div>
			<div class="popup-cont layer-iscroll">
				<div class="iscroll-in">

					<div class="icon-guide-area">
						<div class="icon-guide">
							<span class="icon talk3"></span>
							<p>중고차장기렌터카 이용 시 관심 차종만 모아 보실 수 있습니다.</p>
						</div>
					</div>
					<div class="form-cont between-type">
						<div class="form-row">
							<div class="input-cont">
								<div class="inputT">						
									<input type="password" id="" placeholder="비밀번호를 입력해주세요." minlength="8" maxlength="15">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="popup-cont-bot-btns">
					<button type="button" class="btn btn-white layer-popup-close" data-layer="layer-asianaMileageForm">취소</button>		
					<button type="button" class="btn btn-red layer-popup-close" data-layer="layer-asianaMileageForm">확인</button>		
				</div>
			</div>
		</div>
	</div>
	<!-- // 비밀번호 변경 레이어 -->

	<!-- 무단이메일 수집 거부 레이어 -->
	<div class="layer-wrap layer-popup layer-refuse-email">
		<div class="pop-inner">
			<div class="popup-top">
				<h4>무단이메일 수집 거부</h4>
				<button type="button" class="layer-popup-close" data-layer="layer-calculator"><span class="icon pop-close">닫기 버튼</span></button>
			</div>
			<div class="popup-cont layer-iscroll">
				<div class="iscroll-in">
					
					<div class="guide-area">
						<strong>이메일 주소 무단 수집을 거부합니다!</strong>
						<p>본 웹사이트에 게시된 이메일 주소가 전자우편 수집프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며 이를 위반시 정보통신망법에 의해 형사상 처벌됨을 유의하시기 바랍니다.</p>
					</div>
				</div>
				<div class="popup-cont-bot-btn">
					<button type="button" class="btn btn-white layer-popup-close" data-layer="layer-calculator">확인</button>		
				</div>
			</div>
		</div>
	</div>
	<!-- //무단이메일 수집 거부 레이어 -->
    `;

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});