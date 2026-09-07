/**
 * Growth Portfolio Configuration (DTO)
 * 오직 프로젝트 고유 데이터(수치, 텍스트, 증거 이미지 경로)만 선언적으로 정의하는 단일 진실 공급원(SSOT)입니다.
 */
import { portfolioCases } from './js/data/portfolio-cases.js';
import { diagrams } from './diagrams.js';

export const portfolioConfig = {
    brand: 'YOHAN · TECHNICAL GROWTH HACKER',
    navLinks: [
        { label: 'Case Studies', href: '#cases' },
        { label: 'Resume (이력서) ↗', href: 'https://equinox-rambutan-c3e.notion.site/3c82b6d94f888125b624ef927dc5131d', target: '_blank' },
        { label: 'Django GitHub ↗', href: 'https://github.com/ramyo564/Upgrade_Django4', target: '_blank' },
        { label: 'GitHub Profile ↗', href: 'https://github.com/ramyo564', target: '_blank' },
        { label: 'Contact', href: 'mailto:yohan032yohan@gmail.com' }
    ],
    hero: {
        kicker: 'Technical Growth Engineering & Full-Funnel Data Verification Console',
        headline: 'Blended ROAS 4,514%.<br>Full-Funnel Data Control.<br>Self-Serve Engineering.',
        description: '직관에 의존하는 마케팅을 지양하고, 풀퍼널 데이터 분석과 엔지니어링 구현력으로 비즈니스 성장을 기계적으로 증명합니다.',
        killerMetrics: [
            { number: '4,514%', label: 'Blended ROAS 달성', desc: '소액 예산 6.3만원 → 매출 284만원' },
            { number: '53.5%↓', label: '광고비 예산 절감', desc: '여성 18~44 타겟 단일화 & 누수 차단' },
            { number: '87.1%', label: 'Unit Economics BEP', desc: '35명 VoC 기반 7,900원 CTA 피벗' },
            { number: '1ST-PARTY', label: '서버사이드 데이터 통제', desc: 'Django + Dual PG 풀스택 자사몰 PoC' }
        ]
    },
    sectionIntro: {
        tag: 'Evidence Showcase',
        headline: '핵심 케이스 스터디 및 실측 팩트 증빙',
        hint: '이미지나 다이어그램을 클릭하면 고해상도 원본으로 정밀 확대 검증할 수 있습니다.'
    },
    cases: portfolioCases,
    diagrams: diagrams
};
