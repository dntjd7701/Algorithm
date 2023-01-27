function solution(chicken) {
   // 쿠폰은 치킨 수 만큼
    let coupon = chicken
    // 서비스 받은 치킨 수
    let service = 0
    // 쿠폰이 10개 이상이라면
    while(coupon >= 10) {
        // 쿠폰을 10으로 나눈 몫만큼 서비스 치킨 추가
        service+=coupon/10 << 0
        // 남은 쿠폰 = coupon%10, 서비스로 주문한 치킨의 쿠폰 수 = coupon/10
        coupon = coupon%10 + coupon/10 << 0
    }
    return service
}