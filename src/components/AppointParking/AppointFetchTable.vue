<template>
  <div style="width:85%">
    <div
      class="appoint-table-container"
      style="padding-bottom: 40px;
    border-radius: 15px;padding: 10%;border-width:1px;border-style:solid;position: relative;"
    >
      <Row>
        <Col span="13">
          <h2>订单号</h2>
        </Col>
        <Col span="11">{{data.id}}</Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span="16">
          <h2>停车员姓名</h2>
        </Col>
        <Col span="8">{{data.parkingBoyName}}</Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span="13">
          <h2>停车时间</h2>
        </Col>
        <Col span="11">{{data.startTime}}</Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span="13">
          <h2>取车时间</h2>
        </Col>
        <Col span="11">{{data.endTime}}</Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span="13">
          <h2>费用</h2>
        </Col>
        <Col span="11">{{data.cost}}</Col>
      </Row>
    </div>
    <Button class="button-fetch" @click="appointPark">预约取车</Button>
    <Button class="button-fetch" @click="exitLogin">退出登录</Button>
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

