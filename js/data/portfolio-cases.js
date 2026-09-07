/**
 * Growth Portfolio Cases Data Source (DTO)
 * - Single Responsibility Principle (SRP): Only contains verified empirical data & case specs
 */
export const portfolioCases = [
    {
        number: '01',
        category: 'PERFORMANCE MARKETING',
        period: 'VeryBrits 실무 (기여도 100%)',
        shortTitle: 'Lush 메타 광고 최적화',
        highlightMetric: 'ROAS 4,514% (광고비 -53.5%)',
        title: 'Lush 러쉬 퍼포먼스 광고 최적화 : 타겟팅 재설계 기반 광고비 53.5% 절감 및 Blended ROAS 4,514% 달성',
        summary: '광범위 타겟팅의 높은 빈도(1.83) 피로 누수 문제를 구매 기여도 88.4%의 여성 18~44세 단일 세그먼트로 집중 격리하고, 5종 위닝 소재 A/B 테스트와 네이버 스마트스토어 오가닉 검색 트리거(Search Trigger)를 규명하여 네이버 수수료 0.24% 수준 방어 및 주문 2.7배 성장을 달성했습니다.',
        metrics: [
            { label: 'BLENDED ROAS', value: '4,514% (소액 예산 6.3만 → 284만)', highlight: true },
            { label: 'AD SPEND CUT', value: '53.5%↓ (남성 전환 누수 차단)' },
            { label: 'ORDERS SURGE', value: '주간 99건 → 172건 (+73.7%↑)' },
            { label: 'FEE DEFENSE', value: '네이버 쇼핑 수수료 0.24% 방어' }
        ],
        evidence: [
            {
                tag: 'BEFORE',
                title: '1차 광고: 광범위 타겟팅 세팅으로 빈도 1.83 피로 누적 및 전환 누수',
                src: './assets/lush_07_1차 광고 결과 내용.png',
                alt: 'Lush 1차 광고 결과'
            },
            {
                tag: 'AFTER',
                title: '2차 광고: 여성 18~44 단일화 후 ROAS 4,514% 달성 실측 대시보드',
                src: './assets/lush_10_3월 5일 _ 3월 9일.png',
                alt: 'Lush 2차 광고 ROAS 대시보드'
            },
            {
                tag: 'EVIDENCE',
                title: '스마트스토어 주문 관리자: 5일간 79개 배송 완료 및 주간 172건 주문 폭주',
                src: './assets/lush_22_3월 5일 _ 3월 12일 금요일 _총 7일_ 주문 1.png',
                alt: '스마트스토어 주문 172건 폭주'
            },
            {
                tag: 'EVIDENCE',
                title: '검색 트리거 확인 및 톡톡 CS 매출연동 수수료 0.24% 방어 로그',
                src: './assets/lush_15_1_ 검증__해당 지갑 문의 같은 경우 처음 질문이 재.png',
                alt: '네이버 톡톡 CS 0.24% 수수료 방어'
            }
        ],
        detailLink: '../Portfolio-summary/growth.html',
        detailLinkLabel: 'A4 요약 리포트 검증 ↗'
    },
    {
        number: '02',
        category: 'FULL-FUNNEL CRO & UNIT ECONOMICS',
        period: 'VeryBrits 실무 (기여도 100%)',
        shortTitle: '35명 VoC & 7,900원 CTA 피벗',
        highlightMetric: 'BEP 달성 (마진 87.1%)',
        title: 'Tiptree 팁트리 프리미엄 식품군 풀퍼널 CRO : 35명 전화 VoC 발굴 & 7,900원 가격 투명성 피벗으로 BEP 달성',
        summary: '시중 케찹 대비 15,000원대 초고가 프리미엄 상품의 초기 구매 전환율 0%(이탈 100%) 병목을 극복하기 위해, 영국 현지에서 35명 고객 전원 전화 인터뷰를 직접 단행하여 이탈 요인(유리병 파손 불안 및 가격 불투명성)을 발굴하고, 상세페이지 파손 면책 경고 삭제 및 7,900원 CTA 선제 노출 피벗으로 28병 판매 시점에 광고비 전액 회수(BEP, 마진 87.1%)를 달성했습니다.',
        metrics: [
            { label: 'UNIT ECONOMICS', value: '공헌이익 마진 87.1% 회수', highlight: true },
            { label: 'BEP MILESTONE', value: '28병 판매 시점 광고비 전액 회수' },
            { label: 'QUALITATIVE VOC', value: '35명 고객 전원 국제전화 심층 인터뷰' },
            { label: 'ORGANIC PIPELINE', value: '주간 20개 정기 판매 캐시카우 안착' }
        ],
        evidence: [
            {
                tag: 'BEFORE',
                title: '국내 케찹 시장 4분면 포지셔닝 분석 및 브랜드 검색량 조사',
                src: './assets/tiptree_01_포지션 _가격_브랜드_선호도__.png',
                alt: '케찹 시장 4분면 포지셔닝'
            },
            {
                tag: 'AFTER',
                title: 'Unbounce 랜딩 CTA 7,900원 가격 명시 피벗으로 고관여 구매자 선별',
                src: './assets/tiptree_53_랜딩페이지안의 불필요한 콘텐츠 제거 및 연계판매 퍼널.png',
                alt: '랜딩페이지 7,900원 CTA 피벗'
            },
            {
                tag: 'EVIDENCE',
                title: '상세페이지 파손 면책 경고 삭제 → 네이버 톡톡 100% 안심 케어 자동화',
                src: './assets/tiptree_54_CS 방어로 있었던 상세페이지의 필독사항을 톡톡 일괄발.png',
                alt: 'CS 파손 면책 문구 제거'
            },
            {
                tag: 'EVIDENCE',
                title: '네이버 데이터랩 브랜드별 검색 쿼리 통계 및 잠재 수요 분석',
                src: './assets/tiptree_12_검색어 통계 _하인즈 _ 오뚜기_ _ 블로그.png',
                alt: '네이버 데이터랩 키워드 통계'
            }
        ],
        detailLink: '../Portfolio-summary/growth.html',
        detailLinkLabel: 'A4 요약 리포트 검증 ↗'
    },
    {
        number: '03',
        category: 'TECHNICAL COMMERCE ARCHITECTURE POC',
        period: '개인 엔지니어링 PoC (기여도 100%)',
        shortTitle: 'Django 자사몰 아키텍처 PoC',
        highlightMetric: '1st-Party 로그 통제 & Dual PG',
        title: 'Django E-Commerce : 플랫폼 데이터 사각지대 해소와 결제 전환 최적화를 위한 풀스택 자사몰 PoC',
        summary: '스마트스토어 등 외부 플랫폼의 1st-Party 이벤트 수집 불가(데이터 블랙박스) 및 수기 카드 결제 이탈 한계를 기술적으로 극복하기 위해, 비즈니스 요구사항을 기술 스펙으로 직접 정의하고 Django + Dual PG(카카오페이+PayPal) + 자체 RDBMS 세션 로깅으로 설계하고 검증한 풀스택 아키텍처 PoC입니다.',
        metrics: [
            { label: 'PAYMENT GATEWAY', value: '카카오페이 REST API + PayPal SDK 연동', highlight: true },
            { label: 'CART CONVERSION', value: '게스트 세션 장바구니 100% 무손실 병합' },
            { label: 'REVIEW INTEGRITY', value: 'Order 결제 트랜잭션 DB 완료 검증 가드' },
            { label: '1ST-PARTY DATA', value: 'RDBMS 세션 기반 전 여정 행동 로그 자체 통제' }
        ],
        evidence: [
            {
                tag: 'ARCH',
                title: '카카오페이 REST API + PayPal Global Dual PG 결제 완결 파이프라인',
                mermaidId: 'django-dual-pg'
            },
            {
                tag: 'ARCH',
                title: '게스트 세션 장바구니 로그인 시 자동 병합 (Cart Merge Flow)',
                mermaidId: 'django-cart-merge'
            },
            {
                tag: 'ARCH',
                title: '실구매자 결제 트랜잭션 검증 리뷰 가드 (Review Trust Guard)',
                mermaidId: 'django-review-guard'
            }
        ],
        detailLink: 'https://github.com/ramyo564/Upgrade_Django4',
        detailLinkLabel: 'GitHub 원문 소스코드 검증 ↗'
    }
];
