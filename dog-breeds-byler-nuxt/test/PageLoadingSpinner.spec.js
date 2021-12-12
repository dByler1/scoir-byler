import { mount } from "@vue/test-utils";
import PageLoadingSpinner from "@/components/PageLoading/PageLoadingSpinner.vue";

describe("PageLoadingSpinner", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(PageLoadingSpinner);
    expect(wrapper.vm).toBeTruthy();
  });
});
