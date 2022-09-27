describe('#precision', function () {
  beforeEach(function () {
    Helper.create('#el', 'div', { 'data-target': '#target' });

    this.target = Helper.target('#target');
  });

  xit('enables the :half options', function () {
    // given

    // when
    var raty = new Raty('#el', { precision: true });

    // then
    expect(raty.opt.half).toBeTruthy();
  });

  xit('accepts data attribute', function () {
    // given
    Helper._append('div', { 'data-precision': true });

    // when
    var raty = new Raty('#el');

    // then
    expect(raty.opt.precision).toEqual(true);
  });

  context('with :target', function () {
    context('and :targetKeep', function () {
      context('and :targetType as score', function () {
        context('on :score', function () {
          xit('sets the float with one fractional number', function () {
            // given

            // when
            var raty = new Raty('#el', {
              precision: true,
              score: 1.2,
              targetKeep: true,
              targetType: 'score',
              target: function () {
                return this.getAttribute('data-target');
              },
            });

            // then
            expect(this.target).toHaveHtml('1.2');
          });
        });

        context('on mouseover', function () {
          xit('sets the float with one fractional number', function (done) {
            // given
            var that = this;

            var raty = new Raty('#el', {
              precision: true,
              targetKeep: true,
              targetType: 'score',
              target: function () {
                return this.getAttribute('data-target');
              },
            });

            setTimeout(function () {
              // when
              that.el.data('raty').move(1.23);

              // then
              expect(that.target).toHaveHtml('1.2');

              done();
            }, 100);
          });
        });
      });

      context('and :targetType as hint', function () {
        context('on :score', function () {
          context('with one float digit', function () {
            xit('gets the [integer][float] position of :hints', function () {
              // given

              // when
              var raty = new Raty('#el', {
                hints: ['first', ['second']],
                precision: true,
                score: 1.1,
                targetKeep: true,
                targetType: 'hint',
                target: function () {
                  return this.getAttribute('data-target');
                },
              });

              // then
              expect(this.target).toHaveHtml('second');
            });
          });

          context('with integer digit is zero', function () {
            xit('gets the [integer][last item] position of :hints', function () {
              // given

              // when
              var raty = new Raty('#el', {
                hints: ['first', 'second'],
                precision: true,
                score: 0,
                targetKeep: true,
                targetType: 'hint',
                target: function () {
                  return this.getAttribute('data-target');
                },
              });

              // then
              expect(this.target).toHaveHtml('first');
            });
          });

          context('with float digit is zero', function () {
            xit('gets the [integer][last item] position of :hints', function () {
              // given

              // when
              var raty = new Raty('#el', {
                hints: ['first', 'second'],
                precision: true,
                score: 1.0,
                targetKeep: true,
                targetType: 'hint',
                target: function () {
                  return this.getAttribute('data-target');
                },
              });

              // then
              expect(this.target).toHaveHtml('first');
            });
          });

          context('with one float digit as string', function () {
            xit('gets the [integer][float.fixed(1) without decimates] position of :hints', function () {
              // given

              // when
              var raty = new Raty('#el', {
                hints: ['first', ['second']],
                precision: true,
                score: '1.1',
                targetKeep: true,
                targetType: 'hint',
                target: function () {
                  return this.getAttribute('data-target');
                },
              });

              // then
              expect(this.target).toHaveHtml('second');
            });
          });

          context('with two float digits', function () {
            xit('gets the [integer][float.fixed(1) without decimates] position of :hints', function () {
              // given

              // when
              var raty = new Raty('#el', {
                hints: ['first', ['second']],
                precision: true,
                score: 1.19,
                targetKeep: true,
                targetType: 'hint',
                target: function () {
                  return this.getAttribute('data-target');
                },
              });

              // then
              expect(this.target).toHaveHtml('second');
            });
          });

          context('with two float digits as string', function () {
            xit('gets the [integer][float.fixed(1) without decimates] position of :hints', function () {
              // given

              // when
              var raty = new Raty('#el', {
                hints: ['first', ['second']],
                precision: true,
                score: '1.19',
                targetKeep: true,
                targetType: 'hint',
                target: function () {
                  return this.getAttribute('data-target');
                },
              });

              // then
              expect(this.target).toHaveHtml('second');
            });
          });
        });

        context('on mouseover', function () {
          context('with one float digit', function () {
            xit('gets the [integer][float.fixed(1) without decimates] position of :hints', function (done) {
              // given
              var that = this;

              var raty = new Raty('#el', {
                hints: ['first', ['second']],
                precision: true,
                targetKeep: true,
                targetType: 'hint',
                target: function () {
                  return this.getAttribute('data-target');
                },
              });

              setTimeout(function () {
                // when
                that.el.data('raty').move(1.1);

                // then
                expect(that.target).toHaveHtml('second');

                done();
              }, 100);
            });
          });

          context('with two float digits', function () {
            xit('gets the [integer][float.fixed(1) without decimates] position of :hints', function (done) {
              // given
              var that = this;

              var raty = new Raty('#el', {
                hints: ['first', ['second']],
                precision: true,
                targetKeep: true,
                targetType: 'hint',
                target: function () {
                  return this.getAttribute('data-target');
                },
              });

              setTimeout(function () {
                // when
                that.el.data('raty').move(1.19);

                // then
                expect(that.target).toHaveHtml('second');

                done();
              }, 100);
            });
          });
        });

        context('with :cancel', function () {
          xit('shows :cancelHint', function (done) {
            // given
            var that = this;

            var raty = new Raty('#el', {
              cancelButton: true,
              precision: true,
              targetKeep: true,
              targetType: 'hint',
              target: function () {
                return this.getAttribute('data-target');
              },
            });

            var cancel = raty.self.querySelectorAll('.' + raty.opt.cancelClass);

            setTimeout(function () {
              // when
              Helper.trigger(cancel, 'mouseover');

              // then
              expect(that.target).toHaveHtml(that.raty.opt.cancelHint);

              done();
            }, 100);
          });
        });
      });
    });
  });
});
