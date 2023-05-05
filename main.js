import './style.css'
// Import Tone.js Library
import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();
const now = Tone.now()

// Retrieve keys with document.querySelector and add Event Listeners.

document.querySelector('#C-1')?.addEventListener('click', async () => {
  await Tone.start()
  synth.triggerAttackRelease("C4", 1)

})

document.querySelector('#D')?.addEventListener('click', async () => {
  await Tone.start()
  synth.triggerAttackRelease("D4", .1)
})                    

document.querySelector('#E')?.addEventListener('click', async () => {
  await Tone.start()
  synth.triggerAttackRelease("E4", .1)
})            

document.querySelector('#F')?.addEventListener('click', async () => {
  await Tone.start()
  synth.triggerAttackRelease("F4", .1)
})            

document.querySelector('#G')?.addEventListener('click', async () => {
  await Tone.start()
  synth.triggerAttackRelease("G4", .1)
})            

document.querySelector('#A')?.addEventListener('click', async () => {
  await Tone.start()
  synth.triggerAttackRelease("A4", .1)
})      

document.querySelector('#B')?.addEventListener('click', async () => {
  await Tone.start()
  synth.triggerAttackRelease("B4", .1)
})      

document.querySelector('#C-2')?.addEventListener('click', async () => {
  await Tone.start()
  synth.triggerAttackRelease("C5", .1)
})            