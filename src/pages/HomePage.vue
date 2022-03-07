<template>
  <div class="row">
    <div
      v-for="b in bears"
      :key="b.id"
      class="col-4 p-5 bg-white rounded elevation-3"
    >
      <h1>{{ b.name }}</h1>
      <img
        :src="b.imgUrl"
        alt="CodeWorks Logo"
        class="rounded img-fluid border border-5"
        :class="{
          'border-danger': b.hunger < 20,
          'border-warning': b.hunger < 50,
          'border-success': b.hunger >= 50,
        }"
      />
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="`width: ${b.hunger}%`"
        >
          food in belly
        </div>
      </div>
      <div>{{ b.hunger }}</div>

      <button
        v-if="b.hunger < 100"
        class="btn btn-success w-100"
        @click="feedInService(b.id)"
      >
        Feed {{ b.name }}
      </button>
      <button v-else class="btn btn-warning w-100" @click="exerciseBear(b.id)">
        Exercise {{ b.name }}
      </button>
      <button
        class="btn btn-info w-100"
        :disabled="b.hunger < 80"
        @click="patTheBear(b.catchphrase)"
      >
        Pat {{ b.name }}
      </button>

      <!-- <h4 class="my-5 bg-primary text-dark p-3 rounded text-center shadow">
        {{ b.catchphrase }}
      </h4> -->
    </div>
  </div>
  <div>{{ state.message }}</div>
</template>

<script>
import { computed, reactive, ref } from "@vue/reactivity";
import { logger } from "../utils/Logger";
import { bearsService } from "../services/BearsService";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
export default {
  name: "Home",
  setup() {
    const state = reactive({
      message: "Im like a mini appstate",
    });
    let hunger = ref(0);
    let bearPic = ref(
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/1808/production/_123425160__123355548_273225536_5387239747969927_3174953441515970260_n.jpg"
    );
    return {
      state,
      hunger,
      bearPic,
      bears: computed(() => AppState.bears),
      arrayExample: computed(() => AppState.arrayExample),
      feed() {
        hunger.value++;
        logger.log("feeding", hunger.value);
      },
      feedInService(id) {
        bearsService.feedBear(id);
      },
      exerciseBear(id) {
        bearsService.exerciseBear(id);
      },
      patTheBear(message) {
        Pop.toast(message, "success", "center");
      },
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 100vw;
    > img {
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
