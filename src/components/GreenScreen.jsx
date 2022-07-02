import { useEffect } from 'react';
import './GreenScreen.css';

const GreenScreen = () => {
  useEffect(() => {
    let processor = {
      timerCallback: function () {
        if (this.video.paused || this.video.ended) {
          return;
        }
        this.computeFrame();
        let self = this;
        setTimeout(function () {
          self.timerCallback();
        }, 0);
      },

      doLoad: function () {
        this.video = document.getElementById('video');
        this.c1 = document.getElementById('c1');
        this.ctx1 = this.c1.getContext('2d');
        this.c2 = document.getElementById('c2');
        this.ctx2 = this.c2.getContext('2d');
        let self = this;
        this.video.addEventListener(
          'play',
          function () {
            console.log('doload play event');
            self.width = self.video.videoWidth / 2;
            self.height = self.video.videoHeight / 2;
            self.timerCallback();
          },
          false
        );
      },

      computeFrame: function () {
        this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
        let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
        let l = frame.data.length / 4;

        for (let i = 0; i < l; i++) {
          let r = frame.data[i * 4 + 0];
          let g = frame.data[i * 4 + 1];
          let b = frame.data[i * 4 + 2];
          console.log('r', r, 'g', g, 'b', b);
          if (g > 100 && r > 100 && b < 43) frame.data[i * 4 + 3] = 0;
        }
        this.ctx2.putImageData(frame, 0, 0);
        return;
      },
    };

    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded');
      processor.doLoad();
    });

    return () => {
      console.log('Dont Forget to Claenup!');
    };
  }, []);

  return (
    <div>
      <div>
        <video id="video" src="assets/gs-confetti.mp4" controls />
      </div>
      <div>
        <canvas id="c1" width="160" height="96"></canvas>
        <canvas id="c2" width="160" height="96"></canvas>
      </div>
    </div>
  );
};

export default GreenScreen;
