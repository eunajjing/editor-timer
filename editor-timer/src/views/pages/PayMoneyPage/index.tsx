import React from "react";
import Practice1 from "../../../assets/img/Practice 1.svg";
import { Button } from "antd";
const BootPay = require("bootpay-js");

function payMoney() {
  BootPay.request({
    price: "1000", //실제 결제되는 가격
    application_id: "[ WEB SDK용 Application ID ]",
    name: "블링블링 마스카라", //결제창에서 보여질 이름
    pg: "",
    method: "", //결제수단, 입력하지 않으면 결제수단 선택부터 화면이 시작합니다.
    show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
    items: [
      {
        item_name: "나는 아이템", //상품명
        qty: 1, //수량
        unique: "123", //해당 상품을 구분짓는 primary key
        price: 1000, //상품 단가
        cat1: "TOP", // 대표 상품의 카테고리 상, 50글자 이내
        cat2: "티셔츠", // 대표 상품의 카테고리 중, 50글자 이내
        cat3: "라운드 티" // 대표상품의 카테고리 하, 50글자 이내
      }
    ],
    user_info: {
      username: "사용자 이름",
      email: "사용자 이메일",
      addr: "사용자 주소",
      phone: "010-1234-4567"
    },
    order_id: "고유order_id_1234", //고유 주문번호로, 생성하신 값을 보내주셔야 합니다.
    params: {
      callback1: "그대로 콜백받을 변수 1",
      callback2: "그대로 콜백받을 변수 2",
      customvar1234: "변수명도 마음대로"
    },
    account_expire_at: "2018-05-25", // 가상계좌 입금기간 제한 ( yyyy-mm-dd 포멧으로 입력해주세요. 가상계좌만 적용됩니다. )
    extra: {
      start_at: "2019-05-10", // 정기 결제 시작일 - 시작일을 지정하지 않으면 그 날 당일로부터 결제가 가능한 Billing key 지급
      end_at: "2022-05-10", // 정기결제 만료일 -  기간 없음 - 무제한
      vbank_result: 1, // 가상계좌 사용시 사용, 가상계좌 결과창을 볼지(1), 말지(0), 미설정시 봄(1)
      quota: "0,2,3" // 결제금액이 5만원 이상시 할부개월 허용범위를 설정할 수 있음, [0(일시불), 2개월, 3개월] 허용, 미설정시 12개월까지 허용
    }
  })
    .error(function(data: Error) {
      //결제 진행시 에러가 발생하면 수행됩니다.
      console.log(data);
    })
    .cancel(function(data: any) {
      //결제가 취소되면 수행됩니다.
      console.log(data);
    })
    .ready(function(data: any) {
      // 가상계좌 입금 계좌번호가 발급되면 호출되는 함수입니다.
      console.log(data);
    })
    .close(function(data: any) {
      // 결제창이 닫힐때 수행됩니다. (성공,실패,취소에 상관없이 모두 수행됨)
      console.log(data);
    })
    .done(function(data: any) {
      //결제가 정상적으로 완료되면 수행됩니다
      //비즈니스 로직을 수행하기 전에 결제 유효성 검증을 하시길 추천합니다.
      console.log(data);
    });
}

const PayMoneyPage = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block", height: "50vh" }}>
          <img src={Practice1} />
          <h1>열심히 쓴 글이 삭제되었습니다 👏</h1>
          <h3>
            정해놓은 시간 동안 글을 쓰지 않으셨어요
            <br />
            복구 시 결제가 필요합니다
          </h3>
          <br />
          <br />
          <Button shape="round" size="large" onClick={() => payMoney()}>
            결제하기 💸
          </Button>
        </div>
      </div>
    </>
  );
};

export default PayMoneyPage;
