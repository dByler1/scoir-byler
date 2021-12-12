import { mount } from "@vue/test-utils";
import DogCard from "@/components/DogCard.vue";

describe("DogCard", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(DogCard);
    expect(wrapper.vm).toBeTruthy();
  });
});
