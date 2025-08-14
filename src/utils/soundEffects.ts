class SoundManager {
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private enabled: boolean = true;
  private volume: number = 0.3; // Very subtle volume

  constructor() {
    // Check if user has previously disabled sounds
    const savedPreference = localStorage.getItem('soundEnabled');
    this.enabled = savedPreference !== 'false';
    
    // Initialize sounds using data URLs for small sound effects
    this.initializeSounds();
  }

  private initializeSounds() {
    // Create very short, subtle sound effects using Web Audio API
    this.createToneSound('click', 800, 0.1); // High pitch, very short
    this.createToneSound('hover', 600, 0.05); // Lower pitch, even shorter
    this.createToneSound('success', 1000, 0.15); // Success tone
    this.createToneSound('pop', 400, 0.08); // Pop sound
  }

  private createToneSound(name: string, frequency: number, duration: number) {
    try {
      // Create AudioContext
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create oscillator
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = 'sine';
      
      // Create envelope for smooth sound
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(this.volume * 0.1, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
      
      // Store the function to play this sound
      this.sounds[name] = {
        play: () => {
          if (!this.enabled) return;
          
          try {
            const newOscillator = audioContext.createOscillator();
            const newGainNode = audioContext.createGain();
            
            newOscillator.connect(newGainNode);
            newGainNode.connect(audioContext.destination);
            
            newOscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            newOscillator.type = 'sine';
            
            newGainNode.gain.setValueAtTime(0, audioContext.currentTime);
            newGainNode.gain.linearRampToValueAtTime(this.volume * 0.1, audioContext.currentTime + 0.01);
            newGainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
            
            newOscillator.start(audioContext.currentTime);
            newOscillator.stop(audioContext.currentTime + duration);
          } catch (error) {
            console.warn('Sound effect failed:', error);
          }
        }
      } as any;
    } catch (error) {
      console.warn('Web Audio API not supported:', error);
      // Fallback: create silent audio element
      this.sounds[name] = { play: () => {} } as any;
    }
  }

  play(soundName: string) {
    if (!this.enabled || !this.sounds[soundName]) return;
    
    try {
      this.sounds[soundName].play();
    } catch (error) {
      console.warn(`Failed to play sound: ${soundName}`, error);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('soundEnabled', this.enabled.toString());
    
    // Play a confirmation sound when enabling
    if (this.enabled) {
      setTimeout(() => this.play('success'), 100);
    }
    
    return this.enabled;
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
  }

  isEnabled() {
    return this.enabled;
  }
}

// Create global instance
export const soundManager = new SoundManager();

// Convenience functions
export const playSound = (soundName: string) => soundManager.play(soundName);
export const toggleSounds = () => soundManager.toggle();
export const isSoundEnabled = () => soundManager.isEnabled();