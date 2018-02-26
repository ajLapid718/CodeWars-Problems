/*

In Western music, a major chord (major third) starts at a root note and adds the note 4 semitones and 7 semitones above it.

A minor chord (minor third) starts at a root note and adds the note 3 semitones and 7 semitones above it.

Given a root note root, please return an array of the major chord and the minor chord for that root.

The notes are C, C#, D, D#, E, F, F#, G, G#, A, A#, B –– you are given this as a constant

*/

let cloneOfNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const notes = cloneOfNotes.concat(cloneOfNotes);

function chords(root) {
  let rootIdx = notes.indexOf(root);
  let majorChord = [root, notes[rootIdx + 4], notes[rootIdx + 7]];
  let minorChord = [root, notes[rootIdx + 3], notes[rootIdx + 7]];

  return [majorChord, minorChord];
}
