import { mount } from "@vue/test-utils";
import EventCard from "../../src/components/EventCard.vue";
//@/components/EventCard.vue";
//import { getEvents } from "../../src/services/event-service.js";

describe("Event Card tests", () => {
  test("It should be mounted", () => {
    const wrapper = mount(EventCard);
    expect(wrapper).toBeDefined();
  });
  /*   test("It should call getEvents in Service when it is created", () => {
    //const wrapper = mount(EventCard);
    //getEvents.mockReset();
    expect(getEvents).toHaveBeenCalled();
  });
  test("It should set the data property 'events' to the received events when created", () => {
    const wrapper = mount(EventCard);
    getEvents.mockReset();
    getEvents.mockReturnValue(exampleEvents);
    expect(wrapper.vm.events).toEqual(exampleEvents);
  }); */
});
