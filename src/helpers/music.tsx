export enum NotePitch {
    Ab,
    A,
    Bb,
    B,
    C,
    Db,
    D,
    Eb,
    E,
    F,
    Gb,
    G
}

export const notes = [
    NotePitch.Ab,
    NotePitch.A,
    NotePitch.Bb,
    NotePitch.B,
    NotePitch.C,
    NotePitch.Db,
    NotePitch.D,
    NotePitch.Eb,
    NotePitch.E,
    NotePitch.F,
    NotePitch.Gb,
    NotePitch.G,
];

export const toString = (notePitch: NotePitch) => {
    return {
        [NotePitch.Ab]: 'Ab',
        [NotePitch.A]: 'A',
        [NotePitch.Bb]: 'Bb',
        [NotePitch.B]: 'B',
        [NotePitch.C]: 'C',
        [NotePitch.Db]: 'Db',
        [NotePitch.D]: 'D',
        [NotePitch.Eb]: 'Eb',
        [NotePitch.E]: 'E',
        [NotePitch.F]: 'F',
        [NotePitch.Gb]: 'Gb',
        [NotePitch.G]: 'G',
    }[notePitch];
};


export class Note {
    constructor(
        public readonly pitch: NotePitch,
    ) { }

    root() {
        return new Note(this.pitch);
    }

    minorThird() {
        return this.shiftBySemitones(3);
    }

    majorThird() {
        return this.shiftBySemitones(4);
    }

    fifth() {
        return this.shiftBySemitones(7);
    }

    private shiftBySemitones(amountOfSemitones: number) {
        const pitchIndex = notes.indexOf(this.pitch);
        const shiftedINdex =
            notes[(pitchIndex + amountOfSemitones) % notes.length];
        return new Note(shiftedINdex);
    }
}
