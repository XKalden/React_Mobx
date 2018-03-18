import UiStore from "./UiStore";

it("toggles forecast flag", () => {
    // setup
    UiStore.showForecast = false;


    // run the code 
    UiStore.toggleForecast();


    // ensure it worked
    expect(UiStore.showForecast).toEqual(true);


});
