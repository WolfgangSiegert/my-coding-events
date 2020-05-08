import { mount } from "@vue/test-utils";
import createEvent from "@/views/CreateEvent.vue";

describe("My Create Event Test Suite", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(createEvent);

  // with wrapper.html it's easy to check for the existance an content of elements
  test("WITH get it renders an h1 Element with the content: Create an Event", () => {
    expect(wrapper.get("h1").text()).toBe("Create an Event");
  });

  // with wrapper.html it's easy to check for the existance and content of elements in DOM style
  test("it renders an h1 Element with the content: Create an Event", () => {
    expect(wrapper.html()).toContain("<h1>Create an Event</h1>");
  });

  // it's also easy to check for the existence of elements
  it("has an h1 element", () => {
    expect(wrapper.contains("h1")).toBe(true);
  });
  // the view has to have a form element
  it("has a Form element", () => {
    expect(wrapper.contains("form")).toBe(true);
  });
  // the view's form has to have a title input field
  it("the Form element has an input with name=title and type=text", () => {
    expect(wrapper.contains("input[type='text'][name='title']")).toBe(true);
  });
  // the view's form title input field should have a placeholder saying
  it("the view's form title input field should have a placeholder saying: ", () => {
    const titleInput = wrapper.get("input[name='title']");
    expect(
      //   wrapper.contains(
      //     "input[type='text'][name='title'][placeholder='Add an Event Name']"
      //   )
      // ).toBe(true);
      titleInput.attributes().placeholder
    ).toBe("Add an Event Name");
  });
  // the view should have a submit button
  it("the Form element has an input button with type=submit and showing Create", () => {
    expect(wrapper.contains("input[type='submit'][value='Create']")).toBe(true);
  });
});
