<template>
  <div style="width:85%">
    <div
      class="appoint-table-container"
      style="padding-bottom: 40px;
    border-radius: 15px;padding: 10%;border-width:1px;border-style:solid;position: relative;"
    >
      <Row>
        <Col span="13">
          
          <P><Icon type="md-card"></Icon> 订单号</P>
        </Col>
        <Col class="order-data" span="11">{{data.id}}</Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span="14">
          <p><Icon type="md-happy" /> 停车员姓名</p>
        </Col>
        <Col class="order-data" span="8">{{data.parkingBoyName}}</Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span="13">
          <p><Icon type="ios-alarm-outline" /> 停车时间</p>
        </Col>
        <Col class="order-data" span="11">{{data.startTime}}</Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span="13">
          <p><Icon type="ios-alarm" /> 取车时间</p>
        </Col>
        <Col class="order-data" span="11">{{data.endTime}}</Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span="13">
          <p><Icon type="logo-yen"></Icon> 费用</p>
        </Col>
        <Col class="order-data" span="11">{{data.cost}}</Col>
      </Row>
    </div>
    <Button icon="ios-car-outline" class="button-fetch" @click="appointPark" type="primary" shape="circle" size="large" style="background-color:#696969;font-family: Microsoft Yahei;font-size: 14px;letter-spacing: 0.pt;">预约取车</Button>
    <Button size="small" icon="ios-power-outline" shape="circle" class="fetch-logout-button" @click="exitLogin" style="border-radius: 40px;"></Button>
  </div>
</template>

<script>
import { fetch } from "../../assets/api/appointParking";
export default {
  data() {
    return {};
  },
  computed: {
    orderData() {
      return this.$store.getters.getParkingOrder;
    }
  },
  props: {
    data: {}
  },
  methods: {
    reverseFetch() {},
    exitLogin() {
      this.$router.push("/login_customer");
    },
    appointPark() {
      if (this.data.parkingBoyName == "") {
        const msg = this.$Message.loading({
          content: "仍在等待停车员接单",
          duration: 0
        });
        setTimeout(msg, 3000);
      } else {
        let vm = this;
        fetch(
          this,
          this.data,
          function(data) {
            vm.$Notice.open({
              title: "取车成功",
              desc: "您的费用是：" + data.cost
            });
            vm.$emit("fetchcar");
          },
          function(err) {}
        );
      }
    }
  }
};
</script>

<style scoped>
@import url("../../assets/styles/appointPark.css");
</style>

