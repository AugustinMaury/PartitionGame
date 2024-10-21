import random
import mido

def random_note_generator():
    notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b']
    octaves = ['4', '5']
    note = random.choice(notes)
    octave = random.choice(octaves)
    return f"{note}{octave}"

def note_from_midi_number(midi_number):
    note_names = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']
    octave = (midi_number // 12) - 1
    note = note_names[midi_number % 12]
    return f"{note}{octave}"

def get_notes_from_piano(port_name):
    active_notes = set()
    with mido.open_input(port_name) as inport:
        for msg in inport:
            if msg.type == 'note_on' and msg.velocity > 0:
                note_name = note_from_midi_number(msg.note)
                active_notes.add(note_name)
            elif msg.type == 'note_off' or (msg.type == 'note_on' and msg.velocity == 0):
                note_name = note_from_midi_number(msg.note)
                active_notes.discard(note_name)
            combined_notes = ''.join(sorted(active_notes)) if active_notes else ""
            return combined_notes
