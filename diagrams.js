export const diagrams = {
    'django-dual-pg': `
        graph LR
        subgraph Client ["사용자 결제 요청"]
            Cart["장바구니 체크아웃"] --> ChoosePG{"결제수단 선택"}
        end

        subgraph DualPG ["Dual PG 분기 파이프라인"]
            ChoosePG -->|국내 간편결제| Kakao["카카오페이 REST API"]
            ChoosePG -->|글로벌 카드결제| PayPal["PayPal JavaScript SDK"]
        end

        subgraph Contract ["Unified Finalization Contract"]
            Kakao --> Finalize["단일 주문 완결 트랜잭션"]
            PayPal --> Finalize
            Finalize --> SavePay["Payment 결제 데이터 적재"]
            Finalize --> OrderStatus["Order is_ordered = True 갱신"]
            Finalize --> StockDeduct["Product Stock 차감 및 CartItem 비우기"]
        end

        classDef b fill:#161b22,stroke:#58a6ff,color:#c9d1d9;
        classDef o fill:#161b22,stroke:#d29922,color:#c9d1d9;
        classDef g fill:#161b22,stroke:#238636,color:#c9d1d9;
        class Cart,ChoosePG b;
        class Kakao,PayPal o;
        class Finalize,SavePay,OrderStatus,StockDeduct g;
    `,

    'django-cart-merge': `
        graph TB
        Guest["비회원 게스트 접속"] --> GenSession["session cart_id 자동 발급"]
        GenSession --> AddItem["옵션별 CartItem 담기"]
        AddItem --> LoginReq["로그인 요청 (User Auth)"]
        LoginReq --> FetchItems["게스트 CartItem vs 기존 유저 CartItem 조회"]
        FetchItems --> Compare{"동일 옵션/상품 존재 여부"}
        Compare -- Yes --> IncQty["기존 유저 수량에 합산 (Quantity Merge)"]
        Compare -- No --> Rebind["게스트 CartItem 소유권을 유저 ID로 Rebinding"]
        IncQty --> UnifiedCart["통합 장바구니 완성 (이탈 방지 100%)"]
        Rebind --> UnifiedCart

        classDef b fill:#161b22,stroke:#58a6ff,color:#c9d1d9;
        classDef o fill:#161b22,stroke:#d29922,color:#c9d1d9;
        classDef g fill:#161b22,stroke:#238636,color:#c9d1d9;
        class Guest,GenSession,AddItem,LoginReq b;
        class FetchItems,Compare,IncQty,Rebind o;
        class UnifiedCart g;
    `,

    'django-review-guard': `
        graph LR
        User["유저 리뷰 작성 시도"] --> LoginCheck{"로그인 상태인가?"}
        LoginCheck -- No --> Block1["로그인 유도 안내"]
        LoginCheck -- Yes --> OrderCheck{"OrderProduct 실결제 내역 존재하는가?"}
        OrderCheck -- No --> Block2["미구매자 작성 버튼 UI 비활성화 차단"]
        OrderCheck -- Yes --> Allow["리뷰 제출 허용"]
        Allow --> Agg["averageReview 및 countReview 실시간 원장 동기화"]

        classDef b fill:#161b22,stroke:#58a6ff,color:#c9d1d9;
        classDef o fill:#161b22,stroke:#d29922,color:#c9d1d9;
        classDef g fill:#161b22,stroke:#238636,color:#c9d1d9;
        class User,LoginCheck b;
        class Block1,OrderCheck,Block2 o;
        class Allow,Agg g;
    `
};
