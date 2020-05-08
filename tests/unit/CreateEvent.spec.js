import { mount } from "@vue/test-utils";
import createEvent from "@/views/CreateEvent.vue";

describe("My Create Event Test Suite", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(createEvent);

  // with wrapper.html it's easy to check for the existance an content of elements
  test("WITH get it renders an h1 Element with the content: Create an Event", () => {
    expect(wrapper.get("h1").text("test"));
  });

  // with wrapper.html it's easy to check for the existance and content of elements in DOM style
  test("it renders an h1 Element with the content: Create an Event", () => {
    expect(wrapper.html()).toContain("<h1>Create an Event</h1>");
  });

  // it's also easy to check for the existence of elements
  it("has an h1 element", () => {
    expect(wrapper.contains("h1")).toBe(true);
  });
});
