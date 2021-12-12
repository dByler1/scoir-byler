import { mount } from "@vue/test-utils";
import SearchLine from "@/components/pages/dog-catcher/SearchLine.vue";

describe("SearchLine", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(SearchLine);
    expect(wrapper.vm).toBeTruthy();
  });
});
