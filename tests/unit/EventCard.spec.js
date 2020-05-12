import { mount } from "@vue/test-utils";
import EventCard from "../../src/components/EventCard.vue";
//components/EventCard.vue";

describe("Event Card tests", () => {
  test("It should", () => {
    const wrapper = mount(EventCard);
    expect(wrapper).toBeDefined();
  });
});
