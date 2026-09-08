/**
 * Growth Portfolio Cases Data Source (DTO)
 * - Single Responsibility Principle (SRP): Only contains verified empirical data & case specs
 */
export const portfolioCases = [
    {
        number: '01',
        category: 'PERFORMANCE MARKETING',
        period: 'VeryBrits 실무',
        shortTitle: 'Lush 메타 광고 최적화',
        highlightMetric: 'ROAS 4,514% (광고비 -53.5%)',
        title: 'Lush 러쉬 퍼포먼스 광고 최적화 : 타겟팅 재설계 기반 광고비 53.5% 절감 및 Blended ROAS 4,514% 달성',
        summary: '광범위 타겟팅의 높은 빈도(1.83) 피로 누수 문제를 구매 기여도 88.4%의 여성 18~44세 단일 세그먼트로 집중 격리하고, 5종 위닝 소재 A/B 테스트와 네이버 스마트스토어 오가닉 검색 트리거(Search Trigger)를 규명하여 네이버 수수료 0.24% 수준 방어 및 주문 2.7배 성장을 달성했습니다.',
        metrics: [
            { label: 'BLENDED ROAS', value: '4,514% (주문 전환 172%↑)', highlight: true },
            { label: 'AD SPEND CUT', value: '53.5%↓ (남성 전환 누수 차단)' },
            { label: 'ORDERS SURGE', value: '주간 99건 → 172건 (+73.7%↑)' },
            { label: 'FEE DEFENSE', value: '네이버 쇼핑 수수료 0.24% 방어' }
        ],
        evidence: [
            {
                tag: 'BEFORE',
                title: '1차 광고: 광범위 타겟팅(남녀 13~65세)으로 빈도 1.83 피로 누적 및 전환 누수 대시보드',
                src: './assets/lush_07_1차 광고 결과 내용.png',
                alt: 'Lush 1차 광고 메타 관리자 결과'
            },
            {
                tag: 'AFTER',
                title: '2차 광고: 여성 18~44세 타겟 단일화로 빈도 1.20 안정화 & 광고비 53.5% 절감 실측 대시보드',
                src: './assets/lush_39_결과 값.png',
                alt: 'Lush 2차 광고 메타 관리자 실측 결과'
            },
            {
                tag: 'EVIDENCE',
                title: '2차 위닝 광고 시안: 샴푸 3종 분산 대신 \'더티 바디스프레이\' 36% 파격 할인 단독 소구',
                src: './assets/lush_34_광고시안.png',
                alt: 'Lush 더티 스프레이 위닝 광고 시안'
            },
            {
                tag: 'EVIDENCE',
                title: '스마트스토어 주문 관리자: 2차 광고 집행 기간 더티 스프레이 집중 주문 및 주간 172건 폭주',
                src: './assets/lush_22_3월 5일 _ 3월 12일 금요일 _총 7일_ 주문 1.png',
                alt: '스마트스토어 주문 172건 폭주 실측'
            }
        ],
        detailLink: './case1-lush.html',
        detailLinkLabel: '상세 그로스 전략 & 실측 분석 리포트 보기 ↗'
    },
    {
        number: '02',
        category: 'FULL-FUNNEL CRO & UNIT ECONOMICS',
        period: 'VeryBrits 실무',
        shortTitle: '35명 VoC & 7,900원 CTA 피벗',
        highlightMetric: 'BEP 달성 (마진 87.1%)',
        title: 'Tiptree 팁트리 프리미엄 식품군 풀퍼널 CRO : 35명 전화 VoC 발굴 & 7,900원 가격 투명성 피벗으로 BEP 달성',
        summary: '시중 케찹 대비 15,000원대 초고가 프리미엄 상품의 초기 구매 전환 0건의 이탈 병목을 극복하기 위해, 영국 현지에서 한국 고객 35명 대상 1:1 국제전화 인터뷰를 직접 진행하여 이탈 요인(유리병 파손 불안 및 가격 불투명성)을 발굴하고, 상세페이지 파손 면책 경고 삭제 및 7,900원 CTA 선제 노출 피벗으로 초기 광고비를 전액 조기 회수(BEP, 마진 87.1%)를 달성했습니다.',
        metrics: [
            { label: 'UNIT ECONOMICS', value: '공헌이익 마진 87.1% 회수', highlight: true },
            { label: 'BEP MILESTONE', value: '초기 광고비 전액 조기 회수 (BEP)' },
            { label: 'QUALITATIVE VOC', value: '35명 고객 대상 1:1 국제전화 심층 인터뷰' },
            { label: 'ORGANIC PIPELINE', value: '정기 구매 캐시카우 파이프라인 안착' }
        ],
        evidence: [
            {
                tag: 'BEFORE',
                title: '국내 케찹 시장 4분면 포지셔닝 분석: 초고가(6,166원) 프리미엄 틈새 시장 도출',
                src: './assets/tiptree_01_포지션 _가격_브랜드_선호도__.png',
                alt: '케찹 시장 4분면 포지셔닝 맵'
            },
            {
                tag: 'AFTER',
                title: '고객 VoC 기반 광고 시안: \'100년 전통 영국 왕실 납품 케찹\' 고관여 타겟팅 소구',
                src: './assets/tiptree_56_페이스북 광고시안.png',
                alt: 'Tiptree 영국 왕실 케찹 페이스북 광고시안'
            },
            {
                tag: 'EVIDENCE',
                title: '상세페이지 파손 면책 경고 삭제 → 네이버 톡톡 무상 맞교환 정책 전환으로 이탈 마찰 해소',
                src: './assets/tiptree_54_CS 방어로 있었던 상세페이지의 필독사항을 톡톡 일괄발.png',
                alt: 'CS 파손 면책 문구 제거 및 안심 케어'
            },
            {
                tag: 'EVIDENCE',
                title: '풀퍼널 연계판매 배너: 상세페이지 하단 윌킨앤선즈 다른 소스·잼 모음 교차 판매 퍼널 구축',
                src: './assets/tiptree_55_상세페이지에 있던 이미지를 케찹 연계판매로 상세페이지.png',
                alt: '윌킨앤선즈 소스 및 잼 모음 연계판매 배너'
            }
        ],
        detailLink: './case2-tiptree.html',
        detailLinkLabel: '상세 풀퍼널 CRO & VoC 리포트 보기 ↗'
    },
    {
        number: '03',
        category: 'TECHNICAL COMMERCE ARCHITECTURE POC',
        period: '독립 인프라 PoC',
        shortTitle: 'Django 자사몰 아키텍처 PoC',
        highlightMetric: '1st-Party 로그 통제 & Dual PG',
        title: 'Django E-Commerce : 플랫폼 데이터 사각지대 해소와 결제 전환 최적화를 위한 풀스택 자사몰 PoC',
        summary: '스마트스토어 등 외부 플랫폼의 1st-Party 이벤트 수집 불가(데이터 블랙박스) 및 수기 카드 결제 이탈 한계를 기술적으로 극복하기 위해, 비즈니스 요구사항을 기술 스펙으로 직접 정의하고 Django + Dual PG(카카오페이+PayPal) + 자체 RDBMS 세션 로깅으로 설계하고 검증한 풀스택 아키텍처 PoC입니다.',
        metrics: [
            { label: 'PAYMENT GATEWAY', value: '카카오페이 REST API + PayPal SDK 연동', highlight: true },
            { label: 'CART CONVERSION', value: '게스트 세션 장바구니 무손실 자동 병합' },
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
        detailLink: './case3-django.html',
        detailLinkLabel: '상세 기술 아키텍처 PoC 리포트 보기 ↗'
    },
    {
        number: '04',
        category: 'AI WORKFLOW AUTOMATION & MULTI-AGENT',
        period: '개인 아키텍처 프로젝트',
        shortTitle: 'Overmind V2 AI 멀티 에이전트',
        highlightMetric: '탐색 시간 96.5%↓ (392s → 13.8s)',
        title: 'Overmind V2 : 마케팅 리서치 & 분석 자동화를 위한 AI 멀티 에이전트 오케스트레이션',
        summary: '반복적인 시장 조사, 경쟁사 데이터 분석, 비즈니스 문서 탐색의 긴 리드타임을 단축하기 위해 LangGraph 2계층 Hub-and-Spoke 오케스트레이션, 3-Tier Two-Track 분산 벡터 메모리, 100+ AST 정적 린터 기반으로 설계된 차세대 AI 비즈니스 자동화 플랫폼입니다.',
        metrics: [
            { label: 'SEARCH SPEED', value: '96.5% 단축 (392.0s → 13.8s)', highlight: true },
            { label: 'E2E LATENCY', value: '67.6% 단축 (405.0s → 131.0s)' },
            { label: 'DR RESILIENCE', value: '104단계 장기 세션 무손실 완결' },
            { label: 'FAULT TOLERANCE', value: '1,500+ 회귀 테스트 결함 0건' }
        ],
        evidence: [
            {
                tag: 'ARCH',
                title: 'Overmind V2 4계층 아키텍처 토폴로지 (System Topology)',
                mermaidId: 'overmind-topology'
            }
        ],
        detailLink: 'https://equinox-rambutan-c3e.notion.site/Growth-Overmind-Before-vs-After-3d22b6d94f8881e5813adc0dd89f864c',
        detailLinkLabel: '노션 심층 아키텍처 사양서 보기 ↗'
    }
];
