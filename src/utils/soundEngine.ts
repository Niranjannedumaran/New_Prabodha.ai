/**
 * Prabodha AI — Web Audio API Synthesizer Engine
 * 
 * Generates zero-dependency acoustic micro-feedback using native Web Audio.
 * Strictly muted by default. Respects user autonomy and battery performance.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('prabodha_sound_enabled');
        this.isEnabled = saved === 'true'; // strictly false by default
      } catch {
        this.isEnabled = false;
      }
    }
  }

  private initContext() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public get enabled(): boolean {
    return this.isEnabled;
  }

  public set enabled(val: boolean) {
    this.isEnabled = val;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('prabodha_sound_enabled', String(val));
      } catch {}
      if (val) {
        this.initContext();
        this.playPop(); // playful confirmation on enable
      }
    }
  }

  /**
   * Subtle micro-tick for navigation pills, tabs, and interactive buttons
   */
  public playTick(frequency = 960, duration = 0.03) {
    if (!this.isEnabled || typeof window === 'undefined') return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {}
  }

  /**
   * Soft melodic chime for stage progression, modal launches, or invariant proofs
   */
  public playPop(frequency = 540, duration = 0.08) {
    if (!this.isEnabled || typeof window === 'undefined') return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {}
  }

  /**
   * Light resonance chime for Socratic Invariant crystallization
   */
  public playCrystal() {
    if (!this.isEnabled || typeof window === 'undefined') return;
    try {
      this.initContext();
      if (!this.ctx) return;
      [660, 880, 1320].forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        const start = this.ctx!.currentTime + idx * 0.04;
        const dur = 0.14;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.03, start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(start);
        osc.stop(start + dur);
      });
    } catch {}
  }
}

export const soundEngine = new SoundEngine();

