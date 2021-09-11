<template>
  <section>
    <p class="text-h6 text-center text-weight-medium q-mt-xl">
      the best promotions with your easybank card
    </p>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="Easy to pay" label="Easy to pay" />
      <q-tab name="Discounts and promotions" label="Discounts and promotions" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="Easy to pay">
        <div class="content_panel q-gutter-xl">
          <q-card class="content_panel__cardGroup1 q-mb-lg">
            <q-img
              src="~assets/tarjetPage/pagoSinIntereses.jpg"
              spinner-color="primary"
              spinner-size="82px"
              style="max-height: 250px; width: 100%"
            />

            <q-card-section>
              <div class="text-h6 text-weight-bolder">
                interest-free payments
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
          <q-card class="content_panel__cardGroup1">
            <q-img
              src="~assets/tarjetPage/promociones.jpg"
              spinner-color="primary"
              spinner-size="82px"
              style="max-height: 250px; width: 100%"
            />

            <q-card-section>
              <div class="text-h6 text-weight-bolder">Promotions</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </q-tab-panel>

      <!--  -->
      <q-tab-panel name="Discounts and promotions">
        <div class="content_panel content_panel2 q-gutter-xl">
          <q-card class="content_panel__cardGroup2 q-mb-lg">
            <q-img
              src="~assets/tarjetPage/ActivarTarjeta.jpg"
              spinner-color="primary"
              spinner-size="82px"
              style="max-height: 250px; width: 100%"
            />

            <q-card-section>
              <div class="text-h6 text-weight-bolder">
                Activate your card in seconds with the App EasyBank
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none"> </q-card-section>
          </q-card>
          <q-card class="content_panel__cardGroup2">
            <q-img
              src="~assets/tarjetPage/tarjetaControlCel.jpg"
              spinner-color="primary"
              spinner-size="82px"
              style="max-height: 250px; width: 100%"
            />

            <q-card-section>
              <div class="text-h6 text-weight-bolder">
                Take control of your cards on your cell phone
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none"> </q-card-section>
          </q-card>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("Easy to pay"),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
};
</script>

<style lang="sass" scoped>
.content_panel__cardGroup1
  height: 25em
.content_panel__cardGroup2
  height: 20em
@media (min-width: 768px)
  .content_panel
    display: flex
    flex-direction: row
@media (min-width: 1043px)
  .content_panel2
    display: flex
    justify-content: space-evenly
</style>