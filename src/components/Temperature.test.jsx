import Temperature from "./Temperature";

it('renders correctly', ()=> {
    const wrapper = render(
        <Temperature city="Toronto" temp={10} toggleForcast={
            () => {}} />
    )

    expect(wrapper).toMatchSnapshot();

});


it("calls toggle function when clicked ",() => {
    const spy = sinon.spy();
    const wrapper = mount(
        <Temperature city="Toronto" temp={10} toggleForcast={spy} />
    );

    wrapper.find("div").first().simulate("click");

    expect(spy.calldedOnce).toEqual(true);

});