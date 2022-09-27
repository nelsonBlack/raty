describe('get #score', function () {
  beforeEach(function () {
    $('body').append('<div id="element"></div>');
  });

  afterEach(function () {
    $('#element').remove();
    $('#hint').remove();
  });

  xit('accepts number as string', function () {
    // given
    var raty = new Raty('#element', { score: '1' });

    // when
    raty.init();

    // then
    expect(raty.self.querySelector('input')).toHaveValue('1');
  });

  xit('accepts float string', function () {
    // given
    var raty = new Raty('#element', { score: '1.5' });

    // when
    raty.init();

    // then
    expect(raty.self.querySelector('input')).toHaveValue('1.5');
  });

  context('with integer score', function () {
    xit('gets as int', function () {
      // given
      var raty = new Raty('#element', { score: 1 }).init();

      // when
      var score = raty.score();

      // then
      expect(score).toEqual(1);
    });
  });

  context('with float score', function () {
    xit('gets as float', function () {
      // given
      var raty = new Raty('#element', { score: 1.5 });

      // when
      var score = raty.score();

      // then
      expect(score).toEqual(1.5);
    });
  });

  context('with score zero', function () {
    xit('returns an undefined value because it does not exist', function () {
      // given
      var raty = new Raty('#element', { score: 0 }).init();

      // when
      var score = raty.score();

      // then
      expect(score).toBeUndefined();
    });
  });

  context('with score greater than :numberMax', function () {
    xit('gets the max', function () {
      // given
      var raty = new Raty('#element', { number: 50, score: 50 }).init();

      // when
      var score = raty.score();

      // then
      expect(score).toEqual(raty.opt.numberMax);
    });
  });
});
