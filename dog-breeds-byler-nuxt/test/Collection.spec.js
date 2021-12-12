import { mount } from "@vue/test-utils";
import Collection from "@/components/pages/dog-catcher/Collection.vue";

describe("Collection", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Collection);
    expect(wrapper.vm).toBeTruthy();
  });
});
