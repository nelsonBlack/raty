describe('#cancelHint', function () {
  xit('changes the cancel hint', function () {
    // given
    Helper.create('#el');

    // when
    var raty = new Raty('#el', { cancelButton: true, cancelHint: 'double', path: '../lib/images' }).init();

    // then
    expect(raty.self.querySelector('.raty-cancel').title).toEqual('double');
  });

  xit('accepts data attribute', function () {
    // given
    Helper._append('div', { 'data-cancel-hint': 'custom' });

    // when
    var raty = new Raty('[data-cancel-hint]', { path: '../lib/images' }).init();

    // then
    expect(raty.opt.cancelHint).toEqual('custom');
  });
});
