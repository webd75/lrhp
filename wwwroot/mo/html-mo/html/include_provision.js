$(function(){


    var provisionWrap = `

    <section class="provisionWrap">
        <h1>주식회사 롯데렌탈 귀중</h1>
        <p>본인은 「신용정보의 이용 및 보호에 관한 법률」 제33조, 「개인정보보호법」 제15조 등 법령에 의하여 주식회사 롯데렌탈(이하 ‘회사’라 합니다)이 아래와 같은 
            내용으로 자동차 임대차계약서에 기재한 본인의 정보 등을 수집·이용·제공하는 것에 동의합니다. 이 동의서는 계약의 갱신 등으로 변경되는 경우에도 유효합니다.</p>

        <h2>1. 개인(신용)정보의 수집·이용에 관한 동의</h2>
        <p>필요한 최소한의 정보(필수사항)외의 개인(신용)정보 수집·이용에는 동의하지 아니할 수 있습니다</p>
        <h3>가. 수집 · 이용 목적</h3>
        <ul class="agree-list-type1">
            <li>
                <h4>1) 고객 관리 </h4>
                <p>본인확인, 개인식별, 계약 체결 의사 확인, 명의도용 방지, 운전면허 소지 및 연령 등 확인, 고지사항 전달, 고객   문의/불만 처리, 분쟁 조정을 위한 기록 보존, 
                    해피콜(고객만족도 조사), 개인정보 처리 동의에 관한 사항 변경에 대한 동의 수취, 불법행위 제재, 차량을 이용한 범죄 예방, 수사기관/정부기관/행정청/법원 등의
                    적법한 조사, 요구 또는 명령 등에 대한 협조/이행</p>
            </li>
            <li>
                <h4>2) 계약 체결·유지·이행·관리</h4>
                <p>계약 체결/종료 처리, 계약 이행 및 요금 정산/청구/수납/추심, 계약·자동차대여약관위반에 대한 조치, 물품 배송, 도로교통법 위반 등으로 인한 과태료/범칙금 등
                    처리, 사고 처리, 보험계약체결·유지·관리(해지, 변경, 부활, 취소, 조회 등), 보험금 지급·심사, 보험사고 조사(보험사기 조사 포함), 차량 정비/수리/관리, 긴급출동
                    /차량대여·반납/대차 서비스 등 제공, 청구서/명세서/(전자)세금계산서 발송, 우편물 발송, SMS 발송, 기타 인터넷 홈페이지 등에 고지된 수탁자에게 개인정보·
                    거래정보 전산처리 업무, 서비스 제공 등 계약의 이행에 필요한 업무의 위탁</p>
            </li>
            <li>
                <h4>3) 버스·상품 개발·특화 및 품질 개선</h4>
                <p>신규 서비스 상품 개발·특화, 서비스·상품의 유효성 확인, 서비스 품질개선, 이용빈도 파악 및 서비스 이용에 대한 통계·분석</p>
            </li>
            <li>
                <h4>4) 마케팅·광고·홍보 등 활용</h4>
                <p>회사가 제공하는 서비스·상품 또는 회사의 서비스와 회사의 모회사/계열사/협력사/제휴사에서 제공하는 서비스가 제휴·결합된 서비스·상품의 제공 및 안내, 
                    이벤트 정보·혜택 안내 및 참여 정보 제공, 광고성 정보 제공, 제휴 포인트 적립 등의 마케팅활동 및 홍보</p>
            </li>
        </ul>

        <div class="agree-form section-form">
            <strong>본인은 귀사가 상기 목적(마케팅∙광고 ∙홍보 등 활용)으로 본인의 개인(신용)정보를 수집 ∙ 이용하는것에 동의합니다.</strong>
            <div class="agree-form-box form-cont">
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">공동임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">제 2운전자</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="agree-form section-form">
            <strong>본인은 귀사가 상기 목적(마케팅∙광고 ∙홍보 등 활용)으로 본인의 고유식별정보를 수집 ∙ 이용하는것에 동의합니다.</strong>
            <div class="agree-form-box form-cont">
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">공동임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">제 2운전자</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        
        <h3>나. 수집 · 이용 항목</h3>
        <ul class="agree-list-type1">
            <li>1) 필수사항 : 계약 체결 등을 위하여 필수적으로 수집 ∙ 이용되는 최소한의 정보
                <ul class="agree-list-type2">
                    <li>가) 성명, 상호,생년월일, 국적 ∙ 성별(주민등록번호, 외국인등록번호 수집 ∙ 이용동의 시), 사업자등록번호, 주소(자택 ∙ 직장 ∙ 사업장), 연락전화번호(휴대폰 자택 ∙ 직장), 운전면허종류, 면허발급일, 면허증 갱신기간, 이메일주소(전자세금계산서 등 수령시), 직장정보, 고객번호(주식회사 롯데렌탈이 고객관리 목적으로 부여)</li>
                    <li>나) 고유식별정보 : 주민등록번호(여권 ∙ 외국인등록번호), 운전면허번호</li>
                    <li>다) 신용거래정보( 본계약 이전 및 이후의 거래내용 포함) : 리스 및 할부금융, 렌탈, 대출 및 채무보증, 한도 등(개인신용정보 조회시)</li>
                    <li>라) 신용능력정보 : 재산, 채무, 소득의 총액, 납세실적, 신용등급 등 기타 신용거래능력 판단에 필요한 신용거래능력정보(개인신용정보 조회시)</li>
                    <li>마) 신용질서 문란정보 : 신용도 판단에 필요한 연체, 부도, 대지급 또는 허위 기타 부정한 방법에 의한 신용질서 문란행위 등 신용도를 판단할 수 있는 정보(개인신용정보 조회시)</li>
                    <li>바) 거래정보 : 자동차 임대차계약과 관련하여 거래내용을 판단할 수 있는 계약일, 계약기간, 대여료, 대여차량, 거래현황 등 정보</li>
                </ul>
            </li>
            <li>2) 선택사항 : 정보주체가 선택적으로 동의할 수 있는 정보</li>
            <li>3) 이메일주소(단, 전자세금계산서 등 수령시에는 필수적 수집 ∙ 이용), FAX번호, 그 외에 계약서에 기재되거나 고객이 제공한 정보 (주거 및 가족사항, 세대구성, 결혼여부 등</li>
        </ul>

        <h3>다. 보유 및 이용기간</h3>
        <p>개인(신용)정보 수집 ∙ 목적 달성 시까지 또는 본인의 수집 ∙ 이용 동의 철회요청시까지</p>
        <p>단, 수집 ∙이용목적을 달성하거나 본인의 철회요청이 있더라도, 다음의 정보에 대해서는 아래의 명시한 기간동안 보존</p>
        <ul class="agree-list-type1">
            <li>가) 요금정산 ∙ 과태료/범칙금 처리 ∙ 채무 추심 등 계약 이행, 분쟁대비를 위해 필요한 정보는 계약에 따른 거래관계의 종료 후 6개월까지, 미이행/분쟁이 계속될 경우 이행 완료/분쟁 해결시까지</li>
            <li>나) 고객의 불만 또는 분쟁 처리에 관한 기록은 마지막 처리일로부터 5년</li>
            <li>다) 명의도용, 폭행, 협박, 사기, 공갈, 재물손괴, 차량의 무단 담보제공, 무단 처분, 무단 해체, 자동차 등록번호판 교체, 차대번호 훼손 등 불법행위, 차량을 이용한 범죄 등에 관한 기록은 행위일로부터 10년</li>
            <li>라) 상법 등 관련법령에 특별한 규정이 있을 경우 그에의하여 보관</li>
        </ul>

        <h3>라. 동의 거부권 및 불이익</h3>
        <div>
            본인은 위와 같은 본인의 개인(신용)정보 수집 ∙ 이용에 관한 동의를 거부할 권리가 있습니다. 마케팅 ∙ 광고 ∙ 홍보 등 활용을 위한 개인(신용)정보 수집 ∙ 이용 또는 선택적 수집 ∙ 이용에 관한 동의를 거부하는 경우에도 자동차대여 서비스는 제공됩니다. 다만, 계약 체결 등을 위해 필요한 최소한의 개인(신용)정보 수집 ∙ 이용에 관한 동의를 거부하는 경우에는 계약체결 ∙ 유지 ∙ 이행 ∙ 관리 등 불가, 계약관련 정보 및 안내사항 수취불가, 마케팅 ∙ 광고 ∙ 홍보 등 활용을 위한 개인(신용)정보 수집 ∙ 이용 또는 선택적 수집 ∙ 이용에 관란 동의를 거부하는 경우에는 이벤트, 혜택에 대한 정보를 제공받지 못하거나 사은품 ∙ 판촉물 제공, 제휴서비스 이용, 할인 혜택 적용 및 포인트 적립 불가 등의 불이익이 있을 수 있습니다.
        </div>
        <div class="agree-form section-form">
            <strong>본인은 귀사가 위와 같이 본인의 개인(신용)정보를 수집 ∙ 이용하는 것에 동의합니다.</strong>
            <div class="agree-form-box form-cont">
                <h4>계약 체결등을 위하여 필수적으로 수집 ∙ 이용되는 최소한의 정보</h4>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">공동임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">제 2운전자</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="agree-form-box form-cont">
                <h4>정보 주체가 선택적으로 동의할 수 있는 정보</h4>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">공동임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">제 2운전자</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="agree-form-box form-cont">
                <h4>본인은 귀사가 위와 같이 본인의 고유식별정보를<br>수집 ∙ 이용하는 것에 동의합니다.</h4>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">공동임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">제 2운전자</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <h2>2. 개인(신용)정보 제공에 관한 동의</h2>
        <h3>가. 제공받는 자, 제공받는 자의 이용목적, 제공하는 개인정보 항목</h3>
        <ul class="agree-list-type1">
            <li>1) 자동차 보험 관련
                <ul class="agree-list-type2">
                    <li>가) 동부화재해상, LIG손해보험, 메리츠화재,에르고다음다이렉트, 그린화재해상, 현대해상화재보험, 삼성화재해상, AXA손해보험 등 대여차량의 보험을 담당하는 보험회사(보험회사가 추가,변경될 수 있음)에게 차량 사고의 처리 및 보험 보상, 비용 정산(청구), 보험계약체결 ∙ 유지 ∙ 관리(해지, 변경, 부활,취소, 조회 등), 보험금 지급심사, 보험사고 조사(보험사기 조사 포함)를 위하여 다음 나)의 개인정보를 제공</li>
                    <li>나) 필수사항 : 계약 체결 등을 위하여 필수적으로 수집 ∙ 이용 ∙ 제공되는 최소한의 정보
                        <ul>
                            <li>A. 성명, 연락전화번호(휴대폰 ∙ 자택 ∙ 직장)</li>
                            <li>B. 고유식별정보 : 주민등록번호(여권 ∙ 외국인 등록번호), 운전면허번호</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>2) 도로교통법 위반 등으로 인한 과태료/범칙금 등 처리 관련
                <ul class="agree-list-type2">
                    <li>가) 도로교통법 위반 등으로 인한 과태료/범칙금 등에 관한 사항을 통지하거나 처분을 한 경찰서 ∙ 경찰청 관할 관청 등에게 이의 제기, 실제 위반자에 대한 통지 ∙ 처분을 위하여 다음 나)의 개인정보를 제공</li>
                    <li>나) 필수사항 : 계약 체결 등을 위하여 필수적으로 수집 ∙ 이용 ∙ 제공되는 최소한의 정보
                        <ul>
                            <li>A. 성명, 상호, 사업자등록번호, 주소(자택 ∙ 직장 ∙ 사업장), 연락전화번호(휴대폰 ∙ 자택 ∙ 직장</li>
                            <li>B. 고유식별정보 : 주민등록번호(여권 ∙ 외국인 등록번호), 운전면허번호</li>
                            <li>C. 계약정보 : 자동차 임대차 계약서에 기재되어 있는 계약일, 계약기간, 대여료, 대여차량, 계약조건 등 일체의 정보</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

        <h3>나. 보유 및 이용기간</h3>
        <ul class="agree-list-type1">
            <li>1) 개인(신용)정보 제공 목적 달성 시까지 또는 본인의 제공 동의 철회 요청시까지</li>
            <li>2) 단, 제공 목적을 달성하거나 본인의 철회 요청이 있더라도, 다음정보에 대해서는 아래의 명시한 기간동안 보존
                <ul class="agree-list-type2">
                    <li>가) 내부보고, 감사 및 검사, 비용정산(청구), 과태료/범칙금 처리 등 계약이행, 분쟁대비를 위해 필요한 정보는 계약에 따른 거래관계의 종료 후 6개월까지, 미이행/분쟁이 계속될 경우 이행 완료/분쟁 해결시까지</li>
                    <li>나) 보험사기, 명의도용, 차량의 무단 담보제공, 무단 처분, 무단 해제, 자동차 등록번호판 교체, 차대번호 훼손 등 불법행위, 차량을 이용한 범죄 등에 관한 기록은 행위일로부터 10년</li>
                    <li>다) 상법 등 관련 법령에 특별한 규정이 있을경우 그에 의하여 보관</li>
                </ul>
            </li>
        </ul>

        <h3>다. 동의 거부권 및 불이익</h3>
        <ul class="agree-list-type1">
            <li>본인은 위와 같은 본인의 개인(신용)정보 수집
                <ul class="agree-list-type2">
                    <li>이용에 관한 동의를 거부할 권리가 있습니다. 마케팅 ∙ 광고 ∙ 홍보 등 활용을 위한 개인(신용)정보 제공 또는 선택사항의 제공에 관한 동의를 거부하는 경우에도 자동차 대여 서비스는 제공됩니다. 다만, 계약 체결 등을 위해 필요한 최소한의 개인(신용)정보 제공에 관한 동의를 거부하는 경우 계약의 체결 ∙ 유지 ∙ 이행 ∙ 관리 등이 불가능하거나 차량 사고 처리 업무가 지연되는 등의 불이익이 있을 수 있습니다.</li>
                </ul>
            </li>
        </ul>
        <div class="agree-form section-form">
            <strong>본인은 귀사가 위와 같이 본인의 개인(신용)정보를 제공하는 것에 동의합니다.</strong>
            <div class="agree-form-box form-cont">
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">공동임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">제 2운전자</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="agree-form section-form">
            <strong>본인은 귀사가 위와 같이 본인의 고유식별정보를 조회하는 것에 동의합니다.</strong>
            <div class="agree-form-box form-cont">
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">공동임차인</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="list-type-col3">
                        <li><span class="input-tit">제 2운전자</span></li>
                        <li class="inputR">
                            <input type="radio" name="" id="" checked="checked">
                            <label for="">
                                <span>동의함</span>
                            </label>
                        </li>
                        <li class="inputR">
                            <input type="radio" name="" id="">
                            <label for="">
                                <span>동의하지 않음</span>
                            </label>
                        </li>
                    </ul> 
                </div>
            </div>
        </div>

        <p class="t-notice">본 제공 동의 이외에도 회사는 고객이 별도로 동의한 경우, 고객이 동의한 바에 따라 제3자에게 개인(신용)정보를 제공할 수 있으며, 연체, 부도, 대지급 또는 허위 기타 부정한 방법에 의한 신용질서 문란행위 등 신용도를 판단할 수 있는 정보는 「신용정보의 이용 및 보호에 관한 법률시행령」제 28조 제1항에 따라 동의 없이 신용정보 집중기관, 신용조회 회사에게 제공됩니다.</p>

        <div class="agree-form section-form">
            <strong>본인은 귀사가 위와 같이 본인의 고유식별정보를 조회하는 것에 동의합니다.</strong>
            <div class="agree-form-box form-cont">
                <div class="row">
                    <span class="input-tit">임차인</span>
                    <div class="inputT">
                        <ul class="list-type-col3 type2">
                            <li class="inputT">
                                <div class="radio-box">
                                    <select class="selectbox" name="" id="">
                                        <option value="">년</option>
                                        <option value="">2021</option>
                                        <option value="">2020</option>
                                    </select>
                                </div>
                            </li>
                            <li class="inputT">
                                <div class="radio-box">
                                    <select class="selectbox" name="" id="">
                                        <option value="">월</option>
                                        <option value="">1월</option>
                                        <option value="">2월</option>
                                    </select>
                                </div>
                            </li>
                            <li class="inputT">
                                <div class="radio-box">
                                    <select class="selectbox" name="" id="">
                                        <option value="">일</option>
                                        <option value="">1일</option>
                                        <option value="">2일</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="inputT">
                        <input type="text" id="" name="" title="name" placeholder="이름을 입력하세요." value="">
                    </div> 
                </div>
                <div class="row">
                    <span class="input-tit">공동임차인</span>
                    <div class="inputT">
                        <ul class="list-type-col3 type2">
                            <li class="inputT">
                                <div class="radio-box">
                                    <select class="selectbox" name="" id="">
                                        <option value="">년</option>
                                        <option value="">2021</option>
                                        <option value="">2020</option>
                                    </select>
                                </div>
                            </li>
                            <li class="inputT">
                                <div class="radio-box">
                                    <select class="selectbox" name="" id="">
                                        <option value="">월</option>
                                        <option value="">1월</option>
                                        <option value="">2월</option>
                                    </select>
                                </div>
                            </li>
                            <li class="inputT">
                                <div class="radio-box">
                                    <select class="selectbox" name="" id="">
                                        <option value="">일</option>
                                        <option value="">1일</option>
                                        <option value="">2일</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="inputT">
                        <input type="text" id="" name="" title="name" placeholder="이름을 입력하세요." value="">
                    </div> 
                </div>
                <div class="row">
                    <span class="input-tit">제2운전자</span>
                    <div class="inputT">
                        <ul class="list-type-col3 type2">
                            <li class="inputT">
                                <div class="radio-box">
                                    <select class="selectbox" name="" id="">
                                        <option value="">년</option>
                                        <option value="">2021</option>
                                        <option value="">2020</option>
                                    </select>
                                </div>
                            </li>
                            <li class="inputT">
                                <div class="radio-box">
                                    <select class="selectbox" name="" id="">
                                        <option value="">월</option>
                                        <option value="">1월</option>
                                        <option value="">2월</option>
                                    </select>
                                </div>
                            </li>
                            <li class="inputT">
                                <div class="radio-box">
                                    <select class="selectbox" name="" id="">
                                        <option value="">일</option>
                                        <option value="">1일</option>
                                        <option value="">2일</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="inputT">
                        <input type="text" id="" name="" title="name" placeholder="이름을 입력하세요." value="">
                    </div> 
                </div>
            </div>
        </div>
        <p class="t-notice">상기 내용이 변동하는 경우 인터넷 홈페이지(www.lotterentacar.net) 게시 등을 통해 그 내용을 확인하실 수 있습니다.</p>
    </section>
 
    `;

    $(".unit-normal").html(provisionWrap);
    $(".unit-normal .unit-normal").unwrap();

});