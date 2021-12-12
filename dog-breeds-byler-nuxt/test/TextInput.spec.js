import { mount } from "@vue/test-utils";
import TextInput from "@/components/TextInput.vue";

describe("TextInput", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(TextInput);
    expect(wrapper.vm).toBeTruthy();
  });
});
