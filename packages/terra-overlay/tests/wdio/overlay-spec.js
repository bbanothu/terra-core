const DEFAULT_TIMEOUT = 3000; // Using default timeout in ms
const SHOULD_NOT_EXIST = true;

Terra.describeViewports('Overlay', ['huge'], () => {
  it('should display default Overlay', () => {
    browser.url('/raw/tests/terra-overlay/overlay/overlay/default-overlay');

    Terra.validates.element('default', { selector: '#default-overlay' });
  });

  it('should display Overlay container', () => {
    browser.url('/raw/tests/terra-overlay/overlay/overlay/container-overlay');

    Terra.validates.element('container', { selector: '#overlay-container' });
  });

  it('should display scrollable full screen Overlay', () => {
    browser.url('/raw/tests/terra-overlay/overlay/overlay/fullscreen-scrollable-overlay');

    Terra.validates.element('scrollable full screen', { selector: '#scrollable-overlay' });
  });

  it('should display scrollable relative container overlay', () => {
    browser.url('/raw/tests/terra-overlay/overlay/overlay/container-scrollable-overlay');

    Terra.validates.element('scrollable relative container', { selector: '#overlay-container' });
  });

  describe('Overlay on Request-Close', () => {
    before(() => {
      browser.url('/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
      $('#root').moveTo({ xOffset: 0, yOffset: 0 });
    });

    describe('OnRequestClose-Full Screen Overlay', () => {
      it('should display closed Overlay', () => {
        Terra.validates.element('closed');
      });

      it('Clicks on the Full screen overlay button', () => {
        $('#trigger_fullscreen').click();
        expect($('#root')).toHaveAttr('inert', ['', 'true']); // chrome returns true, firefox returns ''
        expect($('#root').getAttribute('aria-hidden')).toEqual('true');
      });

      it('Background does not scroll when a fullscreen Overlay is open', () => {
        expect($('html')).toHaveAttributeContaining('style', 'overflow: hidden');
      });

      it('should display an open Overlay', () => {
        Terra.validates.element('open', { selector: '#terra-Overlay--fullscreen' });
      });

      it('closes overlay on escape keydown', () => {
        browser.keys('Escape');
        $('#terra-Overlay--fullscreen').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST});
        expect($('#root')).toHaveAttr('inert', [null, 'false']); // chrome returns false, firefox returns null
        expect($('#root').getAttribute('aria-hidden')).toEqual(null);
      });

      it('reopens the overlay', () => {
        $('#trigger_fullscreen').click();
        $('#terra-Overlay--fullscreen').waitForExist();
        expect($('#root')).toHaveAttr('inert', ['', 'true']); // chrome returns true, firefox returns ''
        expect($('#root').getAttribute('aria-hidden')).toEqual('true');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        $('#terra-Overlay--fullscreen').click();
        $('#terra-Overlay--fullscreen').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST});
        expect($('#root')).toHaveAttr('inert', [null, 'false']); // chrome returns false, firefox returns null
        expect($('#root').getAttribute('aria-hidden')).toEqual(null);
      });
    });

    describe('OnRequestClose-Full Screen Overlay With Updates', () => {
      it('should display closed Overlay', () => {
        Terra.validates.element('closed');
      });

      it('Clicks on the Full screen overlay button', () => {
        $('#trigger_fullscreen').click();
        expect($('#root')).toHaveAttr('inert', ['', 'true']); // chrome returns true, firefox returns ''
        expect($('#root').getAttribute('aria-hidden')).toEqual('true');
        expect($('#root').getAttribute('data-overlay-count')).toEqual('1');
      });

      it('Background does not scroll when a fullscreen Overlay is open', () => {
        expect($('html')).toHaveAttributeContaining('style', 'overflow: hidden')
      });

      it('should display an open Overlay', () => {
        Terra.validates.element('open', { selector: '#terra-Overlay--fullscreen' });
      });

      it('does not increment overlay count during update', () => {
        /* If IE support is removed, convert below to use event constructors. */
        // eslint-disable-next-line prefer-arrow-callback
        browser.execute(function forceUpdateForTest() {
          const updateEvent = document.createEvent('Event');
          updateEvent.initEvent('overlay.forceUpdateForTest', true, true);
          window.dispatchEvent(updateEvent);
        });

        expect($('#root')).toHaveAttr('inert', ['', 'true']); // chrome returns true, firefox returns ''
        expect($('#root').getAttribute('aria-hidden')).toEqual('true');
        expect($('#root').getAttribute('data-overlay-count')).toEqual('1');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        $('#terra-Overlay--fullscreen').click();
        $('#terra-Overlay--fullscreen').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST});
        expect($('#root')).toHaveAttr('inert', [null, 'false']); // chrome returns false, firefox returns null
        expect($('#root').getAttribute('aria-hidden')).toEqual(null);
      });
    });

    describe('OnRequestClose-Container Overlay', () => {
      it('should display closed Overlay', () => {
        Terra.validates.element('closed');
      });

      it('Clicks on Container Overlay', () => {
        $('#trigger_container').click();
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]')).toHaveAttr('inert', ['', 'true']); // chrome returns true, firefox returns ''
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]').getAttribute('aria-hidden')).toEqual('true');
      });

      it('Container Overlay- Background can scroll when Overlay relative to container is open', () => {
        expect($('html')).not.toHaveAttributeContaining('style', 'overflow: hidden');
      });

      it('should display an open Overlay', () => {
        Terra.validates.element('open', { selector: '#terra-Overlay--container' });
      });

      it('closes overlay on escape keydown', () => {
        browser.keys('Escape');
        $('#terra-Overlay--container').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST});
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]')).toHaveAttr('inert', [null, 'false']); // chrome returns false, firefox returns null
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]').getAttribute('aria-hidden')).toEqual(null);
      });

      it('reopens the overlay', () => {
        $('#trigger_container').click();
        $('#terra-Overlay--container').waitForExist();
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]')).toHaveAttr('inert', ['', 'true']); // chrome returns true, firefox returns ''
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]').getAttribute('aria-hidden')).toEqual('true');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        $('#terra-Overlay--container').click();
        $('#terra-Overlay--container').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST});
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]')).toHaveAttr('inert', [null, 'false']); // chrome returns false, firefox returns null
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]').getAttribute('aria-hidden')).toEqual(null);
      });
    });
  });

  describe('Custom Content', () => {
    before(() => browser.url('/raw/tests/terra-overlay/overlay/overlay/custom-content-overlay'));

    describe('Full Screen [Custom Content]', () => {
      it('opens fullscreen', () => {
        $('#trigger_fullscreen').click();
        Terra.validates.element('fullscreen', { selector: '#terra-Overlay--fullscreen' });
      });

      it('Custom Content under overlay is not clickable when Overlay is open', () => {
        expect(() => $('#random_button').click()).toThrow('not clickable');
      });

      it('closes fullscreen overlay', () => {
        $('#close_overlay').click();
        $('#terra-Overlay--fullscreen').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST});
      });
    });

    describe('Container [Custom Content]', () => {
      it('should open relative overlay', () => {
        $('#trigger_container').click();
        Terra.validates.element('relative container', { selector: '#custom-content-example' });
      });
    });

    describe('Custom Content under overlay container is clickable when overlay container is open', () => {
      it('clicks content on the page', () => {
        expect($('#random_state')).toHaveTextContaining('true');
        $('#random_button').click();
        expect($('#random_state')).toHaveTextContaining('false');
      });
    });
  });

  describe('Overlay unmounted', () => {
    before(() => browser.url('/raw/tests/terra-overlay/overlay/overlay/removed-overlay'));

    it('validates overlay exists and background scrolling is disabled', () => {
      $('#fullscreen_overlay').waitForExist();
      expect($('html')).toHaveAttributeContaining('style', 'overflow: hidden');
    });

    it('validates background scrolling is restored after overlay is unmounted', () => {
      $('#fullscreen_overlay').click();
      expect($('html')).not.toHaveAttributeContaining('style', 'overflow: hidden');
    });
  });

  describe('should display Themes', () => {
    it('displays light theme', () => {
      browser.url('/raw/tests/terra-overlay/overlay/overlay/light-overlay');
      Terra.validates.element('light theme', { selector: '#light-overlay' });
    });

    it('displays dark theme', () => {
      browser.url('/raw/tests/terra-overlay/overlay/overlay/dark-overlay');
      Terra.validates.element('dark theme', { selector: '#dark-overlay' });
    });

    it('displays clear theme', () => {
      browser.url('/raw/tests/terra-overlay/overlay/overlay/clear-overlay');
      Terra.validates.element('clear theme', { selector: '#clear-overlay' });
    });
  });
});
