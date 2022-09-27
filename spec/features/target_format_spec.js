describe('#targetFormat', function () {
  beforeEach(function () {
    var body = $('body');

    body.append('<div id="element"></div>');
    body.append('<div id="hint"></div>');
  });

  afterEach(function () {
    $('#element').remove();
    $('#hint').remove();
  });

  xit('stars empty', function () {
    // given
    var raty = new Raty('#element', { target: '#hint', targetFormat: 'score: {score}' }).init();

    // when
    raty.init();

    // then
    expect(document.querySelector('#hint').innerHTML).toEqual('');
  });

  context('on mouseover', function () {
    xit('set target with format on mouseover', function () {
      // given
      var raty = new Raty('#element', { target: '#hint', targetFormat: 'score: {score}' }).init();

      // when
      Helper.trigger(raty.self.querySelector('img'), 'mouseover');

      // then
      expect(document.querySelector('#hint').innerHTML).toEqual('score: bad');
    });
  });

  context('on mouseout', function () {
    xit('clears the target', function () {
      // given
      var raty = new Raty('#element', {
        target: '#hint',
        targetFormat: 'score: {score}',
      }).init();

      // when
      Helper.trigger(raty.self, 'mouseover');
      Helper.trigger(raty.self, 'mouseleave');

      // then
      expect(document.querySelector('#hint').innerText).toEqual('');
    });

    context('with :targetKeep', function () {
      context('without score', function () {
        xit('clears the target', function () {
          // given
          var raty = new Raty('#element', {
            target: '#hint',
            targetFormat: 'score: {score}',
            targetKeep: true,
          }).init();

          // when
          Helper.trigger(raty.self, 'mouseover');
          Helper.trigger(raty.self, 'mouseleave');

          // then
          expect(document.querySelector('#hint').innerHTML).toEqual('');
        });
      });

      context('with score', function () {
        xit('keeps the template', function () {
          // given
          var raty = new Raty('#element', {
            score: 1,
            target: '#hint',
            targetFormat: 'score: {score}',
            targetKeep: true,
          }).init();

          // when
          Helper.trigger(raty.self, 'mouseover');
          Helper.trigger(raty.self, 'mouseleave');

          // then
          expect(document.querySelector('#hint').innerHTML).toEqual('score: bad');
        });
      });
    });
  });
});
