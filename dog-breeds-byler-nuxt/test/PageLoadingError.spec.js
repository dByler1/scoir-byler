import { mount } from "@vue/test-utils";
import PageLoadingError from "@/components/PageLoading/PageLoadingError.vue";

describe("PageLoadingError", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(PageLoadingError);
    expect(wrapper.vm).toBeTruthy();
  });
});
