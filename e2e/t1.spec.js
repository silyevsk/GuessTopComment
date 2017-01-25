describe('Example', function () {

  beforeEach(function (done) {
    simulator.reloadReactNativeApp(done);
  });

  it('loading exists then disappears', () => {
    expect(element(by.id('PostContainer.loading'))).toExist();
    expect(element(by.id('PostContainer.title'))).toNotExist();
    // expect(element(by.id('PostContainer.title'))).withTimeout(4).toExist();
    // waitFor(element(by.id('PostContainer.title'))).toExist().withTimeout(2);
  });
});
