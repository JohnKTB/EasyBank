import { useQuasar } from "quasar";
const formActions = () => {
  const $q = useQuasar();
  const submit = (element) => {
    if (element !== true) {
      $q.notify({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "You need to accept the license and terms first",
      });
    } else {
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
      });
    }
  };
  return {
    submit,
  };
};

export default formActions;
