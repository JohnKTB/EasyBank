<template>
  <div class="account">
    <q-icon name="person" size="md" @click="clickIcon" />
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="text-black" style="background: hsl(0, 0%, 98%)">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6 text-weight-bold text-center">Welcome!</div>
        </q-card-section>

        <q-card-section class="q-pt-none text-weight-bold">
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-select
              filled
              dense
              v-model="TypeDoc"
              :options="options"
              label="Type Document"
              behavior="menu"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-input
              filled
              v-model="NumbDoc"
              label="Number Document"
              dense
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn
                label="Submit"
                type="submit"
                color="primary"
                class="text-weight-bold"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import formActions from "../composables/formActions";
export default {
  props: {},
  setup(props, context) {
    const $q = useQuasar();
    const TypeDoc = ref(null);
    const NumbDoc = ref(null);
    const accept = ref(false);
    const dialog = ref(false);
    const { submit } = formActions();

    const onSubmit = () => {
      submit(accept.value);
    };
    const clickIcon = () => {
      dialog.value = true;
      TypeDoc.value = null;
      NumbDoc.value = null;
      accept.value = false;
    };
    return {
      dialog,
      TypeDoc,
      NumbDoc,
      accept,
      onSubmit,
      clickIcon,
      options: [
        "DNI",
        "RUC",
        "Passport",
        "Alien Card",
        "Military Identity Card",
        "Diplomatic Card",
        "Birth Certificate",
        "PTP card",
        "Doc. Country of Origin Identity",
      ],
    };
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
.account
  display: inline-block
</style>